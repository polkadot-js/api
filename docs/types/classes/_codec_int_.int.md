

*__name__*: Int

*__description__*: A generic signed integer codec. For Substrate all numbers are LE encoded, this handles the encoding and decoding of those numbers. Upon construction the bitLength is provided and any additional use keeps the number to this length. This extends `BN`, so all methods available on a normal `BN` object is available here.

# Hierarchy

 `AbstractInt`

**↳ Int**

↳  [I8](_i8_.i8.md)

↳  [I16](_i16_.i16.md)

↳  [I32](_i32_.i32.md)

↳  [I64](_i64_.i64.md)

↳  [I128](_i128_.i128.md)

↳  [I256](_i256_.i256.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Int**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*, bitLength?: *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*, isHexJson?: *`boolean`*): [Int](_codec_int_.int.md)

*Overrides AbstractInt.__constructor*

*Defined in [codec/Int.ts:21](https://github.com/polkadot-js/api/blob/4e8bc10/packages/types/src/codec/Int.ts#L21)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyNumber](../modules/_types_.md#anynumber) | 0 |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_UINT_BITS |
| `Default value` isHexJson | `boolean` | true |

**Returns:** [Int](_codec_int_.int.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/Int.ts:36](https://github.com/polkadot-js/api/blob/4e8bc10/packages/types/src/codec/Int.ts#L36)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/Int.ts:48](https://github.com/polkadot-js/api/blob/4e8bc10/packages/types/src/codec/Int.ts#L48)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

