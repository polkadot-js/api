// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Struct, bool, u32 } from '@polkadot/types';
import type { LeasePeriod } from '@polkadot/types/interfaces/parachains';
import type { AccountId, Balance, BlockNumber, MultiSigner } from '@polkadot/types/interfaces/runtime';

/** @name FundIndex */
export interface FundIndex extends u32 {}

/** @name FundInfo */
export interface FundInfo extends Struct {
  readonly retiring: bool;
  readonly depositor: AccountId;
  readonly verifier: Option<MultiSigner>;
  readonly deposit: Balance;
  readonly raised: Balance;
  readonly end: BlockNumber;
  readonly cap: Balance;
  readonly lastContribution: LastContribution;
  readonly firstSlot: LeasePeriod;
  readonly lastSlot: LeasePeriod;
  readonly trieIndex: TrieIndex;
}

/** @name LastContribution */
export interface LastContribution extends Enum {
  readonly isNever: boolean;
  readonly isPreEnding: boolean;
  readonly asPreEnding: u32;
  readonly isEnding: boolean;
  readonly asEnding: BlockNumber;
}

/** @name TrieIndex */
export interface TrieIndex extends u32 {}

export type PHANTOM_CROWDLOAN = 'crowdloan';
