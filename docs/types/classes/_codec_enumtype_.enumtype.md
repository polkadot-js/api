

# Type parameters
#### T 
# Hierarchy

 [Base](_codec_base_.base.md)<[Base](_codec_base_.base.md)<`T`>>

**↳ EnumType**

↳  [StorageFunctionType](_metadata_.storagefunctiontype.md)

↳  [ExtrinsicStatus](_extrinsicstatus_.extrinsicstatus.md)

↳  [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EnumType**(def: *`TypesDef`*, value?: *`any`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): [EnumType](_codec_enumtype_.enumtype.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:28](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| def | `TypesDef` |
| `Optional` value | `any` |
| `Optional` index |  `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>|

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *[Base](_codec_base_.base.md)<`T`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:89](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L89)*

**Returns:** `number`

___
<a id="type"></a>

##  type

gettype(): `string`

*Defined in [codec/EnumType.ts:81](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L81)*

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Base](_codec_base_.base.md)<`T`>

*Defined in [codec/EnumType.ts:85](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L85)*

**Returns:** [Base](_codec_base_.base.md)<`T`>

___

# Methods

<a id="setvalue"></a>

##  setValue

▸ **setValue**(index?: * [EnumType](_codec_enumtype_.enumtype.md)<`T`> &#124; `number`*, value?: *`any`*): `void`

*Defined in [codec/EnumType.ts:93](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` index |  [EnumType](_codec_enumtype_.enumtype.md)<`T`> &#124; `number`|
| `Optional` value | `any` |

**Returns:** `void`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:110](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L110)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/EnumType.ts:114](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L114)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:118](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L118)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Base.ts:37](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Base.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeenumtype"></a>

## `<Static>` decodeEnumType

▸ **decodeEnumType**<`T`>(def: *`TypesDef`*, value?: *`any`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): `object`

*Defined in [codec/EnumType.ts:47](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L47)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| def | `TypesDef` |
| `Optional` value | `any` |
| `Optional` index |  `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>|

**Returns:** `object`

___

