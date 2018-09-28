

*__example__*: import Api from '@polkadot/api'; import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('[http://127.0.0.1:9944')](http://127.0.0.1:9944')); const api = new Api(provider);

# Hierarchy

**Api**

# Implements

* `object`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Api**(provider: *`ProviderInterface`*): [Api](_index_.api.md)

*Defined in [index.ts:32](https://github.com/polkadot-js/api/blob/74737b6/packages/api/src/index.ts#L32)*

*__constructor__*: Default constructor for the Api Object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| provider | `ProviderInterface` |  An API provider using HTTP or WebSocket |

**Returns:** [Api](_index_.api.md)

___

# Properties

<a id="author"></a>

##  author

**● author**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:29](https://github.com/polkadot-js/api/blob/74737b6/packages/api/src/index.ts#L29)*

___
<a id="chain"></a>

##  chain

**● chain**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:30](https://github.com/polkadot-js/api/blob/74737b6/packages/api/src/index.ts#L30)*

___
<a id="state"></a>

##  state

**● state**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:31](https://github.com/polkadot-js/api/blob/74737b6/packages/api/src/index.ts#L31)*

___
<a id="system"></a>

##  system

**● system**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:32](https://github.com/polkadot-js/api/blob/74737b6/packages/api/src/index.ts#L32)*

___

