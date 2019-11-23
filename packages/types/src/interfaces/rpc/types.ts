// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec, ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, StorageData, StorageKey, Text, bool, u32, u64, u8 } from '@polkadot/types/primitive';
import { Balance, BlockNumber, DispatchClass, Hash, Weight } from '@polkadot/types/interfaces/runtime';

/** Uint8Array, Codec */
export interface ApiId extends Uint8Array, Codec {}

/** Hash */
export interface BlockHash extends Hash {}

/** Struct */
export interface ChainProperties extends Struct {
  /** Option<u8> */
  readonly ss58Format: Option<u8>;
  /** Option<u32> */
  readonly tokenDecimals: Option<u32>;
  /** Option<Text> */
  readonly tokenSymbol: Option<Text>;
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

/** ITuple<[StorageKey, Option<StorageData>]> */
export interface KeyValueOption extends ITuple<[StorageKey, Option<StorageData>]> {}

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
export interface RpcMethods extends Struct {
  /** u32 */
  readonly version: u32;
  /** Vec<Text> */
  readonly methods: Vec<Text>;
}

/** Struct */
export interface RuntimeDispatchInfo extends Struct {
  /** Weight */
  readonly weight: Weight;
  /** DispatchClass */
  readonly class: DispatchClass;
  /** Balance */
  readonly partialFee: Balance;
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

/** ITuple<[ApiId, u32]> */
export interface RuntimeVersionApi extends ITuple<[ApiId, u32]> {}

/** Struct */
export interface StorageChangeSet extends Struct {
  /** Hash */
  readonly block: Hash;
  /** Vec<KeyValueOption> */
  readonly changes: Vec<KeyValueOption>;
}
