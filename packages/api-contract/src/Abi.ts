// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyJson } from '@polkadot/types/types';
import { InkConstructorSpec, InkMessageSpec } from '@polkadot/types/interfaces';
import { AbiConstructor, AbiMessage, AbiMessageParam } from './types';

import { assert, isNumber, isObject, stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';

export default class Abi extends ContractRegistry {
  public readonly constructors: AbiConstructor[];

  public readonly messages: AbiMessage[];

  constructor (json: AnyJson) {
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

  public findConstructor (constructorOrIndex: AbiConstructor | number): AbiConstructor {
    const message = isNumber(constructorOrIndex)
      ? this.constructors[constructorOrIndex]
      : constructorOrIndex;

    assert(message, 'Attempted to call an invalid contract message');

    return message;
  }

  public findMessage (messageOrIndex: AbiMessage | number): AbiMessage {
    const message = isNumber(messageOrIndex)
      ? this.messages[messageOrIndex]
      : messageOrIndex;

    assert(message, 'Attempted to call an invalid contract message');

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
      selector: spec.selector.toString()
    };
  }
}
