// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { AccountId, EventRecord, Hash } from '@polkadot/types/interfaces';
import type { ISubmittableResult } from '@polkadot/types/types';
import type { AbiConstructor, BlueprintOptions, WeightAll } from '../types';
import type { MapConstructorExec } from './types';

import { SubmittableResult } from '@polkadot/api';
import { ApiBase } from '@polkadot/api/base';
import { BN_ZERO, isUndefined } from '@polkadot/util';

import { Abi } from '../Abi';
import { applyOnEvent } from '../util';
import { Base } from './Base';
import { Contract } from './Contract';
import { convertWeight, createBluePrintTx, encodeSalt } from './util';

export interface BlueprintConstructor<ApiType extends ApiTypes> {
  new(api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash | Uint8Array): Blueprint<ApiType>;
}

export class BlueprintSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly contract?: Contract<ApiType>;

  constructor (result: ISubmittableResult, contract?: Contract<ApiType>) {
    super(result);

    this.contract = contract;
  }
}

export class Blueprint<ApiType extends ApiTypes> extends Base<ApiType> {
  /**
   * @description The on-chain code hash for this blueprint
   */
  public readonly codeHash: Hash;

  readonly #tx: MapConstructorExec<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash | Uint8Array, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.codeHash = this.registry.createType('Hash', codeHash);

    this.abi.constructors.forEach((c): void => {
      if (isUndefined(this.#tx[c.method])) {
        this.#tx[c.method] = createBluePrintTx(c, (o, p) => this.#deploy(c, o, p));
      }
    });
  }

  public get tx (): MapConstructorExec<ApiType> {
    return this.#tx;
  }

  #deploy = (constructorOrId: AbiConstructor | string | number, { gasLimit = BN_ZERO, salt, storageDepositLimit = null, value = BN_ZERO }: BlueprintOptions, params: unknown[]): SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>> => {
    return this.api.tx.contracts.instantiate(
      value,
      this._isOldWeight
        // jiggle v1 weights, metadata points to latest
        ? convertWeight(gasLimit).v1Weight as unknown as WeightAll['v2Weight']
        : convertWeight(gasLimit).v2Weight,
      storageDepositLimit,
      this.codeHash,
      this.abi.findConstructor(constructorOrId).toU8a(params),
      encodeSalt(salt)
    ).withResultTransform((result: ISubmittableResult) =>
      new BlueprintSubmittableResult(result, applyOnEvent(result, ['Instantiated'], ([record]: EventRecord[]) =>
        new Contract<ApiType>(this.api, this.abi, record.event.data[1] as AccountId, this._decorateMethod)
      ))
    );
  };
}

export function extendBlueprint <ApiType extends ApiTypes> (type: ApiType, decorateMethod: DecorateMethod<ApiType>): BlueprintConstructor<ApiType> {
  return class extends Blueprint<ApiType> {
    static __BlueprintType = type;

    constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash | Uint8Array) {
      super(api, abi, codeHash, decorateMethod);
    }
  };
}
