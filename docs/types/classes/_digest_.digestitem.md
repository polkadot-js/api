

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)< `AuthoritiesChange` &#124; `ChangesTrieRoot` &#124; `Other` &#124; `Seal`>

**↳ DigestItem**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new DigestItem**(value: *`any`*): [DigestItem](_digest_.digestitem.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [Digest.ts:42](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/Digest.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** [DigestItem](_digest_.digestitem.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *[Base](_codec_base_.base.md)< `AuthoritiesChange` &#124; `ChangesTrieRoot` &#124; `Other` &#124; `Seal`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:94](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L94)*

**Returns:** `number`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:82](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L82)*

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:86](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L86)*

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Base](_codec_base_.base.md)< `AuthoritiesChange` &#124; `ChangesTrieRoot` &#124; `Other` &#124; `Seal`>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:90](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L90)*

**Returns:** [Base](_codec_base_.base.md)< `AuthoritiesChange` &#124; `ChangesTrieRoot` &#124; `Other` &#124; `Seal`>

___

# Methods

<a id="setvalue"></a>

##  setValue

▸ **setValue**(index?: * [EnumType](_codec_enumtype_.enumtype.md)< `AuthoritiesChange` &#124; `ChangesTrieRoot` &#124; `Other` &#124; `Seal`> &#124; `number`*, value?: *`any`*): `void`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[setValue](_codec_enumtype_.enumtype.md#setvalue)*

*Defined in [codec/EnumType.ts:98](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` index |  [EnumType](_codec_enumtype_.enumtype.md)< `AuthoritiesChange` &#124; `ChangesTrieRoot` &#124; `Other` &#124; `Seal`> &#124; `number`|
| `Optional` value | `any` |

**Returns:** `void`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:115](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L115)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:119](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L119)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:123](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L123)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/EnumType.ts:127](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L127)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeenumtype"></a>

## `<Static>` decodeEnumType

▸ **decodeEnumType**<`T`>(def: *`TypesDef`*, value?: *`any`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): `object`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[decodeEnumType](_codec_enumtype_.enumtype.md#decodeenumtype)*

*Defined in [codec/EnumType.ts:45](https://github.com/polkadot-js/api/blob/9458189/packages/types/src/codec/EnumType.ts#L45)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| def | `TypesDef` |
| `Optional` value | `any` |
| `Optional` index |  `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>|

**Returns:** `object`

___

