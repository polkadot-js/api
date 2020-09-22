[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/types/storage"](../modules/_packages_api_src_types_storage_.md) › [QueryableStorageMultiPromise](_packages_api_src_types_storage_.queryablestoragemultipromise.md)

# Interface: QueryableStorageMultiPromise ‹**ApiType**›

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes)*

## Hierarchy

* **QueryableStorageMultiPromise**

## Callable

▸ ‹**T**›(`calls`: [QueryableStorageMultiArg](../modules/_packages_api_src_types_storage_.md#queryablestoragemultiarg)‹ApiType›[], `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)*

*Defined in [packages/api/src/types/storage.ts:66](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L66)*

**Type parameters:**

▪ **T**: *Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`calls` | [QueryableStorageMultiArg](../modules/_packages_api_src_types_storage_.md#queryablestoragemultiarg)‹ApiType›[] |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)*

▸ ‹**T**›(`calls`: [QueryableStorageMultiArg](../modules/_packages_api_src_types_storage_.md#queryablestoragemultiarg)‹ApiType›[]): *Promise‹T›*

*Defined in [packages/api/src/types/storage.ts:67](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/types/storage.ts#L67)*

**Type parameters:**

▪ **T**: *Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`calls` | [QueryableStorageMultiArg](../modules/_packages_api_src_types_storage_.md#queryablestoragemultiarg)‹ApiType›[] |

**Returns:** *Promise‹T›*
