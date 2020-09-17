[Polkadot JS API](README.md) › [Globals](globals.md)

# Polkadot JS API

# @polkadot/types

Implementation of the types and their (de-)serialisation via SCALE codec.<br>
On the Rust side, the codec types and primitive types are implemented via the [parity-codec](https://github.com/paritytech/parity-codec).

## Codec types

These are the base types of the codec. They are typically not used directly, but rather inherited from to create specific types. They are the building blocks for declaring custom types:

| **Types** | |
| --- | --- |
| [Compact](classes/_packages_types_src_codec_compact_.compact.md) | A compact length-encoding codec wrapper. Mostly used by other types to add length-prefixed encoding |
| [Enum](classes/_packages_types_src_codec_enum_.enum.md) | A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value |
| [Int](classes/_packages_types_src_codec_int_.int.md) | A generic signed integer codec |
| [Option](classes/_packages_types_src_codec_option_.option.md) | An Option is an optional field. The first byte indicates that there is a value to follow |
| [Set](classes/_packages_types_src_codec_btreeset_.btreeset.md#static-set) | An Set is an array of string values, represented an an encoded type by a bitwise representation of the values |
| [Struct](classes/_packages_types_src_codec_struct_.struct.md) | A Struct defines an Object with key-value pairs - where the values are Codec values. |
| [Tuple](classes/_packages_types_src_codec_tuple_.tuple.md) | A Tuple defines an anonymous fixed-length array, where each element has its own type |
| [Raw](classes/_packages_types_src_codec_raw_.raw.md) |  A basic wrapper around Uint8Array. It will consume the full Uint8Array as passed to it |
| [U8aFixed](classes/_packages_types_src_codec_u8afixed_.u8afixed.md) | A U8a that manages a a sequence of bytes up to the specified bitLength |
| [UInt](classes/_packages_types_src_codec_uint_.uint.md) | A generic unsigned integer codec. It handles the encoding and decoding of Little Endian encoded numbers in Substrate |
| [Vec](classes/_packages_types_src_codec_vec_.vec.md) | This manages codec arrays. Internally it keeps track of the length (as decoded) |
| [VecAny](classes/_packages_types_src_codec_vecany_.vecany.md) | This manages codec arrays, assuming that the inputs are already of type Codec |

## Primitive types

These primitive types are available:

| **Types** | |
| --- | --- |
| [AccountId](classes/_packages_types_src_ethereum_accountid_.accountid.md) | A wrapper around an AccountId/PublicKey representation |
| [AccountIndex](classes/_packages_types_src_generic_accountindex_.accountindex.md) | A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account |
| [Address](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#address) | A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix |
| [bool](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#bool) | Representation for a boolean value in the system |
| [Bytes](classes/_packages_types_src_primitive_bytes_.bytes.md) | A Bytes wrapper for `Vec<u8>` |
| [Call](classes/_packages_types_src_generic_call_.call.md) | Extrinsic function descriptor, as defined in [the extrinsic format for a node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node) |
| [Event](classes/_packages_types_src_generic_event_.event.md) | Wrapper for the actual data that forms part of an [Event](classes/_packages_types_src_generic_event_.event.md) |
| [EventRecord](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#eventrecord) | A record for an [Event](classes/_packages_types_src_generic_event_.event.md) (as specified by [[Metadata]]) with the specific [Phase](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#phase) of application |
| [Extrinsic](classes/_packages_types_src_extrinsic_extrinsic_.extrinsic.md) | Representation of an Extrinsic in the system |
| [ExtrinsicEra](classes/_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md) | The era for an extrinsic, indicating either a mortal or immortal extrinsic |
| [ExtrinsicPayload](classes/_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md) | A signing payload for an [Extrinsic](classes/_packages_types_src_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based on the contents included |
| [H160](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#h160) | Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and as a sane default |
| [H256](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#h256) | Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and as a sane default |
| [H512](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#h512) | Hash containing 512 bits (64 bytes), typically used for signatures |
| [Hash](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#hash) | The default hash that is used accross the system. It is just a thin wrapper around [H256](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#h256)
| [i8](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#i8) | An 8-bit signed integer |
| [i16](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#i16) | A 16-bit signed integer |
| [i32](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#i32) | A 32-bit signed integer |
| [i64](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#i64) | A 64-bit signed integer |
| [i128](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#i128) | A 128-bit signed integer |
| [i256](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#i256) | A 256-bit signed integer |
| [Moment](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#moment) | A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust) |
| [Null](classes/_packages_types_src_primitive_null_.null.md) | Implements a type that does not contain anything (apart from `null`) |
| [Signature](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#signature) | The default signature that is used accross the system |
| [StorageData](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#storagedata) | Data retrieved via Storage queries and data for key-value pairs |
| [StorageKey](classes/_packages_types_src_primitive_storagekey_.storagekey.md) |  A representation of a storage key (typically hashed) in the system |
| [Text](classes/_packages_types_src_primitive_text_.text.md) | This is a string wrapper, along with the length. |
| [Type](classes/_packages_types_src_codec_struct_.struct.md#type) | This is a extended version of String, specifically to handle types |
| [u8](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u8) | An 8-bit unsigned integer |
| [u16](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u16) | A 16-bit unsigned integer |
| [u32](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u32) | A 32-bit unsigned integer |
| [u64](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u64) | A 64-bit unsigned integer |
| [u128](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u128) | A 128-bit unsigned integer |
| [u256](interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u256) | A 256-bit unsigned integer |
