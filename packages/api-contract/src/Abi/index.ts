// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes, PortableRegistry } from '@polkadot/types';
import type { ChainProperties, ContractConstructorSpec, ContractEventSpec, ContractMessageParamSpec, ContractMessageSpec, ContractMetadataLatest, ContractProjectInfo } from '@polkadot/types/interfaces';
import type { AnyJson, Codec, Registry } from '@polkadot/types/types';
import type { AbiConstructor, AbiEvent, AbiMessage, AbiParam, DecodedEvent, DecodedMessage } from '../types';

import { TypeDefInfo, TypeRegistry } from '@polkadot/types';
import { assert, assertReturn, compactAddLength, compactStripLength, isNumber, isObject, isString, logger, stringCamelCase, stringify, u8aConcat, u8aToHex } from '@polkadot/util';

import { toLatest } from './toLatest';

interface V0AbiJson {
  metadataVersion: string;
  spec: {
    constructors: unknown[];
    events: unknown[];
    messages: unknown[];
  };
  types: unknown[];
}

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

function parseJson (json: AnyJson, chainProperties?: ChainProperties): [AnyJson, Registry, ContractMetadataLatest, ContractProjectInfo] {
  const registry = new TypeRegistry();
  const info = registry.createType('ContractProjectInfo', json);
  const metadata = registry.createType('ContractMetadata', isString((json as unknown as V0AbiJson).metadataVersion)
    ? { V0: json }
    : { V1: (json as Record<string, AnyJson>).V1 }
  );
  const latest = metadata.isV0
    ? toLatest(registry, metadata.asV0)
    : metadata.asV1;
  const lookup = registry.createType<PortableRegistry>('PortableRegistry', { types: latest.types });

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

  public readonly json: AnyJson;

  public readonly messages: AbiMessage[];

  public readonly metadata: ContractMetadataLatest;

  public readonly registry: Registry;

  constructor (abiJson: AnyJson, chainProperties?: ChainProperties) {
    [this.json, this.registry, this.metadata, this.info] = parseJson(
      isString(abiJson)
        ? JSON.parse(abiJson) as AnyJson
        : abiJson,
      chainProperties
    );
    this.constructors = this.metadata.spec.constructors.map((spec: ContractConstructorSpec, index) =>
      this.#createMessage(spec, index, {
        isConstructor: true
      })
    );
    this.events = this.metadata.spec.events.map((spec: ContractEventSpec, index) =>
      this.#createEvent(spec, index)
    );
    this.messages = this.metadata.spec.messages.map((spec: ContractMessageSpec, index): AbiMessage => {
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

  #createArgs = (args: ContractMessageParamSpec[], spec: unknown): AbiParam[] => {
    return args.map(({ name, type }, index): AbiParam => {
      try {
        assert(isObject(type), 'Invalid type definition found');

        const displayName = type.displayName.length
          ? type.displayName[type.displayName.length - 1].toString()
          : undefined;
        const camelName = stringCamelCase(name);

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

  #createEvent = (spec: ContractEventSpec, index: number): AbiEvent => {
    const args = this.#createArgs(spec.args, spec);
    const event = {
      args,
      docs: spec.docs.map((d) => d.toString()),
      fromU8a: (data: Uint8Array): DecodedEvent => ({
        args: this.#decodeArgs(args, data),
        event
      }),
      identifier: spec.name.toString(),
      index
    };

    return event;
  };

  #createMessage = (spec: ContractMessageSpec | ContractConstructorSpec, index: number, add: Partial<AbiMessage> = {}): AbiMessage => {
    const args = this.#createArgs(spec.args, spec);
    const identifier = spec.name.toString();
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

  #encodeArgs = ({ name, selector }: ContractMessageSpec | ContractConstructorSpec, args: AbiParam[], data: unknown[]): Uint8Array => {
    assert(data.length === args.length, () => `Expected ${args.length} arguments to contract message '${name.toString()}', found ${data.length}`);

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
