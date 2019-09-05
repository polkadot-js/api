// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address } from '@polkadot/types/interfaces';
import { IKeyringPair } from '@polkadot/types/types';
import { ContractABI, ContractABIFn, InterfaceContract, InterfaceContractCalls } from './types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { ApiRx, SubmittableResult } from '@polkadot/api';
import { createType } from '@polkadot/types';
import Abi from './Abi';
import RxBase from './RxBase';

export type ContractCallResultSubscription = Observable<SubmittableResult>;

export interface ContractCall {
  signAndSend (account: IKeyringPair | string | AccountId | Address): ContractCallResultSubscription;
}

type CallResult = (value: BN | number, maxGas: BN | number, ...params: any[]) => ContractCall;

// NOTE Experimental, POC, bound to change
export default class RxContract extends RxBase implements InterfaceContract {
  public readonly address: Address;

  public readonly calls: InterfaceContractCalls = {};

  public constructor (api: ApiRx, abi: ContractABI | Abi, address: string | AccountId | Address) {
    super(api, abi);

    this.address = createType('Address', address);

    Object.entries(abi.messages).forEach(([name]): void => {
      this.calls[name] = (fn: ContractABIFn): CallResult =>
        (value: BN | number, maxGas: BN | number, ...params: any[]): ContractCall =>
          this.apiContracts.call(this.address, value, maxGas, fn(...params));
    });
  }
}
