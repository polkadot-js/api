[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/types/storage"](../modules/_packages_api_src_types_storage_.md) › [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md)

# Interface: StorageEntryBase ‹**ApiType, F**›

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes)*

▪ **F**: *AnyFunction*

## Hierarchy

* **StorageEntryBase**

  ↳ [StorageEntryDoubleMap](_packages_api_src_types_storage_.storageentrydoublemap.md)

## Index

### Properties

* [at](_packages_api_src_types_storage_.storageentrybase.md#at)
* [creator](_packages_api_src_types_storage_.storageentrybase.md#creator)
* [entries](_packages_api_src_types_storage_.storageentrybase.md#entries)
* [entriesPaged](_packages_api_src_types_storage_.storageentrybase.md#entriespaged)
* [hash](_packages_api_src_types_storage_.storageentrybase.md#hash)
* [key](_packages_api_src_types_storage_.storageentrybase.md#key)
* [keyPrefix](_packages_api_src_types_storage_.storageentrybase.md#keyprefix)
* [keys](_packages_api_src_types_storage_.storageentrybase.md#keys)
* [keysPaged](_packages_api_src_types_storage_.storageentrybase.md#keyspaged)
* [multi](_packages_api_src_types_storage_.storageentrybase.md#multi)
* [range](_packages_api_src_types_storage_.storageentrybase.md#range)
* [size](_packages_api_src_types_storage_.storageentrybase.md#size)

## Properties

###  at

• **at**: *function*

*Defined in [packages/api/src/types/storage.ts:40](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L40)*

#### Type declaration:

▸ ‹**T**›(`hash`: Hash | Uint8Array | string, ...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)‹ApiType, T›*

**Type parameters:**

▪ **T**: *Codec | any*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | Hash &#124; Uint8Array &#124; string |
`...args` | Parameters‹F› |

___

###  creator

• **creator**: *StorageEntry*

*Defined in [packages/api/src/types/storage.ts:41](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L41)*

___

###  entries

• **entries**: *function*

*Defined in [packages/api/src/types/storage.ts:42](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L42)*

#### Type declaration:

▸ ‹**T**›(`arg?`: Parameters‹F›[0]): *[PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)‹ApiType, [StorageKey, T][]›*

**Type parameters:**

▪ **T**: *Codec | any*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | Parameters‹F›[0] |

___

###  entriesPaged

• **entriesPaged**: *function*

*Defined in [packages/api/src/types/storage.ts:43](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L43)*

#### Type declaration:

▸ ‹**T**›(`opts`: [PaginationOptions](_packages_api_src_types_base_.paginationoptions.md)‹Parameters‹F›[0]›): *[PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)‹ApiType, [StorageKey, T][]›*

**Type parameters:**

▪ **T**: *Codec | any*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [PaginationOptions](_packages_api_src_types_base_.paginationoptions.md)‹Parameters‹F›[0]› |

___

###  hash

• **hash**: *function*

*Defined in [packages/api/src/types/storage.ts:44](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L44)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)‹ApiType, Hash›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  key

• **key**: *function*

*Defined in [packages/api/src/types/storage.ts:45](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L45)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  keyPrefix

• **keyPrefix**: *function*

*Defined in [packages/api/src/types/storage.ts:46](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L46)*

#### Type declaration:

▸ (): *string*

___

###  keys

• **keys**: *function*

*Defined in [packages/api/src/types/storage.ts:47](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L47)*

#### Type declaration:

▸ (`arg?`: any): *[PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)‹ApiType, StorageKey[]›*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | any |

___

###  keysPaged

• **keysPaged**: *function*

*Defined in [packages/api/src/types/storage.ts:48](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L48)*

#### Type declaration:

▸ (`opts`: [PaginationOptions](_packages_api_src_types_base_.paginationoptions.md)‹Parameters‹F›[0]›): *[PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)‹ApiType, StorageKey[]›*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [PaginationOptions](_packages_api_src_types_base_.paginationoptions.md)‹Parameters‹F›[0]› |

___

###  multi

• **multi**: *ApiType extends "rxjs" ? StorageEntryObservableMulti : StorageEntryPromiseMulti*

*Defined in [packages/api/src/types/storage.ts:51](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L51)*

___

###  range

• **range**: *function*

*Defined in [packages/api/src/types/storage.ts:49](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L49)*

#### Type declaration:

▸ ‹**T**›(`__namedParameters`: [string | Hash‹› | Uint8Array‹›, undefined | string | Hash‹› | Uint8Array‹›], ...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)‹ApiType, [Hash, T][]›*

**Type parameters:**

▪ **T**: *Codec | any*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [string &#124; Hash‹› &#124; Uint8Array‹›, undefined &#124; string &#124; Hash‹› &#124; Uint8Array‹›] |
`...args` | Parameters‹F› |

___

###  size

• **size**: *function*

*Defined in [packages/api/src/types/storage.ts:50](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L50)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)‹ApiType, u64›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |
