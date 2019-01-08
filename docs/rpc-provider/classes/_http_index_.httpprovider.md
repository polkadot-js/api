

@polkadot/rpc-provider/https
============================
*__name__*: HttpProvider

*__description__*: The HTTP Provider allows sending requests using HTTP to a HTTP RPC server TCP port. It does not support subscriptions so you won't be able to listen to events such as new blocks or balance changes. It is usually preferrable using the [WsProvider](_ws_index_.wsprovider.md).

*__example__*:   

```javascript
import Api from '@polkadot/api/promise';
import HttpProvider from '@polkadot/rpc-provider/http';

const provider = new HttpProvider('http://127.0.0.1:9933');
const api = new Api(provider);
```

*__see__*: [WsProvider](_ws_index_.wsprovider.md)

# Hierarchy

**HttpProvider**

# Implements

* [ProviderInterface](../interfaces/_types_.providerinterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new HttpProvider**(endpoint?: *`string`*): [HttpProvider](_http_index_.httpprovider.md)

*Defined in [http/index.ts:40](https://github.com/polkadot-js/api/blob/483a662/packages/rpc-provider/src/http/index.ts#L40)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` endpoint | `string` |  defaults.HTTP_URL |  The endpoint url starting with http:// |

**Returns:** [HttpProvider](_http_index_.httpprovider.md)

___

# Accessors

<a id="hassubscriptions"></a>

##  hasSubscriptions

gethasSubscriptions(): `boolean`

*Defined in [http/index.ts:55](https://github.com/polkadot-js/api/blob/483a662/packages/rpc-provider/src/http/index.ts#L55)*

*__summary__*: `true` when this provider supports subscriptions

**Returns:** `boolean`

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[isConnected](../interfaces/_types_.providerinterface.md#isconnected)*

*Defined in [http/index.ts:63](https://github.com/polkadot-js/api/blob/483a662/packages/rpc-provider/src/http/index.ts#L63)*

*__summary__*: Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb)*): `void`

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[on](../interfaces/_types_.providerinterface.md#on)*

*Defined in [http/index.ts:71](https://github.com/polkadot-js/api/blob/483a662/packages/rpc-provider/src/http/index.ts#L71)*

*__summary__*: Events are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

*__description__*: HTTP Provider does not have 'on' emitters. WebSockets should be used instead.

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[send](../interfaces/_types_.providerinterface.md#send)*

*Defined in [http/index.ts:78](https://github.com/polkadot-js/api/blob/483a662/packages/rpc-provider/src/http/index.ts#L78)*

*__summary__*: Send HTTP POST Request with Body to configured HTTP Endpoint.

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(types: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../modules/_types_.md#providerinterface_callback)*): `Promise`<`number`>

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[subscribe](../interfaces/_types_.providerinterface.md#subscribe)*

*Defined in [http/index.ts:100](https://github.com/polkadot-js/api/blob/483a662/packages/rpc-provider/src/http/index.ts#L100)*

*__summary__*: Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Name | Type |
| ------ | ------ |
| types | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../modules/_types_.md#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[unsubscribe](../interfaces/_types_.providerinterface.md#unsubscribe)*

*Defined in [http/index.ts:109](https://github.com/polkadot-js/api/blob/483a662/packages/rpc-provider/src/http/index.ts#L109)*

*__summary__*: Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

