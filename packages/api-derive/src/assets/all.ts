// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AugmentedEvent } from '@polkadot/api-base/types';
import type { EventRecord, Hash } from '@polkadot/types/interfaces';
import type { Vec } from '@polkadot/types-codec';

import { combineLatest, concat, EMPTY, firstValueFrom, map, Observable, of, switchMap, tap } from 'rxjs';

import { DeriveApi } from '@polkadot/api-derive/types';
import { StorageKey } from '@polkadot/types';
import { PalletAssetsAssetDetails, PalletAssetsAssetMetadata } from '@polkadot/types/lookup';
import { u32 } from '@polkadot/types-codec';

type EventCheck = AugmentedEvent<'promise'> | false | undefined | null;

interface Asset extends PalletAssetsAssetDetails, PalletAssetsAssetMetadata{
  id: StorageKey<[u32]>
}

function extractEvents (eventRecords: Vec<EventRecord>, checks: EventCheck[]): Observable<Hash> {
  const assetEvents = eventRecords.filter((record) =>
    record.event &&
    checks.some((check) => check && check.is(record.event))
  );

  if (assetEvents.length && eventRecords.createdAtHash) {
    return of(eventRecords.createdAtHash);
  }

  return EMPTY;
}

/**
 * @name all
 * @returns An array containing all assets with metadata
 */

export async function all (api: DeriveApi) {
  const checks = [api.events.assets.Created, api.events.assets.Destroyed];
  const { hash: currentBlockHash } = await firstValueFrom(api.rpc.chain.subscribeNewHeads());
  const resultObservable = concat(of(currentBlockHash as Hash), api.query.system.events()
    .pipe(switchMap((events: Vec<EventRecord>) => extractEvents(events, checks))))
    .pipe(tap((blockHash) => console.log(`Block hash: ${blockHash.toString()}`)))
    .pipe(
      switchMap((blockHash: Hash) =>
        combineLatest([
          api.query.assets.asset.entriesAt(blockHash),
          api.query.assets.metadata.entriesAt(blockHash),
          api.query.assets.asset.keysAt(blockHash)
        ])
      )
    )
    .pipe(map(([maybeAssets, maybeMetadatas, ids]) => {
      const result: Asset[] = [];

      maybeAssets.forEach(([, asset], index) => {
        console.log(`For id ${ids[index].toString()} there is ${asset.isSome ? 'an' : 'no'} asset and ${maybeMetadatas[index][1].decimals.toBn().gtn(0) ? 'a' : 'no'} metadata`);

        if (asset.isSome) {
          result.push({
            ...asset.unwrap(),
            ...maybeMetadatas[index][1],
            id: ids[index]
          } as Asset);
        }
      });

      return result;
    }));

  return resultObservable;
}
