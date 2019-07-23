// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SetIndex } from '@polkadot/types/srml/elections/types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, BlockNumber, VoteIndex } from '@polkadot/types';

import { DerivedElectionsInfo } from '../types';
import { drr } from '../util/drr';

/**
 * @name info
 * @returns An object containing the combined results of the storage queries for
 * all relevant election module properties.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.elections.info(([members, candidates]) => {
 *   console.log(`There are currently ${members.length} council members and ${candidates.length} prospective council candidates.`);
 * });
 * ```
 */
export function info (api: ApiInterfaceRx): () => Observable<DerivedElectionsInfo> {
  return (): Observable<DerivedElectionsInfo> => {
    return (
      api.queryMulti([
        api.query.elections.members,
        api.query.elections.candidates,
        api.query.elections.candidateCount,
        api.query.elections.desiredSeats,
        api.query.elections.termDuration,
        api.query.elections.voteCount,
        api.query.elections.voterCount
      ]) as any as Observable<[[AccountId, BlockNumber][], AccountId[], BN, BN, BlockNumber, VoteIndex, SetIndex]>
    ).pipe(
      map(([members, candidates, candidateCount, desiredSeats, termDuration, voteCount, voterCount]): DerivedElectionsInfo => ({
        members: members.reduce(
          (record: Record<string, BlockNumber>, [accountId, blockNumber]): Record<string, BlockNumber> => {
            record[accountId.toString()] = blockNumber;
            return record;
          },
          {}
        ),
        candidates,
        candidateCount,
        desiredSeats,
        termDuration,
        voteCount,
        voterCount
      } as unknown as DerivedElectionsInfo)),
      drr()
    );
  };
}
