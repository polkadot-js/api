// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { DeriveBounties } from '@polkadot/api-derive/types';
import { memo } from '@polkadot/api-derive/util';
import { ApiInterfaceRx, RxResult } from '@polkadot/api/types';
import { Option, StorageKey } from '@polkadot/types';
import { Bounty, BountyIndex } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export type FetchBountiesInputs = {
  keys: () => Observable<StorageKey[]>;
  count: RxResult<() => Observable<BountyIndex>>;
  bountiesQuery: (keys:Codec[]) => Observable<Option<Bounty>[]>
};

function parseResult (value: Option<Bounty>[]): DeriveBounties {
  return {
    bounties: value.map((o) => o.unwrap())
  };
}

export function fetchBounties (api: ApiInterfaceRx): Observable<DeriveBounties> {
  return api.query.treasury.bountyCount().pipe(
    switchMap(() => api.query.treasury.bounties.keys()),
    switchMap((keys: StorageKey[]) => api.query.treasury.bounties.multi<Option<Bounty>>(extractIds(keys))),
    map(parseResult));
}

export function bounties (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveBounties> {
  return memo(instanceId, (): Observable<DeriveBounties> => {
    return fetchBounties(api);
  });
}

function extractIds (keys: StorageKey[]): Codec[] {
  return keys.map(({ args: [id] }:StorageKey) => id);
}
