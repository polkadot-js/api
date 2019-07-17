import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Vector, Option, SetIndex } from '@polkadot/types';
import { drr } from '../util/drr';

export function voters (api: ApiInterfaceRx): () => Observable<Option<AccountId>[]> {
  return (): Observable<Option<AccountId>[]> =>
    api.query.elections.nextVoterSet<SetIndex>().pipe(
      switchMap((nextVoterSet: SetIndex): Observable<Vector<Option<AccountId>>[]> =>
        api.query.elections.voters.multi<Vector<Option<AccountId>>>(
          [...Array(+nextVoterSet + 1)].map((_, i): number => i)
        )
      ),
      map((voters: Vector<Option<AccountId>>[]): Option<AccountId>[] =>
        Array.prototype.concat.apply([], voters)),
      drr()
    );
}
