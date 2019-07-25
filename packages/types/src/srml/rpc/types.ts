/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { Enum, Option, Struct, Vec } from '../../codec';
import { Block, Bytes, ConsensusEngineId, StorageData, StorageKey, Text, bool, u32, u64, u8 } from '../../primitive';
import { BlockNumber, Hash, Justification, Signature } from '../runtime/types';

export interface ApiId extends Vec<u8> {}

export interface ChainProperties extends Struct {
  readonly tokenDecimals: u32;
  readonly tokenSymbol: Text;
}

type _Consensus = [ConsensusEngineId, Bytes];
export interface Consensus extends Codec, _Consensus {}

export interface ExtrinsicStatus extends Enum {
  /**
   * @description 0:: Future
   */
  readonly isFuture: boolean;
  /**
   * @description 1:: Ready
   */
  readonly isReady: boolean;
  /**
   * @description 2:: Finalized(Hash)
   */
  readonly isFinalized: boolean;
  readonly asFinalized: Hash;
  /**
   * @description 3:: Usurped(Hash)
   */
  readonly isUsurped: boolean;
  readonly asUsurped: Hash;
  /**
   * @description 4:: Broadcast(Vec<Text>)
   */
  readonly isBroadcast: boolean;
  readonly asBroadcast: Vec<Text>;
  /**
   * @description 5:: Dropped
   */
  readonly isDropped: boolean;
  /**
   * @description 6:: Invalid
   */
  readonly isInvalid: boolean;
}

export interface Health extends Struct {
  readonly peers: u64;
  readonly isSyncing: bool;
  readonly shouldHavePeers: bool;
}

type _KeyValueOption = [StorageKey, Option<StorageData>];
export interface KeyValueOption extends Codec, _KeyValueOption {}

export interface NetworkState extends Struct {}

export interface PeerInfo extends Struct {
  readonly peerId: Text;
  readonly roles: Text;
  readonly protocolVersion: u32;
  readonly bestHash: Hash;
  readonly bestNumber: BlockNumber;
}

type _PreRuntime = [ConsensusEngineId, Bytes];
export interface PreRuntime extends Codec, _PreRuntime {}

export interface RuntimeVersion extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<RuntimeVersionApi>;
}

type _RuntimeVersionApi = [ApiId, u32];
export interface RuntimeVersionApi extends Codec, _RuntimeVersionApi {}

type _Seal = [ConsensusEngineId, Bytes];
export interface Seal extends Codec, _Seal {}

type _SealV0 = [u64, Signature];
export interface SealV0 extends Codec, _SealV0 {}

export interface SignedBlock extends Struct {
  readonly block: Block;
  readonly justification: Justification;
}

export interface StorageChangeSet extends Struct {
  readonly block: Hash;
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
