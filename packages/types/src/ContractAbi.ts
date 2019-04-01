// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecArg, Constructor } from './types';

import { assert, isNumber, isNull, isString, isUndefined, stringCamelCase, u8aConcat } from '@polkadot/util';

import Compact from './codec/Compact';
import { createClass } from './codec/createType';
import U32 from './primitive/U32';

export type ContractABIArgs = Array<{
  name: string,
  type: string
}>;

export type ContractABIMethod = {
  args: ContractABIArgs,
  mutates?: boolean,
  name: string,
  selector: number,
  return_type: string | null
};

export type ContractABI = {
  deploy: {
    args: ContractABIArgs
  },
  messages: Array<ContractABIMethod>,
  name: string
};

export type ContractABIEncoder = (...args: Array<CodecArg>) => Uint8Array;

export interface Contract {
  abi: ContractABI;
  deploy: ContractABIEncoder;
  messages: {
    [index: string]: ContractABIEncoder
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
    assert(isString(method.name) && isNumber(method.selector) && (isNull(method.return_type) || isString(method.return_type)), `Expected name, selector & return_type specified for messages.${method.name}`);

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
  deploy: ContractABIEncoder;
  messages: { [index: string]: ContractABIEncoder } = {};

  constructor (abi: ContractABI) {
    validateAbi(abi);

    this.abi = abi;
    this.deploy = this._createEncoded('deploy', abi.deploy.args);

    abi.messages.forEach((method) => {
      const name = stringCamelCase(method.name);

      this.messages[name] = this._createEncoded(`messages.${name}`, method.args, method.selector);
    });
  }

  private _createClazz (args: ContractABIArgs, isDeploy: boolean): Constructor {
    return createClass(
      JSON.stringify(
        args.reduce((base: { [index: string]: string }, { name, type }) => {
          base[name] = type;

          return base;
        }, isDeploy ? {} : { __selector: 'u32' })
      )
    );
  }

  private _createEncoded (name: string, args: ContractABIArgs, selector?: number): ContractABIEncoder {
    const Clazz = this._createClazz(args, isUndefined(selector));
    const base: { [index: string]: any } = { __selector: selector };

    return (...params: Array<CodecArg>): Uint8Array => {
      assert(params.length === args.length, `Expected ${args.length} arguments to contract ${name}, found ${params.length}`);

      return Compact.addLengthPrefix(
        new Clazz(
          args.reduce((mapped, { name }, index) => {
            mapped[name] = params[index];

            return mapped;
          }, { ...base })
        ).toU8a()
      );
    };
  }
}
