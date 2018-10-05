

*__name__*: Api

*__summary__*: The API may use a HTTP or WebSockets provider.

*__description__*: It allows for querying a Polkadot Client Node.

*__example__*:   

```
import Api from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const api = new Api(provider);
```

# Hierarchy

**Api**

# Implements

* `object`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Api**(provider: *`ProviderInterface`*): [Api](_index_.api.md)

*Defined in [index.ts:34](https://github.com/polkadot-js/api/blob/82dbc93/packages/api/src/index.ts#L34)*

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

*Defined in [index.ts:31](https://github.com/polkadot-js/api/blob/82dbc93/packages/api/src/index.ts#L31)*

___
<a id="chain"></a>

##  chain

**● chain**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:32](https://github.com/polkadot-js/api/blob/82dbc93/packages/api/src/index.ts#L32)*

___
<a id="state"></a>

##  state

**● state**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:33](https://github.com/polkadot-js/api/blob/82dbc93/packages/api/src/index.ts#L33)*

___
<a id="system"></a>

##  system

**● system**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:34](https://github.com/polkadot-js/api/blob/82dbc93/packages/api/src/index.ts#L34)*

___

# Methods

<a id="signature"></a>

## `<Static>` signature

▸ **signature**(__namedParameters: *`object`*): `string`

*Defined in [index.ts:65](https://github.com/polkadot-js/api/blob/82dbc93/packages/api/src/index.ts#L65)*

*__name__*: signature

*__summary__*: Returns a string representation of the method with inputs and outputs.

*__description__*: Formats the name, inputs and outputs into a human-readable string. This contains the input parameter names input types and output type.

*__example__*:   

```
import Api from '@polkadot/Api';

Api.signature({ name: 'test_method', params: [ { name: 'dest', type: 'Address' } ], type: 'Address' }); // => test_method (dest: Address): Address
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `string`

___

