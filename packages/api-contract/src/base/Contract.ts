// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, DecorateMethod, ObsInnerType } from '@polkadot/api/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { AnyJson, Codec, CodecArg, IKeyringPair } from '@polkadot/types/types';
import { ApiObject, AbiMessage, ContractCallOutcome } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubmittableResult } from '@polkadot/api';
import { assert, isFunction, isNumber } from '@polkadot/util';

import Abi from '../Abi';
import { formatData } from '../util';
import Base from './Base';
import { SignerOptions } from '@polkadot/api/submittable/types';

type ContractCallTypes = 'tx' | 'rpc';

type ContractCallResultSubscription<ApiType extends ApiTypes, CallType extends ContractCallTypes> = ApiType extends 'rxjs'
  // eslint-disable-next-line no-use-before-define
  ? Observable<ContractCallResult<CallType>>
  // eslint-disable-next-line no-use-before-define
  : Promise<ObsInnerType<ContractCallResult<CallType>>>;

export interface ContractExec<ApiType extends ApiTypes> {
  signAndSend (account: IKeyringPair | string | AccountId | Address, options?: Partial<SignerOptions>): ContractCallResultSubscription<ApiType, 'tx'>;
}

export interface ContractRead<ApiType extends ApiTypes> {
  send (account: IKeyringPair | string | AccountId | Address): ContractCallResultSubscription<ApiType, 'rpc'>;
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

  private _createInput (message: AbiMessage | number, params: CodecArg[]): [Uint8Array, AbiMessage] {
    const fn = isNumber(message)
      ? this.abi.messages[message]
      : message;

    assert(fn, 'Attempted to call an invalid contract message');

    return [fn(...params), fn];
  }

  public exec = (message: AbiMessage | number, value: BN | string | number, gasLimit: BN | string | number, ...params: CodecArg[]): ContractExec<ApiType> => {
    const [inputData] = this._createInput(message, params);

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      signAndSend: this._decorateMethod((account: IKeyringPair | string | AccountId | Address, options?: Partial<SignerOptions>): ContractCallResult<'tx'> =>
        this._apiContracts
          .call(this.address, value, gasLimit, inputData)
          .signAndSend(account, options)
      )
    };
  }

  public read = (message: AbiMessage | number, value: BN | string | number, gasLimit: BN | string | number, ...params: CodecArg[]): ContractRead<ApiType> => {
    assert(this.hasRpcContractsCall, 'Your node does not support contract RPC read calls');

    const [inputData, messageFn] = this._createInput(message, params);

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      send: this._decorateMethod((account: IKeyringPair | string | AccountId | Address): ContractCallResult<'rpc'> =>
        this.api.rx.rpc.contracts.call(
          this.registry.createType('ContractCallRequest', {
            dest: this.address.toString(),
            gasLimit,
            inputData,
            origin: account,
            value
          })
        ).pipe(
          map((result: ContractExecResult): ContractCallOutcome => {
            let output: Codec | null = null;

            if (result.isSuccess) {
              const { data } = result.asSuccess;

              output = messageFn.returnType
                ? formatData(this.registry, data, messageFn.returnType.type)
                : this.registry.createType('Raw', data);
            }

            return {
              isSuccess: result.isSuccess,
              message: messageFn,
              origin: this.registry.createType('AccountId', origin),
              output,
              params,
              result,
              time: Date.now(),
              type: messageFn.returnType?.type || null
            };
          })
        )
      )
    };
  }
}
