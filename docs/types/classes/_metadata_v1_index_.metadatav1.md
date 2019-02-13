

*__name__*: MetadataV1

*__description__*: The runtime metadata as a decoded structure

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ MetadataV1**

# Implements

* [Codec](../interfaces/_types_.codec.md)
* [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MetadataV1**(value?: *`any`*): [MetadataV1](_metadata_v1_index_.metadatav1.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v1/index.ts:74](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/Metadata/v1/index.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [MetadataV1](_metadata_v1_index_.metadatav1.md)

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L142)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L149)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="modules"></a>

##  modules

getmodules(): [Vector](_codec_vector_.vector.md)<[MetadataModule](_metadata_v1_index_.metadatamodule.md)>

*Defined in [Metadata/v1/index.ts:84](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/Metadata/v1/index.ts#L84)*

*__description__*: The associated modules for this structure

**Returns:** [Vector](_codec_vector_.vector.md)<[MetadataModule](_metadata_v1_index_.metadatamodule.md)>

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L158)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) | `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L166)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_types_.codec.md) | `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L173)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="getuniqtypes"></a>

##  getUniqTypes

▸ **getUniqTypes**(): `Array`<`string`>

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md).[getUniqTypes](../interfaces/_metadata_types_.metadatainterface.md#getuniqtypes)*

*Defined in [Metadata/v1/index.ts:123](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/Metadata/v1/index.ts#L123)*

*__description__*: Helper to retrieve a list of all type that are found, sorted and de-deuplicated

**Returns:** `Array`<`string`>

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L180)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L194)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L208)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L216)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/be17bf5/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

