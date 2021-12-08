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

import { memo } from '../util';
import { getInstance } from './getInstance';

type Result = [(Hash | Uint8Array | string)[], (Option<Proposal> | null)[], Option<Votes>[]];

function parse (api: ApiInterfaceRx, [hashes, proposals, votes]: Result): DeriveCollectiveProposal[] {
  return proposals
    .map((proposalOpt, index): DeriveCollectiveProposal | null =>
      proposalOpt && proposalOpt.isSome
        ? {
          hash: api.registry.createType('Hash', hashes[index]),
          proposal: proposalOpt.unwrap(),
          votes: votes[index].unwrapOr(null)
        }
        : null
    )
    .filter((proposal): proposal is DeriveCollectiveProposal => !!proposal);
}

function _proposalsFrom (instanceId: string, api: ApiInterfaceRx, section: string): (hashes: (Hash | Uint8Array | string)[]) => Observable<DeriveCollectiveProposal[]> {
  return memo(instanceId, (hashes: (Hash | Uint8Array | string)[]): Observable<DeriveCollectiveProposal[]> =>
    (isFunction(api.query[section]?.proposals) && hashes.length
      ? combineLatest([
        of(hashes),
        // this should simply be api.query[section].proposalOf.multi<Option<Proposal>>(hashes),
        // however we have had cases on Edgeware where the indices have moved around after an
        // upgrade, which results in invalid on-chain data
        combineLatest(hashes.map((hash) =>
          api.query[section].proposalOf<Option<Proposal>>(hash).pipe(
            catchError(() => of(null))
          )
        )),
        api.query[section].voting.multi<Option<Votes>>(hashes)
      ])
      : of<Result>([[], [], []])
    ).pipe(
      map((result) => parse(api, result))
    )
  );
}

export function hasProposals (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => () => Observable<boolean> {
  return (instanceId: string, api: ApiInterfaceRx) => {
    const section = getInstance(api, _section);

    return memo(instanceId, (): Observable<boolean> =>
      of(isFunction(api.query[section]?.proposals))
    );
  };
}

export function proposalCount (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => () => Observable<u32 | null> {
  return (instanceId: string, api: ApiInterfaceRx) => {
    const section = getInstance(api, _section);

    return memo(instanceId, (): Observable<u32 | null> =>
      isFunction(api.query[section].proposalCount)
        ? api.query[section as 'council'].proposalCount()
        : of(null)
    );
  };
}

export function proposalHashes (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => () => Observable<Hash[]> {
  return (instanceId: string, api: ApiInterfaceRx) => {
    const section = getInstance(api, _section);

    return memo(instanceId, (): Observable<Hash[]> =>
      isFunction(api.query[section]?.proposals)
        ? api.query[section as 'council'].proposals()
        : of([])
    );
  };
}

export function proposals (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => () => Observable<DeriveCollectiveProposal[]> {
  return (instanceId: string, api: ApiInterfaceRx) => {
    const section = getInstance(api, _section);
    const proposalsFrom = _proposalsFrom(instanceId, api, section);

    return memo(instanceId, (): Observable<DeriveCollectiveProposal[]> =>
      api.derive[section as 'council'].proposalHashes().pipe(
        switchMap(proposalsFrom)
      )
    );
  };
}

export function proposal (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => (hash: Hash | Uint8Array | string) => Observable<DeriveCollectiveProposal | null> {
  return (instanceId: string, api: ApiInterfaceRx) => {
    const section = getInstance(api, _section);
    const proposalsFrom = _proposalsFrom(instanceId, api, section);

    return memo(instanceId, (hash: Hash | Uint8Array | string): Observable<DeriveCollectiveProposal | null> =>
      isFunction(api.query[section]?.proposals)
        ? proposalsFrom([hash]).pipe(
          map(([proposal]) => proposal)
        )
        : of(null)
    );
  };
}
