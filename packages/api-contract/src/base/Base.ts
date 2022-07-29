// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { Registry } from '@polkadot/types/types';

import { ApiBase } from '@polkadot/api/base';
import { isFunction } from '@polkadot/util';

import { Abi } from '../Abi';

export abstract class Base<ApiType extends ApiTypes> {
  public readonly abi: Abi;

  public readonly api: ApiBase<ApiType>;

  protected readonly _decorateMethod: DecorateMethod<ApiType>;

  constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, decorateMethod: DecorateMethod<ApiType>) {
    this.abi = abi instanceof Abi
      ? abi
      : new Abi(abi, api.registry.getChainProperties());
    this.api = api;

    this._decorateMethod = decorateMethod;

    if (!api || !api.isConnected || !api.tx) {
      throw new Error('Your API has not been initialized correctly and is not connected to a chain');
    } else if (!api.tx.contracts || !isFunction(api.tx.contracts.instantiateWithCode) || api.tx.contracts.instantiateWithCode.meta.args.length !== 6) {
      throw new Error('The runtime does not expose api.tx.contracts.instantiateWithCode with storageDepositLimit');
    } else if (!api.rx.call.contractsApi || !isFunction(api.rx.call.contractsApi.call)) {
      throw new Error('Your runtime does not expose the api.call.contractsApi.call runtime interfaces');
    }
  }

  public get registry (): Registry {
    return this.api.registry;
  }
}
