// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Struct, u32 } from '@polkadot/types';
import type { AuctionIndex, HeadData, ParaId } from '@polkadot/types/interfaces/parachains';
import type { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** @name DeployData */
export interface DeployData extends Struct {
  readonly codeHash: Hash;
  readonly codeSize: u32;
  readonly initialHeadData: HeadData;
}

/** @name FundIndex */
export interface FundIndex extends u32 {}

/** @name FundInfo */
export interface FundInfo extends Struct {
  readonly parachain: Option<ParaId>;
  readonly owner: AccountId;
  readonly deposit: Balance;
  readonly raised: Balance;
  readonly end: BlockNumber;
  readonly cap: Balance;
  readonly lastContribution: LastContribution;
  readonly firstSlot: BlockNumber;
  readonly lastSlot: BlockNumber;
  readonly deployData: Option<DeployData>;
}

/** @name LastContribution */
export interface LastContribution extends Enum {
  readonly isNever: boolean;
  readonly isPreEnding: boolean;
  readonly asPreEnding: AuctionIndex;
  readonly isEnding: boolean;
  readonly asEnding: BlockNumber;
}

export type PHANTOM_CROWDLOAN = 'crowdloan';
