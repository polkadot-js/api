

*__name__*: Event

*__description__*: A representation of a system event. These are generated via the [Metadata](_metadata_index_.metadata.md) interfaces and specific to a specific Substrate runtime

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Event**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Event**(_value?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): [Event](_event_.event.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Event.ts:86](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/Event.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` _value | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** [Event](_event_.event.md)

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L142)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="data"></a>

##  data

getdata(): [EventData](_event_.eventdata.md)

*Defined in [Event.ts:144](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/Event.ts#L144)*

*__description__*: The wrapped [EventData](_event_.eventdata.md)

**Returns:** [EventData](_event_.eventdata.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L149)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

getindex(): [EventIndex](_event_.eventindex.md)

*Defined in [Event.ts:151](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/Event.ts#L151)*

*__description__*: The [EventIndex](_event_.eventindex.md), identifying the raw event

**Returns:** [EventIndex](_event_.eventindex.md)

___
<a id="meta"></a>

##  meta

getmeta(): [EventMetadata](_metadata_events_.eventmetadata.md)

*Defined in [Event.ts:158](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/Event.ts#L158)*

*__description__*: The [EventMetadata](_metadata_events_.eventmetadata.md) with the documentation

**Returns:** [EventMetadata](_metadata_events_.eventmetadata.md)

___
<a id="method"></a>

##  method

getmethod(): `string`

*Defined in [Event.ts:165](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/Event.ts#L165)*

*__description__*: The method string identifying the event

**Returns:** `string`

___
<a id="section"></a>

##  section

getsection(): `string`

*Defined in [Event.ts:172](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/Event.ts#L172)*

*__description__*: The section string identifying the event

**Returns:** `string`

___
<a id="typedef"></a>

##  typeDef

gettypeDef(): `Array`<[TypeDef](../modules/_types_.md#typedef)>

*Defined in [Event.ts:179](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/Event.ts#L179)*

*__description__*: The [TypeDef](../modules/_types_.md#typedef) for the event

**Returns:** `Array`<[TypeDef](../modules/_types_.md#typedef)>

___

# Methods

<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) | `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L159)*

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

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L166)*

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

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L173)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L180)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L201)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L209)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeevent"></a>

## `<Static>` decodeEvent

▸ **decodeEvent**(value?: *`Uint8Array`*): `object` | `object`

*Defined in [Event.ts:98](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/Event.ts#L98)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `Uint8Array` |  new Uint8Array() |

**Returns:** `object` | `object`

___
<a id="injectmetadata"></a>

## `<Static>` injectMetadata

▸ **injectMetadata**(metadata: *[Metadata](_metadata_index_.metadata.md)*): `void`

*Defined in [Event.ts:122](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/Event.ts#L122)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| metadata | [Metadata](_metadata_index_.metadata.md) |

**Returns:** `void`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/a083a6b/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

