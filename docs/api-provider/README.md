
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/api-provider.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api-provider) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api-provider)](https://david-dm.org/polkadot-js/api?path=packages/api-provider) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api-provider)](https://david-dm.org/polkadot-js/api?path=packages/api-provider#info=devDependencies)

@polkadot/api-provider
======================

Generic transport providers to handle the transport of method calls to and from Polkadot clients from applications interacting with it. Generally, unless you are operating at a low-level and taking care of encoding and decoding of parameters/results, it won't be directly used. API interfaces building on top these providers can support various transports with the same underlying interfaces.

Usage
-----

Installation -

```
npm install --save @polkadot/api-provider
```

Initialisation -

```js
import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const version = await provider.send('client_version', []);

console.log('clientVersion', version);
```

## Index

### Classes

* [HttpProvider](classes/httpprovider.md)
* [WsProvider](classes/wsprovider.md)

### Interfaces

* [ProviderInterface](interfaces/providerinterface.md)

### Type aliases

* [HttpState](#httpstate)
* [JsonRpcObject](#jsonrpcobject)
* [JsonRpcRequest](#jsonrpcrequest)
* [JsonRpcResponse](#jsonrpcresponse)
* [JsonRpcResponseBase](#jsonrpcresponsebase)
* [JsonRpcResponseBase$Error](#jsonrpcresponsebase_error)
* [MockState](#mockstate)
* [MockState$Requests](#mockstate_requests)
* [MockState$Storage](#mockstate_storage)
* [MockState$Subscription$Callback](#mockstate_subscription_callback)
* [MockState$Subscriptions](#mockstate_subscriptions)
* [ProviderInterface$Callback](#providerinterface_callback)
* [ProviderInterface$EmitCb](#providerinterface_emitcb)
* [ProviderInterface$Emitted](#providerinterface_emitted)
* [RpcCoder](#rpccoder)
* [RpcCoderState](#rpccoderstate)

### Functions

* [decodeResponse](#decoderesponse)
* [encodeJson](#encodejson)
* [encodeObject](#encodeobject)
* [mockProvider](#mockprovider)
* [mocks](#mocks)
* [on](#on)
* [rpcCoder](#rpccoder)
* [send](#send)
* [state](#state)
* [subscribe](#subscribe)
* [unsubscribe](#unsubscribe)

---

## Type aliases

<a id="httpstate"></a>

###  HttpState

**Ƭ HttpState**: *`object`*

*Defined in [http/types.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/http/types.d.ts#L8)*

#### Type declaration

___
<a id="jsonrpcobject"></a>

###  JsonRpcObject

**Ƭ JsonRpcObject**: *`object`*

*Defined in [types.d.ts:5](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/types.d.ts#L5)*

#### Type declaration

___
<a id="jsonrpcrequest"></a>

###  JsonRpcRequest

**Ƭ JsonRpcRequest**: * [JsonRpcObject](#jsonrpcobject) & `object`
*

*Defined in [types.d.ts:10](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/types.d.ts#L10)*

___
<a id="jsonrpcresponse"></a>

###  JsonRpcResponse

**Ƭ JsonRpcResponse**: * [JsonRpcObject](#jsonrpcobject) & [JsonRpcResponseBase](#jsonrpcresponsebase)
*

*Defined in [types.d.ts:36](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/types.d.ts#L36)*

___
<a id="jsonrpcresponsebase"></a>

###  JsonRpcResponseBase

**Ƭ JsonRpcResponseBase**: * `JsonRpcResponse$Single` & `JsonRpcResponse$Subscription`
*

*Defined in [types.d.ts:34](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/types.d.ts#L34)*

___
<a id="jsonrpcresponsebase_error"></a>

###  JsonRpcResponseBase$Error

**Ƭ JsonRpcResponseBase$Error**: *`object`*

*Defined in [types.d.ts:15](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/types.d.ts#L15)*

#### Type declaration

___
<a id="mockstate"></a>

###  MockState

**Ƭ MockState**: *`object`*

*Defined in [mock/types.d.ts:27](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/types.d.ts#L27)*

#### Type declaration

___
<a id="mockstate_requests"></a>

###  MockState$Requests

**Ƭ MockState$Requests**: *`object`*

*Defined in [mock/types.d.ts:23](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/types.d.ts#L23)*

#### Type declaration

[index: `string`]: `function`

▸(storage: *[MockState$Storage](#mockstate_storage)*, params: *`Array`<`any`>*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| storage | [MockState$Storage](#mockstate_storage) |
| params | `Array`<`any`> |

**Returns:** `string`

___
<a id="mockstate_storage"></a>

###  MockState$Storage

**Ƭ MockState$Storage**: *`object`*

*Defined in [mock/types.d.ts:19](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/types.d.ts#L19)*

#### Type declaration

[index: `string`]: `Uint8Array`

___
<a id="mockstate_subscription_callback"></a>

###  MockState$Subscription$Callback

**Ƭ MockState$Subscription$Callback**: *`function`*

*Defined in [mock/types.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/types.d.ts#L8)*

#### Type declaration
▸(error: * `Error` &#124; `null`*, value: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| error |  `Error` &#124; `null`|
| value | `any` |

**Returns:** `void`

___
<a id="mockstate_subscriptions"></a>

###  MockState$Subscriptions

**Ƭ MockState$Subscriptions**: *`object`*

*Defined in [mock/types.d.ts:10](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/types.d.ts#L10)*

#### Type declaration

[index: `string`]: `object`

___
<a id="providerinterface_callback"></a>

###  ProviderInterface$Callback

**Ƭ ProviderInterface$Callback**: *`function`*

*Defined in [types.d.ts:38](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/types.d.ts#L38)*

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

###  ProviderInterface$EmitCb

**Ƭ ProviderInterface$EmitCb**: *`function`*

*Defined in [types.d.ts:42](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/types.d.ts#L42)*

#### Type declaration
▸(value?: *`any`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `any`

___
<a id="providerinterface_emitted"></a>

###  ProviderInterface$Emitted

**Ƭ ProviderInterface$Emitted**: * "connected" &#124; "disconnected"
*

*Defined in [types.d.ts:40](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/types.d.ts#L40)*

___
<a id="rpccoder"></a>

###  RpcCoder

**Ƭ RpcCoder**: *`object`*

*Defined in [coder/json/types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/coder/json/types.d.ts#L7)*

#### Type declaration

___
<a id="rpccoderstate"></a>

###  RpcCoderState

**Ƭ RpcCoderState**: *`object`*

*Defined in [coder/json/types.d.ts:14](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/coder/json/types.d.ts#L14)*

#### Type declaration

___

## Functions

<a id="decoderesponse"></a>

###  decodeResponse

▸ **decodeResponse**(self: *[RpcCoderState](#rpccoderstate)*, response: *[JsonRpcResponse](#jsonrpcresponse)*): `any`

*Defined in [coder/json/decodeResponse.ts:22](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/coder/json/decodeResponse.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [RpcCoderState](#rpccoderstate) |
| response | [JsonRpcResponse](#jsonrpcresponse) |

**Returns:** `any`

___
<a id="encodejson"></a>

###  encodeJson

▸ **encodeJson**(self: *[RpcCoderState](#rpccoderstate)*, method: *`string`*, params: *`Array`<`any`>*): `string`

*Defined in [coder/json/encodeJson.ts:9](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/coder/json/encodeJson.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [RpcCoderState](#rpccoderstate) |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `string`

___
<a id="encodeobject"></a>

###  encodeObject

▸ **encodeObject**(self: *[RpcCoderState](#rpccoderstate)*, method: *`string`*, params: *`Array`<`any`>*): [JsonRpcRequest](#jsonrpcrequest)

*Defined in [coder/json/encodeObject.ts:8](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/coder/json/encodeObject.ts#L8)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [RpcCoderState](#rpccoderstate) |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** [JsonRpcRequest](#jsonrpcrequest)

___
<a id="mockprovider"></a>

###  mockProvider

▸ **mockProvider**(): [ProviderInterface](interfaces/providerinterface.md)

*Defined in [mock/index.ts:18](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/index.ts#L18)*

A moock provider mainly used for testing.

**Returns:** [ProviderInterface](interfaces/providerinterface.md)
The mock provider

___
<a id="mocks"></a>

###  mocks

▸ **mocks**(__namedParameters: *`object`*): `void`

*Defined in [mock/mocks.ts:68](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/mocks.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(self: *[MockState](#mockstate)*, type: *[ProviderInterface$Emitted](#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](#providerinterface_emitcb)*): `void`

*Defined in [mock/on.ts:8](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/on.ts#L8)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [MockState](#mockstate) |
| type | [ProviderInterface$Emitted](#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="rpccoder"></a>

###  rpcCoder

▸ **rpcCoder**(): [RpcCoder](#rpccoder)

*Defined in [coder/json/index.ts:12](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/coder/json/index.ts#L12)*

**Returns:** [RpcCoder](#rpccoder)

___
<a id="send"></a>

###  send

▸ **send**(__namedParameters: *`object`*, method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Defined in [mock/send.ts:7](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/send.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="state"></a>

###  state

▸ **state**(): [MockState](#mockstate)

*Defined in [mock/state.ts:38](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/state.ts#L38)*

**Returns:** [MockState](#mockstate)

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(self: *[MockState](#mockstate)*, type: *`string`*, method: *`string`*, params: *`Array`<`any`>*): `Promise`<`number`>

*Defined in [mock/subscribe.ts:7](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/subscribe.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [MockState](#mockstate) |
| type | `string` |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(self: *[MockState](#mockstate)*, type: *`string`*, name: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [mock/unsubscribe.ts:7](https://github.com/chevdor/polkadot-js-api/blob/461228c/packages/api-provider/src/mock/unsubscribe.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [MockState](#mockstate) |
| type | `string` |
| name | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

