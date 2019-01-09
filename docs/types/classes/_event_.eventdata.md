

*__name__*: EventData

*__description__*: Wrapper for the actual data that forms part of an [Event](_event_.event.md)

# Hierarchy

↳  [Tuple](_codec_tuple_.tuple.md)

**↳ EventData**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[n: `number`\]:&nbsp;[Codec](../interfaces/_types_.codec.md)
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EventData**(Types: *`Array`<[Constructor](../modules/_types_.md#constructor)>*, value: *`Uint8Array`*, typeDef: *`Array`<[TypeDef](../modules/_types_.md#typedef)>*, meta: *[EventMetadata](_metadata_events_.eventmetadata.md)*, section: *`string`*, method: *`string`*): [EventData](_event_.eventdata.md)

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [Event.ts:28](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/Event.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `Array`<[Constructor](../modules/_types_.md#constructor)> |
| value | `Uint8Array` |
| typeDef | `Array`<[TypeDef](../modules/_types_.md#typedef)> |
| meta | [EventMetadata](_metadata_events_.eventmetadata.md) |
| section | `string` |
| method | `string` |

**Returns:** [EventData](_event_.eventdata.md)

___

# Accessors

<a id="types"></a>

##  Types

getTypes(): `Array`<`string`>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [codec/Tuple.ts:68](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L68)*

*__description__*: The types definition of the tuple

**Returns:** `Array`<`string`>

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Defined in [codec/Tuple.ts:59](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L59)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): [EventMetadata](_metadata_events_.eventmetadata.md)

*Defined in [Event.ts:42](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/Event.ts#L42)*

*__description__*: The wrapped [EventMetadata](_metadata_events_.eventmetadata.md)

**Returns:** [EventMetadata](_metadata_events_.eventmetadata.md)

___
<a id="method"></a>

##  method

getmethod(): `string`

*Defined in [Event.ts:49](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/Event.ts#L49)*

*__description__*: The method as a string

**Returns:** `string`

___
<a id="section"></a>

##  section

getsection(): `string`

*Defined in [Event.ts:56](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/Event.ts#L56)*

*__description__*: The section as a string

**Returns:** `string`

___
<a id="typedef"></a>

##  typeDef

gettypeDef(): `Array`<[TypeDef](../modules/_types_.md#typedef)>

*Defined in [Event.ts:63](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/Event.ts#L63)*

*__description__*: The [TypeDef](../modules/_types_.md#typedef) for this event

**Returns:** `Array`<[TypeDef](../modules/_types_.md#typedef)>

___

# Methods

<a id="filter"></a>

##  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[filter](_codec_tuple_.tuple.md#filter)*

*Overrides Array.filter*

*Defined in [codec/Tuple.ts:126](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L126)*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="map"></a>

##  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[map](_codec_tuple_.tuple.md#map)*

*Overrides Array.map*

*Defined in [codec/Tuple.ts:135](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L135)*

*__description__*: Maps the array with the callback

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The mapping function |
| `Optional` thisArg | `any` |  The \`this\` onject to apply the result to |

**Returns:** `Array`<`U`>

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toArray](_codec_tuple_.tuple.md#toarray)*

*Defined in [codec/Tuple.ts:77](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L77)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toHex](_codec_tuple_.tuple.md#tohex)*

*Defined in [codec/Tuple.ts:84](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L84)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toJSON](_codec_tuple_.tuple.md#tojson)*

*Defined in [codec/Tuple.ts:91](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L91)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides Array.toString*

*Defined in [codec/Tuple.ts:100](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L100)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Defined in [codec/Tuple.ts:109](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L109)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Types: *`TupleConstructors`*): [Constructor](../modules/_types_.md#constructor)<[Tuple](_codec_tuple_.tuple.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#with)*

*Defined in [codec/Tuple.ts:48](https://github.com/polkadot-js/api/blob/6ddc9e4/packages/types/src/codec/Tuple.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TupleConstructors` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Tuple](_codec_tuple_.tuple.md)>

___

