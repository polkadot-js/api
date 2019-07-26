// Auto-generated via `yarn build:interfaces`, do not edit

import { Codec } from '../../types';
import { Compact, Enum, Option, Struct, Vec } from '../../codec';
import { AccountId, Bytes, u32, u64 } from '../../primitive';
import { BalanceOf, BlockNumber, Hash, Signature } from '../runtime';

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

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    AuctionIndex: AuctionIndex;
    'Compact<AuctionIndex>': Compact<AuctionIndex>;
    'Option<AuctionIndex>': Option<AuctionIndex>;
    'Vec<AuctionIndex>': Vec<AuctionIndex>;
    CollatorSignature: CollatorSignature;
    'Option<CollatorSignature>': Option<CollatorSignature>;
    'Vec<CollatorSignature>': Vec<CollatorSignature>;
    ValidityAttestation: ValidityAttestation;
    'Option<ValidityAttestation>': Option<ValidityAttestation>;
    'Vec<ValidityAttestation>': Vec<ValidityAttestation>;
    ParaId: ParaId;
    'Compact<ParaId>': Compact<ParaId>;
    'Option<ParaId>': Option<ParaId>;
    'Vec<ParaId>': Vec<ParaId>;
    ParaIdOf: ParaIdOf;
    'Option<ParaIdOf>': Option<ParaIdOf>;
    'Vec<ParaIdOf>': Vec<ParaIdOf>;
    ValidatorIndex: ValidatorIndex;
    'Compact<ValidatorIndex>': Compact<ValidatorIndex>;
    'Option<ValidatorIndex>': Option<ValidatorIndex>;
    'Vec<ValidatorIndex>': Vec<ValidatorIndex>;
    ValidityVote: ValidityVote;
    'Option<ValidityVote>': Option<ValidityVote>;
    'Vec<ValidityVote>': Vec<ValidityVote>;
    BalanceUpload: BalanceUpload;
    'Option<BalanceUpload>': Option<BalanceUpload>;
    'Vec<BalanceUpload>': Vec<BalanceUpload>;
    EgressQueueRoot: EgressQueueRoot;
    'Option<EgressQueueRoot>': Option<EgressQueueRoot>;
    'Vec<EgressQueueRoot>': Vec<EgressQueueRoot>;
    HeadData: HeadData;
    'Option<HeadData>': Option<HeadData>;
    'Vec<HeadData>': Vec<HeadData>;
    CandidateReceipt: CandidateReceipt;
    'Option<CandidateReceipt>': Option<CandidateReceipt>;
    'Vec<CandidateReceipt>': Vec<CandidateReceipt>;
    AttestedCandidate: AttestedCandidate;
    'Option<AttestedCandidate>': Option<AttestedCandidate>;
    'Vec<AttestedCandidate>': Vec<AttestedCandidate>;
    SubId: SubId;
    'Compact<SubId>': Compact<SubId>;
    'Option<SubId>': Option<SubId>;
    'Vec<SubId>': Vec<SubId>;
    NewBidder: NewBidder;
    'Option<NewBidder>': Option<NewBidder>;
    'Vec<NewBidder>': Vec<NewBidder>;
    Bidder: Bidder;
    'Option<Bidder>': Option<Bidder>;
    'Vec<Bidder>': Vec<Bidder>;
    IncomingParachainDeploy: IncomingParachainDeploy;
    'Option<IncomingParachainDeploy>': Option<IncomingParachainDeploy>;
    'Vec<IncomingParachainDeploy>': Vec<IncomingParachainDeploy>;
    IncomingParachainFixed: IncomingParachainFixed;
    'Option<IncomingParachainFixed>': Option<IncomingParachainFixed>;
    'Vec<IncomingParachainFixed>': Vec<IncomingParachainFixed>;
    IncomingParachain: IncomingParachain;
    'Option<IncomingParachain>': Option<IncomingParachain>;
    'Vec<IncomingParachain>': Vec<IncomingParachain>;
    LeasePeriod: LeasePeriod;
    'Option<LeasePeriod>': Option<LeasePeriod>;
    'Vec<LeasePeriod>': Vec<LeasePeriod>;
    LeasePeriodOf: LeasePeriodOf;
    'Option<LeasePeriodOf>': Option<LeasePeriodOf>;
    'Vec<LeasePeriodOf>': Vec<LeasePeriodOf>;
    ParachainDispatchOrigin: ParachainDispatchOrigin;
    'Option<ParachainDispatchOrigin>': Option<ParachainDispatchOrigin>;
    'Vec<ParachainDispatchOrigin>': Vec<ParachainDispatchOrigin>;
    SlotRange: SlotRange;
    'Option<SlotRange>': Option<SlotRange>;
    'Vec<SlotRange>': Vec<SlotRange>;
    UpwardMessage: UpwardMessage;
    'Option<UpwardMessage>': Option<UpwardMessage>;
    'Vec<UpwardMessage>': Vec<UpwardMessage>;
    WinningDataEntry: WinningDataEntry;
    'Option<WinningDataEntry>': Option<WinningDataEntry>;
    'Vec<WinningDataEntry>': Vec<WinningDataEntry>;
    WinningData: WinningData;
    'Option<WinningData>': Option<WinningData>;
    'Vec<WinningData>': Vec<WinningData>;
  }
}
