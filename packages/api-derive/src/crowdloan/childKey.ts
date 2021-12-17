// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option } from '@polkadot/types';
import type { PolkadotRuntimeCommonCrowdloanFundInfo } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { ApiInterfaceRx } from '../../types';

import { map } from 'rxjs';

import { u8aConcat, u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { memo } from '../util';

function createChildKey ({ trieIndex }: PolkadotRuntimeCommonCrowdloanFundInfo): string {
  return u8aToHex(
    u8aConcat(
      ':child_storage:default:',
      blake2AsU8a(
        u8aConcat('crowdloan', trieIndex.toU8a())
      )
    )
  );
}

export function childKey (instanceId: string, api: ApiInterfaceRx): (paraId: string | number | BN) => Observable<string | null> {
  return memo(instanceId, (paraId: string | number | BN): Observable<string | null> =>
    api.query.crowdloan.funds<Option<PolkadotRuntimeCommonCrowdloanFundInfo>>(paraId).pipe(
      map((optInfo) =>
        optInfo.isSome
          ? createChildKey(optInfo.unwrap())
          : null
      )
    )
  );
}
