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

export function fetchBounties (inputs: FetchBountiesInputs): Observable<DeriveBounties> {
  return inputs.count().pipe(
    switchMap(() => inputs.keys()),
    switchMap((keys: StorageKey[]) => inputs.bountiesQuery(extractIds(keys))),
    map(parseResult));
}

export function bounties (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveBounties> {
  return memo(instanceId, (): Observable<DeriveBounties> => {
    return fetchBounties({
      bountiesQuery: (keys: Codec[]) => api.query.treasury.bounties.multi<Option<Bounty>>(keys),
      count: api.query.treasury.bountyCount,
      keys: api.query.treasury.bounties.keys
    });
  });
}

function extractIds (keys: StorageKey[]): Codec[] {
  return keys.map(({ args: [id] }:StorageKey) => id);
}
