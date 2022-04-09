// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u64 } from '@polkadot/types';
import type { PalletBagsListListBag } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types';
import type { BagBase, BagList, BagListEntry } from './types';

import { map, of, switchMap } from 'rxjs';

import { BN_ZERO, bnToBn } from '@polkadot/util';

import { memo } from '../util';

function unwrap (id: BN, opt: Option<PalletBagsListListBag>): BagBase {
  return {
    bag: opt.unwrapOr(null),
    id,
    key: id.toString()
  };
}

function orderBags (ids: u64[], bags: Option<PalletBagsListListBag>[]): BagList {
  const sorted = ids
    .map((id, index) => unwrap(id, bags[index]))
    .filter(({ bag }) => bag)
    .sort((a, b) => b.id.cmp(a.id))
    .map((base, index): BagListEntry => ({
      ...base,
      bagLower: BN_ZERO,
      bagUpper: base.id,
      index
    }));
  const max = sorted.length - 1;

  return sorted.map((entry, index) =>
    index === max
      ? entry
      // We could probably use a .add(BN_ONE) here
      : { ...entry, bagLower: sorted[index + 1].bagUpper }
  );
}

export function all (instanceId: string, api: DeriveApi): () => Observable<BagList> {
  return memo(instanceId, (): Observable<BagList> =>
    api.query.bagsList.listBags.keys().pipe(
      switchMap((keys) => {
        if (!keys.length) {
          return of([]);
        }

        const ids = keys.map(({ args: [id] }) => id);

        return api.query.listBags.multi<Option<PalletBagsListListBag>[]>(ids).pipe(
          map((bags) => orderBags(ids, bags))
        );
      })
    )
  );
}

export function get (instanceId: string, api: DeriveApi): (id: BN | number) => Observable<BagBase> {
  return memo(instanceId, (_id: BN | number): Observable<BagBase> => {
    const id = bnToBn(_id);

    return api.query.bagsList.listBags(id).pipe(
      map((o) => unwrap(id, o))
    );
  });
}
