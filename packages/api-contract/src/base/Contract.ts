// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiBase } from '@polkadot/api/base';
import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { Bytes } from '@polkadot/types';
import type { AccountId, ContractExecResult, EventRecord, Weight, WeightV2 } from '@polkadot/types/interfaces';
import type { ISubmittableResult } from '@polkadot/types/types';
import type { Abi } from '../Abi/index.js';
import type { AbiMessage, ContractCallOutcome, ContractOptions, DecodedEvent, WeightAll } from '../types.js';
import type { ContractCallResult, ContractCallSend, ContractQuery, ContractTx, MapMessageQuery, MapMessageTx } from './types.js';

import { map } from 'rxjs';

import { SubmittableResult } from '@polkadot/api';
import { BN, BN_HUNDRED, BN_ONE, BN_ZERO, isUndefined, logger } from '@polkadot/util';

import { applyOnEvent } from '../util.js';
import { Base } from './Base.js';
import { convertWeight, withMeta } from './util.js';

export type ContractConstructor<ApiType extends ApiTypes> = new(api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, address: string | AccountId) => Contract<ApiType>;

// As per Rust, 5 * GAS_PER_SEC
const MAX_CALL_GAS = new BN(5_000_000_000_000).isub(BN_ONE);

const l = logger('Contract');

function createQuery <ApiType extends ApiTypes> (meta: AbiMessage, fn: (origin: string | AccountId | Uint8Array, options: ContractOptions, params: unknown[]) => ContractCallResult<ApiType, ContractCallOutcome>): ContractQuery<ApiType> {
  return withMeta(meta, (origin: string | AccountId | Uint8Array, options: ContractOptions, ...params: unknown[]): ContractCallResult<ApiType, ContractCallOutcome> =>
    fn(origin, options, params)
  );
}

function createTx <ApiType extends ApiTypes> (meta: AbiMessage, fn: (options: ContractOptions, params: unknown[]) => SubmittableExtrinsic<ApiType>): ContractTx<ApiType> {
  return withMeta(meta, (options: ContractOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType> =>
    fn(options, params)
  );
}

export class ContractSubmittableResult extends SubmittableResult {
  readonly contractEvents?: DecodedEvent[] | undefined;

  constructor (result: ISubmittableResult, contractEvents?: DecodedEvent[]) {
    super(result);

    this.contractEvents = contractEvents;
  }
}

export class Contract<ApiType extends ApiTypes> extends Base<ApiType> {
  /**
   * @description The on-chain address for this contract
   */
  readonly address: AccountId;

  readonly #query: MapMessageQuery<ApiType> = {};
  readonly #tx: MapMessageTx<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, address: string | AccountId, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.address = this.registry.createType('AccountId', address);

    this.abi.messages.forEach((m): void => {
      if (isUndefined(this.#tx[m.method])) {
        this.#tx[m.method] = createTx(m, (o, p) => this.#exec(m, o, p));
      }

      if (isUndefined(this.#query[m.method])) {
        this.#query[m.method] = createQuery(m, (f, o, p) => this.#read(m, o, p).send(f));
      }
    });
  }

  public get query (): MapMessageQuery<ApiType> {
    return this.#query;
  }

  public get tx (): MapMessageTx<ApiType> {
    return this.#tx;
  }

  #getGas = (_gasLimit: bigint | BN | string | number | WeightV2, isCall = false): WeightAll => {
    const weight = convertWeight(_gasLimit);

    if (weight.v1Weight.gt(BN_ZERO)) {
      return weight;
    }

    return convertWeight(
      isCall
        ? MAX_CALL_GAS
        : convertWeight(
          this.api.consts.system.blockWeights
            ? (this.api.consts.system.blockWeights as unknown as { maxBlock: WeightV2 }).maxBlock
            : this.api.consts.system['maximumBlockWeight'] as Weight
        ).v1Weight.muln(64).div(BN_HUNDRED)
    );
  };

  #exec = (messageOrId: AbiMessage | string | number, { gasLimit = BN_ZERO, storageDepositLimit = null, value = BN_ZERO }: ContractOptions, params: unknown[]): SubmittableExtrinsic<ApiType> => {
    return this.api.tx.contracts.call(
      this.address,
      value,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore jiggle v1 weights, metadata points to latest
      this._isWeightV1
        ? convertWeight(gasLimit).v1Weight
        : convertWeight(gasLimit).v2Weight,
      storageDepositLimit,
      this.abi.findMessage(messageOrId).toU8a(params)
    ).withResultTransform((result: ISubmittableResult) =>
      // ContractEmitted is the current generation, ContractExecution is the previous generation
      new ContractSubmittableResult(result, applyOnEvent(result, ['ContractEmitted', 'ContractExecution'], (records: EventRecord[]) =>
        records
          .map(({ event: { data: [, data] },topics }): DecodedEvent | null => {
            try {
              return this.abi.decodeEvent(data as Bytes, topics[0]);
            } catch (error) {
              l.error(`Unable to decode contract event: ${(error as Error).message}`);

              return null;
            }
          })
          .filter((decoded): decoded is DecodedEvent => !!decoded)
      ))
    );
  };

  #read = (messageOrId: AbiMessage | string | number, { gasLimit = BN_ZERO, storageDepositLimit = null, value = BN_ZERO }: ContractOptions, params: unknown[]): ContractCallSend<ApiType> => {
    const message = this.abi.findMessage(messageOrId);

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      send: this._decorateMethod((origin: string | AccountId | Uint8Array) =>
        this.api.rx.call.contractsApi.call<ContractExecResult>(
          origin,
          this.address,
          value,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore jiggle v1 weights, metadata points to latest
          this._isWeightV1
            ? this.#getGas(gasLimit, true).v1Weight
            : this.#getGas(gasLimit, true).v2Weight,
          storageDepositLimit,
          message.toU8a(params)
        ).pipe(
          map(({ debugMessage, gasConsumed, gasRequired, result, storageDeposit }): ContractCallOutcome => ({
            debugMessage,
            gasConsumed,
            gasRequired: gasRequired && !convertWeight(gasRequired).v1Weight.isZero()
              ? gasRequired
              : gasConsumed,
            output: result.isOk && message.returnType
              ? this.abi.registry.createTypeUnsafe(message.returnType.lookupName || message.returnType.type, [result.asOk.data.toU8a(true)], { isPedantic: true })
              : null,
            result,
            storageDeposit
          }))
        )
      )
    };
  };
}

export function extendContract <ApiType extends ApiTypes> (type: ApiType, decorateMethod: DecorateMethod<ApiType>): ContractConstructor<ApiType> {
  return class extends Contract<ApiType> {
    static __ContractType = type;

    constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, address: string | AccountId) {
      super(api, abi, address, decorateMethod);
    }
  };
}
