

# Hierarchy

 [Base](_codec_base_.base.md)< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>

**↳ Compact**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Compact**(Type: *`Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*, value?: *`AnyNumber`*): [Compact](_codec_compact_.compact.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Compact.ts:34](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L34)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Type | `Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> | - |
| `Default value` value | `AnyNumber` | 0 |

**Returns:** [Compact](_codec_compact_.compact.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Compact.ts:125](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L125)*

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Defined in [codec/Compact.ts:121](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L121)*

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [codec/Compact.ts:129](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L129)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `any`

*Defined in [codec/Compact.ts:133](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L133)*

**Returns:** `any`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Defined in [codec/Compact.ts:137](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L137)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Compact.ts:141](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L141)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Defined in [codec/Compact.ts:145](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L145)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [codec/Compact.ts:149](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L149)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="addlengthprefix"></a>

## `<Static>` addLengthPrefix

▸ **addLengthPrefix**(u8a: *`Uint8Array`*, bitLength?: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `Uint8Array`

*Defined in [codec/Compact.ts:52](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L52)*

Prepend a Uint8Array with its compact length.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| u8a | `Uint8Array` | - |  The Uint8Array to be prefixed |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |  DEFAULT_LENGTH_BITS |

**Returns:** `Uint8Array`

___
<a id="decodecompact"></a>

## `<Static>` decodeCompact

▸ **decodeCompact**(Type: *`Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*, value: *`AnyNumber`*):  [Moment](_moment_.moment.md) &#124; [UInt](_codec_uint_.uint.md)

*Defined in [codec/Compact.ts:65](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | `Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> |
| value | `AnyNumber` |

**Returns:**  [Moment](_moment_.moment.md) &#124; [UInt](_codec_uint_.uint.md)

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

▸ **decodeU8a**(_input: * `Uint8Array` &#124; `string`*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): [`number`, `BN`]

*Defined in [codec/Compact.ts:83](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L83)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _input |  `Uint8Array` &#124; `string`|
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** [`number`, `BN`]

___
<a id="encodeu8a"></a>

## `<Static>` encodeU8a

▸ **encodeU8a**(_value: * [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `Uint8Array`

*Defined in [codec/Compact.ts:100](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L100)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _value |  [UInt](_codec_uint_.uint.md) &#124; `BN` &#124; `number`|
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** `Uint8Array`

___
<a id="striplengthprefix"></a>

## `<Static>` stripLengthPrefix

▸ **stripLengthPrefix**(u8a: *`Uint8Array`*, bitLength?: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `Uint8Array`

*Defined in [codec/Compact.ts:59](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L59)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| u8a | `Uint8Array` | - |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |  DEFAULT_LENGTH_BITS |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Type: *`Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*): `Constructor`<[Compact](_codec_compact_.compact.md)>

*Defined in [codec/Compact.ts:39](https://github.com/polkadot-js/api/blob/141f761/packages/types/src/codec/Compact.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | `Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> |

**Returns:** `Constructor`<[Compact](_codec_compact_.compact.md)>

___

