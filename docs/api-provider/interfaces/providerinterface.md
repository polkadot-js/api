[Polkadot JS API](../README.md) > [ProviderInterface](../interfaces/providerinterface.md)

# Interface: ProviderInterface

## Hierarchy

**ProviderInterface**

## Implemented by

* [HttpProvider](../classes/httpprovider.md)

## Index

### Methods

* [isConnected](providerinterface.md#isconnected)
* [on](providerinterface.md#on)
* [send](providerinterface.md#send)
* [subscribe](providerinterface.md#subscribe)
* [unsubscribe](providerinterface.md#unsubscribe)

---

## Methods

<a id="isconnected"></a>

###  isConnected

▸ **isConnected**(): `boolean`

*Defined in [types.d.ts:45](https://github.com/polkadot-js/api/blob/5f8c52d/packages/api-provider/src/types.d.ts#L45)*

**Returns:** `boolean`

___
<a id="on"></a>

###  on

▸ **on**(type: *[ProviderInterface$Emitted](../#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../#providerinterface_emitcb)*): `void`

*Defined in [types.d.ts:46](https://github.com/polkadot-js/api/blob/5f8c52d/packages/api-provider/src/types.d.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

###  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Defined in [types.d.ts:47](https://github.com/polkadot-js/api/blob/5f8c52d/packages/api-provider/src/types.d.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../#providerinterface_callback)*): `Promise`<`number`>

*Defined in [types.d.ts:48](https://github.com/polkadot-js/api/blob/5f8c52d/packages/api-provider/src/types.d.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [types.d.ts:49](https://github.com/polkadot-js/api/blob/5f8c52d/packages/api-provider/src/types.d.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

