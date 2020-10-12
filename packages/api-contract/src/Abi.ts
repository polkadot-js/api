// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyJson } from '@polkadot/types/types';
import { InkConstructorSpec, InkMessageSpec } from '@polkadot/types/interfaces';
import { AbiConstructor, AbiMessage, AbiMessageParam } from './types';

import { assert, isNumber, isObject, isString, stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';

export default class Abi extends ContractRegistry {
  public readonly constructors: AbiConstructor[];

  public readonly json: AnyJson;

  public readonly messages: AbiMessage[];

  constructor (_json: AnyJson) {
    const json = isString(_json)
      ? JSON.parse(_json) as AnyJson
      : _json;

    assert(isObject(json) && !Array.isArray(json) && json.metadataVersion && isObject(json.spec) && !Array.isArray(json.spec) && Array.isArray(json.spec.constructors) && Array.isArray(json.spec.messages), 'Invalid JSON ABI structure supplied, expected a recent metadata version');

    super(json);

    this.constructors = this.project.spec.constructors.map((spec: InkConstructorSpec, index) =>
      this._createBase(spec, index, {
        isConstructor: true
      })
    );
    this.messages = this.project.spec.messages.map((spec: InkMessageSpec, index): AbiMessage => {
      const typeSpec = spec.returnType.unwrapOr(null);

      return this._createBase(spec, index, {
        isMutating: spec.mutates.isTrue,
        isPayable: spec.payable.isTrue,
        returnType: typeSpec
          ? this.typeDefAt(typeSpec.type, { displayName: typeSpec.displayName.map((s) => s.toString()).join('::') || undefined })
          : null
      });
    });
  }

  public findConstructor (constructorOrId: AbiConstructor | string | number): AbiConstructor {
    const message = isNumber(constructorOrId)
      ? this.constructors[constructorOrId]
      : isString(constructorOrId)
        ? this.constructors.find(({ identifier }) => identifier === constructorOrId.toString())
        : constructorOrId;

    assert(message, `Attempted to call an invalid contract message, ${JSON.stringify(constructorOrId)}`);

    return message;
  }

  public findMessage (messageOrId: AbiMessage | string | number): AbiMessage {
    const message = isNumber(messageOrId)
      ? this.messages[messageOrId]
      : isString(messageOrId)
        ? this.messages.find(({ identifier }) => identifier === messageOrId.toString())
        : messageOrId;

    assert(message, `Attempted to call an invalid contract message, ${JSON.stringify(messageOrId)}`);

    return message;
  }

  private _createBase (spec: InkMessageSpec | InkConstructorSpec, index: number, add: Partial<AbiMessage> = {}): AbiMessage {
    const identifier = spec.name.toString();
    const args = spec.args.map((arg, index): AbiMessageParam => {
      try {
        assert(isObject(arg.type), 'Invalid type definition found');

        return {
          name: stringCamelCase(arg.name.toString()),
          type: this.typeDefAt(arg.type.type)
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
