// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option } from '@polkadot/types';
import type { AccountId32 } from '@polkadot/types/interfaces';
import type { PalletBagsListListBag, PalletBagsListListNode } from '@polkadot/types/lookup';
import type { DeriveApi } from '../types';

import { BehaviorSubject, map, of, switchMap, tap, toArray } from 'rxjs';

import { nextTick } from '@polkadot/util';

import { memo } from '../util';
import { getQueryInterface } from './util';

function traverseLinks (api: DeriveApi, head: AccountId32 | string): Observable<PalletBagsListListNode[]> {
  const subject = new BehaviorSubject<AccountId32 | string>(head);
  const query = getQueryInterface(api);

  return subject.pipe(
    switchMap((account) =>
      query.listNodes<Option<PalletBagsListListNode>>(account)
    ),
    tap((node: Option<PalletBagsListListNode>): void => {
      nextTick((): void => {
        node.isSome && node.value.next.isSome
          ? subject.next(node.unwrap().next.unwrap())
          : subject.complete();
      });
    }),
    toArray(), // toArray since we want to startSubject to be completed
    map((all: Option<PalletBagsListListNode>[]) =>
      all.map((o) => o.unwrap())
    )
  );
}

export function listNodes (instanceId: string, api: DeriveApi): (bag: PalletBagsListListBag | null) => Observable<PalletBagsListListNode[]> {
  return memo(instanceId, (bag: PalletBagsListListBag | null): Observable<PalletBagsListListNode[]> =>
    bag && bag.head.isSome
      ? traverseLinks(api, bag.head.unwrap())
      : of([])
  );
}
