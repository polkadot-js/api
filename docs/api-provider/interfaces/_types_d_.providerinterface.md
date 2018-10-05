

# Hierarchy

**ProviderInterface**

# Implemented by

* [HttpProvider](../classes/_http_index_.httpprovider.md)

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Defined in [types.d.ts:45](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L45)*

**Returns:** `boolean`

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb)*): `void`

*Defined in [types.d.ts:46](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Defined in [types.d.ts:47](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback)*): `Promise`<`number`>

*Defined in [types.d.ts:48](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [types.d.ts:49](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/types.d.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

