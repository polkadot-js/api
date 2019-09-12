import { ContractABI, ContractABIArg, ContractABIFn, ContractABIFnArg, ContractABIMethod, ContractABIMethodBase } from './types';

import { assert, isNull, isNumber, isString, isObject, stringCamelCase } from '@polkadot/util';
import MetaRegistry from './MetaRegistry';
import { createMethod, typeToString } from './method';

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

  public validateDeploy ({ deploy }: ContractABI): void {
    const unknownKeys = Object.keys(deploy).filter((key): boolean => !['args', 'docs'].includes(key));

    assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI deploy`);

    this.validateArgs('deploy', deploy.args);
  }

  public validateMethods ({ messages }: ContractABI): void {
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
    const unknownKeys = Object.keys(abi).filter((key): boolean => !['deploy', 'docs', 'events', 'messages', 'name'].includes(key));

    assert(unknownKeys.length === 0, `Unknown fields ${unknownKeys.join(', ')} found in ABI`);
    assert(abi.deploy && abi.messages && isNumber(abi.name) && isString(this.stringAt(abi.name)), 'ABI should have deploy, messages & name sections');

    this.validateDeploy(abi);
    this.validateMethods(abi);
  }

  public createArgs (method: Partial<ContractABIMethod> & ContractABIMethodBase): ContractABIFnArg[] {
    return method.args.map(({ name, type }): ContractABIFnArg => {
      assert(isNumber(type) && this.typeDefAt(type as number), `Invalid type at index ${type}`);
      return {
        name: stringCamelCase(this.stringAt(name as number)),
        type: typeToString(this.typeDefAt(type as number)!.type)
      };
    });
  }

  public createMethod (name: string, method: Partial<ContractABIMethod> & ContractABIMethodBase): ContractABIFn {
    const fn = createMethod(`messages.${name}`, method, this.createArgs(method));
    if (isNumber(method.return_type)) {
      assert(this.typeDefAt(method.return_type), `Invalid type at index ${method.return_type}`);
      fn.type = typeToString(this.typeDefAt(method.return_type)!.type);
    }
    return fn;
  }
}
