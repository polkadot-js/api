

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

*Defined in [index.ts:29](https://github.com/polkadot-js/api/blob/6ff8471/packages/api/src/index.ts#L29)*

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

*Defined in [index.ts:26](https://github.com/polkadot-js/api/blob/6ff8471/packages/api/src/index.ts#L26)*

___
<a id="chain"></a>

##  chain

**● chain**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:27](https://github.com/polkadot-js/api/blob/6ff8471/packages/api/src/index.ts#L27)*

___
<a id="state"></a>

##  state

**● state**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:28](https://github.com/polkadot-js/api/blob/6ff8471/packages/api/src/index.ts#L28)*

___
<a id="system"></a>

##  system

**● system**: *[ApiInterface$Section](../modules/_types_d_.md#apiinterface_section)*

*Defined in [index.ts:29](https://github.com/polkadot-js/api/blob/6ff8471/packages/api/src/index.ts#L29)*

___

# Methods

<a id="signature"></a>

## `<Static>` signature

▸ **signature**(__namedParameters: *`object`*): `string`

*Defined in [index.ts:58](https://github.com/polkadot-js/api/blob/6ff8471/packages/api/src/index.ts#L58)*

*__name__*: signature

*__signature__*: jsonrpcSignature (method: InterfaceMethodDefinition): string

*__summary__*: Returns a string representation of the method with inputs and outputs.

*__description__*: Formats the name, inputs and outputs into a human-readable string. This contains the input parameter names input types and output type.

*__example__*: import Api from '@polkadot/Api';

Api.signature({ name: 'test\_method', params: \[ { name: 'dest', type: 'Address' } \], type: 'Address' }); // => test\_method (dest: Address): Address

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `string`

___

