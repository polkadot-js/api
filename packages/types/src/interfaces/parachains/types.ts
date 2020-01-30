// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, H256, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, BalanceOf, BlockNumber, Hash, Signature } from '@polkadot/types/interfaces/runtime';

/**
 * @name AttestedCandidate
 * @description extends [[Struct]]
 */
export interface AttestedCandidate extends Struct {
  readonly candidate: CandidateReceipt;
  readonly validityVotes: Vec<ValidityVote>;
}

/**
 * @name AuctionIndex
 * @description extends [[u32]]
 */
export interface AuctionIndex extends u32 {}

/**
 * @name BalanceUpload
 * @description extends [[ITuple<[AccountId, u64]>]]
 */
export interface BalanceUpload extends ITuple<[AccountId, u64]> {}

/**
 * @name Bidder
 * @description extends [[Enum]]
 */
export interface Bidder extends Enum {
  readonly isNew: boolean;
  readonly asNew: NewBidder;
  readonly isExisting: boolean;
  readonly asExisting: ParaId;
}

/**
 * @name CandidateReceipt
 * @description extends [[Struct]]
 */
export interface CandidateReceipt extends Struct {
  readonly parachainIndex: ParaId;
  readonly collator: AccountId;
  readonly signature: CollatorSignature;
  readonly headData: HeadData;
  readonly balanceUploads: Vec<BalanceUpload>;
  readonly egressQueueRoots: Vec<EgressQueueRoot>;
  readonly fees: u64;
  readonly blockDataHash: Hash;
}

/**
 * @name CollatorId
 * @description extends [[H256]]
 */
export interface CollatorId extends H256 {}

/**
 * @name CollatorSignature
 * @description extends [[Signature]]
 */
export interface CollatorSignature extends Signature {}

/**
 * @name EgressQueueRoot
 * @description extends [[ITuple<[ParaId, Hash]>]]
 */
export interface EgressQueueRoot extends ITuple<[ParaId, Hash]> {}

/**
 * @name HeadData
 * @description extends [[Bytes]]
 */
export interface HeadData extends Bytes {}

/**
 * @name IncomingParachain
 * @description extends [[Enum]]
 */
export interface IncomingParachain extends Enum {
  readonly isUnset: boolean;
  readonly asUnset: NewBidder;
  readonly isFixed: boolean;
  readonly asFixed: IncomingParachainFixed;
  readonly isDeploy: boolean;
  readonly asDeploy: IncomingParachainDeploy;
}

/**
 * @name IncomingParachainDeploy
 * @description extends [[Struct]]
 */
export interface IncomingParachainDeploy extends Struct {
  readonly code: Bytes;
  readonly initialHeadData: Bytes;
}

/**
 * @name IncomingParachainFixed
 * @description extends [[Struct]]
 */
export interface IncomingParachainFixed extends Struct {
  readonly codeHash: Hash;
  readonly initialHeadData: Bytes;
}

/**
 * @name LeasePeriod
 * @description extends [[BlockNumber]]
 */
export interface LeasePeriod extends BlockNumber {}

/**
 * @name LeasePeriodOf
 * @description extends [[LeasePeriod]]
 */
export interface LeasePeriodOf extends LeasePeriod {}

/**
 * @name NewBidder
 * @description extends [[Struct]]
 */
export interface NewBidder extends Struct {
  readonly who: AccountId;
  readonly sub: SubId;
}

/**
 * @name ParachainDispatchOrigin
 * @description extends [[Enum]]
 */
export interface ParachainDispatchOrigin extends Enum {
  readonly isSigned: boolean;
  readonly isParachain: boolean;
}

/**
 * @name ParaId
 * @description extends [[u32]]
 */
export interface ParaId extends u32 {}

/**
 * @name ParaIdOf
 * @description extends [[ParaId]]
 */
export interface ParaIdOf extends ParaId {}

/**
 * @name ParaInfo
 * @description extends [[Struct]]
 */
export interface ParaInfo extends Struct {
  readonly scheduling: ParaScheduling;
}

/**
 * @name ParaScheduling
 * @description extends [[Enum]]
 */
export interface ParaScheduling extends Enum {
  readonly isAlways: boolean;
  readonly isDynamic: boolean;
}

/**
 * @name Retriable
 * @description extends [[Enum]]
 */
export interface Retriable extends Enum {
  readonly isNever: boolean;
  readonly isWithRetries: boolean;
  readonly asWithRetries: u32;
}

/**
 * @name SlotRange
 * @description extends [[Enum]]
 */
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

/**
 * @name SubId
 * @description extends [[u32]]
 */
export interface SubId extends u32 {}

/**
 * @name UpwardMessage
 * @description extends [[Struct]]
 */
export interface UpwardMessage extends Struct {
  readonly origin: ParachainDispatchOrigin;
  readonly data: Bytes;
}

/**
 * @name ValidatorIndex
 * @description extends [[u32]]
 */
export interface ValidatorIndex extends u32 {}

/**
 * @name ValidityAttestation
 * @description extends [[Enum]]
 */
export interface ValidityAttestation extends Enum {
  readonly isNone: boolean;
  readonly isImplicit: boolean;
  readonly asImplicit: CollatorSignature;
  readonly isExplicit: boolean;
  readonly asExplicit: CollatorSignature;
}

/**
 * @name ValidityVote
 * @description extends [[ITuple<[ValidatorIndex, ValidityAttestation]>]]
 */
export interface ValidityVote extends ITuple<[ValidatorIndex, ValidityAttestation]> {}

/**
 * @name WinningData
 * @description extends [[Vec<WinningDataEntry>]]
 */
export interface WinningData extends Vec<WinningDataEntry> {}

/**
 * @name WinningDataEntry
 * @description extends [[ITuple<[AccountId, ParaIdOf, BalanceOf]>]]
 */
export interface WinningDataEntry extends ITuple<[AccountId, ParaIdOf, BalanceOf]> {}
