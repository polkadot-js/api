// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Compact, Enum, Struct } from '@polkadot/types/codec';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface AssetOptions extends Struct {
  /** Compact<Balance> */
  readonly initalIssuance: Compact<Balance>;
  /** PermissionLatest */
  readonly permissions: PermissionLatest;
}

/** Enum */
export interface Owner extends Enum {
  /** 0:: None */
  readonly isNone: boolean;
  /** 1:: Address(AccountId) */
  readonly isAddress: boolean;
  /** AccountId */
  readonly asAddress: AccountId;
}

/** PermissionsV1 */
export interface PermissionLatest extends PermissionsV1 {}

/** Struct */
export interface PermissionsV1 extends Struct {
  /** Owner */
  readonly update: Owner;
  /** Owner */
  readonly mint: Owner;
  /** Owner */
  readonly burn: Owner;
}

/** Enum */
export interface PermissionVersions extends Enum {
  /** 0:: V1(PermissionsV1) */
  readonly isV1: boolean;
  /** PermissionsV1 */
  readonly asV1: PermissionsV1;
}
