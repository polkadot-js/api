import { ApiInterfaceRx } from "@polkadot/api/types";
import { Observable } from "rxjs";
import { AccountId, Vector, Option, SetIndex } from "@polkadot/types";
import { switchMap, map } from "rxjs/operators";
import { drr } from '../util/drr';

export function voters (api: ApiInterfaceRx): () => Observable<Vector<Option<AccountId>>> {
  return (): Observable<Vector<Option<AccountId>>> =>
    api.query.elections.nextVoterSet().pipe(
      switchMap((nextVoterSet: SetIndex) => 
        api.query.elections.voters.multi([...Array(+nextVoterSet + 1)])
      ),
      map((voters: Vector<Option<AccountId>>[]) => [].concat.apply([], voters)),
      drr()
    )
}
