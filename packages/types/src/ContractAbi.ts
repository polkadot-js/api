// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecArg, Constructor } from './types';

import { assert, isNumber, isNull, isString, stringCamelCase } from '@polkadot/util';

import Compact from './codec/Compact';
import { createClass } from './codec/createType';

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
  messages: {
    [index: string]: ContractABIMethod
  },
  name: string
};

export type ContractABIEncoder = (...args: Array<CodecArg>) => Uint8Array;

export interface Contract {
  abi: ContractABI;
  deploy: ContractABIEncoder;
  messages: {
    [index: string]: ContractABIEncoder
  }
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
  Object.keys(messages).forEach((name) => {
    const method = messages[name];

    const unknownKeys = Object.keys(method).filter((key) => !['args', 'mutates', 'name', 'selector', 'return_type'].includes(key));

    assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for messages.${name}`);
    assert(isString(method.name) && isNumber(method.selector) && (isNull(method.return_type) || isString(method.return_type)), `Expected name, selector & rreturn_type specified for messages.${name}`);

    validateArgs(`messages.${name}`, method.args);
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

    Object.keys(abi.messages).forEach((_name) => {
      const name = stringCamelCase(_name);
      const { args } = abi.messages[_name];

      this.messages[name] = this._createEncoded(`messages.${name}`, args);
    });
  }

  private _createClazz (args: ContractABIArgs): Constructor {
    const def = args.reduce((def, { name, type }) => {
      def[name] = type;

      return def;
    }, {} as { [index: string]: string });

    return createClass(JSON.stringify(def));
  }

  private _createEncoded (name: string, args: ContractABIArgs): ContractABIEncoder {
    const Clazz = this._createClazz(args);

    return (...params: Array<CodecArg>): Uint8Array => {
      assert(params.length === args.length, `Expected ${args.length} arguments to contract ${name}, found ${params.length}`);

      const mapped = args.reduce((mapped, { name }, index) => {
        mapped[name] = params[index];

        return mapped;
      }, {} as { [index: string]: any });

      return Compact.addLengthPrefix(
        new Clazz(mapped).toU8a()
      );
    };
  }
}
