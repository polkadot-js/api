

# Hierarchy

↳  [U64](_u64_.u64.md)

**↳ ParachainId**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ParachainId**(value?: *`AnyNumber`*): [ParachainId](_parachainid_.parachainid.md)

*Inherited from [U64](_u64_.u64.md).[constructor](_u64_.u64.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [U64.ts:9](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/U64.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `AnyNumber` |

**Returns:** [ParachainId](_parachainid_.parachainid.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`BN`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [UInt](_codec_uint_.uint.md).[encodedLength](_codec_uint_.uint.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L50)*

**Returns:** `number`

___

# Methods

<a id="add"></a>

##  add

▸ **add**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Inherited from [UInt](_codec_uint_.uint.md).[add](_codec_uint_.uint.md#add)*

*Defined in [codec/UInt.ts:82](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L82)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="cmp"></a>

##  cmp

▸ **cmp**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `number`

*Inherited from [UInt](_codec_uint_.uint.md).[cmp](_codec_uint_.uint.md#cmp)*

*Defined in [codec/UInt.ts:88](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L88)*

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

*Defined in [codec/UInt.ts:94](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="eq"></a>

##  eq

▸ **eq**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Inherited from [UInt](_codec_uint_.uint.md).[eq](_codec_uint_.uint.md#eq)*

*Defined in [codec/UInt.ts:100](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L100)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="gt"></a>

##  gt

▸ **gt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Inherited from [UInt](_codec_uint_.uint.md).[gt](_codec_uint_.uint.md#gt)*

*Defined in [codec/UInt.ts:122](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L122)*

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

*Defined in [codec/UInt.ts:128](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L128)*

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

*Defined in [codec/UInt.ts:106](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L106)*

**Returns:** `boolean`

___
<a id="lt"></a>

##  lt

▸ **lt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Inherited from [UInt](_codec_uint_.uint.md).[lt](_codec_uint_.uint.md#lt)*

*Defined in [codec/UInt.ts:110](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L110)*

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

*Defined in [codec/UInt.ts:116](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L116)*

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

*Defined in [codec/UInt.ts:134](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L134)*

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

*Defined in [codec/UInt.ts:140](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L140)*

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

*Defined in [codec/UInt.ts:72](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L72)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Defined in [codec/UInt.ts:54](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L54)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [UInt](_codec_uint_.uint.md).[toJSON](_codec_uint_.uint.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/UInt.ts:58](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L58)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [UInt](_codec_uint_.uint.md).[toNumber](_codec_uint_.uint.md#tonumber)*

*Defined in [codec/UInt.ts:76](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L76)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[toString](_codec_uint_.uint.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/UInt.ts:68](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L68)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L64)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeuint"></a>

## `<Static>` decodeUInt

▸ **decodeUInt**(value: *`AnyNumber`*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `BN`

*Inherited from [UInt](_codec_uint_.uint.md).[decodeUInt](_codec_uint_.uint.md#decodeuint)*

*Defined in [codec/UInt.ts:35](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/UInt.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `AnyNumber` |
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** `BN`

___

