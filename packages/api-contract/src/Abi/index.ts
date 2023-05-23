// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '@polkadot/types';
import type { ChainProperties, ContractConstructorSpecLatest, ContractEventSpecLatest, ContractMessageParamSpecLatest, ContractMessageSpecLatest, ContractMetadata, ContractMetadataLatest, ContractProjectInfo } from '@polkadot/types/interfaces';
import type { Codec, Registry, TypeDef } from '@polkadot/types/types';
import type { AbiConstructor, AbiEvent, AbiMessage, AbiParam, DecodedEvent, DecodedMessage } from '../types.js';

import { TypeRegistry } from '@polkadot/types';
import { TypeDefInfo } from '@polkadot/types-create';
import { assertReturn, compactAddLength, compactStripLength, isNumber, isObject, isString, logger, stringCamelCase, stringify, u8aConcat, u8aToHex } from '@polkadot/util';

import { convertVersions, enumVersions } from './toLatest.js';

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

function getLatestMeta (registry: Registry, json: Record<string, unknown>): ContractMetadataLatest {
  // this is for V1, V2, V3
  const vx = enumVersions.find((v) => isObject(json[v]));

  // this was added in V4
  const jsonVersion = json.version as string;

  if (!vx && jsonVersion && !enumVersions.find((v) => v === `V${jsonVersion}`)) {
    throw new Error(`Unable to handle version ${jsonVersion}`);
  }

  const metadata = registry.createType<ContractMetadata>('ContractMetadata',
    vx
      ? { [vx]: json[vx] }
      : jsonVersion
        ? { [`V${jsonVersion}`]: json }
        : { V0: json }
  );
  const converter = convertVersions.find(([v]) => metadata[`is${v}`]);

  if (!converter) {
    throw new Error(`Unable to convert ABI with version ${metadata.type} to latest`);
  }

  return converter[1](registry, metadata[`as${converter[0]}`]);
}

function parseJson (json: Record<string, unknown>, chainProperties?: ChainProperties): [Record<string, unknown>, Registry, ContractMetadataLatest, ContractProjectInfo] {
  const registry = new TypeRegistry();
  const info = registry.createType('ContractProjectInfo', json) as unknown as ContractProjectInfo;
  const latest = getLatestMeta(registry, json);
  const lookup = registry.createType('PortableRegistry', { types: latest.types }, true);

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
  readonly events: AbiEvent[];
  readonly constructors: AbiConstructor[];
  readonly info: ContractProjectInfo;
  readonly json: Record<string, unknown>;
  readonly messages: AbiMessage[];
  readonly metadata: ContractMetadataLatest;
  readonly registry: Registry;
  readonly environment: Map<string, TypeDef | number> = new Map();

  constructor (abiJson: Record<string, unknown> | string, chainProperties?: ChainProperties) {
    [this.json, this.registry, this.metadata, this.info] = parseJson(
      isString(abiJson)
        ? JSON.parse(abiJson) as Record<string, unknown>
        : abiJson,
      chainProperties
    );
    this.constructors = this.metadata.spec.constructors.map((spec: ContractConstructorSpecLatest, index) => {
      const typeSpec = spec.returnType.unwrapOr(null);

      return this.#createMessage(spec, index, {
        isConstructor: true,
        isDefault: spec.default.isTrue,
        isPayable: spec.payable.isTrue,
        returnType: typeSpec
          ? this.registry.lookup.getTypeDef(typeSpec.type)
          : null
      });
    }
    );
    this.events = this.metadata.spec.events.map((spec: ContractEventSpecLatest, index) =>
      this.#createEvent(spec, index)
    );
    this.messages = this.metadata.spec.messages.map((spec: ContractMessageSpecLatest, index): AbiMessage => {
      const typeSpec = spec.returnType.unwrapOr(null);

      return this.#createMessage(spec, index, {
        isDefault: spec.default.isTrue,
        isMutating: spec.mutates.isTrue,
        isPayable: spec.payable.isTrue,
        returnType: typeSpec
          ? this.registry.lookup.getTypeDef(typeSpec.type)
          : null
      });
    });

    for (const [key, value] of this.metadata.spec.environment.entries()) {
      const typeSpec = value.toPrimitive();

      if (typeof typeSpec === 'object' && typeSpec !== null && 'type' in typeSpec) {
        this.environment.set(key, this.registry.lookup.getTypeDef(typeSpec.type as number));
      } else {
        this.environment.set(key, typeSpec as number);
      }
    }
  }

  /**
   * Warning: Unstable API, bound to change
   */
  public decodeEvent (data: Bytes | Uint8Array): DecodedEvent {
    const index = data[0];
    const event = this.events[index];

    if (!event) {
      throw new Error(`Unable to find event with index ${index}`);
    }

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
        if (!isObject(type)) {
          throw new Error('Invalid type definition found');
        }

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
      isDefault: spec.default.isTrue,
      method: stringCamelCase(identifier),
      path: identifier.split('::').map((s) => stringCamelCase(s)),
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

    if (!message) {
      throw new Error(`Unable to find ${type} with selector ${u8aToHex(selector)}`);
    }

    return message.fromU8a(trimmed.subarray(4));
  };

  #encodeArgs = ({ label, selector }: ContractMessageSpecLatest | ContractConstructorSpecLatest, args: AbiParam[], data: unknown[]): Uint8Array => {
    if (data.length !== args.length) {
      throw new Error(`Expected ${args.length} arguments to contract message '${label.toString()}', found ${data.length}`);
    }

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
