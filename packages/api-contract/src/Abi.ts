// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI, ContractABIFn, InterfaceAbi, AbiMessages } from './types';
import { stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';

export default class ContractAbi extends ContractRegistry implements InterfaceAbi {
  private decode (abi: ContractABI): [ContractABI, ContractABIFn, AbiMessages] {
    this.validateAbi(abi);

    const deploy = this.createMethod('deploy', abi.contract.deploy);
    const messages: AbiMessages = {};
    abi.contract.messages.forEach((method): void => {
      const name = stringCamelCase(this.stringAt(method.name));

      messages[name] = this.createMethod(`messages.${name}`, method);
    });

    return [abi, deploy, messages];
  }

  public readonly abi: ContractABI;

  public readonly deploy: ContractABIFn;

  public readonly messages: AbiMessages = {};

  public constructor (abi: ContractABI) {
    super(abi);
    [this.abi, this.deploy, this.messages] = this.decode(abi);
  }

  public get name (): string {
    return this.stringAt(this.abi.contract.name);
  }
}
