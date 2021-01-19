// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { bool } from '@polkadot/types';
import type { Releases } from '@polkadot/types/interfaces';
import type { Logger } from '@polkadot/util/types';

import { u8aToHex } from '@polkadot/util';
import { combineLatest, Observable, of } from '@polkadot/x-rxjs';
import { map, take } from '@polkadot/x-rxjs/operators';

// the order and types needs to map with the all array setup below
type Extracted = [bool | null, bool | null, Releases | null];

interface DetectedTypes {
  AccountInfo: 'AccountInfoWithRefCount' | 'AccountInfoWithProviders',
  ValidatorPrefs: 'ValidatorPrefsWithBlocked';
}

function mapCapabilities (l: Logger, [systemRefcount32, systemRefcountDual, stakingVersion]: Extracted, blockHash?: Uint8Array | undefined): Partial<DetectedTypes> {
  const types: Partial<DetectedTypes> = {};

  // AccountInfo
  if (systemRefcountDual && systemRefcountDual.isTrue) {
    types.AccountInfo = 'AccountInfoWithProviders';
  } else if (systemRefcount32 && systemRefcount32.isTrue) {
    types.AccountInfo = 'AccountInfoWithRefCount';
  }

  // ValidatorPrefs
  if (stakingVersion && stakingVersion.index >= 4) { // v1 = index 0, V5 = index 4
    types.ValidatorPrefs = 'ValidatorPrefsWithBlocked';
  }

  Object.keys(types).length && l.log(`Chain capabilities detected (${blockHash ? u8aToHex(blockHash) : 'best block'})`, types);

  return types;
}

/**
 * @description Query the chain for the specific capabilities
 */
export function detectedCapabilities (l: Logger, api: ApiInterfaceRx, blockHash?: Uint8Array | undefined): Observable<Partial<DetectedTypes>> {
  const all = [
    api.query.system?.upgradedToU32RefCount,
    api.query.system?.upgradedToDualRefCount,
    api.query.staking?.storageVersion
  ];
  const included = all.map((c) => !!c);
  const filtered = all.filter((_, index) => included[index]);

  return (
    filtered.length
      ? blockHash
        ? combineLatest(filtered.map((c) => c.at(blockHash)))
        : api.queryMulti(filtered)
      : of([])
  ).pipe(
    map((results): Partial<DetectedTypes> => {
      let offset = -1;

      return mapCapabilities(
        l,
        included.map((isIncluded) => isIncluded ? results[++offset] : null) as Extracted,
        blockHash
      );
    }),
    take(1)
  );
}
