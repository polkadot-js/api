// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecArg } from '@polkadot/types/types';
import { ContractABI, ContractABIArg, ContractABIFn, ContractABIFnArg, ContractABIMethod, ContractABIMethodBase } from './types';

import { Compact } from '@polkadot/types';
import { assert, isNull, isNumber, isString, isObject, isUndefined, stringCamelCase } from '@polkadot/util';
import MetaRegistry from './MetaRegistry';
import { createArgClass } from './method';

export default class ContractRegistry extends MetaRegistry {
  // Contract ABI helpers
  public validateArgs (name: string, args: ContractABIArg[]): void {
    assert(Array.isArray(args), `Expected 'args' to exist on ${name}`);

    args.forEach((arg): void => {
      const unknownKeys = Object.keys(arg).filter((key): boolean => !['name', 'type'].includes(key));

      assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for ${name}`);
      assert(isNumber(arg.name) && isString(this.stringAt(arg.name)), `${name} args should have valid name `);
      assert(isNumber(arg.type) && isObject(this.typeDefAt(arg.type)), `${name} args should have valid type`);
    });
  }

  public validateDeploy ({ contract: { deploy } }: ContractABI): void {
    const unknownKeys = Object.keys(deploy).filter((key): boolean => !['args', 'docs'].includes(key));

    assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI deploy`);

    this.validateArgs('deploy', deploy.args);
  }

  public validateMethods ({ contract: { messages } }: ContractABI): void {
    messages.forEach((method): void => {
      const unknownKeys = Object.keys(method).filter((key): boolean => !['args', 'docs', 'mutates', 'name', 'selector', 'return_type'].includes(key));

      assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for messages.${method.name}`);
      const { name, selector, return_type: returnType } = method;
      assert(isNumber(name) && isString(this.stringAt(name)), `Expected name for messages.${method.name}`);
      assert(isNumber(selector), `Expected selector for messages.${method.name}`);
      assert(isNull(returnType) || (isNumber(returnType) && isObject(this.typeDefAt(returnType))), `Expected return_type for messages.${method.name}`);

      this.validateArgs(`messages.${method.name}`, method.args);
    });
  }

  public validateAbi (abi: ContractABI): void {
    const unknownKeys = Object.keys(abi.contract).filter((key): boolean => !['deploy', 'docs', 'events', 'messages', 'name'].includes(key));
    assert(unknownKeys.length === 0, `Unknown fields ${unknownKeys.join(', ')} found in ABI`);

    const { contract: { deploy, messages, name } } = abi;
    assert(deploy && messages && isString(this.stringAt(name)), 'ABI should have deploy, messages & name sections');

    this.validateDeploy(abi);
    this.validateMethods(abi);
  }

  public createMethod (name: string, method: Partial<ContractABIMethod> & ContractABIMethodBase): ContractABIFn {
    const args = method.args.map(({ name, type }): ContractABIFnArg => {
      assert(isNumber(type) && this.typeDefAt(type), `Invalid type at index ${type}`);
      return {
        name: stringCamelCase(this.stringAt(name)),
        type: this.typeDefAt(type).type
      };
    });
    const Clazz = createArgClass(args, isUndefined(method.selector) ? {} : { __selector: 'u32' });
    const baseStruct: { [index: string]: any } = { __selector: method.selector };
    const encoder = (...params: CodecArg[]): Uint8Array => {
      assert(params.length === args.length, `Expected ${args.length} arguments to contract ${name}, found ${params.length}`);

      const u8a = new Clazz(
        args.reduce((mapped, { name }, index): Record<string, CodecArg> => {
          mapped[name] = params[index];

          return mapped;
        }, { ...baseStruct })
      ).toU8a();

      return Compact.addLengthPrefix(u8a);
    };

    const fn = (encoder as ContractABIFn);

    fn.args = args;
    fn.isConstant = !(method.mutates || false);
    if (!isNumber(method.return_type)) {
      fn.type = method.return_type ? this.typeDefAt(method.return_type).type : null;
    }

    return fn;
  }
}
