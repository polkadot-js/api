**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api/src/types/storage"](../modules/_packages_api_src_types_storage_.md) / StorageEntryDoubleMap

# Interface: StorageEntryDoubleMap\<**ApiType, F**>

## Type parameters

* ApiType
* F

## Hierarchy

* [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md)\<ApiType, F>

  ↳ **StorageEntryDoubleMap**

## Index

### Properties

* [at](_packages_api_src_types_storage_.storageentrydoublemap.md#at)
* [creator](_packages_api_src_types_storage_.storageentrydoublemap.md#creator)
* [entries](_packages_api_src_types_storage_.storageentrydoublemap.md#entries)
* [entriesPaged](_packages_api_src_types_storage_.storageentrydoublemap.md#entriespaged)
* [hash](_packages_api_src_types_storage_.storageentrydoublemap.md#hash)
* [key](_packages_api_src_types_storage_.storageentrydoublemap.md#key)
* [keyPrefix](_packages_api_src_types_storage_.storageentrydoublemap.md#keyprefix)
* [keys](_packages_api_src_types_storage_.storageentrydoublemap.md#keys)
* [keysPaged](_packages_api_src_types_storage_.storageentrydoublemap.md#keyspaged)
* [multi](_packages_api_src_types_storage_.storageentrydoublemap.md#multi)
* [range](_packages_api_src_types_storage_.storageentrydoublemap.md#range)
* [size](_packages_api_src_types_storage_.storageentrydoublemap.md#size)

## Properties

### at

•  **at**: \<T>(hash: Hash \| Uint8Array \| string,...args: Parameters\<F>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, T>

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[at](_packages_api_src_types_storage_.storageentrybase.md#at)*

*Defined in [packages/api/src/types/storage.ts:40](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L40)*

___

### creator

•  **creator**: StorageEntry

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[creator](_packages_api_src_types_storage_.storageentrybase.md#creator)*

*Defined in [packages/api/src/types/storage.ts:41](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L41)*

___

### entries

•  **entries**: \<T>(arg?: Parameters\<F>[0]) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, [StorageKey, T][]>

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[entries](_packages_api_src_types_storage_.storageentrybase.md#entries)*

*Defined in [packages/api/src/types/storage.ts:42](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L42)*

___

### entriesPaged

•  **entriesPaged**: \<T>(opts: [PaginationOptions](_packages_api_src_types_base_.paginationoptions.md)\<Parameters\<F>[0]>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, [StorageKey, T][]>

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[entriesPaged](_packages_api_src_types_storage_.storageentrybase.md#entriespaged)*

*Defined in [packages/api/src/types/storage.ts:43](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L43)*

___

### hash

•  **hash**: (...args: Parameters\<F>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, Hash>

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[hash](_packages_api_src_types_storage_.storageentrybase.md#hash)*

*Defined in [packages/api/src/types/storage.ts:44](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L44)*

___

### key

•  **key**: (...args: Parameters\<F>) => string

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[key](_packages_api_src_types_storage_.storageentrybase.md#key)*

*Defined in [packages/api/src/types/storage.ts:45](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L45)*

___

### keyPrefix

•  **keyPrefix**: (key1?: Parameters\<F>[0]) => string

*Overrides [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[keyPrefix](_packages_api_src_types_storage_.storageentrybase.md#keyprefix)*

*Defined in [packages/api/src/types/storage.ts:80](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L80)*

___

### keys

•  **keys**: (arg?: any) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, StorageKey[]>

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[keys](_packages_api_src_types_storage_.storageentrybase.md#keys)*

*Defined in [packages/api/src/types/storage.ts:47](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L47)*

___

### keysPaged

•  **keysPaged**: (opts: [PaginationOptions](_packages_api_src_types_base_.paginationoptions.md)\<Parameters\<F>[0]>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, StorageKey[]>

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[keysPaged](_packages_api_src_types_storage_.storageentrybase.md#keyspaged)*

*Defined in [packages/api/src/types/storage.ts:48](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L48)*

___

### multi

•  **multi**: ApiType *extends* \"rxjs\" ? StorageEntryObservableMulti : StorageEntryPromiseMulti

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[multi](_packages_api_src_types_storage_.storageentrybase.md#multi)*

*Defined in [packages/api/src/types/storage.ts:51](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L51)*

___

### range

•  **range**: \<T>(__namedParameters: [string \| Hash \| Uint8Array, undefined \| string \| Hash \| Uint8Array],...args: Parameters\<F>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, [Hash, T][]>

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[range](_packages_api_src_types_storage_.storageentrybase.md#range)*

*Defined in [packages/api/src/types/storage.ts:49](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L49)*

___

### size

•  **size**: (...args: Parameters\<F>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, u64>

*Inherited from [StorageEntryBase](_packages_api_src_types_storage_.storageentrybase.md).[size](_packages_api_src_types_storage_.storageentrybase.md#size)*

*Defined in [packages/api/src/types/storage.ts:50](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/storage.ts#L50)*
