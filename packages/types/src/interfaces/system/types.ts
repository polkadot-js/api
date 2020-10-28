// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Compact, Enum, HashMap, Option, Result, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { GenericEvent } from '@polkadot/types/generic';
import { Bytes, Text, bool, i32, u32, u64, u8 } from '@polkadot/types/primitive';
import { AccountData } from '@polkadot/types/interfaces/balances';
import { AccountId, BlockNumber, Digest, Hash, Index, Pays, Weight } from '@polkadot/types/interfaces/runtime';

/** @name AccountInfo */
export interface AccountInfo extends Struct {
  readonly nonce: Index;
  readonly refcount: RefCount;
  readonly data: AccountData;
}

/** @name ApplyExtrinsicResult */
export interface ApplyExtrinsicResult extends Result<DispatchOutcome, TransactionValidityError> {
  readonly isError: boolean;
  readonly asError: TransactionValidityError;
  readonly isOk: boolean;
  readonly asOk: DispatchOutcome;
}

/** @name ChainProperties */
export interface ChainProperties extends Struct {
  readonly ss58Format: Option<u8>;
  readonly tokenDecimals: Option<u32>;
  readonly tokenSymbol: Option<Text>;
}

/** @name ChainType */
export interface ChainType extends Enum {
  readonly isDevelopment: boolean;
  readonly isLocal: boolean;
  readonly isLive: boolean;
  readonly isCustom: boolean;
  readonly asCustom: Text;
}

/** @name DigestOf */
export interface DigestOf extends Digest {}

/** @name DispatchClass */
export interface DispatchClass extends Enum {
  readonly isNormal: boolean;
  readonly isOperational: boolean;
  readonly isMandatory: boolean;
}

/** @name DispatchError */
export interface DispatchError extends Enum {
  readonly isOther: boolean;
  readonly isCannotLookup: boolean;
  readonly isBadOrigin: boolean;
  readonly isModule: boolean;
  readonly asModule: DispatchErrorModule;
}

/** @name DispatchErrorModule */
export interface DispatchErrorModule extends Struct {
  readonly index: u8;
  readonly error: u8;
}

/** @name DispatchErrorTo198 */
export interface DispatchErrorTo198 extends Struct {
  readonly module: Option<u8>;
  readonly error: u8;
}

/** @name DispatchInfo */
export interface DispatchInfo extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
  readonly paysFee: Pays;
}

/** @name DispatchInfoTo190 */
export interface DispatchInfoTo190 extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
}

/** @name DispatchInfoTo244 */
export interface DispatchInfoTo244 extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
  readonly paysFee: bool;
}

/** @name DispatchOutcome */
export interface DispatchOutcome extends Result<ITuple<[]>, DispatchError> {
  readonly isError: boolean;
  readonly asError: DispatchError;
  readonly isOk: boolean;
  readonly asOk: ITuple<[]>;
}

/** @name DispatchResult */
export interface DispatchResult extends Result<ITuple<[]>, DispatchError> {
  readonly isError: boolean;
  readonly asError: DispatchError;
  readonly isOk: boolean;
  readonly asOk: ITuple<[]>;
}

/** @name DispatchResultOf */
export interface DispatchResultOf extends DispatchResult {}

/** @name DispatchResultTo198 */
export interface DispatchResultTo198 extends Result<ITuple<[]>, Text> {
  readonly isError: boolean;
  readonly asError: Text;
  readonly isOk: boolean;
  readonly asOk: ITuple<[]>;
}

/** @name Event */
export interface Event extends GenericEvent {}

/** @name EventId */
export interface EventId extends U8aFixed {}

/** @name EventIndex */
export interface EventIndex extends u32 {}

/** @name EventRecord */
export interface EventRecord extends Struct {
  readonly phase: Phase;
  readonly event: Event;
  readonly topics: Vec<Hash>;
}

/** @name Health */
export interface Health extends Struct {
  readonly peers: u64;
  readonly isSyncing: bool;
  readonly shouldHavePeers: bool;
}

/** @name InvalidTransaction */
export interface InvalidTransaction extends Enum {
  readonly isCall: boolean;
  readonly isPayment: boolean;
  readonly isFuture: boolean;
  readonly isStale: boolean;
  readonly isBadProof: boolean;
  readonly isAncientBirthBlock: boolean;
  readonly isExhaustsResources: boolean;
  readonly isCustom: boolean;
  readonly asCustom: u8;
  readonly isBadMandatory: boolean;
  readonly isMandatoryDispatch: boolean;
}

/** @name Key */
export interface Key extends Bytes {}

/** @name LastRuntimeUpgradeInfo */
export interface LastRuntimeUpgradeInfo extends Struct {
  readonly specVersion: Compact<u32>;
  readonly specName: Text;
}

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
  readonly reputation: i32;
}

/** @name NodeRole */
export interface NodeRole extends Enum {
  readonly isFull: boolean;
  readonly isLightClient: boolean;
  readonly isAuthority: boolean;
  readonly isUnknownRole: boolean;
  readonly asUnknownRole: u8;
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

/** @name Phase */
export interface Phase extends Enum {
  readonly isApplyExtrinsic: boolean;
  readonly asApplyExtrinsic: u32;
  readonly isFinalization: boolean;
  readonly isInitialization: boolean;
}

/** @name RawOrigin */
export interface RawOrigin extends Enum {
  readonly isRoot: boolean;
  readonly isSigned: boolean;
  readonly asSigned: AccountId;
  readonly isNone: boolean;
}

/** @name RefCount */
export interface RefCount extends u32 {}

/** @name RefCountTo259 */
export interface RefCountTo259 extends u8 {}

/** @name SyncState */
export interface SyncState extends Struct {
  readonly startingBlock: BlockNumber;
  readonly currentBlock: BlockNumber;
  readonly highestBlock: Option<BlockNumber>;
}

/** @name SystemOrigin */
export interface SystemOrigin extends RawOrigin {}

/** @name TransactionValidityError */
export interface TransactionValidityError extends Enum {
  readonly isInvalid: boolean;
  readonly asInvalid: InvalidTransaction;
  readonly isUnknown: boolean;
  readonly asUnknown: UnknownTransaction;
}

/** @name UnknownTransaction */
export interface UnknownTransaction extends Enum {
  readonly isCannotLookup: boolean;
  readonly isNoUnsignedValidator: boolean;
  readonly isCustom: boolean;
  readonly asCustom: u8;
}

export type PHANTOM_SYSTEM = 'system';
