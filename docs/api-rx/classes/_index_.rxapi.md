

An RxJs wrapper around the \[\[api\]\].
*__example__*: import RxApi from '@polkadot/api'; import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('[http://127.0.0.1:9944')](http://127.0.0.1:9944')); const rxapi = new RxApi(provider);

# Hierarchy

**RxApi**

# Implements

* `object`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RxApi**(provider?: *`ProviderInterface`*): [RxApi](_index_.rxapi.md)

*Defined in [index.ts:40](https://github.com/polkadot-js/api/blob/876c34c/packages/api-rx/src/index.ts#L40)*

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` provider | `ProviderInterface` |  new Ws(defaults.WS_URL) |  An API provider using HTTP or WebSocket |

**Returns:** [RxApi](_index_.rxapi.md)

___

# Properties

<a id="author"></a>

##  author

**● author**: *[RxApiInterface$Section](../modules/_types_d_.md#rxapiinterface_section)*

*Defined in [index.ts:37](https://github.com/polkadot-js/api/blob/876c34c/packages/api-rx/src/index.ts#L37)*

___
<a id="chain"></a>

##  chain

**● chain**: *[RxApiInterface$Section](../modules/_types_d_.md#rxapiinterface_section)*

*Defined in [index.ts:38](https://github.com/polkadot-js/api/blob/876c34c/packages/api-rx/src/index.ts#L38)*

___
<a id="state"></a>

##  state

**● state**: *[RxApiInterface$Section](../modules/_types_d_.md#rxapiinterface_section)*

*Defined in [index.ts:39](https://github.com/polkadot-js/api/blob/876c34c/packages/api-rx/src/index.ts#L39)*

___
<a id="system"></a>

##  system

**● system**: *[RxApiInterface$Section](../modules/_types_d_.md#rxapiinterface_section)*

*Defined in [index.ts:40](https://github.com/polkadot-js/api/blob/876c34c/packages/api-rx/src/index.ts#L40)*

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `BehaviorSubject`<`boolean`>

*Defined in [index.ts:59](https://github.com/polkadot-js/api/blob/876c34c/packages/api-rx/src/index.ts#L59)*

**Returns:** `BehaviorSubject`<`boolean`>

___

