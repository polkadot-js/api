**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/metadata/src/Metadata/MagicNumber"](../modules/_packages_metadata_src_metadata_magicnumber_.md) / MagicNumber

# Class: MagicNumber

## Hierarchy

* U32

  ↳ **MagicNumber**

## Implements

* Codec

## Index

### Interfaces

* [MPrime](../interfaces/_packages_metadata_src_metadata_magicnumber_.magicnumber.mprime.md)
* [ReductionContext](../interfaces/_packages_metadata_src_metadata_magicnumber_.magicnumber.reductioncontext.md)

### Type aliases

* [Endianness](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#endianness)
* [IPrimeName](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#iprimename)

### Constructors

* [constructor](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#constructor)

### Properties

* [registry](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#registry)

### Accessors

* [encodedLength](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#encodedlength)
* [hash](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#hash)
* [isEmpty](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#isempty)
* [isUnsigned](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#isunsigned)

### Methods

* [bitLength](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#bitlength)
* [eq](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#eq)
* [isMax](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#ismax)
* [toBigInt](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tobigint)
* [toBn](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tobn)
* [toHex](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tohex)
* [toHuman](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tohuman)
* [toJSON](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tojson)
* [toRawType](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#torawtype)
* [toString](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tostring)
* [toU8a](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tou8a)
* [with](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#with)

## Type aliases

### Endianness

Ƭ `Static` **Endianness**: \"le\" \| \"be\"

*Defined in node_modules/@types/bn.js/index.d.ts:11*

___

### IPrimeName

Ƭ `Static` **IPrimeName**: \"k256\" \| \"p224\" \| \"p192\" \| \"p25519\"

*Defined in node_modules/@types/bn.js/index.d.ts:12*

## Constructors

### constructor

\+ **new MagicNumber**(`registry`: Registry, `value?`: AnyNumber): [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md)

*Overrides void*

*Defined in [packages/metadata/src/Metadata/MagicNumber.ts:12](https://github.com/polkadot-js/api/blob/19d6165bd/packages/metadata/src/Metadata/MagicNumber.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | AnyNumber |

**Returns:** [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md)

## Properties

### registry

• `Readonly` **registry**: Registry

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[registry](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#registry)*

*Defined in [packages/types/src/codec/AbstractInt.ts:67](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L67)*

## Accessors

### encodedLength

• get **encodedLength**(): number

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[encodedLength](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#encodedlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:90](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L90)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[hash](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#hash)*

*Defined in [packages/types/src/codec/AbstractInt.ts:97](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L97)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[isEmpty](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#isempty)*

*Defined in [packages/types/src/codec/AbstractInt.ts:104](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L104)*

**`description`** Checks if the value is a zero value (align elsewhere)

**Returns:** boolean

___

### isUnsigned

• get **isUnsigned**(): boolean

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[isUnsigned](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#isunsigned)*

*Defined in [packages/types/src/codec/AbstractInt.ts:111](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L111)*

**`description`** Checks if the value is an unsigned type

**Returns:** boolean

## Methods

### bitLength

▸ **bitLength**(): number

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[bitLength](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#bitlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:118](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L118)*

**`description`** Returns the number of bits in the value

**Returns:** number

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[eq](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#eq)*

*Defined in [packages/types/src/codec/AbstractInt.ts:126](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L126)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### isMax

▸ **isMax**(): boolean

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[isMax](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#ismax)*

*Defined in [packages/types/src/codec/AbstractInt.ts:139](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L139)*

**`description`** True if this value is the max of the type

**Returns:** boolean

___

### toBigInt

▸ **toBigInt**(): BigInt

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toBigInt](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tobigint)*

*Defined in [packages/types/src/codec/AbstractInt.ts:148](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L148)*

**`description`** Returns a BigInt representation of the number

**Returns:** BigInt

___

### toBn

▸ **toBn**(): BN

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toBn](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tobn)*

*Defined in [packages/types/src/codec/AbstractInt.ts:155](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L155)*

**`description`** Returns the BN representation of the number. (Compatibility)

**Returns:** BN

___

### toHex

▸ **toHex**(`isLe`: boolean): string

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toHex](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tohex)*

*Defined in [packages/types/src/codec/AbstractInt.ts:162](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L162)*

**`description`** Returns a hex string representation of the value

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExpanded?`: undefined \| false \| true): string

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toHuman](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tohuman)*

*Defined in [packages/types/src/codec/AbstractInt.ts:175](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L175)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExpanded?` | undefined \| false \| true |

**Returns:** string

___

### toJSON

▸ **toJSON**(): any

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toJSON](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tojson)*

*Defined in [packages/types/src/codec/AbstractInt.ts:194](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L194)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** any

___

### toRawType

▸ **toRawType**(): string

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toRawType](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#torawtype)*

*Defined in [packages/types/src/codec/AbstractInt.ts:206](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L206)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(`base?`: undefined \| number): string

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toString](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tostring)*

*Defined in [packages/types/src/codec/AbstractInt.ts:219](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L219)*

**`description`** Returns the string representation of the value

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`base?` | undefined \| number | The base to use for the conversion  |

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): Uint8Array

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toU8a](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tou8a)*

*Defined in [packages/types/src/codec/AbstractInt.ts:229](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/AbstractInt.ts#L229)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** Uint8Array

___

### with

▸ `Static`**with**(`bitLength`: UIntBitLength, `typeName?`: undefined \| string): Constructor\<UInt>

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[with](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#with)*

*Defined in [packages/types/src/codec/UInt.ts:23](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/UInt.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`bitLength` | UIntBitLength |
`typeName?` | undefined \| string |

**Returns:** Constructor\<UInt>
