

*__name__*: ChainProperties

*__description__*: Wraps the properties retrieved from the chain via the `system.properties` RPC call. It extends the standard JS Map with known values exposed as a getter. While it implements a Codec, it is limited ain that it can only be used with input objects, i.e. no hex decoding.

# Hierarchy

 `Map`<`string`, `any`>

**↳ ChainProperties**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ChainProperties**(value?: *`object`*): [ChainProperties](_chainproperties_.chainproperties.md)

*Defined in [ChainProperties.ts:17](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/ChainProperties.ts#L17)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `object` |  {} |

**Returns:** [ChainProperties](_chainproperties_.chainproperties.md)

___

# Properties

<a id="map"></a>

## `<Static>` Map

**● Map**: *`MapConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:36*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [ChainProperties.ts:31](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/ChainProperties.ts#L31)*

*__description__*: Always 0, never encodes as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="get"></a>

##  get

▸ **get**(name: *`string`*):  `any` &#124; `undefined`

*Overrides Map.get*

*Defined in [ChainProperties.ts:39](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/ChainProperties.ts#L39)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the entry to retrieve |

**Returns:**  `any` &#124; `undefined`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [ChainProperties.ts:46](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/ChainProperties.ts#L46)*

*__description__*: Unimplemented, will throw

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [ChainProperties.ts:53](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/ChainProperties.ts#L53)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [ChainProperties.ts:64](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/ChainProperties.ts#L64)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [ChainProperties.ts:71](https://github.com/polkadot-js/api/blob/6b3ba22/packages/types/src/ChainProperties.ts#L71)*

*__description__*: Unimplemented, will throw

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

