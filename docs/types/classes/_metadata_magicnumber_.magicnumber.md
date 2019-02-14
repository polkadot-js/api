

# Hierarchy

↳  [U32](_u32_.u32.md)

**↳ MagicNumber**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MagicNumber**(value?: *`any`*): [MagicNumber](_metadata_magicnumber_.magicnumber.md)

*Overrides [U32](_u32_.u32.md).[constructor](_u32_.u32.md#constructor)*

*Defined in [Metadata/MagicNumber.ts:11](https://github.com/polkadot-js/api/blob/f8f41b5/packages/types/src/Metadata/MagicNumber.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [MagicNumber](_metadata_magicnumber_.magicnumber.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/f8f41b5/packages/types/src/codec/UInt.ts#L36)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/f8f41b5/packages/types/src/codec/UInt.ts#L48)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

