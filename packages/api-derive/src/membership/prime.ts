// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';

import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

export function prime (instanceId: string, api: ApiInterfaceRx): () => Observable<AccountId | null> {
  const [council] = api.registry.getModuleInstances(api.runtimeVersion.specName.toString(), 'membership') || ['membership'];

  return memo(instanceId, (): Observable<AccountId | null> =>
    api.query[council].prime<Option<AccountId>>().pipe(
      map((optPrime): AccountId | null =>
        optPrime.unwrapOr(null)
      )
    )
  );
}
