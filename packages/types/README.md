# @polkadot/types

Implementation of the types and their (de-)serialisation via SCALE codec.<br>
On the Rust side, the codec types and primitive types are implemented via the [parity-codec](https://github.com/paritytech/parity-codec).


## Codec types

These are the base types of the codec. They are typically not used directly, but rather inherited from to create specific types. They are the building blocks for declaring custom types:

| **Types** | |
| --- | --- |
| [[Compact]] | A compact length-encoding codec wrapper. Mostly used by other types to add length-prefixed encoding |
| [[Enum]] | A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value |
| [[Int]] | A generic signed integer codec |
| [[Option]] | An Option is an optional field. The first byte indicates that there is is value to follow |
| [[Set]] | An Set is an array of string values, represented an an encoded type by a bitwise representation of the values |
| [[Struct]] | A Struct defines an Object with key-value pairs - where the values are Codec values. |
| [[Tuple]] | A Tuple defines an anonymous fixed-length array, where each element has its own type |
| [[U8a]] |  A basic wrapper around Uint8Array. It will consume the full Uint8Array as passed to it |
| [[U8aFixed]] | A U8a that manages a a sequence of bytes up to the specified bitLength |
| [[UInt]] | A generic unsigned integer codec. It handles the encoding and decoding of Little Endian encoded numbers in Substrate |
| [[Vec]] | This manages codec arrays. Internally it keeps track of the length (as decoded) |
| [[VecAny]] | This manages codec arrays, assuming that the inputs are already of type Codec |


## Primitive types

These primitive types are available:

| **Types** | |
| --- | --- |
| [[AccountId]] | A wrapper around an AccountId/PublicKey representation |
| [[AccountIndex]] | A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account |
| [[Address]] | A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix |
| [[bool]] | Representation for a boolean value in the system |
| [[Bytes]] | A Bytes wrapper for `Vec<u8>` |
| [[Call]] | Extrinsic function descriptor, as defined in [the extrinsic format for a node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node) |
| [[Data]] | A raw data structure. It is an encoding of a U8a without any length encoding |
| [[Event]] | Wrapper for the actual data that forms part of an [[Event]] |
| [[EventRecord]] | A record for an [[Event]] (as specified by [[Metadata]]) with the specific [[Phase]] of application |
| [[Extrinsic]] | Representation of an Extrinsic in the system |
| [[ExtrinsicEra]] | The era for an extrinsic, indicating either a mortal or immortal extrinsic |
| [[ExtrinsicPayload]] | A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based on the contents included |
| [[H160]] | Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and as a sane default |
| [[H256]] | Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and as a sane default |
| [[H512]] | Hash containing 512 bits (64 bytes), typically used for signatures |
| [[Hash]] | The default hash that is used accross the system. It is just a thin wrapper around [[H256]]
| [[i8]] | An 8-bit signed integer |
| [[i16]] | A 16-bit signed integer |
| [[i32]] | A 32-bit signed integer |
| [[i64]] | A 64-bit signed integer |
| [[i128]] | A 128-bit signed integer |
| [[i256]] | A 256-bit signed integer |
| [[Moment]] | A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust) |
| [[Null]] | Implements a type that does not contain anything (apart from `null`) |
| [[Signature]] | The default signature that is used accross the system |
| [[StorageData]] | Data retrieved via Storage queries and data for key-value pairs |
| [[StorageKey]] |  A representation of a storage key (typically hashed) in the system |
| [[Text]] | This is a string wrapper, along with the length. |
| [[Type]] | This is a extended version of String, specifically to handle types |
| [[u8]] | An 8-bit unsigned integer |
| [[u16]] | A 16-bit unsigned integer |
| [[u32]] | A 32-bit unsigned integer |
| [[u64]] | A 64-bit unsigned integer |
| [[u128]] | A 128-bit unsigned integer |
| [[u256]] | A 256-bit unsigned integer |
