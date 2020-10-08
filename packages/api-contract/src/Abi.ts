// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyJson, CodecArg, Constructor, Registry } from '@polkadot/types/types';
import { InkConstructorSpec, InkMessageSpec, InkTypeSpec } from '@polkadot/types/interfaces';
import { AbiConstructor, AbiMessageBase, AbiMessage, AbiMessageParam, AbiType } from './types';

import { Compact, createClass, encodeType } from '@polkadot/types';
import { assert, isObject, isUndefined, stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';

function createArgClass (registry: Registry, args: AbiMessageParam[], baseDef: Record<string, string>): Constructor {
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
  public readonly constructors: AbiConstructor[];

  public readonly messages: AbiMessage[];

  constructor (registry: Registry, json: AnyJson) {
    super(registry, json);

    [this.constructors, this.messages] = this._decodeProject();
  }

  private _createAbiType (spec: InkTypeSpec | null): AbiType | null {
    return spec
      ? {
        displayName: spec.displayName.toString() || undefined,
        type: this.typeDefAt(spec.id)
      }
      : null;
  }

  private _createBase (identifier: string, spec: InkMessageSpec | InkConstructorSpec): AbiMessageBase {
    const args = spec.args.map(({ name, type }): AbiMessageParam => {
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
    }) as AbiMessage;

    fn.args = args;
    fn.identifier = identifier;
    fn.docs = spec.docs.map((doc) => doc.toString());

    return fn;
  }

  private _createConstructor (identifier: string, spec: InkConstructorSpec): AbiConstructor {
    const fn = this._createBase(identifier, spec);

    fn.isConstructor = true;

    return fn;
  }

  private _createMessage (identifier: string, spec: InkMessageSpec): AbiMessage {
    const fn = this._createBase(identifier, spec) as AbiMessage;

    fn.isConstructor = false;
    fn.isMutating = spec.mutates.isTrue;
    fn.isPayable = spec.payable.isTrue;
    fn.returnType = this._createAbiType(spec.returnType.unwrapOr(null));

    return fn;
  }

  private _decodeProject (): [AbiConstructor[], AbiMessage[]] {
    const constructors = this.project.spec.constructors.map(
      (constructor): AbiConstructor => {
        return this._createConstructor(constructor.name.toString(), constructor);
      }
    );

    const messages = this.project.spec.messages.map(
      (message): AbiMessage => {
        return this._createMessage(message.name.toString(), message);
      }
    );

    return [constructors, messages];
  }
}
