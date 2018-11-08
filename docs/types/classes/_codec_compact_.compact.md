

# Hierarchy

 [Base](_codec_base_.base.md)< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>

**↳ Compact**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Compact**(Type: *`Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*, value?: *`AnyNumber`*): [Compact](_codec_compact_.compact.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Compact.ts:35](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L35)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| Type | `Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> | - |
| `Default value` value | `AnyNumber` | 0 |

**Returns:** [Compact](_codec_compact_.compact.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: * [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)
*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="bitlength"></a>

##  bitLength

getbitLength(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Defined in [codec/Compact.ts:124](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L124)*

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Compact.ts:128](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L128)*

**Returns:** `number`

___

# Methods

<a id="tobn"></a>

##  toBn

▸ **toBn**(): `any`

*Defined in [codec/Compact.ts:132](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L132)*

**Returns:** `any`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `any`

*Defined in [codec/Compact.ts:136](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L136)*

**Returns:** `any`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Compact.ts:140](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L140)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Compact.ts:144](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L144)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Compact.ts:148](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L148)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Compact.ts:152](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L152)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="addlengthprefix"></a>

## `<Static>` addLengthPrefix

▸ **addLengthPrefix**(u8a: *`Uint8Array`*, bitLength?: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `Uint8Array`

*Defined in [codec/Compact.ts:53](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L53)*

Prepend a Uint8Array with its compact length.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| u8a | `Uint8Array` | - |  The Uint8Array to be prefixed |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |  DEFAULT_LENGTH_BITS |

**Returns:** `Uint8Array`

___
<a id="decodecompact"></a>

## `<Static>` decodeCompact

▸ **decodeCompact**(Type: *`Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*, value: *`AnyNumber`*):  [Moment](_moment_.moment.md) &#124; [UInt](_codec_uint_.uint.md)

*Defined in [codec/Compact.ts:66](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> |
| value | `AnyNumber` |

**Returns:**  [Moment](_moment_.moment.md) &#124; [UInt](_codec_uint_.uint.md)

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

▸ **decodeU8a**(_input: * `Uint8Array` &#124; `string`*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): [`number`, `BN`]

*Defined in [codec/Compact.ts:86](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _input |  `Uint8Array` &#124; `string`|
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** [`number`, `BN`]

___
<a id="encodeu8a"></a>

## `<Static>` encodeU8a

▸ **encodeU8a**(_value: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `Uint8Array`

*Defined in [codec/Compact.ts:103](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L103)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _value |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** `Uint8Array`

___
<a id="striplengthprefix"></a>

## `<Static>` stripLengthPrefix

▸ **stripLengthPrefix**(u8a: *`Uint8Array`*, bitLength?: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `Uint8Array`

*Defined in [codec/Compact.ts:60](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L60)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| u8a | `Uint8Array` | - |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |  DEFAULT_LENGTH_BITS |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Type: *`Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*): `Constructor`<[Compact](_codec_compact_.compact.md)>

*Defined in [codec/Compact.ts:40](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Compact.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> |

**Returns:** `Constructor`<[Compact](_codec_compact_.compact.md)>

___

