// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { Enum, Option, Struct, Vec } from '../../codec';
import { Block, Bytes, ConsensusEngineId, StorageKey, Text, bool, u32, u64, u8 } from '../../primitive';
import { BlockNumber, Hash, Justification, Signature, StorageData } from '../runtime/types';

/** Vec<u8> */
export type ApiId = Vec<u8>;

/** Struct */
export interface ChainProperties extends Struct {
  /** u32 */
  readonly tokenDecimals: u32;
  /** Text */
  readonly tokenSymbol: Text;
}

/** [ConsensusEngineId, Bytes] & Codec */
export type Consensus = [ConsensusEngineId, Bytes] & Codec;

/** Enum */
export interface ExtrinsicStatus extends Enum {
  /** 0:: Future */
  readonly isFuture: boolean;
  /** 1:: Ready */
  readonly isReady: boolean;
  /** 2:: Finalized(Hash) */
  readonly isFinalized: boolean;
  /** Hash */
  readonly asFinalized: Hash;
  /** 3:: Usurped(Hash) */
  readonly isUsurped: boolean;
  /** Hash */
  readonly asUsurped: Hash;
  /** 4:: Broadcast(Vec<Text>) */
  readonly isBroadcast: boolean;
  /** Vec<Text> */
  readonly asBroadcast: Vec<Text>;
  /** 5:: Dropped */
  readonly isDropped: boolean;
  /** 6:: Invalid */
  readonly isInvalid: boolean;
}

/** Struct */
export interface Health extends Struct {
  /** u64 */
  readonly peers: u64;
  /** bool */
  readonly isSyncing: bool;
  /** bool */
  readonly shouldHavePeers: bool;
}

/** [StorageKey, Option<StorageData>] & Codec */
export type KeyValueOption = [StorageKey, Option<StorageData>] & Codec;

/** Struct */
export interface NetworkState extends Struct {
  /** Text */
  readonly peerId: Text;
}

/** Struct */
export interface PeerInfo extends Struct {
  /** Text */
  readonly peerId: Text;
  /** Text */
  readonly roles: Text;
  /** u32 */
  readonly protocolVersion: u32;
  /** Hash */
  readonly bestHash: Hash;
  /** BlockNumber */
  readonly bestNumber: BlockNumber;
}

/** [ConsensusEngineId, Bytes] & Codec */
export type PreRuntime = [ConsensusEngineId, Bytes] & Codec;

/** Struct */
export interface RuntimeVersion extends Struct {
  /** Text */
  readonly specName: Text;
  /** Text */
  readonly implName: Text;
  /** u32 */
  readonly authoringVersion: u32;
  /** u32 */
  readonly specVersion: u32;
  /** u32 */
  readonly implVersion: u32;
  /** Vec<RuntimeVersionApi> */
  readonly apis: Vec<RuntimeVersionApi>;
}

/** [ApiId, u32] & Codec */
export type RuntimeVersionApi = [ApiId, u32] & Codec;

/** [ConsensusEngineId, Bytes] & Codec */
export type Seal = [ConsensusEngineId, Bytes] & Codec;

/** [u64, Signature] & Codec */
export type SealV0 = [u64, Signature] & Codec;

/** Struct */
export interface SignedBlock extends Struct {
  /** Block */
  readonly block: Block;
  /** Justification */
  readonly justification: Justification;
}

/** Struct */
export interface StorageChangeSet extends Struct {
  /** Hash */
  readonly block: Hash;
  /** Vec<KeyValueOption> */
  readonly changes: Vec<KeyValueOption>;
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    ApiId: ApiId;
    'Option<ApiId>': Option<ApiId>;
    'Vec<ApiId>': Vec<ApiId>;
    ChainProperties: ChainProperties;
    'Option<ChainProperties>': Option<ChainProperties>;
    'Vec<ChainProperties>': Vec<ChainProperties>;
    Consensus: Consensus;
    'Option<Consensus>': Option<Consensus>;
    'Vec<Consensus>': Vec<Consensus>;
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
    PreRuntime: PreRuntime;
    'Option<PreRuntime>': Option<PreRuntime>;
    'Vec<PreRuntime>': Vec<PreRuntime>;
    RuntimeVersionApi: RuntimeVersionApi;
    'Option<RuntimeVersionApi>': Option<RuntimeVersionApi>;
    'Vec<RuntimeVersionApi>': Vec<RuntimeVersionApi>;
    RuntimeVersion: RuntimeVersion;
    'Option<RuntimeVersion>': Option<RuntimeVersion>;
    'Vec<RuntimeVersion>': Vec<RuntimeVersion>;
    SealV0: SealV0;
    'Option<SealV0>': Option<SealV0>;
    'Vec<SealV0>': Vec<SealV0>;
    Seal: Seal;
    'Option<Seal>': Option<Seal>;
    'Vec<Seal>': Vec<Seal>;
    SignedBlock: SignedBlock;
    'Option<SignedBlock>': Option<SignedBlock>;
    'Vec<SignedBlock>': Vec<SignedBlock>;
    StorageChangeSet: StorageChangeSet;
    'Option<StorageChangeSet>': Option<StorageChangeSet>;
    'Vec<StorageChangeSet>': Vec<StorageChangeSet>;
  }
}
