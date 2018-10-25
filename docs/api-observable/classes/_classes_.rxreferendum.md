

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

 `Struct`

**↳ RxReferendum**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RxReferendum**(value: *`Tuple`*, id: * `ReferendumIndex` &#124; `BN` &#124; `number`*): [RxReferendum](_classes_.rxreferendum.md)

*Overrides Struct.__constructor*

*Defined in [classes.ts:48](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/classes.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `Tuple` |
| id |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** [RxReferendum](_classes_.rxreferendum.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *"Map"*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="raw"></a>

##  raw

**● raw**: *`Map`<`keyof S`, `Base`>*

*Inherited from Struct.raw*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:25](https://github.com/polkadot-js/api/blob/b1e13b2/packages/types/src/codec/Struct.ts#L25)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/b1e13b2/packages/types/src/codec/Struct.ts#L122)*

**Returns:** `E`

___
<a id="blocknumber"></a>

##  blockNumber

getblockNumber(): `BlockNumber`

*Defined in [classes.ts:58](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/classes.ts#L58)*

**Returns:** `BlockNumber`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from Struct.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/b1e13b2/packages/types/src/codec/Struct.ts#L126)*

**Returns:** `number`

___
<a id="id"></a>

##  id

getid(): `ReferendumIndex`

*Defined in [classes.ts:62](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/classes.ts#L62)*

**Returns:** `ReferendumIndex`

___
<a id="proposal"></a>

##  proposal

getproposal(): `Proposal`

*Defined in [classes.ts:66](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/classes.ts#L66)*

**Returns:** `Proposal`

___
<a id="votethreshold"></a>

##  voteThreshold

getvoteThreshold(): `VoteThreshold`

*Defined in [classes.ts:70](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/classes.ts#L70)*

**Returns:** `VoteThreshold`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof S`, `Base`]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof S`, `Base`]>

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

| Param | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`keyof S`, `Base`]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof S`, `Base`]>

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`keyof S`*):  `Base` &#124; `undefined`

*Inherited from Map.get*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:25*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:**  `Base` &#124; `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): `Base`

*Inherited from Struct.getAtIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/b1e13b2/packages/types/src/codec/Struct.ts#L132)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `Base`

___
<a id="has"></a>

##  has

▸ **has**(key: *`keyof S`*): `boolean`

*Inherited from Map.has*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Param | Type |
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

▸ **set**(key: *`keyof S`*, value: *`Base`*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof S` |
| value | `Base` |

**Returns:** `this`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from Struct.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:136](https://github.com/polkadot-js/api/blob/b1e13b2/packages/types/src/codec/Struct.ts#L136)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Struct.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/b1e13b2/packages/types/src/codec/Struct.ts#L140)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/b1e13b2/packages/types/src/codec/Struct.ts#L151)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Struct.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/b1e13b2/packages/types/src/codec/Struct.ts#L155)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<`Base`>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<`Base`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<`Struct`<`S`>>

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:112](https://github.com/polkadot-js/api/blob/b1e13b2/packages/types/src/codec/Struct.ts#L112)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

