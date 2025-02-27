// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types.js';
import type { Bag, BagExpanded } from './types.js';

import { map, switchMap } from 'rxjs';

import { objectSpread } from '@polkadot/util';

import { memo } from '../util/index.js';

/**
 * @name expand
 * @description Expands a given bag by retrieving all its nodes (accounts contained within the bag).
 * @param {Bag} bag The bag to be expanded.
 */
export function expand (instanceId: string, api: DeriveApi): (bag: Bag) => Observable<BagExpanded> {
  return memo(instanceId, (bag: Bag): Observable<BagExpanded> =>
    api.derive.bagsList.listNodes(bag.bag).pipe(
      map((nodes) => objectSpread({ nodes }, bag))
    )
  );
}

/**
 * @name getExpanded
 * @description Retrieves and expands a specific bag from the BagsList pallet.
 * @param {BN | number} id The id of the bag to expand.
 */
export function getExpanded (instanceId: string, api: DeriveApi): (id: BN | number) => Observable<BagExpanded> {
  return memo(instanceId, (id: BN | number): Observable<BagExpanded> =>
    api.derive.bagsList.get(id).pipe(
      switchMap((bag) =>
        api.derive.bagsList.expand(bag)
      )
    )
  );
}
