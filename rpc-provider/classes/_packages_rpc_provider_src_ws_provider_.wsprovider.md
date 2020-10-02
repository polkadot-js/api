**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/rpc-provider/src/ws/Provider"](../modules/_packages_rpc_provider_src_ws_provider_.md) / WsProvider

# Class: WsProvider

# @polkadot/rpc-provider/ws

**`name`** WsProvider

**`description`** The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);
```

**`see`** [[HttpProvider]]

## Hierarchy

* **WsProvider**

## Implements

* ProviderInterface

## Index

### Constructors

* [constructor](_packages_rpc_provider_src_ws_provider_.wsprovider.md#constructor)

### Accessors

* [hasSubscriptions](_packages_rpc_provider_src_ws_provider_.wsprovider.md#hassubscriptions)
* [isConnected](_packages_rpc_provider_src_ws_provider_.wsprovider.md#isconnected)

### Methods

* [clone](_packages_rpc_provider_src_ws_provider_.wsprovider.md#clone)
* [connect](_packages_rpc_provider_src_ws_provider_.wsprovider.md#connect)
* [connectWithRetry](_packages_rpc_provider_src_ws_provider_.wsprovider.md#connectwithretry)
* [disconnect](_packages_rpc_provider_src_ws_provider_.wsprovider.md#disconnect)
* [on](_packages_rpc_provider_src_ws_provider_.wsprovider.md#on)
* [send](_packages_rpc_provider_src_ws_provider_.wsprovider.md#send)
* [subscribe](_packages_rpc_provider_src_ws_provider_.wsprovider.md#subscribe)
* [unsubscribe](_packages_rpc_provider_src_ws_provider_.wsprovider.md#unsubscribe)

## Constructors

### constructor

\+ **new WsProvider**(`endpoint`: string \| string[], `autoConnectMs`: number \| false, `headers`: Record\<string, string>): [WsProvider](_packages_rpc_provider_src_ws_provider_.wsprovider.md)

*Defined in [packages/rpc-provider/src/ws/Provider.ts:86](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L86)*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`endpoint` | string \| string[] | defaults.WS_URL | The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`, may provide an array of endpoint strings. |
`autoConnectMs` | number \| false | RETRY_DELAY | - |
`headers` | Record\<string, string> | {} | - |

**Returns:** [WsProvider](_packages_rpc_provider_src_ws_provider_.wsprovider.md)

## Accessors

### hasSubscriptions

• get **hasSubscriptions**(): boolean

*Defined in [packages/rpc-provider/src/ws/Provider.ts:121](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L121)*

**`summary`** `true` when this provider supports subscriptions

**Returns:** boolean

___

### isConnected

• get **isConnected**(): boolean

*Defined in [packages/rpc-provider/src/ws/Provider.ts:129](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L129)*

**`summary`** Whether the node is connected or not.

**Returns:** boolean

true if connected

## Methods

### clone

▸ **clone**(): [WsProvider](_packages_rpc_provider_src_ws_provider_.wsprovider.md)

*Defined in [packages/rpc-provider/src/ws/Provider.ts:136](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L136)*

**`description`** Returns a clone of the object

**Returns:** [WsProvider](_packages_rpc_provider_src_ws_provider_.wsprovider.md)

___

### connect

▸ **connect**(): Promise\<void>

*Defined in [packages/rpc-provider/src/ws/Provider.ts:146](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L146)*

**`summary`** Manually connect

**`description`** The [WsProvider](_packages_rpc_provider_src_ws_provider_.wsprovider.md) connects automatically by default, however if you decided otherwise, you may
connect manually using this method.

**Returns:** Promise\<void>

___

### connectWithRetry

▸ **connectWithRetry**(): Promise\<void>

*Defined in [packages/rpc-provider/src/ws/Provider.ts:171](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L171)*

**`description`** Connect, never throwing an error, but rather forcing a retry

**Returns:** Promise\<void>

___

### disconnect

▸ **disconnect**(): Promise\<void>

*Defined in [packages/rpc-provider/src/ws/Provider.ts:187](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L187)*

**`description`** Manually disconnect from the connection, clearing autoconnect logic

**Returns:** Promise\<void>

___

### on

▸ **on**(`type`: ProviderInterfaceEmitted, `sub`: ProviderInterfaceEmitCb): function

*Defined in [packages/rpc-provider/src/ws/Provider.ts:212](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L212)*

**`summary`** Listens on events after having subscribed using the [subscribe](_packages_rpc_provider_src_ws_provider_.wsprovider.md#subscribe) function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ProviderInterfaceEmitted | Event |
`sub` | ProviderInterfaceEmitCb | Callback |

**Returns:** function

unsubscribe function

___

### send

▸ **send**(`method`: string, `params`: any[], `subscription?`: SubscriptionHandler): Promise\<any>

*Defined in [packages/rpc-provider/src/ws/Provider.ts:226](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L226)*

**`summary`** Send JSON data using WebSockets to configured HTTP Endpoint or queue.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`method` | string | The RPC methods to execute |
`params` | any[] | Encoded paramaters as appliucable for the method |
`subscription?` | SubscriptionHandler | Subscription details (internally used)  |

**Returns:** Promise\<any>

___

### subscribe

▸ **subscribe**(`type`: string, `method`: string, `params`: any[], `callback`: ProviderInterfaceCallback): Promise\<number \| string>

*Defined in [packages/rpc-provider/src/ws/Provider.ts:281](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L281)*

**`name`** subscribe

**`summary`** Allows subscribing to a specific event.

**`example`** 
<BR>

```javascript
const provider = new WsProvider('ws://127.0.0.1:9944');
const rpc = new Rpc(provider);

rpc.state.subscribeStorage([[storage.system.account, <Address>]], (_, values) => {
  console.log(values)
}).then((subscriptionId) => {
  console.log('balance changes subscription id: ', subscriptionId)
})
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Subscription type |
`method` | string | Subscription method |
`params` | any[] | Parameters |
`callback` | ProviderInterfaceCallback | Callback |

**Returns:** Promise\<number \| string>

Promise resolving to the dd of the subscription you can use with [unsubscribe](_packages_rpc_provider_src_ws_provider_.wsprovider.md#unsubscribe).

___

### unsubscribe

▸ **unsubscribe**(`type`: string, `method`: string, `id`: number \| string): Promise\<boolean>

*Defined in [packages/rpc-provider/src/ws/Provider.ts:290](https://github.com/polkadot-js/api/blob/33c161f87/packages/rpc-provider/src/ws/Provider.ts#L290)*

**`summary`** Allows unsubscribing to subscriptions made with [subscribe](_packages_rpc_provider_src_ws_provider_.wsprovider.md#subscribe).

#### Parameters:

Name | Type |
------ | ------ |
`type` | string |
`method` | string |
`id` | number \| string |

**Returns:** Promise\<boolean>
