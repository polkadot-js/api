

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

**↳ StorageFunctionType**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageFunctionType**(value?: *`any`*, index?: * `undefined` &#124; `number`*): [StorageFunctionType](_metadata_.storagefunctiontype.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [Metadata.ts:223](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/Metadata.ts#L223)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `any` |
| `Optional` index |  `undefined` &#124; `number`|

**Returns:** [StorageFunctionType](_metadata_.storagefunctiontype.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *[Base](_codec_base_.base.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="asmap"></a>

##  asMap

getasMap(): [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)

*Defined in [Metadata.ts:235](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/Metadata.ts#L235)*

**Returns:** [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)

___
<a id="astype"></a>

##  asType

getasType(): [Type](_type_.type.md)

*Defined in [Metadata.ts:239](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/Metadata.ts#L239)*

**Returns:** [Type](_type_.type.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:89](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L89)*

**Returns:** `number`

___
<a id="ismap"></a>

##  isMap

getisMap(): `boolean`

*Defined in [Metadata.ts:231](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/Metadata.ts#L231)*

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:81](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L81)*

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Base](_codec_base_.base.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:85](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L85)*

**Returns:** [Base](_codec_base_.base.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

___

# Methods

<a id="setvalue"></a>

##  setValue

▸ **setValue**(index?: * [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)> &#124; `number`*, value?: *`any`*): `void`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[setValue](_codec_enumtype_.enumtype.md#setvalue)*

*Defined in [codec/EnumType.ts:93](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` index |  [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)> &#124; `number`|
| `Optional` value | `any` |

**Returns:** `void`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:110](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L110)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:114](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/EnumType.ts#L114)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [Metadata.ts:243](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/Metadata.ts#L243)*

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

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[decodeEnumType](_codec_enumtype_.enumtype.md#decodeenumtype)*

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

