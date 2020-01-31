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
    nextIndex(accountId: AccountId | Uint8Array | string): Observable<Index>;
  };
  author: {
    insertKey(keyType: Text | string, suri: Text | string, publicKey: Bytes | Uint8Array | string): Observable<Bytes>;
    pendingExtrinsics(): Observable<Vec<Extrinsic>>;
    removeExtrinsic(bytesOrHash: (ExtrinsicOrHash)[]): Observable<Vec<Hash>>;
    rotateKeys(): Observable<Bytes>;
    submitAndWatchExtrinsic(extrinsic: IExtrinsic): Observable<ExtrinsicStatus>;
    submitExtrinsic(extrinsic: IExtrinsic): Observable<Hash>;
  };
  chain: {
    getBlock(hash?: BlockHash | Uint8Array | string): Observable<SignedBlock>;
    getBlockHash(blockNumber?: BlockNumber | Uint8Array | AnyNumber): Observable<BlockHash>;
    getFinalizedHead(): Observable<BlockHash>;
    getHeader(hash?: BlockHash | Uint8Array | string): Observable<Header>;
    subscribeFinalizedHeads(): Observable<Header>;
    subscribeNewHeads(): Observable<Header>;
  };
  contracts: {
    call(callRequest: ContractCallRequest | Uint8Array | object | string, at?: BlockHash | Uint8Array | string): Observable<ContractExecResult>;
    getStorage(address: AccountId | Uint8Array | string, key: H256 | Uint8Array | string, at?: BlockHash | Uint8Array | string): Observable<Option<Bytes>>;
  };
  payment: {
    queryInfo(extrinsic: Bytes | Uint8Array | string, at?: BlockHash | Uint8Array | string): Observable<RuntimeDispatchInfo>;
  };
  rpc: {
    methods(): Observable<RpcMethods>;
  };
  state: {
    call(method: Text | string, data: Bytes | Uint8Array | string, at?: BlockHash | Uint8Array | string): Observable<Bytes>;
    getChildKeys(childStorageKey: any, childDefinition: any, childType: u32 | Uint8Array | AnyNumber, key: any, at?: BlockHash | Uint8Array | string): Observable<Vec<StorageKey>>;
    getChildStorage(childStorageKey: any, childDefinition: any, childType: u32 | Uint8Array | AnyNumber, key: any, at?: BlockHash | Uint8Array | string): Observable<StorageData>;
    getChildStorageHash(childStorageKey: any, childDefinition: any, childType: u32 | Uint8Array | AnyNumber, key: any, at?: BlockHash | Uint8Array | string): Observable<Hash>;
    getChildStorageSize(childStorageKey: any, childDefinition: any, childType: u32 | Uint8Array | AnyNumber, key: any, at?: BlockHash | Uint8Array | string): Observable<u64>;
    getKeys(key: any, at?: BlockHash | Uint8Array | string): Observable<Vec<StorageKey>>;
    getMetadata(at?: BlockHash | Uint8Array | string): Observable<Metadata>;
    getRuntimeVersion(at?: BlockHash | Uint8Array | string): Observable<RuntimeVersion>;
    getStorage<T = Codec>(key: any, block?: Hash | Uint8Array | string): Observable<T>;
    getStorageHash(key: any, at?: BlockHash | Uint8Array | string): Observable<Hash>;
    getStorageSize(key: any, at?: BlockHash | Uint8Array | string): Observable<u64>;
    queryStorage(keys: (any)[], startBlock: Hash | Uint8Array | string, at?: BlockHash | Uint8Array | string): Observable<Vec<StorageChangeSet>>;
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
