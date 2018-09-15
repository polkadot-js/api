[Polkadot JS API](../README.md) > [RxApi](../classes/rxapi.md)

# Class: RxApi

An RxJs wrapper around the \[\[api\]\].
*__example__*: ```javascript
import RxApi from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';
const provider = new WsProvider('http://127.0.0.1:9944');
const rxapi = new RxApi(provider);
```

## Hierarchy

**RxApi**

## Implements

*  `object` & `object`

## Index

### Constructors

* [constructor](rxapi.md#constructor)

### Properties

* [author](rxapi.md#author)
* [chain](rxapi.md#chain)
* [state](rxapi.md#state)
* [system](rxapi.md#system)

### Methods

* [isConnected](rxapi.md#isconnected)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RxApi**(provider?: *`ProviderInterface`*): [RxApi](rxapi.md)

*Defined in [index.ts:33](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/index.ts#L33)*

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` provider | `ProviderInterface` |  new Ws(defaults.WS_URL) |  An API provider using HTTP or WebSocket |

**Returns:** [RxApi](rxapi.md)

___

## Properties

<a id="author"></a>

###  author

**● author**: *[RxApiInterface$Section](../#rxapiinterface_section)*

*Defined in [index.ts:30](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/index.ts#L30)*

___
<a id="chain"></a>

###  chain

**● chain**: *[RxApiInterface$Section](../#rxapiinterface_section)*

*Defined in [index.ts:31](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/index.ts#L31)*

___
<a id="state"></a>

###  state

**● state**: *[RxApiInterface$Section](../#rxapiinterface_section)*

*Defined in [index.ts:32](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/index.ts#L32)*

___
<a id="system"></a>

###  system

**● system**: *[RxApiInterface$Section](../#rxapiinterface_section)*

*Defined in [index.ts:33](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/index.ts#L33)*

___

## Methods

<a id="isconnected"></a>

###  isConnected

▸ **isConnected**(): `BehaviorSubject`<`boolean`>

*Defined in [index.ts:51](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/index.ts#L51)*

**Returns:** `BehaviorSubject`<`boolean`>

___

