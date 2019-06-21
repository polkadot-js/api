// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABI, ContractABIFn, IContract, IContract$Calls } from './types';
import { IKeyringPair } from '@polkadot/types/types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { ApiRx } from '@polkadot/api';
import { SubmittableResult } from '@polkadot/api/SubmittableExtrinsic';
import { AccountId, Address } from '@polkadot/types';

import Abi from './Abi';
import RxBase from './RxBase';

export type IContractCallResultSubscription = Observable<SubmittableResult>;

export interface IContractCall {
  signAndSend (account: IKeyringPair | string | AccountId | Address): IContractCallResultSubscription;
}

// NOTE Experimental, POC, bound to change
export default class RxContract extends RxBase implements IContract {
  readonly address: Address;
  readonly calls: IContract$Calls = {};

  constructor (api: ApiRx, abi: ContractABI | Abi, address: string | AccountId | Address) {
    super(api, abi);

    this.address = new Address(address);

    Object.entries(abi.messages).forEach(([name, fn]) => {
      this.calls[name] = (fn: ContractABIFn) =>
        (value: BN | number, maxGas: BN | number, ...params: Array<any>): IContractCall =>
          this.apiContracts.call(this.address, value, maxGas, fn(...params));
    });
  }
}
