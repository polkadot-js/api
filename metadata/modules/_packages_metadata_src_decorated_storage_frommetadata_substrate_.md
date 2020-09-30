**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/metadata/src/Decorated/storage/fromMetadata/substrate"

# Module: "packages/metadata/src/Decorated/storage/fromMetadata/substrate"

## Index

### Variables

* [changesTrieConfig](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#changestrieconfig)
* [childStorageKeyPrefix](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#childstoragekeyprefix)
* [code](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#code)
* [extrinsicIndex](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#extrinsicindex)
* [heapPages](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#heappages)

## Variables

### changesTrieConfig

• `Const` **changesTrieConfig**: (registry: Registry,metaVersion: number) => StorageEntry = createRuntimeFunction('changesTrieConfig', ':changes\_trie', { documentation: 'Changes trie configuration is stored under this key.', type: 'u32'})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:48](https://github.com/polkadot-js/api/blob/9d548f787/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L48)*

___

### childStorageKeyPrefix

• `Const` **childStorageKeyPrefix**: (registry: Registry,metaVersion: number) => StorageEntry = createRuntimeFunction('childStorageKeyPrefix', ':child\_storage:', { documentation: 'Prefix of child storage keys.', type: 'u32'})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:53](https://github.com/polkadot-js/api/blob/9d548f787/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L53)*

___

### code

• `Const` **code**: (registry: Registry,metaVersion: number) => StorageEntry = createRuntimeFunction('code', ':code', { documentation: 'Wasm code of the runtime.', type: 'Bytes'})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:33](https://github.com/polkadot-js/api/blob/9d548f787/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L33)*

___

### extrinsicIndex

• `Const` **extrinsicIndex**: (registry: Registry,metaVersion: number) => StorageEntry = createRuntimeFunction('extrinsicIndex', ':extrinsic\_index', { documentation: 'Current extrinsic index (u32) is stored under this key.', type: 'u32'})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:43](https://github.com/polkadot-js/api/blob/9d548f787/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L43)*

___

### heapPages

• `Const` **heapPages**: (registry: Registry,metaVersion: number) => StorageEntry = createRuntimeFunction('heapPages', ':heappages', { documentation: 'Number of wasm linear memory pages required for execution of the runtime.', type: 'u64'})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:38](https://github.com/polkadot-js/api/blob/9d548f787/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L38)*
