

# Functions

<a id="decodeu8a"></a>

##  decodeU8a

▸ **decodeU8a**(u8a: *`Uint8Array`*, types: *[Constructor](_types_.md#constructor)[]*): [Codec](../interfaces/_types_.codec.md)[]

*Defined in [codec/utils/decodeU8a.ts:14](https://github.com/polkadot-js/api/blob/fb36c59/packages/types/src/codec/utils/decodeU8a.ts#L14)*

Given an u8a, and an array of Type constructors, decode the u8a against the types, and return an array of decoded values.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| u8a | `Uint8Array` |  The u8a to decode. |
| types | [Constructor](_types_.md#constructor)[] |  The array of Constructor to decode the U8a against. |

**Returns:** [Codec](../interfaces/_types_.codec.md)[]

___

