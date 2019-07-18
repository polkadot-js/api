import { ApiInterfaceRx } from "@polkadot/api/types";
import { Observable } from "rxjs";
import { AccountId, Vector, SetIndex, ApprovalFlag } from "@polkadot/types";
import { map } from "rxjs/operators";
import { drr } from '../util/drr';

export function approvalFlagsToBools(flags: Vector<ApprovalFlag>): boolean[] {
  const bools: boolean[] = [];
  flags.forEach((flag: ApprovalFlag) => {
    const str = flag.toString(2);
    for (const bit of str) {
      bools.push(!!parseInt(bit, 10));
    }
  });
  return bools;
}

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
        map((flags: Vector<ApprovalFlag>) => {console.log(flags); return approvalFlagsToBools(flags);}),
        drr()
    )
}
