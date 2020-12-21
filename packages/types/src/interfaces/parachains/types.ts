// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, BitVec, Bytes, Compact, Enum, Option, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { Signature } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId, Balance, BlockNumber, Hash, ValidatorId, Weight } from '@polkadot/types/interfaces/runtime';
import type { MembershipProof, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ValidatorIndex } from '@polkadot/types/interfaces/staking';

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

/** @name AbstractFungible */
export interface AbstractFungible extends Struct {
  readonly id: Bytes;
  readonly instance: Compact<u128>;
}

/** @name AbstractNonFungible */
export interface AbstractNonFungible extends Struct {
  readonly class: Bytes;
  readonly instance: AssetInstance;
}

/** @name AccountId32Junction */
export interface AccountId32Junction extends Struct {
  readonly network: NetworkId;
  readonly id: AccountId;
}

/** @name AccountIndex64Junction */
export interface AccountIndex64Junction extends Struct {
  readonly network: NetworkId;
  readonly index: Compact<u64>;
}

/** @name AccountKey20Junction */
export interface AccountKey20Junction extends Struct {
  readonly network: NetworkId;
  readonly index: U8aFixed;
}

/** @name AssetInstance */
export interface AssetInstance extends Enum {
  readonly isUndefined: boolean;
  readonly isIndex8: boolean;
  readonly asIndex8: u8;
  readonly isIndex16: boolean;
  readonly asIndex16: Compact<u16>;
  readonly isIndex32: boolean;
  readonly asIndex32: Compact<u32>;
  readonly isIndex64: boolean;
  readonly asIndex64: Compact<u64>;
  readonly isIndex128: boolean;
  readonly asIndex128: Compact<u128>;
  readonly isArray4: boolean;
  readonly asArray4: U8aFixed;
  readonly isArray8: boolean;
  readonly asArray8: U8aFixed;
  readonly isArray16: boolean;
  readonly asArray16: U8aFixed;
  readonly isArray32: boolean;
  readonly asArray32: U8aFixed;
  readonly isBlob: boolean;
  readonly asBlob: Bytes;
}

/** @name AssignmentId */
export interface AssignmentId extends AccountId {}

/** @name AssignmentKind */
export interface AssignmentKind extends Enum {
  readonly isParachain: boolean;
  readonly isParathread: boolean;
  readonly asParathread: ITuple<[CollatorId, u32]>;
}

/** @name AttestedCandidate */
export interface AttestedCandidate extends Struct {
  readonly candidate: AbridgedCandidateReceipt;
  readonly validityVotes: Vec<ValidityAttestation>;
  readonly validatorIndices: BitVec;
}

/** @name AuctionIndex */
export interface AuctionIndex extends u32 {}

/** @name AuthorityDiscoveryId */
export interface AuthorityDiscoveryId extends AccountId {}

/** @name AvailabilityBitfield */
export interface AvailabilityBitfield extends BitVec {}

/** @name AvailabilityBitfieldRecord */
export interface AvailabilityBitfieldRecord extends Struct {
  readonly bitfield: AvailabilityBitfield;
  readonly submittedTt: BlockNumber;
}

/** @name BackedCandidate */
export interface BackedCandidate extends Struct {
  readonly candidate: CommittedCandidateReceipt;
  readonly validityVotes: Vec<ValidityAttestation>;
  readonly validatorIndices: BitVec;
}

/** @name Balances */
export interface Balances extends Struct {
  readonly queryId: Compact<u64>;
  readonly assets: Vec<MultiAsset>;
}

/** @name Bidder */
export interface Bidder extends Enum {
  readonly isNew: boolean;
  readonly asNew: NewBidder;
  readonly isExisting: boolean;
  readonly asExisting: ParaId;
}

/** @name BufferedSessionChange */
export interface BufferedSessionChange extends Struct {
  readonly applyAt: BlockNumber;
  readonly validators: Vec<ValidatorId>;
  readonly queued: Vec<ValidatorId>;
  readonly sessionIndex: SessionIndex;
}

/** @name CandidateCommitments */
export interface CandidateCommitments extends Struct {
  readonly upwardMessages: Vec<UpwardMessage>;
  readonly horizontalMessages: Vec<OutboundHrmpMessage>;
  readonly newValidationCode: Option<ValidationCode>;
  readonly headData: HeadData;
  readonly processedDownwardMessages: u32;
  readonly hrmpWatermark: BlockNumber;
}

