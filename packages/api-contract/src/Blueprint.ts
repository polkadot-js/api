// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI } from './types';

import { ApiRx } from '@polkadot/api';
import { Hash } from '@polkadot/types';

import Abi from './Abi';
import Base from './Base';

// NOTE Experimental, POC, bound to change
export default class Blueprint extends Base {
  readonly codeHash: Hash;

  constructor (api: ApiRx, abi: ContractABI | Abi, codeHash: string | Hash) {
    super(api, abi);

    this.codeHash = new Hash(codeHash);
  }
}
