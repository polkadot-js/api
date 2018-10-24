

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

 `Extrinsic`

**↳ SubmittableExtrinsic**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new SubmittableExtrinsic**(api: *`ApiPromiseInterface`*, extrinsic: *`Extrinsic`*): [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.__constructor*

*Defined in [promise/SubmittableExtrinsic.ts:12](https://github.com/polkadot-js/api/blob/c0e9586/packages/api/src/promise/SubmittableExtrinsic.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `ApiPromiseInterface` |
| extrinsic | `Extrinsic` |

**Returns:** [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:25](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/codec/Struct.ts#L25)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/codec/Struct.ts#L122)*

**Returns:** `E`

___
<a id="args"></a>

##  args

getargs(): `Array`<`Base`>

*Inherited from Extrinsic.args*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:70](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L70)*

**Returns:** `Array`<`Base`>

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from Extrinsic.callIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:75](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L75)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from Extrinsic.data*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:79](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L79)*

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from Extrinsic.encodedLength*

*Overrides Struct.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:110](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L110)*

**Returns:** `number`

___
<a id="hash"></a>

##  hash

gethash(): `Hash`

*Inherited from Extrinsic.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:84](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L84)*

**Returns:** `Hash`

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Inherited from Extrinsic.isSigned*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:90](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L90)*

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from Extrinsic.length*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:94](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L94)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): `FunctionMetadata`

*Inherited from Extrinsic.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:98](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L98)*

**Returns:** `FunctionMetadata`

___
<a id="method"></a>

##  method

getmethod(): `Method`

*Inherited from Extrinsic.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:102](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L102)*

**Returns:** `Method`

___
<a id="signature"></a>

##  signature

getsignature(): `ExtrinsicSignature`

*Inherited from Extrinsic.signature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:106](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L106)*

**Returns:** `ExtrinsicSignature`

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/codec/Struct.ts#L132)*

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
<a id="send"></a>

##  send

▸ **send**(statusCb?: * `undefined` &#124; `function`*): `Promise`<`Hash`>

*Defined in [promise/SubmittableExtrinsic.ts:20](https://github.com/polkadot-js/api/blob/c0e9586/packages/api/src/promise/SubmittableExtrinsic.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` statusCb |  `undefined` &#124; `function`|

**Returns:** `Promise`<`Hash`>

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
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, nonce: *`AnyNumber`*, blockHash?: *`AnyU8a`*): [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.sign*

*Defined in [promise/SubmittableExtrinsic.ts:28](https://github.com/polkadot-js/api/blob/c0e9586/packages/api/src/promise/SubmittableExtrinsic.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| signerPair | `KeyringPair` |
| nonce | `AnyNumber` |
| `Optional` blockHash | `AnyU8a` |

**Returns:** [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from Extrinsic.toHex*

*Overrides Struct.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:133](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L133)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Extrinsic.toJSON*

*Overrides Struct.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:137](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L137)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/codec/Struct.ts#L151)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Extrinsic.toU8a*

*Overrides Struct.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:122](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L122)*

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
<a id="decodeextrinsic"></a>

## `<Static>` decodeExtrinsic

▸ **decodeExtrinsic**(value?: * `ExtrinsicValue` &#124; `AnyU8a`*):  `any` &#124; `Uint8Array`

*Inherited from Extrinsic.decodeExtrinsic*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:42](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/Extrinsic.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value |  `ExtrinsicValue` &#124; `AnyU8a`|

**Returns:**  `any` &#124; `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<`Struct`<`S`>>

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:112](https://github.com/polkadot-js/api/blob/c0e9586/packages/types/src/codec/Struct.ts#L112)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

