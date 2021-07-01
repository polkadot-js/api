// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { Collective } from './types';

import { isFunction } from '@polkadot/util';
import { of } from '@polkadot/x-rxjs';

import { memo } from '../util';

export function proposalHashes (instanceId: string, api: ApiInterfaceRx, _section: Collective): () => Observable<Hash[]> {
  const [section] = api.registry.getModuleInstances(api.runtimeVersion.specName.toString(), _section) || [_section];

  return memo(instanceId, (): Observable<Hash[]> =>
    isFunction(api.query[section]?.proposals)
      ? api.query[section as 'council'].proposals()
      : of([])
  );
}
