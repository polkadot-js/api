

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)<`PlainType` \| [MapType](_metadata_v0_modules_.maptype.md)>

**↳ StorageFunctionType**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageFunctionType**(value?: *`any`*, index?: *`undefined` \| `number`*): [StorageFunctionType](_metadata_v0_modules_.storagefunctiontype.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [Metadata/v0/Modules.ts:157](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/Metadata/v0/Modules.ts#L157)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |
| `Optional` index | `undefined` \| `number` |

**Returns:** [StorageFunctionType](_metadata_v0_modules_.storagefunctiontype.md)

___

# Accessors

<a id="asmap"></a>

##  asMap

getasMap(): [MapType](_metadata_v0_modules_.maptype.md)

*Defined in [Metadata/v0/Modules.ts:175](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/Metadata/v0/Modules.ts#L175)*

*__description__*: The value as a mapped value

**Returns:** [MapType](_metadata_v0_modules_.maptype.md)

___
<a id="astype"></a>

##  asType

getasType(): `PlainType`

*Defined in [Metadata/v0/Modules.ts:182](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/Metadata/v0/Modules.ts#L182)*

*__description__*: The value as a \[\[Type\]\] value

**Returns:** `PlainType`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:114](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L114)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

getindex(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[index](_codec_enumtype_.enumtype.md#index)*

*Defined in [codec/EnumType.ts:121](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L121)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="ismap"></a>

##  isMap

getisMap(): `boolean`

*Defined in [Metadata/v0/Modules.ts:168](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/Metadata/v0/Modules.ts#L168)*

*__description__*: `true` if the storage entry is a map

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:128](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L128)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:135](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L135)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:142](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L142)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:149](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L149)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[eq](_codec_enumtype_.enumtype.md#eq)*

*Defined in [codec/EnumType.ts:156](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L156)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:169](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L169)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:176](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L176)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:185](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L185)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [Metadata/v0/Modules.ts:189](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/Metadata/v0/Modules.ts#L189)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:202](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L202)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[with](_codec_enumtype_.enumtype.md#with)*

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/8beac7b/packages/types/src/codec/EnumType.ts#L101)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

___

