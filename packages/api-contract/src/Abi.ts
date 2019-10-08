// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI, ContractABIPre, ContractABIFn, InterfaceAbi, AbiMessages } from './types';
import { stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';

export default class ContractAbi extends ContractRegistry implements InterfaceAbi {
  public readonly abi: ContractABI;

  public readonly constructors: ContractABIFn[];

  public readonly messages: AbiMessages = {};

  public constructor (abi: ContractABIPre) {
    super(abi);
    [this.abi, this.constructors, this.messages] = this.decodeAbi(abi);
  }

  private decodeAbi (abiPre: ContractABIPre): [ContractABI, ContractABIFn[], AbiMessages] {
    this.validateAbi(abiPre);

    const abi = this.convertAbi(abiPre);
    const constructors = abi.contract.constructors.map(
      (constructor, index): ContractABIFn => {
        return this.createMethod(`constructor ${index}`, constructor);
      }
    );

    const messages: AbiMessages = {};
    abi.contract.messages.forEach((method): void => {
      const name = stringCamelCase(method.name);

      messages[name] = this.createMethod(`messages.${name}`, method);
    });

    return [abi, constructors, messages];
  }
}
