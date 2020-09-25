**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/codec/HashMap"](../modules/_packages_types_src_codec_hashmap_.md) / HashMap

# Class: HashMap\<**K, V**>

## Type parameters

* K
* V

## Hierarchy

* [CodecMap](_packages_types_src_codec_map_.codecmap.md)\<K, V>

  ↳ **HashMap**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_hashmap_.hashmap.md#constructor)

### Properties

* [registry](_packages_types_src_codec_hashmap_.hashmap.md#registry)
* [size](_packages_types_src_codec_hashmap_.hashmap.md#size)

### Accessors

* [encodedLength](_packages_types_src_codec_hashmap_.hashmap.md#encodedlength)
* [hash](_packages_types_src_codec_hashmap_.hashmap.md#hash)
* [isEmpty](_packages_types_src_codec_hashmap_.hashmap.md#isempty)

### Methods

* [clear](_packages_types_src_codec_hashmap_.hashmap.md#clear)
* [delete](_packages_types_src_codec_hashmap_.hashmap.md#delete)
* [eq](_packages_types_src_codec_hashmap_.hashmap.md#eq)
* [forEach](_packages_types_src_codec_hashmap_.hashmap.md#foreach)
* [get](_packages_types_src_codec_hashmap_.hashmap.md#get)
* [has](_packages_types_src_codec_hashmap_.hashmap.md#has)
* [set](_packages_types_src_codec_hashmap_.hashmap.md#set)
* [toHex](_packages_types_src_codec_hashmap_.hashmap.md#tohex)
* [toHuman](_packages_types_src_codec_hashmap_.hashmap.md#tohuman)
* [toJSON](_packages_types_src_codec_hashmap_.hashmap.md#tojson)
* [toRawType](_packages_types_src_codec_hashmap_.hashmap.md#torawtype)
* [toString](_packages_types_src_codec_hashmap_.hashmap.md#tostring)
* [toU8a](_packages_types_src_codec_hashmap_.hashmap.md#tou8a)
* [with](_packages_types_src_codec_hashmap_.hashmap.md#with)

## Constructors

### constructor

\+ **new HashMap**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `type`: \"BTreeMap\" \| \"HashMap\", `keyType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<K> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md), `valType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<V> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md), `rawValue?`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string \| [Map](_packages_types_src_codec_struct_.struct.md#map)\<any, any>): [HashMap](_packages_types_src_codec_hashmap_.hashmap.md)

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[constructor](_packages_types_src_codec_map_.codecmap.md#constructor)*

*Defined in [packages/types/src/codec/Map.ts:99](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L99)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`type` | \"BTreeMap\" \| \"HashMap\" |
`keyType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<K> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |
`valType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<V> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |
`rawValue?` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string \| [Map](_packages_types_src_codec_struct_.struct.md#map)\<any, any> |

**Returns:** [HashMap](_packages_types_src_codec_hashmap_.hashmap.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[registry](_packages_types_src_codec_map_.codecmap.md#registry)*

*Defined in [packages/types/src/codec/Map.ts:93](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L93)*

___

### size

• `Readonly` **size**: number

*Inherited from void*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

## Accessors

### encodedLength

• get **encodedLength**(): number

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[encodedLength](_packages_types_src_codec_map_.codecmap.md#encodedlength)*

*Defined in [packages/types/src/codec/Map.ts:113](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L113)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[hash](_packages_types_src_codec_map_.codecmap.md#hash)*

*Defined in [packages/types/src/codec/Map.ts:126](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L126)*

**`description`** Returns a hash of the value

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[isEmpty](_packages_types_src_codec_map_.codecmap.md#isempty)*

*Defined in [packages/types/src/codec/Map.ts:133](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L133)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

## Methods

### clear

▸ **clear**(): void

*Inherited from void*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22*

**Returns:** void

___

### delete

▸ **delete**(`key`: K): boolean

*Inherited from void*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

#### Parameters:

Name | Type |
------ | ------ |
`key` | K |

**Returns:** boolean

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[eq](_packages_types_src_codec_map_.codecmap.md#eq)*

*Defined in [packages/types/src/codec/Map.ts:140](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L140)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### forEach

▸ **forEach**(`callbackfn`: (value: V,key: K,map: [Map](_packages_types_src_codec_struct_.struct.md#map)\<K, V>) => void, `thisArg?`: any): void

*Inherited from void*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

#### Parameters:

Name | Type |
------ | ------ |
`callbackfn` | (value: V,key: K,map: [Map](_packages_types_src_codec_struct_.struct.md#map)\<K, V>) => void |
`thisArg?` | any |

**Returns:** void

___

### get

▸ **get**(`key`: K): V \| undefined

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[get](_packages_types_src_codec_map_.codecmap.md#get)*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:25*

#### Parameters:

Name | Type |
------ | ------ |
`key` | K |

**Returns:** V \| undefined

___

### has

▸ **has**(`key`: K): boolean

*Inherited from void*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

#### Parameters:

Name | Type |
------ | ------ |
`key` | K |

**Returns:** boolean

___

### set

▸ **set**(`key`: K, `value`: V): this

*Inherited from void*

*Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

#### Parameters:

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** this

___

### toHex

▸ **toHex**(): string

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toHex](_packages_types_src_codec_map_.codecmap.md#tohex)*

*Defined in [packages/types/src/codec/Map.ts:147](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L147)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toHuman](_packages_types_src_codec_map_.codecmap.md#tohuman)*

*Defined in [packages/types/src/codec/Map.ts:154](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L154)*

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

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toJSON](_packages_types_src_codec_map_.codecmap.md#tojson)*

*Defined in [packages/types/src/codec/Map.ts:167](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L167)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toRawType

▸ **toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toRawType](_packages_types_src_codec_map_.codecmap.md#torawtype)*

*Defined in [packages/types/src/codec/Map.ts:180](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L180)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toString](_packages_types_src_codec_map_.codecmap.md#tostring)*

*Defined in [packages/types/src/codec/Map.ts:187](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L187)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toU8a](_packages_types_src_codec_map_.codecmap.md#tou8a)*

*Defined in [packages/types/src/codec/Map.ts:195](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/Map.ts#L195)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### with

▸ `Static`**with**\<K, V>(`keyType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<K> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md), `valType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<V> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[CodecMap](_packages_types_src_codec_map_.codecmap.md)\<K, V>>

*Defined in [packages/types/src/codec/HashMap.ts:9](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/HashMap.ts#L9)*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |
`V` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |

#### Parameters:

Name | Type |
------ | ------ |
`keyType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<K> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |
`valType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<V> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[CodecMap](_packages_types_src_codec_map_.codecmap.md)\<K, V>>
