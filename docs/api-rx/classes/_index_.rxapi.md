

*__name__*: RxApi

*__summary__*: The RxJS API is a wrapper around the API.

*__description__*: It allows wrapping API components with observables using RxJS.

*__example__*:   
```javascript
import RxApi from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const rxapi = new RxApi(provider);
```

# Hierarchy

**RxApi**

# Implements

* `object`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RxApi**(provider?: *`ProviderInterface`*): [RxApi](_index_.rxapi.md)

*Defined in [index.ts:46](https://github.com/polkadot-js/api/blob/a8305c9/packages/api-rx/src/index.ts#L46)*

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

*Defined in [index.ts:43](https://github.com/polkadot-js/api/blob/a8305c9/packages/api-rx/src/index.ts#L43)*

___
<a id="chain"></a>

##  chain

**● chain**: *[RxApiInterface$Section](../modules/_types_d_.md#rxapiinterface_section)*

*Defined in [index.ts:44](https://github.com/polkadot-js/api/blob/a8305c9/packages/api-rx/src/index.ts#L44)*

___
<a id="state"></a>

##  state

**● state**: *[RxApiInterface$Section](../modules/_types_d_.md#rxapiinterface_section)*

*Defined in [index.ts:45](https://github.com/polkadot-js/api/blob/a8305c9/packages/api-rx/src/index.ts#L45)*

___
<a id="system"></a>

##  system

**● system**: *[RxApiInterface$Section](../modules/_types_d_.md#rxapiinterface_section)*

*Defined in [index.ts:46](https://github.com/polkadot-js/api/blob/a8305c9/packages/api-rx/src/index.ts#L46)*

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `BehaviorSubject`<`boolean`>

*Defined in [index.ts:65](https://github.com/polkadot-js/api/blob/a8305c9/packages/api-rx/src/index.ts#L65)*

**Returns:** `BehaviorSubject`<`boolean`>

___

