

*__name__*: Tuple

*__description__*: A Tuple defines an anonymous fixed-length array, where each element has its own type. It extends the base JS `Array` object.

# Type parameters
#### S :  `Array`<[Constructor](../modules/_types_.md#constructor)>
# Hierarchy

 `Array`<[Codec](../interfaces/_types_.codec.md)>

**↳ Tuple**

↳  [Seal](_digest_.seal.md)

↳  [OuterEventMetadataEvent](_metadata_events_.outereventmetadataevent.md)

↳  [EventData](_event_.eventdata.md)

↳  [InherentOfflineReport](_inherentofflinereport_.inherentofflinereport.md)

↳  [KeyValueOption](_keyvalue_.keyvalueoption.md)

↳  [BftAuthoritySignature](_bft_.bftauthoritysignature.md)

↳  [BftHashSignature](_bft_.bfthashsignature.md)

↳  [RuntimeVersionApi](_runtimeversion_.runtimeversionapi.md)

↳  [NextAuthority](_storedpendingchange_.nextauthority.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[n: `number`\]:&nbsp;[Codec](../interfaces/_types_.codec.md)
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Tuple**(Types: *`S`*, value: *`any`*): [Tuple](_codec_tuple_.tuple.md)

*Defined in [codec/Tuple.ts:19](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |
| value | `any` |

**Returns:** [Tuple](_codec_tuple_.tuple.md)

___

# Properties

<a id="array"></a>

## `<Static>` Array

**● Array**: *`ArrayConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1358*

___

# Accessors

<a id="types"></a>

##  Types

getTypes(): `Array`<`string`>

*Defined in [codec/Tuple.ts:75](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L75)*

*__description__*: The types definition of the tuple

**Returns:** `Array`<`string`>

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Tuple.ts:66](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L66)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="filter"></a>

##  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Overrides Array.filter*

*Defined in [codec/Tuple.ts:131](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L131)*

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

*Overrides Array.map*

*Defined in [codec/Tuple.ts:140](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L140)*

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

*Defined in [codec/Tuple.ts:82](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L82)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Tuple.ts:89](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L89)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Tuple.ts:96](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L96)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides Array.toString*

*Defined in [codec/Tuple.ts:105](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L105)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [codec/Tuple.ts:114](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L114)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Tuple](_codec_tuple_.tuple.md)<`S`>>

*Defined in [codec/Tuple.ts:53](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Tuple.ts#L53)*

**Type parameters:**

#### S :  `Array`<[Constructor](../modules/_types_.md#constructor)>
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Tuple](_codec_tuple_.tuple.md)<`S`>>

___

