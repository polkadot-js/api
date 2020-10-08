// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyJson, CodecArg, Constructor, Registry } from '@polkadot/types/types';
import { InkConstructorSpec, InkMessageSpec, InkTypeSpec } from '@polkadot/types/interfaces';
import { ContractConstructor, ContractMessageBase, ContractMessage, ContractMessageParam, ContractType } from './types';

import { Compact, createClass, encodeType } from '@polkadot/types';
import { assert, isObject, isUndefined, stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';

function createArgClass (registry: Registry, args: ContractMessageParam[], baseDef: Record<string, string>): Constructor {
  return createClass(
    registry,
    JSON.stringify(
      args.reduce((base: Record<string, any>, { name, type }): Record<string, any> => {
        base[name] = type.displayName || encodeType(type);

        return base;
      }, baseDef)
    )
  );
}

export default class Abi extends ContractRegistry {
  public readonly constructors: ContractConstructor[];

  public readonly messages: ContractMessage[];

  constructor (registry: Registry, json: AnyJson) {
    super(registry, json);

    [this.constructors, this.messages] = this._decodeProject();
  }

  private _createContractType (spec: InkTypeSpec | null): ContractType | null {
    return spec
      ? {
        displayName: spec.displayName.toString() || undefined,
        type: this.typeDefAt(spec.id)
      }
      : null;
  }

  private _createBase (identifier: string, spec: InkMessageSpec | InkConstructorSpec): ContractMessageBase {
    const args = spec.args.map(({ name, type }): ContractMessageParam => {
      assert(isObject(type), `Invalid type at index ${type.toString()}`);

      return {
        name: stringCamelCase(name.toString()),
        type: this.typeDefAt(type.id)
      };
    });

    const Clazz = createArgClass(this.registry, args, isUndefined(spec.selector) ? {} : { __selector: 'u32' });
    const baseStruct: { [index: string]: any } = { __selector: this.registry.createType('u32', spec.selector) };

    const fn = ((...params: CodecArg[]): Uint8Array => {
      assert(params.length === args.length, `Expected ${args.length} arguments to contract message '${identifier}', found ${params.length}`);

      const u8a = new Clazz(
        this.registry,
        args.reduce((mapped, { name }, index): Record<string, CodecArg> => {
          mapped[name] = params[index];

          return mapped;
        }, { ...baseStruct })
      ).toU8a();

      return Compact.addLengthPrefix(u8a);
    }) as ContractMessage;

    fn.args = args;
    fn.identifier = identifier;
    fn.docs = spec.docs.map((doc) => doc.toString());

    return fn;
  }

  private _createConstructor (identifier: string, spec: InkConstructorSpec): ContractConstructor {
    const fn = this._createBase(identifier, spec);

    fn.isConstructor = true;

    return fn;
  }

  private _createMessage (identifier: string, spec: InkMessageSpec): ContractMessage {
    const fn = this._createBase(identifier, spec) as ContractMessage;

    fn.isConstructor = false;
    fn.isMutating = spec.mutates.isTrue;
    fn.isPayable = spec.payable.isTrue;
    fn.returnType = this._createContractType(spec.returnType.unwrapOr(null));

    return fn;
  }

  private _decodeProject (): [ContractConstructor[], ContractMessage[]] {
    const constructors = this.project.spec.constructors.map(
      (constructor): ContractConstructor => {
        return this._createConstructor(constructor.name.toString(), constructor);
      }
    );

    const messages = this.project.spec.messages.map(
      (message): ContractMessage => {
        return this._createMessage(message.name.toString(), message);
      }
    );

    return [constructors, messages];
  }
}
