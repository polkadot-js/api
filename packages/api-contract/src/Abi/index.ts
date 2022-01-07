// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '@polkadot/types';
import type { ChainProperties, ContractConstructorSpecLatest, ContractEventSpecLatest, ContractMessageParamSpecLatest, ContractMessageSpecLatest, ContractMetadata, ContractMetadataLatest, ContractProjectInfo } from '@polkadot/types/interfaces';
import type { Codec, Registry } from '@polkadot/types/types';
import type { AbiConstructor, AbiEvent, AbiMessage, AbiParam, DecodedEvent, DecodedMessage } from '../types';

import { TypeRegistry } from '@polkadot/types';
import { TypeDefInfo } from '@polkadot/types-create';
import { assert, assertReturn, compactAddLength, compactStripLength, isNumber, isObject, isString, logger, stringCamelCase, stringify, u8aConcat, u8aToHex } from '@polkadot/util';

import { v0ToLatest, v1ToLatest } from './toLatest';

const l = logger('Abi');

const PRIMITIVE_ALWAYS = ['AccountId', 'AccountIndex', 'Address', 'Balance'];

function findMessage <T extends AbiMessage> (list: T[], messageOrId: T | string | number): T {
  const message = isNumber(messageOrId)
    ? list[messageOrId]
    : isString(messageOrId)
      ? list.find(({ identifier }) => [identifier, stringCamelCase(identifier)].includes(messageOrId.toString()))
      : messageOrId;

  return assertReturn(message, () => `Attempted to call an invalid contract interface, ${stringify(messageOrId)}`);
}

// FIXME: This is still workable with V0, V1 & V2, but certainly is not a scalable
// approach (right at this point don't quite have better ideas that is not as complex
// as the conversion tactics in the runtime Metadata)
function getLatestMeta (registry: Registry, json: Record<string, unknown>): ContractMetadataLatest {
  const metadata = registry.createType('ContractMetadata',
    isObject(json.V3)
      ? { V3: json.V3 }
      : isObject(json.V2)
        ? { V2: json.V2 }
        : isObject(json.V1)
          ? { V1: json.V1 }
          : { V0: json }
  ) as unknown as ContractMetadata;

  return metadata.isV2
    ? metadata.asV2
    : metadata.isV1
      ? v1ToLatest(registry, metadata.asV1)
      : v0ToLatest(registry, metadata.asV0);
}

function parseJson (json: Record<string, unknown>, chainProperties?: ChainProperties): [Record<string, unknown>, Registry, ContractMetadataLatest, ContractProjectInfo] {
  const registry = new TypeRegistry();
  const info = registry.createType('ContractProjectInfo', json) as unknown as ContractProjectInfo;
  const latest = getLatestMeta(registry, json);
  const lookup = registry.createType('PortableRegistry', { types: latest.types });

  // attach the lookup to the registry - now the types are known
  registry.setLookup(lookup);

  if (chainProperties) {
    registry.setChainProperties(chainProperties);
  }

  // warm-up the actual type, pre-use
  lookup.types.forEach(({ id }) =>
    lookup.getTypeDef(id)
  );

  return [json, registry, latest, info];
}

export class Abi {
  public readonly events: AbiEvent[];

  public readonly constructors: AbiConstructor[];

  public readonly info: ContractProjectInfo;

  public readonly json: Record<string, unknown>;

  public readonly messages: AbiMessage[];

  public readonly metadata: ContractMetadataLatest;

  public readonly registry: Registry;

