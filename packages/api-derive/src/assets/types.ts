// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, StorageKey, u32 } from '@polkadot/types';
import type { AssetId } from '@polkadot/types/interfaces';
import type { PalletAssetsAssetDetails, PalletAssetsAssetMetadata } from '@polkadot/types/lookup';

export type FetchedAssetsEntries = [StorageKey<[AssetId]>, Option<PalletAssetsAssetDetails>][];
export type FetchedAssetsMetadataEntries = [StorageKey<[AssetId]>, PalletAssetsAssetMetadata][];
export type FetchedAssetsIddEntries = StorageKey<[u32]>[]

export interface DeriveAsset extends PalletAssetsAssetDetails, PalletAssetsAssetMetadata {
  id: StorageKey<[u32]>
}
