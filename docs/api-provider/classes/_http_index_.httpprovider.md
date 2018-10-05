

*__name__*: HttpProvider

*__summary__*: The HTTP Provider allows sending requests using HTTP.

*__description__*: It does not support subscriptions so you won't be able to listen to events such as new blocks or balance changes. It is usually preferrable using the [WsProvider](_ws_index_.wsprovider.md).

*__example__*:   

```
import createApi from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9933');
const api = createApi(provider);
```

*__see__*: [WsProvider](_ws_index_.wsprovider.md)

# Hierarchy

**HttpProvider**

# Implements

* [ProviderInterface](../interfaces/_types_d_.providerinterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new HttpProvider**(endpoint: *`string`*): [HttpProvider](_http_index_.httpprovider.md)

*Defined in [http/index.ts:38](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/http/index.ts#L38)*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| endpoint | `string` |  The endpoint url starting with http:// |

**Returns:** [HttpProvider](_http_index_.httpprovider.md)

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[isConnected](../interfaces/_types_d_.providerinterface.md#isconnected)*

*Defined in [http/index.ts:55](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/http/index.ts#L55)*

*__summary__*: Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb)*): `void`

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[on](../interfaces/_types_d_.providerinterface.md#on)*

*Defined in [http/index.ts:63](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/http/index.ts#L63)*

*__summary__*: Events are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

*__description__*: HTTP Provider does not have 'on' emitters. WebSockets should be used instead.

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[send](../interfaces/_types_d_.providerinterface.md#send)*

*Defined in [http/index.ts:70](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/http/index.ts#L70)*

*__summary__*: Send HTTP POST Request with Body to configured HTTP Endpoint.

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(types: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback)*): `Promise`<`number`>

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[subscribe](../interfaces/_types_d_.providerinterface.md#subscribe)*

*Defined in [http/index.ts:92](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/http/index.ts#L92)*

*__summary__*: Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| types | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[unsubscribe](../interfaces/_types_d_.providerinterface.md#unsubscribe)*

*Defined in [http/index.ts:101](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/http/index.ts#L101)*

*__summary__*: Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

