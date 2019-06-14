// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI, ContractABIArg } from './types';

import { assert, isNumber, isNull, isString, isObject } from '@polkadot/util';

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
