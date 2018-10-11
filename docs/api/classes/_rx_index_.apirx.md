

# Type parameters
#### EventTypes :   `string` &#124; `symbol`

# Hierarchy

↳  [ApiBase](_base_.apibase.md)<`RpcRx`, [QueryableStorage](../interfaces/_rx_types_d_.queryablestorage.md), [SubmittableExtrinsics](../interfaces/_rx_types_d_.submittableextrinsics.md)>

**↳ ApiRx**

# Implements

* [ApiBaseInterface](../interfaces/_types_d_.apibaseinterface.md)<`RpcRx`, [QueryableStorage](../interfaces/_rx_types_d_.queryablestorage.md), [SubmittableExtrinsics](../interfaces/_rx_types_d_.submittableextrinsics.md)>
* [ApiRxInterface](../interfaces/_rx_types_d_.apirxinterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiRx**(wsProvider?: *`WsProvider`*): [ApiRx](_rx_index_.apirx.md)

*Overrides [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [rx/index.ts:44](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/rx/index.ts#L44)*

*__example__*:   
```javascript
import Api from '@polkadot/api/rx';

new Api().isReady.subscribe((api) => {
  api.rpc.newHead().subscribe((header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
});
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` wsProvider | `WsProvider` |  An optional WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port |

**Returns:** [ApiRx](_rx_index_.apirx.md)

___

# Properties

<a id="_extrinsics"></a>

## `<Protected>``<Optional>` _extrinsics

**● _extrinsics**: *[E]()*

*Inherited from [ApiBase](_base_.apibase.md).[_extrinsics](_base_.apibase.md#_extrinsics)*

*Defined in [Base.ts:33](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L33)*

___
<a id="_genesishash"></a>

## `<Protected>``<Optional>` _genesisHash

**● _genesisHash**: *`Hash`*

*Inherited from [ApiBase](_base_.apibase.md).[_genesisHash](_base_.apibase.md#_genesishash)*

*Defined in [Base.ts:34](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L34)*

___
<a id="_rpc"></a>

## `<Protected>` _rpc

**● _rpc**: *`RpcRx`*

*Inherited from [ApiBase](_base_.apibase.md).[_rpc](_base_.apibase.md#_rpc)*

*Defined in [Base.ts:36](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L36)*

___
<a id="_rpcbase"></a>

## `<Protected>` _rpcBase

**● _rpcBase**: *`Rpc`*

*Inherited from [ApiBase](_base_.apibase.md).[_rpcBase](_base_.apibase.md#_rpcbase)*

*Defined in [Base.ts:37](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L37)*

___
<a id="_runtimemetadata"></a>

## `<Protected>``<Optional>` _runtimeMetadata

**● _runtimeMetadata**: *`RuntimeMetadata`*

*Inherited from [ApiBase](_base_.apibase.md).[_runtimeMetadata](_base_.apibase.md#_runtimemetadata)*

*Defined in [Base.ts:38](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L38)*

___
<a id="_runtimeversion"></a>

## `<Protected>``<Optional>` _runtimeVersion

**● _runtimeVersion**: *`RuntimeVersion`*

*Inherited from [ApiBase](_base_.apibase.md).[_runtimeVersion](_base_.apibase.md#_runtimeversion)*

*Defined in [Base.ts:39](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L39)*

___
<a id="_storage"></a>

## `<Protected>``<Optional>` _storage

**● _storage**: *[S]()*

*Inherited from [ApiBase](_base_.apibase.md).[_storage](_base_.apibase.md#_storage)*

*Defined in [Base.ts:35](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L35)*

___
<a id="prefixed"></a>

## `<Static>` prefixed

**● prefixed**: * `string` &#124; `boolean`
*

*Inherited from EventEmitter.prefixed*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:6*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:68](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L68)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="isconnected"></a>

##  isConnected

getisConnected(): `Observable`<`boolean`>

*Defined in [rx/index.ts:77](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/rx/index.ts#L77)*

*__description__*: Observable that carries the connected state for the provider. Results in a boolean flag that is true/false based on the connectivity.

**Returns:** `Observable`<`boolean`>

___
<a id="isready"></a>

##  isReady

getisReady(): `Observable`<[ApiRx](_rx_index_.apirx.md)>

*Defined in [rx/index.ts:84](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/rx/index.ts#L84)*

*__description__*: Observable that returns the first time we are connected and loaded

**Returns:** `Observable`<[ApiRx](_rx_index_.apirx.md)>

___
<a id="rpc"></a>

##  rpc

getrpc(): `RpcRx`

*Inherited from [ApiBase](_base_.apibase.md).[rpc](_base_.apibase.md#rpc)*

*Defined in [Base.ts:105](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L105)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions.

*__example__*:   
```javascript
api.rpc.chain
  .newHead()
  .subscribe((header) => {
    console.log('new header', header);
  });
```

**Returns:** `RpcRx`

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

getruntimeMetadata(): `RuntimeMetadata`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeMetadata](_base_.apibase.md#runtimemetadata)*

*Defined in [Base.ts:77](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L77)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `RuntimeMetadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeVersion](_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:86](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L86)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="st"></a>

##  st

getst(): [QueryableStorage](../interfaces/_rx_types_d_.queryablestorage.md)

*Inherited from [ApiBase](_base_.apibase.md).[st](_base_.apibase.md#st)*

*Defined in [Base.ts:122](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L122)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

*__example__*:   
```javascript
api.st.balances
  .freeBalance(<accountId>)
  .subscribe((balance) => {
    console.log('new balance', balance);
  });
```

**Returns:** [QueryableStorage](../interfaces/_rx_types_d_.queryablestorage.md)

___
<a id="tx"></a>

##  tx

gettx(): [SubmittableExtrinsics](../interfaces/_rx_types_d_.submittableextrinsics.md)

*Inherited from [ApiBase](_base_.apibase.md).[tx](_base_.apibase.md#tx)*

*Defined in [Base.ts:143](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L143)*

*__description__*: Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

*__example__*:   
```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .sign(<keyPair>, <accountNonce>, <blockHash (optional)>)
  .send()
  .subscribe((status) => {
    console.log('tx status', status);
  });
```

**Returns:** [SubmittableExtrinsics](../interfaces/_rx_types_d_.submittableextrinsics.md)

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
<a id="decorateextrinsics"></a>

## `<Protected>` decorateExtrinsics

▸ **decorateExtrinsics**(extrinsics: *`Extrinsics`*): [SubmittableExtrinsics](../interfaces/_rx_types_d_.submittableextrinsics.md)

*Overrides [ApiBase](_base_.apibase.md).[decorateExtrinsics](_base_.apibase.md#decorateextrinsics)*

*Defined in [rx/index.ts:92](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/rx/index.ts#L92)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| extrinsics | `Extrinsics` |

**Returns:** [SubmittableExtrinsics](../interfaces/_rx_types_d_.submittableextrinsics.md)

___
<a id="decoratefunctionmeta"></a>

## `<Protected>` decorateFunctionMeta

▸ **decorateFunctionMeta**(input: *`MetaDecoration`*, output: *`MetaDecoration`*): `MetaDecoration`

*Inherited from [ApiBase](_base_.apibase.md).[decorateFunctionMeta](_base_.apibase.md#decoratefunctionmeta)*

*Defined in [Base.ts:200](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/Base.ts#L200)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `MetaDecoration` |
| output | `MetaDecoration` |

**Returns:** `MetaDecoration`

___
<a id="decoraterpc"></a>

## `<Protected>` decorateRpc

▸ **decorateRpc**(rpc: *`Rpc`*): `RpcRx`

*Overrides [ApiBase](_base_.apibase.md).[decorateRpc](_base_.apibase.md#decoraterpc)*

*Defined in [rx/index.ts:88](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/rx/index.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| rpc | `Rpc` |

**Returns:** `RpcRx`

___
<a id="decoratestorage"></a>

## `<Protected>` decorateStorage

▸ **decorateStorage**(storage: *`Storage`*): [QueryableStorage](../interfaces/_rx_types_d_.queryablestorage.md)

*Overrides [ApiBase](_base_.apibase.md).[decorateStorage](_base_.apibase.md#decoratestorage)*

*Defined in [rx/index.ts:113](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/rx/index.ts#L113)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| storage | `Storage` |

**Returns:** [QueryableStorage](../interfaces/_rx_types_d_.queryablestorage.md)

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

▸ **off**(event: *`EventTypes`*, fn?: *[ListenerFn](../interfaces/_base_.apibase.eventemitter.listenerfn.md)*, context?: *`any`*, once?: * `undefined` &#124; `false` &#124; `true`*): `this`

*Inherited from EventEmitter.off*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:44*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Optional` fn | [ListenerFn](../interfaces/_base_.apibase.eventemitter.listenerfn.md) |
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

▸ **removeListener**(event: *`EventTypes`*, fn?: *[ListenerFn](../interfaces/_base_.apibase.eventemitter.listenerfn.md)*, context?: *`any`*, once?: * `undefined` &#124; `false` &#124; `true`*): `this`

*Inherited from EventEmitter.removeListener*

*Defined in /home/travis/build/polkadot-js/api/node_modules/eventemitter3/index.d.ts:43*

Remove the listeners of a given event.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Optional` fn | [ListenerFn](../interfaces/_base_.apibase.eventemitter.listenerfn.md) |
| `Optional` context | `any` |
| `Optional` once |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `this`

___
<a id="create"></a>

## `<Static>` create

▸ **create**(wsProvider?: *`WsProvider`*): `Observable`<[ApiRx](_rx_index_.apirx.md)>

*Defined in [rx/index.ts:42](https://github.com/polkadot-js/api/blob/f5948fe/packages/api/src/rx/index.ts#L42)*

*__description__*: Creates an ApiRx instance using the supplied provider. Returns an Observable containing the actual Api instance.

*__example__*:   
```javascript
import Api from '@polkadot/api/rx';

Api.create().subscribe((api) => {
  api.st.timestamp.now((timestamp) => {
    console.log(`lastest block timestamp ${timestamp}`);
  });
});
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` wsProvider | `WsProvider` |  Optional WebSocket provider that is passed to the class contructor |

**Returns:** `Observable`<[ApiRx](_rx_index_.apirx.md)>

___

