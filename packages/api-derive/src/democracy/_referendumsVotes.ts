// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedReferendum, DerivedReferendumVotes } from '../types';

import { Observable, of, combineLatest } from 'rxjs';

import { memo } from '../util';

export function _referendumsVotes (api: ApiInterfaceRx): (referendums: DerivedReferendum[]) => Observable<DerivedReferendumVotes[]> {
  return memo((referendums: DerivedReferendum[]): Observable<DerivedReferendumVotes[]> =>
    referendums.length
      ? combineLatest(
        referendums.map((referendum): Observable<DerivedReferendumVotes> =>
          api.derive.democracy._referendumVotes(referendum)
        )
      )
      : of([])
  );
}
