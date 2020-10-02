**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/codec/Set"](../modules/_packages_types_src_codec_set_.md) / CodecSet

# Class: CodecSet

**`name`** Set

**`description`** 
An Set is an array of string values, represented an an encoded type by
a bitwise representation of the values.

## Hierarchy

* [Set](_packages_types_src_codec_btreeset_.btreeset.md#set)\<string>

  ↳ **CodecSet**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_set_.codecset.md#constructor)

### Properties

* [[Symbol.toStringTag]](_packages_types_src_codec_set_.codecset.md#[symbol.tostringtag])
* [registry](_packages_types_src_codec_set_.codecset.md#registry)
* [size](_packages_types_src_codec_set_.codecset.md#size)
* [Set](_packages_types_src_codec_set_.codecset.md#set)

### Accessors

* [encodedLength](_packages_types_src_codec_set_.codecset.md#encodedlength)
* [hash](_packages_types_src_codec_set_.codecset.md#hash)
* [isEmpty](_packages_types_src_codec_set_.codecset.md#isempty)
* [strings](_packages_types_src_codec_set_.codecset.md#strings)
* [valueEncoded](_packages_types_src_codec_set_.codecset.md#valueencoded)

### Methods

* [[Symbol.iterator]](_packages_types_src_codec_set_.codecset.md#[symbol.iterator])
* [add](_packages_types_src_codec_set_.codecset.md#add)
* [clear](_packages_types_src_codec_set_.codecset.md#clear)
* [delete](_packages_types_src_codec_set_.codecset.md#delete)
* [entries](_packages_types_src_codec_set_.codecset.md#entries)
* [eq](_packages_types_src_codec_set_.codecset.md#eq)
* [forEach](_packages_types_src_codec_set_.codecset.md#foreach)
* [has](_packages_types_src_codec_set_.codecset.md#has)
* [keys](_packages_types_src_codec_set_.codecset.md#keys)
* [toHex](_packages_types_src_codec_set_.codecset.md#tohex)
* [toHuman](_packages_types_src_codec_set_.codecset.md#tohuman)
* [toJSON](_packages_types_src_codec_set_.codecset.md#tojson)
* [toNumber](_packages_types_src_codec_set_.codecset.md#tonumber)
* [toRawType](_packages_types_src_codec_set_.codecset.md#torawtype)
* [toString](_packages_types_src_codec_set_.codecset.md#tostring)
* [toU8a](_packages_types_src_codec_set_.codecset.md#tou8a)
* [values](_packages_types_src_codec_set_.codecset.md#values)
* [with](_packages_types_src_codec_set_.codecset.md#with)

## Constructors

### constructor

\+ **new CodecSet**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `setValues`: SetValues, `value?`: string[] \| [Set](_packages_types_src_codec_btreeset_.btreeset.md#set)\<string> \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| BN \| number \| string, `bitLength`: number): [CodecSet](_packages_types_src_codec_set_.codecset.md)

*Defined in [packages/types/src/codec/Set.ts:85](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L85)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`setValues` | SetValues | - |
`value?` | string[] \| [Set](_packages_types_src_codec_btreeset_.btreeset.md#set)\<string> \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| BN \| number \| string | - |
`bitLength` | number | 8 |

**Returns:** [CodecSet](_packages_types_src_codec_set_.codecset.md)

## Properties

### [Symbol.toStringTag]

• `Readonly` **[Symbol.toStringTag]**: string

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[[Symbol.toStringTag]](_packages_types_src_codec_btreeset_.btreeset.md#[symbol.tostringtag])*

*Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138*

___

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/codec/Set.ts:81](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L81)*

___

### size

• `Readonly` **size**: number

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[size](_packages_types_src_codec_btreeset_.btreeset.md#size)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64*

___

### Set

▪ `Static` **Set**: SetConstructor

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:71*

## Accessors

### encodedLength

• get **encodedLength**(): number

*Defined in [packages/types/src/codec/Set.ts:120](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L120)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Defined in [packages/types/src/codec/Set.ts:127](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L127)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Defined in [packages/types/src/codec/Set.ts:134](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L134)*

**`description`** true is the Set contains no values

**Returns:** boolean

___

### strings

• get **strings**(): string[]

*Defined in [packages/types/src/codec/Set.ts:141](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L141)*

**`description`** The actual set values as a string[]

**Returns:** string[]

___

### valueEncoded

• get **valueEncoded**(): BN

*Defined in [packages/types/src/codec/Set.ts:148](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L148)*

**`description`** The encoded value for the set members

**Returns:** BN

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): IterableIterator\<string>

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[[Symbol.iterator]](_packages_types_src_codec_btreeset_.btreeset.md#[symbol.iterator])*

*Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:171*

Iterates over values in the set.

**Returns:** IterableIterator\<string>

___

### add

▸ **add**(`key`: string): this

*Overrides [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[add](_packages_types_src_codec_btreeset_.btreeset.md#add)*

*Defined in [packages/types/src/codec/Set.ts:155](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L155)*

**`description`** adds a value to the Set (extended to allow for validity checking)

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** this

___

### clear

▸ **clear**(): void

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[clear](_packages_types_src_codec_btreeset_.btreeset.md#clear)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:60*

**Returns:** void

___

### delete

▸ **delete**(`value`: string): boolean

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[delete](_packages_types_src_codec_btreeset_.btreeset.md#delete)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:61*

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |

**Returns:** boolean

___

### entries

▸ **entries**(): IterableIterator\<[string, string]>

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[entries](_packages_types_src_codec_btreeset_.btreeset.md#entries)*

*Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:175*

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** IterableIterator\<[string, string]>

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Set.ts:169](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L169)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### forEach

▸ **forEach**(`callbackfn`: (value: string,value2: string,set: [Set](_packages_types_src_codec_btreeset_.btreeset.md#set)\<string>) => void, `thisArg?`: any): void

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[forEach](_packages_types_src_codec_btreeset_.btreeset.md#foreach)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:62*

#### Parameters:

Name | Type |
------ | ------ |
`callbackfn` | (value: string,value2: string,set: [Set](_packages_types_src_codec_btreeset_.btreeset.md#set)\<string>) => void |
`thisArg?` | any |

**Returns:** void

___

### has

▸ **has**(`value`: string): boolean

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[has](_packages_types_src_codec_btreeset_.btreeset.md#has)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:63*

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |

**Returns:** boolean

___

### keys

▸ **keys**(): IterableIterator\<string>

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[keys](_packages_types_src_codec_btreeset_.btreeset.md#keys)*

*Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:179*

Despite its name, returns an iterable of the values in the set,

**Returns:** IterableIterator\<string>

___

### toHex

▸ **toHex**(): string

*Defined in [packages/types/src/codec/Set.ts:185](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L185)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(): string[]

*Defined in [packages/types/src/codec/Set.ts:192](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L192)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** string[]

___

### toJSON

▸ **toJSON**(): string[]

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Set.ts:199](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L199)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** string[]

___

### toNumber

▸ **toNumber**(): number

*Defined in [packages/types/src/codec/Set.ts:206](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L206)*

**`description`** The encoded value for the set members

**Returns:** number

___

### toRawType

▸ **toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Set.ts:213](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L213)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Set.ts:220](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L220)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/codec/Set.ts:229](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L229)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### values

▸ **values**(): IterableIterator\<string>

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[values](_packages_types_src_codec_btreeset_.btreeset.md#values)*

*Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:184*

Returns an iterable of values in the set.

**Returns:** IterableIterator\<string>

___

### with

▸ `Static`**with**(`values`: SetValues, `bitLength?`: undefined \| number): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[CodecSet](_packages_types_src_codec_set_.codecset.md)>

*Defined in [packages/types/src/codec/Set.ts:95](https://github.com/polkadot-js/api/blob/d20228788/packages/types/src/codec/Set.ts#L95)*

#### Parameters:

Name | Type |
------ | ------ |
`values` | SetValues |
`bitLength?` | undefined \| number |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[CodecSet](_packages_types_src_codec_set_.codecset.md)>
