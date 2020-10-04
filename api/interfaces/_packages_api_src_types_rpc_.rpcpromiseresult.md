**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/api/src/types/rpc"](../modules/_packages_api_src_types_rpc_.md) / RpcPromiseResult

# Interface: RpcPromiseResult\<**F**>

## Type parameters

Name | Type |
------ | ------ |
`F` | AnyFunction |

## Hierarchy

* [PromiseResult](_packages_api_src_types_base_.promiseresult.md)\<F>

  ↳ **RpcPromiseResult**

## Callable

▸ (...`args`: Parameters\<F>): Promise\<[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)\<ReturnType\<F>>>

*Defined in [packages/api/src/types/base.ts:56](https://github.com/polkadot-js/api/blob/d3703c072/packages/api/src/types/base.ts#L56)*

#### Parameters:

Name | Type |
------ | ------ |
`...args` | Parameters\<F> |

**Returns:** Promise\<[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)\<ReturnType\<F>>>

▸ (...`args`: [Push](../modules/_packages_api_src_types_base_.md#push)\<Parameters\<F>, Callback\<[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)\<ReturnType\<F>>>>): [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

*Defined in [packages/api/src/types/base.ts:57](https://github.com/polkadot-js/api/blob/d3703c072/packages/api/src/types/base.ts#L57)*

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [Push](../modules/_packages_api_src_types_base_.md#push)\<Parameters\<F>, Callback\<[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)\<ReturnType\<F>>>> |

**Returns:** [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

▸ \<T>(...`args`: Parameters\<F>): Promise\<T>

*Defined in [packages/api/src/types/base.ts:58](https://github.com/polkadot-js/api/blob/d3703c072/packages/api/src/types/base.ts#L58)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Codec \| Codec[] |

#### Parameters:

Name | Type |
------ | ------ |
`...args` | Parameters\<F> |

**Returns:** Promise\<T>

▸ \<T>(...`args`: [Push](../modules/_packages_api_src_types_base_.md#push)\<Parameters\<F>, Callback\<T>>): [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

*Defined in [packages/api/src/types/base.ts:59](https://github.com/polkadot-js/api/blob/d3703c072/packages/api/src/types/base.ts#L59)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Codec \| Codec[] |

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [Push](../modules/_packages_api_src_types_base_.md#push)\<Parameters\<F>, Callback\<T>> |

**Returns:** [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

## Index

### Methods

* [raw](_packages_api_src_types_rpc_.rpcpromiseresult.md#raw)

## Methods

### raw

▸ **raw**(...`args`: Parameters\<F>): Promise\<Uint8Array & Codec>

*Defined in [packages/api/src/types/rpc.ts:17](https://github.com/polkadot-js/api/blob/d3703c072/packages/api/src/types/rpc.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`...args` | Parameters\<F> |

**Returns:** Promise\<Uint8Array & Codec>

▸ **raw**(...`args`: [Push](../modules/_packages_api_src_types_base_.md#push)\<Parameters\<F>, Callback\<Uint8Array & Codec>>): [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

*Defined in [packages/api/src/types/rpc.ts:18](https://github.com/polkadot-js/api/blob/d3703c072/packages/api/src/types/rpc.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [Push](../modules/_packages_api_src_types_base_.md#push)\<Parameters\<F>, Callback\<Uint8Array & Codec>> |

**Returns:** [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)
