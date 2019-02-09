

# Index

### Enumerations

* [TypeDefInfo](../enums/_codec_createtype_.typedefinfo.md)

### Type aliases

* [TypeDef](_codec_createtype_.md#typedef)

### Functions

* [createClass](_codec_createtype_.md#createclass)
* [createType](_codec_createtype_.md#createtype)
* [getTypeClass](_codec_createtype_.md#gettypeclass)
* [getTypeDef](_codec_createtype_.md#gettypedef)
* [typeSplit](_codec_createtype_.md#typesplit)

---

# Type aliases

<a id="typedef"></a>

##  TypeDef

**Ƭ TypeDef**: *`object`*

*Defined in [codec/createType.ts:26](https://github.com/polkadot-js/api/blob/b40d7a3/packages/types/src/codec/createType.ts#L26)*

#### Type declaration

___

# Functions

<a id="createclass"></a>

##  createClass

▸ **createClass**(type: *[Text](../classes/_text_.text.md) | `string`*, value?: *`any`*): [Constructor](_types_.md#constructor)

*Defined in [codec/createType.ts:172](https://github.com/polkadot-js/api/blob/b40d7a3/packages/types/src/codec/createType.ts#L172)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [Text](../classes/_text_.text.md) | `string` |
| `Optional` value | `any` |

**Returns:** [Constructor](_types_.md#constructor)

___
<a id="createtype"></a>

##  createType

▸ **createType**(type: *[Text](../classes/_text_.text.md) | `string`*, value?: *`any`*): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/createType.ts:178](https://github.com/polkadot-js/api/blob/b40d7a3/packages/types/src/codec/createType.ts#L178)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [Text](../classes/_text_.text.md) | `string` |
| `Optional` value | `any` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="gettypeclass"></a>

##  getTypeClass

▸ **getTypeClass**(value: *[TypeDef](_codec_createtype_.md#typedef)*): [Constructor](_types_.md#constructor)

*Defined in [codec/createType.ts:126](https://github.com/polkadot-js/api/blob/b40d7a3/packages/types/src/codec/createType.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [TypeDef](_codec_createtype_.md#typedef) |

**Returns:** [Constructor](_types_.md#constructor)

___
<a id="gettypedef"></a>

##  getTypeDef

▸ **getTypeDef**(_type: *[Text](../classes/_text_.text.md) | `string`*, name?: *`undefined` | `string`*): [TypeDef](_codec_createtype_.md#typedef)

*Defined in [codec/createType.ts:82](https://github.com/polkadot-js/api/blob/b40d7a3/packages/types/src/codec/createType.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _type | [Text](../classes/_text_.text.md) | `string` |
| `Optional` name | `undefined` | `string` |

**Returns:** [TypeDef](_codec_createtype_.md#typedef)

___
<a id="typesplit"></a>

##  typeSplit

▸ **typeSplit**(type: *`string`*): `Array`<`string`>

*Defined in [codec/createType.ts:34](https://github.com/polkadot-js/api/blob/b40d7a3/packages/types/src/codec/createType.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `Array`<`string`>

___

