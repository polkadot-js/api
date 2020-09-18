[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/types/interfaces"](../modules/_packages_types_src_types_interfaces_.md) › [IMethod](_packages_types_src_types_interfaces_.imethod.md)

# Interface: IMethod

## Hierarchy

* [Codec](_packages_types_src_types_codec_.codec.md)

  ↳ **IMethod**

  ↳ [IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)

## Implemented by

* [Call](../classes/_packages_types_src_generic_call_.call.md)

## Index

### Properties

* [args](_packages_types_src_types_interfaces_.imethod.md#readonly-args)
* [argsDef](_packages_types_src_types_interfaces_.imethod.md#readonly-argsdef)
* [callIndex](_packages_types_src_types_interfaces_.imethod.md#readonly-callindex)
* [data](_packages_types_src_types_interfaces_.imethod.md#readonly-data)
* [encodedLength](_packages_types_src_types_interfaces_.imethod.md#readonly-encodedlength)
* [hasOrigin](_packages_types_src_types_interfaces_.imethod.md#readonly-hasorigin)
* [hash](_packages_types_src_types_interfaces_.imethod.md#readonly-hash)
* [isEmpty](_packages_types_src_types_interfaces_.imethod.md#readonly-isempty)
* [meta](_packages_types_src_types_interfaces_.imethod.md#readonly-meta)
* [registry](_packages_types_src_types_interfaces_.imethod.md#readonly-registry)

### Methods

* [eq](_packages_types_src_types_interfaces_.imethod.md#eq)
* [toHex](_packages_types_src_types_interfaces_.imethod.md#tohex)
* [toHuman](_packages_types_src_types_interfaces_.imethod.md#tohuman)
* [toJSON](_packages_types_src_types_interfaces_.imethod.md#tojson)
* [toRawType](_packages_types_src_types_interfaces_.imethod.md#torawtype)
* [toString](_packages_types_src_types_interfaces_.imethod.md#tostring)
* [toU8a](_packages_types_src_types_interfaces_.imethod.md#tou8a)

## Properties

### `Readonly` args

• **args**: *[Codec](_packages_types_src_types_codec_.codec.md)[]*

*Defined in [packages/types/src/types/interfaces.ts:25](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/interfaces.ts#L25)*

___

### `Readonly` argsDef

• **argsDef**: *[ArgsDef](../modules/_packages_types_src_types_codec_.md#argsdef)*

*Defined in [packages/types/src/types/interfaces.ts:26](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/interfaces.ts#L26)*

___

### `Readonly` callIndex

• **callIndex**: *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/interfaces.ts:27](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/interfaces.ts#L27)*

___

### `Readonly` data

• **data**: *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/interfaces.ts:28](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/interfaces.ts#L28)*

___

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:23](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L23)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` hasOrigin

• **hasOrigin**: *boolean*

*Defined in [packages/types/src/types/interfaces.ts:30](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/interfaces.ts#L30)*

___

### `Readonly` hash

• **hash**: *Hash*

*Overrides [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/interfaces.ts:29](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/interfaces.ts#L29)*

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:33](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L33)*

**`description`** Checks if the value is an empty value

___

### `Readonly` meta

• **meta**: *FunctionMetadataLatest*

*Defined in [packages/types/src/types/interfaces.ts:31](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/interfaces.ts#L31)*

___

### `Readonly` registry

• **registry**: *[Registry](_packages_types_src_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:38](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L38)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L43)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L53)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L58)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L68)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/types/codec.ts#L74)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*
