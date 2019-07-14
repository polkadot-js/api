// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SubmittableModuleExtrinsics } from '@polkadot/api/types';
import { ApiObject, ContractABI, ContractBase } from './types';

import { assert } from '@polkadot/util';

import Abi from './Abi';

// NOTE Experimental, POC, bound to change
export default abstract class RxBase implements ContractBase<'rxjs'> {
  public readonly abi: Abi;

  public readonly api: ApiObject<'rxjs'>;

  public readonly apiContracts: SubmittableModuleExtrinsics<'rxjs'>;

  public constructor (api: ApiObject<'rxjs'>, abi: ContractABI | Abi) {
    this.abi = abi instanceof Abi
      ? abi
      : new Abi(abi);
    this.api = api;

    // cater for substrate 2.x & 1.x (in order)
    this.apiContracts = api.tx.contracts || api.tx.contract;

    assert(this.apiContracts && this.apiContracts.putCode, `You need to connect to a node with the contracts module, the metadata does not enable api.tx.contracts on this instance`);
  }
}
