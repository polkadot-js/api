

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

# Type parameters
#### EventTypes :   `string` &#124; `symbol`

# Hierarchy

 `EventEmitter`

**↳ RpcRx**

# Implements

* `object`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RpcRx**(provider?: *`ProviderInterface`*): [RpcRx](_index_.rpcrx.md)

*Defined in [index.ts:47](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/rpc-rx/src/index.ts#L47)*

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` provider | `ProviderInterface` |  new Ws(defaults.WS_URL) |  An API provider using HTTP or WebSocket |

**Returns:** [RpcRx](_index_.rpcrx.md)

___

# Properties

<a id="author"></a>

##  author

**● author**: *[RpcRxInterface$Section](../modules/_types_d_.md#rpcrxinterface_section)*

*Defined in [index.ts:44](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/rpc-rx/src/index.ts#L44)*

___
<a id="chain"></a>

##  chain

**● chain**: *[RpcRxInterface$Section](../modules/_types_d_.md#rpcrxinterface_section)*

*Defined in [index.ts:45](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/rpc-rx/src/index.ts#L45)*

___
<a id="state"></a>

##  state

**● state**: *[RpcRxInterface$Section](../modules/_types_d_.md#rpcrxinterface_section)*

*Defined in [index.ts:46](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/rpc-rx/src/index.ts#L46)*

___
<a id="system"></a>

##  system

**● system**: *[RpcRxInterface$Section](../modules/_types_d_.md#rpcrxinterface_section)*

*Defined in [index.ts:47](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/rpc-rx/src/index.ts#L47)*

___
<a id="prefixed"></a>

## `<Static>` prefixed

**● prefixed**: * `string` &#124; `boolean`
*

*Inherited from EventEmitter.prefixed*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:6*

___

# Methods

<a id="addlistener"></a>

##  addListener

▸ **addListener**(event: *`EventTypes`*, fn: *`ListenerFn`*, context?: *`any`*): `this`

*Inherited from EventEmitter.addListener*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:33*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| fn | `ListenerFn` |
| `Optional` context | `any` |

**Returns:** `this`

___
<a id="emit"></a>

##  emit

▸ **emit**(event: *`EventTypes`*, ...args: *`Array`<`any`>*): `boolean`

*Inherited from EventEmitter.emit*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:27*

Calls each of the listeners registered for a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Rest` args | `Array`<`any`> |

**Returns:** `boolean`

___
<a id="eventnames"></a>

##  eventNames

▸ **eventNames**(): `Array`<`EventTypes`>

*Inherited from EventEmitter.eventNames*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:12*

Return an array listing the events for which the emitter has registered listeners.

**Returns:** `Array`<`EventTypes`>

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `BehaviorSubject`<`boolean`>

*Defined in [index.ts:67](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/rpc-rx/src/index.ts#L67)*

**Returns:** `BehaviorSubject`<`boolean`>

___
<a id="listenercount"></a>

##  listenerCount

▸ **listenerCount**(event: *`EventTypes`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:22*

Return the number of listeners listening to a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |

**Returns:** `number`

___
<a id="listeners"></a>

##  listeners

▸ **listeners**(event: *`EventTypes`*): `Array`<`ListenerFn`>

*Inherited from EventEmitter.listeners*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:17*

Return the listeners registered for a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |

**Returns:** `Array`<`ListenerFn`>

___
<a id="off"></a>

##  off

▸ **off**(event: *`EventTypes`*, fn?: *[ListenerFn](../interfaces/_index_.rpcrx.eventemitter.listenerfn.md)*, context?: *`any`*, once?: * `undefined` &#124; `false` &#124; `true`*): `this`

*Inherited from EventEmitter.off*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:44*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Optional` fn | [ListenerFn](../interfaces/_index_.rpcrx.eventemitter.listenerfn.md) |
| `Optional` context | `any` |
| `Optional` once |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `this`

___
<a id="on"></a>

##  on

▸ **on**(event: *`EventTypes`*, fn: *`ListenerFn`*, context?: *`any`*): `this`

*Inherited from EventEmitter.on*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:32*

Add a listener for a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| fn | `ListenerFn` |
| `Optional` context | `any` |

**Returns:** `this`

___
<a id="once"></a>

##  once

▸ **once**(event: *`EventTypes`*, fn: *`ListenerFn`*, context?: *`any`*): `this`

*Inherited from EventEmitter.once*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:38*

Add a one-time listener for a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| fn | `ListenerFn` |
| `Optional` context | `any` |

**Returns:** `this`

___
<a id="removealllisteners"></a>

##  removeAllListeners

▸ **removeAllListeners**(event?: *[EventTypes]()*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:49*

Remove all listeners, or those of the specified event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` event | [EventTypes]() |

**Returns:** `this`

___
<a id="removelistener"></a>

##  removeListener

▸ **removeListener**(event: *`EventTypes`*, fn?: *[ListenerFn](../interfaces/_index_.rpcrx.eventemitter.listenerfn.md)*, context?: *`any`*, once?: * `undefined` &#124; `false` &#124; `true`*): `this`

*Inherited from EventEmitter.removeListener*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:43*

Remove the listeners of a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Optional` fn | [ListenerFn](../interfaces/_index_.rpcrx.eventemitter.listenerfn.md) |
| `Optional` context | `any` |
| `Optional` once |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `this`

___

