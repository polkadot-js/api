// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI } from './types';

import { AccountId } from '@polkadot/types';

import Abi from './Abi';

export default class Contract {
  readonly abi: Abi;
  readonly address: AccountId;

  // TODO This needs to be useful
  //   - pass API instance
  //   - expose calls here so we don't need to do the encoding manually
  //
  // Also, we need the same structure for managing code and deploying
  constructor (address: string | AccountId, abi: ContractABI) {
    this.abi = new Abi(abi);
    this.address = new AccountId(address);
  }
}
