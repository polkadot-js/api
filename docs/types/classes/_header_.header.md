

*__name__*: Header

*__description__*: A [Block](_block_.block.md) header

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Header**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Header**(value?: * [HeaderValue](../modules/_header_.md#headervalue) &#124; `Uint8Array`*): [Header](_header_.header.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Header.ts:29](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/Header.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value |  [HeaderValue](../modules/_header_.md#headervalue) &#124; `Uint8Array`|

**Returns:** [Header](_header_.header.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *`string`*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="size"></a>

##  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:133](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L133)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="blocknumber"></a>

##  blockNumber

getblockNumber(): [BlockNumber](_blocknumber_.blocknumber.md)

*Defined in [Header.ts:43](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/Header.ts#L43)*

*__description__*: The wrapped [BlockNumber](_blocknumber_.blocknumber.md)

**Returns:** [BlockNumber](_blocknumber_.blocknumber.md)

___
<a id="digest"></a>

##  digest

getdigest(): [Digest](_digest_.digest.md)

*Defined in [Header.ts:50](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/Header.ts#L50)*

*__description__*: The wrapped [Digest](_digest_.digest.md)

**Returns:** [Digest](_digest_.digest.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L140)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="extrinsicsroot"></a>

##  extrinsicsRoot

getextrinsicsRoot(): [Hash](_hash_.hash.md)

*Defined in [Header.ts:57](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/Header.ts#L57)*

*__description__*: The wrapped extrisics root as a [Hash](_hash_.hash.md)

**Returns:** [Hash](_hash_.hash.md)

___
<a id="hash"></a>

##  hash

gethash(): [Hash](_hash_.hash.md)

*Defined in [Header.ts:64](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/Header.ts#L64)*

*__description__*: Convenience method, encodes the header and calculates the [Hash](_hash_.hash.md)

**Returns:** [Hash](_hash_.hash.md)

___
<a id="parenthash"></a>

##  parentHash

getparentHash(): [Hash](_hash_.hash.md)

*Defined in [Header.ts:73](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/Header.ts#L73)*

*__description__*: The wrapped parent as a [Hash](_hash_.hash.md)

**Returns:** [Hash](_hash_.hash.md)

___
<a id="stateroot"></a>

##  stateRoot

getstateRoot(): [Hash](_hash_.hash.md)

*Defined in [Header.ts:80](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/Header.ts#L80)*

*__description__*: The wrapped state root as a [Hash](_hash_.hash.md)

**Returns:** [Hash](_hash_.hash.md)

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

___
<a id="clear"></a>

##  clear

▸ **clear**(): `void`

*Inherited from Map.clear*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:22*

**Returns:** `void`

___
<a id="delete"></a>

##  delete

▸ **delete**(key: *`keyof S`*): `boolean`

*Inherited from Map.delete*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*):  [Codec](../interfaces/_types_.codec.md) &#124; `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L150)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:**  [Codec](../interfaces/_types_.codec.md) &#124; `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L157)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="has"></a>

##  has

▸ **has**(key: *`keyof S`*): `boolean`

*Inherited from Map.has*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `IterableIterator`<`keyof S`>

*Inherited from Map.keys*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123*

Returns an iterable of keys in the map

**Returns:** `IterableIterator`<`keyof S`>

___
<a id="set"></a>

##  set

▸ **set**(key: *`keyof S`*, value: *[Codec](../interfaces/_types_.codec.md)*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |
| value | [Codec](../interfaces/_types_.codec.md) |

**Returns:** `this`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:164](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L164)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L171)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:178](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L178)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:192](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L192)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L200)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/69b05c7/packages/types/src/codec/Struct.ts#L113)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

