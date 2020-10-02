**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api/src/types/storage"](../modules/_packages_api_src_types_storage_.md) / StorageEntryBase

# Interface: StorageEntryBase\<**ApiType, F**>

## Type parameters

* ApiType
* F

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

### at

•  **at**: \<T>(hash: Hash \| Uint8Array \| string,...args: Parameters\<F>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, T>

*Defined in [packages/api/src/types/storage.ts:40](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L40)*

___

### creator

•  **creator**: StorageEntry

*Defined in [packages/api/src/types/storage.ts:41](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L41)*

___

### entries

•  **entries**: \<T>(arg?: Parameters\<F>[0]) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, [StorageKey, T][]>

*Defined in [packages/api/src/types/storage.ts:42](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L42)*

___

### entriesPaged

•  **entriesPaged**: \<T>(opts: [PaginationOptions](_packages_api_src_types_base_.paginationoptions.md)\<Parameters\<F>[0]>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, [StorageKey, T][]>

*Defined in [packages/api/src/types/storage.ts:43](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L43)*

___

### hash

•  **hash**: (...args: Parameters\<F>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, Hash>

*Defined in [packages/api/src/types/storage.ts:44](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L44)*

___

### key

•  **key**: (...args: Parameters\<F>) => string

*Defined in [packages/api/src/types/storage.ts:45](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L45)*

___

### keyPrefix

•  **keyPrefix**: () => string

*Defined in [packages/api/src/types/storage.ts:46](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L46)*

___

### keys

•  **keys**: (arg?: any) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, StorageKey[]>

*Defined in [packages/api/src/types/storage.ts:47](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L47)*

___

### keysPaged

•  **keysPaged**: (opts: [PaginationOptions](_packages_api_src_types_base_.paginationoptions.md)\<Parameters\<F>[0]>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, StorageKey[]>

*Defined in [packages/api/src/types/storage.ts:48](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L48)*

___

### multi

•  **multi**: ApiType *extends* \"rxjs\" ? StorageEntryObservableMulti : StorageEntryPromiseMulti

*Defined in [packages/api/src/types/storage.ts:51](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L51)*

___

### range

•  **range**: \<T>(__namedParameters: [string \| Hash \| Uint8Array, undefined \| string \| Hash \| Uint8Array],...args: Parameters\<F>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, [Hash, T][]>

*Defined in [packages/api/src/types/storage.ts:49](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L49)*

___

### size

•  **size**: (...args: Parameters\<F>) => [PromiseOrObs](../modules/_packages_api_src_types_base_.md#promiseorobs)\<ApiType, u64>

*Defined in [packages/api/src/types/storage.ts:50](https://github.com/polkadot-js/api/blob/5577723b7/packages/api/src/types/storage.ts#L50)*
