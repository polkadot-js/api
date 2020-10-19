// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyJson } from '@polkadot/types/types';
import { ChainProperties, ContractConstructorSpec, ContractMessageSpec, ContractProject } from '@polkadot/types/interfaces';
import { AbiConstructor, AbiMessage, AbiMessageParam } from './types';

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
      this.#createBase(spec, index, {
        isConstructor: true
      })
    );
    this.messages = this.project.spec.messages.map((spec: ContractMessageSpec, index): AbiMessage => {
      const typeSpec = spec.returnType.unwrapOr(null);

      return this.#createBase(spec, index, {
        isMutating: spec.mutates.isTrue,
        isPayable: spec.payable.isTrue,
        returnType: typeSpec
          ? this.registry.getMetaTypeDef(typeSpec.type)
          : null
      });
    });
  }

  public findConstructor (constructorOrId: AbiConstructor | string | number): AbiConstructor {
    return findMessage(this.constructors, constructorOrId);
  }

  public findMessage (messageOrId: AbiMessage | string | number): AbiMessage {
    return findMessage(this.messages, messageOrId);
  }

  #createBase = (spec: ContractMessageSpec | ContractConstructorSpec, index: number, add: Partial<AbiMessage> = {}): AbiMessage => {
    const identifier = spec.name.toString();
    const args = spec.args.map((arg, index): AbiMessageParam => {
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

    return {
      ...add,
      args,
      docs: spec.docs.map((doc) => doc.toString()),
      identifier,
      index,
      selector: spec.selector
    };
  }
}
