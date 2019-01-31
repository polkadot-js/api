

*__name__*: Compact

*__description__*: A compact length-encoding codec wrapper. It performs the same function as Length, however differs in that it uses a variable number of bytes to do the actual encoding. This is mostly used by other types to add length-prefixed encoding, or in the case of wrapped types, taking a number and making the compact representation thereof

# Hierarchy

 [Base](_codec_base_.base.md)<[UInt](_codec_uint_.uint.md) | [Moment](_moment_.moment.md)>

**↳ Compact**

↳  [NonceCompact](_noncecompact_.noncecompact.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Compact**(Type: *[Constructor](../modules/_types_.md#constructor)<[UInt](_codec_uint_.uint.md) | [Moment](_moment_.moment.md)>*, value?: *[Compact](_codec_compact_.compact.md) | [AnyNumber](../modules/_types_.md#anynumber)*): [Compact](_codec_compact_.compact.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Compact.ts:23](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L23)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)<[UInt](_codec_uint_.uint.md) | [Moment](_moment_.moment.md)> | - |
| `Default value` value | [Compact](_codec_compact_.compact.md) | [AnyNumber](../modules/_types_.md#anynumber) | 0 |

**Returns:** [Compact](_codec_compact_.compact.md)

___

# Properties

<a id="addlengthprefix"></a>

## `<Static>` addLengthPrefix

**● addLengthPrefix**: *`compactAddLength`* =  compactAddLength

*Defined in [codec/Compact.ts:41](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L41)*

Prepend a Uint8Array with its compact length.
*__param__*: The Uint8Array to be prefixed

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

**● decodeU8a**: *`compactFromU8a`* =  compactFromU8a

*Defined in [codec/Compact.ts:42](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L42)*

___
<a id="encodeu8a"></a>

## `<Static>` encodeU8a

**● encodeU8a**: *`compactToU8a`* =  compactToU8a

*Defined in [codec/Compact.ts:43](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L43)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Compact.ts:72](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L72)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)

*Defined in [codec/Compact.ts:79](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L79)*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/Compact.ts:86](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L86)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [codec/Compact.ts:97](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L97)*

*__description__*: Returns the BN representation of the number

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Compact.ts:104](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L104)*

*__description__*: Returns a hex string representation of the value

**Returns:** `any`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Compact.ts:111](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L111)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Compact.ts:118](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L118)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Compact.ts:125](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L125)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Compact.ts:133](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L133)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="unwrap"></a>

##  unwrap

▸ **unwrap**(): [UInt](_codec_uint_.uint.md) | [Moment](_moment_.moment.md)

*Defined in [codec/Compact.ts:140](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L140)*

*__description__*: Returns the embedded [UInt](_codec_uint_.uint.md) or [Moment](_moment_.moment.md) value

**Returns:** [UInt](_codec_uint_.uint.md) | [Moment](_moment_.moment.md)

___
<a id="decodecompact"></a>

## `<Static>` decodeCompact

▸ **decodeCompact**(Type: *[Constructor](../modules/_types_.md#constructor)<[UInt](_codec_uint_.uint.md) | [Moment](_moment_.moment.md)>*, value: *[Compact](_codec_compact_.compact.md) | [AnyNumber](../modules/_types_.md#anynumber)*): [Moment](_moment_.moment.md) | [UInt](_codec_uint_.uint.md)

*Defined in [codec/Compact.ts:51](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)<[UInt](_codec_uint_.uint.md) | [Moment](_moment_.moment.md)> |
| value | [Compact](_codec_compact_.compact.md) | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** [Moment](_moment_.moment.md) | [UInt](_codec_uint_.uint.md)

___
<a id="striplengthprefix"></a>

## `<Static>` stripLengthPrefix

▸ **stripLengthPrefix**(u8a: *`Uint8Array`*, bitLength?: *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*): `Uint8Array`

*Defined in [codec/Compact.ts:45](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L45)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| u8a | `Uint8Array` | - |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_BITLENGTH |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Type: *[Constructor](../modules/_types_.md#constructor)<[UInt](_codec_uint_.uint.md) | [Moment](_moment_.moment.md)>*): [Constructor](../modules/_types_.md#constructor)<[Compact](_codec_compact_.compact.md)>

*Defined in [codec/Compact.ts:28](https://github.com/polkadot-js/api/blob/8d7ca09/packages/types/src/codec/Compact.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)<[UInt](_codec_uint_.uint.md) | [Moment](_moment_.moment.md)> |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Compact](_codec_compact_.compact.md)>

___

