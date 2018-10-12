

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

**↳ StorageFunctionType**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageFunctionType**(index?: * `undefined` &#124; `number`*, value?: *`any`*): [StorageFunctionType](_metadata_.storagefunctiontype.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [Metadata.ts:221](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/Metadata.ts#L221)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` index |  `undefined` &#124; `number`|
| `Optional` value | `any` |

**Returns:** [StorageFunctionType](_metadata_.storagefunctiontype.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *[Base](_codec_base_.base.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="asmap"></a>

##  asMap

getasMap(): [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)

*Defined in [Metadata.ts:233](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/Metadata.ts#L233)*

**Returns:** [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)

___
<a id="astype"></a>

##  asType

getasType(): [Type](_type_.type.md)

*Defined in [Metadata.ts:237](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/Metadata.ts#L237)*

**Returns:** [Type](_type_.type.md)

___
<a id="ismap"></a>

##  isMap

getisMap(): `boolean`

*Defined in [Metadata.ts:229](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/Metadata.ts#L229)*

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:42](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/EnumType.ts#L42)*

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Base](_codec_base_.base.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:46](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/EnumType.ts#L46)*

**Returns:** [Base](_codec_base_.base.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[byteLength](_codec_enumtype_.enumtype.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/EnumType.ts:50](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/EnumType.ts#L50)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input?: *`any`*): [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[fromJSON](_codec_enumtype_.enumtype.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/EnumType.ts:54](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/EnumType.ts#L54)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` input | `any` |  {} |

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[fromU8a](_codec_enumtype_.enumtype.md#fromu8a)*

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/EnumType.ts:73](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/EnumType.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)>

___
<a id="setvalue"></a>

##  setValue

▸ **setValue**(index?: * [EnumType](_codec_enumtype_.enumtype.md)< [Type](_type_.type.md) &#124; [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)> &#124; `number`*, value?: *`any`*): `void`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[setValue](_codec_enumtype_.enumtype.md#setvalue)*

*Defined in [codec/EnumType.ts:80](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/EnumType.ts#L80)*

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

*Defined in [codec/EnumType.ts:97](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/EnumType.ts#L97)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/EnumType.ts#L101)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [Metadata.ts:241](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/Metadata.ts#L241)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Base.ts:45](https://github.com/polkadot-js/api/blob/2b5169c/packages/types/src/codec/Base.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

