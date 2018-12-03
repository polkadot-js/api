

# Index

### Interfaces

* [ProviderInterface](../interfaces/_types_.providerinterface.md)

### Type aliases

* [JsonRpcObject](_types_.md#jsonrpcobject)
* [JsonRpcRequest](_types_.md#jsonrpcrequest)
* [JsonRpcResponse](_types_.md#jsonrpcresponse)
* [JsonRpcResponseBase](_types_.md#jsonrpcresponsebase)
* [JsonRpcResponseBase$Error](_types_.md#jsonrpcresponsebase_error)
* [ProviderInterface$Callback](_types_.md#providerinterface_callback)
* [ProviderInterface$EmitCb](_types_.md#providerinterface_emitcb)
* [ProviderInterface$Emitted](_types_.md#providerinterface_emitted)

---

# Type aliases

<a id="jsonrpcobject"></a>

##  JsonRpcObject

**Ƭ JsonRpcObject**: *`object`*

*Defined in [types.ts:5](https://github.com/polkadot-js/api/blob/1d18321/packages/rpc-provider/src/types.ts#L5)*

#### Type declaration

___
<a id="jsonrpcrequest"></a>

##  JsonRpcRequest

**Ƭ JsonRpcRequest**: * [JsonRpcObject](_types_.md#jsonrpcobject) & `object`
*

*Defined in [types.ts:10](https://github.com/polkadot-js/api/blob/1d18321/packages/rpc-provider/src/types.ts#L10)*

___
<a id="jsonrpcresponse"></a>

##  JsonRpcResponse

**Ƭ JsonRpcResponse**: * [JsonRpcObject](_types_.md#jsonrpcobject) & [JsonRpcResponseBase](_types_.md#jsonrpcresponsebase)
*

*Defined in [types.ts:36](https://github.com/polkadot-js/api/blob/1d18321/packages/rpc-provider/src/types.ts#L36)*

___
<a id="jsonrpcresponsebase"></a>

##  JsonRpcResponseBase

**Ƭ JsonRpcResponseBase**: * `JsonRpcResponse$Single` & `JsonRpcResponse$Subscription`
*

*Defined in [types.ts:34](https://github.com/polkadot-js/api/blob/1d18321/packages/rpc-provider/src/types.ts#L34)*

___
<a id="jsonrpcresponsebase_error"></a>

##  JsonRpcResponseBase$Error

**Ƭ JsonRpcResponseBase$Error**: *`object`*

*Defined in [types.ts:15](https://github.com/polkadot-js/api/blob/1d18321/packages/rpc-provider/src/types.ts#L15)*

#### Type declaration

___
<a id="providerinterface_callback"></a>

##  ProviderInterface$Callback

**Ƭ ProviderInterface$Callback**: *`function`*

*Defined in [types.ts:38](https://github.com/polkadot-js/api/blob/1d18321/packages/rpc-provider/src/types.ts#L38)*

#### Type declaration
▸(result: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| result | `any` |

**Returns:** `void`

___
<a id="providerinterface_emitcb"></a>

##  ProviderInterface$EmitCb

**Ƭ ProviderInterface$EmitCb**: *`function`*

*Defined in [types.ts:42](https://github.com/polkadot-js/api/blob/1d18321/packages/rpc-provider/src/types.ts#L42)*

#### Type declaration
▸(value?: *`any`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `any`

___
<a id="providerinterface_emitted"></a>

##  ProviderInterface$Emitted

**Ƭ ProviderInterface$Emitted**: * "connected" &#124; "disconnected"
*

*Defined in [types.ts:40](https://github.com/polkadot-js/api/blob/1d18321/packages/rpc-provider/src/types.ts#L40)*

___

