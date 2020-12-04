// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { DeriveBounties } from '@polkadot/api-derive/types';
import { memo } from '@polkadot/api-derive/util';
import { ApiInterfaceRx, RxResult } from '@polkadot/api/types';
import { Bytes, Option, StorageKey } from '@polkadot/types';
import { Bounty, BountyIndex } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export type FetchBountiesInputs = {
  keys: () => Observable<StorageKey[]>;
  count: RxResult<() => Observable<BountyIndex>>;
  bountiesQuery: (keys: Codec[]) => Observable<Option<Bounty>[]>
};

function parseResult ([maybeBounties, maybeDescriptions]: [Option<Bounty>[], Option<Bytes>[]]): DeriveBounties {
  const bounties: Bounty[] = maybeBounties.map((maybeBounty) => maybeBounty.unwrap());
  const bountyDescriptions: Bytes[] = maybeDescriptions.map((maybeDescription) => maybeDescription.unwrapOrDefault());

  return {
    bounties,
    bountyDescriptions
  };
}

export function fetchBounties (api: ApiInterfaceRx): Observable<DeriveBounties> {
  return api.query.treasury.bountyCount().pipe(
    switchMap(() => api.query.treasury.bounties.keys()),
    switchMap((keys: StorageKey[]) => {
      return combineLatest([
        api.query.treasury.bounties.multi<Option<Bounty>>(extractIds(keys)),
        api.query.treasury.bountyDescriptions.multi<Option<Bytes>>(extractIds(keys))
      ]
      ).pipe(map(parseResult));
    }));
}

export function bounties (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveBounties> {
  return memo(instanceId, (): Observable<DeriveBounties> => fetchBounties(api));
}

function extractIds (keys: StorageKey[]): Codec[] {
  return keys.map(({ args: [id] }: StorageKey) => id);
}
