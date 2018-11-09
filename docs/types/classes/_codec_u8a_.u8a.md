

# Hierarchy

 [Base](_codec_base_.base.md)<`Uint8Array`>

**↳ U8a**

↳  [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

↳  [U8aFixed](_codec_u8afixed_.u8afixed.md)

↳  [Bytes](_bytes_.bytes.md)

↳  [Data](_data_.data.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new U8a**(value?: *`AnyU8a`*): [U8a](_codec_u8a_.u8a.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/U8a.ts:14](https://github.com/polkadot-js/api/blob/7483dc5/packages/types/src/codec/U8a.ts#L14)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `AnyU8a` |  new Uint8Array() |

**Returns:** [U8a](_codec_u8a_.u8a.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/7483dc5/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/U8a.ts:35](https://github.com/polkadot-js/api/blob/7483dc5/packages/types/src/codec/U8a.ts#L35)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Defined in [codec/U8a.ts:31](https://github.com/polkadot-js/api/blob/7483dc5/packages/types/src/codec/U8a.ts#L31)*

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/7483dc5/packages/types/src/codec/U8a.ts#L39)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/7483dc5/packages/types/src/codec/U8a.ts#L43)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/7483dc5/packages/types/src/codec/U8a.ts#L51)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/U8a.ts:47](https://github.com/polkadot-js/api/blob/7483dc5/packages/types/src/codec/U8a.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

▸ **decodeU8a**(value: *`any`*): `Uint8Array`

*Defined in [codec/U8a.ts:21](https://github.com/polkadot-js/api/blob/7483dc5/packages/types/src/codec/U8a.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `Uint8Array`

___

