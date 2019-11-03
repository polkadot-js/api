// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, ApprovalFlag, SetIndex } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Vec } from '@polkadot/types';

import { approvalFlagsToBools } from '../util/approvalFlagsToBools';
import { drr, memo } from '../util';

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
export const approvalsOfAt = memo((api: ApiInterfaceRx): (who: AccountId, at: SetIndex) => Observable<boolean[]> => {
  return memo((who: AccountId | string, at: SetIndex | BN | number): Observable<boolean[]> =>
    api.query.elections.approvalsOf<Vec<ApprovalFlag>>([who.toString(), at]).pipe(
      map((flags: Vec<ApprovalFlag>): boolean[] => approvalFlagsToBools(flags)),
      drr()
    ));
}, true);
