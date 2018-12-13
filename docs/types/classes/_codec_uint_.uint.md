

*__name__*: UInt

*__description__*: A generic number codec. For Substrate all numbers are LE encoded, this handles the encoding and decoding of those numbers. Upon construction the bitLength is provided and any additional use keeps the number to this length. This extends `BN`, so all methods available on a normal `BN` object is available here.

# Hierarchy

 `BN`

**↳ UInt**

↳  [U32](_u32_.u32.md)

↳  [U128](_u128_.u128.md)

↳  [U16](_u16_.u16.md)

↳  [U64](_u64_.u64.md)

↳  [U8](_u8_.u8.md)

↳  [U256](_u256_.u256.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new UInt**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*, bitLength?: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*, isHexJson?: *`boolean`*): [UInt](_codec_uint_.uint.md)

*Overrides BN.__constructor*

*Defined in [codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/04c639d/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyNumber](../modules/_types_.md#anynumber) | 0 |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |  DEFAULT_UINT_BITS |
| `Default value` isHexJson | `boolean` | true |

**Returns:** [UInt](_codec_uint_.uint.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/UInt.ts:57](https://github.com/polkadot-js/api/blob/04c639d/packages/types/src/codec/UInt.ts#L57)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Overrides BN.bitLength*

*Defined in [codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/04c639d/packages/types/src/codec/UInt.ts#L64)*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [codec/UInt.ts:71](https://github.com/polkadot-js/api/blob/04c639d/packages/types/src/codec/UInt.ts#L71)*

*__description__*: Returns the BN representation of the number. (Compatibility)

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/UInt.ts:78](https://github.com/polkadot-js/api/blob/04c639d/packages/types/src/codec/UInt.ts#L78)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Overrides BN.toJSON*

*Defined in [codec/UInt.ts:85](https://github.com/polkadot-js/api/blob/04c639d/packages/types/src/codec/UInt.ts#L85)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(base?: * `undefined` &#124; `number`*): `string`

*Overrides BN.toString*

*Defined in [codec/UInt.ts:95](https://github.com/polkadot-js/api/blob/04c639d/packages/types/src/codec/UInt.ts#L95)*

*__description__*: Returns the string representation of the value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` base |  `undefined` &#124; `number`|  The base to use for the conversion |

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/UInt.ts:104](https://github.com/polkadot-js/api/blob/04c639d/packages/types/src/codec/UInt.ts#L104)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeuint"></a>

## `<Static>` decodeUInt

▸ **decodeUInt**(value: *[AnyNumber](../modules/_types_.md#anynumber)*, bitLength: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `string`

*Defined in [codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/04c639d/packages/types/src/codec/UInt.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [AnyNumber](../modules/_types_.md#anynumber) |
| bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |

**Returns:** `string`

___

