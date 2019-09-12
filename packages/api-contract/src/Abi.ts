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
  private static decodeV1 (json: ContractABIV1): [ContractABI, ContractABIFn, AbiMessages] {
    const abi = json.data;
    validateAbi(abi);

    const deploy = createMethod('deploy', abi.deploy);
    const messages: AbiMessages = {};
    abi.messages.forEach((method): void => {
      const name = stringCamelCase(method.name as string);

      messages[name] = createMethod(`messages.${name}`, method);
    });

    return [abi, deploy, messages];
  }

  private static decodeV2 (json: ContractABIV2): [ContractABI, ContractABIFn, AbiMessages, ContractRegistry] {
    const abi = json.data.contract;

    const registry = new ContractRegistry(json.data);
    registry.validateAbi(abi);

    const deploy = registry.createMethod('deploy', abi.deploy);
    const messages: AbiMessages = {};
    abi.messages.forEach((method): void => {
      const name = stringCamelCase(registry.stringAt(method.name as number));

      messages[name] = registry.createMethod(`messages.${name}`, method);
    });

    return [abi, deploy, messages, registry];
  }

  public readonly abi: ContractABI;

  public readonly deploy: ContractABIFn;

  public readonly messages: AbiMessages = {};

  public readonly registry: ContractRegistry = EMPTY_REGISTRY;

  public readonly isV2: boolean = false;

  public constructor (json: ContractABIV1 | ContractABIV2) {
    if (json.isV2) {
      [this.abi, this.deploy, this.messages, this.registry] = ContractAbi.decodeV2(json);
    } else {
      [this.abi, this.deploy, this.messages] = ContractAbi.decodeV1(json);
    }
  }
}
