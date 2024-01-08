// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u64 } from '@polkadot/types';
import type { PalletBagsListListBag } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types.js';
import type { Bag } from './types.js';

import { map, of, switchMap } from 'rxjs';

import { BN_ZERO, bnToBn, objectSpread } from '@polkadot/util';

import { memo } from '../util/index.js';
import { getQueryInterface } from './util.js';

function orderBags (ids: BN[], bags: Option<PalletBagsListListBag>[]): Bag[] {
  const sorted = ids
    .map((id, index) => ({
      bag: bags[index].unwrapOr(null),
      id,
      key: id.toString()
    }))
    .sort((a, b) => b.id.cmp(a.id));
  const max = sorted.length - 1;

  return sorted.map((entry, index): Bag =>
    objectSpread(entry, {
      bagLower: index === max
        ? BN_ZERO
        : sorted[index + 1].id,
      bagUpper: entry.id,
      index
    })
  );
}

export function _getIds (instanceId: string, api: DeriveApi): (ids: (BN | number)[]) => Observable<Bag[]> {
  const query = getQueryInterface(api);

  return memo(instanceId, (_ids: (BN | number)[]): Observable<Bag[]> => {
    const ids = _ids.map((id) => bnToBn(id));

    return ids.length
      ? query.listBags.multi<Option<PalletBagsListListBag>>(ids).pipe(
        map((bags) => orderBags(ids, bags))
      )
      : of([]);
  });
}

export function all (instanceId: string, api: DeriveApi): () => Observable<Bag[]> {
  const query = getQueryInterface(api);

  return memo(instanceId, (): Observable<Bag[]> =>
    query.listBags.keys<[u64]>().pipe(
      switchMap((keys) =>
        api.derive.bagsList._getIds(keys.map(({ args: [id] }) => id))
      ),
      map((list) =>
        list.filter(({ bag }) => bag)
      )
    )
  );
}

export function get (instanceId: string, api: DeriveApi): (id: BN | number) => Observable<Bag> {
  return memo(instanceId, (id: BN | number): Observable<Bag> =>
    api.derive.bagsList._getIds([bnToBn(id)]).pipe(
      map((bags) => bags[0])
    )
  );
}
