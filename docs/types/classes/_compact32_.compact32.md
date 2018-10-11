

# Hierarchy

↳  [Compact](_codec_compact_.compact.md)

**↳ Compact32**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Compact32**(value?: *[AnyNumber](../modules/_types_d_.md#anynumber)*): [Compact32](_compact32_.compact32.md)

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [Compact32.ts:9](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/Compact32.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | [AnyNumber](../modules/_types_d_.md#anynumber) |

**Returns:** [Compact32](_compact32_.compact32.md)

___

# Properties

<a id="_bitlength"></a>

## `<Protected>` _bitLength

**● _bitLength**: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*

*Inherited from [UInt](_codec_uint_.uint.md).[_bitLength](_codec_uint_.uint.md#_bitlength)*

*Defined in [codec/UInt.ts:30](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L30)*

___
<a id="raw"></a>

##  raw

**● raw**: *`BN`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/Base.ts#L19)*

___

# Methods

<a id="add"></a>

##  add

▸ **add**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Inherited from [UInt](_codec_uint_.uint.md).[add](_codec_uint_.uint.md#add)*

*Defined in [codec/UInt.ts:101](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Compact](_codec_compact_.compact.md).[byteLength](_codec_compact_.compact.md#bytelength)*

*Overrides [UInt](_codec_uint_.uint.md).[byteLength](_codec_uint_.uint.md#bytelength)*

*Defined in [codec/Compact.ts:74](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/Compact.ts#L74)*

**Returns:** `number`

___
<a id="cmp"></a>

##  cmp

▸ **cmp**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `number`

*Inherited from [UInt](_codec_uint_.uint.md).[cmp](_codec_uint_.uint.md#cmp)*

*Defined in [codec/UInt.ts:107](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L107)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `number`

___
<a id="div"></a>

##  div

▸ **div**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Inherited from [UInt](_codec_uint_.uint.md).[div](_codec_uint_.uint.md#div)*

*Defined in [codec/UInt.ts:113](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L113)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [UInt](_codec_uint_.uint.md)

*Inherited from [UInt](_codec_uint_.uint.md).[fromJSON](_codec_uint_.uint.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/UInt.ts:61](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [UInt](_codec_uint_.uint.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [UInt](_codec_uint_.uint.md)

*Inherited from [Compact](_codec_compact_.compact.md).[fromU8a](_codec_compact_.compact.md#fromu8a)*

*Overrides [UInt](_codec_uint_.uint.md).[fromU8a](_codec_uint_.uint.md#fromu8a)*

*Defined in [codec/Compact.ts:78](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/Compact.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [UInt](_codec_uint_.uint.md)

___
<a id="gt"></a>

##  gt

▸ **gt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Inherited from [UInt](_codec_uint_.uint.md).[gt](_codec_uint_.uint.md#gt)*

*Defined in [codec/UInt.ts:135](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L135)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="gte"></a>

##  gte

▸ **gte**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Inherited from [UInt](_codec_uint_.uint.md).[gte](_codec_uint_.uint.md#gte)*

*Defined in [codec/UInt.ts:141](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L141)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="iszero"></a>

##  isZero

▸ **isZero**(): `boolean`

*Inherited from [UInt](_codec_uint_.uint.md).[isZero](_codec_uint_.uint.md#iszero)*

*Defined in [codec/UInt.ts:119](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L119)*

**Returns:** `boolean`

___
<a id="lt"></a>

##  lt

▸ **lt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Inherited from [UInt](_codec_uint_.uint.md).[lt](_codec_uint_.uint.md#lt)*

*Defined in [codec/UInt.ts:123](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="lte"></a>

##  lte

▸ **lte**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Inherited from [UInt](_codec_uint_.uint.md).[lte](_codec_uint_.uint.md#lte)*

*Defined in [codec/UInt.ts:129](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L129)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="mul"></a>

##  mul

▸ **mul**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Inherited from [UInt](_codec_uint_.uint.md).[mul](_codec_uint_.uint.md#mul)*

*Defined in [codec/UInt.ts:147](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L147)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="sub"></a>

##  sub

▸ **sub**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Inherited from [UInt](_codec_uint_.uint.md).[sub](_codec_uint_.uint.md#sub)*

*Defined in [codec/UInt.ts:153](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L153)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Inherited from [UInt](_codec_uint_.uint.md).[toBn](_codec_uint_.uint.md#tobn)*

*Defined in [codec/UInt.ts:91](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L91)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Defined in [codec/UInt.ts:73](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L73)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [UInt](_codec_uint_.uint.md).[toJSON](_codec_uint_.uint.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/UInt.ts:77](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L77)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [UInt](_codec_uint_.uint.md).[toNumber](_codec_uint_.uint.md#tonumber)*

*Defined in [codec/UInt.ts:95](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L95)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[toString](_codec_uint_.uint.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/UInt.ts:87](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L87)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Compact](_codec_compact_.compact.md).[toU8a](_codec_compact_.compact.md#tou8a)*

*Overrides [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Defined in [codec/Compact.ts:86](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/Compact.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

▸ **decodeU8a**(_input: * `Uint8Array` &#124; `string`*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): [`number`, `BN`]

*Inherited from [Compact](_codec_compact_.compact.md).[decodeU8a](_codec_compact_.compact.md#decodeu8a)*

*Defined in [codec/Compact.ts:36](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/Compact.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _input |  `Uint8Array` &#124; `string`|
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** [`number`, `BN`]

___
<a id="decodeuint"></a>

## `<Static>` decodeUInt

▸ **decodeUInt**(value: *[AnyNumber](../modules/_types_d_.md#anynumber)*): `BN`

*Inherited from [UInt](_codec_uint_.uint.md).[decodeUInt](_codec_uint_.uint.md#decodeuint)*

*Defined in [codec/UInt.ts:42](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/UInt.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [AnyNumber](../modules/_types_d_.md#anynumber) |

**Returns:** `BN`

___
<a id="encodeu8a"></a>

## `<Static>` encodeU8a

▸ **encodeU8a**(_value: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `Uint8Array`

*Inherited from [Compact](_codec_compact_.compact.md).[encodeU8a](_codec_compact_.compact.md#encodeu8a)*

*Defined in [codec/Compact.ts:53](https://github.com/polkadot-js/api/blob/82baafb/packages/types/src/codec/Compact.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _value |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** `Uint8Array`

___

