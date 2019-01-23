

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
* [SubmittableExtrinsicFunction](../interfaces/_types_.submittableextrinsicfunction.md)
* [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)
* [SubmittableModuleExtrinsics](../interfaces/_types_.submittablemoduleextrinsics.md)

### Type aliases

* [ApiInterface$Events](_types_.md#apiinterface_events)
* [ApiInterface$Rx](_types_.md#apiinterface_rx)
* [DecoratedRpc$Method](_types_.md#decoratedrpc_method)
* [DeriveMethod](_types_.md#derivemethod)
* [OnCallFunction](_types_.md#oncallfunction)
* [QueryableStorageFunction](_types_.md#queryablestoragefunction)
* [SubmittableSendResult](_types_.md#submittablesendresult)

---

# Type aliases

<a id="apiinterface_events"></a>

##  ApiInterface$Events

**Ƭ ApiInterface$Events**: *`RpcRxInterface$Events` | "ready"*

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/767a197/packages/api/src/types.ts#L107)*

___
<a id="apiinterface_rx"></a>

##  ApiInterface$Rx

**Ƭ ApiInterface$Rx**: *[ApiInterface$Decorated](../interfaces/_types_.apiinterface_decorated.md)<`Observable`<`Codec` | `null` | `undefined`>>*

*Defined in [types.ts:105](https://github.com/polkadot-js/api/blob/767a197/packages/api/src/types.ts#L105)*

___
<a id="decoratedrpc_method"></a>

##  DecoratedRpc$Method

**Ƭ DecoratedRpc$Method**: *`function`*

*Defined in [types.ts:17](https://github.com/polkadot-js/api/blob/767a197/packages/api/src/types.ts#L17)*

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

*Defined in [types.ts:71](https://github.com/polkadot-js/api/blob/767a197/packages/api/src/types.ts#L71)*

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

*Defined in [types.ts:15](https://github.com/polkadot-js/api/blob/767a197/packages/api/src/types.ts#L15)*

#### Type declaration
▸(...args: *`any`[]*): `OnCall`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `OnCall`

___
<a id="queryablestoragefunction"></a>

##  QueryableStorageFunction

**Ƭ QueryableStorageFunction**: *`QueryableStorageFunction&lt;OnCall&gt;`*

*Defined in [types.ts:40](https://github.com/polkadot-js/api/blob/767a197/packages/api/src/types.ts#L40)*

___
<a id="submittablesendresult"></a>

##  SubmittableSendResult

**Ƭ SubmittableSendResult**: *`object`*

*Defined in [types.ts:65](https://github.com/polkadot-js/api/blob/767a197/packages/api/src/types.ts#L65)*

#### Type declaration

___

