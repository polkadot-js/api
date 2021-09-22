// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { AnyJson, Registry } from '@polkadot/types/types';

import { ApiBase } from '@polkadot/api/base';
import { assert, isFunction } from '@polkadot/util';

import { Abi } from '../Abi';

export abstract class Base<ApiType extends ApiTypes> {
  public readonly abi: Abi;

  public readonly api: ApiBase<ApiType>;

  public readonly registry: Registry;

  protected readonly _decorateMethod: DecorateMethod<ApiType>;

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, decorateMethod: DecorateMethod<ApiType>) {
    this.abi = abi instanceof Abi
      ? abi
      : new Abi(abi);
    this.api = api;
    this.registry = this.abi.registry;
    this._decorateMethod = decorateMethod;

    assert(!!(api && api.isConnected && api.tx && api.tx.contracts && Object.keys(api.tx.contracts).length), 'Your API has not been initialized correctly and it not decorated with the runtime interfaces for contracts as retrieved from the on-chain runtime');
    assert(isFunction(api.tx.contracts.instantiateWithCode), 'You need to connect to a chain with a runtime with a V3 contracts module. The runtime does not expose api.tx.contracts.instantiateWithCode');
  }
}
