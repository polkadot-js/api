// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, DecorateMethod, ObsInnerType } from '@polkadot/api/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { Codec, CodecArg, IKeyringPair } from '@polkadot/types/types';
import { ApiObject, ContractABIMessage, ContractABIPre, ContractCallOutcome } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubmittableResult } from '@polkadot/api';
import Abi from '../Abi';
import { formatData } from '../util';
import { BaseWithTxAndRpcCall } from './util';

type ContractCallTypes = 'tx' | 'rpc';

type ContractCallResultSubscription<ApiType extends ApiTypes, CallType extends ContractCallTypes> = ApiType extends 'rxjs'
  // eslint-disable-next-line no-use-before-define
  ? Observable<ContractCallResult<CallType>>
  // eslint-disable-next-line no-use-before-define
  : Promise<ObsInnerType<ContractCallResult<CallType>>>;

export interface ContractCall<ApiType extends ApiTypes, CallType extends ContractCallTypes> {
  send (account: IKeyringPair | string | AccountId | Address): ContractCallResultSubscription<ApiType, CallType>;
}

export type ContractCallResult<CallType extends ContractCallTypes> = CallType extends 'rpc'
  ? Observable<ContractCallOutcome>
  : Observable<SubmittableResult>;

export default class Contract<ApiType extends ApiTypes> extends BaseWithTxAndRpcCall<ApiType> {
  public readonly address: Address;

  constructor (api: ApiObject<ApiType>, abi: ContractABIPre | Abi, decorateMethod: DecorateMethod<ApiType>, address: string | AccountId | Address) {
    super(api, abi, decorateMethod);

    this.address = this.registry.createType('Address', address);
  }

  public call (as: 'rpc', message: string, value: BN | number, gasLimit: BN | number, ...params: CodecArg[]): ContractCall<ApiType, 'rpc'>;
  public call (as: 'tx', message: string, value: BN | number, gasLimit: BN | number, ...params: CodecArg[]): ContractCall<ApiType, 'tx'>;
  public call<CallType extends ContractCallTypes> (as: CallType, message: string, value: BN | number, gasLimit: BN | number, ...params: CodecArg[]): ContractCall<ApiType, CallType> {
    const { def, fn } = this.getMessage(message);

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      send: this.decorateMethod(
        as === 'rpc' && this.hasRpcContractsCall
          ? (account: IKeyringPair | string | AccountId | Address): ContractCallResult<'rpc'> =>
            this._rpcContractsCall(
              this.registry.createType('ContractCallRequest', {
                dest: this.address.toString(),
                gasLimit,
                inputData: fn(...params),
                origin: account,
                value
              })
            ).pipe(map((result: ContractExecResult): ContractCallOutcome =>
              this._createOutcome(result, this.registry.createType('AccountId', account), def, params)
            ))
          : (account: IKeyringPair | string | AccountId | Address): ContractCallResult<'tx'> =>
            this._apiContracts
              .call(this.address, value, gasLimit, fn(...params))
              .signAndSend(account)
      )
    };
  }

  private _createOutcome (result: ContractExecResult, origin: AccountId, message: ContractABIMessage, params: CodecArg[]): ContractCallOutcome {
    let output: Codec | null = null;

    if (result.isSuccess) {
      const { data } = result.asSuccess;

      output = message.returnType
        ? formatData(this.registry, data, message.returnType)
        : this.registry.createType('Raw', data);
    }

    return {
      isSuccess: result.isSuccess,
      message,
      origin,
      output,
      params,
      result,
      time: Date.now()
    };
  }
}
