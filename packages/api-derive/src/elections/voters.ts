// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from "@polkadot/api/types";
import { Observable } from "rxjs";
import { AccountId, Vector, Option, SetIndex } from "@polkadot/types";
import { switchMap, map } from "rxjs/operators";
import { drr } from '../util/drr';

/**
 * @name voters
 * @returns An mapping of all current voter accounts to their voter set index.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.elections.voters((voters) => {
 *   console.log(`ALICE is a voter in the voter set with index ${voters[ALICE].toString()}.`);
 * });
 * ```
 */
export function voters (api: ApiInterfaceRx): () => Observable<{[key: string]: SetIndex}> {
  return (): Observable<{[key: string]: SetIndex}> =>
    api.query.elections.nextVoterSet<SetIndex>().pipe(
      switchMap((nextVoterSet: SetIndex): Observable<Vector<Option<AccountId>>[]> =>
        api.query.elections.voters.multi([...Array(+nextVoterSet + 1).keys()].map((_, i) => [i])) as any as Observable<Vector<Option<AccountId>>[]>
      ),
      map((voters: Vector<Option<AccountId>>[]): {[key: string]: SetIndex} =>
        voters.reduce((result, vec, setIndex): {[key: string]: SetIndex} => {
          vec.forEach((e): void => {
            // re-create the index based on position 0 is [0][0] and likewise
            // 64 (0..63 in first) is [1][0] (the first index value in set 2)
            const accountId: AccountId | null = e.unwrapOr(null);

            if (accountId) {
              result[accountId.toString()] = new SetIndex(setIndex);
            }
          });

          return result;
        }, {} as {[key: string]: SetIndex})),
      drr()
    )
}
