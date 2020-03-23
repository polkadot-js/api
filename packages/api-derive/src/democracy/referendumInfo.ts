// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumInfo, ReferendumInfoTo239 } from '@polkadot/types/interfaces';
import { DerivedReferendum } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';

import { memo } from '../util';
import { retrieveInfo } from './util';

export function referendumInfo (api: ApiInterfaceRx): (index: BN | number) => Observable<DerivedReferendum | null> {
  return memo((index: BN | number): Observable<DerivedReferendum | null> =>
    api.query.democracy.referendumInfoOf<Option<ReferendumInfo | ReferendumInfoTo239>>(index).pipe(
      switchMap((info): Observable<DerivedReferendum | null> =>
        retrieveInfo(api, index, info)
      )
    )
  );
}
