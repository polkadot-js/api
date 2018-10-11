

@polkadot/rpc-provider/https
============================
*__name__*: HttpProvider

*__summary__*: The HTTP Provider allows sending requests using HTTP to a HTTP RPC server TCP port.

*__description__*: It does not support subscriptions so you won't be able to listen to events such as new blocks or balance changes. It is usually preferrable using the [WsProvider](_ws_index_.wsprovider.md).

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

* `ProviderInterface`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new HttpProvider**(endpoint?: *`string`*): [HttpProvider](_http_index_.httpprovider.md)

*Defined in [http/index.ts:43](https://github.com/polkadot-js/api/blob/5207285/packages/rpc-provider/src/http/index.ts#L43)*

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` endpoint | `string` |  defaults.HTTP_URL |  The endpoint url starting with http:// |

**Returns:** [HttpProvider](_http_index_.httpprovider.md)

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Defined in [http/index.ts:60](https://github.com/polkadot-js/api/blob/5207285/packages/rpc-provider/src/http/index.ts#L60)*

*__summary__*: Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

##  on

▸ **on**(type: *`ProviderInterface$Emitted`*, sub: *`ProviderInterface$EmitCb`*): `void`

*Defined in [http/index.ts:68](https://github.com/polkadot-js/api/blob/5207285/packages/rpc-provider/src/http/index.ts#L68)*

*__summary__*: Events are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

*__description__*: HTTP Provider does not have 'on' emitters. WebSockets should be used instead.

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `ProviderInterface$Emitted` |
| sub | `ProviderInterface$EmitCb` |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Defined in [http/index.ts:75](https://github.com/polkadot-js/api/blob/5207285/packages/rpc-provider/src/http/index.ts#L75)*

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

▸ **subscribe**(types: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *`ProviderInterface$Callback`*): `Promise`<`number`>

*Defined in [http/index.ts:97](https://github.com/polkadot-js/api/blob/5207285/packages/rpc-provider/src/http/index.ts#L97)*

*__summary__*: Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| types | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | `ProviderInterface$Callback` |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [http/index.ts:106](https://github.com/polkadot-js/api/blob/5207285/packages/rpc-provider/src/http/index.ts#L106)*

*__summary__*: Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

