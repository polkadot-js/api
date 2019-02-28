

*__name__*: Json

*__description__*: Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it implements a Codec, it is limited in that it can only be used with input objects via RPC, i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys

# Hierarchy

 `Map`<`string`, `any`>

**↳ Json**

↳  [ChainProperties](_rpc_chainproperties_.chainproperties.md)

↳  [NetworkState](_rpc_networkstate_.networkstate.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Json**(value?: *`object` \| `null`*): [Json](_rpc_json_.json.md)

*Defined in [rpc/Json.ts:16](https://github.com/polkadot-js/api/blob/1ea1f6f/packages/types/src/rpc/Json.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `object` \| `null` |

**Returns:** [Json](_rpc_json_.json.md)

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

**get encodedLength**(): `number`

*Defined in [rpc/Json.ts:28](https://github.com/polkadot-js/api/blob/1ea1f6f/packages/types/src/rpc/Json.ts#L28)*

*__description__*: Always 0, never encodes as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Defined in [rpc/Json.ts:35](https://github.com/polkadot-js/api/blob/1ea1f6f/packages/types/src/rpc/Json.ts#L35)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [rpc/Json.ts:42](https://github.com/polkadot-js/api/blob/1ea1f6f/packages/types/src/rpc/Json.ts#L42)*

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

*Defined in [rpc/Json.ts:49](https://github.com/polkadot-js/api/blob/1ea1f6f/packages/types/src/rpc/Json.ts#L49)*

*__description__*: Unimplemented, will throw

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [rpc/Json.ts:56](https://github.com/polkadot-js/api/blob/1ea1f6f/packages/types/src/rpc/Json.ts#L56)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [rpc/Json.ts:67](https://github.com/polkadot-js/api/blob/1ea1f6f/packages/types/src/rpc/Json.ts#L67)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [rpc/Json.ts:74](https://github.com/polkadot-js/api/blob/1ea1f6f/packages/types/src/rpc/Json.ts#L74)*

*__description__*: Unimplemented, will throw

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |

**Returns:** `Uint8Array`

___

