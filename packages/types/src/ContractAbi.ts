// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecArg, Constructor } from './types';

import { assert, isNumber, isNull, isString, isUndefined, stringCamelCase } from '@polkadot/util';

import Compact from './codec/Compact';
import Tuple from './codec/Tuple';
import Vector from './codec/Vector';
import { createClass } from './codec/createType';
import { Bool, I8, I16, I32, I64, I128, U8, U16, U32, U64, U128 } from './primitive';

export type ContractABIReturnType = string | Vector<Bool | I8 | I16 | I32 | I64 | I128 | U8 | U16 | U32 | U64 | U128> | Tuple | null;

export type ContractABIArgs = Array<{
  name: string,
  type: string
}>;

export type ContractABIMethodBase = {
  args: ContractABIArgs
};

export type ContractABIMethod = ContractABIMethodBase & {
  mutates?: boolean,
  name: string,
  selector: number,
  return_type: ContractABIReturnType
};

export type ContractABI = {
  deploy: ContractABIMethodBase,
  messages: Array<ContractABIMethod>,
  name: string
};

export interface ContractABIFn {
  (...args: Array<CodecArg>): Uint8Array;
  args: ContractABIArgs;
  isConstant: boolean;
  type: ContractABIReturnType;
}

export interface Contract {
  abi: ContractABI;
  deploy: ContractABIFn;
  messages: {
    [index: string]: ContractABIFn
  };
}

export function validateArgs (name: string, args: ContractABIArgs): void {
  assert(Array.isArray(args), `Expected 'args' to exist on ${name}`);

  args.forEach((arg) => {
    const unknownKeys = Object.keys(arg).filter((key) => !['name', 'type'].includes(key));

    assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for ${name}`);
    assert(isString(arg.name) && isString(arg.type), `${name} args should have valid name & type values`);
  });
}

export function validateDeploy ({ deploy }: ContractABI): void {
  const unknownKeys = Object.keys(deploy).filter((key) => !['args'].includes(key));

  assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI deploy`);

  validateArgs('deploy', deploy.args);
}

export function validateMethods ({ messages }: ContractABI): void {
  messages.forEach((method) => {
    const unknownKeys = Object.keys(method).filter((key) => !['args', 'mutates', 'name', 'selector', 'return_type'].includes(key));

    assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for messages.${name}`);
    assert(isString(method.name) && isNumber(method.selector) && (isNull(method.return_type) || isString(method.return_type) || Array.isArray(method.return_type)), `Expected name, selector & return_type specified for messages.${method.name}`);

    validateArgs(`messages.${method.name}`, method.args);
  });
}

export function validateAbi (abi: ContractABI): void {
  const unknownKeys = Object.keys(abi).filter((key) => !['deploy', 'messages', 'name'].includes(key));

  assert(unknownKeys.length === 0, `Unknown fields ${unknownKeys.join(', ')} found in ABI`);
  assert(abi.deploy && abi.messages && isString(abi.name), 'ABI should have deploy, messages & name sections');

  validateDeploy(abi);
  validateMethods(abi);
}

export default class ContractAbi implements Contract {
  abi: ContractABI;
  deploy: ContractABIFn;
  messages: { [index: string]: ContractABIFn } = {};

  constructor (abi: ContractABI) {
    validateAbi(abi);

    this.abi = abi;
    this.deploy = this._createEncoded('deploy', abi.deploy);

    abi.messages.forEach((method) => {
      const name = stringCamelCase(method.name);

      this.messages[name] = this._createEncoded(`messages.${name}`, method);
    });
  }

  private _createClazz (args: ContractABIArgs, baseDef: { [index: string]: string }): Constructor {
    return createClass(
      JSON.stringify(
        args.reduce((base: { [index: string]: string }, { name, type }) => {
          base[name] = type;

          return base;
        }, baseDef)
      )
    );
  }

  private _createEncoded (name: string, method: Partial<ContractABIMethod> & ContractABIMethodBase): ContractABIFn {
    const args = method.args.map(({ name, type }) => ({
      name: stringCamelCase(name),
      type
    }));
    const Clazz = this._createClazz(args, isUndefined(method.selector) ? {} : { __selector: 'u32' });
    const baseStruct: { [index: string]: any } = { __selector: method.selector };
    const encoder = (...params: Array<CodecArg>): Uint8Array => {
      assert(params.length === args.length, `Expected ${args.length} arguments to contract ${name}, found ${params.length}`);

      const u8a = new Clazz(
        args.reduce((mapped, { name }, index) => {
          mapped[name] = params[index];

          return mapped;
        }, { ...baseStruct })
      ).toU8a();

      return Compact.addLengthPrefix(u8a);
    };

    const fn = (encoder as ContractABIFn);

    fn.args = args;
    fn.isConstant = !(method.mutates || false);
    fn.type = method.return_type || null;

    return fn;
  }
}
