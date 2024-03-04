// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes, Vec } from '@polkadot/types';
import type { ChainProperties, ContractConstructorSpecLatest, ContractEventParamSpecLatest, ContractMessageParamSpecLatest, ContractMessageSpecLatest, ContractMetadata, ContractMetadataV4, ContractMetadataV5, ContractProjectInfo, ContractTypeSpec, EventRecord } from '@polkadot/types/interfaces';
import type { Codec, Registry, TypeDef } from '@polkadot/types/types';
import type { AbiConstructor, AbiEvent, AbiEventParam, AbiMessage, AbiMessageParam, AbiParam, DecodedEvent, DecodedMessage } from '../types.js';

import { Option, TypeRegistry } from '@polkadot/types';
import { TypeDefInfo } from '@polkadot/types-create';
import { assertReturn, compactAddLength, compactStripLength, isBn, isNumber, isObject, isString, isUndefined, logger, stringCamelCase, stringify, u8aConcat, u8aToHex } from '@polkadot/util';

import { convertVersions, enumVersions } from './toLatestCompatible.js';

interface AbiJson {
  version?: string;

  [key: string]: unknown;
}

type EventOf<M> = M extends {spec: { events: Vec<infer E>}} ? E : never
export type ContractMetadataSupported = ContractMetadataV4 | ContractMetadataV5;
type ContractEventSupported = EventOf<ContractMetadataSupported>;

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

function getMetadata (registry: Registry, json: AbiJson): ContractMetadataSupported {
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
    throw new Error(`Unable to convert ABI with version ${metadata.type} to a supported version`);
  }

  const upgradedMetadata = converter[1](registry, metadata[`as${converter[0]}`]);

  return upgradedMetadata;
}

function parseJson (json: Record<string, unknown>, chainProperties?: ChainProperties): [Record<string, unknown>, Registry, ContractMetadataSupported, ContractProjectInfo] {
  const registry = new TypeRegistry();
  const info = registry.createType('ContractProjectInfo', json) as unknown as ContractProjectInfo;
  const metadata = getMetadata(registry, json as unknown as AbiJson);
  const lookup = registry.createType('PortableRegistry', { types: metadata.types }, true);

  // attach the lookup to the registry - now the types are known
  registry.setLookup(lookup);

  if (chainProperties) {
    registry.setChainProperties(chainProperties);
  }

  // warm-up the actual type, pre-use
  lookup.types.forEach(({ id }) =>
    lookup.getTypeDef(id)
  );

  return [json, registry, metadata, info];
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
  readonly metadata: ContractMetadataSupported;
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
    this.events = this.metadata.spec.events.map((_: ContractEventSupported, index: number) =>
      this.#createEvent(index)
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
  public decodeEvent (record: EventRecord): DecodedEvent {
    switch (this.metadata.version.toString()) {
      // earlier version are hoisted to v4
      case '4':
        return this.#decodeEventV4(record);
      // Latest
      default:
        return this.#decodeEventV5(record);
    }
  }

  #decodeEventV5 = (record: EventRecord): DecodedEvent => {
    // Find event by first topic, which potentially is the signature_topic
    const signatureTopic = record.topics[0];
    const data = record.event.data[1] as Bytes;

    if (signatureTopic) {
      const event = this.events.find((e) => e.signatureTopic !== undefined && e.signatureTopic !== null && e.signatureTopic === signatureTopic.toHex());

      // Early return if event found by signature topic
      if (event) {
        return event.fromU8a(data);
      }
    }

    // If no event returned yet, it might be anonymous
    const amountOfTopics = record.topics.length;
    const potentialEvents = this.events.filter((e) => {
      // event can't have a signature topic
      if (e.signatureTopic !== null && e.signatureTopic !== undefined) {
        return false;
      }

      // event should have same amount of indexed fields as emitted topics
      const amountIndexed = e.args.filter((a) => a.indexed).length;

      if (amountIndexed !== amountOfTopics) {
        return false;
      }

      // If all conditions met, it's a potential event
      return true;
    });

    if (potentialEvents.length === 1) {
      return potentialEvents[0].fromU8a(data);
    }

    throw new Error('Unable to determine event');
  };

  #decodeEventV4 = (record: EventRecord): DecodedEvent => {
    const data = record.event.data[1] as Bytes;
    const index = data[0];
    const event = this.events[index];

    if (!event) {
      throw new Error(`Unable to find event with index ${index}`);
    }

    return event.fromU8a(data.subarray(1));
  };

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

  #createArgs = (args: ContractMessageParamSpecLatest[] | ContractEventParamSpecLatest[], spec: unknown): AbiParam[] => {
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

  #createMessageParams = (args: ContractMessageParamSpecLatest[], spec: unknown): AbiMessageParam[] => {
    return this.#createArgs(args, spec);
  };

  #createEventParams = (args: ContractEventParamSpecLatest[], spec: unknown): AbiEventParam[] => {
    const params = this.#createArgs(args, spec);

    return params.map((p, index): AbiEventParam => ({ ...p, indexed: args[index].indexed.toPrimitive() }));
  };

  #createEvent = (index: number): AbiEvent => {
    // TODO TypeScript would narrow this type to the correct version,
    // but version is `Text` so I need to call `toString()` here,
    // which breaks the type inference.
    switch (this.metadata.version.toString()) {
      case '4':
        return this.#createEventV4((this.metadata as ContractMetadataV4).spec.events[index], index);
      default:
        return this.#createEventV5((this.metadata as ContractMetadataV5).spec.events[index], index);
    }
  };

  #createEventV5 = (spec: EventOf<ContractMetadataV5>, index: number): AbiEvent => {
    const args = this.#createEventParams(spec.args, spec);
    const event = {
      args,
      docs: spec.docs.map((d) => d.toString()),
      fromU8a: (data: Uint8Array): DecodedEvent => ({
        args: this.#decodeArgs(args, data),
        event
      }),
      identifier: [spec.module_path, spec.label].join('::'),
      index,
      signatureTopic: spec.signature_topic.isSome ? spec.signature_topic.unwrap().toHex() : null
    };

    return event;
  };

  #createEventV4 = (spec: EventOf<ContractMetadataV4>, index: number): AbiEvent => {
    const args = this.#createEventParams(spec.args, spec);
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
    const args = this.#createMessageParams(spec.args, spec);
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
        this.#encodeMessageArgs(spec, args, params)
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

  #encodeMessageArgs = ({ label, selector }: ContractMessageSpecLatest | ContractConstructorSpecLatest, args: AbiMessageParam[], data: unknown[]): Uint8Array => {
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
