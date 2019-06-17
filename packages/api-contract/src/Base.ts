// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI, IContractBase } from './types';

import { ApiRx } from '@polkadot/api';
import { assert } from '@polkadot/util';

import Abi from './Abi';

// NOTE Experimental, POC, bound to change
export default abstract class Base implements IContractBase {
  readonly abi: Abi;
  readonly api: ApiRx;

  constructor (api: ApiRx, abi: ContractABI | Abi) {
    assert(api.tx.contract && api.tx.contract.putCode, `You need to connect to a node with the contracts module, the metadata does not enable api.tx.contract on this instance`);

    this.abi = abi instanceof Abi
      ? abi
      : new Abi(abi);
    this.api = api;
  }
}
