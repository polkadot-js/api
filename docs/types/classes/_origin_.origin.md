

*__name__*: Origin

*__description__*: Where Origin occurs, it should be ignored as an internal-only value, so it should never actually be constructed

# Hierarchy

 [Null](_null_.null.md)

**↳ Origin**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Origin**(): [Origin](_origin_.origin.md)

*Defined in [Origin.ts:13](https://github.com/polkadot-js/api/blob/aa8e613/packages/types/src/Origin.ts#L13)*

**Returns:** [Origin](_origin_.origin.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Null](_null_.null.md).[encodedLength](_null_.null.md#encodedlength)*

*Defined in [Null.ts:16](https://github.com/polkadot-js/api/blob/aa8e613/packages/types/src/Null.ts#L16)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Null](_null_.null.md).[toHex](_null_.null.md#tohex)*

*Defined in [Null.ts:23](https://github.com/polkadot-js/api/blob/aa8e613/packages/types/src/Null.ts#L23)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Null](_null_.null.md).[toJSON](_null_.null.md#tojson)*

*Defined in [Null.ts:30](https://github.com/polkadot-js/api/blob/aa8e613/packages/types/src/Null.ts#L30)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Null](_null_.null.md).[toString](_null_.null.md#tostring)*

*Defined in [Null.ts:37](https://github.com/polkadot-js/api/blob/aa8e613/packages/types/src/Null.ts#L37)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Inherited from [Null](_null_.null.md).[toU8a](_null_.null.md#tou8a)*

*Defined in [Null.ts:45](https://github.com/polkadot-js/api/blob/aa8e613/packages/types/src/Null.ts#L45)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

