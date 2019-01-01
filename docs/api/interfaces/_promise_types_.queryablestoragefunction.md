

# Hierarchy

 `StorageFunction`

**↳ QueryableStorageFunction**

# Callable
▸ **__call**(arg?: *`any`*): `Promise`< `Codec` &#124; `null` &#124; `undefined`>

▸ **__call**(cb: *`function`*): `Promise`<`number`>

▸ **__call**(arg: *`any`*, cb: *`function`*): `Promise`<`number`>

▸ **__call**(arg?: *`any`*): `Uint8Array`

*Defined in [promise/types.ts:15](https://github.com/polkadot-js/api/blob/e79c6d8/packages/api/src/promise/types.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `any` |

**Returns:** `Promise`< `Codec` &#124; `null` &#124; `undefined`>

*Defined in [promise/types.ts:16](https://github.com/polkadot-js/api/blob/e79c6d8/packages/api/src/promise/types.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | `function` |

**Returns:** `Promise`<`number`>

*Defined in [promise/types.ts:17](https://github.com/polkadot-js/api/blob/e79c6d8/packages/api/src/promise/types.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | `any` |
| cb | `function` |

**Returns:** `Promise`<`number`>

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:12](https://github.com/polkadot-js/api/blob/e79c6d8/packages/types/src/StorageKey.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `any` |

**Returns:** `Uint8Array`

# Properties

<a id="at"></a>

##  at

**● at**: *`function`*

*Defined in [promise/types.ts:19](https://github.com/polkadot-js/api/blob/e79c6d8/packages/api/src/promise/types.ts#L19)*

#### Type declaration
▸(hash: *`Hash`*, arg?: *`any`*): `Promise`< `Codec` &#124; `null` &#124; `undefined`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | `Hash` |
| `Optional` arg | `any` |

**Returns:** `Promise`< `Codec` &#124; `null` &#124; `undefined`>

___
<a id="meta"></a>

##  meta

**● meta**: *`StorageFunctionMetadata`*

*Inherited from StorageFunction.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:14](https://github.com/polkadot-js/api/blob/e79c6d8/packages/types/src/StorageKey.ts#L14)*

___
<a id="method"></a>

##  method

**● method**: *`string`*

*Inherited from StorageFunction.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:15](https://github.com/polkadot-js/api/blob/e79c6d8/packages/types/src/StorageKey.ts#L15)*

___
<a id="section"></a>

##  section

**● section**: *`string`*

*Inherited from StorageFunction.section*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:16](https://github.com/polkadot-js/api/blob/e79c6d8/packages/types/src/StorageKey.ts#L16)*

___
<a id="tojson"></a>

##  toJSON

**● toJSON**: *`function`*

*Inherited from StorageFunction.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:17](https://github.com/polkadot-js/api/blob/e79c6d8/packages/types/src/StorageKey.ts#L17)*

#### Type declaration
▸(): `any`

**Returns:** `any`

___
<a id="unsubscribe"></a>

##  unsubscribe

**● unsubscribe**: *`function`*

*Defined in [promise/types.ts:20](https://github.com/polkadot-js/api/blob/e79c6d8/packages/api/src/promise/types.ts#L20)*

#### Type declaration
▸(subscriptionId: *`number`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriptionId | `number` |

**Returns:** `Promise`<`any`>

___

