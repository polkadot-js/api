**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/primitive/StorageKey"](../modules/_packages_types_src_primitive_storagekey_.md) / StorageEntry

# Interface: StorageEntry

## Hierarchy

* **StorageEntry**

## Callable

▸ (`arg?`: any): [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/primitive/StorageKey.ts:12](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/primitive/StorageKey.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`arg?` | any |

**Returns:** [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

## Index

### Properties

* [iterKey](_packages_types_src_primitive_storagekey_.storageentry.md#iterkey)
* [keyPrefix](_packages_types_src_primitive_storagekey_.storageentry.md#keyprefix)
* [meta](_packages_types_src_primitive_storagekey_.storageentry.md#meta)
* [method](_packages_types_src_primitive_storagekey_.storageentry.md#method)
* [prefix](_packages_types_src_primitive_storagekey_.storageentry.md#prefix)
* [section](_packages_types_src_primitive_storagekey_.storageentry.md#section)
* [toJSON](_packages_types_src_primitive_storagekey_.storageentry.md#tojson)

## Properties

### iterKey

• `Optional` **iterKey**: undefined \| (arg?: any) => [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) & [Codec](_packages_types_src_types_codec_.codec.md)

*Defined in [packages/types/src/primitive/StorageKey.ts:14](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/primitive/StorageKey.ts#L14)*

___

### keyPrefix

•  **keyPrefix**: (arg?: any) => [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/primitive/StorageKey.ts:15](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/primitive/StorageKey.ts#L15)*

___

### meta

•  **meta**: StorageEntryMetadataLatest

*Defined in [packages/types/src/primitive/StorageKey.ts:16](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/primitive/StorageKey.ts#L16)*

___

### method

•  **method**: string

*Defined in [packages/types/src/primitive/StorageKey.ts:17](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/primitive/StorageKey.ts#L17)*

___

### prefix

•  **prefix**: string

*Defined in [packages/types/src/primitive/StorageKey.ts:18](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/primitive/StorageKey.ts#L18)*

___

### section

•  **section**: string

*Defined in [packages/types/src/primitive/StorageKey.ts:19](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/primitive/StorageKey.ts#L19)*

___

### toJSON

•  **toJSON**: () => any

*Defined in [packages/types/src/primitive/StorageKey.ts:20](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/primitive/StorageKey.ts#L20)*
