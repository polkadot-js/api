

# Functions

<a id="decodeu8a"></a>

##  decodeU8a

▸ **decodeU8a**(u8a: *`Uint8Array`*, _types: *[Constructor](_types_.md#constructor)[] \| `object`*): [Codec](../interfaces/_types_.codec.md)[]

*Defined in [codec/utils/decodeU8a.ts:14](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/utils/decodeU8a.ts#L14)*

Given an u8a, and an array of Type constructors, decode the u8a against the types, and return an array of decoded values.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| u8a | `Uint8Array` |  The u8a to decode. |
| _types | [Constructor](_types_.md#constructor)[] \| `object` |

**Returns:** [Codec](../interfaces/_types_.codec.md)[]

___

