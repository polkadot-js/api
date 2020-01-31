// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Observable } from 'rxjs';
import { Option, Vec } from '@polkadot/types/codec';
import { Bytes, H256, Metadata, StorageData, StorageKey, Text, u32, u64 } from '@polkadot/types';
import { AccountId, BlockNumber, Extrinsic, Hash, Header, Index, SignedBlock } from '@polkadot/types/interfaces/runtime';
import { ContractCallRequest, ContractExecResult } from '@polkadot/types/interfaces/contracts';
import { BlockHash, ChainProperties, ExtrinsicOrHash, ExtrinsicStatus, Health, NetworkState, PeerInfo, RpcMethods, RuntimeDispatchInfo, RuntimeVersion, StorageChangeSet } from '@polkadot/types/interfaces/rpc';
import { AnyNumber, Codec, IExtrinsic } from '@polkadot/types/types';

export interface RpcInterface {
  account: {
    nextIndex(accountId: AccountId | string | Uint8Array): Observable<Index>;
  };
  author: {
    insertKey(keyType: Text | string, suri: Text | string, publicKey: Bytes | string | Uint8Array): Observable<Bytes>;
    pendingExtrinsics(): Observable<Vec<Extrinsic>>;
    removeExtrinsic(bytesOrHash: Vec<ExtrinsicOrHash> | (ExtrinsicOrHash)[]): Observable<Vec<Hash>>;
    rotateKeys(): Observable<Bytes>;
    submitAndWatchExtrinsic(extrinsic: IExtrinsic): Observable<ExtrinsicStatus>;
    submitExtrinsic(extrinsic: IExtrinsic): Observable<Hash>;
  };
  chain: {
    getBlock(hash?: BlockHash | string | Uint8Array): Observable<SignedBlock>;
    getBlockHash(blockNumber?: BlockNumber | AnyNumber | Uint8Array): Observable<BlockHash>;
    getFinalizedHead(): Observable<BlockHash>;
    getHeader(hash?: BlockHash | string | Uint8Array): Observable<Header>;
    subscribeFinalizedHeads(): Observable<Header>;
    subscribeNewHeads(): Observable<Header>;
  };
  contracts: {
    call(callRequest: ContractCallRequest | object | string | Uint8Array, at?: BlockHash | string | Uint8Array): Observable<ContractExecResult>;
    getStorage(address: AccountId | string | Uint8Array, key: H256 | string | Uint8Array, at?: BlockHash | string | Uint8Array): Observable<Option<Bytes>>;
  };
  payment: {
    queryInfo(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array): Observable<RuntimeDispatchInfo>;
  };
  rpc: {
    methods(): Observable<RpcMethods>;
  };
  state: {
    call(method: Text | string, data: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array): Observable<Bytes>;
    getChildKeys(childStorageKey: StorageKey | any, childDefinition: StorageKey | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | any, at?: BlockHash | string | Uint8Array): Observable<Vec<StorageKey>>;
    getChildStorage(childStorageKey: StorageKey | any, childDefinition: StorageKey | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | any, at?: BlockHash | string | Uint8Array): Observable<StorageData>;
    getChildStorageHash(childStorageKey: StorageKey | any, childDefinition: StorageKey | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | any, at?: BlockHash | string | Uint8Array): Observable<Hash>;
    getChildStorageSize(childStorageKey: StorageKey | any, childDefinition: StorageKey | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | any, at?: BlockHash | string | Uint8Array): Observable<u64>;
    getKeys(key: StorageKey | any, at?: BlockHash | string | Uint8Array): Observable<Vec<StorageKey>>;
    getMetadata(at?: BlockHash | string | Uint8Array): Observable<Metadata>;
    getRuntimeVersion(at?: BlockHash | string | Uint8Array): Observable<RuntimeVersion>;
    getStorage<T = Codec>(key: any, block?: Hash | Uint8Array | string): Observable<T>;
    getStorageHash(key: StorageKey | any, at?: BlockHash | string | Uint8Array): Observable<Hash>;
    getStorageSize(key: StorageKey | any, at?: BlockHash | string | Uint8Array): Observable<u64>;
    queryStorage(keys: Vec<StorageKey> | (StorageKey | any)[], startBlock: Hash | string | Uint8Array, at?: BlockHash | string | Uint8Array): Observable<Vec<StorageChangeSet>>;
    subscribeRuntimeVersion(): Observable<RuntimeVersion>;
    subscribeStorage<T = Codec[]>(keys: any[]): Observable<T>;
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
