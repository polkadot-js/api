// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI, ContractABIV1, ContractABIV2, ContractABIFn, InterfaceAbi, AbiMessages } from './types';

import { stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';
import { createMethod } from './method';
import { validateAbi } from './validation';

const EMPTY_REGISTRY = new ContractRegistry({
  registry: {
    strings: [],
    types: []
  }
});

export default class ContractAbi implements InterfaceAbi {
  public readonly abi: ContractABI;

  public readonly deploy: ContractABIFn;

  public readonly messages: AbiMessages = {};

  public readonly registry: ContractRegistry = EMPTY_REGISTRY;

  public readonly isV2: boolean = false;

  public constructor (json: ContractABIV1 | ContractABIV2) {
    let abi;
    let data;
    if (json.isV2) {
      data = json.data;
      abi = data.contract;

      this.registry = new ContractRegistry(data);
      this.registry.validateAbi(abi);

      this.isV2 = true;
      this.abi = abi;
      this.deploy = this.registry.createMethod('deploy', abi.deploy);
      abi.messages.forEach((method): void => {
        const name = stringCamelCase(this.registry.stringAt(method.name as number));

        this.messages[name] = this.registry.createMethod(`messages.${name}`, method);
      });
    } else {
      abi = json.data;
      validateAbi(abi);

      this.isV2 = false;
      this.abi = abi;
      this.deploy = createMethod('deploy', abi.deploy);
      abi.messages.forEach((method): void => {
        const name = stringCamelCase(method.name as string);

        this.messages[name] = createMethod(`messages.${name}`, method);
      });
    }
  }
}
