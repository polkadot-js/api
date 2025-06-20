// Copyright 2017-2025 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiBase } from '@polkadot/api/base';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { WeightV2 } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

import { isFunction } from '@polkadot/util';

import { Abi } from '../Abi/index.js';

export abstract class Base<ApiType extends ApiTypes> {
  readonly abi: Abi;
  readonly api: ApiBase<ApiType>;

  protected readonly _decorateMethod: DecorateMethod<ApiType>;
  protected readonly _isWeightV1: boolean;
  protected readonly _isRevive: boolean;

  constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, decorateMethod: DecorateMethod<ApiType>) {
    if (!api || !api.isConnected || !api.tx) {
      throw new Error('Your API has not been initialized correctly and is not connected to a chain');
    }

    this.abi = abi instanceof Abi
      ? abi
      : new Abi(abi, api.registry.getChainProperties());
    this.api = api;
    this._decorateMethod = decorateMethod;
    this._isWeightV1 = !api.registry.createType<WeightV2>('Weight').proofSize;
    this._isRevive = this.abi.isRevive;

    if (this._isRevive) {
      if (!api.tx.revive || !isFunction(api.tx.revive.instantiateWithCode) || api.tx.revive.instantiateWithCode.meta.args.length !== 6) {
        throw new Error('The runtime does not expose api.tx.revive.instantiateWithCode with storageDepositLimit');
      } else if (!api.call.reviveApi || !isFunction(api.call.reviveApi.call)) {
        throw new Error('Your runtime does not expose the api.call.reviveApi.call runtime interfaces');
      }
    } else {
      if (!api.tx.contracts || !isFunction(api.tx.contracts.instantiateWithCode) || api.tx.contracts.instantiateWithCode.meta.args.length !== 6) {
        throw new Error('The runtime does not expose api.tx.contracts.instantiateWithCode with storageDepositLimit');
      } else if (!api.call.contractsApi || !isFunction(api.call.contractsApi.call)) {
        throw new Error('Your runtime does not expose the api.call.contractsApi.call runtime interfaces');
      }
    }
  }

  public get registry (): Registry {
    return this.api.registry;
  }
}
