**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / "packages/api/src/types/storage"

# Module: "packages/api/src/types/storage"

## Index

### Interfaces

* [AugmentedQueries](../interfaces/_packages_api_src_types_storage_.augmentedqueries.md)
* [QueryableModuleStorage](../interfaces/_packages_api_src_types_storage_.queryablemodulestorage.md)
* [QueryableStorageMultiBase](../interfaces/_packages_api_src_types_storage_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_packages_api_src_types_storage_.queryablestoragemultipromise.md)
* [StorageEntryBase](../interfaces/_packages_api_src_types_storage_.storageentrybase.md)
* [StorageEntryDoubleMap](../interfaces/_packages_api_src_types_storage_.storageentrydoublemap.md)
* [StorageEntryPromiseOverloads](../interfaces/_packages_api_src_types_storage_.storageentrypromiseoverloads.md)

### Type aliases

* [AugmentedQuery](_packages_api_src_types_storage_.md#augmentedquery)
* [AugmentedQueryDoubleMap](_packages_api_src_types_storage_.md#augmentedquerydoublemap)
* [QueryableStorageEntry](_packages_api_src_types_storage_.md#queryablestorageentry)
* [QueryableStorageMulti](_packages_api_src_types_storage_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_packages_api_src_types_storage_.md#queryablestoragemultiarg)

## Type aliases

### AugmentedQuery

Ƭ  **AugmentedQuery**\<ApiType, F>: [MethodResult](_packages_api_src_types_base_.md#methodresult)\<ApiType, F> & [StorageEntryBase](../interfaces/_packages_api_src_types_storage_.storageentrybase.md)\<ApiType, F>

*Defined in [packages/api/src/types/storage.ts:83](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/types/storage.ts#L83)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |
`F` | AnyFunction |

___

### AugmentedQueryDoubleMap

Ƭ  **AugmentedQueryDoubleMap**\<ApiType, F>: [MethodResult](_packages_api_src_types_base_.md#methodresult)\<ApiType, F> & [StorageEntryDoubleMap](../interfaces/_packages_api_src_types_storage_.storageentrydoublemap.md)\<ApiType, F>

*Defined in [packages/api/src/types/storage.ts:85](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/types/storage.ts#L85)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |
`F` | AnyFunction |

___

### QueryableStorageEntry

Ƭ  **QueryableStorageEntry**\<ApiType>: ApiType *extends* \"rxjs\" ? AugmentedQuery\<\"rxjs\", GenericStorageEntryFunction> : AugmentedQuery\<\"promise\", GenericStorageEntryFunction> & StorageEntryPromiseOverloads

*Defined in [packages/api/src/types/storage.ts:32](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/types/storage.ts#L32)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |

___

### QueryableStorageMulti

Ƭ  **QueryableStorageMulti**\<ApiType>: ApiType *extends* \"rxjs\" ? QueryableStorageMultiBase\<ApiType> : QueryableStorageMultiPromise\<ApiType>

*Defined in [packages/api/src/types/storage.ts:71](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/types/storage.ts#L71)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |

___

### QueryableStorageMultiArg

Ƭ  **QueryableStorageMultiArg**\<ApiType>: [QueryableStorageEntry](_packages_api_src_types_storage_.md#queryablestorageentry)\<ApiType> \| [[QueryableStorageEntry](_packages_api_src_types_storage_.md#queryablestorageentry)\<ApiType>, CodecArg]

*Defined in [packages/api/src/types/storage.ts:58](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/api/src/types/storage.ts#L58)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |
