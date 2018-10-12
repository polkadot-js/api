## RPC

_The following RPC methods are the Remote Calls that are available by default and allow you to interact with the actual node, query, and submit. The RPCs are provided by Substrate itself. The RPCs are never exposed by the runtime._

---

### author

_Authoring of network items_

▸ **pendingExtrinsics**(): `PendingExtrinsics`
- **summary**: Returns all pending extrinsics, potentially grouped by sender

▸ **submitExtrinsic**(extrinsic: `Extrinsic`): `Hash`
- **summary**: Submit a fully formatted extrinsic for block inclusion
- **isSigned**: `true`

---

### chain

_Retrieval of chain data_

▸ **getBlock**(hash: `Hash`): `SignedBlock`
- **summary**: Get header and body of a relay chain block

▸ **getBlockHash**(blockNumber?: `BlockNumber`): `Hash`
- **summary**: Get the block hash for a specific block

▸ **getHead**(): `Hash`
- **summary**: Retrieves the best headerHash

▸ **getHeader**(hash: `Hash`): `Header`
- **summary**: Retrieves the header for a specific block

▸ **getRuntimeVersion**(): `RuntimeVersion`
- **summary**: Get the runtime version

▸ **getRuntimeVersionAt**(hash: `Hash`): `RuntimeVersion`
- **summary**: Get the runtime version at a specific block

▸ **newHead().subscribe**(`<CALLBACK>`): `Header`
- **summary**: Retrieves the best header via subscription
- **pubsub**: `true`

▸ **newHead().unsubscribe**(`<CALLBACK>`): `Header`
- **summary**: Unsubscribe from best header subscription
- **pubsub**: `true`

---

### state

_Query of state_

▸ **call**(method: `String`, data: `Bytes`): `Bytes`
- **summary**: Perform a call to a builtin on the chain

▸ **callAt**(method: `String`, data: `Bytes`, block: `Hash`): `Bytes`
- **summary**: Perform a call to a builtin on the chain at a specific block

▸ **getMetadata**(): `Metadata`
- **summary**: Returns the runtime metadata

▸ **getMetadataAt**(block: `Hash`): `Metadata`
- **summary**: Returns the runtime metadata at a specific block

▸ **getStorage**(key: `StorageKey`): `StorageData`
- **summary**: Retrieves the storage for a key

▸ **getStorageAt**(key: `Bytes`, block: `Hash`): `Bytes`
- **summary**: Retrieves the storage for a key at a specific block

▸ **getStorageHash**(key: `Bytes`): `Hash`
- **summary**: Retrieves the storage hash

▸ **getStorageHashAt**(key: `Bytes`, block: `Hash`): `Hash`
- **summary**: Retrieves the storage hash at a specific block

▸ **getStorageSize**(key: `Bytes`): `u64`       
- **summary**: Retrieves the storage size

▸ **getStorageSizeAt**(key: `Bytes`, block: `Hash`): `u64`
- **summary**: Retrieves the storage size at a specific block

▸ **storage**(keys: `Vec<StorageKey>`).subscribe(`<CALLBACK>`): `StorageChangeSet`
- **summary**: Subscribes to storage changes for the provided keys
- **pubsub**: `true`

▸ **storage**(keys: `Vec<StorageKey>`).unsubscribe(`<CALLBACK>`): `StorageChangeSet`
- **summary**: Unsubscribes from storage changes for the provided keys
- **pubsub**: `true`

---

### system

_Methods to retrieve system info_

▸ **chain**(): `string`
- **summary**: Retrieves the chain

▸ **name**(): `string`
- **summary**: Retrieves the node name

▸ **version**(): `string`
- **summary**: Retrieves the version of the node
