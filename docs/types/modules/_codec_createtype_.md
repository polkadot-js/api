

# Index

### Enumerations

* [TypeDefInfo](../enums/_codec_createtype_.typedefinfo.md)

### Type aliases

* [TypeDef](_codec_createtype_.md#typedef)

### Functions

* [createType](_codec_createtype_.md#createtype)
* [getTypeClass](_codec_createtype_.md#gettypeclass)
* [getTypeDef](_codec_createtype_.md#gettypedef)
* [typeSplit](_codec_createtype_.md#typesplit)

---

# Type aliases

<a id="typedef"></a>

##  TypeDef

**Ƭ TypeDef**: *`object`*

*Defined in [codec/createType.ts:22](https://github.com/polkadot-js/api/blob/96dc7df/packages/types/src/codec/createType.ts#L22)*

#### Type declaration

___

# Functions

<a id="createtype"></a>

##  createType

▸ **createType**(type: * [Text](../classes/_text_.text.md) &#124; `string`*, value?: *`any`*): [Base](../classes/_codec_base_.base.md)

*Defined in [codec/createType.ts:158](https://github.com/polkadot-js/api/blob/96dc7df/packages/types/src/codec/createType.ts#L158)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type |  [Text](../classes/_text_.text.md) &#124; `string`|
| `Optional` value | `any` |

**Returns:** [Base](../classes/_codec_base_.base.md)

___
<a id="gettypeclass"></a>

##  getTypeClass

▸ **getTypeClass**(value: *[TypeDef](_codec_createtype_.md#typedef)*): `Constructor`

*Defined in [codec/createType.ts:118](https://github.com/polkadot-js/api/blob/96dc7df/packages/types/src/codec/createType.ts#L118)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [TypeDef](_codec_createtype_.md#typedef) |

**Returns:** `Constructor`

___
<a id="gettypedef"></a>

##  getTypeDef

▸ **getTypeDef**(_type: * [Text](../classes/_text_.text.md) &#124; `string`*): [TypeDef](_codec_createtype_.md#typedef)

*Defined in [codec/createType.ts:79](https://github.com/polkadot-js/api/blob/96dc7df/packages/types/src/codec/createType.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _type |  [Text](../classes/_text_.text.md) &#124; `string`|

**Returns:** [TypeDef](_codec_createtype_.md#typedef)

___
<a id="typesplit"></a>

##  typeSplit

▸ **typeSplit**(type: *`string`*): `Array`<`string`>

*Defined in [codec/createType.ts:29](https://github.com/polkadot-js/api/blob/96dc7df/packages/types/src/codec/createType.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `Array`<`string`>

___

