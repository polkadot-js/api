// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Compact, Option, Vec } from './codec';
import { Bytes, Data, Fixed64, H160, H256, H512, Null, StorageData, StorageHasher, StorageKey, Text, Type, bool, i128, i16, i256, i32, i64, i8, u128, u16, u256, u32, u64, u8, usize } from './primitive';
import { AccountId, AccountIdOf, AccountIndex, Address, AssetId, Balance, BalanceOf, Block, BlockNumber, Call, Consensus, ConsensusEngineId, Digest, DigestItem, Ed25519Signature, Extrinsic, ExtrinsicEra, ExtrinsicPayload, Hash, Header, ImmortalEra, Index, Justification, KeyTypeId, KeyValue, LockIdentifier, Moment, MortalEra, Origin, Perbill, Permill, Phantom, PhantomData, PreRuntime, Seal, SealV0, Signature, SignedBlock, Sr25519Signature, ValidatorId, Weight, WeightMultiplier } from './interfaces/runtime';
import { InclusionHeight, Uncle, UncleEntryItem } from './interfaces/authorship';
import { RawAuraPreDigest } from './interfaces/aura';
import { BabeAuthorityWeight, BabeBlockWeight, BabeWeight, RawBabePreDigest, RawBabePreDigestPrimary, RawBabePreDigestSecondary, SlotNumber } from './interfaces/babe';
import { BalanceLock, VestingSchedule, WithdrawReasons } from './interfaces/balances';
import { MemberCount, ProposalIndex, Votes } from './interfaces/collective';
import { AuthorityId } from './interfaces/consensus';
import { AliveContractInfo, CodeHash, ContractInfo, ContractStorageKey, Gas, PrefabWasmModule, PrefabWasmModuleReserved, Schedule, SeedOf, TombstoneContractInfo, TrieId } from './interfaces/contracts';
import { Conviction, PropIndex, Proposal, ReferendumIndex, ReferendumInfo } from './interfaces/democracy';
import { AccountInfo, Amount, AssetOf, InherentOfflineReport, LockPeriods, NewAccountOutcome, OpaqueKey, SessionKey } from './interfaces/deprecated';
import { ApprovalFlag, SetIndex, Vote, VoteIndex, VoteThreshold, VoterInfo } from './interfaces/elections';
import { AssetOptions, Owner, PermissionLatest, PermissionVersions, PermissionsV1 } from './interfaces/genericAsset';
import { AuthorityWeight, NextAuthority, PendingPause, PendingResume, StoredPendingChange, StoredState } from './interfaces/grandpa';
import { AuthIndex, AuthoritySignature, Heartbeat, OpaqueMultiaddr, OpaqueNetworkState, OpaquePeerId } from './interfaces/imOnline';
import { Kind, OffenceDetails, Offender, OpaqueTimeSlot, ReportIdOf, Reporter } from './interfaces/offences';
import { FullIdentification, IdentificationTuple, Keys, SessionIndex, SessionKeysPolkadot, SessionKeysSubstrate } from './interfaces/session';
import { EraIndex, EraRewards, Exposure, Forcing, IndividualExposure, MomentOf, RewardDestination, SlashJournalEntry, StakingLedger, UnlockChunk, ValidatorPrefs } from './interfaces/staking';
import { DigestOf, Event, EventId, EventIndex, EventRecord, EventRecord0to76, Key, Phase } from './interfaces/system';
import { TreasuryProposal } from './interfaces/treasury';
import { BlockAttestations, IncludedBlocks, MoreAttestations } from './interfaces/attestations';
import { EcdsaSignature, EthereumAddress } from './interfaces/claims';
import { AttestedCandidate, AuctionIndex, BalanceUpload, Bidder, CandidateReceipt, CollatorSignature, EgressQueueRoot, HeadData, IncomingParachain, IncomingParachainDeploy, IncomingParachainFixed, LeasePeriod, LeasePeriodOf, NewBidder, ParaId, ParaIdOf, ParachainDispatchOrigin, SlotRange, SubId, UpwardMessage, ValidatorIndex, ValidityAttestation, ValidityVote, WinningData, WinningDataEntry } from './interfaces/parachains';
import { CallMetadataV0, DoubleMapTypeV3, DoubleMapTypeV4, DoubleMapTypeV5, DoubleMapTypeV6, DoubleMapTypeV7, EventMetadataV0, EventMetadataV1, EventMetadataV2, EventMetadataV3, EventMetadataV4, EventMetadataV5, EventMetadataV6, EventMetadataV7, FunctionArgumentMetadataV0, FunctionArgumentMetadataV1, FunctionArgumentMetadataV2, FunctionArgumentMetadataV3, FunctionArgumentMetadataV4, FunctionArgumentMetadataV5, FunctionArgumentMetadataV6, FunctionArgumentMetadataV7, FunctionMetadataV0, FunctionMetadataV1, FunctionMetadataV2, FunctionMetadataV3, FunctionMetadataV4, FunctionMetadataV5, FunctionMetadataV6, FunctionMetadataV7, MapTypeV0, ModuleConstantMetadataV6, ModuleConstantMetadataV7, ModuleMetadataV0, ModuleMetadataV1, OuterDispatchCallV0, OuterDispatchMetadataV0, PlainTypeV0, PlainTypeV1, PlainTypeV2, PlainTypeV3, PlainTypeV4, PlainTypeV5, PlainTypeV6, PlainTypeV7, RuntimeModuleMetadataV0, StorageEntryModifierV6, StorageEntryModifierV7, StorageFunctionMetadataV0, StorageFunctionMetadataV1, StorageFunctionModifierV0, StorageFunctionModifierV1, StorageFunctionModifierV2, StorageFunctionModifierV3, StorageFunctionModifierV4, StorageFunctionModifierV5, StorageFunctionTypeV0, StorageFunctionTypeV1, StorageMetadataV0 } from './interfaces/metadata';
import { ApiId, ChainProperties, ExtrinsicOrHash, ExtrinsicStatus, Health, KeyValueOption, NetworkState, PeerInfo, RuntimeVersion, RuntimeVersionApi, StorageChangeSet } from './interfaces/rpc';

