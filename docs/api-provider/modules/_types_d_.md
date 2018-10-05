

# Type aliases

<a id="jsonrpcobject"></a>

##  JsonRpcObject

**Ƭ JsonRpcObject**: *`object`*

*Defined in [types.d.ts:5](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L5)*

#### Type declaration

___
<a id="jsonrpcrequest"></a>

##  JsonRpcRequest

**Ƭ JsonRpcRequest**: * [JsonRpcObject](_types_d_.md#jsonrpcobject) & `object`
*

*Defined in [types.d.ts:10](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L10)*

___
<a id="jsonrpcresponse"></a>

##  JsonRpcResponse

**Ƭ JsonRpcResponse**: * [JsonRpcObject](_types_d_.md#jsonrpcobject) & [JsonRpcResponseBase](_types_d_.md#jsonrpcresponsebase)
*

*Defined in [types.d.ts:36](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L36)*

___
<a id="jsonrpcresponsebase"></a>

##  JsonRpcResponseBase

**Ƭ JsonRpcResponseBase**: * `JsonRpcResponse$Single` & `JsonRpcResponse$Subscription`
*

*Defined in [types.d.ts:34](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L34)*

___
<a id="jsonrpcresponsebase_error"></a>

##  JsonRpcResponseBase$Error

**Ƭ JsonRpcResponseBase$Error**: *`object`*

*Defined in [types.d.ts:15](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L15)*

#### Type declaration

___
<a id="providerinterface_callback"></a>

##  ProviderInterface$Callback

**Ƭ ProviderInterface$Callback**: *`function`*

*Defined in [types.d.ts:38](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L38)*

#### Type declaration
▸(error: * `Error` &#124; `null`*, result: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| error |  `Error` &#124; `null`|
| result | `any` |

**Returns:** `void`

___
<a id="providerinterface_emitcb"></a>

##  ProviderInterface$EmitCb

**Ƭ ProviderInterface$EmitCb**: *`function`*

*Defined in [types.d.ts:42](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L42)*

#### Type declaration
▸(value?: *`any`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `any`

___
<a id="providerinterface_emitted"></a>

##  ProviderInterface$Emitted

**Ƭ ProviderInterface$Emitted**: * "connected" &#124; "disconnected"
*

*Defined in [types.d.ts:40](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L40)*

___

