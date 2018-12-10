

*__name__*: Enum

*__description__*: A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value. This class allows you to retrieve the value either by `toNumber()` exposing the actual raw index, or `toString()` returning a string representation (as provided as part of the constructor)

# Hierarchy

 [Base](_codec_base_.base.md)<`number`>

**↳ Enum**

↳  [StorageFunctionModifier](_metadata_modules_.storagefunctionmodifier.md)

↳  [NewAccountOutcome](_newaccountoutcome_.newaccountoutcome.md)

↳  [VoteThreshold](_votethreshold_.votethreshold.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Enum**(def: *`EnumDef`*, value?: * [Enum](_codec_enum_.enum.md) &#124; `Uint8Array` &#124; `number`*): [Enum](_codec_enum_.enum.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Enum.ts:25](https://github.com/polkadot-js/api/blob/7be8d82/packages/types/src/codec/Enum.ts#L25)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| def | `EnumDef` | - |
| `Default value` value |  [Enum](_codec_enum_.enum.md) &#124; `Uint8Array` &#124; `number`| 0 |

**Returns:** [Enum](_codec_enum_.enum.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Enum.ts:48](https://github.com/polkadot-js/api/blob/7be8d82/packages/types/src/codec/Enum.ts#L48)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Enum.ts:55](https://github.com/polkadot-js/api/blob/7be8d82/packages/types/src/codec/Enum.ts#L55)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Enum.ts:62](https://github.com/polkadot-js/api/blob/7be8d82/packages/types/src/codec/Enum.ts#L62)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Enum.ts:69](https://github.com/polkadot-js/api/blob/7be8d82/packages/types/src/codec/Enum.ts#L69)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Enum.ts:76](https://github.com/polkadot-js/api/blob/7be8d82/packages/types/src/codec/Enum.ts#L76)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Enum.ts:84](https://github.com/polkadot-js/api/blob/7be8d82/packages/types/src/codec/Enum.ts#L84)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeenum"></a>

## `<Static>` decodeEnum

▸ **decodeEnum**(value?: * [Enum](_codec_enum_.enum.md) &#124; `Uint8Array` &#124; `number`*): `number`

*Defined in [codec/Enum.ts:35](https://github.com/polkadot-js/api/blob/7be8d82/packages/types/src/codec/Enum.ts#L35)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Enum](_codec_enum_.enum.md) &#124; `Uint8Array` &#124; `number`| 0 |

**Returns:** `number`

___

