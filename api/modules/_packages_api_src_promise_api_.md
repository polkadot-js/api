**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / "packages/api/src/promise/Api"

# Module: "packages/api/src/promise/Api"

## Index

### Classes

* [ApiPromise](../classes/_packages_api_src_promise_api_.apipromise.md)

### Functions

* [decorateMethod](_packages_api_src_promise_api_.md#decoratemethod)

## Functions

### decorateMethod

▸ **decorateMethod**\<Method>(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_packages_api_src_types_base_.decoratemethodoptions.md)): [StorageEntryPromiseOverloads](../interfaces/_packages_api_src_types_storage_.storageentrypromiseoverloads.md)

*Defined in [packages/api/src/promise/Api.ts:96](https://github.com/polkadot-js/api/blob/acb565d46/packages/api/src/promise/Api.ts#L96)*

**`description`** Decorate method for ApiPromise, where the results are converted to the Promise equivalent

#### Type parameters:

Name | Type |
------ | ------ |
`Method` | [DecorateFn](_packages_api_src_types_base_.md#decoratefn)\<[ObsInnerType](_packages_api_src_types_base_.md#obsinnertype)\<ReturnType\<Method>>> |

#### Parameters:

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_packages_api_src_types_base_.decoratemethodoptions.md) |

**Returns:** [StorageEntryPromiseOverloads](../interfaces/_packages_api_src_types_storage_.storageentrypromiseoverloads.md)
