// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { BitVec, Bytes, u32 } from '@polkadot/types/primitive';
import { Signature } from '@polkadot/types/interfaces/extrinsics';
import { AccountId, Balance, BlockNumber, Hash, ValidatorId } from '@polkadot/types/interfaces/runtime';
import { MembershipProof, SessionIndex } from '@polkadot/types/interfaces/session';

/** @name AbridgedCandidateReceipt */
export interface AbridgedCandidateReceipt extends Struct {
  readonly parachainIndex: ParaId;
  readonly relayParent: Hash;
  readonly headData: HeadData;
  readonly collator: CollatorId;
  readonly signature: CollatorSignature;
  readonly povBlockHash: Hash;
  readonly commitments: CandidateCommitments;
}

/** @name AttestedCandidate */
export interface AttestedCandidate extends Struct {
  readonly candidate: AbridgedCandidateReceipt;
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

/** @name CandidateCommitments */
export interface CandidateCommitments extends Struct {
  readonly fees: Balance;
  readonly upwardMessages: Vec<UpwardMessage>;
  readonly erasureRoot: Hash;
  readonly newValidationCode: Option<ValidationCode>;
  readonly processedDownwardMessages: u32;
}

/** @name CandidateReceipt */
export interface CandidateReceipt extends Struct {
  readonly parachainIndex: ParaId;
  readonly relayParent: Hash;
  readonly head_data: HeadData;
  readonly collator: CollatorId;
  readonly signature: CollatorSignature;
  readonly povBlockHash: Hash;
  readonly globalValidation: GlobalValidationSchedule;
  readonly localValidation: LocalValidationData;
  readonly commitments: CandidateCommitments;
}

/** @name CollatorId */
export interface CollatorId extends U8aFixed {}

/** @name CollatorSignature */
export interface CollatorSignature extends Signature {}

/** @name DoubleVoteReport */
export interface DoubleVoteReport extends Struct {
  readonly identity: ValidatorId;
  readonly first: ITuple<[Statement, ValidatorSignature]>;
  readonly second: ITuple<[Statement, ValidatorSignature]>;
  readonly proof: MembershipProof;
  readonly signingContext: SigningContext;
}

/** @name DownwardMessage */
export interface DownwardMessage extends Enum {
  readonly isTransferInto: boolean;
  readonly asTransferInto: ITuple<[AccountId, Balance, Remark]>;
  readonly isOpaque: boolean;
  readonly asOpaque: Bytes;
}

/** @name GlobalValidationSchedule */
export interface GlobalValidationSchedule extends Struct {
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly blockNumber: BlockNumber;
}

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
  readonly code: ValidationCode;
  readonly initialHeadData: HeadData;
}

/** @name IncomingParachainFixed */
export interface IncomingParachainFixed extends Struct {
  readonly codeHash: Hash;
  readonly codeSize: u32;
  readonly initialHeadData: HeadData;
}

/** @name LeasePeriod */
export interface LeasePeriod extends BlockNumber {}

/** @name LeasePeriodOf */
export interface LeasePeriodOf extends LeasePeriod {}

/** @name LocalValidationData */
export interface LocalValidationData extends Struct {
  readonly parentHead: HeadData;
  readonly balance: Balance;
  readonly codeUpgradeAllowed: Option<BlockNumber>;
}

/** @name NewBidder */
export interface NewBidder extends Struct {
  readonly who: AccountId;
  readonly sub: SubId;
}

/** @name ParachainDispatchOrigin */
export interface ParachainDispatchOrigin extends Enum {
  readonly isSigned: boolean;
  readonly isParachain: boolean;
  readonly isRoot: boolean;
}

/** @name ParachainProposal */
export interface ParachainProposal extends Struct {
  readonly proposer: AccountId;
  readonly validationFunction: ValidationCode;
  readonly initialHeadState: HeadData;
  readonly validators: Vec<ValidatorId>;
  readonly name: Bytes;
  readonly balance: Balance;
}

/** @name ParaId */
export interface ParaId extends u32 {}

/** @name ParaInfo */
export interface ParaInfo extends Struct {
  readonly scheduling: Scheduling;
}

/** @name ParaPastCodeMeta */
export interface ParaPastCodeMeta extends Struct {
  readonly upgradeTimes: Vec<BlockNumber>;
  readonly lastPruned: Option<BlockNumber>;
}

/** @name ParaScheduling */
export interface ParaScheduling extends Enum {
  readonly isAlways: boolean;
  readonly isDynamic: boolean;
}

/** @name RegisteredParachainInfo */
export interface RegisteredParachainInfo extends Struct {
  readonly validators: Vec<ValidatorId>;
  readonly proposer: AccountId;
}

/** @name RelayChainBlockNumber */
export interface RelayChainBlockNumber extends BlockNumber {}

/** @name Remark */
export interface Remark extends U8aFixed {}

/** @name Retriable */
export interface Retriable extends Enum {
  readonly isNever: boolean;
  readonly isWithRetries: boolean;
  readonly asWithRetries: u32;
}

/** @name Scheduling */
export interface Scheduling extends Enum {
  readonly isAlways: boolean;
  readonly isDynamic: boolean;
}

/** @name SigningContext */
export interface SigningContext extends Struct {
  readonly sessionIndex: SessionIndex;
  readonly parentHash: Hash;
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

/** @name Statement */
export interface Statement extends Enum {
  readonly isNever: boolean;
  readonly isCandidate: boolean;
  readonly asCandidate: Hash;
  readonly isValid: boolean;
  readonly asValid: Hash;
  readonly isInvalid: boolean;
  readonly asInvalid: Hash;
}

/** @name SubId */
export interface SubId extends u32 {}

/** @name UpwardMessage */
export interface UpwardMessage extends Struct {
  readonly origin: ParachainDispatchOrigin;
  readonly data: Bytes;
}

/** @name ValidationCode */
export interface ValidationCode extends Bytes {}

/** @name ValidationFunctionParams */
export interface ValidationFunctionParams extends Struct {
  readonly maxCodeSize: u32;
  readonly relayChainHeight: RelayChainBlockNumber;
  readonly codeUpgradeAllowed: Option<RelayChainBlockNumber>;
}

/** @name ValidatorSignature */
export interface ValidatorSignature extends Signature {}

/** @name ValidityAttestation */
export interface ValidityAttestation extends Enum {
  readonly isNever: boolean;
  readonly isImplicit: boolean;
  readonly asImplicit: ValidatorSignature;
  readonly isExplicit: boolean;
  readonly asExplicit: ValidatorSignature;
}

/** @name WinningData */
export interface WinningData extends Vec<WinningDataEntry> {}

/** @name WinningDataEntry */
export interface WinningDataEntry extends Option<Bidder> {}

export type PHANTOM_PARACHAINS = 'parachains';
