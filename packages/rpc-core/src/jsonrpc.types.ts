// Auto-generated via `yarn build:interfaces`, do not edit

import { Observable } from 'rxjs';
import { Vec } from '@polkadot/types/codec';
import { Bytes, StorageKey, Text, u64 } from '@polkadot/types/primitive';
import { BlockNumber, Extrinsic, Hash, Header, SignedBlock, StorageData } from '@polkadot/types/interfaces/runtime';
import { ChainProperties, ExtrinsicOrHash, ExtrinsicStatus, Health, NetworkState, PeerInfo, RuntimeVersion, StorageChangeSet } from '@polkadot/types/interfaces/rpc';

export interface RpcInterface {
  author: {
    removeExtrinsic(bytesOrHash: (ExtrinsicOrHash)[]): Observable<Vec<Hash>>;
    pendingExtrinsics(): Observable<Vec<Extrinsic>>;
    submitExtrinsic(extrinsic: Extrinsic): Observable<Hash>;
    submitAndWatchExtrinsic(extrinsic: Extrinsic): Observable<ExtrinsicStatus>;
  };
  chain: {
    getBlock(hash?: Hash | Uint8Array | string): Observable<SignedBlock>;
    getBlockHash(blockNumber?: BlockNumber | Uint8Array | number | string): Observable<Hash>;
    getFinalizedHead(): Observable<Hash>;
    getHeader(hash?: Hash | Uint8Array | string): Observable<Header>;
    getRuntimeVersion(hash?: Hash | Uint8Array | string): Observable<RuntimeVersion>;
    subscribeFinalizedHeads(): Observable<Header>;
    subscribeRuntimeVersion(): Observable<RuntimeVersion>;
    subscribeNewHead(): Observable<Header>;
  };
  state: {
    call(method: Text | string, data: Bytes | Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<Bytes>;
    getChildKeys(childStorageKey: StorageKey | Hash | Uint8Array | string, prefix: StorageKey | Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<Vec<StorageKey>>;
    getChildStorage(childStorageKey: StorageKey | Hash | Uint8Array | string, key: StorageKey | Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<StorageData>;
    getChildStorageHash(childStorageKey: StorageKey | Hash | Uint8Array | string, key: StorageKey | Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<Hash>;
    getChildStorageSize(childStorageKey: StorageKey | Hash | Uint8Array | string, key: StorageKey | Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<u64>;
    getKeys(prefix: StorageKey | Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<Vec<StorageKey>>;
    getMetadata(block?: Hash | Uint8Array | string): Observable<Metadata>;
    getRuntimeVersion(hash?: Hash | Uint8Array | string): Observable<RuntimeVersion>;
    getStorage(key: StorageKey | Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<StorageData>;
    getStorageHash(key: StorageKey | Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<Hash>;
    getStorageSize(key: StorageKey | Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<u64>;
    queryStorage(keys: (StorageKey | Hash | Uint8Array | string)[], startBlock: Hash | Uint8Array | string, block?: Hash | Uint8Array | string): Observable<Vec<StorageChangeSet>>;
    subscribeStorage(keys: (StorageKey | Hash | Uint8Array | string)[]): Observable<StorageChangeSet>;
  };
  system: {
    chain(): Observable<Text>;
    health(): Observable<Health>;
    name(): Observable<Text>;
    networkState(): Observable<NetworkState>;
    peers(): Observable<Vec<PeerInfo>>;
    properties(): Observable<ChainProperties>;
    version(): Observable<Text>;
  };
}
