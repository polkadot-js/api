---
title: JSON-RPC
---

The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.

- **[author](#author)**

- **[babe](#babe)**

- **[chain](#chain)**

- **[childstate](#childstate)**

- **[contracts](#contracts)**

- **[engine](#engine)**

- **[grandpa](#grandpa)**

- **[offchain](#offchain)**

- **[payment](#payment)**

- **[rpc](#rpc)**

- **[state](#state)**

- **[system](#system)**


___


## author
 
### hasKey(publicKey: `Bytes`, keyType: `Text`): `bool`
- **interface**: `api.rpc.author.hasKey`
- **jsonrpc**: `author_hasKey`
- **summary**: Returns true if the keystore has private keys for the given public key and key type.
 
### hasSessionKeys(sessionKeys: `Bytes`): `bool`
- **interface**: `api.rpc.author.hasSessionKeys`
- **jsonrpc**: `author_hasSessionKeys`
- **summary**: Returns true if the keystore has private keys for the given session public keys.
 
### insertKey(keyType: `Text`, suri: `Text`, publicKey: `Bytes`): `Bytes`
- **interface**: `api.rpc.author.insertKey`
- **jsonrpc**: `author_insertKey`
- **summary**: Insert a key into the keystore.
 
### pendingExtrinsics(): `Vec<Extrinsic>`
- **interface**: `api.rpc.author.pendingExtrinsics`
- **jsonrpc**: `author_pendingExtrinsics`
- **summary**: Returns all pending extrinsics, potentially grouped by sender
 
### removeExtrinsic(bytesOrHash: `Vec<ExtrinsicOrHash>`): `Vec<Hash>`
- **interface**: `api.rpc.author.removeExtrinsic`
- **jsonrpc**: `author_removeExtrinsic`
- **summary**: Remove given extrinsic from the pool and temporarily ban it to prevent reimporting
 
### rotateKeys(): `Bytes`
- **interface**: `api.rpc.author.rotateKeys`
- **jsonrpc**: `author_rotateKeys`
- **summary**: Generate new session keys and returns the corresponding public keys
 
### submitAndWatchExtrinsic(extrinsic: `Extrinsic`): `ExtrinsicStatus`
- **interface**: `api.rpc.author.submitAndWatchExtrinsic`
- **jsonrpc**: `author_submitAndWatchExtrinsic`
- **summary**: Submit and subscribe to watch an extrinsic until unsubscribed
 
### submitExtrinsic(extrinsic: `Extrinsic`): `Hash`
- **interface**: `api.rpc.author.submitExtrinsic`
- **jsonrpc**: `author_submitExtrinsic`
- **summary**: Submit a fully formatted extrinsic for block inclusion

___


## babe
 
### epochAuthorship(): `HashMap<AuthorityId, EpochAuthorship>`
- **interface**: `api.rpc.babe.epochAuthorship`
- **jsonrpc**: `babe_epochAuthorship`
- **summary**: Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore

___


## chain
 
### getBlock(hash?: `BlockHash`): `SignedBlock`
- **interface**: `api.rpc.chain.getBlock`
- **jsonrpc**: `chain_getBlock`
- **summary**: Get header and body of a relay chain block
 
### getBlockHash(blockNumber?: `BlockNumber`): `BlockHash`
- **interface**: `api.rpc.chain.getBlockHash`
- **jsonrpc**: `chain_getBlockHash`
- **summary**: Get the block hash for a specific block
 
### getFinalizedHead(): `BlockHash`
- **interface**: `api.rpc.chain.getFinalizedHead`
- **jsonrpc**: `chain_getFinalizedHead`
- **summary**: Get hash of the last finalized block in the canon chain
 
### getHeader(hash?: `BlockHash`): `Header`
- **interface**: `api.rpc.chain.getHeader`
- **jsonrpc**: `chain_getHeader`
- **summary**: Retrieves the header for a specific block
 
### subscribeAllHeads(): `Header`
- **interface**: `api.rpc.chain.subscribeAllHeads`
- **jsonrpc**: `chain_subscribeAllHeads`
- **summary**: Retrieves the newest header via subscription
 
### subscribeFinalizedHeads(): `Header`
- **interface**: `api.rpc.chain.subscribeFinalizedHeads`
- **jsonrpc**: `chain_subscribeFinalizedHeads`
- **summary**: Retrieves the best finalized header via subscription
 
### subscribeNewHeads(): `Header`
- **interface**: `api.rpc.chain.subscribeNewHeads`
- **jsonrpc**: `chain_subscribeNewHeads`
- **summary**: Retrieves the best header via subscription

___


## childstate
 
### getKeys(childKey: `PrefixedStorageKey`, prefix: `StorageKey`, at?: `Hash`): `Vec<StorageKey>`
- **interface**: `api.rpc.childstate.getKeys`
- **jsonrpc**: `childstate_getKeys`
- **summary**: Returns the keys with prefix from a child storage, leave empty to get all the keys
 
### getStorage(childKey: `PrefixedStorageKey`, key: `StorageKey`, at?: `Hash`): `Option<StorageData>`
- **interface**: `api.rpc.childstate.getStorage`
- **jsonrpc**: `childstate_getStorage`
- **summary**: Returns a child storage entry at a specific block state
 
### getStorageHash(childKey: `PrefixedStorageKey`, key: `StorageKey`, at?: `Hash`): `Option<Hash>`
- **interface**: `api.rpc.childstate.getStorageHash`
- **jsonrpc**: `childstate_getStorageHash`
- **summary**: Returns the hash of a child storage entry at a block state
 
### getStorageSize(childKey: `PrefixedStorageKey`, key: `StorageKey`, at?: `Hash`): `Option<u64>`
- **interface**: `api.rpc.childstate.getStorageSize`
- **jsonrpc**: `childstate_getStorageSize`
- **summary**: Returns the size of a child storage entry at a block state

___


## contracts
 
### call(callRequest: `ContractCallRequest`, at?: `BlockHash`): `ContractExecResult`
- **interface**: `api.rpc.contracts.call`
- **jsonrpc**: `contracts_call`
- **summary**: Executes a call to a contract
 
### getStorage(address: `AccountId`, key: `H256`, at?: `BlockHash`): `Option<Bytes>`
- **interface**: `api.rpc.contracts.getStorage`
- **jsonrpc**: `contracts_getStorage`
- **summary**: Returns the value under a specified storage key in a contract
 
### rentProjection(address: `AccountId`, at?: `BlockHash`): `Option<BlockNumber>`
- **interface**: `api.rpc.contracts.rentProjection`
- **jsonrpc**: `contracts_rentProjection`
- **summary**: Returns the projected time a given contract will be able to sustain paying its rent

___


## engine
 
### createBlock(createEmpty: `bool`, finalize: `bool`, parentHash?: `BlockHash`): `CreatedBlock`
- **interface**: `api.rpc.engine.createBlock`
- **jsonrpc**: `engine_createBlock`
- **summary**: Instructs the manual-seal authorship task to create a new block
 
### finalizeBlock(hash: `BlockHash`, justification?: `Justification`): `bool`
- **interface**: `api.rpc.engine.finalizeBlock`
- **jsonrpc**: `engine_finalizeBlock`
- **summary**: Instructs the manual-seal authorship task to finalize a block

___


## grandpa
 
### proveFinality(begin: `BlockHash`, end: `BlockHash`, authoritiesSetId?: `u64`): `Option<EncodedFinalityProofs>`
- **interface**: `api.rpc.grandpa.proveFinality`
- **jsonrpc**: `grandpa_proveFinality`
- **summary**: Prove finality for the range (begin; end] hash.
 
### roundState(): `ReportedRoundStates`
- **interface**: `api.rpc.grandpa.roundState`
- **jsonrpc**: `grandpa_roundState`
- **summary**: Returns the state of the current best round state as well as the ongoing background rounds
 
### subscribeJustifications(): `JustificationNotification`
- **interface**: `api.rpc.grandpa.subscribeJustifications`
- **jsonrpc**: `grandpa_subscribeJustifications`
- **summary**: Subscribes to grandpa justifications

___


## offchain
 
### localStorageGet(kind: `StorageKind`, key: `Bytes`): `Option<Bytes>`
- **interface**: `api.rpc.offchain.localStorageGet`
- **jsonrpc**: `offchain_localStorageGet`
- **summary**: Get offchain local storage under given key and prefix
 
### localStorageSet(kind: `StorageKind`, key: `Bytes`, value: `Bytes`): `Null`
- **interface**: `api.rpc.offchain.localStorageSet`
- **jsonrpc**: `offchain_localStorageSet`
- **summary**: Set offchain local storage under given key and prefix

___


## payment
 
### queryInfo(extrinsic: `Bytes`, at?: `BlockHash`): `RuntimeDispatchInfo`
- **interface**: `api.rpc.payment.queryInfo`
- **jsonrpc**: `payment_queryInfo`
- **summary**: Retrieves the fee information for an encoded extrinsic

___


## rpc
 
### methods(): `RpcMethods`
- **interface**: `api.rpc.rpc.methods`
- **jsonrpc**: `rpc_methods`
- **summary**: Retrieves the list of RPC methods that are exposed by the node

___


## state
 
### call(method: `Text`, data: `Bytes`, at?: `BlockHash`): `Bytes`
- **interface**: `api.rpc.state.call`
- **jsonrpc**: `state_call`
- **summary**: Perform a call to a builtin on the chain
 
### getChildKeys(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **interface**: `api.rpc.state.getChildKeys`
- **jsonrpc**: `state_getChildKeys`
- **summary**: Retrieves the keys with prefix of a specific child storage
 
### getChildStorage(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `StorageData`
- **interface**: `api.rpc.state.getChildStorage`
- **jsonrpc**: `state_getChildStorage`
- **summary**: Retrieves the child storage for a key
 
### getChildStorageHash(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `Hash`
- **interface**: `api.rpc.state.getChildStorageHash`
- **jsonrpc**: `state_getChildStorageHash`
- **summary**: Retrieves the child storage hash
 
### getChildStorageSize(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `u64`
- **interface**: `api.rpc.state.getChildStorageSize`
- **jsonrpc**: `state_getChildStorageSize`
- **summary**: Retrieves the child storage size
 
### getKeys(key: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **interface**: `api.rpc.state.getKeys`
- **jsonrpc**: `state_getKeys`
- **summary**: Retrieves the keys with a certain prefix
 
### getKeysPaged(key: `StorageKey`, count: `u32`, startKey?: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **interface**: `api.rpc.state.getKeysPaged`
- **jsonrpc**: `state_getKeysPaged`
- **summary**: Returns the keys with prefix with pagination support.
 
### getMetadata(at?: `BlockHash`): `Metadata`
- **interface**: `api.rpc.state.getMetadata`
- **jsonrpc**: `state_getMetadata`
- **summary**: Returns the runtime metadata
 
### getPairs(prefix: `StorageKey`, at?: `BlockHash`): `Vec<KeyValue>`
- **interface**: `api.rpc.state.getPairs`
- **jsonrpc**: `state_getPairs`
- **summary**: Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)
 
### getReadProof(keys: `Vec<StorageKey>`, at?: `BlockHash`): `ReadProof`
- **interface**: `api.rpc.state.getReadProof`
- **jsonrpc**: `state_getReadProof`
- **summary**: Returns proof of storage entries at a specific block state
 
### getRuntimeVersion(at?: `BlockHash`): `RuntimeVersion`
- **interface**: `api.rpc.state.getRuntimeVersion`
- **jsonrpc**: `state_getRuntimeVersion`
- **summary**: Get the runtime version
 
### getStorage(key: `StorageKey`, at?: `BlockHash`): `StorageData`
- **interface**: `api.rpc.state.getStorage`
- **jsonrpc**: `state_getStorage`
- **summary**: Retrieves the storage for a key
 
### getStorageHash(key: `StorageKey`, at?: `BlockHash`): `Hash`
- **interface**: `api.rpc.state.getStorageHash`
- **jsonrpc**: `state_getStorageHash`
- **summary**: Retrieves the storage hash
 
### getStorageSize(key: `StorageKey`, at?: `BlockHash`): `u64`
- **interface**: `api.rpc.state.getStorageSize`
- **jsonrpc**: `state_getStorageSize`
- **summary**: Retrieves the storage size
 
### queryStorage(keys: `Vec<StorageKey>`, fromBlock: `Hash`, toBlock?: `BlockHash`): `Vec<StorageChangeSet>`
- **interface**: `api.rpc.state.queryStorage`
- **jsonrpc**: `state_queryStorage`
- **summary**: Query historical storage entries (by key) starting from a start block
 
### queryStorageAt(keys: `Vec<StorageKey>`, at?: `BlockHash`): `Vec<StorageChangeSet>`
- **interface**: `api.rpc.state.queryStorageAt`
- **jsonrpc**: `state_queryStorageAt`
- **summary**: Query storage entries (by key) starting at block hash given as the second parameter
 
### subscribeRuntimeVersion(): `RuntimeVersion`
- **interface**: `api.rpc.state.subscribeRuntimeVersion`
- **jsonrpc**: `state_subscribeRuntimeVersion`
- **summary**: Retrieves the runtime version via subscription
 
### subscribeStorage(keys?: `Vec<StorageKey>`): `StorageChangeSet`
- **interface**: `api.rpc.state.subscribeStorage`
- **jsonrpc**: `state_subscribeStorage`
- **summary**: Subscribes to storage changes for the provided keys

___


## system
 
### accountNextIndex(accountId: `AccountId`): `Index`
- **interface**: `api.rpc.system.accountNextIndex`
- **jsonrpc**: `system_accountNextIndex`
- **summary**: Retrieves the next accountIndex as available on the node
 
### addReservedPeer(peer: `Text`): `Text`
- **interface**: `api.rpc.system.addReservedPeer`
- **jsonrpc**: `system_addReservedPeer`
- **summary**: Adds a reserved peer
 
### chain(): `Text`
- **interface**: `api.rpc.system.chain`
- **jsonrpc**: `system_chain`
- **summary**: Retrieves the chain
 
### chainType(): `ChainType`
- **interface**: `api.rpc.system.chainType`
- **jsonrpc**: `system_chainType`
- **summary**: Retrieves the chain type
 
### dryRun(extrinsic: `Bytes`, at?: `BlockHash`): `ApplyExtrinsicResult`
- **interface**: `api.rpc.system.dryRun`
- **jsonrpc**: `system_dryRun`
- **summary**: Dry run an extrinsic at a given block
 
### health(): `Health`
- **interface**: `api.rpc.system.health`
- **jsonrpc**: `system_health`
- **summary**: Return health status of the node
 
### localListenAddresses(): `Vec<Text>`
- **interface**: `api.rpc.system.localListenAddresses`
- **jsonrpc**: `system_localListenAddresses`
- **summary**: The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example
 
### localPeerId(): `Text`
- **interface**: `api.rpc.system.localPeerId`
- **jsonrpc**: `system_localPeerId`
- **summary**: Returns the base58-encoded PeerId of the node
 
### name(): `Text`
- **interface**: `api.rpc.system.name`
- **jsonrpc**: `system_name`
- **summary**: Retrieves the node name
 
### networkState(): `NetworkState`
- **interface**: `api.rpc.system.networkState`
- **jsonrpc**: `system_networkState`
- **summary**: Returns current state of the network
 
### nodeRoles(): `Vec<NodeRole>`
- **interface**: `api.rpc.system.nodeRoles`
- **jsonrpc**: `system_nodeRoles`
- **summary**: Returns the roles the node is running as
 
### peers(): `Vec<PeerInfo>`
- **interface**: `api.rpc.system.peers`
- **jsonrpc**: `system_peers`
- **summary**: Returns the currently connected peers
 
### properties(): `ChainProperties`
- **interface**: `api.rpc.system.properties`
- **jsonrpc**: `system_properties`
- **summary**: Get a custom set of properties as a JSON object, defined in the chain spec
 
### removeReservedPeer(peerId: `Text`): `Text`
- **interface**: `api.rpc.system.removeReservedPeer`
- **jsonrpc**: `system_removeReservedPeer`
- **summary**: Remove a reserved peer
 
### version(): `Text`
- **interface**: `api.rpc.system.version`
- **jsonrpc**: `system_version`
- **summary**: Retrieves the version of the node
