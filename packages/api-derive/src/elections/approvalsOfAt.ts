// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SetIndex } from '@polkadot/types/srml/elections/types';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Observable } from 'rxjs';
import { AccountId, Vector, ApprovalFlag } from '@polkadot/types';
import { map } from 'rxjs/operators';
import { approvalFlagsToBools } from '../util/approvalFlagsToBools';
import { drr } from '../util/drr';

/**
 * @name approvalsOfAt
 * @returns An array of boolean approvals for the account and set index, converted from the returned ApprovalFlag.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.elections.approvalsOfAt(ALICE, new BN(0), (approvals) => {
 *   // approvals === [false, true, ...]
 * });
 * ```
 */
export function approvalsOfAt (api: ApiInterfaceRx): (who: AccountId, at: SetIndex) => Observable<boolean[]> {
  return (who: AccountId, at: SetIndex): Observable<boolean[]> =>
    (api.query.elections.approvalsOf<Vector<ApprovalFlag>>([who.toString(), at]))
      .pipe(
        map((flags: Vector<ApprovalFlag>): boolean[] => approvalFlagsToBools(flags)),
        drr()
      );
}
