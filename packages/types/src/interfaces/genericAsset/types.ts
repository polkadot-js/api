// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Compact, Enum, Struct } from '@polkadot/types/codec';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/**
 * @name AssetOptions
 * @description extends [[Struct]]
 */
export interface AssetOptions extends Struct {
  readonly initalIssuance: Compact<Balance>;
  readonly permissions: PermissionLatest;
}

/**
 * @name Owner
 * @description extends [[Enum]]
 */
export interface Owner extends Enum {
  readonly isNone: boolean;
  readonly isAddress: boolean;
  readonly asAddress: AccountId;
}

/**
 * @name PermissionLatest
 * @description extends [[PermissionsV1]]
 */
export interface PermissionLatest extends PermissionsV1 {}

/**
 * @name PermissionsV1
 * @description extends [[Struct]]
 */
export interface PermissionsV1 extends Struct {
  readonly update: Owner;
  readonly mint: Owner;
  readonly burn: Owner;
}

/**
 * @name PermissionVersions
 * @description extends [[Enum]]
 */
export interface PermissionVersions extends Enum {
  readonly isV1: boolean;
  readonly asV1: PermissionsV1;
}
