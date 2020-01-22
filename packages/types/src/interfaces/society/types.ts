// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct } from '@polkadot/types/codec';
import { u32 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface Bid extends Struct {
  /** AccountId */
  readonly who: AccountId;
  /** BidKind */
  readonly kind: BidKind;
  /** Balance */
  readonly value: Balance;
}

/** Enum */
export interface BidKind extends Enum {
  /** 0:: Deposit(Balance) */
  readonly isDeposit: boolean;
  /** Balance */
  readonly asDeposit: Balance;
  /** 1:: Vouch(BidKindVouch) */
  readonly isVouch: boolean;
  /** BidKindVouch */
  readonly asVouch: BidKindVouch;
}

/** ITuple<[AccountId, Balance]> */
export interface BidKindVouch extends ITuple<[AccountId, Balance]> {}

/** Enum */
export interface SocietyJudgement extends Enum {
  /** 0:: Rebid */
  readonly isRebid: boolean;
  /** 1:: Reject */
  readonly isReject: boolean;
  /** 2:: Approve */
  readonly isApprove: boolean;
}

/** u32 */
export interface StrikeCount extends u32 {}

/** Enum */
export interface VouchingStatus extends Enum {
  /** 0:: Vouching */
  readonly isVouching: boolean;
  /** 1:: Banned */
  readonly isBanned: boolean;
}
