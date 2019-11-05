// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber } from '@polkadot/types/interfaces';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { drr } from '../util';
import { info } from './info';

export function sessionProgress (api: ApiInterfaceRx): () => Observable<BlockNumber> {
  const infoCall = info(api);

  return (): Observable<BlockNumber> =>
    infoCall().pipe(
      map(({ sessionProgress }): BlockNumber => sessionProgress),
      drr()
    );
}
