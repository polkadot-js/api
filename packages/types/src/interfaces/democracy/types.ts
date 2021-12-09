// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, Vec, bool, u32 } from '@polkadot/types';
import type { Vote, VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { AccountId, Balance, BlockNumber, Call, Hash } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';

/** @name AccountVote */
export interface AccountVote extends Enum {
  readonly isStandard: boolean;
  readonly asStandard: AccountVoteStandard;
  readonly isSplit: boolean;
  readonly asSplit: AccountVoteSplit;
  readonly type: 'Standard' | 'Split';
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
  readonly isLocked1x: boolean;
  readonly isLocked2x: boolean;
  readonly isLocked3x: boolean;
  readonly isLocked4x: boolean;
  readonly isLocked5x: boolean;
  readonly isLocked6x: boolean;
  readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
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
  readonly type: 'Missing' | 'Available';
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
export interface ProxyState extends Enum {
  readonly isOpen: boolean;
  readonly asOpen: AccountId;
  readonly isActive: boolean;
  readonly asActive: AccountId;
  readonly type: 'Open' | 'Active';
}

/** @name ReferendumIndex */
export interface ReferendumIndex extends u32 {}

/** @name ReferendumInfo */
export interface ReferendumInfo extends Enum {
  readonly isOngoing: boolean;
  readonly asOngoing: ReferendumStatus;
  readonly isFinished: boolean;
  readonly asFinished: ReferendumInfoFinished;
  readonly type: 'Ongoing' | 'Finished';
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
  readonly type: 'Direct' | 'Delegating';
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
