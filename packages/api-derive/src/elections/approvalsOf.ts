import BN from 'bn.js';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Vector, SetIndex, ApprovalFlag } from '@polkadot/types';
import { drr } from '../util/drr';

export function approvalFlagToBool (flags: Vector<ApprovalFlag>): boolean[] {
  const bools: boolean[] = [];
  for (const flag of flags) {
    for (const bit of Array(flag.bitLength()).map((_, i): number => i)) {
      bools.push(!flag.toBn().uand((new BN(1)).shln(bit)).isZero());
    }
  }
  return bools;
}

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
