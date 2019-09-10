// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI, ContractABIV1, ContractABIV2, ContractABIFn, InterfaceAbi, AbiMessages, AbiVersion } from './types';

import { stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';
import { createMethod } from './method';
import { validateAbi } from './validation';

export default class ContractAbi implements InterfaceAbi {
  public readonly abi: ContractABI;

  public readonly deploy: ContractABIFn;

  public readonly messages: AbiMessages = {};

  public readonly version: AbiVersion = AbiVersion.v2;

  public constructor (json: ContractABIV1 | ContractABIV2) {
    let abi;
    let data;
    let registry: ContractRegistry;
    switch (json.version) {
      case AbiVersion.v2:
        data = json.data;
        abi = data.contract;

        registry = new ContractRegistry(data);
        registry.validateAbi(abi);

        this.abi = abi;
        this.deploy = createMethod('deploy', abi.deploy, registry.createArgs(abi.deploy));
        abi.messages.forEach((method): void => {
          const name = stringCamelCase(registry.stringAt(method.name as number));

          this.messages[name] = createMethod(`messages.${name}`, method, registry.createArgs(method));
        });

        break;
      case AbiVersion.v1:
      default:
        abi = json.data;
        validateAbi(abi);

        this.abi = abi;
        this.deploy = createMethod('deploy', abi.deploy);
        abi.messages.forEach((method): void => {
          const name = stringCamelCase(method.name as string);

          this.messages[name] = createMethod(`messages.${name}`, method);
        });

        break;
    }
  }
}
