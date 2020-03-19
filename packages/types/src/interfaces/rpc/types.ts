// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, HashMap, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, StorageKey, Text, bool, u32, u64, u8 } from '@polkadot/types/primitive';
import { Balance, BlockNumber, DispatchClass, Hash, StorageData, Weight } from '@polkadot/types/interfaces/runtime';

/** @name ApiId */
export interface ApiId extends U8aFixed {}

/** @name BlockHash */
export interface BlockHash extends Hash {}

/** @name ChainProperties */
export interface ChainProperties extends Struct {
  readonly ss58Format: Option<u8>;
  readonly tokenDecimals: Option<u32>;
  readonly tokenSymbol: Option<Text>;
}

/** @name ExtrinsicOrHash */
export interface ExtrinsicOrHash extends Enum {
  readonly isHash: boolean;
  readonly asHash: Hash;
  readonly isExtrinsic: boolean;
  readonly asExtrinsic: Bytes;
}

/** @name ExtrinsicStatus */
export interface ExtrinsicStatus extends Enum {
  readonly isFuture: boolean;
  readonly isReady: boolean;
  readonly isBroadcast: boolean;
  readonly asBroadcast: Vec<Text>;
  readonly isInBlock: boolean;
  readonly asInBlock: Hash;
  readonly isRetracted: boolean;
  readonly asRetracted: Hash;
  readonly isFinalityTimeout: boolean;
  readonly asFinalityTimeout: Hash;
  readonly isFinalized: boolean;
  readonly asFinalized: Hash;
  readonly isUsurped: boolean;
  readonly asUsurped: Hash;
  readonly isDropped: boolean;
  readonly isInvalid: boolean;
}

/** @name Health */
export interface Health extends Struct {
  readonly peers: u64;
  readonly isSyncing: bool;
  readonly shouldHavePeers: bool;
}

/** @name KeyValueOption */
export interface KeyValueOption extends ITuple<[StorageKey, Option<StorageData>]> {}

/** @name NetworkState */
export interface NetworkState extends Struct {
  readonly peerId: Text;
  readonly listenedAddresses: Vec<Text>;
  readonly externalAddresses: Vec<Text>;
  readonly connectedPeers: HashMap<Text, Peer>;
  readonly notConnectedPeers: HashMap<Text, NotConnectedPeer>;
  readonly averageDownloadPerSec: u64;
  readonly averageUploadPerSec: u64;
  readonly peerset: NetworkStatePeerset;
}

/** @name NetworkStatePeerset */
export interface NetworkStatePeerset extends Struct {
  readonly messageQueue: u64;
  readonly nodes: HashMap<Text, NetworkStatePeersetInfo>;
}

/** @name NetworkStatePeersetInfo */
export interface NetworkStatePeersetInfo extends Struct {
  readonly connected: bool;
  readonly reputation: u64;
}

/** @name NotConnectedPeer */
export interface NotConnectedPeer extends Struct {
  readonly knownAddresses: Vec<Text>;
  readonly latestPingTime: Option<PeerPing>;
  readonly versionString: Option<Text>;
}

/** @name Peer */
export interface Peer extends Struct {
  readonly enabled: bool;
  readonly endpoint: PeerEndpoint;
  readonly knownAddresses: Vec<Text>;
  readonly latestPingTime: PeerPing;
  readonly open: bool;
  readonly versionString: Text;
}

/** @name PeerEndpoint */
export interface PeerEndpoint extends Struct {
  readonly listening: PeerEndpointAddr;
}

/** @name PeerEndpointAddr */
export interface PeerEndpointAddr extends Struct {
  readonly localAddr: Text;
  readonly sendBackAddr: Text;
}

/** @name PeerInfo */
export interface PeerInfo extends Struct {
  readonly peerId: Text;
  readonly roles: Text;
  readonly protocolVersion: u32;
  readonly bestHash: Hash;
  readonly bestNumber: BlockNumber;
}

/** @name PeerPing */
export interface PeerPing extends Struct {
  readonly nanos: u64;
  readonly secs: u64;
}

/** @name RpcMethods */
export interface RpcMethods extends Struct {
  readonly version: u32;
  readonly methods: Vec<Text>;
}

/** @name RuntimeDispatchInfo */
export interface RuntimeDispatchInfo extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
  readonly partialFee: Balance;
}

/** @name RuntimeVersion */
export interface RuntimeVersion extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<RuntimeVersionApi>;
}

/** @name RuntimeVersionApi */
export interface RuntimeVersionApi extends ITuple<[ApiId, u32]> {}

/** @name StorageChangeSet */
export interface StorageChangeSet extends Struct {
  readonly block: Hash;
  readonly changes: Vec<KeyValueOption>;
}

export type PHANTOM_RPC = 'rpc';
