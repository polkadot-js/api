

*__name__*: ChainProperties

*__description__*: Wraps the properties retrieved from the chain via the `system.properties` RPC call. It extends the standard JS Map with de-facto values exposed as getters. While it implements a Codec, it is limited in that it can only be used with input objects via RPC, i.e. no hex decoding. Unlike a struct, this wrasp a JSON object with unknown keys and any values for those

# Hierarchy

 `Map`<`string`, `any`>

**↳ ChainProperties**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ChainProperties**(value?: *`object` \| `null`*): [ChainProperties](_type_chainproperties_.chainproperties.md)

*Defined in [type/ChainProperties.ts:17](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `object` \| `null` |

**Returns:** [ChainProperties](_type_chainproperties_.chainproperties.md)

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

*Defined in [type/ChainProperties.ts:29](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L29)*

*__description__*: Always 0, never encodes as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Defined in [type/ChainProperties.ts:36](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L36)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="tokendecimals"></a>

##  tokenDecimals

gettokenDecimals(): `number` \| `undefined`

*Defined in [type/ChainProperties.ts:43](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L43)*

*__description__*: The token decimals, if defined (de-facto standard only)

**Returns:** `number` \| `undefined`

___
<a id="tokensymbol"></a>

##  tokenSymbol

gettokenSymbol(): `string` \| `undefined`

*Defined in [type/ChainProperties.ts:50](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L50)*

*__description__*: The token system, if defined (de-facto standard only)

**Returns:** `string` \| `undefined`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [type/ChainProperties.ts:57](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L57)*

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

*Defined in [type/ChainProperties.ts:64](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L64)*

*__description__*: Unimplemented, will throw

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [type/ChainProperties.ts:71](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L71)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [type/ChainProperties.ts:82](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L82)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [type/ChainProperties.ts:89](https://github.com/polkadot-js/api/blob/5a4519d/packages/types/src/type/ChainProperties.ts#L89)*

*__description__*: Unimplemented, will throw

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |

**Returns:** `Uint8Array`

___

