

*__name__*: Null

*__description__*: Implements a type that does not contain anything (apart from `null`)

# Hierarchy

**Null**

↳  [Finalization](_eventrecord_.finalization.md)

↳  [Dropped](_extrinsicstatus_.dropped.md)

↳  [Future](_extrinsicstatus_.future.md)

↳  [Ready](_extrinsicstatus_.ready.md)

↳  [Invalid](_extrinsicstatus_.invalid.md)

↳  [Origin](_origin_.origin.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [Null.ts:17](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Null.ts#L17)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [Null.ts:24](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Null.ts#L24)*

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

*Defined in [Null.ts:31](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Null.ts#L31)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [Null.ts:38](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Null.ts#L38)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [Null.ts:45](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Null.ts#L45)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [Null.ts:53](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Null.ts#L53)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

