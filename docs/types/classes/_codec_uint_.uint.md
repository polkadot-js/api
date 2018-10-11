

# Hierarchy

 [Base](_codec_base_.base.md)<`BN`>

**↳ UInt**

↳  [U128](_u128_.u128.md)

↳  [Compact](_codec_compact_.compact.md)

↳  [U16](_u16_.u16.md)

↳  [U64](_u64_.u64.md)

↳  [U32](_u32_.u32.md)

↳  [U8](_u8_.u8.md)

↳  [U256](_u256_.u256.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new UInt**(value?: *`AnyNumber`*, bitLength?: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*, isHexJson?: *`boolean`*): [UInt](_codec_uint_.uint.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/UInt.ts:31](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L31)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `AnyNumber` | 0 |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |  DEFAULT_UINT_BITS |
| `Default value` isHexJson | `boolean` | true |

**Returns:** [UInt](_codec_uint_.uint.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`BN`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/Base.ts#L19)*

___

# Methods

<a id="add"></a>

##  add

▸ **add**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:101](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L57)*

**Returns:** `number`

___
<a id="cmp"></a>

##  cmp

▸ **cmp**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `number`

*Defined in [codec/UInt.ts:107](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L107)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `number`

___
<a id="div"></a>

##  div

▸ **div**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:113](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L113)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [UInt](_codec_uint_.uint.md)

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/UInt.ts:61](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [UInt](_codec_uint_.uint.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [UInt](_codec_uint_.uint.md)

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/UInt.ts:67](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [UInt](_codec_uint_.uint.md)

___
<a id="gt"></a>

##  gt

▸ **gt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:135](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L135)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="gte"></a>

##  gte

▸ **gte**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:141](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L141)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="iszero"></a>

##  isZero

▸ **isZero**(): `boolean`

*Defined in [codec/UInt.ts:119](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L119)*

**Returns:** `boolean`

___
<a id="lt"></a>

##  lt

▸ **lt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:123](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="lte"></a>

##  lte

▸ **lte**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:129](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L129)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="mul"></a>

##  mul

▸ **mul**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:147](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L147)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="sub"></a>

##  sub

▸ **sub**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:153](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L153)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [codec/UInt.ts:91](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L91)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/UInt.ts:73](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L73)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/UInt.ts:77](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L77)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/UInt.ts:95](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L95)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/UInt.ts:87](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L87)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/UInt.ts:83](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeuint"></a>

## `<Static>` decodeUInt

▸ **decodeUInt**(value: *`AnyNumber`*): `BN`

*Defined in [codec/UInt.ts:42](https://github.com/polkadot-js/api/blob/2b88a8f/packages/types/src/codec/UInt.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `AnyNumber` |

**Returns:** `BN`

___

