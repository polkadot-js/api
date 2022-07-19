// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u32 } from '@polkadot/types';
import type { Hash, Proposal, Votes } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveCollectiveProposal } from '../types';
import type { Collective } from './types';

import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { firstObservable } from '../util';
import { callMethod, withSection } from './helpers';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { Option, u32 } from '@polkadot/types';
export type { Hash, Proposal, Votes } from '@polkadot/types/interfaces';

type Result = [(Hash | Uint8Array | string)[], (Option<Proposal> | null)[], Option<Votes>[]];

function parse (api: DeriveApi, [hashes, proposals, votes]: Result): DeriveCollectiveProposal[] {
  return proposals.map((o, index): DeriveCollectiveProposal => ({
    hash: api.registry.createType('Hash', hashes[index]),
    proposal: o && o.isSome
      ? o.unwrap()
      : null,
    votes: votes[index].unwrapOr(null)
  }));
}

function _proposalsFrom (api: DeriveApi, query: DeriveApi['query']['council'], hashes: (Hash | Uint8Array | string)[]): Observable<DeriveCollectiveProposal[]> {
  return (isFunction(query?.proposals) && hashes.length
    ? combineLatest([
      of(hashes),
      // this should simply be api.query[section].proposalOf.multi<Option<Proposal>>(hashes),
      // however we have had cases on Edgeware where the indices have moved around after an
      // upgrade, which results in invalid on-chain data
      query.proposalOf.multi<Option<Proposal>>(hashes).pipe(
        catchError(() => of(hashes.map(() => null)))
      ),
      query.voting.multi<Option<Votes>>(hashes)
    ])
    : of<Result>([[], [], []])
  ).pipe(
    map((r) => parse(api, r))
  );
}

export function hasProposals (section: Collective): (instanceId: string, api: DeriveApi) => () => Observable<boolean> {
  return withSection(section, (query) =>
    (): Observable<boolean> =>
      of(isFunction(query?.proposals))
  );
}

export function proposals (section: Collective): (instanceId: string, api: DeriveApi) => () => Observable<DeriveCollectiveProposal[]> {
  return withSection(section, (query, api) =>
    (): Observable<DeriveCollectiveProposal[]> =>
      api.derive[section].proposalHashes().pipe(
        switchMap((all) => _proposalsFrom(api, query, all))
      )
  );
}

export function proposal (section: Collective): (instanceId: string, api: DeriveApi) => (hash: Hash | Uint8Array | string) => Observable<DeriveCollectiveProposal | null> {
  return withSection(section, (query, api) =>
    (hash: Hash | Uint8Array | string): Observable<DeriveCollectiveProposal | null> =>
      isFunction(query?.proposals)
        ? firstObservable(_proposalsFrom(api, query, [hash]))
        : of(null)
  );
}

export const proposalCount = callMethod<u32 | null>('proposalCount', null);
export const proposalHashes = callMethod<Hash[]>('proposals', []);
