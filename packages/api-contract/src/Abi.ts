// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '@polkadot/types';
import type { ContractConstructorSpec, ContractEventSpec, ContractMessageParamSpec, ContractMessageSpec, ContractProject, Si0Type, Si1Type } from '@polkadot/types/interfaces';
import type { AnyJson, Codec, Registry } from '@polkadot/types/types';
import type { AbiConstructor, AbiEvent, AbiMessage, AbiParam, DecodedEvent, DecodedMessage } from './types';

import { TypeRegistry } from '@polkadot/types';
import { convertSiV0toV1 } from '@polkadot/types/generic/PortableRegistry';
import { assert, assertReturn, compactAddLength, compactStripLength, isNumber, isObject, isString, logger, stringCamelCase, stringify, u8aConcat, u8aToHex } from '@polkadot/util';

const l = logger('Abi');

function findMessage <T extends AbiMessage> (list: T[], messageOrId: T | string | number): T {
  const message = isNumber(messageOrId)
    ? list[messageOrId]
    : isString(messageOrId)
      ? list.find(({ identifier }) => [identifier, stringCamelCase(identifier)].includes(messageOrId.toString()))
      : messageOrId;

  return assertReturn(message, () => `Attempted to call an invalid contract interface, ${stringify(messageOrId)}`);
}

export class Abi {
  readonly #events: AbiEvent[];

  public readonly constructors: AbiConstructor[];

  public readonly json: AnyJson;

  public readonly messages: AbiMessage[];

  public readonly project: ContractProject;

  public readonly registry: Registry;

  constructor (abiJson: AnyJson) {
    const json = isString(abiJson)
      ? JSON.parse(abiJson) as AnyJson
      : abiJson;

    assert(isObject(json) && !Array.isArray(json) && json.metadataVersion && isObject(json.spec) && !Array.isArray(json.spec) && Array.isArray(json.spec.constructors) && Array.isArray(json.spec.messages), 'Invalid JSON ABI structure supplied, expected a recent metadata version');

    this.json = json;
    this.registry = new TypeRegistry();

    const [majorVer] = (json.metadataVersion as string).split('.').map((n) => parseInt(n, 10));

    assert(majorVer <= 1, () => `Unable to handle contract with metadata version ${json.metadataVersion as string}`);

    const types = majorVer === 0
      ? convertSiV0toV1(this.registry, this.registry.createType('Vec<Si0Type>', json.types as unknown as Si0Type[]))
      : this.registry.createType('Vec<PortableType>', json.types as unknown as Si1Type[]);

    this.registry.setLookup(this.registry.createType('PortableRegistry', {
      types
    }));

    this.project = this.registry.createType('ContractProject', json);

    this.registry.lookup.types.forEach(({ id }) =>
      this.registry.lookup.getTypeDef(id.toNumber())
    );
    this.constructors = this.project.spec.constructors.map((spec: ContractConstructorSpec, index) =>
      this.#createMessage(spec, index, {
        isConstructor: true
      })
    );
    this.#events = this.project.spec.events.map((spec: ContractEventSpec, index) =>
      this.#createEvent(spec, index)
    );
    this.messages = this.project.spec.messages.map((spec: ContractMessageSpec, index): AbiMessage => {
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
    const event = this.#events[index];

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
    return args.map((arg, index): AbiParam => {
      try {
        assert(isObject(arg.type), 'Invalid type definition found');

        return {
          name: stringCamelCase(arg.name),
          type: this.registry.lookup.getTypeDef(arg.type.type)
        };
      } catch (error) {
        l.error(`Error expanding argument ${index} in ${stringify(spec)}`);

        throw error;
      }
    });
  }

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
  }

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
  }

  #decodeArgs = (args: AbiParam[], data: Uint8Array): Codec[] => {
    // for decoding we expect the input to be just the arg data, no selectors
    // no length added (this allows use with events as well)
    let offset = 0;

    return args.map(({ type }): Codec => {
      const value = this.registry.createType(type.type as 'Text', data.subarray(offset));

      offset += value.encodedLength;

      return value;
    });
  }

  #decodeMessage = (type: 'constructor' | 'message', list: AbiMessage[], data: Uint8Array): DecodedMessage => {
    const [, trimmed] = compactStripLength(data);
    const selector = trimmed.subarray(0, 4);
    const message = list.find((m) => m.selector.eq(selector));

    assert(message, `Unable to find ${type} with selector ${u8aToHex(selector)}`);

    return message.fromU8a(trimmed.subarray(4));
  }

  #encodeArgs = ({ name, selector }: ContractMessageSpec | ContractConstructorSpec, args: AbiParam[], data: unknown[]): Uint8Array => {
    assert(data.length === args.length, () => `Expected ${args.length} arguments to contract message '${name.toString()}', found ${data.length}`);

    return compactAddLength(
      u8aConcat(
        this.registry.createType('ContractSelector', selector).toU8a(),
        ...args.map(({ type }, index) => this.registry.createType(type.type as 'Text', data[index]).toU8a())
      )
    );
  }
}
