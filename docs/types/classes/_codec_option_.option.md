

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

*Defined in [codec/Option.ts:19](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L19)*

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

*Defined in [codec/Option.ts:52](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L52)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Defined in [codec/Option.ts:60](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L60)*

*__description__*: Checks if the Option has no value

**Returns:** `boolean`

___
<a id="issome"></a>

##  isSome

getisSome(): `boolean`

*Defined in [codec/Option.ts:67](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L67)*

*__description__*: Checks if the Option has a value

**Returns:** `boolean`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/Option.ts:74](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L74)*

*__description__*: The actual value for the Option

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Option.ts:81](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L81)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Option.ts:88](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L88)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Option.ts:95](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L95)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [codec/Option.ts:103](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L103)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="unwrap"></a>

##  unwrap

▸ **unwrap**(): `T`

*Defined in [codec/Option.ts:121](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L121)*

*__description__*: Returns the value that the Option represents (if available)

**Returns:** `T`

___
<a id="decodeoption"></a>

## `<Static>` decodeOption

▸ **decodeOption**<`O`>(Type: *[Constructor](../modules/_types_.md#constructor)*, value?: *`any`*): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/Option.ts:26](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L26)*

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

*Defined in [codec/Option.ts:41](https://github.com/polkadot-js/api/blob/535a9ea/packages/types/src/codec/Option.ts#L41)*

**Type parameters:**

#### O :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor) |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Option](_codec_option_.option.md)<`O`>>

___

