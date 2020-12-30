// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { BlockNumber } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';

import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

export function sessionProgress (instanceId: string, api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return memo(instanceId, (): Observable<BlockNumber> =>
    api.derive.session.progress().pipe(
      map((info) => info.sessionProgress)
    ));
}
