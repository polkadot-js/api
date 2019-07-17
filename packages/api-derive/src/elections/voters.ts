import { ApiInterfaceRx } from '@polkadot/api/types';
import { Observable } from 'rxjs';
import { AccountId, Vector, Option, SetIndex } from '@polkadot/types';
import { switchMap, map } from 'rxjs/operators';
import { drr } from '../util/drr';

export function voters (api: ApiInterfaceRx): () => Observable<Option<AccountId>[]> {
  return (): Observable<Option<AccountId>[]> =>
    api.query.elections.nextVoterSet().pipe(
      switchMap((nextVoterSet: SetIndex): Observable<Vector<Option<AccountId>>[]> =>
        api.query.elections.voters.multi([...Array(+nextVoterSet + 1)].map((_, i): number => i))
      ),
      map((voters: Vector<Option<AccountId>>[]): Option<AccountId>[] =>
        Array.prototype.concat.apply([], voters)),
      drr()
    );
}
