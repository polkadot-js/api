

*__name__*: Moment

*__description__*: A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust), so any numbers passed an/out are always per-second. For any encoding/decoding the 1000 multiplier would be applied to get it in line with JavaScript formats. It extends the base JS `Date` object and has all the methods available that are applicable to any `Date`

# Hierarchy

 `Date`

**↳ Moment**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Moment**(value?: * [Moment](_moment_.moment.md) &#124; `Date` &#124; [AnyNumber](../modules/_types_.md#anynumber)*): [Moment](_moment_.moment.md)

*Defined in [Moment.ts:24](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L24)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Moment](_moment_.moment.md) &#124; `Date` &#124; [AnyNumber](../modules/_types_.md#anynumber)| 0 |

**Returns:** [Moment](_moment_.moment.md)

___

# Properties

<a id="date"></a>

## `<Static>` Date

**● Date**: *`DateConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:897*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [Moment.ts:51](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L51)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Defined in [Moment.ts:58](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L58)*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [Moment.ts:65](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L65)*

*__description__*: Returns the BN representation of the timestamp

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [Moment.ts:72](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L72)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Overrides Date.toJSON*

*Defined in [Moment.ts:79](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L79)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [Moment.ts:86](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L86)*

*__description__*: Returns the number representation for the timestamp

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides Date.toString*

*Defined in [Moment.ts:93](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L93)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [Moment.ts:102](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L102)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodemoment"></a>

## `<Static>` decodeMoment

▸ **decodeMoment**(value: * [Moment](_moment_.moment.md) &#124; `Date` &#124; [AnyNumber](../modules/_types_.md#anynumber)*): `Date`

*Defined in [Moment.ts:34](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/Moment.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value |  [Moment](_moment_.moment.md) &#124; `Date` &#124; [AnyNumber](../modules/_types_.md#anynumber)|

**Returns:** `Date`

___

