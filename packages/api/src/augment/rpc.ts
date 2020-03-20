// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import { AnyNumber, Codec, IExtrinsic } from '@polkadot/types/types';
import { Option, Vec } from '@polkadot/types/codec';
import { Bytes, Null, StorageKey, Text, bool, u32, u64 } from '@polkadot/types/primitive';
import { Metadata } from '@polkadot/types';
import { ContractCallRequest, ContractExecResult } from '@polkadot/types/interfaces/contracts';
import { CreatedBlock } from '@polkadot/types/interfaces/engine';
import { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import { StorageKind } from '@polkadot/types/interfaces/offchain';
import { BlockHash, ChainProperties, ExtrinsicOrHash, ExtrinsicStatus, Health, NetworkState, PeerInfo, RpcMethods, RuntimeDispatchInfo, RuntimeVersion } from '@polkadot/types/interfaces/rpc';
import { AccountId, BlockNumber, H256, Hash, Header, Index, Justification, KeyValue, SignedBlock, StorageData } from '@polkadot/types/interfaces/runtime';
import { NodeRole } from '@polkadot/types/interfaces/system';
import { Observable } from 'rxjs';

declare module '@polkadot/rpc-core/types.jsonrpc' {
  export interface RpcInterface {
    account: {
      /**
       * Retrieves the next accountIndex as available on the node
       **/
      nextIndex: AugmentedRpc<(accountId: AccountId | string | Uint8Array) => Observable<Index>>;
    };
    author: {
      /**
       * Returns true if the keystore has private keys for the given public key and key type.
       **/
      hasKey: AugmentedRpc<(publicKey: Bytes | string | Uint8Array, keyType: Text | string) => Observable<bool>>;
      /**
       * Returns true if the keystore has private keys for the given session public keys.
       **/
      hasSessionKeys: AugmentedRpc<(sessionKeys: Bytes | string | Uint8Array) => Observable<bool>>;
      /**
       * Insert a key into the keystore.
       **/
      insertKey: AugmentedRpc<(keyType: Text | string, suri: Text | string, publicKey: Bytes | string | Uint8Array) => Observable<Bytes>>;
      /**
       * Returns all pending extrinsics, potentially grouped by sender
       **/
      pendingExtrinsics: AugmentedRpc<() => Observable<Vec<Extrinsic>>>;
      /**
       * Remove given extrinsic from the pool and temporarily ban it to prevent reimporting
       **/
      removeExtrinsic: AugmentedRpc<(bytesOrHash: Vec<ExtrinsicOrHash> | (ExtrinsicOrHash | { hash: any } | { extrinsic: any } | string | Uint8Array)[]) => Observable<Vec<Hash>>>;
      /**
       * Generate new session keys and returns the corresponding public keys
       **/
      rotateKeys: AugmentedRpc<() => Observable<Bytes>>;
      /**
       * Submit and subscribe to watch an extrinsic until unsubscribed
       **/
      submitAndWatchExtrinsic: AugmentedRpc<(extrinsic: IExtrinsic) => Observable<ExtrinsicStatus>>;
      /**
       * Submit a fully formatted extrinsic for block inclusion
       **/
      submitExtrinsic: AugmentedRpc<(extrinsic: IExtrinsic) => Observable<Hash>>;
    };
    chain: {
      /**
       * Get header and body of a relay chain block
       **/
      getBlock: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<SignedBlock>>;
      /**
       * Get the block hash for a specific block
       **/
      getBlockHash: AugmentedRpc<(blockNumber?: BlockNumber | AnyNumber | Uint8Array) => Observable<BlockHash>>;
      /**
       * Get hash of the last finalized block in the canon chain
       **/
      getFinalizedHead: AugmentedRpc<() => Observable<BlockHash>>;
      /**
       * Retrieves the header for a specific block
       **/
      getHeader: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<Header>>;
      /**
       * Retrieves the newest header via subscription
       **/
      subscribeAllHeads: AugmentedRpc<() => Observable<Header>>;
      /**
       * Retrieves the best finalized header via subscription
       **/
      subscribeFinalizedHeads: AugmentedRpc<() => Observable<Header>>;
      /**
       * Retrieves the best header via subscription
       **/
      subscribeNewHeads: AugmentedRpc<() => Observable<Header>>;
    };
    contracts: {
      /**
       * Executes a call to a contract
       **/
      call: AugmentedRpc<(callRequest: ContractCallRequest | { origin?: any; dest?: any; value?: any; gasLimit?: any; inputData?: any } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractExecResult>>;
      /**
       * Returns the value under a specified storage key in a contract
       **/
      getStorage: AugmentedRpc<(address: AccountId | string | Uint8Array, key: H256 | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<Bytes>>>;
    };
    engine: {
      /**
       * Instructs the manual-seal authorship task to create a new block
       **/
      createBlock: AugmentedRpc<(createEmpty: bool | boolean | Uint8Array, finalize: bool | boolean | Uint8Array, parentHash?: BlockHash | string | Uint8Array) => Observable<CreatedBlock>>;
      /**
       * Instructs the manual-seal authorship task to finalize a block
       **/
      finalizeBlock: AugmentedRpc<(hash: BlockHash | string | Uint8Array, justification?: Justification | string | Uint8Array) => Observable<bool>>;
    };
    offchain: {
      /**
       * Get offchain local storage under given key and prefix
       **/
      localStorageGet: AugmentedRpc<(kind: StorageKind | ('__UNUSED' | 'PERSISTENT' | 'LOCAL') | number | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Set offchain local storage under given key and prefix
       **/
      localStorageSet: AugmentedRpc<(kind: StorageKind | ('__UNUSED' | 'PERSISTENT' | 'LOCAL') | number | Uint8Array, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => Observable<Null>>;
    };
    payment: {
      /**
       * Retrieves the fee information for an encoded extrinsic
       **/
      queryInfo: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<RuntimeDispatchInfo>>;
    };
    rpc: {
      /**
       * Retrieves the list of RPC methods that are exposed by the node
       **/
      methods: AugmentedRpc<() => Observable<RpcMethods>>;
    };
    state: {
      /**
       * Perform a call to a builtin on the chain
       **/
      call: AugmentedRpc<(method: Text | string, data: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Bytes>>;
      /**
       * Retrieves the keys with prefix of a specific child storage
       **/
      getChildKeys: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
      /**
       * Retrieves the child storage for a key
       **/
      getChildStorage: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<StorageData>>;
      /**
       * Retrieves the child storage hash
       **/
      getChildStorageHash: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>>;
      /**
       * Retrieves the child storage size
       **/
      getChildStorageSize: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>>;
      /**
       * Retrieves the keys with a certain prefix
       **/
      getKeys: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
      /**
       * Returns the keys with prefix with pagination support.
       **/
      getKeysPaged: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, count: u32 | AnyNumber | Uint8Array, startKey?: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
      /**
       * Returns the runtime metadata
       **/
      getMetadata: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<Metadata>>;
      /**
       * Returns the keys with prefix, leave empty to get all the keys
       **/
      getPairs: AugmentedRpc<(prefix: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<KeyValue>>>;
      /**
       * Get the runtime version
       **/
      getRuntimeVersion: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<RuntimeVersion>>;
      /**
       * Retrieves the storage for a key
       **/
      getStorage: AugmentedRpc<<T = Codec>(key: StorageKey | string | Uint8Array | any, block?: Hash | Uint8Array | string) => Observable<T>>;
      /**
       * Retrieves the storage hash
       **/
      getStorageHash: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>>;
      /**
       * Retrieves the storage size
       **/
      getStorageSize: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>>;
      /**
       * Query historical storage entries (by key) starting from a start block
       **/
      queryStorage: AugmentedRpc<<T = Codec[]>(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], fromBlock?: Hash | Uint8Array | string, toBlock?: Hash | Uint8Array | string) => Observable<[Hash, T][]>>;
      /**
       * Retrieves the runtime version via subscription
       **/
      subscribeRuntimeVersion: AugmentedRpc<() => Observable<RuntimeVersion>>;
      /**
       * Subscribes to storage changes for the provided keys
       **/
      subscribeStorage: AugmentedRpc<<T = Codec[]>(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[]) => Observable<T>>;
    };
    system: {
      /**
       * Adds a reserved peer
       **/
      addReservedPeer: AugmentedRpc<(peer: Text | string) => Observable<Text>>;
      /**
       * Retrieves the chain
       **/
      chain: AugmentedRpc<() => Observable<Text>>;
      /**
       * Return health status of the node
       **/
      health: AugmentedRpc<() => Observable<Health>>;
      /**
       * Retrieves the node name
       **/
      name: AugmentedRpc<() => Observable<Text>>;
      /**
       * Returns current state of the network
       **/
      networkState: AugmentedRpc<() => Observable<NetworkState>>;
      /**
       * Returns the roles the node is running as
       **/
      nodeRoles: AugmentedRpc<() => Observable<Vec<NodeRole>>>;
      /**
       * Returns the currently connected peers
       **/
      peers: AugmentedRpc<() => Observable<Vec<PeerInfo>>>;
      /**
       * Get a custom set of properties as a JSON object, defined in the chain spec
       **/
      properties: AugmentedRpc<() => Observable<ChainProperties>>;
      /**
       * Remove a reserved peer
       **/
      removeReservedPeer: AugmentedRpc<(peerId: Text | string) => Observable<Text>>;
      /**
       * Retrieves the version of the node
       **/
      version: AugmentedRpc<() => Observable<Text>>;
    };
  }
}
