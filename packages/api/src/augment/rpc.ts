// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AnyNumber, Codec, IExtrinsic } from '@polkadot/types/types';
import { Option, Vec } from '@polkadot/types/codec';
import { Bytes, StorageKey, Text, bool, u32, u64 } from '@polkadot/types/primitive';
import { Metadata } from '@polkadot/types';
import { ContractCallRequest, ContractExecResult } from '@polkadot/types/interfaces/contracts';
import { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import { BlockHash, ChainProperties, ExtrinsicOrHash, ExtrinsicStatus, Health, NetworkState, PeerInfo, RpcMethods, RuntimeDispatchInfo, RuntimeVersion, StorageChangeSet } from '@polkadot/types/interfaces/rpc';
import { AccountId, BlockNumber, H256, Hash, Header, Index, SignedBlock, StorageData } from '@polkadot/types/interfaces/runtime';
import { Observable } from 'rxjs';

declare module '@polkadot/rpc-core/types.jsonrpc' {
  export interface RpcInterface<ApiType> {
    account: {
      /**
       * Retrieves the next accountIndex as available on the node
       **/
      nextIndex: AugmentedRpc<ApiType, (accountId: AccountId | string | Uint8Array) => Observable<Index>> & RpcEntry<ApiType>;
    };
    author: {
      /**
       * Returns true if the keystore has private keys for the given public key and key type.
       **/
      hasKey: AugmentedRpc<ApiType, (publicKey: Bytes | string | Uint8Array, keyType: Text | string) => Observable<bool>> & RpcEntry<ApiType>;
      /**
       * Returns true if the keystore has private keys for the given session public keys.
       **/
      hasSessionKeys: AugmentedRpc<ApiType, (sessionKeys: Bytes | string | Uint8Array) => Observable<bool>> & RpcEntry<ApiType>;
      /**
       * Insert a key into the keystore.
       **/
      insertKey: AugmentedRpc<ApiType, (keyType: Text | string, suri: Text | string, publicKey: Bytes | string | Uint8Array) => Observable<Bytes>> & RpcEntry<ApiType>;
      /**
       * Returns all pending extrinsics, potentially grouped by sender
       **/
      pendingExtrinsics: AugmentedRpc<ApiType, () => Observable<Vec<Extrinsic>>> & RpcEntry<ApiType>;
      /**
       * Remove given extrinsic from the pool and temporarily ban it to prevent reimporting
       **/
      removeExtrinsic: AugmentedRpc<ApiType, (bytesOrHash: Vec<ExtrinsicOrHash> | (ExtrinsicOrHash | { hash: any } | { extrinsic: any } | string | Uint8Array)[]) => Observable<Vec<Hash>>> & RpcEntry<ApiType>;
      /**
       * Generate new session keys and returns the corresponding public keys
       **/
      rotateKeys: AugmentedRpc<ApiType, () => Observable<Bytes>> & RpcEntry<ApiType>;
      /**
       * Submit and subscribe to watch an extrinsic until unsubscribed
       **/
      submitAndWatchExtrinsic: AugmentedRpc<ApiType, (extrinsic: IExtrinsic) => Observable<ExtrinsicStatus>> & RpcEntry<ApiType>;
      /**
       * Submit a fully formatted extrinsic for block inclusion
       **/
      submitExtrinsic: AugmentedRpc<ApiType, (extrinsic: IExtrinsic) => Observable<Hash>> & RpcEntry<ApiType>;
    };
    chain: {
      /**
       * Get header and body of a relay chain block
       **/
      getBlock: AugmentedRpc<ApiType, (hash?: BlockHash | string | Uint8Array) => Observable<SignedBlock>> & RpcEntry<ApiType>;
      /**
       * Get the block hash for a specific block
       **/
      getBlockHash: AugmentedRpc<ApiType, (blockNumber?: BlockNumber | AnyNumber | Uint8Array) => Observable<BlockHash>> & RpcEntry<ApiType>;
      /**
       * Get hash of the last finalized block in the canon chain
       **/
      getFinalizedHead: AugmentedRpc<ApiType, () => Observable<BlockHash>> & RpcEntry<ApiType>;
      /**
       * Retrieves the header for a specific block
       **/
      getHeader: AugmentedRpc<ApiType, (hash?: BlockHash | string | Uint8Array) => Observable<Header>> & RpcEntry<ApiType>;
      /**
       * Retrieves the newest header via subscription
       **/
      subscribeAllHeads: AugmentedRpc<ApiType, () => Observable<Header>> & RpcEntry<ApiType>;
      /**
       * Retrieves the best finalized header via subscription
       **/
      subscribeFinalizedHeads: AugmentedRpc<ApiType, () => Observable<Header>> & RpcEntry<ApiType>;
      /**
       * Retrieves the best header via subscription
       **/
      subscribeNewHeads: AugmentedRpc<ApiType, () => Observable<Header>> & RpcEntry<ApiType>;
    };
    contracts: {
      /**
       * Executes a call to a contract
       **/
      call: AugmentedRpc<ApiType, (callRequest: ContractCallRequest | { origin?: any; dest?: any; value?: any; gasLimit?: any; inputData?: any } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractExecResult>> & RpcEntry<ApiType>;
      /**
       * Returns the value under a specified storage key in a contract
       **/
      getStorage: AugmentedRpc<ApiType, (address: AccountId | string | Uint8Array, key: H256 | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<Bytes>>> & RpcEntry<ApiType>;
    };
    payment: {
      /**
       * Retrieves the fee information for an encoded extrinsic
       **/
      queryInfo: AugmentedRpc<ApiType, (extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<RuntimeDispatchInfo>> & RpcEntry<ApiType>;
    };
    rpc: {
      /**
       * Retrieves the list of RPC methods that are exposed by the node
       **/
      methods: AugmentedRpc<ApiType, () => Observable<RpcMethods>> & RpcEntry<ApiType>;
    };
    state: {
      /**
       * Perform a call to a builtin on the chain
       **/
      call: AugmentedRpc<ApiType, (method: Text | string, data: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Bytes>> & RpcEntry<ApiType>;
      /**
       * Retrieves the keys with prefix of a specific child storage
       **/
      getChildKeys: AugmentedRpc<ApiType, (childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>> & RpcEntry<ApiType>;
      /**
       * Retrieves the child storage for a key
       **/
      getChildStorage: AugmentedRpc<ApiType, (childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<StorageData>> & RpcEntry<ApiType>;
      /**
       * Retrieves the child storage hash
       **/
      getChildStorageHash: AugmentedRpc<ApiType, (childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>> & RpcEntry<ApiType>;
      /**
       * Retrieves the child storage size
       **/
      getChildStorageSize: AugmentedRpc<ApiType, (childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>> & RpcEntry<ApiType>;
      /**
       * Retrieves the keys with a certain prefix
       **/
      getKeys: AugmentedRpc<ApiType, (key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>> & RpcEntry<ApiType>;
      /**
       * Returns the runtime metadata
       **/
      getMetadata: AugmentedRpc<ApiType, (at?: BlockHash | string | Uint8Array) => Observable<Metadata>> & RpcEntry<ApiType>;
      /**
       * Get the runtime version
       **/
      getRuntimeVersion: AugmentedRpc<ApiType, (at?: BlockHash | string | Uint8Array) => Observable<RuntimeVersion>> & RpcEntry<ApiType>;
      getStorage<T = Codec>(key: any, block?: Hash | Uint8Array | string): Observable<T>;
      /**
       * Retrieves the storage hash
       **/
      getStorageHash: AugmentedRpc<ApiType, (key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>> & RpcEntry<ApiType>;
      /**
       * Retrieves the storage size
       **/
      getStorageSize: AugmentedRpc<ApiType, (key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>> & RpcEntry<ApiType>;
      /**
       * Query historical storage entries (by key) starting from a start block
       **/
      queryStorage: AugmentedRpc<ApiType, (keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], startBlock: Hash | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageChangeSet>>> & RpcEntry<ApiType>;
      /**
       * Retrieves the runtime version via subscription
       **/
      subscribeRuntimeVersion: AugmentedRpc<ApiType, () => Observable<RuntimeVersion>> & RpcEntry<ApiType>;
      subscribeStorage<T = Codec[]>(keys: any[]): Observable<T>;
    };
    system: {
      /**
       * Retrieves the chain
       **/
      chain: AugmentedRpc<ApiType, () => Observable<Text>> & RpcEntry<ApiType>;
      /**
       * Return health status of the node
       **/
      health: AugmentedRpc<ApiType, () => Observable<Health>> & RpcEntry<ApiType>;
      /**
       * Retrieves the node name
       **/
      name: AugmentedRpc<ApiType, () => Observable<Text>> & RpcEntry<ApiType>;
      /**
       * Returns current state of the network
       **/
      networkState: AugmentedRpc<ApiType, () => Observable<NetworkState>> & RpcEntry<ApiType>;
      /**
       * Returns the currently connected peers
       **/
      peers: AugmentedRpc<ApiType, () => Observable<Vec<PeerInfo>>> & RpcEntry<ApiType>;
      /**
       * Get a custom set of properties as a JSON object, defined in the chain spec
       **/
      properties: AugmentedRpc<ApiType, () => Observable<ChainProperties>> & RpcEntry<ApiType>;
      /**
       * Retrieves the version of the node
       **/
      version: AugmentedRpc<ApiType, () => Observable<Text>> & RpcEntry<ApiType>;
    };
  }
}
