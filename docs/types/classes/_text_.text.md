

# Hierarchy

 [Base](_codec_base_.base.md)<`string`>

**↳ Text**

↳  [Type](_type_.type.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Text**(value?: * [Text](_text_.text.md) &#124; `string` &#124; `AnyU8a` &#124; `object`*): [Text](_text_.text.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Text.ts:19](https://github.com/polkadot-js/api/blob/ba4f6ac/packages/types/src/Text.ts#L19)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Text](_text_.text.md) &#124; `string` &#124; `AnyU8a` &#124; `object`| &quot;&quot; |

**Returns:** [Text](_text_.text.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`string`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/ba4f6ac/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [Text.ts:46](https://github.com/polkadot-js/api/blob/ba4f6ac/packages/types/src/Text.ts#L46)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Defined in [Text.ts:42](https://github.com/polkadot-js/api/blob/ba4f6ac/packages/types/src/Text.ts#L42)*

**Returns:** `number`

___

# Methods

<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [Text.ts:50](https://github.com/polkadot-js/api/blob/ba4f6ac/packages/types/src/Text.ts#L50)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Text.ts:54](https://github.com/polkadot-js/api/blob/ba4f6ac/packages/types/src/Text.ts#L54)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [Text.ts:58](https://github.com/polkadot-js/api/blob/ba4f6ac/packages/types/src/Text.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodetext"></a>

## `<Static>` decodeText

▸ **decodeText**(value: * [Text](_text_.text.md) &#124; `string` &#124; `AnyU8a` &#124; `object`*): `string`

*Defined in [Text.ts:26](https://github.com/polkadot-js/api/blob/ba4f6ac/packages/types/src/Text.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [Text](_text_.text.md) &#124; `string` &#124; `AnyU8a` &#124; `object`|

**Returns:** `string`

___

