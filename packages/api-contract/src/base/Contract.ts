// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { IKeyringPair } from '@polkadot/types/types';
import { ApiObject, ContractABIMessage, ContractABIPre, ContractCallOutcome, ContractCallResult, ContractCallTypes, } from '../types';

import BN from 'bn.js';
import { map } from 'rxjs/operators';
import { createType } from '@polkadot/types';
import Abi from '../Abi';
import { formatData } from '../util';
import { BaseWithTxAndRpcCall } from './util';

// NOTE Experimental, POC, bound to change
export default class Contract<ApiType extends ApiTypes> extends BaseWithTxAndRpcCall<ApiType> {
  public readonly address: Address;

  public call (as: ContractCallTypes, message: string, value: BN | number, gasLimit: BN | number, ...params: any[]) {
    const { fn, def } = this.getMessage(message);

    return {
      send: this.decorateMethod(
        as === 'rpc'
          ? (account: IKeyringPair | string | AccountId | Address): ContractCallResult<'rpc'> => {
            return this.rpcContractsCall(
              createType('ContractCallRequest', {
                origin: account,
                dest: this.address.toString(),
                value,
                gasLimit,
                inputData: fn(...params)
              })
            )
              .pipe(
                map((result: ContractExecResult): ContractCallOutcome =>
                  this.createOutcome(result, createType('AccountId', account), def, params)
                )
              );
          }
        : (account: IKeyringPair | string | AccountId | Address): ContractCallResult<'tx'> => {
          return this.apiContracts
            .call(this.address, value, gasLimit, fn(...params))
            .signAndSend(account)
        }
      )
    };
  }

  private createOutcome (result: ContractExecResult, origin: AccountId, message: ContractABIMessage, params: any[]): ContractCallOutcome {
    let output: string;
    if (result.isSuccess) {
      const { data } = result.asSuccess;
      output = message.returnType
        ? formatData(data, message.returnType).toString()
        : data.toHex();
    } else {
      output = 'Error';
    }

    const outcome = {
      time: Date.now(),
      message,
      origin,
      params,
      result: result,
      success: result.isSuccess,
      output: output && output.length ? output : '()'
    }

    return outcome;
  }

  public constructor (api: ApiObject<ApiType>, abi: ContractABIPre | Abi, decorateMethod: DecorateMethod<ApiType>, address: string | AccountId | Address) {
    super(api, abi, decorateMethod);

    this.address = createType('Address', address);
  }
}
