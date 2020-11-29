// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { AnyJson, Registry } from '@polkadot/types/types';

import { ApiBase } from '@polkadot/api/base';
import { assert } from '@polkadot/util';

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

    assert(this.api.rx.tx.contracts && this.api.rx.tx.contracts.putCode, 'You need to connect to a node with the contracts module, the metadata does not enable api.tx.contracts on this instance');
  }
}
