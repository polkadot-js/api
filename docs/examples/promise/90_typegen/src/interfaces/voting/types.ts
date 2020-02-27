// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { bool, u128, u64 } from '@polkadot/types/primitive';
import { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name Commitments */
export interface Commitments extends Vec<ITuple<[AccountId, VoteOutcome]>> {}

/** @name Reveals */
export interface Reveals extends Vec<ITuple<[AccountId, Vec<VoteOutcome>]>> {}

/** @name Tally */
export interface Tally extends Option<Vec<ITuple<[VoteOutcome, u128]>>> {}

/** @name TallyType */
export interface TallyType extends Enum {
  readonly isOnePerson: boolean;
  readonly isOneCoin: boolean;
}

/** @name VoteData */
export interface VoteData extends Struct {
  readonly initiator: AccountId;
  readonly stage: VoteStage;
  readonly vote_type: VoteType;
  readonly tally_type: TallyType;
  readonly is_commit_reveal: bool;
}

/** @name VoteOutcome */
export interface VoteOutcome extends U8aFixed {}

/** @name VoteRecord */
export interface VoteRecord extends Struct {
  readonly id: u64;
  readonly commitments: Commitments;
  readonly reveals: Reveals;
  readonly data: VoteData;
  readonly outcomes: Vec<VoteOutcome>;
}

/** @name VoteStage */
export interface VoteStage extends Enum {
  readonly isPreVoting: boolean;
  readonly isCommit: boolean;
  readonly isVoting: boolean;
  readonly isCompleted: boolean;
}

/** @name VoteType */
export interface VoteType extends Enum {
  readonly isBinary: boolean;
  readonly isMultiOption: boolean;
  readonly isRankedChoice: boolean;
}
