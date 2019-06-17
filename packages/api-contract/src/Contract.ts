// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI } from './types';

import { ApiRx } from '@polkadot/api';
import { AccountId, Address } from '@polkadot/types';

import Abi from './Abi';
import Base from './Base';

// NOTE Experimental, POC, bound to change
export default class Contract extends Base {
  readonly address: Address;

  constructor (api: ApiRx, abi: ContractABI | Abi, address: string | AccountId | Address) {
    super(api, abi);

    this.address = new Address(address);
  }
}
