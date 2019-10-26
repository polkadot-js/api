// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { IKeyringPair } from '@polkadot/types/types';
import { ApiObject, ContractABIPre } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { SubmittableResult } from '@polkadot/api';
import { createType } from '@polkadot/types';
import { assert } from '@polkadot/util';
import Abi from '../Abi';
import { BaseWithTxAndRpcCall } from './util';

export type CallTypes = 'tx' | 'rpc';

export type ContractCallResult<CallType extends CallTypes> = CallType extends 'rpc'
  ? Observable<ContractExecResult>
  : Observable<SubmittableResult>;

export type ContractCallFn<CallType extends CallTypes> = CallType extends 'rpc'
  ? (origin: IKeyringPair | string | AccountId | Address, messageIndex: number, value: BN | number, maxGas: BN | number, ...params: any[]) => ContractCallResult<CallType>
  : (account: IKeyringPair | string | AccountId | Address) => ContractCallResult<CallType>;


export interface ContractCall<CallType extends CallTypes> {
  send: ContractCallFn<CallType>
}

// NOTE Experimental, POC, bound to change
export default class Contract<ApiType extends ApiTypes> extends BaseWithTxAndRpcCall<ApiType> {
  public readonly address: Address;

  private assertMessageExists (messageIndex: number): void {
    assert(!!this.abi.messages[messageIndex], `Specified message at index ${messageIndex} does not exist`);
  }

  public callContract (as: CallTypes, messageIndex = 0, value: BN | number, gasLimit: BN | number, ...params: any[]) {
    this.assertMessageExists(messageIndex);

    return {
      send: this.decorateMethod(
        as === 'rpc'
          ? (account: IKeyringPair | string | AccountId | Address): ContractCallResult<'rpc'> => {
            return this.rpcContractsCall(
                createType('ContractCallRequest', {
                  origin: account,
                  dest: this.address,
                  value,
                  gasLimit,
                  inputData: this.abi.messages[messageIndex](...params)
                })
            );
          }
        : (account: IKeyringPair | string | AccountId | Address): ContractCallResult<'tx'> => {
          return this.apiContracts
            .call(this.address, value, gasLimit, this.abi.messages[messageIndex](...params))
            .signAndSend(account)
        }
      )
    };
  }

  public constructor (api: ApiObject<ApiType>, abi: ContractABIPre | Abi, decorateMethod: DecorateMethod<ApiType>, address: string | AccountId | Address) {
    super(api, abi, decorateMethod);

    this.address = createType('Address', address);
  }
}
