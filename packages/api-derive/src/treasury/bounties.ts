// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { DeriveBounties } from '@polkadot/api-derive/types';
import type { Bytes, Option, StorageKey } from '@polkadot/types';
import type { Bounty } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';

import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '@polkadot/api-derive/util';

function parseResult ([maybeBounties, maybeDescriptions]: [Option<Bounty>[], Option<Bytes>[]]): DeriveBounties {
  const bounties: Bounty[] = [];
  const bountyDescriptions: Bytes[] = [];

  maybeBounties.forEach((bounty, index) => {
    if (bounty.isSome) {
      bounties.push(bounty.unwrap());
      bountyDescriptions.push(maybeDescriptions[index].unwrapOrDefault());
    }
  });

  return {
    bounties,
    bountyDescriptions
  };
}

function extractIds (keys: StorageKey[]): Codec[] {
  return keys.map(({ args: [id] }: StorageKey) => id);
}

export function bounties (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveBounties> {
  return memo(instanceId, (): Observable<DeriveBounties> => api.query.treasury.bountyCount().pipe(
    switchMap(() => api.query.treasury.bounties.keys()),
    switchMap((keys: StorageKey[]) => {
      return combineLatest([
        api.query.treasury.bounties.multi<Option<Bounty>>(extractIds(keys)),
        api.query.treasury.bountyDescriptions.multi<Option<Bytes>>(extractIds(keys))
      ]
      ).pipe(map(parseResult));
    })));
}
