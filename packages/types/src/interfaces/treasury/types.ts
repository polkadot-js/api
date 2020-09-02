// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Option, Struct, Vec } from '@polkadot/types/codec';
import { bool } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

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
