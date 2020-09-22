// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { bool, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** @name Bounty */
export interface Bounty extends Struct {
  readonly proposer: AccountId;
  readonly value: Balance;
  readonly fee: Balance;
  readonly curatorDeposit: Balance;
  readonly bond: Balance;
  readonly status: BountyStatus;
}

/** @name BountyIndex */
export interface BountyIndex extends u32 {}

/** @name BountyStatus */
export interface BountyStatus extends Enum {
  readonly isProposed: boolean;
  readonly isApproved: boolean;
  readonly isFunded: boolean;
  readonly isCuratorProposed: boolean;
  readonly asCuratorProposed: BountyStatusCuratorProposed;
  readonly isActive: boolean;
  readonly asActive: BountyStatusActive;
  readonly isPendingPayout: boolean;
  readonly asPendingPayout: BountyStatusPendingPayout;
}

/** @name BountyStatusActive */
export interface BountyStatusActive extends Struct {
  readonly curator: AccountId;
  readonly updateDue: BlockNumber;
}

/** @name BountyStatusCuratorProposed */
export interface BountyStatusCuratorProposed extends Struct {
  readonly curator: AccountId;
}

/** @name BountyStatusPendingPayout */
export interface BountyStatusPendingPayout extends Struct {
  readonly curator: AccountId;
  readonly beneficiary: AccountId;
  readonly unlockAt: BlockNumber;
}

/** @name OpenTip */
export interface OpenTip extends Struct {
  readonly reason: Hash;
  readonly who: AccountId;
  readonly finder: AccountId;
  readonly deposit: Balance;
  readonly closes: Option<BlockNumber>;
  readonly tips: Vec<OpenTipTip>;
  readonly findersFee: bool;
}

/** @name OpenTipFinderTo225 */
export interface OpenTipFinderTo225 extends ITuple<[AccountId, Balance]> {}

/** @name OpenTipTip */
export interface OpenTipTip extends ITuple<[AccountId, Balance]> {}

/** @name OpenTipTo225 */
export interface OpenTipTo225 extends Struct {
  readonly reason: Hash;
  readonly who: AccountId;
  readonly finder: Option<OpenTipFinderTo225>;
  readonly closes: Option<BlockNumber>;
  readonly tips: Vec<OpenTipTip>;
}

/** @name TreasuryProposal */
export interface TreasuryProposal extends Struct {
  readonly proposer: AccountId;
  readonly value: Balance;
  readonly beneficiary: AccountId;
  readonly bond: Balance;
}

export type PHANTOM_TREASURY = 'treasury';
