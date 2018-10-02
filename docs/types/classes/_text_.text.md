

# Hierarchy

 [Base](_codec_base_.base.md)<`string`>

**↳ Text**

↳  [Type](_type_.type.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Text**(value?: * [Text](_text_.text.md) &#124; `string`*): [Text](_text_.text.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Text.ts:21](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/Text.ts#L21)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Text](_text_.text.md) &#124; `string`| &quot;&quot; |

**Returns:** [Text](_text_.text.md)

___

# Properties

<a id="_length"></a>

## `<Protected>` _length

**● _length**: *[Length](_codec_length_.length.md)*

*Defined in [Text.ts:21](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/Text.ts#L21)*

___
<a id="raw"></a>

##  raw

**● raw**: *`string`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="length"></a>

##  length

getlength(): `number`

*Defined in [Text.ts:33](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/Text.ts#L33)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [Text.ts:37](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/Text.ts#L37)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Text](_text_.text.md)

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [Text.ts:44](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/Text.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Text](_text_.text.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Text](_text_.text.md)

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [Text.ts:50](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/Text.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Text](_text_.text.md)

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [Text.ts:61](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/Text.ts#L61)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Text.ts:65](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/Text.ts#L65)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [Text.ts:69](https://github.com/polkadot-js/api/blob/29b221b/packages/types/src/Text.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

