// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, DecorateMethod, ObsInnerType } from '@polkadot/api/types';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { AccountId, ContractExecResult } from '@polkadot/types/interfaces';
import { AnyJson, CodecArg, IKeyringPair } from '@polkadot/types/types';
import { ApiObject, AbiMessage, ContractCallOutcome } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubmittableResult } from '@polkadot/api';
import { assert, isFunction } from '@polkadot/util';

import Abi from '../Abi';
import { encodeMessage, formatData } from '../util';
import Base from './Base';

type ContractCallTypes = 'tx' | 'rpc';

type ContractCallResultSubscription<ApiType extends ApiTypes, CallType extends ContractCallTypes> = ApiType extends 'rxjs'
  // eslint-disable-next-line no-use-before-define
  ? Observable<ContractCallResult<CallType>>
  // eslint-disable-next-line no-use-before-define
  : Promise<ObsInnerType<ContractCallResult<CallType>>>;

export interface ContractRead<ApiType extends ApiTypes> {
  send (account: IKeyringPair | string | AccountId): ContractCallResultSubscription<ApiType, 'rpc'>;
}

export type ContractCallResult<CallType extends ContractCallTypes> = CallType extends 'rpc'
  ? Observable<ContractCallOutcome>
  : Observable<SubmittableResult>;

export default class Contract<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly address: AccountId;

  constructor (api: ApiObject<ApiType>, abi: AnyJson | Abi, address: string | AccountId, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.address = this.registry.createType('AccountId', address);
  }

  public get hasRpcContractsCall (): boolean {
    return isFunction(this.api.rx.rpc.contracts?.call);
  }

  public exec (messageOrIndex: AbiMessage | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]): SubmittableExtrinsic<ApiType> {
    return this.api.tx.contracts.call(this.address, value, gasLimit, encodeMessage(this.registry, this.abi.findMessage(messageOrIndex), params)) as SubmittableExtrinsic<ApiType>;
  }

  public read (messageOrIndex: AbiMessage | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]): ContractRead<ApiType> {
    assert(this.hasRpcContractsCall, 'Your node does not support contract RPC read calls');

    const message = this.abi.findMessage(messageOrIndex);

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      send: this._decorateMethod((account: IKeyringPair | string | AccountId): ContractCallResult<'rpc'> =>
        this.api.rx.rpc.contracts.call({
          dest: this.address,
          gasLimit,
          inputData: encodeMessage(this.registry, message, params),
          origin: account,
          value
        }).pipe(
          map((result: ContractExecResult): ContractCallOutcome => ({
            output: result.isSuccess && message.returnType
              ? formatData(this.registry, result.asSuccess.data, message.returnType)
              : null,
            result
          }))
        )
      )
    };
  }
}
