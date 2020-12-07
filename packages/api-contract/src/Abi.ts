// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '@polkadot/types';
import type { ChainProperties, ContractConstructorSpec, ContractEventSpec, ContractMessageParamSpec, ContractMessageSpec, ContractProject } from '@polkadot/types/interfaces';
import type { AnyJson, Codec, CodecArg } from '@polkadot/types/types';
import type { AbiConstructor, AbiEvent, AbiMessage, AbiParam, DecodedEvent, DecodedMessage } from './types';

import { assert, assertReturn, compactAddLength, compactStripLength, isNumber, isObject, isString, logger, stringCamelCase, u8aConcat, u8aToHex } from '@polkadot/util';

import { MetaRegistry } from './MetaRegistry';

const EMPTY_U8A = new Uint8Array();

const l = logger('Abi');

function findMessage <T extends AbiMessage> (list: T[], messageOrId: T | string | number): T {
  const message = isNumber(messageOrId)
    ? list[messageOrId]
    : isString(messageOrId)
      ? list.find(({ identifier }) => [identifier, stringCamelCase(identifier)].includes(messageOrId.toString()))
      : messageOrId;

  return assertReturn(message, `Attempted to call an invalid contract interface, ${JSON.stringify(messageOrId)}`);
}

export class Abi {
  readonly #events: AbiEvent[];

  public readonly constructors: AbiConstructor[];

  public readonly json: AnyJson;

  public readonly messages: AbiMessage[];

  public readonly project: ContractProject;

  public readonly registry: MetaRegistry;

  constructor (abiJson: AnyJson, chainProperties?: ChainProperties) {
    const json = isString(abiJson)
      ? JSON.parse(abiJson) as AnyJson
      : abiJson;

    assert(isObject(json) && !Array.isArray(json) && json.metadataVersion && isObject(json.spec) && !Array.isArray(json.spec) && Array.isArray(json.spec.constructors) && Array.isArray(json.spec.messages), 'Invalid JSON ABI structure supplied, expected a recent metadata version');

    this.json = json;
    this.registry = new MetaRegistry(chainProperties);
    this.project = this.registry.createType('ContractProject', json);

    this.registry.setMetaTypes(this.project.types);

    this.project.types.forEach((_, index) =>
      this.registry.getMetaTypeDef({ type: this.registry.createType('SiLookupTypeId', index + 1) })
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
          ? this.registry.getMetaTypeDef(typeSpec)
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

    assert(event, `Unable to find event with index ${index}`);

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
          type: this.registry.getMetaTypeDef(arg.type)
        };
      } catch (error) {
        l.error(`Error expanding argument ${index} in ${JSON.stringify(spec)}`);

        throw error;
      }
    });
  }

  #createEvent = (spec: ContractEventSpec, index: number): AbiEvent => {
    const args = this.#createArgs(spec.args, spec);
    const event = {
      args,
      docs: spec.docs.map((doc) => doc.toString()),
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
    const message = {
      ...add,
      args,
      docs: spec.docs.map((doc) => doc.toString()),
      fromU8a: (data: Uint8Array): DecodedMessage => ({
        args: this.#decodeArgs(args, data),
        message
      }),
      identifier: spec.name.toString(),
      index,
      selector: spec.selector,
      toU8a: (params: CodecArg[], additional?: Uint8Array) =>
        this.#encodeArgs(spec, args, params, additional)
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

  #encodeArgs = ({ name, selector }: ContractMessageSpec | ContractConstructorSpec, args: AbiParam[], data: CodecArg[], additional = EMPTY_U8A): Uint8Array => {
    assert(data.length === args.length, `Expected ${args.length} arguments to contract message '${name.toString()}', found ${data.length}`);

    return compactAddLength(
      u8aConcat(
        this.registry.createType('ContractSelector', selector).toU8a(),
        ...args.map(({ type }, index) => this.registry.createType(type.type as 'Text', data[index]).toU8a()),
        additional
      )
    );
  }
}
