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
      : new Abi(abi, api.registry.getChainProperties());
    this.api = api;
    this.registry = this.abi.registry;
    this._decorateMethod = decorateMethod;

    assert(isFunction(api.rx.tx.contracts?.instantiateWithCode), 'You need to connect to a node with a V3 contracts module. Your node does not expose api.tx.contracts.instantiateWithCode on this instance');
  }
}
