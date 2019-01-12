

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

*Defined in [index.ts:45](https://github.com/polkadot-js/api/blob/1f401d6/packages/rpc-rx/src/index.ts#L45)*

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

*Defined in [index.ts:42](https://github.com/polkadot-js/api/blob/1f401d6/packages/rpc-rx/src/index.ts#L42)*

___
<a id="chain"></a>

##  chain

**● chain**: *[RpcRxInterface$Section](../modules/_types_.md#rpcrxinterface_section)*

*Defined in [index.ts:43](https://github.com/polkadot-js/api/blob/1f401d6/packages/rpc-rx/src/index.ts#L43)*

___
<a id="state"></a>

##  state

**● state**: *[RpcRxInterface$Section](../modules/_types_.md#rpcrxinterface_section)*

*Defined in [index.ts:44](https://github.com/polkadot-js/api/blob/1f401d6/packages/rpc-rx/src/index.ts#L44)*

___
<a id="system"></a>

##  system

**● system**: *[RpcRxInterface$Section](../modules/_types_.md#rpcrxinterface_section)*

*Defined in [index.ts:45](https://github.com/polkadot-js/api/blob/1f401d6/packages/rpc-rx/src/index.ts#L45)*

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `BehaviorSubject`<`boolean`>

*Defined in [index.ts:66](https://github.com/polkadot-js/api/blob/1f401d6/packages/rpc-rx/src/index.ts#L66)*

**Returns:** `BehaviorSubject`<`boolean`>

___
<a id="on"></a>

##  on

▸ **on**(type: *[RpcRxInterface$Events](../modules/_types_.md#rpcrxinterface_events)*, handler: *`function`*): `void`

*Defined in [index.ts:70](https://github.com/polkadot-js/api/blob/1f401d6/packages/rpc-rx/src/index.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [RpcRxInterface$Events](../modules/_types_.md#rpcrxinterface_events) |
| handler | `function` |

**Returns:** `void`

___

