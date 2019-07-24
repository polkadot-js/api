// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SetIndex } from '@polkadot/types/srml/elections/types';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Vector, Option, createType } from '@polkadot/types';
import { DerivedVoterPositions } from '../types';

import BN from 'bn.js';
import { of, combineLatest, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { drr } from '../util/drr';

/**
 * @name voterPositions
 * @returns An mapping of all current voter accounts to their voter set and global index.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.elections.voterPositions((voters) => {
 *   const { index, setIndex, globalIndex } = voters[ALICE];
 *   console.log(`ALICE is a voter at index ${index} in voter set ${setIndex}, with global index ${globalIndex}.`);
 * });
 * ```
 */
export function voterPositions (api: ApiInterfaceRx): () => Observable<DerivedVoterPositions> {
  return (): Observable<DerivedVoterPositions> =>
    api.query.elections.nextVoterSet<SetIndex>().pipe(
      switchMap((nextVoterSet: SetIndex): Observable<[BN, Vector<Option<AccountId>>[]]> => combineLatest(
        of(api.consts.elections.voterSetSize) as any as Observable<BN>,
        api.query.elections.voters.multi([...Array(+nextVoterSet + 1).keys()].map((_, i): [number] => [i])) as any as Observable<Vector<Option<AccountId>>[]>
      )),
      map((result: [BN, Vector<Option<AccountId>>[]]): DerivedVoterPositions => {
        const [setSize, voters] = result;
        return voters.reduce((result: DerivedVoterPositions, vec, setIndex): DerivedVoterPositions => {
          vec.forEach((e, index): void => {
            // re-create the index based on position 0 is [0][0] and likewise
            // 64 (0..63 in first) is [1][0] (the first index value in set 2)
            const accountId: AccountId | null = e.unwrapOr(null);

            if (accountId) {
              result[accountId.toString()] = {
                globalIndex: setSize.muln(setIndex).addn(index),
                index: new BN(index),
                setIndex: createType<SetIndex>('SetIndex', setIndex)
              };
            }
          });

          return result;
        }, {});
      }),
      drr()
    );
}
