// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { AccountId, ContractExecResult } from '@polkadot/types/interfaces';
import { AnyJson, CodecArg } from '@polkadot/types/types';
import { AbiMessage, ContractCallOutcome } from '../types';
import { ContractCallResult, ContractRead, MapMessageExec, MapMessageRead } from './types';

import BN from 'bn.js';
import { map } from 'rxjs/operators';
import ApiBase from '@polkadot/api/base';
import { assert, isFunction, isUndefined, stringCamelCase } from '@polkadot/util';

import Abi from '../Abi';
import { encodeMessage, formatData } from '../util';
import Base from './Base';

export default class Contract<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly address: AccountId;

  public readonly tx: MapMessageExec<ApiType> = {};

  public readonly query: MapMessageRead<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, address: string | AccountId, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.address = this.registry.createType('AccountId', address);

    this.abi.messages.forEach((m): void => {
      const messageName = stringCamelCase(m.identifier);

      if (isUndefined(this.tx[messageName])) {
        this.tx[messageName] = (value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]) =>
          this.#exec(m, value, gasLimit, params);
      }

      if (isUndefined(this.query[messageName])) {
        this.query[messageName] = (value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]) =>
          this.#read(m, value, gasLimit, params);
      }
    });
  }

  public get hasRpcContractsCall (): boolean {
    return isFunction(this.api.rx.rpc.contracts?.call);
  }

  #exec = (messageOrId: AbiMessage | string | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, params: CodecArg[]): SubmittableExtrinsic<ApiType> => {
    return this.api.tx.contracts.call(this.address, value, gasLimit, encodeMessage(this.registry, this.abi.findMessage(messageOrId), params));
  }

  #read = (messageOrId: AbiMessage | string | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, params: CodecArg[]): ContractRead<ApiType> => {
    assert(this.hasRpcContractsCall, 'Your node does not support contract RPC read calls');

    const message = this.abi.findMessage(messageOrId);

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      send: this._decorateMethod((account: string | AccountId | Uint8Array): ContractCallResult<'rpc'> =>
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

  public exec (messageOrId: AbiMessage | string | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]): SubmittableExtrinsic<ApiType> {
    return this.#exec(messageOrId, value, gasLimit, params);
  }

  public read (messageOrId: AbiMessage | string | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]): ContractRead<ApiType> {
    return this.#read(messageOrId, value, gasLimit, params);
  }
}
