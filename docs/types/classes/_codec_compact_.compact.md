

*__name__*: Compact

*__description__*: A compact length-encoding codec wrapper. It performs the same function as Length, however differs in that it uses a variable number of bytes to do the actual encoding. This is mostly used by other types to add length-prefixed encoding, or in the case of wrapped types, taking a number and making the compact representation thereof

# Hierarchy

 [Base](_codec_base_.base.md)< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>

**↳ Compact**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Compact**(Type: *[Constructor](../modules/_types_.md#constructor)< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*, value?: *[AnyNumber](../modules/_types_.md#anynumber)*): [Compact](_codec_compact_.compact.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Compact.ts:22](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L22)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> | - |
| `Default value` value | [AnyNumber](../modules/_types_.md#anynumber) | 0 |

**Returns:** [Compact](_codec_compact_.compact.md)

___

# Properties

<a id="addlengthprefix"></a>

## `<Static>` addLengthPrefix

**● addLengthPrefix**: *`compactAddLength`* =  compactAddLength

*Defined in [codec/Compact.ts:40](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L40)*

Prepend a Uint8Array with its compact length.
*__param__*: The Uint8Array to be prefixed

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

**● decodeU8a**: *`compactFromU8a`* =  compactFromU8a

*Defined in [codec/Compact.ts:41](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L41)*

___
<a id="encodeu8a"></a>

## `<Static>` encodeU8a

**● encodeU8a**: *`compactToU8a`* =  compactToU8a

*Defined in [codec/Compact.ts:42](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L42)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Compact.ts:71](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L71)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Defined in [codec/Compact.ts:78](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L78)*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [codec/Compact.ts:85](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L85)*

*__description__*: Returns the BN representation of the number

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Compact.ts:92](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L92)*

*__description__*: Returns a hex string representation of the value

**Returns:** `any`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Compact.ts:99](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L99)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Compact.ts:106](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L106)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Compact.ts:113](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L113)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Compact.ts:121](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L121)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodecompact"></a>

## `<Static>` decodeCompact

▸ **decodeCompact**(Type: *[Constructor](../modules/_types_.md#constructor)< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*, value: *[AnyNumber](../modules/_types_.md#anynumber)*):  [Moment](_moment_.moment.md) &#124; [UInt](_codec_uint_.uint.md)

*Defined in [codec/Compact.ts:50](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> |
| value | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:**  [Moment](_moment_.moment.md) &#124; [UInt](_codec_uint_.uint.md)

___
<a id="striplengthprefix"></a>

## `<Static>` stripLengthPrefix

▸ **stripLengthPrefix**(u8a: *`Uint8Array`*, bitLength?: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `Uint8Array`

*Defined in [codec/Compact.ts:44](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L44)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| u8a | `Uint8Array` | - |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |  DEFAULT_BITLENGTH |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Type: *[Constructor](../modules/_types_.md#constructor)< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*): [Constructor](../modules/_types_.md#constructor)<[Compact](_codec_compact_.compact.md)>

*Defined in [codec/Compact.ts:27](https://github.com/polkadot-js/api/blob/1d18321/packages/types/src/codec/Compact.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Compact](_codec_compact_.compact.md)>

___