/** @name CandidateDescriptor */
export interface CandidateDescriptor extends Struct {
  readonly paraId: ParaId;
  readonly relayParent: Hash;
  readonly collatorId: Hash;
  readonly persistedValidationDataHash: Hash;
  readonly povHash: Hash;
  readonly erasureRoot: Hash;
  readonly signature: Signature;
}

/** @name CandidateHash */
export interface CandidateHash extends Hash {}

/** @name CandidatePendingAvailability */
export interface CandidatePendingAvailability extends Struct {
  readonly core: CoreIndex;
  readonly hash: CandidateHash;
  readonly descriptor: CandidateDescriptor;
  readonly availabilityVotes: BitVec;
  readonly backers: BitVec;
  readonly relayParentNumber: BlockNumber;
  readonly backedInNumber: BlockNumber;
}

/** @name CandidateReceipt */
export interface CandidateReceipt extends Struct {
  readonly descriptor: CandidateDescriptor;
  readonly commitmentsHash: Hash;
}

/** @name CollatorId */
export interface CollatorId extends U8aFixed {}

/** @name CollatorSignature */
export interface CollatorSignature extends Signature {}

/** @name CommittedCandidateReceipt */
export interface CommittedCandidateReceipt extends Struct {
  readonly descriptor: CandidateDescriptor;
  readonly commitments: CandidateCommitments;
}

/** @name ConcreteFungible */
export interface ConcreteFungible extends Struct {
  readonly id: MultiLocation;
  readonly amount: Compact<u128>;
}

/** @name ConcreteNonFungible */
export interface ConcreteNonFungible extends Struct {
  readonly class: MultiLocation;
  readonly instance: AssetInstance;
}

/** @name CoreAssignment */
export interface CoreAssignment extends Struct {
  readonly core: CoreIndex;
  readonly paraId: ParaId;
  readonly kind: AssignmentKind;
  readonly groupIdx: GroupIndex;
}

/** @name CoreIndex */
export interface CoreIndex extends u32 {}

/** @name CoreOccupied */
export interface CoreOccupied extends Enum {
  readonly isParathread: boolean;
  readonly asParathread: ParathreadEntry;
  readonly isParachain: boolean;
}

/** @name DepositAsset */
export interface DepositAsset extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly dest: MultiLocation;
}

/** @name DepositReserveAsset */
export interface DepositReserveAsset extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly dest: MultiLocation;
  readonly effects: Vec<Order>;
}

/** @name DoubleVoteReport */
export interface DoubleVoteReport extends Struct {
  readonly identity: ValidatorId;
  readonly first: ITuple<[Statement, ValidatorSignature]>;
  readonly second: ITuple<[Statement, ValidatorSignature]>;
  readonly proof: MembershipProof;
  readonly signingContext: SigningContext;
}

/** @name DownwardMessage */
export interface DownwardMessage extends Bytes {}

/** @name ExchangeAsset */
export interface ExchangeAsset extends Struct {
  readonly give: Vec<MultiAsset>;
  readonly receive: Vec<MultiAsset>;
}

/** @name GlobalValidationSchedule */
export interface GlobalValidationSchedule extends Struct {
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly blockNumber: BlockNumber;
}

/** @name GroupIndex */
export interface GroupIndex extends u32 {}

/** @name HeadData */
export interface HeadData extends Bytes {}

