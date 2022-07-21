// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u64 } from '@polkadot/types';
import type { PalletBagsListListBag } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types';
import type { Bag } from './types';

import { map, of, switchMap } from 'rxjs';

import { BN_ZERO, bnToBn, objectSpread } from '@polkadot/util';

import { memo } from '../util';

function orderBags (ids: BN[], bags: Option<PalletBagsListListBag>[]): Bag[] {
  const sorted = ids
    .map((id, index) => ({
      bag: bags[index].unwrapOr(null),
      id,
      key: id.toString()
    }))
    .sort((a, b) => b.id.cmp(a.id))
    .map((base, index): Bag =>
      objectSpread({
        bagLower: BN_ZERO,
        bagUpper: base.id,
        index
      }, base)
    );
  const max = sorted.length - 1;

  return sorted.map((entry, index) =>
    index === max
      ? entry
      : objectSpread({}, entry, { bagLower: sorted[index + 1].bagUpper })
  );
}

export function _getIds (instanceId: string, api: DeriveApi): (ids: (BN | number)[]) => Observable<Bag[]> {
  return memo(instanceId, (_ids: (BN | number)[]): Observable<Bag[]> => {
    const ids = _ids.map((id) => bnToBn(id));

    return ids.length
      ? (api.query.voterList || api.query.bagsList).listBags.multi<Option<PalletBagsListListBag>>(ids).pipe(
        map((bags) => orderBags(ids, bags))
      )
      : of([]);
  });
}

export function all (instanceId: string, api: DeriveApi): () => Observable<Bag[]> {
  return memo(instanceId, (): Observable<Bag[]> =>
    (api.query.voterList || api.query.bagsList).listBags.keys<[u64]>().pipe(
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
