[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/metadata/src/Decorated/storage/fromMetadata/substrate"](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md)

# Module: "packages/metadata/src/Decorated/storage/fromMetadata/substrate"

## Index

### Variables

* [changesTrieConfig](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#const-changestrieconfig)
* [childStorageKeyPrefix](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#const-childstoragekeyprefix)
* [code](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#const-code)
* [extrinsicIndex](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#const-extrinsicindex)
* [heapPages](_packages_metadata_src_decorated_storage_frommetadata_substrate_.md#const-heappages)

## Variables

### `Const` changesTrieConfig

• **changesTrieConfig**: *function* = createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:49](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L49)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` childStorageKeyPrefix

• **childStorageKeyPrefix**: *function* = createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
  documentation: 'Prefix of child storage keys.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:54](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L54)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` code

• **code**: *function* = createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:34](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L34)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` extrinsicIndex

• **extrinsicIndex**: *function* = createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:44](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L44)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` heapPages

• **heapPages**: *function* = createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:39](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L39)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |
