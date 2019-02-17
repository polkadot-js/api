

# Index

### Interfaces

* [ApiBaseInterface](../interfaces/_types_.apibaseinterface.md)
* [ApiInterface$Decorated](../interfaces/_types_.apiinterface_decorated.md)
* [ApiOptions](../interfaces/_types_.apioptions.md)
* [DecoratedRpc](../interfaces/_types_.decoratedrpc.md)
* [DecoratedRpc$Method](../interfaces/_types_.decoratedrpc_method.md)
* [DecoratedRpc$Section](../interfaces/_types_.decoratedrpc_section.md)
* [Derive](../interfaces/_types_.derive.md)
* [DeriveMethodBase](../interfaces/_types_.derivemethodbase.md)
* [DeriveSection](../interfaces/_types_.derivesection.md)
* [QueryableModuleStorage](../interfaces/_types_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_.queryablestorage.md)
* [QueryableStorageFunctionBase](../interfaces/_types_.queryablestoragefunctionbase.md)
* [Signer](../interfaces/_types_.signer.md)
* [SubmittableExtrinsicFunction](../interfaces/_types_.submittableextrinsicfunction.md)
* [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)
* [SubmittableModuleExtrinsics](../interfaces/_types_.submittablemoduleextrinsics.md)

### Type aliases

* [ApiInterface$Events](_types_.md#apiinterface_events)
* [ApiInterface$Rx](_types_.md#apiinterface_rx)
* [ApiType](_types_.md#apitype)
* [DeriveMethod](_types_.md#derivemethod)
* [HashResult](_types_.md#hashresult)
* [OnCallDefinition](_types_.md#oncalldefinition)
* [OnCallFunction](_types_.md#oncallfunction)
* [QueryableStorageFunction](_types_.md#queryablestoragefunction)
* [U64Result](_types_.md#u64result)

---

# Type aliases

<a id="apiinterface_events"></a>

##  ApiInterface$Events

**Ƭ ApiInterface$Events**: *`RpcRxInterface$Events` \| "ready"*

*Defined in [types.ts:146](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api/src/types.ts#L146)*

___
<a id="apiinterface_rx"></a>

##  ApiInterface$Rx

**Ƭ ApiInterface$Rx**: *[ApiInterface$Decorated](../interfaces/_types_.apiinterface_decorated.md)<[RxResult](_rx_types_.md#rxresult), [RxResult](_rx_types_.md#rxresult)>*

*Defined in [types.ts:144](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api/src/types.ts#L144)*

___
<a id="apitype"></a>

##  ApiType

**Ƭ ApiType**: *"promise" \| "rxjs"*

*Defined in [types.ts:148](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api/src/types.ts#L148)*

___
<a id="derivemethod"></a>

##  DeriveMethod

**Ƭ DeriveMethod**: *`DeriveMethod&lt;CodecResult, SubscriptionResult&gt;`*

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api/src/types.ts#L98)*

___
<a id="hashresult"></a>

##  HashResult

**Ƭ HashResult**: *`HashResult&lt;CodecResult, SubscriptionResult&gt;`*

*Defined in [types.ts:39](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api/src/types.ts#L39)*

___
<a id="oncalldefinition"></a>

##  OnCallDefinition

**Ƭ OnCallDefinition**: *`function`*

*Defined in [types.ts:17](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api/src/types.ts#L17)*

#### Type declaration
▸(method: *[OnCallFunction](_types_.md#oncallfunction)<[RxResult](_rx_types_.md#rxresult), [RxResult](_rx_types_.md#rxresult)>*, params?: *`Array`<`CodecArg`>*, callback?: *`CodecCallback`*, needsCallback?: *`undefined` \| `false` \| `true`*): `CodecResult` \| `SubscriptionResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [OnCallFunction](_types_.md#oncallfunction)<[RxResult](_rx_types_.md#rxresult), [RxResult](_rx_types_.md#rxresult)> |
| `Optional` params | `Array`<`CodecArg`> |
| `Optional` callback | `CodecCallback` |
| `Optional` needsCallback | `undefined` \| `false` \| `true` |

**Returns:** `CodecResult` \| `SubscriptionResult`

___
<a id="oncallfunction"></a>

##  OnCallFunction

**Ƭ OnCallFunction**: *`function`*

*Defined in [types.ts:19](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api/src/types.ts#L19)*

#### Type declaration
▸(...params: *`Array`<`CodecArg`>*): `CodecResult` \| `SubscriptionResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` params | `Array`<`CodecArg`> |

**Returns:** `CodecResult` \| `SubscriptionResult`

___
<a id="queryablestoragefunction"></a>

##  QueryableStorageFunction

**Ƭ QueryableStorageFunction**: *`QueryableStorageFunction&lt;CodecResult, SubscriptionResult&gt;`*

*Defined in [types.ts:62](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api/src/types.ts#L62)*

___
<a id="u64result"></a>

##  U64Result

**Ƭ U64Result**: *`U64Result&lt;CodecResult, SubscriptionResult&gt;`*

*Defined in [types.ts:44](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api/src/types.ts#L44)*

___

