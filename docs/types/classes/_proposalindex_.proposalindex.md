

*__name__*: ProposalIndex

*__description__*: An increasing number that represents a specific council proposal index in the system, implemented as [U32](_u32_.u32.md)

# Hierarchy

↳  [U32](_u32_.u32.md)

**↳ ProposalIndex**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ProposalIndex**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*): [ProposalIndex](_proposalindex_.proposalindex.md)

*Inherited from [U32](_u32_.u32.md).[constructor](_u32_.u32.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [U32.ts:14](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/U32.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** [ProposalIndex](_proposalindex_.proposalindex.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/UInt.ts#L36)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/UInt.ts#L48)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

