

# Hierarchy

 [Base](_codec_base_.base.md)<`string`>

**↳ Text**

↳  [Type](_type_.type.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Text**(value?: * [Text](_text_.text.md) &#124; `string` &#124; `AnyU8a`*): [Text](_text_.text.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Text.ts:24](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/Text.ts#L24)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Text](_text_.text.md) &#124; `string` &#124; `AnyU8a`| &quot;&quot; |

**Returns:** [Text](_text_.text.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`string`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="length"></a>

##  length

getlength(): `number`

*Defined in [Text.ts:48](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/Text.ts#L48)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [Text.ts:52](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/Text.ts#L52)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Text](_text_.text.md)

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [Text.ts:64](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/Text.ts#L64)*

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

*Defined in [Text.ts:56](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/Text.ts#L56)*

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

*Defined in [Text.ts:70](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/Text.ts#L70)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Text.ts:74](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/Text.ts#L74)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [Text.ts:78](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/Text.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodetext"></a>

## `<Static>` decodeText

▸ **decodeText**(input: *`any`*): `string`

*Defined in [Text.ts:31](https://github.com/polkadot-js/api/blob/256740e/packages/types/src/Text.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** `string`

___

