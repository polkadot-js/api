

*__name__*: UInt

*__description__*: A generic unsigned integer codec. For Substrate all numbers are LE encoded, this handles the encoding and decoding of those numbers. Upon construction the bitLength is provided and any additional use keeps the number to this length. This extends `BN`, so all methods available on a normal `BN` object is available here.

# Hierarchy

 `AbstractInt`

**↳ UInt**

↳  [U32](_u32_.u32.md)

↳  [U64](_u64_.u64.md)

↳  [U128](_u128_.u128.md)

↳  [U16](_u16_.u16.md)

↳  [U8](_u8_.u8.md)

↳  [U256](_u256_.u256.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new UInt**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*, bitLength?: *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*, isHexJson?: *`boolean`*): [UInt](_codec_uint_.uint.md)

*Overrides AbstractInt.__constructor*

*Defined in [codec/UInt.ts:21](https://github.com/polkadot-js/api/blob/b40d7a3/packages/types/src/codec/UInt.ts#L21)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyNumber](../modules/_types_.md#anynumber) | 0 |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_UINT_BITS |
| `Default value` isHexJson | `boolean` | false |

**Returns:** [UInt](_codec_uint_.uint.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/b40d7a3/packages/types/src/codec/UInt.ts#L36)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/b40d7a3/packages/types/src/codec/UInt.ts#L48)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

