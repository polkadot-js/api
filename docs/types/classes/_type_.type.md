

# Hierarchy

↳  [Text](_text_.text.md)

**↳ Type**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Type**(value?: * [Text](_text_.text.md) &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `string`*): [Type](_type_.type.md)

*Overrides [Text](_text_.text.md).[constructor](_text_.text.md#constructor)*

*Defined in [Type.ts:16](https://github.com/polkadot-js/api/blob/77a883c/packages/types/src/Type.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value |  [Text](_text_.text.md) &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `string`|

**Returns:** [Type](_type_.type.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`string`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/77a883c/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Text](_text_.text.md).[encodedLength](_text_.text.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [Text.ts:49](https://github.com/polkadot-js/api/blob/77a883c/packages/types/src/Text.ts#L49)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Overrides [Text](_text_.text.md).[length](_text_.text.md#length)*

*Defined in [Type.ts:27](https://github.com/polkadot-js/api/blob/77a883c/packages/types/src/Type.ts#L27)*

**Returns:** `number`

___

# Methods

<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Text](_text_.text.md).[toJSON](_text_.text.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [Text.ts:53](https://github.com/polkadot-js/api/blob/77a883c/packages/types/src/Text.ts#L53)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Text](_text_.text.md).[toString](_text_.text.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Text.ts:57](https://github.com/polkadot-js/api/blob/77a883c/packages/types/src/Text.ts#L57)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Text](_text_.text.md).[toU8a](_text_.text.md#tou8a)*

*Defined in [Type.ts:34](https://github.com/polkadot-js/api/blob/77a883c/packages/types/src/Type.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodetext"></a>

## `<Static>` decodeText

▸ **decodeText**(value: *`any`*): `string`

*Inherited from [Text](_text_.text.md).[decodeText](_text_.text.md#decodetext)*

*Defined in [Text.ts:27](https://github.com/polkadot-js/api/blob/77a883c/packages/types/src/Text.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `string`

___

