// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';
import type { Bounty, BountyIndex } from '@polkadot/types/interfaces';
import type { Codec, Constructor, InterfaceTypes, Registry } from '@polkadot/types/types';

import { Option, StorageKey } from '@polkadot/types';

export class BountyFactory {
  private readonly __$$_api: ApiPromise;
  private readonly __$$_registry: Registry;

  constructor (api: ApiPromise) {
    this.__$$_api = api;
    this.__$$_registry = this.__$$_api.registry;
  }

  public storageKey = (index: number): StorageKey => {
    const key = new StorageKey(this.__$$_registry, this.__$$_api.query.bounties.bounties.key(this.bountyIndex(index)));

    return key.setMeta(this.__$$_api.query.bounties.bounties.creator.meta);
  };

  public bountyIndex = (index: number): BountyIndex =>
    this.__$$_registry.createType('BountyIndex', index);

  public defaultBounty = (): Bounty =>
    this.__$$_registry.createType('Bounty');

  public optionOf = <T extends Codec>(value: T): Option<T> => {
    const typeName = this.__$$_registry.getClassName(value.constructor as Constructor<T>);

    return new Option<T>(this.__$$_registry, typeName as keyof InterfaceTypes, value);
  };

  public emptyOption = <T extends Codec>(typeName: keyof InterfaceTypes): Option<T> =>
    new Option<T>(this.__$$_registry, typeName);
}
