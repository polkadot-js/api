// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI, ContractABIPre, ContractABIFn, InterfaceAbi } from './types';
import { stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';

export default class ContractAbi extends ContractRegistry implements InterfaceAbi {
  public readonly abi: ContractABI;

  public readonly constructors: ContractABIFn[];

  public readonly messages: ContractABIFn[];

  public constructor (abi: ContractABIPre) {
    super(abi);
    [this.abi, this.constructors, this.messages] = this.decodeAbi(abi);
  }

  private decodeAbi (abiPre: ContractABIPre): [ContractABI, ContractABIFn[], ContractABIFn[]] {
    this.validateAbi(abiPre);

    const abi = this.convertAbi(abiPre);
    const constructors = abi.contract.constructors.map(
      (constructor, index): ContractABIFn => {
        return this.createMethod(`constructor ${index}`, constructor);
      }
    );

    const messages = abi.contract.messages.map(
      (message): ContractABIFn => {
        const name = stringCamelCase(message.name);

        return this.createMethod(`messages.${name}`, message);
      }
    );

    return [abi, constructors, messages];
  }
}
