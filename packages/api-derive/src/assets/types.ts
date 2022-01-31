// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, StorageKey, u32 } from '@polkadot/types';
import type { AccountId, AssetId } from '@polkadot/types/interfaces';
import type { PalletAssetsAssetDetails, PalletAssetsAssetMetadata } from '@polkadot/types/lookup';

import { BN } from '@polkadot/util';

export type FetchedAssetsEntries = [StorageKey<[AssetId]>, Option<PalletAssetsAssetDetails>][];
export type FetchedAssetsMetadataEntries = [StorageKey<[AssetId]>, PalletAssetsAssetMetadata][];
export type FetchedAssetsIddEntries = StorageKey<[u32]>[]

export interface DeriveAsset {
  readonly owner: AccountId;
  readonly issuer: AccountId;
  readonly admin: AccountId;
  readonly freezer: AccountId;
  readonly supply: BN;
  readonly deposit: BN;
  readonly minBalance: BN;
  readonly isSufficient: boolean;
  readonly accounts: BN;
  readonly sufficients: BN;
  readonly approvals: BN;
  readonly isFrozen: boolean;
  readonly name: string;
  readonly symbol: string;
  readonly decimals: number;
  readonly id: AssetId;
}
