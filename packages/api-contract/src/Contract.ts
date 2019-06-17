// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI, ContractABIFn, IContract, IContract$Calls } from './types';

import { ApiRx } from '@polkadot/api';
import { AccountId, Address } from '@polkadot/types';

import Abi from './Abi';
import Base from './Base';

function decorateCall (api: ApiRx, fn: ContractABIFn) {
  return (...params: Array<any>) => {
    throw new Error('TODO');
  };
}

// NOTE Experimental, POC, bound to change
export default class Contract extends Base implements IContract {
  readonly address: Address;
  readonly calls: IContract$Calls = {};

  constructor (api: ApiRx, abi: ContractABI | Abi, address: string | AccountId | Address) {
    super(api, abi);

    this.address = new Address(address);

    Object.entries(abi.messages).forEach(([name, fn]) => {
      this.calls[name] = decorateCall(this.api, fn);
    });
  }
}
