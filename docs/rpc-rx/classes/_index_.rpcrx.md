

*__name__*: RpcRx

*__summary__*: The RxJS API is a wrapper around the API.

*__description__*: It allows wrapping API components with observables using RxJS.

*__example__*:   
```javascript
import Rpc from '@polkadot/rpc-rx';
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const api = new Rpc(provider);
```

# Hierarchy

**RpcRx**

# Implements

* `object`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RpcRx**(provider?: *`ProviderInterface`*): [RpcRx](_index_.rpcrx.md)

*Defined in [index.ts:46](https://github.com/polkadot-js/api/blob/bba764b/packages/rpc-rx/src/index.ts#L46)*

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` provider | `ProviderInterface` |  new Ws(defaults.WS_URL) |  An API provider using HTTP or WebSocket |

**Returns:** [RpcRx](_index_.rpcrx.md)

___

# Properties

<a id="author"></a>

##  author

**● author**: *[RxRpcInterface$Section](../modules/_types_d_.md#rxrpcinterface_section)*

*Defined in [index.ts:43](https://github.com/polkadot-js/api/blob/bba764b/packages/rpc-rx/src/index.ts#L43)*

___
<a id="chain"></a>

##  chain

**● chain**: *[RxRpcInterface$Section](../modules/_types_d_.md#rxrpcinterface_section)*

*Defined in [index.ts:44](https://github.com/polkadot-js/api/blob/bba764b/packages/rpc-rx/src/index.ts#L44)*

___
<a id="state"></a>

##  state

**● state**: *[RxRpcInterface$Section](../modules/_types_d_.md#rxrpcinterface_section)*

*Defined in [index.ts:45](https://github.com/polkadot-js/api/blob/bba764b/packages/rpc-rx/src/index.ts#L45)*

___
<a id="system"></a>

##  system

**● system**: *[RxRpcInterface$Section](../modules/_types_d_.md#rxrpcinterface_section)*

*Defined in [index.ts:46](https://github.com/polkadot-js/api/blob/bba764b/packages/rpc-rx/src/index.ts#L46)*

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `BehaviorSubject`<`boolean`>

*Defined in [index.ts:65](https://github.com/polkadot-js/api/blob/bba764b/packages/rpc-rx/src/index.ts#L65)*

**Returns:** `BehaviorSubject`<`boolean`>

___

