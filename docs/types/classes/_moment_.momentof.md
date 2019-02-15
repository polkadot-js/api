

*__name__*: MomentOf

*__description__*: The Substrate MomentOf representation as a [Moment](_moment_.moment.md).

# Hierarchy

↳  [Moment](_moment_.moment.md)

**↳ MomentOf**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MomentOf**(value?: *[Moment](_moment_.moment.md) | `Date` | [AnyNumber](../modules/_types_.md#anynumber)*): [MomentOf](_moment_.momentof.md)

*Inherited from [Moment](_moment_.moment.md).[constructor](_moment_.moment.md#constructor)*

*Defined in [Moment.ts:24](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L24)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [Moment](_moment_.moment.md) | `Date` | [AnyNumber](../modules/_types_.md#anynumber) | 0 |

**Returns:** [MomentOf](_moment_.momentof.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Moment](_moment_.moment.md).[encodedLength](_moment_.moment.md#encodedlength)*

*Defined in [Moment.ts:51](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L51)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)

*Inherited from [Moment](_moment_.moment.md).[bitLength](_moment_.moment.md#bitlength)*

*Defined in [Moment.ts:65](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L65)*

*__description__*: Returns the number of bits in the value

**Returns:** [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Moment](_moment_.moment.md).[eq](_moment_.moment.md#eq)*

*Defined in [Moment.ts:58](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L58)*

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

*Inherited from [Moment](_moment_.moment.md).[toBn](_moment_.moment.md#tobn)*

*Defined in [Moment.ts:72](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L72)*

*__description__*: Returns the BN representation of the timestamp

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Moment](_moment_.moment.md).[toHex](_moment_.moment.md#tohex)*

*Defined in [Moment.ts:79](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L79)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Moment](_moment_.moment.md).[toJSON](_moment_.moment.md#tojson)*

*Overrides Date.toJSON*

*Defined in [Moment.ts:86](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L86)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [Moment](_moment_.moment.md).[toNumber](_moment_.moment.md#tonumber)*

*Defined in [Moment.ts:93](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L93)*

*__description__*: Returns the number representation for the timestamp

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Moment](_moment_.moment.md).[toString](_moment_.moment.md#tostring)*

*Overrides Date.toString*

*Defined in [Moment.ts:100](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L100)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Moment](_moment_.moment.md).[toU8a](_moment_.moment.md#tou8a)*

*Defined in [Moment.ts:109](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L109)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodemoment"></a>

## `<Static>` decodeMoment

▸ **decodeMoment**(value: *[Moment](_moment_.moment.md) | `Date` | [AnyNumber](../modules/_types_.md#anynumber)*): `Date`

*Inherited from [Moment](_moment_.moment.md).[decodeMoment](_moment_.moment.md#decodemoment)*

*Defined in [Moment.ts:34](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/Moment.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [Moment](_moment_.moment.md) | `Date` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** `Date`

___

