

*__name__*: Option

*__description__*: An Option is an optional field. Basically the first byte indicates that there is is value to follow. If the byte is `1` there is an actual value. So the Option implements that - decodes, checks for optionality and wraps the required structure with a value if/as required/found.

# Type parameters
#### T :  [Codec](../interfaces/_types_.codec.md)
# Hierarchy

 [Base](_codec_base_.base.md)<`T`>

**↳ Option**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Option**(Type: *[Constructor](../modules/_types_.md#constructor)*, value?: *`any`*): [Option](_codec_option_.option.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Option.ts:19](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor) |
| `Optional` value | `any` |

**Returns:** [Option](_codec_option_.option.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Option.ts:51](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L51)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Defined in [codec/Option.ts:59](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L59)*

*__description__*: Checks if the Option has no value

**Returns:** `boolean`

___
<a id="issome"></a>

##  isSome

getisSome(): `boolean`

*Defined in [codec/Option.ts:66](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L66)*

*__description__*: Checks if the Option has a value

**Returns:** `boolean`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/Option.ts:73](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L73)*

*__description__*: The actual value for the Option

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/Option.ts:80](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L80)*

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

*Defined in [codec/Option.ts:91](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L91)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Option.ts:98](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L98)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Option.ts:105](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L105)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Option.ts:113](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L113)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="unwrap"></a>

##  unwrap

▸ **unwrap**(): `T`

*Defined in [codec/Option.ts:131](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L131)*

*__description__*: Returns the value that the Option represents (if available), throws if null

**Returns:** `T`

___
<a id="unwrapor"></a>

##  unwrapOr

▸ **unwrapOr**<`O`>(defaultValue: *`O`*): `T` \| `O`

*Defined in [codec/Option.ts:143](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L143)*

*__description__*: Returns the value that the Option represents (if available) or defaultValue if none

**Type parameters:**

#### O 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| defaultValue | `O` |  The value to return if the option isNone |

**Returns:** `T` \| `O`

___
<a id="decodeoption"></a>

## `<Static>` decodeOption

▸ **decodeOption**<`O`>(Type: *[Constructor](../modules/_types_.md#constructor)*, value?: *`any`*): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/Option.ts:26](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L26)*

**Type parameters:**

#### O 
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor) |
| `Optional` value | `any` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *[Constructor](../modules/_types_.md#constructor)*): [Constructor](../modules/_types_.md#constructor)<[Option](_codec_option_.option.md)<`O`>>

*Defined in [codec/Option.ts:40](https://github.com/polkadot-js/api/blob/89c6289/packages/types/src/codec/Option.ts#L40)*

**Type parameters:**

#### O :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor) |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Option](_codec_option_.option.md)<`O`>>

___

