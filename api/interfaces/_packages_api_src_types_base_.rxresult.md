**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/api/src/types/base"](../modules/_packages_api_src_types_base_.md) / RxResult

# Interface: RxResult\<**F**>

## Type parameters

Name | Type |
------ | ------ |
`F` | AnyFunction |

## Hierarchy

* **RxResult**

  ↳ [RpcRxResult](_packages_api_src_types_rpc_.rpcrxresult.md)

## Callable

▸ (...`args`: Parameters\<F>): Observable\<[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)\<ReturnType\<F>>>

*Defined in [packages/api/src/types/base.ts:51](https://github.com/polkadot-js/api/blob/acb565d46/packages/api/src/types/base.ts#L51)*

#### Parameters:

Name | Type |
------ | ------ |
`...args` | Parameters\<F> |

**Returns:** Observable\<[ObsInnerType](../modules/_packages_api_src_types_base_.md#obsinnertype)\<ReturnType\<F>>>

▸ \<T>(...`args`: Parameters\<F>): Observable\<T>

*Defined in [packages/api/src/types/base.ts:52](https://github.com/polkadot-js/api/blob/acb565d46/packages/api/src/types/base.ts#L52)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`...args` | Parameters\<F> |

**Returns:** Observable\<T>
