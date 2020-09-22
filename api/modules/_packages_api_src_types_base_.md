[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/types/base"](_packages_api_src_types_base_.md)

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

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [packages/api/src/types/base.ts:29](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L29)*

___

###  Cons

Ƭ **Cons**: *function extends function ? R : never*

*Defined in [packages/api/src/types/base.ts:11](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L11)*

___

###  DecorateFn

Ƭ **DecorateFn**: *function*

*Defined in [packages/api/src/types/base.ts:76](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L76)*

#### Type declaration:

▸ (...`args`: any[]): *Observable‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  DecorateMethod

Ƭ **DecorateMethod**: *function*

*Defined in [packages/api/src/types/base.ts:85](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L85)*

#### Type declaration:

▸ ‹**Method**›(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_packages_api_src_types_base_.decoratemethodoptions.md)): *any*

**Type parameters:**

▪ **Method**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_packages_api_src_types_base_.decoratemethodoptions.md) |

___

###  MethodResult

Ƭ **MethodResult**: *ApiType extends "rxjs" ? RxResult‹F› : PromiseResult‹F›*

*Defined in [packages/api/src/types/base.ts:65](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L65)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *O extends Observable‹infer U› ? U : never*

*Defined in [packages/api/src/types/base.ts:32](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L32)*

___

###  PromiseOrObs

Ƭ **PromiseOrObs**: *ApiType extends "rxjs" ? Observable‹T› : Promise‹T›*

*Defined in [packages/api/src/types/base.ts:39](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L39)*

___

###  Push

Ƭ **Push**: *Cons‹any, Required‹T›› extends infer R ? object : never extends infer P ? P extends any[] ? P : never : never*

*Defined in [packages/api/src/types/base.ts:19](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L19)*

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *Promise‹[VoidFn](_packages_api_src_types_base_.md#voidfn)›*

*Defined in [packages/api/src/types/base.ts:36](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L36)*

___

###  VoidFn

Ƭ **VoidFn**: *function*

*Defined in [packages/api/src/types/base.ts:34](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api/src/types/base.ts#L34)*

#### Type declaration:

▸ (): *void*
