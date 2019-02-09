

*__name__*: RpcRx

*__summary__*: The RxJS API is a wrapper around the API.

*__description__*: It allows wrapping API components with observables using RxJS.

*__example__*:   

```javascript
import RpcRx from '@polkadot/rpc-rx';
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const api = new RpcRx(provider);
```

# Hierarchy

**RpcRx**

# Implements

* `object`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RpcRx**(providerOrRpc?: *`Rpc` | `ProviderInterface`*): [RpcRx](_index_.rpcrx.md)

*Defined in [index.ts:39](https://github.com/polkadot-js/api/blob/c1672e8/packages/rpc-rx/src/index.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` providerOrRpc | `Rpc` | `ProviderInterface` |

**Returns:** [RpcRx](_index_.rpcrx.md)

___

# Properties

<a id="author"></a>

##  author

**● author**: *[RpcRxInterface$Section](../modules/_types_.md#rpcrxinterface_section)*

*Defined in [index.ts:36](https://github.com/polkadot-js/api/blob/c1672e8/packages/rpc-rx/src/index.ts#L36)*

___
<a id="chain"></a>

##  chain

**● chain**: *[RpcRxInterface$Section](../modules/_types_.md#rpcrxinterface_section)*

*Defined in [index.ts:37](https://github.com/polkadot-js/api/blob/c1672e8/packages/rpc-rx/src/index.ts#L37)*

___
<a id="state"></a>

##  state

**● state**: *[RpcRxInterface$Section](../modules/_types_.md#rpcrxinterface_section)*

*Defined in [index.ts:38](https://github.com/polkadot-js/api/blob/c1672e8/packages/rpc-rx/src/index.ts#L38)*

___
<a id="system"></a>

##  system

**● system**: *[RpcRxInterface$Section](../modules/_types_.md#rpcrxinterface_section)*

*Defined in [index.ts:39](https://github.com/polkadot-js/api/blob/c1672e8/packages/rpc-rx/src/index.ts#L39)*

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `BehaviorSubject`<`boolean`>

*Defined in [index.ts:59](https://github.com/polkadot-js/api/blob/c1672e8/packages/rpc-rx/src/index.ts#L59)*

**Returns:** `BehaviorSubject`<`boolean`>

___
<a id="on"></a>

##  on

▸ **on**(type: *[RpcRxInterface$Events](../modules/_types_.md#rpcrxinterface_events)*, handler: *`function`*): `void`

*Defined in [index.ts:63](https://github.com/polkadot-js/api/blob/c1672e8/packages/rpc-rx/src/index.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [RpcRxInterface$Events](../modules/_types_.md#rpcrxinterface_events) |
| handler | `function` |

**Returns:** `void`

___

