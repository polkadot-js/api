import { ContractABI, ContractABIArg, ContractABIFnArg, ContractABIMethod, ContractABIMethodBase } from './types';

import { assert, isNumber, isString, isObject, stringCamelCase } from '@polkadot/util';
import MetaRegistry from './MetaRegistry';
import { typeToString } from './method';

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
    const unknownKeys = Object.keys(deploy).filter((key): boolean => !['args'].includes(key));

    assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI deploy`);

    this.validateArgs('deploy', deploy.args);
  }

  public validateMethods ({ messages }: ContractABI): void {
    messages.forEach((method): void => {
      const unknownKeys = Object.keys(method).filter((key): boolean => !['args', 'mutates', 'name', 'selector', 'return_type'].includes(key));

      assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for messages.${method.name}`);
      const { name, selector, return_type: returnType } = method;
      assert(isNumber(name) && isString(this.stringAt(name)), `Expected name for messages.${method.name}`);
      assert(isNumber(selector), `Expected selector for messages.${method.name}`);
      assert(isNumber(returnType) && isObject(this.typeDefAt(returnType)), `Expected return_type for messages.${method.name}`);

      this.validateArgs(`messages.${method.name}`, method.args);
    });
  }

  public validateAbi (abi: ContractABI): void {
    const unknownKeys = Object.keys(abi).filter((key): boolean => !['deploy', 'messages', 'name'].includes(key));

    assert(unknownKeys.length === 0, `Unknown fields ${unknownKeys.join(', ')} found in ABI`);
    assert(abi.deploy && abi.messages && isNumber(abi.name) && isString(this.stringAt(abi.name)), 'ABI should have deploy, messages & name sections');

    this.validateDeploy(abi);
    this.validateMethods(abi);
  }

  public createArgs (method: Partial<ContractABIMethod> & ContractABIMethodBase): ContractABIFnArg[] {
    return method.args.map(({ name, type }): ContractABIFnArg => ({
      name: stringCamelCase(this.stringAt(name as number)),
      type: typeToString(type)
    }));
  }
}
