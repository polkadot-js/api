// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiTypes, DecorateMethod, ObsInnerType } from '@polkadot/api/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { Codec, IKeyringPair } from '@polkadot/types/types';
import { ApiObject, ContractABIMessage, ContractABIPre, ContractCallOutcome } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubmittableResult } from '@polkadot/api';
import { createType } from '@polkadot/types';
import Abi from '../Abi';
import { formatData } from '../util';
import { BaseWithTxAndRpcCall } from './util';

type ContractCallTypes = 'tx' | 'rpc';

type ContractCallResultSubscription<ApiType extends ApiTypes, CallType extends ContractCallTypes> = ApiType extends 'rxjs'
  ? Observable<ContractCallResult<CallType>>
  : Promise<ObsInnerType<ContractCallResult<CallType>>>;

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ContractCall<ApiType extends ApiTypes, CallType extends ContractCallTypes> {
  send (account: IKeyringPair | string | AccountId | Address): ContractCallResultSubscription<ApiType, CallType>;
}

export type ContractCallResult<CallType extends ContractCallTypes> = CallType extends 'rpc'
  ? Observable<ContractCallOutcome>
  : Observable<SubmittableResult>;

export default class Contract<ApiType extends ApiTypes> extends BaseWithTxAndRpcCall<ApiType> {
  public readonly address: Address;

  public call (as: 'rpc', message: string, value: BN | number, gasLimit: BN | number, ...params: any[]): ContractCall<ApiType, 'rpc'>;
  public call (as: 'tx', message: string, value: BN | number, gasLimit: BN | number, ...params: any[]): ContractCall<ApiType, 'tx'>;
  public call<CallType extends ContractCallTypes> (as: CallType, message: string, value: BN | number, gasLimit: BN | number, ...params: any[]): ContractCall<ApiType, CallType> {
    const { fn, def } = this.getMessage(message);

    return {
      send: this.decorateMethod(
        as === 'rpc'
          ? (account: IKeyringPair | string | AccountId | Address): ContractCallResult<'rpc'> => {
            return this.rpcContractsCall(
              createType(this.registry, 'ContractCallRequest', {
                origin: account,
                dest: this.address.toString(),
                value,
                gasLimit,
                inputData: fn(...params)
              })
            )
              .pipe(
                map((result: ContractExecResult): ContractCallOutcome =>
                  this.createOutcome(result, createType(this.registry, 'AccountId', account), def, params)
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
    let output: Codec | null = null;

    if (result.isSuccess) {
      const { data } = result.asSuccess;

      output = message.returnType
        ? formatData(this.registry, data, message.returnType)
        : createType(this.registry, 'U8a', data);
    }

    return {
      time: Date.now(),
      message,
      origin,
      params,
      result,
      isSuccess: result.isSuccess,
      output
    };
  }

  constructor (api: ApiObject<ApiType>, abi: ContractABIPre | Abi, decorateMethod: DecorateMethod<ApiType>, address: string | AccountId | Address) {
    super(api, abi, decorateMethod);

    this.address = createType(this.registry, 'Address', address);
  }
}
