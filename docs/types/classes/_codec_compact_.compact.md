

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

*Defined in [codec/Compact.ts:29](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L29)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Type | `Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> | - |
| `Default value` value | `AnyNumber` | 0 |

**Returns:** [Compact](_codec_compact_.compact.md)

___

# Properties

<a id="addlengthprefix"></a>

## `<Static>` addLengthPrefix

**● addLengthPrefix**: *`compactAddLength`* =  compactAddLength

*Defined in [codec/Compact.ts:47](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L47)*

Prepend a Uint8Array with its compact length.
*__param__*: The Uint8Array to be prefixed

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

**● decodeU8a**: *`compactFromU8a`* =  compactFromU8a

*Defined in [codec/Compact.ts:48](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L48)*

___
<a id="encodeu8a"></a>

## `<Static>` encodeU8a

**● encodeU8a**: *`compactToU8a`* =  compactToU8a

*Defined in [codec/Compact.ts:49](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L49)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Compact.ts:79](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L79)*

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Defined in [codec/Compact.ts:75](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L75)*

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [codec/Compact.ts:83](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L83)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `any`

*Defined in [codec/Compact.ts:87](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L87)*

**Returns:** `any`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Defined in [codec/Compact.ts:91](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L91)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Compact.ts:95](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L95)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Defined in [codec/Compact.ts:99](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L99)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [codec/Compact.ts:103](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L103)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodecompact"></a>

## `<Static>` decodeCompact

▸ **decodeCompact**(Type: *`Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*, value: *`AnyNumber`*):  [Moment](_moment_.moment.md) &#124; [UInt](_codec_uint_.uint.md)

*Defined in [codec/Compact.ts:57](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | `Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> |
| value | `AnyNumber` |

**Returns:**  [Moment](_moment_.moment.md) &#124; [UInt](_codec_uint_.uint.md)

___
<a id="striplengthprefix"></a>

## `<Static>` stripLengthPrefix

▸ **stripLengthPrefix**(u8a: *`Uint8Array`*, bitLength?: *[UIntBitLength](../modules/_codec_uint_.md#uintbitlength)*): `Uint8Array`

*Defined in [codec/Compact.ts:51](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L51)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| u8a | `Uint8Array` | - |
| `Default value` bitLength | [UIntBitLength](../modules/_codec_uint_.md#uintbitlength) |  DEFAULT_BITLENGTH |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Type: *`Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)>*): `Constructor`<[Compact](_codec_compact_.compact.md)>

*Defined in [codec/Compact.ts:34](https://github.com/polkadot-js/api/blob/1a47d55/packages/types/src/codec/Compact.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | `Constructor`< [UInt](_codec_uint_.uint.md) &#124; [Moment](_moment_.moment.md)> |

**Returns:** `Constructor`<[Compact](_codec_compact_.compact.md)>

___

