// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BlockNumber } from '@polkadot/types/interfaces';
import type { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { ApiInterfaceRx } from '@polkadot/api/types';

import { memo } from '../util';

export function sessionProgress (instanceId: string, api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return memo(instanceId, (): Observable<BlockNumber> =>
    api.derive.session.progress().pipe(
      map((info) => info.sessionProgress)
    ));
}
