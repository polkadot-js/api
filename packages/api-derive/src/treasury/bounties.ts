import { memo } from '@polkadot/api-derive/util';
import { ApiInterfaceRx, RxResult } from '@polkadot/api/types';
import { Option, StorageKey } from '@polkadot/types';
import { Bounty, BountyIndex } from '@polkadot/types/interfaces';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

interface DeriveBounties {
}

export type FetchBountiesInputs = {
  keys: () => Observable<StorageKey[]>;
  count: RxResult<() => Observable<BountyIndex>>;
  bountiesQuery: (keys:StorageKey[]) => Observable<Option<Bounty>[]>
};

export function fetchBounties(param: FetchBountiesInputs) {
return   param.count().pipe(switchMap((arg: BountyIndex)  => param.keys())).pipe(map((keys: StorageKey[]) => param.bountiesQuery(keys)))
}

export function bounties (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveBounties> {
  return memo(instanceId, (): Observable<DeriveBounties> =>{
    return fetchBounties({count: api.query.treasury.bountyCount, keys: api.query.treasury.bounties.keys, bountiesQuery: (keys: StorageKey[])=>api.query.treasury.bounties.multi(keys)})
  })
}
