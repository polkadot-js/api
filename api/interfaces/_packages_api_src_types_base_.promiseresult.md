[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/types/base"](../modules/_packages_api_src_types_base_.md) › [PromiseResult](_packages_api_src_types_base_.promiseresult.md)

# Interface: PromiseResult ‹**F**›

## Type parameters

▪ **F**: *AnyFunction*

## Hierarchy

* **PromiseResult**

  ↳ [RpcPromiseResult](_packages_api_src_types_rpc_.rpcpromiseresult.md)

## Callable

▸ (...`args`: Parameters‹F›): *Promise‹[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)‹ReturnType‹F›››*

*Defined in [packages/api/src/types/base.ts:56](https://github.com/polkadot-js/api/blob/375dadbe3/packages/api/src/types/base.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)‹ReturnType‹F›››*

▸ (...`args`: [Push](../modules/_packages_api_src_types_base_.md#push)‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)‹ReturnType‹F››››): *[UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)*

*Defined in [packages/api/src/types/base.ts:57](https://github.com/polkadot-js/api/blob/375dadbe3/packages/api/src/types/base.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Push](../modules/_packages_api_src_types_base_.md#push)‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)‹ReturnType‹F›››› |

**Returns:** *[UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)*

▸ ‹**T**›(...`args`: Parameters‹F›): *Promise‹T›*

*Defined in [packages/api/src/types/base.ts:58](https://github.com/polkadot-js/api/blob/375dadbe3/packages/api/src/types/base.ts#L58)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹T›*

▸ ‹**T**›(...`args`: [Push](../modules/_packages_api_src_types_base_.md#push)‹Parameters‹F›, Callback‹T››): *[UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)*

*Defined in [packages/api/src/types/base.ts:59](https://github.com/polkadot-js/api/blob/375dadbe3/packages/api/src/types/base.ts#L59)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Push](../modules/_packages_api_src_types_base_.md#push)‹Parameters‹F›, Callback‹T›› |

**Returns:** *[UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)*
