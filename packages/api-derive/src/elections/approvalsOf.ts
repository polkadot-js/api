// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Vector, SetIndex, ApprovalFlag } from '@polkadot/types';
import { drr } from '../util/drr';

export function approvalsOf (api: ApiInterfaceRx): (who: AccountId) => Observable<Vector<ApprovalFlag>> {
  return (who: AccountId): Observable<Vector<ApprovalFlag>> =>
    api.query.elections.nextVoterSet<SetIndex>().pipe(
      switchMap((nextVoterSet: SetIndex): Observable<Vector<ApprovalFlag>[]> =>
        api.query.elections.approvalsOf.multi(
          [...Array(+nextVoterSet + 1)].map((_, i): [AccountId, number] => [who, i])
        )
      ),
      map((votes: Vector<ApprovalFlag>[]): Vector<ApprovalFlag> =>
        votes.find((v): boolean => v.length > 0) || new Vector(ApprovalFlag, [])),
      drr()
    );
}
