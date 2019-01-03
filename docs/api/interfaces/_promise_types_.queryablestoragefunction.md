

# Hierarchy

 `StorageFunction`

**↳ QueryableStorageFunction**

# Callable
▸ **__call**(cb: *`function`*): [UnsubFunction](../modules/_promise_types_.md#unsubfunction)

▸ **__call**(arg: *`any`*, cb: *`function`*): [UnsubFunction](../modules/_promise_types_.md#unsubfunction)

▸ **__call**(arg?: *`any`*): `Promise`< `Codec` &#124; `null` &#124; `undefined`>

▸ **__call**(arg?: *`any`*): `Uint8Array`

*Defined in [promise/types.ts:33](https://github.com/polkadot-js/api/blob/4f55d19/packages/api/src/promise/types.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | `function` |

**Returns:** [UnsubFunction](../modules/_promise_types_.md#unsubfunction)

*Defined in [promise/types.ts:34](https://github.com/polkadot-js/api/blob/4f55d19/packages/api/src/promise/types.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | `any` |
| cb | `function` |

**Returns:** [UnsubFunction](../modules/_promise_types_.md#unsubfunction)

*Defined in [promise/types.ts:35](https://github.com/polkadot-js/api/blob/4f55d19/packages/api/src/promise/types.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `any` |

**Returns:** `Promise`< `Codec` &#124; `null` &#124; `undefined`>

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:12](https://github.com/polkadot-js/api/blob/4f55d19/packages/types/src/StorageKey.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `any` |

**Returns:** `Uint8Array`

# Properties

<a id="at"></a>

##  at

**● at**: *`function`*

*Defined in [promise/types.ts:37](https://github.com/polkadot-js/api/blob/4f55d19/packages/api/src/promise/types.ts#L37)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:14](https://github.com/polkadot-js/api/blob/4f55d19/packages/types/src/StorageKey.ts#L14)*

___
<a id="method"></a>

##  method

**● method**: *`string`*

*Inherited from StorageFunction.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:15](https://github.com/polkadot-js/api/blob/4f55d19/packages/types/src/StorageKey.ts#L15)*

___
<a id="section"></a>

##  section

**● section**: *`string`*

*Inherited from StorageFunction.section*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:16](https://github.com/polkadot-js/api/blob/4f55d19/packages/types/src/StorageKey.ts#L16)*

___
<a id="subscribe"></a>

##  subscribe

**● subscribe**: *[QueryableStorageFunction$Subscribe](_promise_types_.queryablestoragefunction_subscribe.md)*

*Defined in [promise/types.ts:40](https://github.com/polkadot-js/api/blob/4f55d19/packages/api/src/promise/types.ts#L40)*

___
<a id="tojson"></a>

##  toJSON

**● toJSON**: *`function`*

*Inherited from StorageFunction.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/StorageKey.ts:17](https://github.com/polkadot-js/api/blob/4f55d19/packages/types/src/StorageKey.ts#L17)*

#### Type declaration
▸(): `any`

**Returns:** `any`

___

