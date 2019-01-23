

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

*Defined in [ws/index.ts:75](https://github.com/polkadot-js/api/blob/52718d7/packages/rpc-provider/src/ws/index.ts#L75)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` endpoint | `string` |  defaults.WS_URL |  The endpoint url. Usually \`ws://ip:9944\` or \`wss://ip:9944\` |
| `Default value` autoConnect | `boolean` | true |  Whether to connect automatically or not. |

**Returns:** [WsProvider](_ws_index_.wsprovider.md)

___

# Accessors

<a id="hassubscriptions"></a>

##  hasSubscriptions

gethasSubscriptions(): `boolean`

*Defined in [ws/index.ts:101](https://github.com/polkadot-js/api/blob/52718d7/packages/rpc-provider/src/ws/index.ts#L101)*

*__summary__*: `true` when this provider supports subscriptions

**Returns:** `boolean`

___

# Methods

<a id="connect"></a>

##  connect

▸ **connect**(): `void`

*Defined in [ws/index.ts:110](https://github.com/polkadot-js/api/blob/52718d7/packages/rpc-provider/src/ws/index.ts#L110)*

*__summary__*: Manually connect

*__description__*: The [WsProvider](_ws_index_.wsprovider.md) connects automatically by default, however if you decided otherwise, you may connect manually using this method.

**Returns:** `void`

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Defined in [ws/index.ts:127](https://github.com/polkadot-js/api/blob/52718d7/packages/rpc-provider/src/ws/index.ts#L127)*

*__summary__*: Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb)*): `void`

*Defined in [ws/index.ts:136](https://github.com/polkadot-js/api/blob/52718d7/packages/rpc-provider/src/ws/index.ts#L136)*

*__summary__*: Listens on events after having subscribed using the [subscribe](_ws_index_.wsprovider.md#subscribe) function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted) |  Event |
| sub | [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb) |  Callback |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*, subscription?: *`SubscriptionHandler`*): `Promise`<`any`>

*Defined in [ws/index.ts:146](https://github.com/polkadot-js/api/blob/52718d7/packages/rpc-provider/src/ws/index.ts#L146)*

*__summary__*: Send JSON data using WebSockets to configured HTTP Endpoint or queue.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| method | `string` |  The RPC methods to execute |
| params | `Array`<`any`> |  Encoded paramaters as appliucable for the method |
| `Optional` subscription | `SubscriptionHandler` |  Subscription details (internally used) |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, callback: *[ProviderInterface$Callback](../modules/_types_.md#providerinterface_callback)*): `Promise`<`number`>

*Defined in [ws/index.ts:200](https://github.com/polkadot-js/api/blob/52718d7/packages/rpc-provider/src/ws/index.ts#L200)*

*__name__*: subscribe

*__summary__*: Allows subscribing to a specific event.

*__example__*:   

```javascript
const provider = new WsProvider('ws://127.0.0.1:9944');
const rpc = new Rpc(provider);

rpc.state.subscribeStorage([[storage.balances.freeBalance, <Address>]], (_, values) => {
  console.log(values)
}).then((subscriptionId) => {
  console.log('balance changes subscription id: ', subscriptionId)
})
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  Subscription type |
| method | `string` |  Subscription method |
| params | `Array`<`any`> |  Parameters |
| callback | [ProviderInterface$Callback](../modules/_types_.md#providerinterface_callback) |  Callback |

**Returns:** `Promise`<`number`>
Promise resolving to the dd of the subscription you can use with [[unsubscribe]].

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [ws/index.ts:209](https://github.com/polkadot-js/api/blob/52718d7/packages/rpc-provider/src/ws/index.ts#L209)*

*__summary__*: Allows unsubscribing to subscriptions made with [subscribe](_ws_index_.wsprovider.md#subscribe).

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

