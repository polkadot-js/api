

# Hierarchy

 [Base](_codec_base_.base.md)<`Uint8Array`>

**↳ U8a**

↳  [AccountIndex](_accountindex_.accountindex.md)

↳  [U8aFixed](_codec_u8afixed_.u8afixed.md)

↳  [Bytes](_bytes_.bytes.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new U8a**(value?: *[AnyU8a](../modules/_types_d_.md#anyu8a)*): [U8a](_codec_u8a_.u8a.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/U8a.ts:16](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/U8a.ts#L16)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyU8a](../modules/_types_d_.md#anyu8a) |  new Uint8Array() |

**Returns:** [U8a](_codec_u8a_.u8a.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="length"></a>

##  length

getlength(): `number`

*Defined in [codec/U8a.ts:25](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/U8a.ts#L25)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/U8a.ts:29](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/U8a.ts#L29)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [U8a](_codec_u8a_.u8a.md)

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/U8a.ts:33](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/U8a.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [U8a](_codec_u8a_.u8a.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [U8a](_codec_u8a_.u8a.md)

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/U8a.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [U8a](_codec_u8a_.u8a.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/U8a.ts:45](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/U8a.ts#L45)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:49](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/U8a.ts#L49)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:57](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/U8a.ts#L57)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/U8a.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

