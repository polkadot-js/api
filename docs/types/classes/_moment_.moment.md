

# Hierarchy

 [Base](_codec_base_.base.md)<`Date`>

**↳ Moment**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Moment**(value?: * [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`*): [Moment](_moment_.moment.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Moment.ts:18](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L18)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`| 0 |

**Returns:** [Moment](_moment_.moment.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Date`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [Moment.ts:45](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L45)*

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Defined in [Moment.ts:41](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L41)*

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="gettime"></a>

##  getTime

▸ **getTime**(): `number`

*Defined in [Moment.ts:49](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L49)*

**Returns:** `number`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [Moment.ts:69](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L69)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [Moment.ts:53](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L53)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [Moment.ts:57](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L57)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [Moment.ts:73](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L73)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Moment.ts:65](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L65)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [Moment.ts:61](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodemoment"></a>

## `<Static>` decodeMoment

▸ **decodeMoment**(value: * [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`*): `Date`

*Defined in [Moment.ts:25](https://github.com/polkadot-js/api/blob/d097a7a/packages/types/src/Moment.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`|

**Returns:** `Date`

___

