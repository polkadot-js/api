

# Index

### Enumerations

* [TypeValueInfo](../enums/_codec_createtype_.typevalueinfo.md)

### Type aliases

* [TypeValue](_codec_createtype_.md#typevalue)

### Functions

* [createType](_codec_createtype_.md#createtype)
* [getType](_codec_createtype_.md#gettype)
* [getTypeValue](_codec_createtype_.md#gettypevalue)
* [typeSplit](_codec_createtype_.md#typesplit)

---

# Type aliases

<a id="typevalue"></a>

##  TypeValue

**Ƭ TypeValue**: *`object`*

*Defined in [codec/createType.ts:20](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/createType.ts#L20)*

#### Type declaration

___

# Functions

<a id="createtype"></a>

##  createType

▸ **createType**(type: *`string`*, value?: *`any`*): [Base](../classes/_codec_base_.base.md)

*Defined in [codec/createType.ts:138](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/createType.ts#L138)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| `Optional` value | `any` |

**Returns:** [Base](../classes/_codec_base_.base.md)

___
<a id="gettype"></a>

##  getType

▸ **getType**(value: *[TypeValue](_codec_createtype_.md#typevalue)*): `Constructor`

*Defined in [codec/createType.ts:108](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/createType.ts#L108)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [TypeValue](_codec_createtype_.md#typevalue) |

**Returns:** `Constructor`

___
<a id="gettypevalue"></a>

##  getTypeValue

▸ **getTypeValue**(_type: *`string`*): [TypeValue](_codec_createtype_.md#typevalue)

*Defined in [codec/createType.ts:77](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/createType.ts#L77)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _type | `string` |

**Returns:** [TypeValue](_codec_createtype_.md#typevalue)

___
<a id="typesplit"></a>

##  typeSplit

▸ **typeSplit**(type: *`string`*): `Array`<`string`>

*Defined in [codec/createType.ts:27](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/createType.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `Array`<`string`>

___

