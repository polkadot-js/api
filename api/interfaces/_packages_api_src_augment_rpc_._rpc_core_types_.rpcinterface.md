**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/api/src/augment/rpc"](../modules/_packages_api_src_augment_rpc_.md) / ["rpc-core/types"](../modules/_packages_api_src_augment_rpc_._rpc_core_types_.md) / RpcInterface

# Interface: RpcInterface

## Hierarchy

* **RpcInterface**

## Index

### Properties

* [author](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#author)
* [babe](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#babe)
* [chain](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#chain)
* [childstate](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#childstate)
* [contracts](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#contracts)
* [engine](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#engine)
* [grandpa](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#grandpa)
* [offchain](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#offchain)
* [payment](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#payment)
* [rpc](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#rpc)
* [state](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#state)
* [system](_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md#system)

## Properties

### author

•  **author**: { hasKey: AugmentedRpc\<(publicKey: Bytes \| string \| Uint8Array,keyType: Text \| string) => Observable\<bool>> ; hasSessionKeys: AugmentedRpc\<(sessionKeys: Bytes \| string \| Uint8Array) => Observable\<bool>> ; insertKey: AugmentedRpc\<(keyType: Text \| string,suri: Text \| string,publicKey: Bytes \| string \| Uint8Array) => Observable\<Bytes>> ; pendingExtrinsics: AugmentedRpc\<() => Observable\<Vec\<Extrinsic>>> ; removeExtrinsic: AugmentedRpc\<(bytesOrHash: Vec\<ExtrinsicOrHash> \| (ExtrinsicOrHash \| { Hash: any  } \| { Extrinsic: any  } \| string \| Uint8Array)[]) => Observable\<Vec\<Hash>>> ; rotateKeys: AugmentedRpc\<() => Observable\<Bytes>> ; submitAndWatchExtrinsic: AugmentedRpc\<(extrinsic: IExtrinsic) => Observable\<ExtrinsicStatus>> ; submitExtrinsic: AugmentedRpc\<(extrinsic: IExtrinsic) => Observable\<Hash>>  }

*Defined in [packages/api/src/augment/rpc.ts:26](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L26)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`hasKey` | AugmentedRpc\<(publicKey: Bytes \| string \| Uint8Array,keyType: Text \| string) => Observable\<bool>> | Returns true if the keystore has private keys for the given public key and key type. |
`hasSessionKeys` | AugmentedRpc\<(sessionKeys: Bytes \| string \| Uint8Array) => Observable\<bool>> | Returns true if the keystore has private keys for the given session public keys. |
`insertKey` | AugmentedRpc\<(keyType: Text \| string,suri: Text \| string,publicKey: Bytes \| string \| Uint8Array) => Observable\<Bytes>> | Insert a key into the keystore. |
`pendingExtrinsics` | AugmentedRpc\<() => Observable\<Vec\<Extrinsic>>> | Returns all pending extrinsics, potentially grouped by sender |
`removeExtrinsic` | AugmentedRpc\<(bytesOrHash: Vec\<ExtrinsicOrHash> \| (ExtrinsicOrHash \| { Hash: any  } \| { Extrinsic: any  } \| string \| Uint8Array)[]) => Observable\<Vec\<Hash>>> | Remove given extrinsic from the pool and temporarily ban it to prevent reimporting |
`rotateKeys` | AugmentedRpc\<() => Observable\<Bytes>> | Generate new session keys and returns the corresponding public keys |
`submitAndWatchExtrinsic` | AugmentedRpc\<(extrinsic: IExtrinsic) => Observable\<ExtrinsicStatus>> | Submit and subscribe to watch an extrinsic until unsubscribed |
`submitExtrinsic` | AugmentedRpc\<(extrinsic: IExtrinsic) => Observable\<Hash>> | Submit a fully formatted extrinsic for block inclusion |

___

### babe

•  **babe**: { epochAuthorship: AugmentedRpc\<() => Observable\<HashMap\<AuthorityId, EpochAuthorship>>>  }

*Defined in [packages/api/src/augment/rpc.ts:60](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L60)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`epochAuthorship` | AugmentedRpc\<() => Observable\<HashMap\<AuthorityId, EpochAuthorship>>> | Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore |

___

### chain

•  **chain**: { getBlock: AugmentedRpc\<(hash?: BlockHash \| string \| Uint8Array) => Observable\<SignedBlock>> ; getBlockHash: AugmentedRpc\<(blockNumber?: BlockNumber \| AnyNumber \| Uint8Array) => Observable\<BlockHash>> ; getFinalizedHead: AugmentedRpc\<() => Observable\<BlockHash>> ; getHeader: AugmentedRpc\<(hash?: BlockHash \| string \| Uint8Array) => Observable\<Header>> ; subscribeAllHeads: AugmentedRpc\<() => Observable\<Header>> ; subscribeFinalizedHeads: AugmentedRpc\<() => Observable\<Header>> ; subscribeNewHeads: AugmentedRpc\<() => Observable\<Header>>  }

*Defined in [packages/api/src/augment/rpc.ts:66](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L66)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`getBlock` | AugmentedRpc\<(hash?: BlockHash \| string \| Uint8Array) => Observable\<SignedBlock>> | Get header and body of a relay chain block |
`getBlockHash` | AugmentedRpc\<(blockNumber?: BlockNumber \| AnyNumber \| Uint8Array) => Observable\<BlockHash>> | Get the block hash for a specific block |
`getFinalizedHead` | AugmentedRpc\<() => Observable\<BlockHash>> | Get hash of the last finalized block in the canon chain |
`getHeader` | AugmentedRpc\<(hash?: BlockHash \| string \| Uint8Array) => Observable\<Header>> | Retrieves the header for a specific block |
`subscribeAllHeads` | AugmentedRpc\<() => Observable\<Header>> | Retrieves the newest header via subscription |
`subscribeFinalizedHeads` | AugmentedRpc\<() => Observable\<Header>> | Retrieves the best finalized header via subscription |
`subscribeNewHeads` | AugmentedRpc\<() => Observable\<Header>> | Retrieves the best header via subscription |

___

### childstate

•  **childstate**: { getKeys: AugmentedRpc\<(childKey: PrefixedStorageKey \| string \| Uint8Array,prefix: StorageKey \| string \| Uint8Array \| any,at?: Hash \| string \| Uint8Array) => Observable\<Vec\<StorageKey>>> ; getStorage: AugmentedRpc\<(childKey: PrefixedStorageKey \| string \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: Hash \| string \| Uint8Array) => Observable\<Option\<StorageData>>> ; getStorageHash: AugmentedRpc\<(childKey: PrefixedStorageKey \| string \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: Hash \| string \| Uint8Array) => Observable\<Option\<Hash>>> ; getStorageSize: AugmentedRpc\<(childKey: PrefixedStorageKey \| string \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: Hash \| string \| Uint8Array) => Observable\<Option\<u64>>>  }

*Defined in [packages/api/src/augment/rpc.ts:96](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L96)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`getKeys` | AugmentedRpc\<(childKey: PrefixedStorageKey \| string \| Uint8Array,prefix: StorageKey \| string \| Uint8Array \| any,at?: Hash \| string \| Uint8Array) => Observable\<Vec\<StorageKey>>> | Returns the keys with prefix from a child storage, leave empty to get all the keys |
`getStorage` | AugmentedRpc\<(childKey: PrefixedStorageKey \| string \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: Hash \| string \| Uint8Array) => Observable\<Option\<StorageData>>> | Returns a child storage entry at a specific block state |
`getStorageHash` | AugmentedRpc\<(childKey: PrefixedStorageKey \| string \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: Hash \| string \| Uint8Array) => Observable\<Option\<Hash>>> | Returns the hash of a child storage entry at a block state |
`getStorageSize` | AugmentedRpc\<(childKey: PrefixedStorageKey \| string \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: Hash \| string \| Uint8Array) => Observable\<Option\<u64>>> | Returns the size of a child storage entry at a block state |

___

### contracts

•  **contracts**: { call: AugmentedRpc\<(callRequest: ContractCallRequest \| { dest?: any ; gasLimit?: any ; inputData?: any ; origin?: any ; value?: any  } \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<ContractExecResult>> ; getStorage: AugmentedRpc\<(address: AccountId \| string \| Uint8Array,key: H256 \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<Option\<Bytes>>> ; rentProjection: AugmentedRpc\<(address: AccountId \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<Option\<BlockNumber>>>  }

*Defined in [packages/api/src/augment/rpc.ts:114](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L114)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`call` | AugmentedRpc\<(callRequest: ContractCallRequest \| { dest?: any ; gasLimit?: any ; inputData?: any ; origin?: any ; value?: any  } \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<ContractExecResult>> | Executes a call to a contract |
`getStorage` | AugmentedRpc\<(address: AccountId \| string \| Uint8Array,key: H256 \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<Option\<Bytes>>> | Returns the value under a specified storage key in a contract |
`rentProjection` | AugmentedRpc\<(address: AccountId \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<Option\<BlockNumber>>> | Returns the projected time a given contract will be able to sustain paying its rent |

___

### engine

•  **engine**: { createBlock: AugmentedRpc\<(createEmpty: bool \| boolean \| Uint8Array,finalize: bool \| boolean \| Uint8Array,parentHash?: BlockHash \| string \| Uint8Array) => Observable\<CreatedBlock>> ; finalizeBlock: AugmentedRpc\<(hash: BlockHash \| string \| Uint8Array,justification?: Justification \| string \| Uint8Array) => Observable\<bool>>  }

*Defined in [packages/api/src/augment/rpc.ts:128](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L128)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`createBlock` | AugmentedRpc\<(createEmpty: bool \| boolean \| Uint8Array,finalize: bool \| boolean \| Uint8Array,parentHash?: BlockHash \| string \| Uint8Array) => Observable\<CreatedBlock>> | Instructs the manual-seal authorship task to create a new block |
`finalizeBlock` | AugmentedRpc\<(hash: BlockHash \| string \| Uint8Array,justification?: Justification \| string \| Uint8Array) => Observable\<bool>> | Instructs the manual-seal authorship task to finalize a block |

___

### grandpa

•  **grandpa**: { proveFinality: AugmentedRpc\<(begin: BlockHash \| string \| Uint8Array,end: BlockHash \| string \| Uint8Array,authoritiesSetId?: u64 \| AnyNumber \| Uint8Array) => Observable\<Option\<EncodedFinalityProofs>>> ; roundState: AugmentedRpc\<() => Observable\<ReportedRoundStates>> ; subscribeJustifications: AugmentedRpc\<() => Observable\<JustificationNotification>>  }

*Defined in [packages/api/src/augment/rpc.ts:138](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L138)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`proveFinality` | AugmentedRpc\<(begin: BlockHash \| string \| Uint8Array,end: BlockHash \| string \| Uint8Array,authoritiesSetId?: u64 \| AnyNumber \| Uint8Array) => Observable\<Option\<EncodedFinalityProofs>>> | Prove finality for the range (begin; end] hash. |
`roundState` | AugmentedRpc\<() => Observable\<ReportedRoundStates>> | Returns the state of the current best round state as well as the ongoing background rounds |
`subscribeJustifications` | AugmentedRpc\<() => Observable\<JustificationNotification>> | Subscribes to grandpa justifications |

___

### offchain

•  **offchain**: { localStorageGet: AugmentedRpc\<(kind: StorageKind \| \"\_\_UNUSED\" \| \"PERSISTENT\" \| \"LOCAL\" \| number \| Uint8Array,key: Bytes \| string \| Uint8Array) => Observable\<Option\<Bytes>>> ; localStorageSet: AugmentedRpc\<(kind: StorageKind \| \"\_\_UNUSED\" \| \"PERSISTENT\" \| \"LOCAL\" \| number \| Uint8Array,key: Bytes \| string \| Uint8Array,value: Bytes \| string \| Uint8Array) => Observable\<Null>>  }

*Defined in [packages/api/src/augment/rpc.ts:152](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L152)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`localStorageGet` | AugmentedRpc\<(kind: StorageKind \| \"\_\_UNUSED\" \| \"PERSISTENT\" \| \"LOCAL\" \| number \| Uint8Array,key: Bytes \| string \| Uint8Array) => Observable\<Option\<Bytes>>> | Get offchain local storage under given key and prefix |
`localStorageSet` | AugmentedRpc\<(kind: StorageKind \| \"\_\_UNUSED\" \| \"PERSISTENT\" \| \"LOCAL\" \| number \| Uint8Array,key: Bytes \| string \| Uint8Array,value: Bytes \| string \| Uint8Array) => Observable\<Null>> | Set offchain local storage under given key and prefix |

___

### payment

•  **payment**: { queryInfo: AugmentedRpc\<(extrinsic: Bytes \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<RuntimeDispatchInfo>>  }

*Defined in [packages/api/src/augment/rpc.ts:162](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L162)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`queryInfo` | AugmentedRpc\<(extrinsic: Bytes \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<RuntimeDispatchInfo>> | Retrieves the fee information for an encoded extrinsic |

___

### rpc

•  **rpc**: { methods: AugmentedRpc\<() => Observable\<RpcMethods>>  }

*Defined in [packages/api/src/augment/rpc.ts:168](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L168)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`methods` | AugmentedRpc\<() => Observable\<RpcMethods>> | Retrieves the list of RPC methods that are exposed by the node |

___

### state

•  **state**: { call: AugmentedRpc\<(method: Text \| string,data: Bytes \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<Bytes>> ; getChildKeys: AugmentedRpc\<(childStorageKey: StorageKey \| string \| Uint8Array \| any,childDefinition: StorageKey \| string \| Uint8Array \| any,childType: u32 \| AnyNumber \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Vec\<StorageKey>>> ; getChildStorage: AugmentedRpc\<(childStorageKey: StorageKey \| string \| Uint8Array \| any,childDefinition: StorageKey \| string \| Uint8Array \| any,childType: u32 \| AnyNumber \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<StorageData>> ; getChildStorageHash: AugmentedRpc\<(childStorageKey: StorageKey \| string \| Uint8Array \| any,childDefinition: StorageKey \| string \| Uint8Array \| any,childType: u32 \| AnyNumber \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Hash>> ; getChildStorageSize: AugmentedRpc\<(childStorageKey: StorageKey \| string \| Uint8Array \| any,childDefinition: StorageKey \| string \| Uint8Array \| any,childType: u32 \| AnyNumber \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<u64>> ; getKeys: AugmentedRpc\<(key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Vec\<StorageKey>>> ; getKeysPaged: AugmentedRpc\<(key: StorageKey \| string \| Uint8Array \| any,count: u32 \| AnyNumber \| Uint8Array,startKey?: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Vec\<StorageKey>>> ; getMetadata: AugmentedRpc\<(at?: BlockHash \| string \| Uint8Array) => Observable\<Metadata>> ; getPairs: AugmentedRpc\<(prefix: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Vec\<KeyValue>>> ; getReadProof: AugmentedRpc\<(keys: Vec\<StorageKey> \| (StorageKey \| string \| Uint8Array \| any)[],at?: BlockHash \| string \| Uint8Array) => Observable\<ReadProof>> ; getRuntimeVersion: AugmentedRpc\<(at?: BlockHash \| string \| Uint8Array) => Observable\<RuntimeVersion>> ; getStorage: AugmentedRpc\<\<T>(key: StorageKey \| string \| Uint8Array \| any,block?: Hash \| Uint8Array \| string) => Observable\<T>> ; getStorageHash: AugmentedRpc\<(key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Hash>> ; getStorageSize: AugmentedRpc\<(key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<u64>> ; queryStorage: AugmentedRpc\<\<T>(keys: Vec\<StorageKey> \| (StorageKey \| string \| Uint8Array \| any)[],fromBlock?: Hash \| Uint8Array \| string,toBlock?: Hash \| Uint8Array \| string) => Observable\<[Hash, T][]>> ; queryStorageAt: AugmentedRpc\<\<T>(keys: Vec\<StorageKey> \| (StorageKey \| string \| Uint8Array \| any)[],at?: Hash \| Uint8Array \| string) => Observable\<T>> ; subscribeRuntimeVersion: AugmentedRpc\<() => Observable\<RuntimeVersion>> ; subscribeStorage: AugmentedRpc\<\<T>(keys?: Vec\<StorageKey> \| (StorageKey \| string \| Uint8Array \| any)[]) => Observable\<T>>  }

*Defined in [packages/api/src/augment/rpc.ts:174](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L174)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`call` | AugmentedRpc\<(method: Text \| string,data: Bytes \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<Bytes>> | Perform a call to a builtin on the chain |
`getChildKeys` | AugmentedRpc\<(childStorageKey: StorageKey \| string \| Uint8Array \| any,childDefinition: StorageKey \| string \| Uint8Array \| any,childType: u32 \| AnyNumber \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Vec\<StorageKey>>> | Retrieves the keys with prefix of a specific child storage |
`getChildStorage` | AugmentedRpc\<(childStorageKey: StorageKey \| string \| Uint8Array \| any,childDefinition: StorageKey \| string \| Uint8Array \| any,childType: u32 \| AnyNumber \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<StorageData>> | Retrieves the child storage for a key |
`getChildStorageHash` | AugmentedRpc\<(childStorageKey: StorageKey \| string \| Uint8Array \| any,childDefinition: StorageKey \| string \| Uint8Array \| any,childType: u32 \| AnyNumber \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Hash>> | Retrieves the child storage hash |
`getChildStorageSize` | AugmentedRpc\<(childStorageKey: StorageKey \| string \| Uint8Array \| any,childDefinition: StorageKey \| string \| Uint8Array \| any,childType: u32 \| AnyNumber \| Uint8Array,key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<u64>> | Retrieves the child storage size |
`getKeys` | AugmentedRpc\<(key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Vec\<StorageKey>>> | Retrieves the keys with a certain prefix |
`getKeysPaged` | AugmentedRpc\<(key: StorageKey \| string \| Uint8Array \| any,count: u32 \| AnyNumber \| Uint8Array,startKey?: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Vec\<StorageKey>>> | Returns the keys with prefix with pagination support. |
`getMetadata` | AugmentedRpc\<(at?: BlockHash \| string \| Uint8Array) => Observable\<Metadata>> | Returns the runtime metadata |
`getPairs` | AugmentedRpc\<(prefix: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Vec\<KeyValue>>> | Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged) |
`getReadProof` | AugmentedRpc\<(keys: Vec\<StorageKey> \| (StorageKey \| string \| Uint8Array \| any)[],at?: BlockHash \| string \| Uint8Array) => Observable\<ReadProof>> | Returns proof of storage entries at a specific block state |
`getRuntimeVersion` | AugmentedRpc\<(at?: BlockHash \| string \| Uint8Array) => Observable\<RuntimeVersion>> | Get the runtime version |
`getStorage` | AugmentedRpc\<\<T>(key: StorageKey \| string \| Uint8Array \| any,block?: Hash \| Uint8Array \| string) => Observable\<T>> | Retrieves the storage for a key |
`getStorageHash` | AugmentedRpc\<(key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<Hash>> | Retrieves the storage hash |
`getStorageSize` | AugmentedRpc\<(key: StorageKey \| string \| Uint8Array \| any,at?: BlockHash \| string \| Uint8Array) => Observable\<u64>> | Retrieves the storage size |
`queryStorage` | AugmentedRpc\<\<T>(keys: Vec\<StorageKey> \| (StorageKey \| string \| Uint8Array \| any)[],fromBlock?: Hash \| Uint8Array \| string,toBlock?: Hash \| Uint8Array \| string) => Observable\<[Hash, T][]>> | Query historical storage entries (by key) starting from a start block |
`queryStorageAt` | AugmentedRpc\<\<T>(keys: Vec\<StorageKey> \| (StorageKey \| string \| Uint8Array \| any)[],at?: Hash \| Uint8Array \| string) => Observable\<T>> | Query storage entries (by key) starting at block hash given as the second parameter |
`subscribeRuntimeVersion` | AugmentedRpc\<() => Observable\<RuntimeVersion>> | Retrieves the runtime version via subscription |
`subscribeStorage` | AugmentedRpc\<\<T>(keys?: Vec\<StorageKey> \| (StorageKey \| string \| Uint8Array \| any)[]) => Observable\<T>> | Subscribes to storage changes for the provided keys |

___

### system

•  **system**: { accountNextIndex: AugmentedRpc\<(accountId: AccountId \| string \| Uint8Array) => Observable\<Index>> ; addReservedPeer: AugmentedRpc\<(peer: Text \| string) => Observable\<Text>> ; chain: AugmentedRpc\<() => Observable\<Text>> ; chainType: AugmentedRpc\<() => Observable\<ChainType>> ; dryRun: AugmentedRpc\<(extrinsic: Bytes \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<ApplyExtrinsicResult>> ; health: AugmentedRpc\<() => Observable\<Health>> ; localListenAddresses: AugmentedRpc\<() => Observable\<Vec\<Text>>> ; localPeerId: AugmentedRpc\<() => Observable\<Text>> ; name: AugmentedRpc\<() => Observable\<Text>> ; networkState: AugmentedRpc\<() => Observable\<NetworkState>> ; nodeRoles: AugmentedRpc\<() => Observable\<Vec\<NodeRole>>> ; peers: AugmentedRpc\<() => Observable\<Vec\<PeerInfo>>> ; properties: AugmentedRpc\<() => Observable\<ChainProperties>> ; removeReservedPeer: AugmentedRpc\<(peerId: Text \| string) => Observable\<Text>> ; version: AugmentedRpc\<() => Observable\<Text>>  }

*Defined in [packages/api/src/augment/rpc.ts:248](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/augment/rpc.ts#L248)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`accountNextIndex` | AugmentedRpc\<(accountId: AccountId \| string \| Uint8Array) => Observable\<Index>> | Retrieves the next accountIndex as available on the node |
`addReservedPeer` | AugmentedRpc\<(peer: Text \| string) => Observable\<Text>> | Adds a reserved peer |
`chain` | AugmentedRpc\<() => Observable\<Text>> | Retrieves the chain |
`chainType` | AugmentedRpc\<() => Observable\<ChainType>> | Retrieves the chain type |
`dryRun` | AugmentedRpc\<(extrinsic: Bytes \| string \| Uint8Array,at?: BlockHash \| string \| Uint8Array) => Observable\<ApplyExtrinsicResult>> | Dry run an extrinsic at a given block |
`health` | AugmentedRpc\<() => Observable\<Health>> | Return health status of the node |
`localListenAddresses` | AugmentedRpc\<() => Observable\<Vec\<Text>>> | The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example |
`localPeerId` | AugmentedRpc\<() => Observable\<Text>> | Returns the base58-encoded PeerId of the node |
`name` | AugmentedRpc\<() => Observable\<Text>> | Retrieves the node name |
`networkState` | AugmentedRpc\<() => Observable\<NetworkState>> | Returns current state of the network |
`nodeRoles` | AugmentedRpc\<() => Observable\<Vec\<NodeRole>>> | Returns the roles the node is running as |
`peers` | AugmentedRpc\<() => Observable\<Vec\<PeerInfo>>> | Returns the currently connected peers |
`properties` | AugmentedRpc\<() => Observable\<ChainProperties>> | Get a custom set of properties as a JSON object, defined in the chain spec |
`removeReservedPeer` | AugmentedRpc\<(peerId: Text \| string) => Observable\<Text>> | Remove a reserved peer |
`version` | AugmentedRpc\<() => Observable\<Text>> | Retrieves the version of the node |
