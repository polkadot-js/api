[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/primitive/DoNotConstruct"](../modules/_packages_types_src_primitive_donotconstruct_.md) › [DoNotConstruct](_packages_types_src_primitive_donotconstruct_.donotconstruct.md)

# Class: DoNotConstruct

**`name`** DoNotConstruct

**`description`** 
An unknown type that fails on construction with the type info

## Hierarchy

* [Null](_packages_types_src_primitive_null_.null.md)

  ↳ **DoNotConstruct**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#constructor)

### Properties

* [registry](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#readonly-registry)

### Accessors

* [encodedLength](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#encodedlength)
* [hash](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#hash)
* [isEmpty](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#isempty)

### Methods

* [eq](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#eq)
* [toHex](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#tohex)
* [toHuman](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#tohuman)
* [toJSON](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#tojson)
* [toRawType](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#torawtype)
* [toString](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#tostring)
* [toU8a](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#tou8a)
* [with](_packages_types_src_primitive_donotconstruct_.donotconstruct.md#static-with)

## Constructors

###  constructor

\+ **new DoNotConstruct**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `typeName`: string): *[DoNotConstruct](_packages_types_src_primitive_donotconstruct_.donotconstruct.md)*

*Overrides [Null](_packages_types_src_primitive_null_.null.md).[constructor](_packages_types_src_primitive_null_.null.md#constructor)*

*Defined in [packages/types/src/primitive/DoNotConstruct.ts:13](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/DoNotConstruct.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`typeName` | string |

**Returns:** *[DoNotConstruct](_packages_types_src_primitive_donotconstruct_.donotconstruct.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[registry](_packages_types_src_primitive_null_.null.md#readonly-registry)*

*Defined in [packages/types/src/primitive/Null.ts:15](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L15)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[encodedLength](_packages_types_src_primitive_null_.null.md#encodedlength)*

*Defined in [packages/types/src/primitive/Null.ts:24](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L24)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[hash](_packages_types_src_primitive_null_.null.md#hash)*

*Defined in [packages/types/src/primitive/Null.ts:31](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L31)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[isEmpty](_packages_types_src_primitive_null_.null.md#isempty)*

*Defined in [packages/types/src/primitive/Null.ts:38](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L38)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[eq](_packages_types_src_primitive_null_.null.md#eq)*

*Defined in [packages/types/src/primitive/Null.ts:45](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L45)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[toHex](_packages_types_src_primitive_null_.null.md#tohex)*

*Defined in [packages/types/src/primitive/Null.ts:52](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L52)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *null*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[toHuman](_packages_types_src_primitive_null_.null.md#tohuman)*

*Defined in [packages/types/src/primitive/Null.ts:59](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L59)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *null*

___

###  toJSON

▸ **toJSON**(): *null*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[toJSON](_packages_types_src_primitive_null_.null.md#tojson)*

*Defined in [packages/types/src/primitive/Null.ts:66](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L66)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[toRawType](_packages_types_src_primitive_null_.null.md#torawtype)*

*Defined in [packages/types/src/primitive/Null.ts:73](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L73)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[toString](_packages_types_src_primitive_null_.null.md#tostring)*

*Defined in [packages/types/src/primitive/Null.ts:80](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L80)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Null](_packages_types_src_primitive_null_.null.md).[toU8a](_packages_types_src_primitive_null_.null.md#tou8a)*

*Defined in [packages/types/src/primitive/Null.ts:89](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/Null.ts#L89)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`typeName`: string): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)*

*Defined in [packages/types/src/primitive/DoNotConstruct.ts:20](https://github.com/polkadot-js/api/blob/af074500b/packages/types/src/primitive/DoNotConstruct.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`typeName` | string | "DoNotConstruct" |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)*
