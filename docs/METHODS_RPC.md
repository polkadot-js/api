## JSON-RPC

_The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit. The RPCs are provided by Substrate itself._
- **[author](#author)**

- **[chain](#chain)**

- **[state](#state)**

- **[system](#system)**


___


### author

_Authoring of network items_

▸ **pendingExtrinsics**(): `PendingExtrinsics`
- **summary**: Returns all pending extrinsics, potentially grouped by sender

▸ **submitAndWatchExtrinsic**(extrinsic: `Extrinsic`): `ExtrinsicStatus`
- **summary**: Subscribe and watch an extrinsic until unsubscribed

▸ **submitExtrinsic**(extrinsic: `Extrinsic`): `Hash`
- **summary**: Submit a fully formatted extrinsic for block inclusion

___


### chain

_Retrieval of chain data_

▸ **getBlock**(hash?: `Hash`): `SignedBlock`
- **summary**: Get header and body of a relay chain block

▸ **getBlockHash**(blockNumber?: `BlockNumber`): `Hash`
- **summary**: Get the block hash for a specific block

▸ **getFinalisedHead**(): `Hash`
- **summary**: Get hash of the last finalised block in the canon chain

▸ **getHeader**(hash?: `Hash`): `Header`
- **summary**: Retrieves the header for a specific block

▸ **getRuntimeVersion**(hash?: `Hash`): `RuntimeVersion`
- **summary**: Get the runtime version (alias of state_getRuntimeVersion)

▸ **subscribeFinalisedHeads**(): `Header`
- **summary**: Retrieves the best finalised header via subscription

▸ **subscribeNewHead**(): `Header`
- **summary**: Retrieves the best header via subscription

▸ **subscribeRuntimeVersion**(): `RuntimeVersion`
- **summary**: Retrieves the runtime version via subscription

___


### state

_Query of state_

▸ **call**(method: `Text`, data: `Bytes`, block?: `Hash`): `Bytes`
- **summary**: Perform a call to a builtin on the chain

▸ **getMetadata**(block?: `Hash`): `Metadata`
- **summary**: Returns the runtime metadata

▸ **getRuntimeVersion**(hash?: `Hash`): `RuntimeVersion`
- **summary**: Get the runtime version

▸ **getStorage**(key: `StorageKey`, block?: `Hash`): `StorageData`
- **summary**: Retrieves the storage for a key

▸ **getStorageHash**(key: `StorageKey`, block?: `Hash`): `Hash`
- **summary**: Retrieves the storage hash

▸ **getStorageSize**(key: `StorageKey`, block?: `Hash`): `u64`
- **summary**: Retrieves the storage size

▸ **queryStorage**(keys: `Vec<StorageKey>`, startBlock: `Hash`, block?: `Hash`): `Vec<StorageChangeSet>`
- **summary**: Query historical storage entries (by key) starting from a start block

▸ **subscribeStorage**(keys: `Vec<StorageKey>`): `StorageChangeSet`
- **summary**: Subscribes to storage changes for the provided keys

___


### system

_Methods to retrieve system info_

▸ **chain**(): `Text`
- **summary**: Retrieves the chain

▸ **health**(): `Health`
- **summary**: Return health status of the node

▸ **name**(): `Text`
- **summary**: Retrieves the node name

▸ **networkState**(): `NetworkState`
- **summary**: Returns current state of the network

▸ **peers**(): `Vec<PeerInfo>`
- **summary**: Returns the currently connected peers

▸ **properties**(): `ChainProperties`
- **summary**: Get a custom set of properties as a JSON object, defined in the chain spec

▸ **version**(): `Text`
- **summary**: Retrieves the version of the node
