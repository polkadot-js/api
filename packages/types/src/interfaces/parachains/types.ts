// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, H256, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, BalanceOf, BlockNumber, Hash, Signature } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface AttestedCandidate extends Struct {
  /** CandidateReceipt */
  readonly candidate: CandidateReceipt;
  /** Vec<ValidityVote> */
  readonly validityVotes: Vec<ValidityVote>;
}

/** u32 */
export interface AuctionIndex extends u32 {}

/** ITuple<[AccountId, u64]> */
export interface BalanceUpload extends ITuple<[AccountId, u64]> {}

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

/** H256 */
export interface CollatorId extends H256 {}

/** Signature */
export interface CollatorSignature extends Signature {}

/** ITuple<[ParaId, Hash]> */
export interface EgressQueueRoot extends ITuple<[ParaId, Hash]> {}

/** Bytes */
export interface HeadData extends Bytes {}

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
export interface LeasePeriod extends BlockNumber {}

/** LeasePeriod */
export interface LeasePeriodOf extends LeasePeriod {}

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
export interface ParaId extends u32 {}

/** ParaId */
export interface ParaIdOf extends ParaId {}

/** Struct */
export interface ParaInfo extends Struct {
  /** ParaScheduling */
  readonly scheduling: ParaScheduling;
}

/** Enum */
export interface ParaScheduling extends Enum {
  /** 0:: Always */
  readonly isAlways: boolean;
  /** 1:: Dynamic */
  readonly isDynamic: boolean;
}

/** Enum */
export interface Retriable extends Enum {
  /** 0:: Never */
  readonly isNever: boolean;
  /** 1:: WithRetries(u32) */
  readonly isWithRetries: boolean;
  /** u32 */
  readonly asWithRetries: u32;
}

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
export interface SubId extends u32 {}

/** Struct */
export interface UpwardMessage extends Struct {
  /** ParachainDispatchOrigin */
  readonly origin: ParachainDispatchOrigin;
  /** Bytes */
  readonly data: Bytes;
}

/** u32 */
export interface ValidatorIndex extends u32 {}

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

/** ITuple<[ValidatorIndex, ValidityAttestation]> */
export interface ValidityVote extends ITuple<[ValidatorIndex, ValidityAttestation]> {}

/** Vec<WinningDataEntry> */
export interface WinningData extends Vec<WinningDataEntry> {}

/** ITuple<[AccountId, ParaIdOf, BalanceOf]> */
export interface WinningDataEntry extends ITuple<[AccountId, ParaIdOf, BalanceOf]> {}
