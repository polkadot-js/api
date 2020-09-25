**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/api/src/types/base"

# Module: "packages/api/src/types/base"

## Index

### Interfaces

* [DecorateMethodOptions](../interfaces/_packages_api_src_types_base_.decoratemethodoptions.md)
* [PaginationOptions](../interfaces/_packages_api_src_types_base_.paginationoptions.md)
* [PromiseResult](../interfaces/_packages_api_src_types_base_.promiseresult.md)
* [RxResult](../interfaces/_packages_api_src_types_base_.rxresult.md)

### Type aliases

* [ApiTypes](_packages_api_src_types_base_.md#apitypes)
* [Cons](_packages_api_src_types_base_.md#cons)
* [DecorateFn](_packages_api_src_types_base_.md#decoratefn)
* [DecorateMethod](_packages_api_src_types_base_.md#decoratemethod)
* [MethodResult](_packages_api_src_types_base_.md#methodresult)
* [ObsInnerType](_packages_api_src_types_base_.md#obsinnertype)
* [PromiseOrObs](_packages_api_src_types_base_.md#promiseorobs)
* [Push](_packages_api_src_types_base_.md#push)
* [UnsubscribePromise](_packages_api_src_types_base_.md#unsubscribepromise)
* [VoidFn](_packages_api_src_types_base_.md#voidfn)

## Type aliases

### ApiTypes

Ƭ  **ApiTypes**: \"promise\" \| \"rxjs\"

*Defined in [packages/api/src/types/base.ts:29](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L29)*

___

### Cons

Ƭ  **Cons**\<V, T>: (v: V,...t: T) => void *extends* (...r: *infer* R) => void ? R : never

*Defined in [packages/api/src/types/base.ts:11](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L11)*

#### Type parameters:

Name | Type |
------ | ------ |
`V` | - |
`T` | any[] |

___

### DecorateFn

Ƭ  **DecorateFn**\<T>: (...args: any[]) => Observable\<T>

*Defined in [packages/api/src/types/base.ts:76](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L76)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Codec |

___

### DecorateMethod

Ƭ  **DecorateMethod**\<ApiType>: \<Method>(method: Method,options?: [DecorateMethodOptions](../interfaces/_packages_api_src_types_base_.decoratemethodoptions.md)) => any

*Defined in [packages/api/src/types/base.ts:85](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L85)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |

___

### MethodResult

Ƭ  **MethodResult**\<ApiType, F>: ApiType *extends* \"rxjs\" ? RxResult\<F> : PromiseResult\<F>

*Defined in [packages/api/src/types/base.ts:65](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L65)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |
`F` | AnyFunction |

___

### ObsInnerType

Ƭ  **ObsInnerType**\<O>: O *extends* Observable\<*infer* U> ? U : never

*Defined in [packages/api/src/types/base.ts:32](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L32)*

#### Type parameters:

Name | Type |
------ | ------ |
`O` | Observable\<any> |

___

### PromiseOrObs

Ƭ  **PromiseOrObs**\<ApiType, T>: ApiType *extends* \"rxjs\" ? Observable\<T> : Promise\<T>

*Defined in [packages/api/src/types/base.ts:39](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L39)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |
`T` | - |

___

### Push

Ƭ  **Push**\<T, V>: Cons\<any, Required\<T>> *extends* *infer* R ? {} : never *extends* *infer* P ? P *extends* any[] ? P : never : never

*Defined in [packages/api/src/types/base.ts:19](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L19)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | any[] |
`V` | - |

___

### UnsubscribePromise

Ƭ  **UnsubscribePromise**: Promise\<[VoidFn](_packages_api_src_types_base_.md#voidfn)>

*Defined in [packages/api/src/types/base.ts:36](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L36)*

___

### VoidFn

Ƭ  **VoidFn**: () => void

*Defined in [packages/api/src/types/base.ts:34](https://github.com/polkadot-js/api/blob/19d6165bd/packages/api/src/types/base.ts#L34)*
