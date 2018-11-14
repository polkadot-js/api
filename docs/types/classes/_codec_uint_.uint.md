

# Hierarchy

 [Base](_codec_base_.base.md)<`BN`>

**↳ UInt**

↳  [U32](_u32_.u32.md)

↳  [U128](_u128_.u128.md)

↳  [U16](_u16_.u16.md)

↳  [U64](_u64_.u64.md)

↳  [U8](_u8_.u8.md)

↳  [U256](_u256_.u256.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new UInt**(value?: *`AnyNumber`*, bitLength?: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*, isHexJson?: *`boolean`*): [UInt](_codec_uint_.uint.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/UInt.ts:24](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L24)*

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

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="bitlength"></a>

##  bitLength

getbitLength(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Defined in [codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L50)*

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/UInt.ts:54](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L54)*

**Returns:** `number`

___

# Methods

<a id="add"></a>

##  add

▸ **add**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:86](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="cmp"></a>

##  cmp

▸ **cmp**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `number`

*Defined in [codec/UInt.ts:92](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L92)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `number`

___
<a id="div"></a>

##  div

▸ **div**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:98](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L98)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="eq"></a>

##  eq

▸ **eq**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:104](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L104)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="gt"></a>

##  gt

▸ **gt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:126](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L126)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="gte"></a>

##  gte

▸ **gte**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:132](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L132)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="iszero"></a>

##  isZero

▸ **isZero**(): `boolean`

*Defined in [codec/UInt.ts:110](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L110)*

**Returns:** `boolean`

___
<a id="lt"></a>

##  lt

▸ **lt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:114](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L114)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="lte"></a>

##  lte

▸ **lte**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:120](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L120)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="mul"></a>

##  mul

▸ **mul**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:138](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L138)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="sub"></a>

##  sub

▸ **sub**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:144](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L144)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [codec/UInt.ts:76](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L76)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/UInt.ts:58](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L58)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/UInt.ts:62](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L62)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/UInt.ts:80](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L80)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/UInt.ts:72](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L72)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/UInt.ts:68](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeuint"></a>

## `<Static>` decodeUInt

▸ **decodeUInt**(value: *`AnyNumber`*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `BN`

*Defined in [codec/UInt.ts:35](https://github.com/polkadot-js/api/blob/67dd498/packages/types/src/codec/UInt.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `AnyNumber` |
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** `BN`

___

