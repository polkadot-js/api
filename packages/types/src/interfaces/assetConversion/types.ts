// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from '@polkadot/types-codec';
import type { AssetId } from '@polkadot/types/interfaces/runtime';

/** @name MultiAssetId */
export interface MultiAssetId extends Enum {
  readonly isNative: boolean;
  readonly isAsset: boolean;
  readonly asAsset: AssetId;
  readonly type: 'Native' | 'Asset';
}

export type PHANTOM_ASSETCONVERSION = 'assetConversion';
