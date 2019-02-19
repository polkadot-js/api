

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

*Defined in [http/index.ts:40](https://github.com/polkadot-js/api/blob/f807a93/packages/rpc-provider/src/http/index.ts#L40)*

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

*Defined in [http/index.ts:55](https://github.com/polkadot-js/api/blob/f807a93/packages/rpc-provider/src/http/index.ts#L55)*

*__summary__*: `true` when this provider supports subscriptions

**Returns:** `boolean`

___

# Methods

<a id="clone"></a>

##  clone

▸ **clone**(): [HttpProvider](_http_index_.httpprovider.md)

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[clone](../interfaces/_types_.providerinterface.md#clone)*

*Defined in [http/index.ts:62](https://github.com/polkadot-js/api/blob/f807a93/packages/rpc-provider/src/http/index.ts#L62)*

*__description__*: Returns a clone of the object

**Returns:** [HttpProvider](_http_index_.httpprovider.md)

___
<a id="disconnect"></a>

##  disconnect

▸ **disconnect**(): `void`

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[disconnect](../interfaces/_types_.providerinterface.md#disconnect)*

*Defined in [http/index.ts:69](https://github.com/polkadot-js/api/blob/f807a93/packages/rpc-provider/src/http/index.ts#L69)*

*__description__*: Manually disconnect from the connection

**Returns:** `void`

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[isConnected](../interfaces/_types_.providerinterface.md#isconnected)*

*Defined in [http/index.ts:77](https://github.com/polkadot-js/api/blob/f807a93/packages/rpc-provider/src/http/index.ts#L77)*

*__summary__*: Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb)*): `void`

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[on](../interfaces/_types_.providerinterface.md#on)*

*Defined in [http/index.ts:85](https://github.com/polkadot-js/api/blob/f807a93/packages/rpc-provider/src/http/index.ts#L85)*

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

*Defined in [http/index.ts:92](https://github.com/polkadot-js/api/blob/f807a93/packages/rpc-provider/src/http/index.ts#L92)*

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

*Defined in [http/index.ts:114](https://github.com/polkadot-js/api/blob/f807a93/packages/rpc-provider/src/http/index.ts#L114)*

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

*Defined in [http/index.ts:123](https://github.com/polkadot-js/api/blob/f807a93/packages/rpc-provider/src/http/index.ts#L123)*

*__summary__*: Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

