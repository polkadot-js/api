// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyJson, Codec } from '@polkadot/types/types';
import { ChainProperties, ContractConstructorSpec, ContractEventSpec, ContractMessageSpec, ContractMessageParamSpec, ContractProject } from '@polkadot/types/interfaces';
import { AbiConstructor, AbiEvent, AbiMessage, AbiParam, DecodedEvent } from './types';

import { assert, isNumber, isObject, isString, stringCamelCase } from '@polkadot/util';

import MetaRegistry from './MetaRegistry';

function findMessage <T extends AbiMessage> (list: T[], messageOrId: T | string | number): T {
  const message = isNumber(messageOrId)
    ? list[messageOrId]
    : isString(messageOrId)
      ? list.find(({ identifier }) => [identifier, stringCamelCase(identifier)].includes(messageOrId.toString()))
      : messageOrId;

  assert(message, `Attempted to call an invalid contract interface, ${JSON.stringify(messageOrId)}`);

  return message;
}

export default class Abi {
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

    this.project.types.forEach((_, index) => this.registry.getMetaTypeDef(this.registry.createType('SiLookupTypeId', index + 1)));
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
          ? this.registry.getMetaTypeDef(typeSpec.type)
          : null
      });
    });
  }

  /**
   * Warning: Unstable API, bound to change
   */
  public decodeEvent (eventU8a: Uint8Array): DecodedEvent {
    const index = eventU8a[0];
    const event = this.#events[index];

    assert(event, `Unable to find event with index ${index}`);

    let offset = 1;

    return {
      args: event.args.map(({ type }): Codec => {
        const value = this.registry.createType(type.type as 'Text', eventU8a.subarray(offset));

        offset += value.encodedLength;

        return value;
      }),
      event
    };
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
          name: stringCamelCase(arg.name.toString()),
          type: this.registry.getMetaTypeDef(arg.type.type)
        };
      } catch (error) {
        console.error(`Error expanding argument ${index} in ${JSON.stringify(spec)}`);

        throw error;
      }
    });
  }

  #createEvent = (spec: ContractEventSpec, index: number): AbiEvent => {
    return {
      args: this.#createArgs(spec.args, spec),
      docs: spec.docs.map((doc) => doc.toString()),
      identifier: spec.name.toString(),
      index
    };
  }

  #createMessage = (spec: ContractMessageSpec | ContractConstructorSpec, index: number, add: Partial<AbiMessage> = {}): AbiMessage => {
    return {
      ...add,
      args: this.#createArgs(spec.args, spec),
      docs: spec.docs.map((doc) => doc.toString()),
      identifier: spec.name.toString(),
      index,
      selector: spec.selector
    };
  }
}
