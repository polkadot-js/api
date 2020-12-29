// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { DeriveBounties } from '@polkadot/api-derive/types';
import type { Bytes, Option } from '@polkadot/types';
import type { Bounty, BountyIndex } from '@polkadot/types/interfaces';

import { memo } from '@polkadot/api-derive/util';
import { Codec } from '@polkadot/types/types';
import { combineLatest, Observable, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

type Result = [Option<Bounty>[], Option<Bytes>[], Codec[]];

function parseResult (api: ApiInterfaceRx, [maybeBounties, maybeDescriptions, ids]: Result): DeriveBounties {
  const bounties: DeriveBounties = [];

  maybeBounties.forEach((bounty, index) => {
    if (bounty.isSome) {
      bounties.push({
        bounty: bounty.unwrap(),
        description: maybeDescriptions[index].unwrapOrDefault().toUtf8(),
        index: api.registry.createType('BountyIndex', ids[index])
      });
    }
  });

  return bounties;
}

export function bounties (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveBounties> {
  const bountyBase = api.query.bounties
    ? api.query.bounties
    : api.query.treasury;

  return memo(instanceId, (): Observable<DeriveBounties> =>
    bountyBase.bountyCount<BountyIndex>().pipe(
      switchMap(() => bountyBase.bounties.keys()),
      switchMap((keys): Observable<Result> => {
        const ids = keys.map(({ args: [id] }) => id);

        return combineLatest([
          bountyBase.bounties.multi<Option<Bounty>>(ids),
          bountyBase.bountyDescriptions.multi<Option<Bytes>>(ids),
          of(ids)
        ]);
      }),
      map(([maybeBounties, maybeDescriptions, ids]) => parseResult(api, [maybeBounties, maybeDescriptions, ids]))
    )
  );
}
