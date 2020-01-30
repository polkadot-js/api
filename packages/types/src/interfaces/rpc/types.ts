// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec, ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, StorageData, StorageKey, Text, bool, u32, u64, u8 } from '@polkadot/types/primitive';
import { Balance, BlockNumber, DispatchClass, Hash, Weight } from '@polkadot/types/interfaces/runtime';

/**
 * @name ApiId
 * @description extends [[Uint8Array, Codec]]
 */
export interface ApiId extends Uint8Array, Codec {}

/**
 * @name BlockHash
 * @description extends [[Hash]]
 */
export interface BlockHash extends Hash {}

/**
 * @name ChainProperties
 * @description extends [[Struct]]
 */
export interface ChainProperties extends Struct {
  readonly ss58Format: Option<u8>;
  readonly tokenDecimals: Option<u32>;
  readonly tokenSymbol: Option<Text>;
}

/**
 * @name ExtrinsicOrHash
 * @description extends [[Enum]]
 */
export interface ExtrinsicOrHash extends Enum {
  readonly isHash: boolean;
  readonly asHash: Hash;
  readonly isExtrinsic: boolean;
  readonly asExtrinsic: Bytes;
}

/**
 * @name ExtrinsicStatus
 * @description extends [[Enum]]
 */
export interface ExtrinsicStatus extends Enum {
  readonly isFuture: boolean;
  readonly isReady: boolean;
  readonly isFinalized: boolean;
  readonly asFinalized: Hash;
  readonly isUsurped: boolean;
  readonly asUsurped: Hash;
  readonly isBroadcast: boolean;
  readonly asBroadcast: Vec<Text>;
  readonly isDropped: boolean;
  readonly isInvalid: boolean;
}

/**
 * @name Health
 * @description extends [[Struct]]
 */
export interface Health extends Struct {
  readonly peers: u64;
  readonly isSyncing: bool;
  readonly shouldHavePeers: bool;
}

/**
 * @name KeyValueOption
 * @description extends [[ITuple<[StorageKey, Option<StorageData>]>]]
 */
export interface KeyValueOption extends ITuple<[StorageKey, Option<StorageData>]> {}

/**
 * @name NetworkState
 * @description extends [[Struct]]
 */
export interface NetworkState extends Struct {
  readonly peerId: Text;
}

/**
 * @name PeerInfo
 * @description extends [[Struct]]
 */
export interface PeerInfo extends Struct {
  readonly peerId: Text;
  readonly roles: Text;
  readonly protocolVersion: u32;
  readonly bestHash: Hash;
  readonly bestNumber: BlockNumber;
}

/**
 * @name RpcMethods
 * @description extends [[Struct]]
 */
export interface RpcMethods extends Struct {
  readonly version: u32;
  readonly methods: Vec<Text>;
}

/**
 * @name RuntimeDispatchInfo
 * @description extends [[Struct]]
 */
export interface RuntimeDispatchInfo extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
  readonly partialFee: Balance;
}

/**
 * @name RuntimeVersion
 * @description extends [[Struct]]
 */
export interface RuntimeVersion extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<RuntimeVersionApi>;
}

/**
 * @name RuntimeVersionApi
 * @description extends [[ITuple<[ApiId, u32]>]]
 */
export interface RuntimeVersionApi extends ITuple<[ApiId, u32]> {}

/**
 * @name StorageChangeSet
 * @description extends [[Struct]]
 */
export interface StorageChangeSet extends Struct {
  readonly block: Hash;
  readonly changes: Vec<KeyValueOption>;
}
