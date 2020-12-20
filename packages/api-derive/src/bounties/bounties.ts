// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { DeriveBounties } from '@polkadot/api-derive/types';
import type { Bytes, Option, StorageKey } from '@polkadot/types';
import type { Bounty, BountyIndex } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';

import { memo } from '@polkadot/api-derive/util';
import { combineLatest } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

function parseResult ([maybeBounties, maybeDescriptions]: [Option<Bounty>[], Option<Bytes>[]]): DeriveBounties {
  const bounties: DeriveBounties = [];

  maybeBounties.forEach((bounty, index) => {
    if (bounty.isSome) {
      bounties.push({ bounty: bounty.unwrap(), description: maybeDescriptions[index].unwrapOrDefault().toUtf8() });
    }
  });

  return bounties;
}

function extractIds (keys: StorageKey[]): Codec[] {
  return keys.map(({ args: [id] }: StorageKey) => id);
}

export function bounties (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveBounties> {
  const bountyBase = api.query.bounties
    ? api.query.bounties
    : api.query.treasury;

  return memo(instanceId, (): Observable<DeriveBounties> =>
    bountyBase.bountyCount<BountyIndex>().pipe(
      switchMap(() => api.query.treasury.bounties.keys()),
      switchMap((keys) => combineLatest([
        bountyBase.bounties.multi<Option<Bounty>>(extractIds(keys)),
        bountyBase.bountyDescriptions.multi<Option<Bytes>>(extractIds(keys))
      ])),
      map(parseResult)
    )
  );
}
