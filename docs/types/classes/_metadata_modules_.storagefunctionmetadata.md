

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ StorageFunctionMetadata**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageFunctionMetadata**(value?: *`StorageFunctionMetadataValue` | `Uint8Array`*): [StorageFunctionMetadata](_metadata_modules_.storagefunctionmetadata.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/Modules.ts:201](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/Metadata/Modules.ts#L201)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `StorageFunctionMetadataValue` | `Uint8Array` |

**Returns:** [StorageFunctionMetadata](_metadata_modules_.storagefunctionmetadata.md)

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L142)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="default"></a>

##  default

getdefault(): [Bytes](_bytes_.bytes.md)

*Defined in [Metadata/Modules.ts:215](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/Metadata/Modules.ts#L215)*

*__description__*: The default value of the storage function

**Returns:** [Bytes](_bytes_.bytes.md)

___
<a id="documentation"></a>

##  documentation

getdocumentation(): [Vector](_codec_vector_.vector.md)<[Text](_text_.text.md)>

*Defined in [Metadata/Modules.ts:222](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/Metadata/Modules.ts#L222)*

*__description__*: The [Text](_text_.text.md) documentation

**Returns:** [Vector](_codec_vector_.vector.md)<[Text](_text_.text.md)>

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L149)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="modifier"></a>

##  modifier

getmodifier(): [StorageFunctionModifier](_metadata_modules_.storagefunctionmodifier.md)

*Defined in [Metadata/Modules.ts:236](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/Metadata/Modules.ts#L236)*

*__description__*: The modifier

**Returns:** [StorageFunctionModifier](_metadata_modules_.storagefunctionmodifier.md)

___
<a id="name"></a>

##  name

getname(): [Text](_text_.text.md)

*Defined in [Metadata/Modules.ts:229](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/Metadata/Modules.ts#L229)*

*__description__*: The key name

**Returns:** [Text](_text_.text.md)

___
<a id="type-1"></a>

##  type

gettype(): [StorageFunctionType](_metadata_modules_.storagefunctiontype.md)

*Defined in [Metadata/Modules.ts:243](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/Metadata/Modules.ts#L243)*

*__description__*: The [StorageFunctionType](_metadata_modules_.storagefunctiontype.md)

**Returns:** [StorageFunctionType](_metadata_modules_.storagefunctiontype.md)

___

# Methods

<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) | `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L159)*

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

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L166)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L173)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L180)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L201)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L209)*

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

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/7393710/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

