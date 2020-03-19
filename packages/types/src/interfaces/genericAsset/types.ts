// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Compact, Enum, Struct } from '@polkadot/types/codec';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name AssetOptions */
export interface AssetOptions extends Struct {
  readonly initalIssuance: Compact<Balance>;
  readonly permissions: PermissionLatest;
}

/** @name Owner */
export interface Owner extends Enum {
  readonly isNone: boolean;
  readonly isAddress: boolean;
  readonly asAddress: AccountId;
}

/** @name PermissionLatest */
export interface PermissionLatest extends PermissionsV1 {}

/** @name PermissionsV1 */
export interface PermissionsV1 extends Struct {
  readonly update: Owner;
  readonly mint: Owner;
  readonly burn: Owner;
}

/** @name PermissionVersions */
export interface PermissionVersions extends Enum {
  readonly isV1: boolean;
  readonly asV1: PermissionsV1;
}

export type PHANTOM_GENERICASSET = 'genericAsset';
