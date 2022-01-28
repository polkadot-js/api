// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { FetchedAssetsEntries, FetchedAssetsIddEntries, FetchedAssetsMetadataEntries } from '@polkadot/api-derive/assets/types';
import type { DeriveApi } from '@polkadot/api-derive/types';
import type { StorageKey } from '@polkadot/types';
import type { EventRecord, Hash } from '@polkadot/types/interfaces';
import type { FrameSystemEventRecord, PalletAssetsAssetDetails, PalletAssetsAssetMetadata } from '@polkadot/types/lookup';
import type { u32, Vec } from '@polkadot/types-codec';

import { combineLatest, concat, EMPTY, map, Observable, of, switchMap, take } from 'rxjs';

export interface Asset extends PalletAssetsAssetDetails, PalletAssetsAssetMetadata{
  id: StorageKey<[u32]>
}

const ASSET_EVENTS: string[] = [
  'Created',
  'Destroyed',
  'MetadataCleared',
  'MetadataSet',
  'OwnerChanged',
  'TeamChanged',
  'Issued'
];

export function extractAssetEventsHash (events: Vec<FrameSystemEventRecord>): Observable<Hash> {
  const filtered = events.find(({ event: { method, section } }) => section === 'assets' && ASSET_EVENTS.includes(method));

  return filtered ? of(events.createdAtHash as Hash) : EMPTY;
}

function concatAssetData ([maybeAssets, maybeMetadatas, ids]: [maybeAssets: FetchedAssetsEntries, maybeMetadatas: FetchedAssetsMetadataEntries, ids: FetchedAssetsIddEntries]): Asset[] {
  const result: Asset[] = [];

  maybeAssets.forEach(([, asset], index) => {
    if (asset.isSome) {
      result.push({
        ...asset.unwrap(),
        ...maybeMetadatas[index][1],
        id: ids[index]
      } as Asset);
    }
  });

  return result;
}

/**
 * @name all
 * @returns An array containing all assets with metadata
 */

export function all (api: DeriveApi): Observable<Asset[]> {
  const initBlockHash = api.rpc.chain.subscribeNewHeads()
    .pipe(take(1))
    .pipe((val) => val.pipe(map(({ hash }) => hash)));

  return concat(
    initBlockHash,
    api.query.system.events()
      .pipe(switchMap((events: Vec<EventRecord>) => extractAssetEventsHash(events)))
  )

    .pipe(
      switchMap((blockHash: Hash) =>
        combineLatest([
          api.query.assets.asset.entriesAt(blockHash),
          api.query.assets.metadata.entriesAt(blockHash),
          api.query.assets.asset.keysAt(blockHash)
        ])
      )
    )
    .pipe(map(concatAssetData));
}
