// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, StorageKey, u64 } from '@polkadot/types';
import type { PalletBagsListListBag } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types';
import type { BagBase } from './types';

import { map } from 'rxjs';

import { bnToBn } from '@polkadot/util';

import { memo } from '../util';

export function all (instanceId: string, api: DeriveApi): () => Observable<BagBase[]> {
  return memo(instanceId, (): Observable<BagBase[]> =>
    api.query.bagsList.listBags.entries().pipe(
      map((entries: [StorageKey<[u64]>, Option<PalletBagsListListBag>][]) =>
        entries.map(([{ args: [id] }, opt]) => ({
          bag: opt.unwrapOr(null),
          id
        }))
      )
    )
  );
}

export function get (instanceId: string, api: DeriveApi): (id: BN | number) => Observable<BagBase> {
  return memo(instanceId, (_id: BN | number): Observable<BagBase> => {
    const id = bnToBn(_id);

    return api.query.bagsList.listBags(id).pipe(
      map((opt: Option<PalletBagsListListBag>) => ({
        bag: opt.unwrapOr(null),
        id
      }))
    );
  });
}
