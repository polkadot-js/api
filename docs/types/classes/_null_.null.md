

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

*Defined in [Null.ts:16](https://github.com/polkadot-js/api/blob/c466a51/packages/types/src/Null.ts#L16)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [Null.ts:23](https://github.com/polkadot-js/api/blob/c466a51/packages/types/src/Null.ts#L23)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [Null.ts:30](https://github.com/polkadot-js/api/blob/c466a51/packages/types/src/Null.ts#L30)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [Null.ts:37](https://github.com/polkadot-js/api/blob/c466a51/packages/types/src/Null.ts#L37)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [Null.ts:45](https://github.com/polkadot-js/api/blob/c466a51/packages/types/src/Null.ts#L45)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

