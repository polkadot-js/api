[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/types/storage"](_packages_api_src_types_storage_.md)

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

###  AugmentedQuery

Ƭ **AugmentedQuery**: *[MethodResult](_packages_api_src_types_base_.md#methodresult)‹ApiType, F› & [StorageEntryBase](../interfaces/_packages_api_src_types_storage_.storageentrybase.md)‹ApiType, F›*

*Defined in [packages/api/src/types/storage.ts:84](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api/src/types/storage.ts#L84)*

___

###  AugmentedQueryDoubleMap

Ƭ **AugmentedQueryDoubleMap**: *[MethodResult](_packages_api_src_types_base_.md#methodresult)‹ApiType, F› & [StorageEntryDoubleMap](../interfaces/_packages_api_src_types_storage_.storageentrydoublemap.md)‹ApiType, F›*

*Defined in [packages/api/src/types/storage.ts:86](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api/src/types/storage.ts#L86)*

___

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *ApiType extends "rxjs" ? AugmentedQuery‹"rxjs", GenericStorageEntryFunction› : AugmentedQuery‹"promise", GenericStorageEntryFunction› & StorageEntryPromiseOverloads*

*Defined in [packages/api/src/types/storage.ts:33](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api/src/types/storage.ts#L33)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *ApiType extends "rxjs" ? QueryableStorageMultiBase‹ApiType› : QueryableStorageMultiPromise‹ApiType›*

*Defined in [packages/api/src/types/storage.ts:72](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api/src/types/storage.ts#L72)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType› | [[QueryableStorageEntry](_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›, CodecArg]*

*Defined in [packages/api/src/types/storage.ts:59](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api/src/types/storage.ts#L59)*
