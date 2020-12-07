// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BlockNumber } from '@polkadot/types/interfaces';

import { map } from 'rxjs/operators';

import { ApiInterfaceRx } from '@polkadot/api/types';

import { memo } from '../util';

export function eraLength (instanceId: string, api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return memo(instanceId, (): Observable<BlockNumber> =>
    api.derive.session.info().pipe(
      map((info) => info.eraLength)
    ));
}
