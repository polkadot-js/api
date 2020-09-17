[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/primitive/StorageKey"](../modules/_packages_types_src_primitive_storagekey_.md) › [StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md)

# Class: StorageKey

**`name`** StorageKey

**`description`** 
A representation of a storage key (typically hashed) in the system. It can be
constructed by passing in a raw key or a StorageEntry with (optional) arguments.

## Hierarchy

  ↳ [Bytes](_packages_types_src_primitive_bytes_.bytes.md)

  ↳ **StorageKey**

## Implements

* [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

**`name`** StorageKey

**`description`** 
A representation of a storage key (typically hashed) in the system. It can be
constructed by passing in a raw key or a StorageEntry with (optional) arguments.

## Index

### Constructors

* [constructor](_packages_types_src_primitive_storagekey_.storagekey.md#constructor)

### Properties

* [registry](_packages_types_src_primitive_storagekey_.storagekey.md#readonly-registry)

### Accessors

* [args](_packages_types_src_primitive_storagekey_.storagekey.md#args)
* [encodedLength](_packages_types_src_primitive_storagekey_.storagekey.md#encodedlength)
* [hash](_packages_types_src_primitive_storagekey_.storagekey.md#hash)
* [isAscii](_packages_types_src_primitive_storagekey_.storagekey.md#isascii)
* [isEmpty](_packages_types_src_primitive_storagekey_.storagekey.md#isempty)
* [isUtf8](_packages_types_src_primitive_storagekey_.storagekey.md#isutf8)
* [length](_packages_types_src_primitive_storagekey_.storagekey.md#length)
* [meta](_packages_types_src_primitive_storagekey_.storagekey.md#meta)
* [method](_packages_types_src_primitive_storagekey_.storagekey.md#method)
* [outputType](_packages_types_src_primitive_storagekey_.storagekey.md#outputtype)
* [section](_packages_types_src_primitive_storagekey_.storagekey.md#section)

### Methods

* [bitLength](_packages_types_src_primitive_storagekey_.storagekey.md#bitlength)
* [eq](_packages_types_src_primitive_storagekey_.storagekey.md#eq)
* [setMeta](_packages_types_src_primitive_storagekey_.storagekey.md#setmeta)
* [subarray](_packages_types_src_primitive_storagekey_.storagekey.md#subarray)
* [toHex](_packages_types_src_primitive_storagekey_.storagekey.md#tohex)
* [toHuman](_packages_types_src_primitive_storagekey_.storagekey.md#tohuman)
* [toJSON](_packages_types_src_primitive_storagekey_.storagekey.md#tojson)
* [toRawType](_packages_types_src_primitive_storagekey_.storagekey.md#torawtype)
* [toString](_packages_types_src_primitive_storagekey_.storagekey.md#tostring)
* [toU8a](_packages_types_src_primitive_storagekey_.storagekey.md#tou8a)
* [toUtf8](_packages_types_src_primitive_storagekey_.storagekey.md#toutf8)
* [getMeta](_packages_types_src_primitive_storagekey_.storagekey.md#static-getmeta)
* [getType](_packages_types_src_primitive_storagekey_.storagekey.md#static-gettype)

## Constructors

###  constructor

\+ **new StorageKey**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value?`: [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a) | [StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md), any], `override`: Partial‹StorageKeyExtra›): *[StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md)*

*Overrides [Bytes](_packages_types_src_primitive_bytes_.bytes.md).[constructor](_packages_types_src_primitive_bytes_.bytes.md#constructor)*

*Defined in [packages/types/src/primitive/StorageKey.ts:165](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L165)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value?` | [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a) &#124; [StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md), any] | - |
`override` | Partial‹StorageKeyExtra› | {} |

**Returns:** *[StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[registry](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#readonly-registry)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[registry](_packages_types_src_codec_raw_.raw.md#readonly-registry)*

*Defined in [packages/types/src/codec/Raw.ts:29](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L29)*

## Accessors

###  args

• **get args**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Defined in [packages/types/src/primitive/StorageKey.ts:214](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L214)*

**`description`** Return the decoded arguments (applicable to map/doublemap with decodable values)

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](_packages_types_src_primitive_bytes_.bytes.md).[encodedLength](_packages_types_src_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [Raw](_packages_types_src_codec_raw_.raw.md).[encodedLength](_packages_types_src_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/primitive/Bytes.ts:55](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Bytes.ts#L55)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[hash](_packages_types_src_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:47](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L47)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isAscii

• **get isAscii**(): *boolean*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[isAscii](_packages_types_src_codec_raw_.raw.md#isascii)*

*Defined in [packages/types/src/codec/Raw.ts:54](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L54)*

**`description`** Returns true if the wrapped value contains only ASCII printable characters

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[isEmpty](_packages_types_src_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:61](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L61)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  isUtf8

• **get isUtf8**(): *boolean*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[isUtf8](_packages_types_src_codec_raw_.raw.md#isutf8)*

*Defined in [packages/types/src/codec/Raw.ts:68](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L68)*

**`description`** Returns true if the wrapped value contains only utf8 characters

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[length](_packages_types_src_codec_raw_.raw.md#length)*

*Overrides [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[length](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#readonly-length)*

*Defined in [packages/types/src/codec/Raw.ts:75](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L75)*

**`description`** The length of the value

**Returns:** *number*

___

###  meta

• **get meta**(): *StorageEntryMetadataLatest | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:221](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L221)*

**`description`** The metadata or `undefined` when not available

**Returns:** *StorageEntryMetadataLatest | undefined*

___

###  method

• **get method**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:228](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L228)*

**`description`** The key method or `undefined` when not specified

**Returns:** *string | undefined*

___

###  outputType

• **get outputType**(): *string*

*Defined in [packages/types/src/primitive/StorageKey.ts:235](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L235)*

**`description`** The output type

**Returns:** *string*

___

###  section

• **get section**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:242](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L242)*

**`description`** The key section or `undefined` when not specified

**Returns:** *string | undefined*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[bitLength](_packages_types_src_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:83](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L83)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[eq](_packages_types_src_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:90](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L90)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  setMeta

▸ **setMeta**(`meta?`: [StorageEntryMetadataLatest](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#storageentrymetadatalatest)): *this*

*Defined in [packages/types/src/primitive/StorageKey.ts:249](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L249)*

**`description`** Sets the meta for this key

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | [StorageEntryMetadataLatest](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#storageentrymetadatalatest) |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[subarray](_packages_types_src_codec_raw_.raw.md#subarray)*

*Overrides [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[subarray](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#subarray)*

*Defined in [packages/types/src/codec/Raw.ts:104](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L104)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toHex](_packages_types_src_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:111](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L111)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Overrides [Raw](_packages_types_src_codec_raw_.raw.md).[toHuman](_packages_types_src_codec_raw_.raw.md#tohuman)*

*Defined in [packages/types/src/primitive/StorageKey.ts:268](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L268)*

**`description`** Returns the Human representation for this type

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toJSON](_packages_types_src_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:127](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L127)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Overrides [Bytes](_packages_types_src_primitive_bytes_.bytes.md).[toRawType](_packages_types_src_primitive_bytes_.bytes.md#torawtype)*

*Defined in [packages/types/src/primitive/StorageKey.ts:277](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L277)*

**`description`** Returns the raw type for this

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toString](_packages_types_src_codec_raw_.raw.md#tostring)*

*Overrides [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[toString](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#tostring)*

*Defined in [packages/types/src/codec/Raw.ts:141](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L141)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Bytes](_packages_types_src_primitive_bytes_.bytes.md).[toU8a](_packages_types_src_primitive_bytes_.bytes.md#tou8a)*

*Overrides [Raw](_packages_types_src_codec_raw_.raw.md).[toU8a](_packages_types_src_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/primitive/Bytes.ts:70](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Bytes.ts#L70)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  toUtf8

▸ **toUtf8**(): *string*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toUtf8](_packages_types_src_codec_raw_.raw.md#toutf8)*

*Defined in [packages/types/src/codec/Raw.ts:157](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L157)*

**`description`** Returns the wrapped data as a UTF-8 string

**Returns:** *string*

___

### `Static` getMeta

▸ **getMeta**(`value`: [StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md), any]): *StorageEntryMetadataLatest | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:180](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md), any] |

**Returns:** *StorageEntryMetadataLatest | undefined*

___

### `Static` getType

▸ **getType**(`value`: [StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md), any]): *string*

*Defined in [packages/types/src/primitive/StorageKey.ts:194](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/StorageKey.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_packages_types_src_primitive_storagekey_.storageentry.md), any] |

**Returns:** *string*
