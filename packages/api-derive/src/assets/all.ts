// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventRecord, Hash } from '@polkadot/types/interfaces';
import type { FrameSystemEventRecord } from '@polkadot/types/lookup';
import type { Vec } from '@polkadot/types-codec';
import type { DeriveApi } from '../types';
import type { DeriveAsset, FetchedAssetsEntries, FetchedAssetsIddEntries, FetchedAssetsMetadataEntries } from './types';

import { combineLatest, concat, EMPTY, map, Observable, of, switchMap, take } from 'rxjs';

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

function concatAssetData ([maybeAssets, maybeMetadatas, ids]: [maybeAssets: FetchedAssetsEntries, maybeMetadatas: FetchedAssetsMetadataEntries, ids: FetchedAssetsIddEntries]): DeriveAsset[] {
  const result: DeriveAsset[] = [];

  maybeAssets.forEach(([, asset], index) => {
    if (asset.isSome) {
      result.push({
        ...asset.unwrap(),
        ...maybeMetadatas[index][1],
        id: ids[index]
      } as DeriveAsset);
    }
  });

  return result;
}

/**
 * @name all
 * @returns An array containing all assets with metadata
 */

export function all (api: DeriveApi): Observable<DeriveAsset[]> {
  const initialBlockHash = api.rpc.chain.subscribeNewHeads()
    .pipe(take(1))
    .pipe((val) => val.pipe(map(({ hash }) => hash)));

  return concat(
    initialBlockHash,
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
