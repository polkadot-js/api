// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Option, Struct, Vec } from '@polkadot/types/codec';
import { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface OpenTip extends Struct {
  /** Hash */
  readonly reason: Hash;
  /** AccountId */
  readonly who: AccountId;
  /** Option<OpenTipFinder> */
  readonly finder: Option<OpenTipFinder>;
  /** Option<BlockNumber> */
  readonly closes: Option<BlockNumber>;
  /** Vec<OpenTipTip> */
  readonly tips: Vec<OpenTipTip>;
}

/** ITuple<[AccountId, Balance]> */
export interface OpenTipFinder extends ITuple<[AccountId, Balance]> {}

/** ITuple<[AccountId, Balance]> */
export interface OpenTipTip extends ITuple<[AccountId, Balance]> {}

/** Struct */
export interface TreasuryProposal extends Struct {
  /** AccountId */
  readonly proposer: AccountId;
  /** Balance */
  readonly value: Balance;
  /** AccountId */
  readonly beneficiary: AccountId;
  /** Balance */
  readonly bond: Balance;
}
