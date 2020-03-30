// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber } from '@polkadot/types/interfaces';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { memo } from '../util';

export function sessionProgress (api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return memo((): Observable<BlockNumber> =>
    api.derive.session.progress().pipe(
      map((info) => info.sessionProgress)
    ));
}
