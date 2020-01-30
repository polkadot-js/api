// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct } from '@polkadot/types/codec';
import { u32 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/**
 * @name Bid
 * @description extends [[Struct]]
 */
export interface Bid extends Struct {
  readonly who: AccountId;
  readonly kind: BidKind;
  readonly value: Balance;
}

/**
 * @name BidKind
 * @description extends [[Enum]]
 */
export interface BidKind extends Enum {
  readonly isDeposit: boolean;
  readonly asDeposit: Balance;
  readonly isVouch: boolean;
  readonly asVouch: BidKindVouch;
}

/**
 * @name BidKindVouch
 * @description extends [[ITuple<[AccountId, Balance]>]]
 */
export interface BidKindVouch extends ITuple<[AccountId, Balance]> {}

/**
 * @name SocietyJudgement
 * @description extends [[Enum]]
 */
export interface SocietyJudgement extends Enum {
  readonly isRebid: boolean;
  readonly isReject: boolean;
  readonly isApprove: boolean;
}

/**
 * @name SocietyVote
 * @description extends [[Enum]]
 */
export interface SocietyVote extends Enum {
  readonly isSkeptic: boolean;
  readonly isReject: boolean;
  readonly isApprove: boolean;
}

/**
 * @name StrikeCount
 * @description extends [[u32]]
 */
export interface StrikeCount extends u32 {}

/**
 * @name VouchingStatus
 * @description extends [[Enum]]
 */
export interface VouchingStatus extends Enum {
  readonly isVouching: boolean;
  readonly isBanned: boolean;
}
