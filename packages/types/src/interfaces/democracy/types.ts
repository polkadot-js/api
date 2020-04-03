// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, bool, u32 } from '@polkadot/types/primitive';
import { Vote, VoteThreshold } from '@polkadot/types/interfaces/elections';
import { AccountId, Balance, BlockNumber, Call, Hash } from '@polkadot/types/interfaces/runtime';

/** @name AccountVote */
export interface AccountVote extends Enum {
  readonly isStandard: boolean;
  readonly asStandard: AccountVoteStandard;
  readonly isSplit: boolean;
  readonly asSplit: AccountVoteSplit;
}

/** @name AccountVoteSplit */
export interface AccountVoteSplit extends Struct {
  readonly aye: Balance;
  readonly nay: Balance;
}

/** @name AccountVoteStandard */
export interface AccountVoteStandard extends Struct {
  readonly vote: Vote;
  readonly balance: Balance;
}

/** @name Conviction */
export interface Conviction extends Enum {
  readonly isNone: boolean;
  readonly isLocked1X: boolean;
  readonly isLocked2X: boolean;
  readonly isLocked3X: boolean;
  readonly isLocked4X: boolean;
  readonly isLocked5X: boolean;
  readonly isLocked6X: boolean;
}

/** @name Delegations */
export interface Delegations extends Struct {
  readonly votes: Balance;
  readonly capital: Balance;
}

/** @name PreimageStatus */
export interface PreimageStatus extends Enum {
  readonly isMissing: boolean;
  readonly asMissing: BlockNumber;
  readonly isAvailable: boolean;
  readonly asAvailable: PreimageStatusAvailable;
}

/** @name PreimageStatusAvailable */
export interface PreimageStatusAvailable extends Struct {
  readonly data: Bytes;
  readonly provider: AccountId;
  readonly deposit: Balance;
  readonly since: BlockNumber;
  readonly expiry: Option<BlockNumber>;
}

/** @name PriorLock */
export interface PriorLock extends ITuple<[BlockNumber, Balance]> {}

/** @name PropIndex */
export interface PropIndex extends u32 {}

/** @name Proposal */
export interface Proposal extends Call {}

/** @name ProxyState */
export interface ProxyState extends Struct {
  readonly Open: AccountId;
  readonly Active: AccountId;
}

/** @name ReferendumIndex */
export interface ReferendumIndex extends u32 {}

/** @name ReferendumInfo */
export interface ReferendumInfo extends Enum {
  readonly isOngoing: boolean;
  readonly asOngoing: ReferendumStatus;
  readonly isFinished: boolean;
  readonly asFinished: ReferendumInfoFinished;
}

/** @name ReferendumInfoFinished */
export interface ReferendumInfoFinished extends Struct {
  readonly approved: bool;
  readonly end: BlockNumber;
}

/** @name ReferendumInfoTo239 */
export interface ReferendumInfoTo239 extends Struct {
  readonly end: BlockNumber;
  readonly proposalHash: Hash;
  readonly threshold: VoteThreshold;
  readonly delay: BlockNumber;
}

/** @name ReferendumStatus */
export interface ReferendumStatus extends Struct {
  readonly end: BlockNumber;
  readonly proposalHash: Hash;
  readonly threshold: VoteThreshold;
  readonly delay: BlockNumber;
  readonly tally: Tally;
}

/** @name Tally */
export interface Tally extends Struct {
  readonly ayes: Balance;
  readonly nays: Balance;
  readonly turnout: Balance;
}

/** @name Voting */
export interface Voting extends Enum {
  readonly isDirect: boolean;
  readonly asDirect: VotingDirect;
  readonly isDelegating: boolean;
  readonly asDelegating: VotingDelegating;
}

/** @name VotingDelegating */
export interface VotingDelegating extends Struct {
  readonly balance: Balance;
  readonly target: AccountId;
  readonly conviction: Conviction;
  readonly delegations: Delegations;
  readonly prior: PriorLock;
}

/** @name VotingDirect */
export interface VotingDirect extends Struct {
  readonly votes: Vec<VotingDirectVote>;
  readonly delegations: Delegations;
  readonly prior: PriorLock;
}

/** @name VotingDirectVote */
export interface VotingDirectVote extends ITuple<[ReferendumIndex, AccountVote]> {}

export type PHANTOM_DEMOCRACY = 'democracy';