/** @name HostConfiguration */
export interface HostConfiguration extends Struct {
  readonly validationUpgradeFrequency: BlockNumber;
  readonly validationUpgradeDelay: BlockNumber;
  readonly acceptancePeriod: BlockNumber;
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly maxPovSize: u32;
  readonly parathreadCores: u32;
  readonly parathreadRetries: u32;
  readonly groupRotationFrequency: BlockNumber;
  readonly chainAvailabilityPeriod: BlockNumber;
  readonly threadAvailabilityPeriod: BlockNumber;
  readonly schedulingLookahead: u32;
  readonly maxValidatorsPerCore: Option<u32>;
  readonly disputePeriod: SessionIndex;
  readonly noShowSlots: u32;
  readonly nDelayTranches: u32;
  readonly zerothDelayTrancheWidth: u32;
  readonly neededApprovals: u32;
  readonly relayVrfModuloSamples: u32;
  readonly maxUpwardQueueCount: u32;
  readonly maxUpwardQueueSize: u32;
  readonly maxDownwardMessageSize: u32;
  readonly preferredDispatchableUpwardMessagesStepWeight: Weight;
  readonly maxUpwardMessageSize: u32;
  readonly maxUpwardMessageNumPerCandidate: u32;
  readonly hrmpOpenRequestTtl: u32;
  readonly hrmpSenderDeposit: Balance;
  readonly hrmpRecipientDeposit: Balance;
  readonly hrmpChannelMaxCapacity: u32;
  readonly hrmpChannelMaxTotalSize: u32;
  readonly hrmpMaxParachainInboundChannels: u32;
  readonly hrmpMaxParathreadInboundChannels: u32;
  readonly hrmpChannelMaxMessageSize: u32;
  readonly hrmpMaxParachainOutboundChannels: u32;
  readonly hrmpMaxParathreadOutboundChannels: u32;
  readonly hrmpMaxMessageNumPerCandidate: u32;
}

/** @name HrmpChannel */
export interface HrmpChannel extends Struct {
  readonly senderDeposit: Balance;
  readonly recipientDeposit: Balance;
  readonly maxCapacity: u32;
  readonly maxTotalSize: u32;
  readonly maxMessageSize: u32;
  readonly msgCount: u32;
  readonly totalSize: u32;
  readonly mqcHead: Option<Hash>;
}

/** @name HrmpChannelId */
export interface HrmpChannelId extends Struct {
  readonly sender: u32;
  readonly receiver: u32;
}

/** @name HrmpOpenChannelRequest */
export interface HrmpOpenChannelRequest extends Struct {
  readonly confirmed: bool;
  readonly age: SessionIndex;
  readonly senderDeposit: Balance;
  readonly maxMessageSize: u32;
  readonly maxCapacity: u32;
  readonly maxTotalSize: u32;
}

/** @name InboundDownwardMessage */
export interface InboundDownwardMessage extends Struct {
  readonly pubSentAt: BlockNumber;
  readonly pubMsg: DownwardMessage;
}

/** @name InboundHrmpMessage */
export interface InboundHrmpMessage extends Struct {
  readonly sentAt: BlockNumber;
  readonly data: Bytes;
}

/** @name InboundHrmpMessages */
export interface InboundHrmpMessages extends Vec<InboundHrmpMessage> {}

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

/** @name InitiateReserveWithdraw */
export interface InitiateReserveWithdraw extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly reserve: MultiLocation;
  readonly effects: Vec<Order>;
}

/** @name InitiateTeleport */
export interface InitiateTeleport extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly dest: MultiLocation;
  readonly effects: Vec<Order>;
}

