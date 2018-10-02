

# Hierarchy

↳  [Extrinsic](_extrinsic_.extrinsic.md)

**↳ Proposal**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Proposal**(value?: *[AnyU8a](../modules/_types_d_.md#anyu8a)*): [Proposal](_proposal_.proposal.md)

*Inherited from [Bytes](_bytes_.bytes.md).[constructor](_bytes_.bytes.md#constructor)*

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [Bytes.ts:16](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/Bytes.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | [AnyU8a](../modules/_types_d_.md#anyu8a) |

**Returns:** [Proposal](_proposal_.proposal.md)

___

# Properties

<a id="_length"></a>

## `<Protected>` _length

**● _length**: *[Length](_codec_length_.length.md)*

*Inherited from [Bytes](_bytes_.bytes.md).[_length](_bytes_.bytes.md#_length)*

*Defined in [Bytes.ts:16](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/Bytes.ts#L16)*

___
<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="hash"></a>

##  hash

gethash(): [Hash](_hash_.hash.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[hash](_extrinsic_.extrinsic.md#hash)*

*Defined in [Extrinsic.ts:16](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/Extrinsic.ts#L16)*

**Returns:** [Hash](_hash_.hash.md)

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Bytes](_bytes_.bytes.md).[length](_bytes_.bytes.md#length)*

*Overrides [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [Bytes.ts:24](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/Bytes.ts#L24)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Bytes](_bytes_.bytes.md).[byteLength](_bytes_.bytes.md#bytelength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[byteLength](_codec_u8a_.u8a.md#bytelength)*

*Defined in [Bytes.ts:28](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/Bytes.ts#L28)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Bytes](_bytes_.bytes.md)

*Inherited from [Bytes](_bytes_.bytes.md).[fromJSON](_bytes_.bytes.md#fromjson)*

*Overrides [U8a](_codec_u8a_.u8a.md).[fromJSON](_codec_u8a_.u8a.md#fromjson)*

*Defined in [Bytes.ts:32](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/Bytes.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Bytes](_bytes_.bytes.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Bytes](_bytes_.bytes.md)

*Inherited from [Bytes](_bytes_.bytes.md).[fromU8a](_bytes_.bytes.md#fromu8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[fromU8a](_codec_u8a_.u8a.md#fromu8a)*

*Defined in [Bytes.ts:40](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/Bytes.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Bytes](_bytes_.bytes.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:45](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/codec/U8a.ts#L45)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:49](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/codec/U8a.ts#L49)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:57](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/codec/U8a.ts#L57)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Bytes](_bytes_.bytes.md).[toU8a](_bytes_.bytes.md#tou8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [Bytes.ts:51](https://github.com/polkadot-js/api/blob/48e57f9/packages/types/src/Bytes.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

