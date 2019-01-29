

*__name__*: NewAccountOutcome

*__description__*: Enum to track the outcome for creation of an [AccountId](_accountid_.accountid.md)

# Hierarchy

↳  [Enum](_codec_enum_.enum.md)

**↳ NewAccountOutcome**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new NewAccountOutcome**(index?: *[U8a](_codec_u8a_.u8a.md) | `Uint8Array` | `number`*): [NewAccountOutcome](_newaccountoutcome_.newaccountoutcome.md)

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [NewAccountOutcome.ts:13](https://github.com/polkadot-js/api/blob/3835736/packages/types/src/NewAccountOutcome.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` index | [U8a](_codec_u8a_.u8a.md) | `Uint8Array` | `number` |

**Returns:** [NewAccountOutcome](_newaccountoutcome_.newaccountoutcome.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Defined in [codec/Enum.ts:64](https://github.com/polkadot-js/api/blob/3835736/packages/types/src/codec/Enum.ts#L64)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Defined in [codec/Enum.ts:71](https://github.com/polkadot-js/api/blob/3835736/packages/types/src/codec/Enum.ts#L71)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Enum](_codec_enum_.enum.md).[toHex](_codec_enum_.enum.md#tohex)*

*Defined in [codec/Enum.ts:84](https://github.com/polkadot-js/api/blob/3835736/packages/types/src/codec/Enum.ts#L84)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Enum](_codec_enum_.enum.md).[toJSON](_codec_enum_.enum.md#tojson)*

*Defined in [codec/Enum.ts:91](https://github.com/polkadot-js/api/blob/3835736/packages/types/src/codec/Enum.ts#L91)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:98](https://github.com/polkadot-js/api/blob/3835736/packages/types/src/codec/Enum.ts#L98)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Defined in [codec/Enum.ts:105](https://github.com/polkadot-js/api/blob/3835736/packages/types/src/codec/Enum.ts#L105)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Defined in [codec/Enum.ts:113](https://github.com/polkadot-js/api/blob/3835736/packages/types/src/codec/Enum.ts#L113)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeenum"></a>

## `<Static>` decodeEnum

▸ **decodeEnum**(def: *`EnumDef`*, value: *[Enum](_codec_enum_.enum.md) | `Uint8Array` | `string` | `number`*): `number` | `undefined`

*Inherited from [Enum](_codec_enum_.enum.md).[decodeEnum](_codec_enum_.enum.md#decodeenum)*

*Defined in [codec/Enum.ts:47](https://github.com/polkadot-js/api/blob/3835736/packages/types/src/codec/Enum.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | `EnumDef` |
| value | [Enum](_codec_enum_.enum.md) | `Uint8Array` | `string` | `number` |

**Returns:** `number` | `undefined`

___