export interface InterfaceRegistry {
  bool: bool;
  'Option<bool>': Option<bool>;
  'Vec<bool>': Vec<bool>;
  Bytes: Bytes;
  'Option<Bytes>': Option<Bytes>;
  'Vec<Bytes>': Vec<Bytes>;
  Data: Data;
  'Option<Data>': Option<Data>;
  'Vec<Data>': Vec<Data>;
  H160: H160;
  'Option<H160>': Option<H160>;
  'Vec<H160>': Vec<H160>;
  H256: H256;
  'Option<H256>': Option<H256>;
  'Vec<H256>': Vec<H256>;
  H512: H512;
  'Option<H512>': Option<H512>;
  'Vec<H512>': Vec<H512>;
  i8: i8;
  'Option<i8>': Option<i8>;
  'Vec<i8>': Vec<i8>;
  i16: i16;
  'Option<i16>': Option<i16>;
  'Vec<i16>': Vec<i16>;
  i32: i32;
  'Option<i32>': Option<i32>;
  'Vec<i32>': Vec<i32>;
  i64: i64;
  'Option<i64>': Option<i64>;
  'Vec<i64>': Vec<i64>;
  Fixed64: Fixed64;
  'Option<Fixed64>': Option<Fixed64>;
  'Vec<Fixed64>': Vec<Fixed64>;
  i128: i128;
  'Option<i128>': Option<i128>;
  'Vec<i128>': Vec<i128>;
  i256: i256;
  'Option<i256>': Option<i256>;
  'Vec<i256>': Vec<i256>;
  Null: Null;
  'Option<Null>': Option<Null>;
  'Vec<Null>': Vec<Null>;
  StorageData: StorageData;
  'Option<StorageData>': Option<StorageData>;
  'Vec<StorageData>': Vec<StorageData>;
  StorageHasher: StorageHasher;
  'Option<StorageHasher>': Option<StorageHasher>;
  'Vec<StorageHasher>': Vec<StorageHasher>;
  StorageKey: StorageKey;
  'Option<StorageKey>': Option<StorageKey>;
  'Vec<StorageKey>': Vec<StorageKey>;
  Text: Text;
  'Option<Text>': Option<Text>;
  'Vec<Text>': Vec<Text>;
  Type: Type;
  'Option<Type>': Option<Type>;
  'Vec<Type>': Vec<Type>;
  u8: u8;
  'Compact<u8>': Compact<u8>;
  'Option<u8>': Option<u8>;
  'Vec<u8>': Vec<u8>;
  u16: u16;
  'Compact<u16>': Compact<u16>;
  'Option<u16>': Option<u16>;
  'Vec<u16>': Vec<u16>;
  u32: u32;
  'Compact<u32>': Compact<u32>;
  'Option<u32>': Option<u32>;
  'Vec<u32>': Vec<u32>;
  u64: u64;
  'Compact<u64>': Compact<u64>;
  'Option<u64>': Option<u64>;
  'Vec<u64>': Vec<u64>;
  u128: u128;
  'Compact<u128>': Compact<u128>;
  'Option<u128>': Option<u128>;
  'Vec<u128>': Vec<u128>;
  u256: u256;
  'Compact<u256>': Compact<u256>;
  'Option<u256>': Option<u256>;
  'Vec<u256>': Vec<u256>;
  usize: usize;
  'Compact<usize>': Compact<usize>;
  'Option<usize>': Option<usize>;
  'Vec<usize>': Vec<usize>;
  AccountId: AccountId;
  'Option<AccountId>': Option<AccountId>;
  'Vec<AccountId>': Vec<AccountId>;
  AccountIdOf: AccountIdOf;
  'Option<AccountIdOf>': Option<AccountIdOf>;
  'Vec<AccountIdOf>': Vec<AccountIdOf>;
  AccountIndex: AccountIndex;
  'Compact<AccountIndex>': Compact<AccountIndex>;
  'Option<AccountIndex>': Option<AccountIndex>;
  'Vec<AccountIndex>': Vec<AccountIndex>;
  Address: Address;
  'Option<Address>': Option<Address>;
  'Vec<Address>': Vec<Address>;
  AssetId: AssetId;
  'Compact<AssetId>': Compact<AssetId>;
  'Option<AssetId>': Option<AssetId>;
  'Vec<AssetId>': Vec<AssetId>;
  Balance: Balance;
  'Compact<Balance>': Compact<Balance>;
  'Option<Balance>': Option<Balance>;
  'Vec<Balance>': Vec<Balance>;
  BalanceOf: BalanceOf;
  'Option<BalanceOf>': Option<BalanceOf>;
  'Vec<BalanceOf>': Vec<BalanceOf>;
  Block: Block;
  'Option<Block>': Option<Block>;
  'Vec<Block>': Vec<Block>;
  BlockNumber: BlockNumber;
  'Compact<BlockNumber>': Compact<BlockNumber>;
  'Option<BlockNumber>': Option<BlockNumber>;
  'Vec<BlockNumber>': Vec<BlockNumber>;
  Call: Call;
  'Option<Call>': Option<Call>;
  'Vec<Call>': Vec<Call>;
  ConsensusEngineId: ConsensusEngineId;
  'Compact<ConsensusEngineId>': Compact<ConsensusEngineId>;
  'Option<ConsensusEngineId>': Option<ConsensusEngineId>;
  'Vec<ConsensusEngineId>': Vec<ConsensusEngineId>;
  Digest: Digest;
  'Option<Digest>': Option<Digest>;
  'Vec<Digest>': Vec<Digest>;
  DigestItem: DigestItem;
  'Option<DigestItem>': Option<DigestItem>;
  'Vec<DigestItem>': Vec<DigestItem>;
  Extrinsic: Extrinsic;
  'Option<Extrinsic>': Option<Extrinsic>;
  'Vec<Extrinsic>': Vec<Extrinsic>;
  ExtrinsicEra: ExtrinsicEra;
  'Option<ExtrinsicEra>': Option<ExtrinsicEra>;
  'Vec<ExtrinsicEra>': Vec<ExtrinsicEra>;
  ExtrinsicPayload: ExtrinsicPayload;
  'Option<ExtrinsicPayload>': Option<ExtrinsicPayload>;
  'Vec<ExtrinsicPayload>': Vec<ExtrinsicPayload>;
  Hash: Hash;
  'Option<Hash>': Option<Hash>;
  'Vec<Hash>': Vec<Hash>;
  Header: Header;
  'Option<Header>': Option<Header>;
  'Vec<Header>': Vec<Header>;
  Index: Index;
  'Compact<Index>': Compact<Index>;
  'Option<Index>': Option<Index>;
  'Vec<Index>': Vec<Index>;
  Justification: Justification;
  'Option<Justification>': Option<Justification>;
  'Vec<Justification>': Vec<Justification>;
  KeyValue: KeyValue;
  'Option<KeyValue>': Option<KeyValue>;
  'Vec<KeyValue>': Vec<KeyValue>;
  KeyTypeId: KeyTypeId;
  'Compact<KeyTypeId>': Compact<KeyTypeId>;
  'Option<KeyTypeId>': Option<KeyTypeId>;
  'Vec<KeyTypeId>': Vec<KeyTypeId>;
  LockIdentifier: LockIdentifier;
  'Option<LockIdentifier>': Option<LockIdentifier>;
  'Vec<LockIdentifier>': Vec<LockIdentifier>;
  Moment: Moment;
  'Compact<Moment>': Compact<Moment>;
  'Option<Moment>': Option<Moment>;
  'Vec<Moment>': Vec<Moment>;
  Origin: Origin;
  'Option<Origin>': Option<Origin>;
  'Vec<Origin>': Vec<Origin>;
  Perbill: Perbill;
  'Compact<Perbill>': Compact<Perbill>;
  'Option<Perbill>': Option<Perbill>;
  'Vec<Perbill>': Vec<Perbill>;
  Permill: Permill;
  'Compact<Permill>': Compact<Permill>;
  'Option<Permill>': Option<Permill>;
  'Vec<Permill>': Vec<Permill>;
  Phantom: Phantom;
  'Option<Phantom>': Option<Phantom>;
  'Vec<Phantom>': Vec<Phantom>;
  PhantomData: PhantomData;
  'Option<PhantomData>': Option<PhantomData>;
  'Vec<PhantomData>': Vec<PhantomData>;
  Signature: Signature;
  'Option<Signature>': Option<Signature>;
  'Vec<Signature>': Vec<Signature>;
  SignedBlock: SignedBlock;
  'Option<SignedBlock>': Option<SignedBlock>;
  'Vec<SignedBlock>': Vec<SignedBlock>;
  ValidatorId: ValidatorId;
  'Option<ValidatorId>': Option<ValidatorId>;
  'Vec<ValidatorId>': Vec<ValidatorId>;
  Weight: Weight;
  'Compact<Weight>': Compact<Weight>;
  'Option<Weight>': Option<Weight>;
  'Vec<Weight>': Vec<Weight>;
  WeightMultiplier: WeightMultiplier;
  'Option<WeightMultiplier>': Option<WeightMultiplier>;
  'Vec<WeightMultiplier>': Vec<WeightMultiplier>;
  Ed25519Signature: Ed25519Signature;
  'Option<Ed25519Signature>': Option<Ed25519Signature>;
  'Vec<Ed25519Signature>': Vec<Ed25519Signature>;
  Sr25519Signature: Sr25519Signature;
  'Option<Sr25519Signature>': Option<Sr25519Signature>;
  'Vec<Sr25519Signature>': Vec<Sr25519Signature>;
  ImmortalEra: ImmortalEra;
  'Option<ImmortalEra>': Option<ImmortalEra>;
  'Vec<ImmortalEra>': Vec<ImmortalEra>;
  MortalEra: MortalEra;
  'Option<MortalEra>': Option<MortalEra>;
  'Vec<MortalEra>': Vec<MortalEra>;
  PreRuntime: PreRuntime;
  'Option<PreRuntime>': Option<PreRuntime>;
  'Vec<PreRuntime>': Vec<PreRuntime>;
  SealV0: SealV0;
  'Option<SealV0>': Option<SealV0>;
  'Vec<SealV0>': Vec<SealV0>;
  Seal: Seal;
  'Option<Seal>': Option<Seal>;
  'Vec<Seal>': Vec<Seal>;
  Consensus: Consensus;
  'Option<Consensus>': Option<Consensus>;
  'Vec<Consensus>': Vec<Consensus>;
  InclusionHeight: InclusionHeight;
  'Option<InclusionHeight>': Option<InclusionHeight>;
  'Vec<InclusionHeight>': Vec<InclusionHeight>;
  Uncle: Uncle;
  'Option<Uncle>': Option<Uncle>;
  'Vec<Uncle>': Vec<Uncle>;
  UncleEntryItem: UncleEntryItem;
  'Option<UncleEntryItem>': Option<UncleEntryItem>;
  'Vec<UncleEntryItem>': Vec<UncleEntryItem>;
  RawAuraPreDigest: RawAuraPreDigest;
  'Option<RawAuraPreDigest>': Option<RawAuraPreDigest>;
  'Vec<RawAuraPreDigest>': Vec<RawAuraPreDigest>;
  BabeAuthorityWeight: BabeAuthorityWeight;
  'Compact<BabeAuthorityWeight>': Compact<BabeAuthorityWeight>;
  'Option<BabeAuthorityWeight>': Option<BabeAuthorityWeight>;
  'Vec<BabeAuthorityWeight>': Vec<BabeAuthorityWeight>;
  BabeBlockWeight: BabeBlockWeight;
  'Compact<BabeBlockWeight>': Compact<BabeBlockWeight>;
  'Option<BabeBlockWeight>': Option<BabeBlockWeight>;
  'Vec<BabeBlockWeight>': Vec<BabeBlockWeight>;
  BabeWeight: BabeWeight;
  'Compact<BabeWeight>': Compact<BabeWeight>;
  'Option<BabeWeight>': Option<BabeWeight>;
  'Vec<BabeWeight>': Vec<BabeWeight>;
  RawBabePreDigest: RawBabePreDigest;
  'Option<RawBabePreDigest>': Option<RawBabePreDigest>;
  'Vec<RawBabePreDigest>': Vec<RawBabePreDigest>;
  RawBabePreDigestPrimary: RawBabePreDigestPrimary;
  'Option<RawBabePreDigestPrimary>': Option<RawBabePreDigestPrimary>;
  'Vec<RawBabePreDigestPrimary>': Vec<RawBabePreDigestPrimary>;
  RawBabePreDigestSecondary: RawBabePreDigestSecondary;
  'Option<RawBabePreDigestSecondary>': Option<RawBabePreDigestSecondary>;
  'Vec<RawBabePreDigestSecondary>': Vec<RawBabePreDigestSecondary>;
  SlotNumber: SlotNumber;
  'Compact<SlotNumber>': Compact<SlotNumber>;
  'Option<SlotNumber>': Option<SlotNumber>;
  'Vec<SlotNumber>': Vec<SlotNumber>;
  BalanceLock: BalanceLock;
  'Option<BalanceLock>': Option<BalanceLock>;
  'Vec<BalanceLock>': Vec<BalanceLock>;
  VestingSchedule: VestingSchedule;
  'Option<VestingSchedule>': Option<VestingSchedule>;
  'Vec<VestingSchedule>': Vec<VestingSchedule>;
  WithdrawReasons: WithdrawReasons;
  'Option<WithdrawReasons>': Option<WithdrawReasons>;
  'Vec<WithdrawReasons>': Vec<WithdrawReasons>;
  MemberCount: MemberCount;
  'Compact<MemberCount>': Compact<MemberCount>;
  'Option<MemberCount>': Option<MemberCount>;
  'Vec<MemberCount>': Vec<MemberCount>;
  ProposalIndex: ProposalIndex;
  'Compact<ProposalIndex>': Compact<ProposalIndex>;
  'Option<ProposalIndex>': Option<ProposalIndex>;
  'Vec<ProposalIndex>': Vec<ProposalIndex>;
  Votes: Votes;
  'Option<Votes>': Option<Votes>;
  'Vec<Votes>': Vec<Votes>;
  AuthorityId: AuthorityId;
  'Option<AuthorityId>': Option<AuthorityId>;
  'Vec<AuthorityId>': Vec<AuthorityId>;
  AliveContractInfo: AliveContractInfo;
  'Option<AliveContractInfo>': Option<AliveContractInfo>;
  'Vec<AliveContractInfo>': Vec<AliveContractInfo>;
  CodeHash: CodeHash;
  'Option<CodeHash>': Option<CodeHash>;
  'Vec<CodeHash>': Vec<CodeHash>;
  ContractInfo: ContractInfo;
  'Option<ContractInfo>': Option<ContractInfo>;
  'Vec<ContractInfo>': Vec<ContractInfo>;
  ContractStorageKey: ContractStorageKey;
  'Option<ContractStorageKey>': Option<ContractStorageKey>;
  'Vec<ContractStorageKey>': Vec<ContractStorageKey>;
  Gas: Gas;
  'Compact<Gas>': Compact<Gas>;
  'Option<Gas>': Option<Gas>;
  'Vec<Gas>': Vec<Gas>;
  PrefabWasmModule: PrefabWasmModule;
  'Option<PrefabWasmModule>': Option<PrefabWasmModule>;
  'Vec<PrefabWasmModule>': Vec<PrefabWasmModule>;
  PrefabWasmModuleReserved: PrefabWasmModuleReserved;
  'Option<PrefabWasmModuleReserved>': Option<PrefabWasmModuleReserved>;
  'Vec<PrefabWasmModuleReserved>': Vec<PrefabWasmModuleReserved>;
  Schedule: Schedule;
  'Option<Schedule>': Option<Schedule>;
  'Vec<Schedule>': Vec<Schedule>;
  SeedOf: SeedOf;
  'Option<SeedOf>': Option<SeedOf>;
  'Vec<SeedOf>': Vec<SeedOf>;
  TombstoneContractInfo: TombstoneContractInfo;
  'Option<TombstoneContractInfo>': Option<TombstoneContractInfo>;
  'Vec<TombstoneContractInfo>': Vec<TombstoneContractInfo>;
  TrieId: TrieId;
  'Option<TrieId>': Option<TrieId>;
  'Vec<TrieId>': Vec<TrieId>;
  Conviction: Conviction;
  'Option<Conviction>': Option<Conviction>;
  'Vec<Conviction>': Vec<Conviction>;
  PropIndex: PropIndex;
  'Compact<PropIndex>': Compact<PropIndex>;
  'Option<PropIndex>': Option<PropIndex>;
  'Vec<PropIndex>': Vec<PropIndex>;
  Proposal: Proposal;
  'Option<Proposal>': Option<Proposal>;
  'Vec<Proposal>': Vec<Proposal>;
  ReferendumIndex: ReferendumIndex;
  'Compact<ReferendumIndex>': Compact<ReferendumIndex>;
  'Option<ReferendumIndex>': Option<ReferendumIndex>;
  'Vec<ReferendumIndex>': Vec<ReferendumIndex>;
  ReferendumInfo: ReferendumInfo;
  'Option<ReferendumInfo>': Option<ReferendumInfo>;
  'Vec<ReferendumInfo>': Vec<ReferendumInfo>;
  NewAccountOutcome: NewAccountOutcome;
  'Option<NewAccountOutcome>': Option<NewAccountOutcome>;
  'Vec<NewAccountOutcome>': Vec<NewAccountOutcome>;
  Amount: Amount;
  'Option<Amount>': Option<Amount>;
  'Vec<Amount>': Vec<Amount>;
  AssetOf: AssetOf;
  'Compact<AssetOf>': Compact<AssetOf>;
  'Option<AssetOf>': Option<AssetOf>;
  'Vec<AssetOf>': Vec<AssetOf>;
  AccountInfo: AccountInfo;
  'Option<AccountInfo>': Option<AccountInfo>;
  'Vec<AccountInfo>': Vec<AccountInfo>;
  LockPeriods: LockPeriods;
  'Option<LockPeriods>': Option<LockPeriods>;
  'Vec<LockPeriods>': Vec<LockPeriods>;
  InherentOfflineReport: InherentOfflineReport;
  'Option<InherentOfflineReport>': Option<InherentOfflineReport>;
  'Vec<InherentOfflineReport>': Vec<InherentOfflineReport>;
  SessionKey: SessionKey;
  'Option<SessionKey>': Option<SessionKey>;
  'Vec<SessionKey>': Vec<SessionKey>;
  OpaqueKey: OpaqueKey;
  'Option<OpaqueKey>': Option<OpaqueKey>;
  'Vec<OpaqueKey>': Vec<OpaqueKey>;
  ApprovalFlag: ApprovalFlag;
  'Compact<ApprovalFlag>': Compact<ApprovalFlag>;
  'Option<ApprovalFlag>': Option<ApprovalFlag>;
  'Vec<ApprovalFlag>': Vec<ApprovalFlag>;
  SetIndex: SetIndex;
  'Compact<SetIndex>': Compact<SetIndex>;
  'Option<SetIndex>': Option<SetIndex>;
  'Vec<SetIndex>': Vec<SetIndex>;
  Vote: Vote;
  'Option<Vote>': Option<Vote>;
  'Vec<Vote>': Vec<Vote>;
  VoteIndex: VoteIndex;
  'Compact<VoteIndex>': Compact<VoteIndex>;
  'Option<VoteIndex>': Option<VoteIndex>;
  'Vec<VoteIndex>': Vec<VoteIndex>;
  VoterInfo: VoterInfo;
  'Option<VoterInfo>': Option<VoterInfo>;
  'Vec<VoterInfo>': Vec<VoterInfo>;
  VoteThreshold: VoteThreshold;
  'Option<VoteThreshold>': Option<VoteThreshold>;
  'Vec<VoteThreshold>': Vec<VoteThreshold>;
  AssetOptions: AssetOptions;
  'Option<AssetOptions>': Option<AssetOptions>;
  'Vec<AssetOptions>': Vec<AssetOptions>;
  Owner: Owner;
  'Option<Owner>': Option<Owner>;
  'Vec<Owner>': Vec<Owner>;
  PermissionsV1: PermissionsV1;
  'Option<PermissionsV1>': Option<PermissionsV1>;
  'Vec<PermissionsV1>': Vec<PermissionsV1>;
  PermissionVersions: PermissionVersions;
  'Option<PermissionVersions>': Option<PermissionVersions>;
  'Vec<PermissionVersions>': Vec<PermissionVersions>;
  PermissionLatest: PermissionLatest;
  'Option<PermissionLatest>': Option<PermissionLatest>;
  'Vec<PermissionLatest>': Vec<PermissionLatest>;
  AuthorityWeight: AuthorityWeight;
  'Compact<AuthorityWeight>': Compact<AuthorityWeight>;
  'Option<AuthorityWeight>': Option<AuthorityWeight>;
  'Vec<AuthorityWeight>': Vec<AuthorityWeight>;
  NextAuthority: NextAuthority;
  'Option<NextAuthority>': Option<NextAuthority>;
  'Vec<NextAuthority>': Vec<NextAuthority>;
  PendingPause: PendingPause;
  'Option<PendingPause>': Option<PendingPause>;
  'Vec<PendingPause>': Vec<PendingPause>;
  PendingResume: PendingResume;
  'Option<PendingResume>': Option<PendingResume>;
  'Vec<PendingResume>': Vec<PendingResume>;
  StoredPendingChange: StoredPendingChange;
  'Option<StoredPendingChange>': Option<StoredPendingChange>;
  'Vec<StoredPendingChange>': Vec<StoredPendingChange>;
  StoredState: StoredState;
  'Option<StoredState>': Option<StoredState>;
  'Vec<StoredState>': Vec<StoredState>;
  AuthIndex: AuthIndex;
  'Compact<AuthIndex>': Compact<AuthIndex>;
  'Option<AuthIndex>': Option<AuthIndex>;
  'Vec<AuthIndex>': Vec<AuthIndex>;
  AuthoritySignature: AuthoritySignature;
  'Option<AuthoritySignature>': Option<AuthoritySignature>;
  'Vec<AuthoritySignature>': Vec<AuthoritySignature>;
  Heartbeat: Heartbeat;
  'Option<Heartbeat>': Option<Heartbeat>;
  'Vec<Heartbeat>': Vec<Heartbeat>;
  OpaqueMultiaddr: OpaqueMultiaddr;
  'Option<OpaqueMultiaddr>': Option<OpaqueMultiaddr>;
  'Vec<OpaqueMultiaddr>': Vec<OpaqueMultiaddr>;
  OpaquePeerId: OpaquePeerId;
  'Option<OpaquePeerId>': Option<OpaquePeerId>;
  'Vec<OpaquePeerId>': Vec<OpaquePeerId>;
  OpaqueNetworkState: OpaqueNetworkState;
  'Option<OpaqueNetworkState>': Option<OpaqueNetworkState>;
  'Vec<OpaqueNetworkState>': Vec<OpaqueNetworkState>;
  Kind: Kind;
  'Option<Kind>': Option<Kind>;
  'Vec<Kind>': Vec<Kind>;
  OffenceDetails: OffenceDetails;
  'Option<OffenceDetails>': Option<OffenceDetails>;
  'Vec<OffenceDetails>': Vec<OffenceDetails>;
  Offender: Offender;
  'Option<Offender>': Option<Offender>;
  'Vec<Offender>': Vec<Offender>;
  OpaqueTimeSlot: OpaqueTimeSlot;
  'Option<OpaqueTimeSlot>': Option<OpaqueTimeSlot>;
  'Vec<OpaqueTimeSlot>': Vec<OpaqueTimeSlot>;
  ReportIdOf: ReportIdOf;
  'Option<ReportIdOf>': Option<ReportIdOf>;
  'Vec<ReportIdOf>': Vec<ReportIdOf>;
  Reporter: Reporter;
  'Option<Reporter>': Option<Reporter>;
  'Vec<Reporter>': Vec<Reporter>;
  FullIdentification: FullIdentification;
  'Option<FullIdentification>': Option<FullIdentification>;
  'Vec<FullIdentification>': Vec<FullIdentification>;
  IdentificationTuple: IdentificationTuple;
  'Option<IdentificationTuple>': Option<IdentificationTuple>;
  'Vec<IdentificationTuple>': Vec<IdentificationTuple>;
  SessionIndex: SessionIndex;
  'Compact<SessionIndex>': Compact<SessionIndex>;
  'Option<SessionIndex>': Option<SessionIndex>;
  'Vec<SessionIndex>': Vec<SessionIndex>;
  Keys: Keys;
  'Option<Keys>': Option<Keys>;
  'Vec<Keys>': Vec<Keys>;
  SessionKeysSubstrate: SessionKeysSubstrate;
  'Option<SessionKeysSubstrate>': Option<SessionKeysSubstrate>;
  'Vec<SessionKeysSubstrate>': Vec<SessionKeysSubstrate>;
  SessionKeysPolkadot: SessionKeysPolkadot;
  'Option<SessionKeysPolkadot>': Option<SessionKeysPolkadot>;
  'Vec<SessionKeysPolkadot>': Vec<SessionKeysPolkadot>;
  EraIndex: EraIndex;
  'Compact<EraIndex>': Compact<EraIndex>;
  'Option<EraIndex>': Option<EraIndex>;
  'Vec<EraIndex>': Vec<EraIndex>;
  EraRewards: EraRewards;
  'Option<EraRewards>': Option<EraRewards>;
  'Vec<EraRewards>': Vec<EraRewards>;
  Exposure: Exposure;
  'Option<Exposure>': Option<Exposure>;
  'Vec<Exposure>': Vec<Exposure>;
  Forcing: Forcing;
  'Option<Forcing>': Option<Forcing>;
  'Vec<Forcing>': Vec<Forcing>;
  IndividualExposure: IndividualExposure;
  'Option<IndividualExposure>': Option<IndividualExposure>;
  'Vec<IndividualExposure>': Vec<IndividualExposure>;
  MomentOf: MomentOf;
  'Option<MomentOf>': Option<MomentOf>;
  'Vec<MomentOf>': Vec<MomentOf>;
  RewardDestination: RewardDestination;
  'Option<RewardDestination>': Option<RewardDestination>;
  'Vec<RewardDestination>': Vec<RewardDestination>;
  SlashJournalEntry: SlashJournalEntry;
  'Option<SlashJournalEntry>': Option<SlashJournalEntry>;
  'Vec<SlashJournalEntry>': Vec<SlashJournalEntry>;
  StakingLedger: StakingLedger;
  'Option<StakingLedger>': Option<StakingLedger>;
  'Vec<StakingLedger>': Vec<StakingLedger>;
  UnlockChunk: UnlockChunk;
  'Option<UnlockChunk>': Option<UnlockChunk>;
  'Vec<UnlockChunk>': Vec<UnlockChunk>;
  ValidatorPrefs: ValidatorPrefs;
  'Option<ValidatorPrefs>': Option<ValidatorPrefs>;
  'Vec<ValidatorPrefs>': Vec<ValidatorPrefs>;
  DigestOf: DigestOf;
  'Option<DigestOf>': Option<DigestOf>;
  'Vec<DigestOf>': Vec<DigestOf>;
  Event: Event;
  'Option<Event>': Option<Event>;
  'Vec<Event>': Vec<Event>;
  EventId: EventId;
  'Option<EventId>': Option<EventId>;
  'Vec<EventId>': Vec<EventId>;
  EventIndex: EventIndex;
  'Compact<EventIndex>': Compact<EventIndex>;
  'Option<EventIndex>': Option<EventIndex>;
  'Vec<EventIndex>': Vec<EventIndex>;
  EventRecord: EventRecord;
  'Option<EventRecord>': Option<EventRecord>;
  'Vec<EventRecord>': Vec<EventRecord>;
  EventRecord0to76: EventRecord0to76;
  'Option<EventRecord0to76>': Option<EventRecord0to76>;
  'Vec<EventRecord0to76>': Vec<EventRecord0to76>;
  Key: Key;
  'Option<Key>': Option<Key>;
  'Vec<Key>': Vec<Key>;
  Phase: Phase;
  'Option<Phase>': Option<Phase>;
  'Vec<Phase>': Vec<Phase>;
  TreasuryProposal: TreasuryProposal;
  'Option<TreasuryProposal>': Option<TreasuryProposal>;
  'Vec<TreasuryProposal>': Vec<TreasuryProposal>;
  BlockAttestations: BlockAttestations;
  'Option<BlockAttestations>': Option<BlockAttestations>;
  'Vec<BlockAttestations>': Vec<BlockAttestations>;
  IncludedBlocks: IncludedBlocks;
  'Option<IncludedBlocks>': Option<IncludedBlocks>;
  'Vec<IncludedBlocks>': Vec<IncludedBlocks>;
  MoreAttestations: MoreAttestations;
  'Option<MoreAttestations>': Option<MoreAttestations>;
  'Vec<MoreAttestations>': Vec<MoreAttestations>;
  EcdsaSignature: EcdsaSignature;
  'Option<EcdsaSignature>': Option<EcdsaSignature>;
  'Vec<EcdsaSignature>': Vec<EcdsaSignature>;
  EthereumAddress: EthereumAddress;
  'Option<EthereumAddress>': Option<EthereumAddress>;
  'Vec<EthereumAddress>': Vec<EthereumAddress>;
  AttestedCandidate: AttestedCandidate;
  'Option<AttestedCandidate>': Option<AttestedCandidate>;
  'Vec<AttestedCandidate>': Vec<AttestedCandidate>;
  AuctionIndex: AuctionIndex;
  'Compact<AuctionIndex>': Compact<AuctionIndex>;
  'Option<AuctionIndex>': Option<AuctionIndex>;
  'Vec<AuctionIndex>': Vec<AuctionIndex>;
  BalanceUpload: BalanceUpload;
  'Option<BalanceUpload>': Option<BalanceUpload>;
  'Vec<BalanceUpload>': Vec<BalanceUpload>;
  Bidder: Bidder;
  'Option<Bidder>': Option<Bidder>;
  'Vec<Bidder>': Vec<Bidder>;
  CandidateReceipt: CandidateReceipt;
  'Option<CandidateReceipt>': Option<CandidateReceipt>;
  'Vec<CandidateReceipt>': Vec<CandidateReceipt>;
  CollatorSignature: CollatorSignature;
  'Option<CollatorSignature>': Option<CollatorSignature>;
  'Vec<CollatorSignature>': Vec<CollatorSignature>;
  EgressQueueRoot: EgressQueueRoot;
  'Option<EgressQueueRoot>': Option<EgressQueueRoot>;
  'Vec<EgressQueueRoot>': Vec<EgressQueueRoot>;
  HeadData: HeadData;
  'Option<HeadData>': Option<HeadData>;
  'Vec<HeadData>': Vec<HeadData>;
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
  NewBidder: NewBidder;
  'Option<NewBidder>': Option<NewBidder>;
  'Vec<NewBidder>': Vec<NewBidder>;
  ParaId: ParaId;
  'Compact<ParaId>': Compact<ParaId>;
  'Option<ParaId>': Option<ParaId>;
  'Vec<ParaId>': Vec<ParaId>;
  ParaIdOf: ParaIdOf;
  'Option<ParaIdOf>': Option<ParaIdOf>;
  'Vec<ParaIdOf>': Vec<ParaIdOf>;
  ParachainDispatchOrigin: ParachainDispatchOrigin;
  'Option<ParachainDispatchOrigin>': Option<ParachainDispatchOrigin>;
  'Vec<ParachainDispatchOrigin>': Vec<ParachainDispatchOrigin>;
  SlotRange: SlotRange;
  'Option<SlotRange>': Option<SlotRange>;
  'Vec<SlotRange>': Vec<SlotRange>;
  SubId: SubId;
  'Compact<SubId>': Compact<SubId>;
  'Option<SubId>': Option<SubId>;
  'Vec<SubId>': Vec<SubId>;
  UpwardMessage: UpwardMessage;
  'Option<UpwardMessage>': Option<UpwardMessage>;
  'Vec<UpwardMessage>': Vec<UpwardMessage>;
  ValidityAttestation: ValidityAttestation;
  'Option<ValidityAttestation>': Option<ValidityAttestation>;
  'Vec<ValidityAttestation>': Vec<ValidityAttestation>;
  ValidatorIndex: ValidatorIndex;
  'Compact<ValidatorIndex>': Compact<ValidatorIndex>;
  'Option<ValidatorIndex>': Option<ValidatorIndex>;
  'Vec<ValidatorIndex>': Vec<ValidatorIndex>;
  ValidityVote: ValidityVote;
  'Option<ValidityVote>': Option<ValidityVote>;
  'Vec<ValidityVote>': Vec<ValidityVote>;
  WinningDataEntry: WinningDataEntry;
  'Option<WinningDataEntry>': Option<WinningDataEntry>;
  'Vec<WinningDataEntry>': Vec<WinningDataEntry>;
  WinningData: WinningData;
  'Option<WinningData>': Option<WinningData>;
  'Vec<WinningData>': Vec<WinningData>;
  CallMetadataV0: CallMetadataV0;
  'Option<CallMetadataV0>': Option<CallMetadataV0>;
  'Vec<CallMetadataV0>': Vec<CallMetadataV0>;
  EventMetadataV0: EventMetadataV0;
  'Option<EventMetadataV0>': Option<EventMetadataV0>;
  'Vec<EventMetadataV0>': Vec<EventMetadataV0>;
  FunctionArgumentMetadataV0: FunctionArgumentMetadataV0;
  'Option<FunctionArgumentMetadataV0>': Option<FunctionArgumentMetadataV0>;
  'Vec<FunctionArgumentMetadataV0>': Vec<FunctionArgumentMetadataV0>;
  FunctionMetadataV0: FunctionMetadataV0;
  'Option<FunctionMetadataV0>': Option<FunctionMetadataV0>;
  'Vec<FunctionMetadataV0>': Vec<FunctionMetadataV0>;
  MapTypeV0: MapTypeV0;
  'Option<MapTypeV0>': Option<MapTypeV0>;
  'Vec<MapTypeV0>': Vec<MapTypeV0>;
  ModuleMetadataV0: ModuleMetadataV0;
  'Option<ModuleMetadataV0>': Option<ModuleMetadataV0>;
  'Vec<ModuleMetadataV0>': Vec<ModuleMetadataV0>;
  OuterDispatchCallV0: OuterDispatchCallV0;
  'Option<OuterDispatchCallV0>': Option<OuterDispatchCallV0>;
  'Vec<OuterDispatchCallV0>': Vec<OuterDispatchCallV0>;
  OuterDispatchMetadataV0: OuterDispatchMetadataV0;
  'Option<OuterDispatchMetadataV0>': Option<OuterDispatchMetadataV0>;
  'Vec<OuterDispatchMetadataV0>': Vec<OuterDispatchMetadataV0>;
  PlainTypeV0: PlainTypeV0;
  'Option<PlainTypeV0>': Option<PlainTypeV0>;
  'Vec<PlainTypeV0>': Vec<PlainTypeV0>;
  RuntimeModuleMetadataV0: RuntimeModuleMetadataV0;
  'Option<RuntimeModuleMetadataV0>': Option<RuntimeModuleMetadataV0>;
  'Vec<RuntimeModuleMetadataV0>': Vec<RuntimeModuleMetadataV0>;
  StorageFunctionMetadataV0: StorageFunctionMetadataV0;
  'Option<StorageFunctionMetadataV0>': Option<StorageFunctionMetadataV0>;
  'Vec<StorageFunctionMetadataV0>': Vec<StorageFunctionMetadataV0>;
  StorageFunctionModifierV0: StorageFunctionModifierV0;
  'Option<StorageFunctionModifierV0>': Option<StorageFunctionModifierV0>;
  'Vec<StorageFunctionModifierV0>': Vec<StorageFunctionModifierV0>;
  StorageFunctionTypeV0: StorageFunctionTypeV0;
  'Option<StorageFunctionTypeV0>': Option<StorageFunctionTypeV0>;
  'Vec<StorageFunctionTypeV0>': Vec<StorageFunctionTypeV0>;
  StorageMetadataV0: StorageMetadataV0;
  'Option<StorageMetadataV0>': Option<StorageMetadataV0>;
  'Vec<StorageMetadataV0>': Vec<StorageMetadataV0>;
  EventMetadataV1: EventMetadataV1;
  'Option<EventMetadataV1>': Option<EventMetadataV1>;
  'Vec<EventMetadataV1>': Vec<EventMetadataV1>;
  FunctionArgumentMetadataV1: FunctionArgumentMetadataV1;
  'Option<FunctionArgumentMetadataV1>': Option<FunctionArgumentMetadataV1>;
  'Vec<FunctionArgumentMetadataV1>': Vec<FunctionArgumentMetadataV1>;
  FunctionMetadataV1: FunctionMetadataV1;
  'Option<FunctionMetadataV1>': Option<FunctionMetadataV1>;
  'Vec<FunctionMetadataV1>': Vec<FunctionMetadataV1>;
  ModuleMetadataV1: ModuleMetadataV1;
  'Option<ModuleMetadataV1>': Option<ModuleMetadataV1>;
  'Vec<ModuleMetadataV1>': Vec<ModuleMetadataV1>;
  PlainTypeV1: PlainTypeV1;
  'Option<PlainTypeV1>': Option<PlainTypeV1>;
  'Vec<PlainTypeV1>': Vec<PlainTypeV1>;
  StorageFunctionMetadataV1: StorageFunctionMetadataV1;
  'Option<StorageFunctionMetadataV1>': Option<StorageFunctionMetadataV1>;
  'Vec<StorageFunctionMetadataV1>': Vec<StorageFunctionMetadataV1>;
  StorageFunctionModifierV1: StorageFunctionModifierV1;
  'Option<StorageFunctionModifierV1>': Option<StorageFunctionModifierV1>;
  'Vec<StorageFunctionModifierV1>': Vec<StorageFunctionModifierV1>;
  StorageFunctionTypeV1: StorageFunctionTypeV1;
  'Option<StorageFunctionTypeV1>': Option<StorageFunctionTypeV1>;
  'Vec<StorageFunctionTypeV1>': Vec<StorageFunctionTypeV1>;
  EventMetadataV2: EventMetadataV2;
  'Option<EventMetadataV2>': Option<EventMetadataV2>;
  'Vec<EventMetadataV2>': Vec<EventMetadataV2>;
  FunctionArgumentMetadataV2: FunctionArgumentMetadataV2;
  'Option<FunctionArgumentMetadataV2>': Option<FunctionArgumentMetadataV2>;
  'Vec<FunctionArgumentMetadataV2>': Vec<FunctionArgumentMetadataV2>;
  FunctionMetadataV2: FunctionMetadataV2;
  'Option<FunctionMetadataV2>': Option<FunctionMetadataV2>;
  'Vec<FunctionMetadataV2>': Vec<FunctionMetadataV2>;
  PlainTypeV2: PlainTypeV2;
  'Option<PlainTypeV2>': Option<PlainTypeV2>;
  'Vec<PlainTypeV2>': Vec<PlainTypeV2>;
  StorageFunctionModifierV2: StorageFunctionModifierV2;
  'Option<StorageFunctionModifierV2>': Option<StorageFunctionModifierV2>;
  'Vec<StorageFunctionModifierV2>': Vec<StorageFunctionModifierV2>;
  DoubleMapTypeV3: DoubleMapTypeV3;
  'Option<DoubleMapTypeV3>': Option<DoubleMapTypeV3>;
  'Vec<DoubleMapTypeV3>': Vec<DoubleMapTypeV3>;
  EventMetadataV3: EventMetadataV3;
  'Option<EventMetadataV3>': Option<EventMetadataV3>;
  'Vec<EventMetadataV3>': Vec<EventMetadataV3>;
  FunctionArgumentMetadataV3: FunctionArgumentMetadataV3;
  'Option<FunctionArgumentMetadataV3>': Option<FunctionArgumentMetadataV3>;
  'Vec<FunctionArgumentMetadataV3>': Vec<FunctionArgumentMetadataV3>;
  FunctionMetadataV3: FunctionMetadataV3;
  'Option<FunctionMetadataV3>': Option<FunctionMetadataV3>;
  'Vec<FunctionMetadataV3>': Vec<FunctionMetadataV3>;
  PlainTypeV3: PlainTypeV3;
  'Option<PlainTypeV3>': Option<PlainTypeV3>;
  'Vec<PlainTypeV3>': Vec<PlainTypeV3>;
  StorageFunctionModifierV3: StorageFunctionModifierV3;
  'Option<StorageFunctionModifierV3>': Option<StorageFunctionModifierV3>;
  'Vec<StorageFunctionModifierV3>': Vec<StorageFunctionModifierV3>;
  DoubleMapTypeV4: DoubleMapTypeV4;
  'Option<DoubleMapTypeV4>': Option<DoubleMapTypeV4>;
  'Vec<DoubleMapTypeV4>': Vec<DoubleMapTypeV4>;
  EventMetadataV4: EventMetadataV4;
  'Option<EventMetadataV4>': Option<EventMetadataV4>;
  'Vec<EventMetadataV4>': Vec<EventMetadataV4>;
  FunctionArgumentMetadataV4: FunctionArgumentMetadataV4;
  'Option<FunctionArgumentMetadataV4>': Option<FunctionArgumentMetadataV4>;
  'Vec<FunctionArgumentMetadataV4>': Vec<FunctionArgumentMetadataV4>;
  FunctionMetadataV4: FunctionMetadataV4;
  'Option<FunctionMetadataV4>': Option<FunctionMetadataV4>;
  'Vec<FunctionMetadataV4>': Vec<FunctionMetadataV4>;
  PlainTypeV4: PlainTypeV4;
  'Option<PlainTypeV4>': Option<PlainTypeV4>;
  'Vec<PlainTypeV4>': Vec<PlainTypeV4>;
  StorageFunctionModifierV4: StorageFunctionModifierV4;
  'Option<StorageFunctionModifierV4>': Option<StorageFunctionModifierV4>;
  'Vec<StorageFunctionModifierV4>': Vec<StorageFunctionModifierV4>;
  DoubleMapTypeV5: DoubleMapTypeV5;
  'Option<DoubleMapTypeV5>': Option<DoubleMapTypeV5>;
  'Vec<DoubleMapTypeV5>': Vec<DoubleMapTypeV5>;
  EventMetadataV5: EventMetadataV5;
  'Option<EventMetadataV5>': Option<EventMetadataV5>;
  'Vec<EventMetadataV5>': Vec<EventMetadataV5>;
  FunctionArgumentMetadataV5: FunctionArgumentMetadataV5;
  'Option<FunctionArgumentMetadataV5>': Option<FunctionArgumentMetadataV5>;
  'Vec<FunctionArgumentMetadataV5>': Vec<FunctionArgumentMetadataV5>;
  FunctionMetadataV5: FunctionMetadataV5;
  'Option<FunctionMetadataV5>': Option<FunctionMetadataV5>;
  'Vec<FunctionMetadataV5>': Vec<FunctionMetadataV5>;
  PlainTypeV5: PlainTypeV5;
  'Option<PlainTypeV5>': Option<PlainTypeV5>;
  'Vec<PlainTypeV5>': Vec<PlainTypeV5>;
  StorageFunctionModifierV5: StorageFunctionModifierV5;
  'Option<StorageFunctionModifierV5>': Option<StorageFunctionModifierV5>;
  'Vec<StorageFunctionModifierV5>': Vec<StorageFunctionModifierV5>;
  DoubleMapTypeV6: DoubleMapTypeV6;
  'Option<DoubleMapTypeV6>': Option<DoubleMapTypeV6>;
  'Vec<DoubleMapTypeV6>': Vec<DoubleMapTypeV6>;
  EventMetadataV6: EventMetadataV6;
  'Option<EventMetadataV6>': Option<EventMetadataV6>;
  'Vec<EventMetadataV6>': Vec<EventMetadataV6>;
  FunctionArgumentMetadataV6: FunctionArgumentMetadataV6;
  'Option<FunctionArgumentMetadataV6>': Option<FunctionArgumentMetadataV6>;
  'Vec<FunctionArgumentMetadataV6>': Vec<FunctionArgumentMetadataV6>;
  FunctionMetadataV6: FunctionMetadataV6;
  'Option<FunctionMetadataV6>': Option<FunctionMetadataV6>;
  'Vec<FunctionMetadataV6>': Vec<FunctionMetadataV6>;
  ModuleConstantMetadataV6: ModuleConstantMetadataV6;
  'Option<ModuleConstantMetadataV6>': Option<ModuleConstantMetadataV6>;
  'Vec<ModuleConstantMetadataV6>': Vec<ModuleConstantMetadataV6>;
  PlainTypeV6: PlainTypeV6;
  'Option<PlainTypeV6>': Option<PlainTypeV6>;
  'Vec<PlainTypeV6>': Vec<PlainTypeV6>;
  StorageEntryModifierV6: StorageEntryModifierV6;
  'Option<StorageEntryModifierV6>': Option<StorageEntryModifierV6>;
  'Vec<StorageEntryModifierV6>': Vec<StorageEntryModifierV6>;
  DoubleMapTypeV7: DoubleMapTypeV7;
  'Option<DoubleMapTypeV7>': Option<DoubleMapTypeV7>;
  'Vec<DoubleMapTypeV7>': Vec<DoubleMapTypeV7>;
  EventMetadataV7: EventMetadataV7;
  'Option<EventMetadataV7>': Option<EventMetadataV7>;
  'Vec<EventMetadataV7>': Vec<EventMetadataV7>;
  FunctionArgumentMetadataV7: FunctionArgumentMetadataV7;
  'Option<FunctionArgumentMetadataV7>': Option<FunctionArgumentMetadataV7>;
  'Vec<FunctionArgumentMetadataV7>': Vec<FunctionArgumentMetadataV7>;
  FunctionMetadataV7: FunctionMetadataV7;
  'Option<FunctionMetadataV7>': Option<FunctionMetadataV7>;
  'Vec<FunctionMetadataV7>': Vec<FunctionMetadataV7>;
  ModuleConstantMetadataV7: ModuleConstantMetadataV7;
  'Option<ModuleConstantMetadataV7>': Option<ModuleConstantMetadataV7>;
  'Vec<ModuleConstantMetadataV7>': Vec<ModuleConstantMetadataV7>;
  PlainTypeV7: PlainTypeV7;
  'Option<PlainTypeV7>': Option<PlainTypeV7>;
  'Vec<PlainTypeV7>': Vec<PlainTypeV7>;
  StorageEntryModifierV7: StorageEntryModifierV7;
  'Option<StorageEntryModifierV7>': Option<StorageEntryModifierV7>;
  'Vec<StorageEntryModifierV7>': Vec<StorageEntryModifierV7>;
  ApiId: ApiId;
  'Option<ApiId>': Option<ApiId>;
  'Vec<ApiId>': Vec<ApiId>;
  ChainProperties: ChainProperties;
  'Option<ChainProperties>': Option<ChainProperties>;
  'Vec<ChainProperties>': Vec<ChainProperties>;
  ExtrinsicOrHash: ExtrinsicOrHash;
  'Option<ExtrinsicOrHash>': Option<ExtrinsicOrHash>;
  'Vec<ExtrinsicOrHash>': Vec<ExtrinsicOrHash>;
  ExtrinsicStatus: ExtrinsicStatus;
  'Option<ExtrinsicStatus>': Option<ExtrinsicStatus>;
  'Vec<ExtrinsicStatus>': Vec<ExtrinsicStatus>;
  Health: Health;
  'Option<Health>': Option<Health>;
  'Vec<Health>': Vec<Health>;
  KeyValueOption: KeyValueOption;
  'Option<KeyValueOption>': Option<KeyValueOption>;
  'Vec<KeyValueOption>': Vec<KeyValueOption>;
  NetworkState: NetworkState;
  'Option<NetworkState>': Option<NetworkState>;
  'Vec<NetworkState>': Vec<NetworkState>;
  PeerInfo: PeerInfo;
  'Option<PeerInfo>': Option<PeerInfo>;
  'Vec<PeerInfo>': Vec<PeerInfo>;
  RuntimeVersionApi: RuntimeVersionApi;
  'Option<RuntimeVersionApi>': Option<RuntimeVersionApi>;
  'Vec<RuntimeVersionApi>': Vec<RuntimeVersionApi>;
  RuntimeVersion: RuntimeVersion;
  'Option<RuntimeVersion>': Option<RuntimeVersion>;
  'Vec<RuntimeVersion>': Vec<RuntimeVersion>;
  StorageChangeSet: StorageChangeSet;
  'Option<StorageChangeSet>': Option<StorageChangeSet>;
  'Vec<StorageChangeSet>': Vec<StorageChangeSet>;
}
