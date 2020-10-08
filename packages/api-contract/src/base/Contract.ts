// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, DecorateMethod, DecoratedRpc, ObsInnerType } from '@polkadot/api/types';
import { RpcInterface } from '@polkadot/rpc-core/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { AnyJson, Codec, CodecArg, IKeyringPair } from '@polkadot/types/types';
import { ApiObject, AbiMessage, ContractCallOutcome } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubmittableResult } from '@polkadot/api';
import { assert, isFunction } from '@polkadot/util';

import Abi from '../Abi';
import { formatData } from '../util';
import Base from './Base';

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

export default class Contract<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly address: Address;

  constructor (api: ApiObject<ApiType>, abi: AnyJson | Abi, decorateMethod: DecorateMethod<ApiType>, address: string | AccountId | Address) {
    super(api, abi, decorateMethod);

    this.address = this.registry.createType('Address', address);
  }

  public get hasRpcContractsCall (): boolean {
    return isFunction(this.api.rx.rpc.contracts?.call);
  }

  protected get _rpcContractsCall (): DecoratedRpc<'rxjs', RpcInterface>['contracts']['call'] {
    assert(this.hasRpcContractsCall, 'You need to connect to a node with the contracts.call RPC method.');

    return this.api.rx.rpc.contracts.call;
  }

  public call (as: 'rpc', messageIndex: number, value: BN | number, gasLimit: BN | number, ...params: CodecArg[]): ContractCall<ApiType, 'rpc'>;
  public call (as: 'tx', messageIndex: number, value: BN | number, gasLimit: BN | number, ...params: CodecArg[]): ContractCall<ApiType, 'tx'>;
  public call<CallType extends ContractCallTypes> (as: CallType, messageIndex: number, value: BN | number, gasLimit: BN | number, ...params: CodecArg[]): ContractCall<ApiType, CallType> {
    assert(messageIndex < this.abi.messages.length, 'Attempted to call invalid contract message');

    const message = this.abi.messages[messageIndex];

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      send: this._decorateMethod(
        as === 'rpc' && this.hasRpcContractsCall
          ? (account: IKeyringPair | string | AccountId | Address): ContractCallResult<'rpc'> =>
            this._rpcContractsCall(
              this.registry.createType('ContractCallRequest', {
                dest: this.address.toString(),
                gasLimit,
                inputData: message(...params),
                origin: account,
                value
              })
            ).pipe(map((result: ContractExecResult): ContractCallOutcome =>
              this._createOutcome(result, account, message, params)
            ))
          : (account: IKeyringPair | string | AccountId | Address): ContractCallResult<'tx'> =>
            this._apiContracts
              .call(this.address, value, gasLimit, message(...params))
              .signAndSend(account)
      )
    };
  }

  private _createOutcome (result: ContractExecResult, origin: IKeyringPair | string | AccountId | Address, message: AbiMessage, params: CodecArg[]): ContractCallOutcome {
    let output: Codec | null = null;

    if (result.isSuccess) {
      const { data } = result.asSuccess;

      output = message.returnType
        ? formatData(this.registry, data, message.returnType.type)
        : this.registry.createType('Raw', data);
    }

    return {
      isSuccess: result.isSuccess,
      message,
      origin: this.registry.createType('AccountId', origin),
      output,
      params,
      result,
      time: Date.now(),
      type: message.returnType?.type || null
    };
  }
}
