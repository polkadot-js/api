// [object Object]
// SPDX-License-Identifier: Apache-2.0
import { DeriveBounties } from '@polkadot/api-derive/types';
import { memo } from '@polkadot/api-derive/util';
import { ApiInterfaceRx, RxResult } from '@polkadot/api/types';
import { Option, StorageKey } from '@polkadot/types';
import { Bounty, BountyIndex } from '@polkadot/types/interfaces';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export type FetchBountiesInputs = {
  keys: () => Observable<StorageKey[]>;
  count: RxResult<() => Observable<BountyIndex>>;
  bountiesQuery: (keys:StorageKey[]) => Observable<Option<Bounty>[]>
};

export function fetchBounties (param: FetchBountiesInputs) {
  const allBounties = param.count().pipe(switchMap((arg: BountyIndex) => param.keys()), map((keys: StorageKey[]) => param.bountiesQuery(keys)));

  return allBounties;
}

function parseResult (value: Option<Bounty>[]): DeriveBounties {
  return {
    bounties: value.map((o) => o.unwrap())
  };
}

export function bounties (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveBounties> {
  return memo(instanceId, (): Observable<DeriveBounties> => {
    // return fetchBounties({count: api.query.treasury.bountyCount, keys: api.query.treasury.bounties.keys, bountiesQuery: (keys: StorageKey[])=>api.query.treasury.bounties.multi(keys)})
    return fe2(api).pipe(map(parseResult));
  });
}

function fe2 (api: ApiInterfaceRx) {
  return api.query.treasury.bountyCount().pipe(
    switchMap(() => api.query.treasury.bounties.keys()),
    switchMap((keys) => api.query.treasury.bounties.multi<Option<Bounty>>(keys))
  );
}
