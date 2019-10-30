// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { IKeyringPair } from '@polkadot/types/types';
import { ApiObject, ContractABIMessage, ContractABIPre, ContractCallOutcome, ContractCallResult, ContractCallTypes } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { createType } from '@polkadot/types';
import Abi from '../Abi';
import { formatData } from '../util';
import { BaseWithTxAndRpcCall } from './util';

type ContractCallResultSubscription<ApiType extends ApiTypes, CallType extends ContractCallTypes> = ApiType extends 'rxjs'
  ? Observable<ContractCallResult<CallType>>
  : Promise<ContractCallResult<CallType>>;

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ContractCall<ApiType extends ApiTypes, CallType extends ContractCallTypes> {
  send (account: IKeyringPair | string | AccountId | Address): ContractCallResultSubscription<ApiType, CallType>;
}

export default class Contract<ApiType extends ApiTypes> extends BaseWithTxAndRpcCall<ApiType> {
  public readonly address: Address;

  public call<ApiType extends ApiTypes> (as: 'rpc', message: string, value: BN | number, gasLimit: BN | number, ...params: any[]): ContractCall<ApiType, 'rpc'>;
  public call<ApiType extends ApiTypes> (as: 'tx', message: string, value: BN | number, gasLimit: BN | number, ...params: any[]): ContractCall<ApiType, 'tx'>;
  public call<ApiType extends ApiTypes, CallType extends ContractCallTypes> (as: CallType, message: string, value: BN | number, gasLimit: BN | number, ...params: any[]): ContractCall<ApiType, CallType> {
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
              .signAndSend(account);
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
    };

    return outcome;
  }

  public constructor (api: ApiObject<ApiType>, abi: ContractABIPre | Abi, decorateMethod: DecorateMethod<ApiType>, address: string | AccountId | Address) {
    super(api, abi, decorateMethod);

    this.address = createType('Address', address);
  }
}
