// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { Enum, Struct, Vec } from '../../codec';
import { Bytes, u32, u64 } from '../../primitive';
import { AccountId, BalanceOf, BlockNumber, Hash, Signature } from '../runtime';

/** Struct */
export interface AttestedCandidate extends Struct {
  /** CandidateReceipt */
  readonly candidate: CandidateReceipt;
  /** Vec<ValidityVote> */
  readonly validityVotes: Vec<ValidityVote>;
}

/** u32 */
export type AuctionIndex = u32;

/** [AccountId, u64] & Codec */
export type BalanceUpload = [AccountId, u64] & Codec;

/** Enum */
export interface Bidder extends Enum {
  /** 0:: New(NewBidder) */
  readonly isNew: boolean;
  /** NewBidder */
  readonly asNew: NewBidder;
  /** 1:: Existing(ParaId) */
  readonly isExisting: boolean;
  /** ParaId */
  readonly asExisting: ParaId;
}

/** Struct */
export interface CandidateReceipt extends Struct {
  /** ParaId */
  readonly parachainIndex: ParaId;
  /** AccountId */
  readonly collator: AccountId;
  /** CollatorSignature */
  readonly signature: CollatorSignature;
  /** HeadData */
  readonly headData: HeadData;
  /** Vec<BalanceUpload> */
  readonly balanceUploads: Vec<BalanceUpload>;
  /** Vec<EgressQueueRoot> */
  readonly egressQueueRoots: Vec<EgressQueueRoot>;
  /** u64 */
  readonly fees: u64;
  /** Hash */
  readonly blockDataHash: Hash;
}

/** Signature */
export type CollatorSignature = Signature;

/** [ParaId, Hash] & Codec */
export type EgressQueueRoot = [ParaId, Hash] & Codec;

/** Bytes */
export type HeadData = Bytes;

/** Enum */
export interface IncomingParachain extends Enum {
  /** 0:: Unset(NewBidder) */
  readonly isUnset: boolean;
  /** NewBidder */
  readonly asUnset: NewBidder;
  /** 1:: Fixed(IncomingParachainFixed) */
  readonly isFixed: boolean;
  /** IncomingParachainFixed */
  readonly asFixed: IncomingParachainFixed;
  /** 2:: Deploy(IncomingParachainDeploy) */
  readonly isDeploy: boolean;
  /** IncomingParachainDeploy */
  readonly asDeploy: IncomingParachainDeploy;
}

/** Struct */
export interface IncomingParachainDeploy extends Struct {
  /** Bytes */
  readonly code: Bytes;
  /** Bytes */
  readonly initialHeadData: Bytes;
}

/** Struct */
export interface IncomingParachainFixed extends Struct {
  /** Hash */
  readonly codeHash: Hash;
  /** Bytes */
  readonly initialHeadData: Bytes;
}

/** BlockNumber */
export type LeasePeriod = BlockNumber;

/** LeasePeriod */
export type LeasePeriodOf = LeasePeriod;

/** Struct */
export interface NewBidder extends Struct {
  /** AccountId */
  readonly who: AccountId;
  /** SubId */
  readonly sub: SubId;
}

/** Enum */
export interface ParachainDispatchOrigin extends Enum {
  /** 0:: Signed */
  readonly isSigned: boolean;
  /** 1:: Parachain */
  readonly isParachain: boolean;
}

/** u32 */
export type ParaId = u32;

/** ParaId */
export type ParaIdOf = ParaId;

/** Enum */
export interface SlotRange extends Enum {
  /** 0:: ZeroZero */
  readonly isZeroZero: boolean;
  /** 1:: ZeroOne */
  readonly isZeroOne: boolean;
  /** 2:: ZeroTwo */
  readonly isZeroTwo: boolean;
  /** 3:: ZeroThree */
  readonly isZeroThree: boolean;
  /** 4:: OneOne */
  readonly isOneOne: boolean;
  /** 5:: OneTwo */
  readonly isOneTwo: boolean;
  /** 6:: OneThree */
  readonly isOneThree: boolean;
  /** 7:: TwoTwo */
  readonly isTwoTwo: boolean;
  /** 8:: TwoThree */
  readonly isTwoThree: boolean;
  /** 9:: ThreeThree */
  readonly isThreeThree: boolean;
}

/** u32 */
export type SubId = u32;

/** Struct */
export interface UpwardMessage extends Struct {
  /** ParachainDispatchOrigin */
  readonly origin: ParachainDispatchOrigin;
  /** Bytes */
  readonly data: Bytes;
}

/** u32 */
export type ValidatorIndex = u32;

/** Enum */
export interface ValidityAttestation extends Enum {
  /** 0:: None */
  readonly isNone: boolean;
  /** 1:: Implicit(CollatorSignature) */
  readonly isImplicit: boolean;
  /** CollatorSignature */
  readonly asImplicit: CollatorSignature;
  /** 2:: Explicit(CollatorSignature) */
  readonly isExplicit: boolean;
  /** CollatorSignature */
  readonly asExplicit: CollatorSignature;
}

/** [ValidatorIndex, ValidityAttestation] & Codec */
export type ValidityVote = [ValidatorIndex, ValidityAttestation] & Codec;

/** Vec<WinningDataEntry> */
export type WinningData = Vec<WinningDataEntry>;

/** [AccountId, ParaIdOf, BalanceOf] & Codec */
export type WinningDataEntry = [AccountId, ParaIdOf, BalanceOf] & Codec;
