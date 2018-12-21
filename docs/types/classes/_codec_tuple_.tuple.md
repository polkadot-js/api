

*__name__*: Tuple

*__description__*: A Tuple defines an anonymous fixed-length array, where each element has its own type. It extends the base JS `Array` object.

# Type parameters
#### S :  `Array`<[Constructor](../modules/_types_.md#constructor)>
# Hierarchy

 `Array`<[Codec](../interfaces/_types_.codec.md)>

**↳ Tuple**

↳  [BalanceUpload](_attestedcandidate_.balanceupload.md)

↳  [EgressQueueRoot](_attestedcandidate_.egressqueueroot.md)

↳  [AvailabilityVote](_attestedcandidate_.availabilityvote.md)

↳  [ValidityVote](_attestedcandidate_.validityvote.md)

↳  [BftAuthoritySignature](_bft_.bftauthoritysignature.md)

↳  [BftHashSignature](_bft_.bfthashsignature.md)

↳  [Seal](_digest_.seal.md)

↳  [OuterEventMetadataEvent](_metadata_events_.outereventmetadataevent.md)

↳  [EventData](_event_.eventdata.md)

↳  [InherentOfflineReport](_inherentofflinereport_.inherentofflinereport.md)

↳  [KeyValueOption](_keyvalue_.keyvalueoption.md)

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

*Defined in [codec/Tuple.ts:20](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L20)*

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

*Defined in [codec/Tuple.ts:65](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L65)*

*__description__*: The types definition of the tuple

**Returns:** `Array`<`string`>

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Tuple.ts:56](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L56)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="filter"></a>

##  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Overrides Array.filter*

*Defined in [codec/Tuple.ts:121](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L121)*

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

*Defined in [codec/Tuple.ts:130](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L130)*

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

*Defined in [codec/Tuple.ts:72](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L72)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Tuple.ts:79](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L79)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Tuple.ts:86](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L86)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides Array.toString*

*Defined in [codec/Tuple.ts:95](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L95)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [codec/Tuple.ts:104](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L104)*

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

*Defined in [codec/Tuple.ts:43](https://github.com/polkadot-js/api/blob/4a9069e/packages/types/src/codec/Tuple.ts#L43)*

**Type parameters:**

#### S :  `Array`<[Constructor](../modules/_types_.md#constructor)>
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Tuple](_codec_tuple_.tuple.md)<`S`>>

___

