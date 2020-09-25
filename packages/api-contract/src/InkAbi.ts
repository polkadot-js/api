// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecArg, Constructor, Registry } from '@polkadot/types/types';
import { InkConstructorSpec, InkMessageSpec, InkProject, InkTypeSpec } from '@polkadot/types/interfaces';
import { InkMessages, InkMessage, InkMessageParam, InkConstructors, InkType } from './types';

import { Compact, createClass, encodeType } from '@polkadot/types';
import { assert, isObject, isUndefined, stringCamelCase } from '@polkadot/util';

import InkRegistry from './InkRegistry';

function createArgClass (registry: Registry, args: InkMessageParam[], baseDef: Record<string, string>): Constructor {
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

export default class InkAbi extends InkRegistry {
  public readonly constructors: InkConstructors;

  public readonly messages: InkMessages;

  constructor (registry: Registry, project: InkProject) {
    super(registry, project);
    [this.constructors, this.messages] = this._decodeProject();
  }

  private _createInkType (spec: InkTypeSpec): InkType {
    return {
      displayName: spec.displayName.toString(),
      type: this.typeDefAt(spec.id)
    };
  }

  // private _create<SpecType extends SpecTypes, MessageType extends MessageTypes> (name: string, spec: SpecType): MessageType;
  // private _create<InkConstructorSpec, InkConstructor>(name: string, spec: InkConstructorSpec): InkConstructor {

  // }
  // private _create (name: string, spec: InkMessageSpec): InkMessage;
  //   const args = spec.args.map(({ name, type }): InkMessageParam => {
  //     assert(isObject(type), `Invalid type at index ${type.toString()}`);

  //     return {
  //       name: stringCamelCase(name.toString()),
  //       type: this.typeDefAt(type.id)
  //     };
  //   });

  //   const Clazz = createArgClass(this.registry, args, isUndefined(spec.selector) ? {} : { __selector: 'u32' });
  //   const baseStruct: { [index: string]: any } = { __selector: this.registry.createType('u32', spec.selector) };

  //   const encoder = (...params: CodecArg[]): Uint8Array => {
  //     assert(params.length === args.length, `Expected ${args.length} arguments to contract ${name}, found ${params.length}`);

  //     const u8a = new Clazz(
  //       this.registry,
  //       args.reduce((mapped, { name }, index): Record<string, CodecArg> => {
  //         mapped[name] = params[index];

  //         return mapped;
  //       }, { ...baseStruct })
  //     ).toU8a();

  //     return Compact.addLengthPrefix(u8a);
  //   };

  //   const fn = (encoder as InkMessage);

  //   fn.args = args;

  //   return fn;
  // }

  private _createBase (identifier: string, spec: InkMessageSpec | InkConstructorSpec): InkMessage {
    const args = spec.args.map(({ name, type }): InkMessageParam => {
      assert(isObject(type), `Invalid type at index ${type.toString()}`);

      return {
        name: stringCamelCase(name.toString()),
        type: this.typeDefAt(type.id)
      };
    });

    console.log('_createBase args');
    console.log(JSON.stringify(args));

    const Clazz = createArgClass(this.registry, args, isUndefined(spec.selector) ? {} : { __selector: 'u32' });
    const baseStruct: { [index: string]: any } = { __selector: this.registry.createType('u32', spec.selector) };

    const encoder = (...params: CodecArg[]): Uint8Array => {
      assert(params.length === args.length, `Expected ${args.length} arguments to contract message '${identifier}', found ${params.length}`);

      const u8a = new Clazz(
        this.registry,
        args.reduce((mapped, { name }, index): Record<string, CodecArg> => {
          mapped[name] = params[index];

          return mapped;
        }, { ...baseStruct })
      ).toU8a();

      return Compact.addLengthPrefix(u8a);
    };

    const fn = (encoder as InkMessage);

    fn.args = args;
    fn.identifier = identifier;
    fn.docs = spec.docs.map((doc) => doc.toString());

    console.log(fn.docs);

    return fn;
  }

  private _createConstructor (name: string, spec: InkConstructorSpec): InkMessage {
    const fn = this._createBase(name, spec);

    fn.isConstructor = true;

    return fn;
  }

  private _createMessage (name: string, spec: InkMessageSpec): InkMessage {
    const fn = this._createBase(name, spec);

    fn.isConstructor = false;
    fn.mutates = spec.mutates.valueOf();
    fn.returnType = spec.returnType.isSome ? this._createInkType(spec.returnType.unwrap()) : null;

    return fn;
  }

  private _decodeProject (): [InkConstructors, InkMessages] {
    // this.validateAbi(abiPre);

    const constructors = this.project.spec.constructors.map(
      (constructor): InkMessage => {
        return this._createConstructor(constructor.name.toString(), constructor);
      }
    );

    const messages = this.project.spec.messages.map(
      (message): InkMessage => {
        return this._createMessage(message.name.toString(), message);
      }
    );

    return [constructors, messages];
  }
}
