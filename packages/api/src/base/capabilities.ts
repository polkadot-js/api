// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { bool, Raw, u32 } from '@polkadot/types';
import type { Releases } from '@polkadot/types/interfaces';
import type { InterfaceTypes } from '@polkadot/types/types';

import { assert, compactFromU8a } from '@polkadot/util';
import { combineLatest, Observable, of } from '@polkadot/x-rxjs';
import { map, take } from '@polkadot/x-rxjs/operators';

// the order and types needs to map with the all array setup below
type ExtractedQ = [bool | null, bool | null, bool | null, Releases | null];

type ExtractedR = [Raw | null];

type ExtractedC = [u32 | null, u32 | null];

type DetectedKeys = keyof Pick<InterfaceTypes, 'AccountInfo' | 'ValidatorPrefs'>;

type DetectedValues = keyof InterfaceTypes;

interface DetectedTypes extends Record<DetectedKeys, DetectedValues> {
  AccountInfo: 'AccountInfoWithRefCount' | 'AccountInfoWithDualRefCount' | 'AccountInfoWithTripleRefCount',
  Keys: 'SessionKeys1' | 'SessionKeys2' | 'SessionKeys3' | 'SessionKeys4' | 'SessionKeys5' | 'SessionKeys6' | 'SessionKeys7' | 'SessionKeys8' | 'SessionKeys9' | 'SessionKeys10';
  RefCount: 'u8' | 'u32',
  SlotRange: Record<string, unknown>;
  ValidatorPrefs: 'ValidatorPrefsWithBlocked' | 'ValidatorPrefsWithCommission';
  WinningData: string;
}

interface AvailableMap<T> {
  filtered: T[];
  included: boolean[];
  original: T[];
}

interface Constants {
  accountIdLength: number;
}

const NumberMap = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

function mapCapabilities ({ accountIdLength }: Constants, [leasePeriodsPerSlot, slotRangeCount]: ExtractedC, [systemRefcount32, systemRefcountDual, systemRefcountTriple, stakingVersion]: ExtractedQ, [keys]: ExtractedR): Partial<DetectedTypes> {
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

  // Keys
  if (keys) {
    try {
      const [offset, numItems] = compactFromU8a(keys);
      const tupleLength = (keys.length - offset) / numItems.toNumber();
      const numIds = tupleLength / accountIdLength;
      const numIdsRound = Math.floor(numIds);

      assert(numIds >= 2 && numIds <= 11, `Detected ${numIds} in Keys, should be >= 2 and <= 11`);

      if (numIdsRound !== numIds) {
        // Beefy?
        if ((((numIdsRound - 1) * accountIdLength) + 33) === tupleLength) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          types.Keys = `SessionKeys${numIdsRound - 1}B`;
        } else {
          assert(false, `Expected integer number of keys, found ${numIds.toFixed(2)}`);
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        types.Keys = `SessionKeys${numIds - 1}`;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // auctions
  if (leasePeriodsPerSlot && slotRangeCount) {
    const _enum: string[] = [];

    for (let i = 0; leasePeriodsPerSlot.gtn(i); i++) {
      for (let j = i; leasePeriodsPerSlot.gtn(j); j++) {
        _enum.push(`${NumberMap[i]}${NumberMap[j]}`);
      }
    }

    types.SlotRange = { _enum };
    types.WinningData = `[WinningDataEntry; ${slotRangeCount.toNumber()}]`;
  }

  return types;
}

function filterEntries <T> (original: T[]): AvailableMap<T> {
  const included = original.map((c) => !!c);
  const filtered = original.filter((_, index) => included[index]);

  return { filtered, included, original };
}

function extractResults <R, T = unknown> (results: unknown[], map: AvailableMap<T>): R {
  let offset = -1;

  return map.included.map((isIncluded) =>
    isIncluded
      ? results[++offset]
      : null
  ) as unknown as R;
}

/**
 * @description Query the chain for the specific capabilities
 */
export function detectedCapabilities (api: ApiInterfaceRx, blockHash?: Uint8Array | string | undefined): Observable<Partial<DetectedTypes>> {
  const consts = filterEntries([
    api.consts.auctions?.leasePeriodsPerSlot,
    api.consts.auctions?.slotRangeCount
  ]);
  const queries = filterEntries([
    api.query.system?.upgradedToU32RefCount,
    api.query.system?.upgradedToDualRefCount,
    api.query.system?.upgradedToTripleRefCount,
    api.query.staking?.storageVersion
  ]);
  const raws = filterEntries([
    api.query.session?.queuedKeys
  ]);

  return combineLatest([
    consts.filtered.length
      ? blockHash
        // FIXME consts don't have .at as of yet...
        ? of([])
        : of(consts.filtered)
      : of([]),
    queries.filtered.length
      ? blockHash
        ? combineLatest(queries.filtered.map((c) => c.at(blockHash)))
        : api.queryMulti(queries.filtered)
      : of([]),
    raws.filtered.length
      ? blockHash
        ? combineLatest(raws.filtered.map((k) => api.rpc.state.getStorage.raw(k.key(), blockHash)))
        : combineLatest(raws.filtered.map((k) => api.rpc.state.getStorage.raw(k.key())))
      : of([])
  ]).pipe(
    map(([cResults, qResults, rResults]): Partial<DetectedTypes> =>
      mapCapabilities(
        {
          accountIdLength: api.registry.createType('AccountId').encodedLength
        },
        extractResults<ExtractedC>(cResults, consts),
        extractResults<ExtractedQ>(qResults, queries),
        extractResults<ExtractedR>(rResults, raws)
      )
    ),
    take(1)
  );
}
