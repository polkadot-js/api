// Auto-generated via `yarn build:interfaces`, do not edit

import { Vec } from '@polkadot/types/codec';
import { Bytes, StorageKey, Text, u64 } from '@polkadot/types/primitive';
import { BlockNumber, Extrinsic, Hash, Header, SignedBlock, StorageData } from '@polkadot/types/interfaces/runtime';
import { ChainProperties, ExtrinsicOrHash, ExtrinsicStatus, Health, NetworkState, PeerInfo, RuntimeVersion, StorageChangeSet } from '@polkadot/types/interfaces/rpc';

export interface RpcInterface {
  author: {
    removeExtrinsic(bytesOrHash: Vec<ExtrinsicOrHash>): Vec<Hash>;
    pendingExtrinsics(): Vec<Extrinsic>;
    submitExtrinsic(extrinsic: Extrinsic): Hash;
    submitAndWatchExtrinsic(extrinsic: Extrinsic): ExtrinsicStatus;
  };
  chain: {
    getBlock(hash?: Hash): SignedBlock;
    getBlockHash(blockNumber?: BlockNumber): Hash;
    getFinalizedHead(): Hash;
    getHeader(hash?: Hash): Header;
    getRuntimeVersion(hash?: Hash): RuntimeVersion;
    subscribeFinalizedHeads(): Header;
    subscribeRuntimeVersion(): RuntimeVersion;
    subscribeNewHead(): Header;
  };
  state: {
    call(method: Text, data: Bytes, block?: Hash): Bytes;
    getChildKeys(childStorageKey: StorageKey, prefix: StorageKey, block?: Hash): Vec<StorageKey>;
    getChildStorage(childStorageKey: StorageKey, key: StorageKey, block?: Hash): StorageData;
    getChildStorageHash(childStorageKey: StorageKey, key: StorageKey, block?: Hash): Hash;
    getChildStorageSize(childStorageKey: StorageKey, key: StorageKey, block?: Hash): u64;
    getKeys(prefix: StorageKey, block?: Hash): Vec<StorageKey>;
    getMetadata(block?: Hash): Metadata;
    getRuntimeVersion(hash?: Hash): RuntimeVersion;
    getStorage(key: StorageKey, block?: Hash): StorageData;
    getStorageHash(key: StorageKey, block?: Hash): Hash;
    getStorageSize(key: StorageKey, block?: Hash): u64;
    queryStorage(keys: Vec<StorageKey>, startBlock: Hash, block?: Hash): Vec<StorageChangeSet>;
    subscribeStorage(keys: Vec<StorageKey>): StorageChangeSet;
  };
  system: {
    chain(): Text;
    health(): Health;
    name(): Text;
    networkState(): NetworkState;
    peers(): Vec<PeerInfo>;
    properties(): ChainProperties;
    version(): Text;
  };
}
