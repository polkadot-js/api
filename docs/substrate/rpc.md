## JSON-RPC

The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.

- **[account](#account)**

- **[author](#author)**

- **[chain](#chain)**

- **[contracts](#contracts)**

- **[payment](#payment)**

- **[rpc](#rpc)**

- **[state](#state)**

- **[system](#system)**


___


## account

_(Optional) Methods that retrieves account-specific information_

### nextIndex(accountId: `AccountId`): `Index`
- **jsonrpc**: account_nextIndex
- **interface**: api.rpc.account.nextIndex
- **summary**: Retrieves the next accountIndex as available on the node

___


## author

_Authoring of network items_

### hasKey(publicKey: `Bytes`, keyType: `Text`): `bool`
- **jsonrpc**: author_hasKey
- **interface**: api.rpc.author.hasKey
- **summary**: Returns true if the keystore has private keys for the given public key and key type.

### hasSessionKeys(sessionKeys: `Bytes`): `bool`
- **jsonrpc**: author_hasSessionKeys
- **interface**: api.rpc.author.hasSessionKeys
- **summary**: Returns true if the keystore has private keys for the given session public keys.

### insertKey(keyType: `Text`, suri: `Text`, publicKey: `Bytes`): `Bytes`
- **jsonrpc**: author_insertKey
- **interface**: api.rpc.author.insertKey
- **summary**: Insert a key into the keystore.

### pendingExtrinsics(): `Vec<Extrinsic>`
- **jsonrpc**: author_pendingExtrinsics
- **interface**: api.rpc.author.pendingExtrinsics
- **summary**: Returns all pending extrinsics, potentially grouped by sender

### removeExtrinsic(bytesOrHash: `Vec<ExtrinsicOrHash>`): `Vec<Hash>`
- **jsonrpc**: author_removeExtrinsic
- **interface**: api.rpc.author.removeExtrinsic
- **summary**: Remove given extrinsic from the pool and temporarily ban it to prevent reimporting

### rotateKeys(): `Bytes`
- **jsonrpc**: author_rotateKeys
- **interface**: api.rpc.author.rotateKeys
- **summary**: Generate new session keys and returns the corresponding public keys

### submitAndWatchExtrinsic(extrinsic: `Extrinsic`): `ExtrinsicStatus`
- **jsonrpc**: author_submitAndWatchExtrinsic
- **interface**: api.rpc.author.submitAndWatchExtrinsic
- **summary**: Submit and subscribe to watch an extrinsic until unsubscribed

### submitExtrinsic(extrinsic: `Extrinsic`): `Hash`
- **jsonrpc**: author_submitExtrinsic
- **interface**: api.rpc.author.submitExtrinsic
- **summary**: Submit a fully formatted extrinsic for block inclusion

___


## chain

_Retrieval of chain data_

### getBlock(hash?: `BlockHash`): `SignedBlock`
- **jsonrpc**: chain_getBlock
- **interface**: api.rpc.chain.getBlock
- **summary**: Get header and body of a relay chain block

### getBlockHash(blockNumber?: `BlockNumber`): `BlockHash`
- **jsonrpc**: chain_getBlockHash
- **interface**: api.rpc.chain.getBlockHash
- **summary**: Get the block hash for a specific block

### getFinalizedHead(): `BlockHash`
- **jsonrpc**: chain_getFinalizedHead
- **interface**: api.rpc.chain.getFinalizedHead
- **summary**: Get hash of the last finalized block in the canon chain

### getHeader(hash?: `BlockHash`): `Header`
- **jsonrpc**: chain_getHeader
- **interface**: api.rpc.chain.getHeader
- **summary**: Retrieves the header for a specific block

### subscribeFinalizedHeads(): `Header`
- **jsonrpc**: chain_subscribeFinalizedHeads
- **interface**: api.rpc.chain.subscribeFinalizedHeads
- **summary**: Retrieves the best finalized header via subscription

### subscribeNewHeads(): `Header`
- **jsonrpc**: chain_subscribeNewHeads
- **interface**: api.rpc.chain.subscribeNewHeads
- **summary**: Retrieves the best header via subscription

___


## contracts

_(Optional) Methods that performs actions on contracts_

### call(callRequest: `ContractCallRequest`, at?: `BlockHash`): `ContractExecResult`
- **jsonrpc**: contracts_call
- **interface**: api.rpc.contracts.call
- **summary**: Executes a call to a contract

### getStorage(address: `AccountId`, key: `H256`, at?: `BlockHash`): `Option<Bytes>`
- **jsonrpc**: contracts_getStorage
- **interface**: api.rpc.contracts.getStorage
- **summary**: Returns the value under a specified storage key in a contract

___


## payment

_Methods that retrieves payment information, e.g. fee calculations_

### queryInfo(extrinsic: `Bytes`, at?: `BlockHash`): `RuntimeDispatchInfo`
- **jsonrpc**: payment_queryInfo
- **interface**: api.rpc.payment.queryInfo
- **summary**: Retrieves the fee information for an encoded extrinsic

___


## rpc

_Retrieves information about the RPC endpoints_

### methods(): `RpcMethods`
- **jsonrpc**: rpc_methods
- **interface**: api.rpc.rpc.methods
- **summary**: Retrieves the list of RPC methods that are exposed by the node

___


## state

_Query of state_

### call(method: `Text`, data: `Bytes`, at?: `BlockHash`): `Bytes`
- **jsonrpc**: state_call
- **interface**: api.rpc.state.call
- **summary**: Perform a call to a builtin on the chain

### getChildKeys(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **jsonrpc**: state_getChildKeys
- **interface**: api.rpc.state.getChildKeys
- **summary**: Retrieves the keys with prefix of a specific child storage

### getChildStorage(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `StorageData`
- **jsonrpc**: state_getChildStorage
- **interface**: api.rpc.state.getChildStorage
- **summary**: Retrieves the child storage for a key

### getChildStorageHash(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `Hash`
- **jsonrpc**: state_getChildStorageHash
- **interface**: api.rpc.state.getChildStorageHash
- **summary**: Retrieves the child storage hash

### getChildStorageSize(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `u64`
- **jsonrpc**: state_getChildStorageSize
- **interface**: api.rpc.state.getChildStorageSize
- **summary**: Retrieves the child storage size

### getKeys(key: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **jsonrpc**: state_getKeys
- **interface**: api.rpc.state.getKeys
- **summary**: Retrieves the keys with a certain prefix

### getMetadata(at?: `BlockHash`): `Metadata`
- **jsonrpc**: state_getMetadata
- **interface**: api.rpc.state.getMetadata
- **summary**: Returns the runtime metadata

### getRuntimeVersion(at?: `BlockHash`): `RuntimeVersion`
- **jsonrpc**: state_getRuntimeVersion
- **interface**: api.rpc.state.getRuntimeVersion
- **summary**: Get the runtime version

### getStorage(key: `StorageKey`, at?: `BlockHash`): `StorageData`
- **jsonrpc**: state_getStorage
- **interface**: api.rpc.state.getStorage
- **summary**: Retrieves the storage for a key

### getStorageHash(key: `StorageKey`, at?: `BlockHash`): `Hash`
- **jsonrpc**: state_getStorageHash
- **interface**: api.rpc.state.getStorageHash
- **summary**: Retrieves the storage hash

### getStorageSize(key: `StorageKey`, at?: `BlockHash`): `u64`
- **jsonrpc**: state_getStorageSize
- **interface**: api.rpc.state.getStorageSize
- **summary**: Retrieves the storage size

### queryStorage(keys: `Vec<StorageKey>`, startBlock: `Hash`, at?: `BlockHash`): `Vec<StorageChangeSet>`
- **jsonrpc**: state_queryStorage
- **interface**: api.rpc.state.queryStorage
- **summary**: Query historical storage entries (by key) starting from a start block

### subscribeRuntimeVersion(): `RuntimeVersion`
- **jsonrpc**: state_subscribeRuntimeVersion
- **interface**: api.rpc.state.subscribeRuntimeVersion
- **summary**: Retrieves the runtime version via subscription

### subscribeStorage(keys: `Vec<StorageKey>`): `StorageChangeSet`
- **jsonrpc**: state_subscribeStorage
- **interface**: api.rpc.state.subscribeStorage
- **summary**: Subscribes to storage changes for the provided keys

___


## system

_Calls to retrieve system info_

### chain(): `Text`
- **jsonrpc**: system_chain
- **interface**: api.rpc.system.chain
- **summary**: Retrieves the chain

### health(): `Health`
- **jsonrpc**: system_health
- **interface**: api.rpc.system.health
- **summary**: Return health status of the node

### name(): `Text`
- **jsonrpc**: system_name
- **interface**: api.rpc.system.name
- **summary**: Retrieves the node name

### networkState(): `NetworkState`
- **jsonrpc**: system_networkState
- **interface**: api.rpc.system.networkState
- **summary**: Returns current state of the network

### peers(): `Vec<PeerInfo>`
- **jsonrpc**: system_peers
- **interface**: api.rpc.system.peers
- **summary**: Returns the currently connected peers

### properties(): `ChainProperties`
- **jsonrpc**: system_properties
- **interface**: api.rpc.system.properties
- **summary**: Get a custom set of properties as a JSON object, defined in the chain spec

### version(): `Text`
- **jsonrpc**: system_version
- **interface**: api.rpc.system.version
- **summary**: Retrieves the version of the node
