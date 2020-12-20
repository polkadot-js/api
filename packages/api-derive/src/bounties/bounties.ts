// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { DeriveBounties } from '@polkadot/api-derive/types';
import type { Bytes, Option } from '@polkadot/types';
import type { Bounty, BountyIndex } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';

import { memo } from '@polkadot/api-derive/util';
import { combineLatest } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

type Result = [Option<Bounty>[], Option<Bytes>[]];

function parseResult ([maybeBounties, maybeDescriptions]: Result): DeriveBounties {
  const bounties: DeriveBounties = [];

  maybeBounties.forEach((bounty, index) => {
    if (bounty.isSome) {
      bounties.push({ bounty: bounty.unwrap(), description: maybeDescriptions[index].unwrapOrDefault().toUtf8() });
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
          bountyBase.bountyDescriptions.multi<Option<Bytes>>(ids)
        ]);
      }),
      map(parseResult)
    )
  );
}
