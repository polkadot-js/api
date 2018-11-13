

# Type parameters
#### T 
# Hierarchy

 [Base](_codec_base_.base.md)<[Base](_codec_base_.base.md)<`T`>>

**↳ EnumType**

↳  [StorageFunctionType](_metadata_.storagefunctiontype.md)

↳  [DigestItem](_digest_.digestitem.md)

↳  [ExtrinsicStatus](_extrinsicstatus_.extrinsicstatus.md)

↳  [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EnumType**(def: *`TypesDef`*, value?: *`any`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): [EnumType](_codec_enumtype_.enumtype.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:26](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L26)*

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

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:94](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L94)*

**Returns:** `number`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Defined in [codec/EnumType.ts:82](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L82)*

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Defined in [codec/EnumType.ts:86](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L86)*

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Base](_codec_base_.base.md)<`T`>

*Defined in [codec/EnumType.ts:90](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L90)*

**Returns:** [Base](_codec_base_.base.md)<`T`>

___

# Methods

<a id="setvalue"></a>

##  setValue

▸ **setValue**(index?: * [EnumType](_codec_enumtype_.enumtype.md)<`T`> &#124; `number`*, value?: *`any`*): `void`

*Defined in [codec/EnumType.ts:98](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L98)*

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

*Defined in [codec/EnumType.ts:115](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L115)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/EnumType.ts:119](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L119)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:123](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L123)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/EnumType.ts:127](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L127)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeenumtype"></a>

## `<Static>` decodeEnumType

▸ **decodeEnumType**<`T`>(def: *`TypesDef`*, value?: *`any`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): `object`

*Defined in [codec/EnumType.ts:45](https://github.com/polkadot-js/api/blob/42e9347/packages/types/src/codec/EnumType.ts#L45)*

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

