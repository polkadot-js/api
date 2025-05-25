// Copyright 2017-2025 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiBase } from '@polkadot/api/base';
import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { ISubmittableResult } from '@polkadot/types/types';
import type { Abi } from '../Abi/index.js';
import type { AbiConstructor, BlueprintOptions } from '../types.js';
import type { MapConstructorExec } from './types.js';

import { BN_ZERO, isUndefined } from '@polkadot/util';

import { BaseRevive } from './BaseRevive.js';
import { BlueprintSubmittableResult } from './Blueprint.js';
import { Contract } from './Contract.js';
import { convertWeight, createBluePrintTx, encodeSalt } from './util.js';

export type BlueprintReviveConstructor<ApiType extends ApiTypes> = new(api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash | Uint8Array) => BlueprintRevive<ApiType>;

export class BlueprintRevive<ApiType extends ApiTypes> extends BaseRevive<ApiType> {
  /**
   * @description The on-chain code hash for this blueprint
   */
  readonly codeHash: Hash;

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
    return this.api.tx.revive.instantiate(
      value,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore jiggle v1 weights, metadata points to latest
      this._isWeightV1
        ? convertWeight(gasLimit).v1Weight
        : convertWeight(gasLimit).v2Weight,
      storageDepositLimit,
      this.codeHash,
      this.abi.findConstructor(constructorOrId).toU8a(params),
      encodeSalt(salt)
    ).withResultTransform((result: ISubmittableResult) =>
      new BlueprintSubmittableResult(result, (() => {
        if (result.status.isInBlock || result.status.isFinalized) {
              return new Contract<ApiType>(this.api, this.abi, "0x075e2a9cfb213a68dfa1f5cf6bf6d515ae212cf8", this._decorateMethod);
        }
        return undefined;
      })())
    );
  };
}

export function extendBlueprint <ApiType extends ApiTypes> (type: ApiType, decorateMethod: DecorateMethod<ApiType>): BlueprintReviveConstructor<ApiType> {
  return class extends BlueprintRevive<ApiType> {
    static __BlueprintType = type;

    constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash | Uint8Array) {
      super(api, abi, codeHash, decorateMethod);
    }
  };
}