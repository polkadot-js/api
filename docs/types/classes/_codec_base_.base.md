

# Type parameters
#### T 
# Hierarchy

**Base**

↳  [U8a](_codec_u8a_.u8a.md)

↳  [Address](_address_.address.md)

↳  [UInt](_codec_uint_.uint.md)

↳  [Struct](_codec_struct_.struct.md)

↳  [Vector](_codec_vector_.vector.md)

↳  [Text](_text_.text.md)

↳  [Enum](_codec_enum_.enum.md)

↳  [EnumType](_codec_enumtype_.enumtype.md)

↳  [Option](_codec_option_.option.md)

↳  [Bool](_bool_.bool.md)

↳  [Moment](_moment_.moment.md)

↳  [Origin](_origin_.origin.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Base**(value?: *`any`*): [Base](_codec_base_.base.md)

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [Base](_codec_base_.base.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L19)*

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Defined in [codec/Base.ts:25](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L25)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Base](_codec_base_.base.md)<`T`>

*Defined in [codec/Base.ts:29](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Base](_codec_base_.base.md)<`T`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Base](_codec_base_.base.md)<`T`>

*Defined in [codec/Base.ts:33](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Base](_codec_base_.base.md)<`T`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Defined in [codec/Base.ts:37](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L37)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Defined in [codec/Base.ts:41](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L41)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [codec/Base.ts:45](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

