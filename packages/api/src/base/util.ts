// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { bool } from '@polkadot/types';
import type { Releases } from '@polkadot/types/interfaces';
import type { InterfaceTypes } from '@polkadot/types/types';

import { combineLatest, Observable, of } from '@polkadot/x-rxjs';
import { map, take } from '@polkadot/x-rxjs/operators';

// the order and types needs to map with the all array setup below
type Extracted = [bool | null, bool | null, bool | null, Releases | null];

type DetectedKeys = keyof Pick<InterfaceTypes, 'AccountInfo' | 'ValidatorPrefs'>;

type DetectedValues = keyof InterfaceTypes;

interface DetectedTypes extends Record<DetectedKeys, DetectedValues> {
  AccountInfo: 'AccountInfoWithRefCount' | 'AccountInfoWithDualRefCount' | 'AccountInfoWithTripleRefCount',
  RefCount: 'u8' | 'u32',
  ValidatorPrefs: 'ValidatorPrefsWithBlocked' | 'ValidatorPrefsWithCommission';
}

function mapCapabilities ([systemRefcount32, systemRefcountDual, systemRefcountTriple, stakingVersion]: Extracted): Partial<DetectedTypes> {
  const types: Partial<DetectedTypes> = {};

  // AccountInfo
  if (systemRefcountTriple && systemRefcountTriple.isTrue) {
    types.AccountInfo = 'AccountInfoWithTripleRefCount';
  } else if (systemRefcountDual && systemRefcountDual.isTrue) {
    types.AccountInfo = 'AccountInfoWithDualRefCount';
  } else {
    types.AccountInfo = 'AccountInfoWithRefCount';

    if (!systemRefcount32 || systemRefcount32.isFalse) {
      types.RefCount = 'u8';
    }
  }

  // ValidatorPrefs
  if (stakingVersion) {
    if (stakingVersion.index >= 4) { // v1 = index 0, V5 = index 4
      types.ValidatorPrefs = 'ValidatorPrefsWithBlocked';
    } else {
      types.ValidatorPrefs = 'ValidatorPrefsWithCommission';
    }
  }

  return types;
}

/**
 * @description Query the chain for the specific capabilities
 */
export function detectedCapabilities (api: ApiInterfaceRx, blockHash?: Uint8Array | string | undefined): Observable<Partial<DetectedTypes>> {
  const all = [
    api.query.system?.upgradedToU32RefCount,
    api.query.system?.upgradedToDualRefCount,
    api.query.system?.upgradedToTripleRefCount,
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
        included.map((isIncluded) => isIncluded ? results[++offset] : null) as Extracted
      );
    }),
    take(1)
  );
}