/** @name Junction */
export interface Junction extends Enum {
  readonly isParent: boolean;
  readonly isParachain: boolean;
  readonly asParachain: Compact<u32>;
  readonly isAccountId32: boolean;
  readonly asAccountId32: AccountId32Junction;
  readonly isAccountIndex64: boolean;
  readonly asAccountIndex64: AccountIndex64Junction;
  readonly isAccountKey20: boolean;
  readonly asAccountKey20: AccountKey20Junction;
  readonly isPalletInstance: boolean;
  readonly asPalletInstance: u8;
  readonly isGeneralIndex: boolean;
  readonly asGeneralIndex: Compact<u128>;
  readonly isGeneralKey: boolean;
  readonly asGeneralKey: Bytes;
  readonly isOnlyChild: boolean;
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

/** @name MessageIngestionType */
export interface MessageIngestionType extends Struct {
  readonly downwardMessages: Vec<InboundDownwardMessage>;
  readonly horizontalMessages: BTreeMap<ParaId, InboundHrmpMessages>;
}

/** @name MultiAsset */
export interface MultiAsset extends Enum {
  readonly isNone: boolean;
  readonly isAll: boolean;
  readonly isAllFungible: boolean;
  readonly isAllNonFungible: boolean;
  readonly isAllAbstractFungible: boolean;
  readonly asAllAbstractFungible: Bytes;
  readonly isAllAbstractNonFungible: boolean;
  readonly asAllAbstractNonFungible: Bytes;
  readonly isAllConcreteFungible: boolean;
  readonly asAllConcreteFungible: MultiLocation;
  readonly isAllConcreteNonFungible: boolean;
  readonly asAllConcreteNonFungible: MultiLocation;
  readonly isAbstractFungible: boolean;
  readonly asAbstractFungible: AbstractFungible;
  readonly isAbstractNonFungible: boolean;
  readonly asAbstractNonFungible: AbstractNonFungible;
  readonly isConcreteFungible: boolean;
  readonly asConcreteFungible: ConcreteFungible;
  readonly isConcreteNonFungible: boolean;
  readonly asConcreteNonFungible: ConcreteNonFungible;
}

/** @name MultiLocation */
export interface MultiLocation extends Enum {
  readonly isNull: boolean;
  readonly isX1: boolean;
  readonly asX1: Junction;
  readonly isX2: boolean;
  readonly asX2: ITuple<[Junction, Junction]>;
  readonly isX3: boolean;
  readonly asX3: ITuple<[Junction, Junction, Junction]>;
  readonly isX4: boolean;
  readonly asX4: ITuple<[Junction, Junction, Junction, Junction]>;
}

/** @name NetworkId */
export interface NetworkId extends Enum {
  readonly isAny: boolean;
  readonly isNamed: boolean;
  readonly asNamed: Bytes;
  readonly isPolkadot: boolean;
  readonly isKusama: boolean;
}

/** @name NewBidder */
export interface NewBidder extends Struct {
  readonly who: AccountId;
  readonly sub: SubId;
}

/** @name Order */
export interface Order extends Enum {
  readonly isNull: boolean;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: DepositAsset;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: DepositReserveAsset;
  readonly isExchangeAsset: boolean;
  readonly asExchangeAsset: ExchangeAsset;
  readonly isInitiateReserveWithdraw: boolean;
  readonly asInitiateReserveWithdraw: InitiateReserveWithdraw;
  readonly isInitiateTeleport: boolean;
  readonly asInitiateTeleport: InitiateTeleport;
  readonly isQueryHolding: boolean;
  readonly asQueryHolding: QueryHolding;
}

/** @name OriginKind */
export interface OriginKind extends Enum {
  readonly isNative: boolean;
  readonly isSovereignAccount: boolean;
  readonly isSuperuser: boolean;
}

/** @name OutboundHrmpMessage */
export interface OutboundHrmpMessage extends Struct {
  readonly recipient: u32;
  readonly data: Bytes;
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

/** @name ParathreadClaim */
export interface ParathreadClaim extends ITuple<[ParaId, CollatorId]> {}

/** @name ParathreadClaimQueue */
export interface ParathreadClaimQueue extends Struct {
  readonly queue: Vec<QueuedParathread>;
  readonly nextCoreOffset: u32;
}

/** @name ParathreadEntry */
export interface ParathreadEntry extends Struct {
  readonly claim: ParathreadClaim;
  readonly retries: u32;
}

/** @name PersistedValidationData */
export interface PersistedValidationData extends Struct {
  readonly parentHead: HeadData;
  readonly blockNumber: BlockNumber;
  readonly hrmpMqcHeads: Vec<ITuple<[u32, Hash]>>;
  readonly dmqMqcHead: Hash;
  readonly maxPovSize: u32;
}

/** @name QueryHolding */
export interface QueryHolding extends Struct {
  readonly queryId: Compact<u64>;
  readonly dest: MultiLocation;
  readonly assets: Vec<MultiAsset>;
}

/** @name QueuedParathread */
export interface QueuedParathread extends Struct {
  readonly claim: ParathreadEntry;
  readonly coreOffset: u32;
}

/** @name RegisteredParachainInfo */
export interface RegisteredParachainInfo extends Struct {
  readonly validators: Vec<ValidatorId>;
  readonly proposer: AccountId;
}

/** @name RelayChainBlockNumber */
export interface RelayChainBlockNumber extends BlockNumber {}

/** @name RelayedFrom */
export interface RelayedFrom extends Struct {
  readonly superorigin: MultiLocation;
  readonly inner: VersionedXcm;
}

/** @name RelayTo */
export interface RelayTo extends Struct {
  readonly dest: MultiLocation;
  readonly inner: VersionedXcm;
}

/** @name Remark */
export interface Remark extends U8aFixed {}

/** @name ReserveAssetDeposit */
export interface ReserveAssetDeposit extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly effects: Vec<Order>;
}

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

/** @name SessionInfo */
export interface SessionInfo extends Struct {
  readonly validators: Vec<ValidatorId>;
  readonly discoveryKeys: Vec<AuthorityDiscoveryId>;
  readonly assignmentKeys: Vec<AssignmentId>;
  readonly validatorGroups: Vec<ValidatorGroup>;
  readonly nCores: u32;
  readonly zerothDelayTrancheWidth: u32;
  readonly relayVrfModuloSamples: u32;
  readonly nDelayTranches: u32;
  readonly noShowSlots: u32;
  readonly neededApprovals: u32;
}

/** @name SignedAvailabilityBitfield */
export interface SignedAvailabilityBitfield extends Struct {
  readonly payload: BitVec;
  readonly validatorIndex: u32;
  readonly signature: Signature;
}

/** @name SignedAvailabilityBitfields */
export interface SignedAvailabilityBitfields extends Vec<SignedAvailabilityBitfield> {}

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

/** @name TeleportAsset */
export interface TeleportAsset extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly effects: Vec<Order>;
}

