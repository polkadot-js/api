[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/BTreeSet"](../modules/_packages_types_src_codec_btreeset_.md) › [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md)

# Class: BTreeSet ‹**V**›

## Type parameters

▪ **V**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

## Hierarchy

* [Set](_packages_types_src_codec_btreeset_.btreeset.md#static-set)‹V›

  ↳ **BTreeSet**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_btreeset_.btreeset.md#constructor)

### Properties

* [[Symbol.toStringTag]](_packages_types_src_codec_btreeset_.btreeset.md#readonly-[symbol.tostringtag])
* [registry](_packages_types_src_codec_btreeset_.btreeset.md#readonly-registry)
* [size](_packages_types_src_codec_btreeset_.btreeset.md#readonly-size)
* [Set](_packages_types_src_codec_btreeset_.btreeset.md#static-set)

### Accessors

* [encodedLength](_packages_types_src_codec_btreeset_.btreeset.md#encodedlength)
* [hash](_packages_types_src_codec_btreeset_.btreeset.md#hash)
* [isEmpty](_packages_types_src_codec_btreeset_.btreeset.md#isempty)

### Methods

* [[Symbol.iterator]](_packages_types_src_codec_btreeset_.btreeset.md#[symbol.iterator])
* [add](_packages_types_src_codec_btreeset_.btreeset.md#add)
* [clear](_packages_types_src_codec_btreeset_.btreeset.md#clear)
* [delete](_packages_types_src_codec_btreeset_.btreeset.md#delete)
* [entries](_packages_types_src_codec_btreeset_.btreeset.md#entries)
* [eq](_packages_types_src_codec_btreeset_.btreeset.md#eq)
* [forEach](_packages_types_src_codec_btreeset_.btreeset.md#foreach)
* [has](_packages_types_src_codec_btreeset_.btreeset.md#has)
* [keys](_packages_types_src_codec_btreeset_.btreeset.md#keys)
* [toHex](_packages_types_src_codec_btreeset_.btreeset.md#tohex)
* [toHuman](_packages_types_src_codec_btreeset_.btreeset.md#tohuman)
* [toJSON](_packages_types_src_codec_btreeset_.btreeset.md#tojson)
* [toRawType](_packages_types_src_codec_btreeset_.btreeset.md#torawtype)
* [toString](_packages_types_src_codec_btreeset_.btreeset.md#tostring)
* [toU8a](_packages_types_src_codec_btreeset_.btreeset.md#tou8a)
* [values](_packages_types_src_codec_btreeset_.btreeset.md#values)
* [with](_packages_types_src_codec_btreeset_.btreeset.md#static-with)

## Constructors

###  constructor

\+ **new BTreeSet**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `valType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› | keyof InterfaceTypes, `rawValue?`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string | string[] | [Set](_packages_types_src_codec_btreeset_.btreeset.md#static-set)‹any›): *[BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:84](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`valType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› &#124; keyof InterfaceTypes |
`rawValue?` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string &#124; string[] &#124; [Set](_packages_types_src_codec_btreeset_.btreeset.md#static-set)‹any› |

**Returns:** *[BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md)*

## Properties

### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[[Symbol.toStringTag]](_packages_types_src_codec_btreeset_.btreeset.md#readonly-[symbol.tostringtag])*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Defined in [packages/types/src/codec/BTreeSet.ts:82](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L82)*

___

### `Readonly` size

• **size**: *number*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[size](_packages_types_src_codec_btreeset_.btreeset.md#readonly-size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64

___

### `Static` Set

▪ **Set**: *SetConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:71

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/BTreeSet.ts:104](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L104)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/BTreeSet.ts:117](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L117)*

**`description`** Returns a hash of the value

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/BTreeSet.ts:124](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L124)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹V›*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[[Symbol.iterator]](_packages_types_src_codec_btreeset_.btreeset.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Iterates over values in the set.

**Returns:** *IterableIterator‹V›*

___

###  add

▸ **add**(`value`: V): *this*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[add](_packages_types_src_codec_btreeset_.btreeset.md#add)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[clear](_packages_types_src_codec_btreeset_.btreeset.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: V): *boolean*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[delete](_packages_types_src_codec_btreeset_.btreeset.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[V, V]›*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[entries](_packages_types_src_codec_btreeset_.btreeset.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:175

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *IterableIterator‹[V, V]›*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:131](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L131)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[forEach](_packages_types_src_codec_btreeset_.btreeset.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: V, `value2`: V, `set`: [Set](_packages_types_src_codec_btreeset_.btreeset.md#static-set)‹V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`value2` | V |
`set` | [Set](_packages_types_src_codec_btreeset_.btreeset.md#static-set)‹V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: V): *boolean*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[has](_packages_types_src_codec_btreeset_.btreeset.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹V›*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[keys](_packages_types_src_codec_btreeset_.btreeset.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:179

Despite its name, returns an iterable of the values in the set,

**Returns:** *IterableIterator‹V›*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/BTreeSet.ts:138](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L138)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:145](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L145)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:158](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L158)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:171](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L171)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:178](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L178)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/BTreeSet.ts:186](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L186)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  values

▸ **values**(): *IterableIterator‹V›*

*Inherited from [BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md).[values](_packages_types_src_codec_btreeset_.btreeset.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:184

Returns an iterable of values in the set.

**Returns:** *IterableIterator‹V›*

___

### `Static` with

▸ **with**‹**V**›(`valType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› | keyof InterfaceTypes): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md)‹V››*

*Defined in [packages/types/src/codec/BTreeSet.ts:93](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/codec/BTreeSet.ts#L93)*

**Type parameters:**

▪ **V**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`valType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› &#124; keyof InterfaceTypes |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[BTreeSet](_packages_types_src_codec_btreeset_.btreeset.md)‹V››*
