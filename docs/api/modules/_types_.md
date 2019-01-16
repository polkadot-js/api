

# Index

### Interfaces

* [ApiBaseInterface](../interfaces/_types_.apibaseinterface.md)
* [ApiInterface$Decorated](../interfaces/_types_.apiinterface_decorated.md)
* [ApiOptions](../interfaces/_types_.apioptions.md)
* [DecoratedRpc](../interfaces/_types_.decoratedrpc.md)
* [DecoratedRpc$Section](../interfaces/_types_.decoratedrpc_section.md)
* [Derive](../interfaces/_types_.derive.md)
* [DeriveSection](../interfaces/_types_.derivesection.md)
* [QueryableModuleStorage](../interfaces/_types_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_.queryablestorage.md)
* [QueryableStorageFunction](../interfaces/_types_.queryablestoragefunction.md)
* [SubmittableExtrinsicFunction](../interfaces/_types_.submittableextrinsicfunction.md)
* [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)
* [SubmittableModuleExtrinsics](../interfaces/_types_.submittablemoduleextrinsics.md)

### Type aliases

* [ApiInterface$Events](_types_.md#apiinterface_events)
* [ApiInterface$Rx](_types_.md#apiinterface_rx)
* [DecoratedRpc$Method](_types_.md#decoratedrpc_method)
* [DeriveMethod](_types_.md#derivemethod)
* [OnCallFunction](_types_.md#oncallfunction)
* [SubmittableSendResult](_types_.md#submittablesendresult)

---

# Type aliases

<a id="apiinterface_events"></a>

##  ApiInterface$Events

**Ƭ ApiInterface$Events**: *`RpcRxInterface$Events` | "ready"*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/aa8e613/packages/api/src/types.ts#L97)*

___
<a id="apiinterface_rx"></a>

##  ApiInterface$Rx

**Ƭ ApiInterface$Rx**: *[ApiInterface$Decorated](../interfaces/_types_.apiinterface_decorated.md)<`Observable`<`Codec` | `null` | `undefined`>>*

*Defined in [types.ts:95](https://github.com/polkadot-js/api/blob/aa8e613/packages/api/src/types.ts#L95)*

___
<a id="decoratedrpc_method"></a>

##  DecoratedRpc$Method

**Ƭ DecoratedRpc$Method**: *`function`*

*Defined in [types.ts:17](https://github.com/polkadot-js/api/blob/aa8e613/packages/api/src/types.ts#L17)*

#### Type declaration
▸(...params: *`Array`<`any`>*): `OnCall`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` params | `Array`<`any`> |

**Returns:** `OnCall`

___
<a id="derivemethod"></a>

##  DeriveMethod

**Ƭ DeriveMethod**: *`function`*

*Defined in [types.ts:61](https://github.com/polkadot-js/api/blob/aa8e613/packages/api/src/types.ts#L61)*

#### Type declaration
▸(...params: *`Array`<`any`>*): `OnCall`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` params | `Array`<`any`> |

**Returns:** `OnCall`

___
<a id="oncallfunction"></a>

##  OnCallFunction

**Ƭ OnCallFunction**: *`function`*

*Defined in [types.ts:15](https://github.com/polkadot-js/api/blob/aa8e613/packages/api/src/types.ts#L15)*

#### Type declaration
▸(...args: *`any`[]*): `OnCall`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `OnCall`

___
<a id="submittablesendresult"></a>

##  SubmittableSendResult

**Ƭ SubmittableSendResult**: *`object`*

*Defined in [types.ts:55](https://github.com/polkadot-js/api/blob/aa8e613/packages/api/src/types.ts#L55)*

#### Type declaration

___

