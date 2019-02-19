

*__name__*: ReferendumInfoExtended

*__description__*: A \[\[ReferendumInfo\]\] with an additional `index` field

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

 `ReferendumInfo`

**↳ ReferendumInfoExtended**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ReferendumInfoExtended**(info: *`any`*): [ReferendumInfoExtended](_democracy_referenduminfo_.referenduminfoextended.md)

*Overrides ReferendumInfo.__constructor*

*Defined in [democracy/referendumInfo.ts:18](https://github.com/polkadot-js/api/blob/f807a93/packages/api-derive/src/democracy/referendumInfo.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| info | `any` |

**Returns:** [ReferendumInfoExtended](_democracy_referenduminfo_.referenduminfoextended.md)

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

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L160)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="delay"></a>

##  delay

getdelay(): `BlockNumber`

*Inherited from ReferendumInfo.delay*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/type/ReferendumInfo.ts:56](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/type/ReferendumInfo.ts#L56)*

*__description__*: The delay (in blocks) to wait after a successful referendum before deploying

**Returns:** `BlockNumber`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from Struct.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L167)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="end"></a>

##  end

getend(): `BlockNumber`

*Inherited from ReferendumInfo.end*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/type/ReferendumInfo.ts:35](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/type/ReferendumInfo.ts#L35)*

*__description__*: When voting on this referendum will end

**Returns:** `BlockNumber`

___
<a id="index"></a>

##  index

getindex(): `ReferendumIndex`

*Defined in [democracy/referendumInfo.ts:28](https://github.com/polkadot-js/api/blob/f807a93/packages/api-derive/src/democracy/referendumInfo.ts#L28)*

*__description__*: Convenience getter, returns the referendumIndex

**Returns:** `ReferendumIndex`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Inherited from Struct.isEmpty*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L145)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="proposal"></a>

##  proposal

getproposal(): `Proposal`

*Inherited from ReferendumInfo.proposal*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/type/ReferendumInfo.ts:42](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/type/ReferendumInfo.ts#L42)*

*__description__*: The proposal being voted on

**Returns:** `Proposal`

___
<a id="threshold"></a>

##  threshold

getthreshold(): `VoteThreshold`

*Inherited from ReferendumInfo.threshold*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/type/ReferendumInfo.ts:49](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/type/ReferendumInfo.ts#L49)*

*__description__*: The thresholding mechanism to determine whether it passed

**Returns:** `VoteThreshold`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof S`, `Codec`]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof S`, `Codec`]>

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

▸ **entries**(): `IterableIterator`<[`keyof S`, `Codec`]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof S`, `Codec`]>

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from Struct.eq*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L176)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

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

▸ **get**(name: *`keyof S`*): `Codec` \| `undefined`

*Inherited from Struct.get*

*Overrides Map.get*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L184)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** `Codec` \| `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): `Codec`

*Inherited from Struct.getAtIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L191)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `Codec`

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

▸ **set**(key: *`keyof S`*, value: *`Codec`*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |
| value | `Codec` |

**Returns:** `this`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<`Codec`>

*Inherited from Struct.toArray*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L198)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<`Codec`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from Struct.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L205)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Struct.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L212)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L226)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from Struct.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L234)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<`Codec`>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<`Codec`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<`Struct`<`S`>>

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/f807a93/packages/types/src/codec/Struct.ts#L125)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

