**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-derive/src/type/SignedBlockExtended"](../modules/_packages_api_derive_src_type_signedblockextended_.md) / BlockExtended

# Class: BlockExtended\<**S, V, E**>

**`name`** SignedBlockExtended

**`description`** 
A [[Block]] header with an additional `author` field that indicates the block author

## Type parameters

* S
* V
* E

## Hierarchy

* SignedBlock

  ↳ **BlockExtended**

## Implements

* Codec

## Index

### Constructors

* [constructor](_packages_api_derive_src_type_signedblockextended_.blockextended.md#constructor)

### Properties

* [block](_packages_api_derive_src_type_signedblockextended_.blockextended.md#block)
* [justification](_packages_api_derive_src_type_signedblockextended_.blockextended.md#justification)
* [registry](_packages_api_derive_src_type_signedblockextended_.blockextended.md#registry)
* [size](_packages_api_derive_src_type_signedblockextended_.blockextended.md#size)

### Accessors

* [Type](_packages_api_derive_src_type_signedblockextended_.blockextended.md#type)
* [author](_packages_api_derive_src_type_signedblockextended_.blockextended.md#author)
* [defKeys](_packages_api_derive_src_type_signedblockextended_.blockextended.md#defkeys)
* [encodedLength](_packages_api_derive_src_type_signedblockextended_.blockextended.md#encodedlength)
* [hash](_packages_api_derive_src_type_signedblockextended_.blockextended.md#hash)
* [isEmpty](_packages_api_derive_src_type_signedblockextended_.blockextended.md#isempty)

### Methods

* [clear](_packages_api_derive_src_type_signedblockextended_.blockextended.md#clear)
* [delete](_packages_api_derive_src_type_signedblockextended_.blockextended.md#delete)
* [eq](_packages_api_derive_src_type_signedblockextended_.blockextended.md#eq)
* [forEach](_packages_api_derive_src_type_signedblockextended_.blockextended.md#foreach)
* [get](_packages_api_derive_src_type_signedblockextended_.blockextended.md#get)
* [getAtIndex](_packages_api_derive_src_type_signedblockextended_.blockextended.md#getatindex)
* [has](_packages_api_derive_src_type_signedblockextended_.blockextended.md#has)
* [set](_packages_api_derive_src_type_signedblockextended_.blockextended.md#set)
* [toArray](_packages_api_derive_src_type_signedblockextended_.blockextended.md#toarray)
* [toHex](_packages_api_derive_src_type_signedblockextended_.blockextended.md#tohex)
* [toHuman](_packages_api_derive_src_type_signedblockextended_.blockextended.md#tohuman)
* [toJSON](_packages_api_derive_src_type_signedblockextended_.blockextended.md#tojson)
* [toRawType](_packages_api_derive_src_type_signedblockextended_.blockextended.md#torawtype)
* [toString](_packages_api_derive_src_type_signedblockextended_.blockextended.md#tostring)
* [toU8a](_packages_api_derive_src_type_signedblockextended_.blockextended.md#tou8a)
* [typesToMap](_packages_api_derive_src_type_signedblockextended_.blockextended.md#typestomap)
* [with](_packages_api_derive_src_type_signedblockextended_.blockextended.md#with)

## Constructors

### constructor

\+ **new BlockExtended**(`registry`: Registry, `block?`: SignedBlock, `sessionValidators?`: AccountId[]): [BlockExtended](_packages_api_derive_src_type_signedblockextended_.blockextended.md)

*Overrides void*

*Defined in [packages/api-derive/src/type/SignedBlockExtended.ts:21](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/api-derive/src/type/SignedBlockExtended.ts#L21)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | Registry |
`block?` | SignedBlock |
`sessionValidators?` | AccountId[] |

**Returns:** [BlockExtended](_packages_api_derive_src_type_signedblockextended_.blockextended.md)

## Properties

### block

• `Readonly` **block**: Block

*Inherited from [BlockExtended](_packages_api_derive_src_type_signedblockextended_.blockextended.md).[block](_packages_api_derive_src_type_signedblockextended_.blockextended.md#block)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:224](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/interfaces/runtime/types.ts#L224)*

___

### justification

• `Readonly` **justification**: Justification

*Inherited from [BlockExtended](_packages_api_derive_src_type_signedblockextended_.blockextended.md).[justification](_packages_api_derive_src_type_signedblockextended_.blockextended.md#justification)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:225](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/interfaces/runtime/types.ts#L225)*

___

### registry

• `Readonly` **registry**: Registry

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[registry](_packages_api_derive_src_type_headerextended_.headerextended.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L108)*

___

### size

• `Readonly` **size**: number

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[size](_packages_api_derive_src_type_headerextended_.headerextended.md#size)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

## Accessors

### Type

• get **Type**(): E

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[Type](_packages_api_derive_src_type_headerextended_.headerextended.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L171)*

**`description`** Returns the Type description to sthe structure

**Returns:** E

___

### author

• get **author**(): AccountId \| undefined

*Defined in [packages/api-derive/src/type/SignedBlockExtended.ts:32](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/api-derive/src/type/SignedBlockExtended.ts#L32)*

**`description`** Convenience method, returns the author for the block

**Returns:** AccountId \| undefined

___

### defKeys

• get **defKeys**(): string[]

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[defKeys](_packages_api_derive_src_type_headerextended_.headerextended.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L149)*

**`description`** The available keys for this enum

**Returns:** string[]

___

### encodedLength

• get **encodedLength**(): number

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[encodedLength](_packages_api_derive_src_type_headerextended_.headerextended.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L185)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[hash](_packages_api_derive_src_type_headerextended_.headerextended.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L196)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[isEmpty](_packages_api_derive_src_type_headerextended_.headerextended.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:156](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L156)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

## Methods

### clear

▸ **clear**(): void

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[clear](_packages_api_derive_src_type_headerextended_.headerextended.md#clear)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22*

**Returns:** void

___

### delete

▸ **delete**(`key`: keyof S): boolean

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[delete](_packages_api_derive_src_type_headerextended_.headerextended.md#delete)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

#### Parameters:

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** boolean

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[eq](_packages_api_derive_src_type_headerextended_.headerextended.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L203)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### forEach

▸ **forEach**(`callbackfn`: (value: Codec,key: keyof S,map: Map\<keyof S, Codec>) => void, `thisArg?`: any): void

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[forEach](_packages_api_derive_src_type_headerextended_.headerextended.md#foreach)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

#### Parameters:

Name | Type |
------ | ------ |
`callbackfn` | (value: Codec,key: keyof S,map: Map\<keyof S, Codec>) => void |
`thisArg?` | any |

**Returns:** void

___

### get

▸ **get**(`name`: keyof S): Codec \| undefined

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[get](_packages_api_derive_src_type_headerextended_.headerextended.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L211)*

**`description`** Returns a specific names entry in the structure

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** Codec \| undefined

___

### getAtIndex

▸ **getAtIndex**(`index`: number): Codec

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[getAtIndex](_packages_api_derive_src_type_headerextended_.headerextended.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

#### Parameters:

Name | Type |
------ | ------ |
`index` | number |

**Returns:** Codec

___

### has

▸ **has**(`key`: keyof S): boolean

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[has](_packages_api_derive_src_type_headerextended_.headerextended.md#has)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

#### Parameters:

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** boolean

___

### set

▸ **set**(`key`: keyof S, `value`: Codec): this

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[set](_packages_api_derive_src_type_headerextended_.headerextended.md#set)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

#### Parameters:

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | Codec |

**Returns:** this

___

### toArray

▸ **toArray**(): Codec[]

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[toArray](_packages_api_derive_src_type_headerextended_.headerextended.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** Codec[]

___

### toHex

▸ **toHex**(): string

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[toHex](_packages_api_derive_src_type_headerextended_.headerextended.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:232](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L232)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): AnyJson

*Overrides void*

*Defined in [packages/api-derive/src/type/SignedBlockExtended.ts:39](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/api-derive/src/type/SignedBlockExtended.ts#L39)*

**`description`** Creates a human-friendly JSON representation

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** AnyJson

___

### toJSON

▸ **toJSON**(): AnyJson

*Overrides void*

*Defined in [packages/api-derive/src/type/SignedBlockExtended.ts:51](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/api-derive/src/type/SignedBlockExtended.ts#L51)*

**`description`** Creates the JSON representation

**Returns:** AnyJson

___

### toRawType

▸ **toRawType**(): string

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[toRawType](_packages_api_derive_src_type_headerextended_.headerextended.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:276](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L276)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[toString](_packages_api_derive_src_type_headerextended_.headerextended.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:285](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L285)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: BareOpts): Uint8Array

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[toU8a](_packages_api_derive_src_type_headerextended_.headerextended.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:293](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L293)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** Uint8Array

___

### typesToMap

▸ `Static`**typesToMap**(`registry`: Registry, `Types`: Record\<string, Constructor>): Record\<string, string>

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[typesToMap](_packages_api_derive_src_type_headerextended_.headerextended.md#typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L265)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record\<string, Constructor> |

**Returns:** Record\<string, string>

___

### with

▸ `Static`**with**\<S>(`Types`: S, `jsonMap?`: Map\<keyof S, string>): Constructor\<Struct\<S>>

*Inherited from [HeaderExtended](_packages_api_derive_src_type_headerextended_.headerextended.md).[with](_packages_api_derive_src_type_headerextended_.headerextended.md#with)*

*Defined in [packages/types/src/codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Struct.ts#L125)*

#### Type parameters:

Name | Type |
------ | ------ |
`S` | TypesDef |

#### Parameters:

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | Map\<keyof S, string> |

**Returns:** Constructor\<Struct\<S>>
