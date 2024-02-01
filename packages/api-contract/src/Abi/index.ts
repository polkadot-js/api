// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '@polkadot/types';
import type { ChainProperties, ContractConstructorSpecLatest, ContractEventSpecLatest, ContractMessageParamSpecLatest, ContractMessageSpecLatest, ContractMetadata, ContractMetadataLatest, ContractProjectInfo, ContractTypeSpec, EventRecord, Hash } from '@polkadot/types/interfaces';
import type { Codec, Registry, TypeDef } from '@polkadot/types/types';
import type { AbiConstructor, AbiEvent, AbiMessage, AbiParam, DecodedEvent, DecodedMessage } from '../types.js';

import { Option, TypeRegistry } from '@polkadot/types';
import { TypeDefInfo } from '@polkadot/types-create';
import { assertReturn, compactAddLength, compactStripLength, isBn, isNumber, isObject, isString, isUndefined, logger, stringCamelCase, stringify, u8aConcat, u8aToHex } from '@polkadot/util';

import { convertVersions, enumVersions } from './toLatest.js';

interface AbiJson {
  version?: string;

  [key: string]: unknown;
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

function getLatestMeta (registry: Registry, json: AbiJson): ContractMetadataLatest {
  // this is for V1, V2, V3
  const vx = enumVersions.find((v) => isObject(json[v]));

  // this was added in V4
  const jsonVersion = json.version;

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
  const latest = getLatestMeta(registry, json as unknown as AbiJson);
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

/**
 * @internal
 * Determines if the given input value is a ContractTypeSpec
 */
function isTypeSpec (value: Codec): value is ContractTypeSpec {
  return !!value && value instanceof Map && !isUndefined((value as ContractTypeSpec).type) && !isUndefined((value as ContractTypeSpec).displayName);
}

/**
 * @internal
 * Determines if the given input value is an Option
 */
function isOption (value: Codec): value is Option<Codec> {
  return !!value && value instanceof Option;
}

export class Abi {
  readonly events: AbiEvent[];
  readonly constructors: AbiConstructor[];
  readonly info: ContractProjectInfo;
  readonly json: Record<string, unknown>;
  readonly messages: AbiMessage[];
  readonly metadata: ContractMetadataLatest;
  readonly registry: Registry;
  readonly environment = new Map<string, TypeDef | Codec>();

  constructor (abiJson: Record<string, unknown> | string, chainProperties?: ChainProperties) {
    [this.json, this.registry, this.metadata, this.info] = parseJson(
      isString(abiJson)
        ? JSON.parse(abiJson) as Record<string, unknown>
        : abiJson,
      chainProperties
    );
    this.constructors = this.metadata.spec.constructors.map((spec: ContractConstructorSpecLatest, index) =>
      this.#createMessage(spec, index, {
        isConstructor: true,
        isDefault: spec.default.isTrue,
        isPayable: spec.payable.isTrue,
        returnType: spec.returnType.isSome
          ? this.registry.lookup.getTypeDef(spec.returnType.unwrap().type)
          : null
      })
    );
    this.events = this.metadata.spec.events.map((spec: ContractEventSpecLatest, index) =>
      this.#createEvent(spec, index)
    );
    this.messages = this.metadata.spec.messages.map((spec: ContractMessageSpecLatest, index): AbiMessage =>
      this.#createMessage(spec, index, {
        isDefault: spec.default.isTrue,
        isMutating: spec.mutates.isTrue,
        isPayable: spec.payable.isTrue,
        returnType: spec.returnType.isSome
          ? this.registry.lookup.getTypeDef(spec.returnType.unwrap().type)
          : null
      })
    );

    // NOTE See the rationale for having Option<...> values in the actual
    // ContractEnvironmentV4 structure definition in interfaces/contractsAbi
    // (Due to conversions, the fields may not exist)
    for (const [key, opt] of this.metadata.spec.environment.entries()) {
      if (isOption(opt)) {
        if (opt.isSome) {
          const value = opt.unwrap();

          if (isBn(value)) {
            this.environment.set(key, value);
          } else if (isTypeSpec(value)) {
            this.environment.set(key, this.registry.lookup.getTypeDef(value.type));
          } else {
            throw new Error(`Invalid environment definition for ${key}:: Expected either Number or ContractTypeSpec`);
          }
        }
      } else {
        throw new Error(`Expected Option<*> definition for ${key} in ContractEnvironment`);
      }
    }
  }

  /**
   * Warning: Unstable API, bound to change
   */
  public decodeEvent (data: Bytes | Uint8Array, topic:EventRecord['topics'][0]): DecodedEvent {
    // try to find a topic signature match - ink! v5 upwards
    let event = this.events.find(e=>e.signatureTopic === topic.toHex())
    if(event){
      return event.fromU8a(data.subarray(0));
    }

    // otherwise fallback to using the index to determine event - ink! v4 downwards
    const index = data[0];
    event = this.events[index];
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
      identifier: [spec.module_path, spec.label.toString()].join("::"),
      signatureTopic: spec.signature_topic.toHex() || undefined,
      index,
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