/** @name Transact */
export interface Transact extends Struct {
  readonly originType: OriginKind;
  readonly call: Bytes;
}

/** @name TransientValidationData */
export interface TransientValidationData extends Struct {
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly balance: Balance;
  readonly codeUpgradeAllowed: Option<BlockNumber>;
  readonly dmqLength: u32;
}

/** @name UpwardMessage */
export interface UpwardMessage extends Bytes {}

/** @name ValidationCode */
export interface ValidationCode extends Bytes {}

/** @name ValidationData */
export interface ValidationData extends Struct {
  readonly persisted: PersistedValidationData;
  readonly transient: TransientValidationData;
}

/** @name ValidationFunctionParams */
export interface ValidationFunctionParams extends Struct {
  readonly maxCodeSize: u32;
  readonly relayChainHeight: RelayChainBlockNumber;
  readonly codeUpgradeAllowed: Option<RelayChainBlockNumber>;
}

/** @name ValidatorGroup */
export interface ValidatorGroup extends Vec<ValidatorIndex> {}

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

/** @name VersionedMultiAsset */
export interface VersionedMultiAsset extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiAsset;
}

/** @name VersionedMultiLocation */
export interface VersionedMultiLocation extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiLocation;
}

/** @name VersionedXcm */
export interface VersionedXcm extends Enum {
  readonly isV0: boolean;
  readonly asV0: Xcm;
}

/** @name WinningData */
export interface WinningData extends Vec<WinningDataEntry> {}

/** @name WinningDataEntry */
export interface WinningDataEntry extends Option<Bidder> {}

/** @name WithdrawAsset */
export interface WithdrawAsset extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly effects: Vec<Order>;
}

/** @name Xcm */
export interface Xcm extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: WithdrawAsset;
  readonly isReserveAssetDeposit: boolean;
  readonly asReserveAssetDeposit: ReserveAssetDeposit;
  readonly isTeleportAsset: boolean;
  readonly asTeleportAsset: TeleportAsset;
  readonly isBalances: boolean;
  readonly asBalances: Balances;
  readonly isTransact: boolean;
  readonly asTransact: Transact;
  readonly isRelayTo: boolean;
  readonly asRelayTo: RelayTo;
  readonly isRelayedFrom: boolean;
  readonly asRelayedFrom: RelayedFrom;
}

/** @name XcmError */
export interface XcmError extends Enum {
  readonly isUndefined: boolean;
  readonly isUnimplemented: boolean;
  readonly isUnhandledXcmVersion: boolean;
  readonly isUnhandledXcmMessage: boolean;
  readonly isUnhandledEffect: boolean;
  readonly isEscalationOfPrivilege: boolean;
  readonly isUntrustedReserveLocation: boolean;
  readonly isUntrustedTeleportLocation: boolean;
  readonly isDestinationBufferOverflow: boolean;
  readonly isCannotReachDestination: boolean;
  readonly isMultiLocationFull: boolean;
  readonly isFailedToDecode: boolean;
  readonly isBadOrigin: boolean;
}

/** @name XcmResult */
export interface XcmResult extends Enum {
  readonly isOk: boolean;
  readonly asOk: ITuple<[]>;
  readonly isErr: boolean;
  readonly asErr: XcmError;
}

export type PHANTOM_PARACHAINS = 'parachains';
