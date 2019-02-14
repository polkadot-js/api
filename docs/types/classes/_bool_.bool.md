

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

*Defined in [Bool.ts:15](https://github.com/polkadot-js/api/blob/ead67ec/packages/types/src/Bool.ts#L15)*

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

*Defined in [Bool.ts:35](https://github.com/polkadot-js/api/blob/ead67ec/packages/types/src/Bool.ts#L35)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [Bool.ts:42](https://github.com/polkadot-js/api/blob/ead67ec/packages/types/src/Bool.ts#L42)*

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

*Defined in [Bool.ts:53](https://github.com/polkadot-js/api/blob/ead67ec/packages/types/src/Bool.ts#L53)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [Bool.ts:60](https://github.com/polkadot-js/api/blob/ead67ec/packages/types/src/Bool.ts#L60)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [Bool.ts:67](https://github.com/polkadot-js/api/blob/ead67ec/packages/types/src/Bool.ts#L67)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [Bool.ts:75](https://github.com/polkadot-js/api/blob/ead67ec/packages/types/src/Bool.ts#L75)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

