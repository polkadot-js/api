// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option, u32 } from '@polkadot/types';
import type { Hash, Proposal, Votes } from '@polkadot/types/interfaces';
import type { DeriveCollectiveProposal } from '../types';
import type { Collective } from './types';

import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { firstObservable } from '../util';
import { callMethod, withSection } from './helpers';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { ApiInterfaceRx } from '@polkadot/api/types';
export type { Option, u32 } from '@polkadot/types';
export type { Hash, Proposal, Votes } from '@polkadot/types/interfaces';

type Result = [(Hash | Uint8Array | string)[], (Option<Proposal> | null)[], Option<Votes>[]];

function parse (api: ApiInterfaceRx, [hashes, proposals, votes]: Result): DeriveCollectiveProposal[] {
  return proposals
    .map((o, index): DeriveCollectiveProposal | null =>
      o && o.isSome
        ? {
          hash: api.registry.createType('Hash', hashes[index]),
          proposal: o.unwrap(),
          votes: votes[index].unwrapOr(null)
        }
        : null
    )
    .filter((proposal): proposal is DeriveCollectiveProposal => !!proposal);
}

function _proposalsFrom (section: string, api: ApiInterfaceRx, hashes: (Hash | Uint8Array | string)[]): Observable<DeriveCollectiveProposal[]> {
  return (isFunction(api.query[section]?.proposals) && hashes.length
    ? combineLatest([
      of(hashes),
      // this should simply be api.query[section].proposalOf.multi<Option<Proposal>>(hashes),
      // however we have had cases on Edgeware where the indices have moved around after an
      // upgrade, which results in invalid on-chain data
      combineLatest(hashes.map((h) =>
        api.query[section].proposalOf<Option<Proposal>>(h).pipe(
          catchError(() => of(null))
        )
      )),
      api.query[section].voting.multi<Option<Votes>>(hashes)
    ])
    : of<Result>([[], [], []])
  ).pipe(
    map((r) => parse(api, r))
  );
}

export function hasProposals (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => () => Observable<boolean> {
  return withSection(_section, (section, api) =>
    (): Observable<boolean> =>
      of(isFunction(api.query[section]?.proposals))
  );
}

export function proposals (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => () => Observable<DeriveCollectiveProposal[]> {
  return withSection(_section, (section, api) =>
    (): Observable<DeriveCollectiveProposal[]> =>
      api.derive[section as 'council'].proposalHashes().pipe(
        switchMap((all) => _proposalsFrom(section, api, all))
      )
  );
}

export function proposal (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => (hash: Hash | Uint8Array | string) => Observable<DeriveCollectiveProposal | null> {
  return withSection(_section, (section, api) =>
    (hash: Hash | Uint8Array | string): Observable<DeriveCollectiveProposal | null> =>
      isFunction(api.query[section]?.proposals)
        ? firstObservable(_proposalsFrom(section, api, [hash]))
        : of(null)
  );
}

export const proposalCount = callMethod<u32 | null>('proposalCount', null);
export const proposalHashes = callMethod<Hash[]>('proposals', []);
