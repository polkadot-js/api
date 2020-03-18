// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { BitVec, Bytes, u32 } from '@polkadot/types/primitive';
import { Signature } from '@polkadot/types/interfaces/extrinsics';
import { AccountId, Balance, BalanceOf, BlockNumber, H256, Hash } from '@polkadot/types/interfaces/runtime';

/** @name AttestedCandidate */
export interface AttestedCandidate extends Struct {
  readonly candidate: CandidateReceipt;
  readonly validityVotes: Vec<ValidityAttestation>;
  readonly validatorIndices: BitVec;
}

/** @name AuctionIndex */
export interface AuctionIndex extends u32 {}

/** @name Bidder */
export interface Bidder extends Enum {
  readonly isNew: boolean;
  readonly asNew: NewBidder;
  readonly isExisting: boolean;
  readonly asExisting: ParaId;
}

/** @name CandidateReceipt */
export interface CandidateReceipt extends Struct {
  readonly parachainIndex: ParaId;
  readonly collator: CollatorId;
  readonly signature: CollatorSignature;
  readonly headData: HeadData;
  readonly egressQueueRoots: Vec<ITuple<[ParaId, Hash]>>;
  readonly fees: Balance;
  readonly blockDataHash: Hash;
  readonly upwardMessages: Vec<UpwardMessage>;
  readonly erasureRoot: Hash;
}

/** @name CollatorId */
export interface CollatorId extends H256 {}

/** @name CollatorSignature */
export interface CollatorSignature extends Signature {}

/** @name EgressQueueRoot */
export interface EgressQueueRoot extends ITuple<[ParaId, Hash]> {}

/** @name HeadData */
export interface HeadData extends Bytes {}

/** @name IncomingParachain */
export interface IncomingParachain extends Enum {
  readonly isUnset: boolean;
  readonly asUnset: NewBidder;
  readonly isFixed: boolean;
  readonly asFixed: IncomingParachainFixed;
  readonly isDeploy: boolean;
  readonly asDeploy: IncomingParachainDeploy;
}

/** @name IncomingParachainDeploy */
export interface IncomingParachainDeploy extends Struct {
  readonly code: Bytes;
  readonly initialHeadData: Bytes;
}

/** @name IncomingParachainFixed */
export interface IncomingParachainFixed extends Struct {
  readonly codeHash: Hash;
  readonly initialHeadData: Bytes;
}

/** @name LeasePeriod */
export interface LeasePeriod extends BlockNumber {}

/** @name LeasePeriodOf */
export interface LeasePeriodOf extends LeasePeriod {}

/** @name NewBidder */
export interface NewBidder extends Struct {
  readonly who: AccountId;
  readonly sub: SubId;
}

/** @name ParachainDispatchOrigin */
export interface ParachainDispatchOrigin extends Enum {
  readonly isSigned: boolean;
  readonly isParachain: boolean;
}

/** @name ParaId */
export interface ParaId extends u32 {}

/** @name ParaIdOf */
export interface ParaIdOf extends ParaId {}

/** @name ParaInfo */
export interface ParaInfo extends Struct {
  readonly scheduling: ParaScheduling;
}

/** @name ParaScheduling */
export interface ParaScheduling extends Enum {
  readonly isAlways: boolean;
  readonly isDynamic: boolean;
}

/** @name Retriable */
export interface Retriable extends Enum {
  readonly isNever: boolean;
  readonly isWithRetries: boolean;
  readonly asWithRetries: u32;
}

/** @name SlotRange */
export interface SlotRange extends Enum {
  readonly isZeroZero: boolean;
  readonly isZeroOne: boolean;
  readonly isZeroTwo: boolean;
  readonly isZeroThree: boolean;
  readonly isOneOne: boolean;
  readonly isOneTwo: boolean;
  readonly isOneThree: boolean;
  readonly isTwoTwo: boolean;
  readonly isTwoThree: boolean;
  readonly isThreeThree: boolean;
}

/** @name SubId */
export interface SubId extends u32 {}

/** @name UpwardMessage */
export interface UpwardMessage extends Struct {
  readonly origin: ParachainDispatchOrigin;
  readonly data: Bytes;
}

/** @name ValidityAttestation */
export interface ValidityAttestation extends Enum {
  readonly isNone: boolean;
  readonly isImplicit: boolean;
  readonly asImplicit: CollatorSignature;
  readonly isExplicit: boolean;
  readonly asExplicit: CollatorSignature;
}

/** @name WinningData */
export interface WinningData extends Vec<WinningDataEntry> {}

/** @name WinningDataEntry */
export interface WinningDataEntry extends ITuple<[AccountId, ParaIdOf, BalanceOf]> {}

export type PHANTOM_PARACHAINS = 'parachains';
