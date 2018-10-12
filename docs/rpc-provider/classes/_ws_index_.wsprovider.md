

@polkadot/rpc-provider/ws
=========================
*__name__*: WsProvider

*__description__*: The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [HttpProvider](_http_index_.httpprovider.md), it does support subscriptions and allows listening to events such as new blocks or balance changes.

*__example__*:   
```javascript
import Api from '@polkadot/api/promise';
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);
```

*__see__*: [HttpProvider](_http_index_.httpprovider.md)

# Hierarchy

**WsProvider**

# Implements

* `WSProviderInterface`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new WsProvider**(endpoint?: *`string`*, autoConnect?: *`boolean`*): [WsProvider](_ws_index_.wsprovider.md)

*Defined in [ws/index.ts:79](https://github.com/polkadot-js/api/blob/f8d9f1c/packages/rpc-provider/src/ws/index.ts#L79)*

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` endpoint | `string` |  defaults.WS_URL |  The endpoint url. Usually \`ws://ip:9944\` or \`wss://ip:9944\` |
| `Default value` autoConnect | `boolean` | true |  Whether to connect automatically or not. |

**Returns:** [WsProvider](_ws_index_.wsprovider.md)

___

# Methods

<a id="connect"></a>

##  connect

▸ **connect**(): `void`

*Defined in [ws/index.ts:109](https://github.com/polkadot-js/api/blob/f8d9f1c/packages/rpc-provider/src/ws/index.ts#L109)*

*__summary__*: Manually connect

*__description__*: The [WsProvider](_ws_index_.wsprovider.md) connects automatically by default, however if you decided otherwise, you may connect manually using this method.

**Returns:** `void`

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Defined in [ws/index.ts:126](https://github.com/polkadot-js/api/blob/f8d9f1c/packages/rpc-provider/src/ws/index.ts#L126)*

*__summary__*: Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

##  on

▸ **on**(type: *`ProviderInterface$Emitted`*, sub: *`ProviderInterface$EmitCb`*): `void`

*Defined in [ws/index.ts:135](https://github.com/polkadot-js/api/blob/f8d9f1c/packages/rpc-provider/src/ws/index.ts#L135)*

*__summary__*: Listens on events after having subscribed using the [subscribe](_ws_index_.wsprovider.md#subscribe) function.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `ProviderInterface$Emitted` |  Event |
| sub | `ProviderInterface$EmitCb` |  Callback |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*, subscription?: *`SubscriptionHandler`*): `Promise`<`any`>

*Defined in [ws/index.ts:142](https://github.com/polkadot-js/api/blob/f8d9f1c/packages/rpc-provider/src/ws/index.ts#L142)*

*__summary__*: Send JSON data using WebSockets to configured HTTP Endpoint or queue.

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |
| `Optional` subscription | `SubscriptionHandler` |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, callback: *`ProviderInterface$Callback`*): `Promise`<`number`>

*Defined in [ws/index.ts:198](https://github.com/polkadot-js/api/blob/f8d9f1c/packages/rpc-provider/src/ws/index.ts#L198)*

*__name__*: subscribe

*__summary__*: Allows subscribing to a specific event.

*__example__*:   
```javascript
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Rpc(provider);

api.state.storage([[storage.balances.freeBalance, <Address>]], (_, values) => {
  console.log(values)
}).then((subscriptionId) => {
  console.log('balance changes subscription id: ', subscriptionId)
})
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  Subscription type |
| method | `string` |  Subscription method |
| params | `Array`<`any`> |  Parameters |
| callback | `ProviderInterface$Callback` |  Callback |

**Returns:** `Promise`<`number`>
Promise resolving to the dd of the subscription you can use with [[unsubscribe]].

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [ws/index.ts:207](https://github.com/polkadot-js/api/blob/f8d9f1c/packages/rpc-provider/src/ws/index.ts#L207)*

*__summary__*: Allows unsubscribing to subscriptions made with [subscribe](_ws_index_.wsprovider.md#subscribe).

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

