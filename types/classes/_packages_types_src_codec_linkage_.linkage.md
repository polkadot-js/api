**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/codec/Linkage"](../modules/_packages_types_src_codec_linkage_.md) / Linkage

# Class: Linkage\<**T**>

**`name`** Linkage

**`description`** The wrapper for the result from a LinkedMap

## Type parameters

* T

## Hierarchy

* [Struct](_packages_types_src_codec_struct_.struct.md)

  ↳ **Linkage**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_linkage_.linkage.md#constructor)

### Properties

* [registry](_packages_types_src_codec_linkage_.linkage.md#registry)

### Accessors

* [Type](_packages_types_src_codec_linkage_.linkage.md#type)
* [defKeys](_packages_types_src_codec_linkage_.linkage.md#defkeys)
* [encodedLength](_packages_types_src_codec_linkage_.linkage.md#encodedlength)
* [hash](_packages_types_src_codec_linkage_.linkage.md#hash)
* [isEmpty](_packages_types_src_codec_linkage_.linkage.md#isempty)
* [next](_packages_types_src_codec_linkage_.linkage.md#next)
* [previous](_packages_types_src_codec_linkage_.linkage.md#previous)

### Methods

* [eq](_packages_types_src_codec_linkage_.linkage.md#eq)
* [get](_packages_types_src_codec_linkage_.linkage.md#get)
* [getAtIndex](_packages_types_src_codec_linkage_.linkage.md#getatindex)
* [toArray](_packages_types_src_codec_linkage_.linkage.md#toarray)
* [toHex](_packages_types_src_codec_linkage_.linkage.md#tohex)
* [toHuman](_packages_types_src_codec_linkage_.linkage.md#tohuman)
* [toJSON](_packages_types_src_codec_linkage_.linkage.md#tojson)
* [toRawType](_packages_types_src_codec_linkage_.linkage.md#torawtype)
* [toString](_packages_types_src_codec_linkage_.linkage.md#tostring)
* [toU8a](_packages_types_src_codec_linkage_.linkage.md#tou8a)
* [typesToMap](_packages_types_src_codec_linkage_.linkage.md#typestomap)
* [with](_packages_types_src_codec_linkage_.linkage.md#with)
* [withKey](_packages_types_src_codec_linkage_.linkage.md#withkey)

## Constructors

### constructor

\+ **new Linkage**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md), `value?`: unknown): [Linkage](_packages_types_src_codec_linkage_.linkage.md)

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[constructor](_packages_types_src_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/codec/Linkage.ts:19](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Linkage.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`Type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |
`value?` | unknown |

**Returns:** [Linkage](_packages_types_src_codec_linkage_.linkage.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[registry](_packages_types_src_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L108)*

## Accessors

### Type

• get **Type**(): object

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[Type](_packages_types_src_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L171)*

**`description`** Returns the Type description to sthe structure

**Returns:** object

___

### defKeys

• get **defKeys**(): string[]

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[defKeys](_packages_types_src_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L149)*

**`description`** The available keys for this enum

**Returns:** string[]

___

### encodedLength

• get **encodedLength**(): number

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[encodedLength](_packages_types_src_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L185)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[hash](_packages_types_src_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L196)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[isEmpty](_packages_types_src_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:156](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L156)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

___

### next

• get **next**(): [Option](_packages_types_src_codec_option_.option.md)\<T>

*Defined in [packages/types/src/codec/Linkage.ts:42](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Linkage.ts#L42)*

**Returns:** [Option](_packages_types_src_codec_option_.option.md)\<T>

___

### previous

• get **previous**(): [Option](_packages_types_src_codec_option_.option.md)\<T>

*Defined in [packages/types/src/codec/Linkage.ts:38](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Linkage.ts#L38)*

**Returns:** [Option](_packages_types_src_codec_option_.option.md)\<T>

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[eq](_packages_types_src_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L203)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### get

▸ **get**(`name`: keyof TypesDef): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) \| undefined

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[get](_packages_types_src_codec_struct_.struct.md#get)*

*Overrides [CodecMap](_packages_types_src_codec_map_.codecmap.md).[get](_packages_types_src_codec_map_.codecmap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L211)*

**`description`** Returns a specific names entry in the structure

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof TypesDef | The name of the entry to retrieve  |

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) \| undefined

___

### getAtIndex

▸ **getAtIndex**(`index`: number): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[getAtIndex](_packages_types_src_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

#### Parameters:

Name | Type |
------ | ------ |
`index` | number |

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

___

### toArray

▸ **toArray**(): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toArray](_packages_types_src_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

___

### toHex

▸ **toHex**(): string

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toHex](_packages_types_src_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:232](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L232)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toHuman](_packages_types_src_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L239)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toJSON](_packages_types_src_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L252)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toRawType

▸ **toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[toRawType](_packages_types_src_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Linkage.ts:49](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Linkage.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toString](_packages_types_src_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:285](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L285)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[toU8a](_packages_types_src_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Linkage.ts:56](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Linkage.ts#L56)*

**`description`** Custom toU8a which with bare mode does not return the linkage if empty

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### typesToMap

▸ `Static`**typesToMap**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Types`: Record\<string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)>): Record\<string, string>

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[typesToMap](_packages_types_src_codec_struct_.struct.md#typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L265)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`Types` | Record\<string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)> |

**Returns:** Record\<string, string>

___

### with

▸ `Static`**with**\<S>(`Types`: S, `jsonMap?`: [Map](_packages_types_src_codec_struct_.struct.md#map)\<keyof S, string>): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Struct](_packages_types_src_codec_struct_.struct.md)\<S>>

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[with](_packages_types_src_codec_struct_.struct.md#with)*

*Defined in [packages/types/src/codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Struct.ts#L125)*

#### Type parameters:

Name | Type |
------ | ------ |
`S` | TypesDef |

#### Parameters:

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_packages_types_src_codec_struct_.struct.md#map)\<keyof S, string> |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Struct](_packages_types_src_codec_struct_.struct.md)\<S>>

___

### withKey

▸ `Static`**withKey**\<O>(`Type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Linkage](_packages_types_src_codec_linkage_.linkage.md)\<O>>

*Defined in [packages/types/src/codec/Linkage.ts:30](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/codec/Linkage.ts#L30)*

#### Type parameters:

Name | Type |
------ | ------ |
`O` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |

#### Parameters:

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Linkage](_packages_types_src_codec_linkage_.linkage.md)\<O>>
