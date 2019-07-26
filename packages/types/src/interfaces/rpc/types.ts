// Auto-generated via `yarn build:interfaces`, do not edit

import { Codec } from '../../types';
import { Enum, Option, Struct, Vec } from '../../codec';
import { Block, Bytes, ConsensusEngineId, StorageKey, Text, bool, u32, u64, u8 } from '../../primitive';
import { BlockNumber, Hash, Justification, Signature, StorageData } from '../runtime';

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
