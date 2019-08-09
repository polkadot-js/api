// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { Enum, Option, Struct, Vec } from '../../codec';
import { Bytes, StorageData, StorageKey, Text, bool, u32, u64 } from '../../primitive';
import { BlockNumber, Hash } from '../runtime';

/** Uint8Array & Codec */
export type ApiId = Uint8Array & Codec;

/** Struct */
export interface ChainProperties extends Struct {
  /** u32 */
  readonly tokenDecimals: u32;
  /** Text */
  readonly tokenSymbol: Text;
}

/** Enum */
export interface ExtrinsicOrHash extends Enum {
  /** 0:: Hash(Hash) */
  readonly isHash: boolean;
  /** Hash */
  readonly asHash: Hash;
  /** 1:: Extrinsic(Bytes) */
  readonly isExtrinsic: boolean;
  /** Bytes */
  readonly asExtrinsic: Bytes;
}

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

/** Struct */
export interface StorageChangeSet extends Struct {
  /** Hash */
  readonly block: Hash;
  /** Vec<KeyValueOption> */
  readonly changes: Vec<KeyValueOption>;
}
