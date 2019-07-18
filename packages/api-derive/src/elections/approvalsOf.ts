import { ApiInterfaceRx } from "@polkadot/api/types";
import { Observable } from "rxjs";
import { AccountId, Vector, SetIndex, ApprovalFlag } from "@polkadot/types";
import { switchMap, map } from "rxjs/operators";
import { drr } from '../util/drr';
import { approvalFlagsToBools } from './approvalsOfAt';

/**
 * @name approvalsOf
 * @returns A nested array of boolean approvals for the given account in each voter set index, converted from its ApprovalFlag(s).
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.elections.approvalsOf(ALICE, (approvals) => {
 *   // approvals === [[false], [true, false], ...]
 * });
 * ```
 */
export function approvalsOf (api: ApiInterfaceRx): (who: AccountId) => Observable<boolean[][]> {
  return (who: AccountId): Observable<boolean[][]> =>
    (api.query.elections.nextVoterSet<SetIndex>())
      .pipe(
        switchMap((nextVoterSet: SetIndex): Observable<Vector<ApprovalFlag>[]> =>
          api.query.elections.approvalsOf.multi([...Array(nextVoterSet.toNumber() + 1).keys()].map(i => [who.toString(), i])) as any as Observable<Vector<ApprovalFlag>[]>
        ),
        map((votes: Vector<ApprovalFlag>[]) =>
          votes.map((flags: Vector<ApprovalFlag>) => approvalFlagsToBools(flags))
        ),
        drr()
    )
}
