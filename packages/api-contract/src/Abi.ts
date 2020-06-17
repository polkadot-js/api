// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';
import { AbiConstructors, AbiMessages, ContractABI, ContractABIPre, ContractABIFn, InterfaceAbi } from './types';

import { stringCamelCase } from '@polkadot/util';

import ContractRegistry from './ContractRegistry';

export default class ContractAbi extends ContractRegistry implements InterfaceAbi {
  public readonly abi: ContractABI;

  public readonly constructors: AbiConstructors;

  public readonly messages: AbiMessages;

  constructor (registry: Registry, abi: ContractABIPre) {
    super(registry, abi);
    [this.abi, this.constructors, this.messages] = this._decodeAbi(abi);
  }

  private _decodeAbi (abiPre: ContractABIPre): [ContractABI, ContractABIFn[], AbiMessages] {
    this.validateAbi(abiPre);

    const abi = this.convertAbi(abiPre);
    const constructors = abi.contract.constructors.map(
      (constructor, index): ContractABIFn => {
        return this.createMessage(`constructor ${index}`, constructor);
      }
    );

    const messages: AbiMessages = abi.contract.messages.reduce(
      (result: AbiMessages, message): AbiMessages => {
        const name = stringCamelCase(message.name);

        return {
          ...result,
          [name]: this.createMessage(`messages.${name}`, message)
        };
      },
      {}
    );

    return [abi, constructors, messages];
  }
}
