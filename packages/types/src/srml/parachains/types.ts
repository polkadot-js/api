/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { Enum, Struct, Vector } from '../../codec';
import { AccountId, BalanceOf, Bytes, Hash, Signature, u32, u64 } from '../../primitive';
import { BlockNumber } from '../../type';
import { SessionKey } from '../session/types';

export interface AttestedCandidate extends Struct {
  readonly candidate: CandidateReceipt;
  readonly validityVotes: Vector<ValidityVote>;
  readonly availabilityVotes: Vector<AvailabilityVote>;
}

export interface AuctionIndex extends u32 {}

type _AvailabilityVote = [SessionKey, CollatorSignature];
export interface AvailabilityVote extends Codec, _AvailabilityVote {}

type _BalanceUpload = [AccountId, u64];
export interface BalanceUpload extends Codec, _BalanceUpload {}

export interface Bidder extends Enum {
  /**
   * @description 0:: New(NewBidder)
   */
  readonly isNew: boolean;
  readonly asNew: NewBidder;
  /**
   * @description 1:: Existing(ParaId)
   */
  readonly isExisting: boolean;
  readonly asExisting: ParaId;
}

export interface CandidateReceipt extends Struct {
  readonly parachainIndex: ParaId;
  readonly collator: AccountId;
  readonly signature: CollatorSignature;
  readonly headData: HeadData;
  readonly balanceUploads: Vector<BalanceUpload>;
  readonly egressQueueRoots: Vector<EgressQueueRoot>;
  readonly fees: u64;
  readonly blockDataHash: Hash;
}

export interface CollatorSignature extends Signature {}

type _EgressQueueRoot = [ParaId, Hash];
export interface EgressQueueRoot extends Codec, _EgressQueueRoot {}

export interface HeadData extends Bytes {}

export interface IncomingParachain extends Enum {
  /**
   * @description 0:: Unset(NewBidder)
   */
  readonly isUnset: boolean;
  readonly asUnset: NewBidder;
  /**
   * @description 1:: Fixed(IncomingParachainFixed)
   */
  readonly isFixed: boolean;
  readonly asFixed: IncomingParachainFixed;
  /**
   * @description 2:: Deploy(IncomingParachainDeploy)
   */
  readonly isDeploy: boolean;
  readonly asDeploy: IncomingParachainDeploy;
}

export interface IncomingParachainDeploy extends Struct {
  readonly code: Bytes;
  readonly initialHeadData: Bytes;
}

export interface IncomingParachainFixed extends Struct {
  readonly codeHash: Hash;
  readonly initialHeadData: Bytes;
}

export interface LeasePeriod extends BlockNumber {}

export interface LeasePeriodOf extends LeasePeriod {}

export interface NewBidder extends Struct {
  readonly who: AccountId;
  readonly sub: SubId;
}

export interface ParachainDispatchOrigin extends Enum {
  /**
   * @description 0:: Signed
   */
  readonly isSigned: boolean;
  /**
   * @description 1:: Parachain
   */
  readonly isParachain: boolean;
}

export interface ParaId extends u32 {}

export interface ParaIdOf extends ParaId {}

export interface SlotRange extends Enum {
  /**
   * @description 0:: ZeroZero
   */
  readonly isZeroZero: boolean;
  /**
   * @description 1:: ZeroOne
   */
  readonly isZeroOne: boolean;
  /**
   * @description 2:: ZeroTwo
   */
  readonly isZeroTwo: boolean;
  /**
   * @description 3:: ZeroThree
   */
  readonly isZeroThree: boolean;
  /**
   * @description 4:: OneOne
   */
  readonly isOneOne: boolean;
  /**
   * @description 5:: OneTwo
   */
  readonly isOneTwo: boolean;
  /**
   * @description 6:: OneThree
   */
  readonly isOneThree: boolean;
  /**
   * @description 7:: TwoTwo
   */
  readonly isTwoTwo: boolean;
  /**
   * @description 8:: TwoThree
   */
  readonly isTwoThree: boolean;
  /**
   * @description 9:: ThreeThree
   */
  readonly isThreeThree: boolean;
}

export interface SubId extends u32 {}

export interface UpwardMessage extends Struct {
  readonly origin: ParachainDispatchOrigin;
  readonly data: Bytes;
}

export interface ValidityAttestation extends Enum {
  /**
   * @description 0:: None
   */
  readonly isNone: boolean;
  /**
   * @description 1:: Implicit(CollatorSignature)
   */
  readonly isImplicit: boolean;
  readonly asImplicit: CollatorSignature;
  /**
   * @description 2:: Explicit(CollatorSignature)
   */
  readonly isExplicit: boolean;
  readonly asExplicit: CollatorSignature;
}

type _ValidityVote = [AccountId, ValidityAttestation];
export interface ValidityVote extends Codec, _ValidityVote {}

export interface WinningData extends Vector<WinningDataEntry> {}

type _WinningDataEntry = [AccountId, ParaIdOf, BalanceOf];
export interface WinningDataEntry extends Codec, _WinningDataEntry {}
