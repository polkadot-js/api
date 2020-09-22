[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/primitive/Text"](../modules/_packages_types_src_primitive_text_.md) › [Text](_packages_types_src_primitive_text_.text.md)

# Class: Text

**`name`** Text

**`description`** 
This is a string wrapper, along with the length. It is used both for strings as well
as items such as documentation. It simply extends the standard JS `String` built-in
object, inheriting all methods exposed from `String`.

## Hierarchy

* [String](_packages_types_src_primitive_text_.text.md#static-string)

  ↳ **Text**

  ↳ [Type](_packages_types_src_primitive_type_.type.md)

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Indexable

* \[ **index**: *number*\]: string

**`name`** Text

**`description`** 
This is a string wrapper, along with the length. It is used both for strings as well
as items such as documentation. It simply extends the standard JS `String` built-in
object, inheriting all methods exposed from `String`.

## Index

### Constructors

* [constructor](_packages_types_src_primitive_text_.text.md#constructor)

### Properties

* [registry](_packages_types_src_primitive_text_.text.md#readonly-registry)
* [String](_packages_types_src_primitive_text_.text.md#static-string)

### Accessors

* [encodedLength](_packages_types_src_primitive_text_.text.md#encodedlength)
* [hash](_packages_types_src_primitive_text_.text.md#hash)
* [isEmpty](_packages_types_src_primitive_text_.text.md#isempty)
* [length](_packages_types_src_primitive_text_.text.md#length)

### Methods

* [eq](_packages_types_src_primitive_text_.text.md#eq)
* [setOverride](_packages_types_src_primitive_text_.text.md#setoverride)
* [toHex](_packages_types_src_primitive_text_.text.md#tohex)
* [toHuman](_packages_types_src_primitive_text_.text.md#tohuman)
* [toJSON](_packages_types_src_primitive_text_.text.md#tojson)
* [toRawType](_packages_types_src_primitive_text_.text.md#torawtype)
* [toString](_packages_types_src_primitive_text_.text.md#tostring)
* [toU8a](_packages_types_src_primitive_text_.text.md#tou8a)

## Constructors

###  constructor

\+ **new Text**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [Text](_packages_types_src_primitive_text_.text.md) | string | [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a) | object): *[Text](_packages_types_src_primitive_text_.text.md)*

*Defined in [packages/types/src/primitive/Text.ts:51](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L51)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [Text](_packages_types_src_primitive_text_.text.md) &#124; string &#124; [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a) &#124; object | "" |

**Returns:** *[Text](_packages_types_src_primitive_text_.text.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Defined in [packages/types/src/primitive/Text.ts:49](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L49)*

___

### `Static` String

▪ **String**: *StringConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:527

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/primitive/Text.ts:62](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L62)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/primitive/Text.ts:69](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L69)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/primitive/Text.ts:76](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L76)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Overrides [RegistryMetadataText](../interfaces/_packages_types_src_types_registry_.registrymetadatatext.md).[length](../interfaces/_packages_types_src_types_registry_.registrymetadatatext.md#readonly-length)*

*Defined in [packages/types/src/primitive/Text.ts:83](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L83)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Text.ts:91](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L91)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  setOverride

▸ **setOverride**(`override`: string): *void*

*Defined in [packages/types/src/primitive/Text.ts:100](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L100)*

**`description`** Set an override value for this

**Parameters:**

Name | Type |
------ | ------ |
`override` | string |

**Returns:** *void*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/primitive/Text.ts:107](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L107)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *string*

*Defined in [packages/types/src/primitive/Text.ts:116](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L116)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Text.ts:123](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L123)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Text.ts:130](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L130)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [RegistryMetadataText](../interfaces/_packages_types_src_types_registry_.registrymetadatatext.md).[toString](../interfaces/_packages_types_src_types_registry_.registrymetadatatext.md#tostring)*

*Defined in [packages/types/src/primitive/Text.ts:137](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L137)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Text.ts:145](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/types/src/primitive/Text.ts#L145)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*
