

# Hierarchy

**ProviderInterface**

# Implemented by

* [HttpProvider](../classes/_http_index_.httpprovider.md)
* [Mock](../classes/_mock_index_.mock.md)

# Properties

<a id="hassubscriptions"></a>

##  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Defined in [types.ts:45](https://github.com/polkadot-js/api/blob/04c639d/packages/rpc-provider/src/types.ts#L45)*

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Defined in [types.ts:46](https://github.com/polkadot-js/api/blob/04c639d/packages/rpc-provider/src/types.ts#L46)*

**Returns:** `boolean`

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb)*): `void`

*Defined in [types.ts:47](https://github.com/polkadot-js/api/blob/04c639d/packages/rpc-provider/src/types.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Defined in [types.ts:48](https://github.com/polkadot-js/api/blob/04c639d/packages/rpc-provider/src/types.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../modules/_types_.md#providerinterface_callback)*): `Promise`<`number`>

*Defined in [types.ts:49](https://github.com/polkadot-js/api/blob/04c639d/packages/rpc-provider/src/types.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../modules/_types_.md#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [types.ts:50](https://github.com/polkadot-js/api/blob/04c639d/packages/rpc-provider/src/types.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

