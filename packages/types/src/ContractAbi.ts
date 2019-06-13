// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecArg, Constructor } from './types';

import { assert, isNumber, isNull, isString, isUndefined, stringCamelCase, isObject } from '@polkadot/util';

import Compact from './codec/Compact';
import { createClass } from './codec/createType';

export type ContractABITypes$Struct = {
  'Option<T>'?: {
    T: string | ContractABITypes$Struct
  },
  'Vec<T>'?: {
    T: string | ContractABITypes$Struct
  },
  '[T;n]'?: {
    T: string | ContractABITypes$Struct,
    n: number
  }
};

export type ContractABITypes = string | ContractABITypes$Struct | Array<string | ContractABITypes$Struct>;

export type ContractABIArg = {
  name: string,
  type: ContractABITypes
};

export type ContractABIMethodBase = {
  args: Array<ContractABIArg>
};

export type ContractABIMethod = ContractABIMethodBase & {
  mutates?: boolean,
  name: string,
  selector: number,
  return_type: ContractABITypes | null
};

export type ContractABI = {
  deploy: ContractABIMethodBase,
  messages: Array<ContractABIMethod>,
  name: string
};

export interface ContractABIFn$Arg {
  name: string;
  type: string;
}

export interface ContractABIFn {
  (...args: Array<CodecArg>): Uint8Array;
  args: Array<ContractABIFn$Arg>;
  isConstant: boolean;
  type: string | null;
}

export interface Contract {
  abi: ContractABI;
  deploy: ContractABIFn;
  messages: {
    [index: string]: ContractABIFn
  };
}

export function validateArgs (name: string, args: Array<ContractABIArg>): void {
  assert(Array.isArray(args), `Expected 'args' to exist on ${name}`);

  args.forEach((arg) => {
    const unknownKeys = Object.keys(arg).filter((key) => !['name', 'type'].includes(key));

    assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for ${name}`);
    assert(isString(arg.name), `${name} args should have valid name `);
    assert(isString(arg.type) || isObject(arg.type), `${name} args should have valid type`);
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

    assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for messages.${method.name}`);
    assert(isString(method.name), `Expected name for messages.${method.name}`);
    assert(isNumber(method.selector), `Expected selector for messages.${method.name}`);
    assert(isNull(method.return_type) || isString(method.return_type) || isObject(method.return_type), `Expected return_type for messages.${method.name}`);

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

  private _convertType (type: ContractABITypes): string {
    if (isString(type)) {
      return type;
    } else if (Array.isArray(type)) {
      return `(${type.map((type) => this._convertType(type)).join(',')})`;
    } else if (type['Option<T>']) {
      return `Option<${this._convertType(type['Option<T>'].T)}>`;
    } else if (type['Vec<T>']) {
      return `Vec<${this._convertType(type['Vec<T>'].T)}>`;
    } else if (type['[T;n]']) {
      return `[${this._convertType(type['[T;n]'].T)};${type['[T;n]'].n}]`;
    }

    throw new Error(`Unknown type specified ${JSON.stringify(type)}`);
  }

  private _createClazz (args: Array<ContractABIFn$Arg>, baseDef: { [index: string]: string }): Constructor {
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
    const args: Array<ContractABIFn$Arg> = method.args.map(({ name, type }) => ({
      name: stringCamelCase(name),
      type: this._convertType(type)
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
    fn.type = method.return_type ? this._convertType(method.return_type) : null;

    return fn;
  }
}
