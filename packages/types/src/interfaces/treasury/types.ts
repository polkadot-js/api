// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Option, Struct, Vec } from '@polkadot/types/codec';
import { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** @name OpenTip */
export interface OpenTip extends Struct {
  readonly reason: Hash;
  readonly who: AccountId;
  readonly finder: Option<OpenTipFinder>;
  readonly closes: Option<BlockNumber>;
  readonly tips: Vec<OpenTipTip>;
}

/** @name OpenTipFinder */
export interface OpenTipFinder extends ITuple<[AccountId, Balance]> {}

/** @name OpenTipTip */
export interface OpenTipTip extends ITuple<[AccountId, Balance]> {}

/** @name TreasuryProposal */
export interface TreasuryProposal extends Struct {
  readonly proposer: AccountId;
  readonly value: Balance;
  readonly beneficiary: AccountId;
  readonly bond: Balance;
}

export type PHANTOM_TREASURY = 'treasury';
