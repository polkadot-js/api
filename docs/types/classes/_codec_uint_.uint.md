

# Hierarchy

 [Base](_codec_base_.base.md)<`BN`>

**↳ UInt**

↳  [U128](_u128_.u128.md)

↳  [U64](_u64_.u64.md)

↳  [U16](_u16_.u16.md)

↳  [U32](_u32_.u32.md)

↳  [U8](_u8_.u8.md)

↳  [U256](_u256_.u256.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new UInt**(value?: *[AnyNumber](../modules/_types_d_.md#anynumber)*, bitLength?: *`BitLength`*): [UInt](_codec_uint_.uint.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/UInt.ts:28](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L28)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyNumber](../modules/_types_d_.md#anynumber) | 0 |
| `Default value` bitLength | `BitLength` | 64 |

**Returns:** [UInt](_codec_uint_.uint.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`BN`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/Base.ts#L19)*

___

# Methods

<a id="add"></a>

##  add

▸ **add**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:95](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L95)*

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

*Defined in [codec/UInt.ts:53](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L53)*

**Returns:** `number`

___
<a id="cmp"></a>

##  cmp

▸ **cmp**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `number`

*Defined in [codec/UInt.ts:101](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `number`

___
<a id="div"></a>

##  div

▸ **div**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:107](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L107)*

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

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L57)*

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

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [UInt](_codec_uint_.uint.md)

___
<a id="gt"></a>

##  gt

▸ **gt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:129](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L129)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="gte"></a>

##  gte

▸ **gte**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:135](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L135)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="iszero"></a>

##  isZero

▸ **isZero**(): `boolean`

*Defined in [codec/UInt.ts:113](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L113)*

**Returns:** `boolean`

___
<a id="lt"></a>

##  lt

▸ **lt**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:117](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L117)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="lte"></a>

##  lte

▸ **lte**(test: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `boolean`

*Defined in [codec/UInt.ts:123](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| test |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `boolean`

___
<a id="mul"></a>

##  mul

▸ **mul**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:141](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L141)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="sub"></a>

##  sub

▸ **sub**(other: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*): `BN`

*Defined in [codec/UInt.ts:147](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L147)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| other |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|

**Returns:** `BN`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [codec/UInt.ts:85](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L85)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/UInt.ts:69](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L69)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/UInt.ts:73](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L73)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/UInt.ts:89](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L89)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/UInt.ts:81](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L81)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/UInt.ts:77](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L77)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**(value: *[AnyNumber](../modules/_types_d_.md#anynumber)*): `BN`

*Defined in [codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/UInt.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [AnyNumber](../modules/_types_d_.md#anynumber) |

**Returns:** `BN`

___

