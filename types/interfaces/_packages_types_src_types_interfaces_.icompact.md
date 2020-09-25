**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/types/interfaces"](../modules/_packages_types_src_types_interfaces_.md) / ICompact

# Interface: ICompact\<**T**>

## Type parameters

* T

## Hierarchy

* [Codec](_packages_types_src_types_codec_.codec.md)

  ↳ **ICompact**

## Implemented by

* [Compact](../classes/_packages_types_src_codec_compact_.compact.md)

## Index

### Properties

* [encodedLength](_packages_types_src_types_interfaces_.icompact.md#encodedlength)
* [hash](_packages_types_src_types_interfaces_.icompact.md#hash)
* [isEmpty](_packages_types_src_types_interfaces_.icompact.md#isempty)
* [registry](_packages_types_src_types_interfaces_.icompact.md#registry)

### Methods

* [eq](_packages_types_src_types_interfaces_.icompact.md#eq)
* [toBigInt](_packages_types_src_types_interfaces_.icompact.md#tobigint)
* [toBn](_packages_types_src_types_interfaces_.icompact.md#tobn)
* [toHex](_packages_types_src_types_interfaces_.icompact.md#tohex)
* [toHuman](_packages_types_src_types_interfaces_.icompact.md#tohuman)
* [toJSON](_packages_types_src_types_interfaces_.icompact.md#tojson)
* [toNumber](_packages_types_src_types_interfaces_.icompact.md#tonumber)
* [toRawType](_packages_types_src_types_interfaces_.icompact.md#torawtype)
* [toString](_packages_types_src_types_interfaces_.icompact.md#tostring)
* [toU8a](_packages_types_src_types_interfaces_.icompact.md#tou8a)
* [unwrap](_packages_types_src_types_interfaces_.icompact.md#unwrap)

## Properties

### encodedLength

• `Readonly` **encodedLength**: number

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:23](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L23)*

**`description`** The length of the value when encoded as a Uint8Array

___

### hash

• `Readonly` **hash**: H256

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#hash)*

*Defined in [packages/types/src/types/codec.ts:28](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L28)*

**`description`** Returns a hash of the value

___

### isEmpty

• `Readonly` **isEmpty**: boolean

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:33](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L33)*

**`description`** Checks if the value is an empty value

___

### registry

• `Readonly` **registry**: [Registry](_packages_types_src_types_registry_.registry.md)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#registry)*

*Defined in [packages/types/src/types/codec.ts:38](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L38)*

**`description`** The registry associated with this object

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L43)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### toBigInt

▸ **toBigInt**(): BigInt

*Defined in [packages/types/src/types/interfaces.ts:11](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/interfaces.ts#L11)*

**Returns:** BigInt

___

### toBn

▸ **toBn**(): BN

*Defined in [packages/types/src/types/interfaces.ts:12](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/interfaces.ts#L12)*

**Returns:** BN

___

### toHex

▸ **toHex**(`isLe?`: undefined \| false \| true): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

#### Parameters:

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L53)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L58)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toNumber

▸ **toNumber**(): number

*Defined in [packages/types/src/types/interfaces.ts:13](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/interfaces.ts#L13)*

**Returns:** number

___

### toRawType

▸ **toRawType**(): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L68)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L74)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

___

### unwrap

▸ **unwrap**(): T

*Defined in [packages/types/src/types/interfaces.ts:14](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/interfaces.ts#L14)*

**Returns:** T
