import BN from 'bn.js';
import { ApiInterfaceRx } from "@polkadot/api/types";
import { Observable } from "rxjs";
import { AccountId, Vector, SetIndex, ApprovalFlag } from "@polkadot/types";
import { switchMap, map } from "rxjs/operators";
import { drr } from '../util/drr';

export function approvalFlagToBool(flags: Vector<ApprovalFlag>): boolean[] {
  const bools: boolean[] = [];
  flags.forEach((flag: ApprovalFlag) =>
    Array(flag.bitLength()).forEach((bit) =>
      // for each bit in flag, do: flag & (1 << bit) !== 0
      bools.push(!flag.toBn().uand((new BN(1)).shln(bit)).isZero())))
  return bools;
}

export function approvalsOf (api: ApiInterfaceRx): (who: AccountId) => Observable<Vector<ApprovalFlag>> {
  return (who: AccountId): Observable<Vector<ApprovalFlag>> =>
    api.query.elections.nextVoterSet().pipe(
      switchMap((nextVoterSet: SetIndex) => 
        api.query.elections.approvalsOf.multi([...Array(+nextVoterSet + 1)].map((_, i) => [who, i]))
      ),
      map((votes: Vector<ApprovalFlag>[]) => votes.find((v) => v.length > 0) || new Vector(ApprovalFlag, [])),
      drr()
    )
}
