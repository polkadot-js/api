

*__name__*: Bool

*__description__*: Representation for a boolean value in the system. It extends the base JS `Boolean` class

# Hierarchy

 `Boolean`

**↳ Bool**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Bool**(value?: *[Bool](_bool_.bool.md) | `Boolean` | `Uint8Array` | `boolean` | `number`*): [Bool](_bool_.bool.md)

*Defined in [Bool.ts:15](https://github.com/polkadot-js/api/blob/54eada5/packages/types/src/Bool.ts#L15)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [Bool](_bool_.bool.md) | `Boolean` | `Uint8Array` | `boolean` | `number` | false |

**Returns:** [Bool](_bool_.bool.md)

___

# Properties

<a id="boolean"></a>

## `<Static>` Boolean

**● Boolean**: *`BooleanConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:530*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [Bool.ts:35](https://github.com/polkadot-js/api/blob/54eada5/packages/types/src/Bool.ts#L35)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [Bool.ts:42](https://github.com/polkadot-js/api/blob/54eada5/packages/types/src/Bool.ts#L42)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [Bool.ts:49](https://github.com/polkadot-js/api/blob/54eada5/packages/types/src/Bool.ts#L49)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [Bool.ts:56](https://github.com/polkadot-js/api/blob/54eada5/packages/types/src/Bool.ts#L56)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Defined in [Bool.ts:64](https://github.com/polkadot-js/api/blob/54eada5/packages/types/src/Bool.ts#L64)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