  constructor (abiJson: Record<string, unknown> | string, chainProperties?: ChainProperties) {
    [this.json, this.registry, this.metadata, this.info] = parseJson(
      isString(abiJson)
        ? JSON.parse(abiJson) as Record<string, unknown>
        : abiJson,
      chainProperties
    );
    this.constructors = this.metadata.spec.constructors.map((spec: ContractConstructorSpecLatest, index) =>
      this.#createMessage(spec, index, {
        isConstructor: true
      })
    );
    this.events = this.metadata.spec.events.map((spec: ContractEventSpecLatest, index) =>
      this.#createEvent(spec, index)
    );
    this.messages = this.metadata.spec.messages.map((spec: ContractMessageSpecLatest, index): AbiMessage => {
      const typeSpec = spec.returnType.unwrapOr(null);

      return this.#createMessage(spec, index, {
        isMutating: spec.mutates.isTrue,
        isPayable: spec.payable.isTrue,
        returnType: typeSpec
          ? this.registry.lookup.getTypeDef(typeSpec.type)
          : null
      });
    });
  }

  /**
   * Warning: Unstable API, bound to change
   */
  public decodeEvent (data: Bytes | Uint8Array): DecodedEvent {
    const index = data[0];
    const event = this.events[index];

    assert(event, () => `Unable to find event with index ${index}`);

    return event.fromU8a(data.subarray(1));
  }

  /**
   * Warning: Unstable API, bound to change
   */
  public decodeConstructor (data: Uint8Array): DecodedMessage {
    return this.#decodeMessage('message', this.constructors, data);
  }

  /**
   * Warning: Unstable API, bound to change
   */
  public decodeMessage (data: Uint8Array): DecodedMessage {
    return this.#decodeMessage('message', this.messages, data);
  }

  public findConstructor (constructorOrId: AbiConstructor | string | number): AbiConstructor {
    return findMessage(this.constructors, constructorOrId);
  }

  public findMessage (messageOrId: AbiMessage | string | number): AbiMessage {
    return findMessage(this.messages, messageOrId);
  }

  #createArgs = (args: ContractMessageParamSpecLatest[], spec: unknown): AbiParam[] => {
    return args.map(({ label, type }, index): AbiParam => {
      try {
        assert(isObject(type), 'Invalid type definition found');

        const displayName = type.displayName.length
          ? type.displayName[type.displayName.length - 1].toString()
          : undefined;
        const camelName = stringCamelCase(label);

        if (displayName && PRIMITIVE_ALWAYS.includes(displayName)) {
          return {
            name: camelName,
            type: {
              info: TypeDefInfo.Plain,
              type: displayName
            }
          };
        }

        const typeDef = this.registry.lookup.getTypeDef(type.type);

        return {
          name: camelName,
          type: displayName && !typeDef.type.startsWith(displayName)
            ? { displayName, ...typeDef }
            : typeDef
        };
      } catch (error) {
        l.error(`Error expanding argument ${index} in ${stringify(spec)}`);

        throw error;
      }
    });
  };

  #createEvent = (spec: ContractEventSpecLatest, index: number): AbiEvent => {
    const args = this.#createArgs(spec.args, spec);
    const event = {
      args,
      docs: spec.docs.map((d) => d.toString()),
      fromU8a: (data: Uint8Array): DecodedEvent => ({
        args: this.#decodeArgs(args, data),
        event
      }),
      identifier: spec.label.toString(),
      index
    };

    return event;
  };

  #createMessage = (spec: ContractMessageSpecLatest | ContractConstructorSpecLatest, index: number, add: Partial<AbiMessage> = {}): AbiMessage => {
    const args = this.#createArgs(spec.args, spec);
    const identifier = spec.label.toString();
    const message = {
      ...add,
      args,
      docs: spec.docs.map((d) => d.toString()),
      fromU8a: (data: Uint8Array): DecodedMessage => ({
        args: this.#decodeArgs(args, data),
        message
      }),
      identifier,
      index,
      method: stringCamelCase(identifier),
      selector: spec.selector,
      toU8a: (params: unknown[]) =>
        this.#encodeArgs(spec, args, params)
    };

    return message;
  };

  #decodeArgs = (args: AbiParam[], data: Uint8Array): Codec[] => {
    // for decoding we expect the input to be just the arg data, no selectors
    // no length added (this allows use with events as well)
    let offset = 0;

    return args.map(({ type: { lookupName, type } }): Codec => {
      const value = this.registry.createType(lookupName || type, data.subarray(offset));

      offset += value.encodedLength;

      return value;
    });
  };

  #decodeMessage = (type: 'constructor' | 'message', list: AbiMessage[], data: Uint8Array): DecodedMessage => {
    const [, trimmed] = compactStripLength(data);
    const selector = trimmed.subarray(0, 4);
    const message = list.find((m) => m.selector.eq(selector));

    assert(message, `Unable to find ${type} with selector ${u8aToHex(selector)}`);

    return message.fromU8a(trimmed.subarray(4));
  };

  #encodeArgs = ({ label, selector }: ContractMessageSpecLatest | ContractConstructorSpecLatest, args: AbiParam[], data: unknown[]): Uint8Array => {
    assert(data.length === args.length, () => `Expected ${args.length} arguments to contract message '${label.toString()}', found ${data.length}`);

    return compactAddLength(
      u8aConcat(
        this.registry.createType('ContractSelector', selector).toU8a(),
        ...args.map(({ type: { lookupName, type } }, index) =>
          this.registry.createType(lookupName || type, data[index]).toU8a()
        )
      )
    );
  };
}
