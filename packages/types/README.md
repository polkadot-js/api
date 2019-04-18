# @polkadot/types

Implementation of the types and their (de-)serialisation via SCALE codec.\
On the Rust side, the codec types and primitive types are implemented via the [parity-codec](https://github.com/paritytech/parity-codec).


## Codec types

These are the base types of the codec. They are typically not used directly, but rather inherited from to create specific types. They are the building blocks for declaring custom types: 

| | | |
|-|-|-|
| [[AbstractArray]] | Manages codec arrays. It is an extension to Array |
| [[Base]] | A type extends the Base class, when it holds a value |
| [[Compact]] | A compact length-encoding codec wrapper. Mostly used by other types to add length-prefixed encoding |
| [[Enum]] | A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value |
| [[EnumType]] | Implements an enum, which wraps a different type based on the value|
| [[Int]] | A generic signed integer codec |
| [[Option]] | An Option is an optional field. The first byte indicates that there is is value to follow |
| [[Set]] | An Set is an array of string values, represented an an encoded type by a bitwise representation of the values |
| [[Struct]] | A Struct defines an Object with key-value pairs - where the values are Codec values. |
| [[Tuple]] | A Tuple defines an anonymous fixed-length array, where each element has its own type |
| [[U8a]] |  A basic wrapper around Uint8Array. It will consume the full Uint8Array as passed to it |
| [[U8aFixed]] | A U8a that manages a a sequence of bytes up to the specified bitLength |
| [[UInt]] | A generic unsigned integer codec. It handles the encoding and decoding of Little Endian encoded numbers in Substrate |
| [[Vector]] | This manages codec arrays. Internally it keeps track of the length (as decoded) |
| [[VectorAny]] | This manages codec arrays, assuming that the inputs are already of type Codec |


## Primitive types

These primitive types are available:

| | | |
|-|-|-|
| [[Bool]] | Representation for a boolean value in the system |
| [[Bytes]] | A Bytes wrapper for `Vec<u8>` |
| [[Data]] | A raw data structure. It is an encoding of a U8a without any length encoding |
| [[H160]] | Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and as a sane default |
| [[H256]] | Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and as a sane default |
| [[H512]] | Hash containing 512 bits (64 bytes), typically used for signatures |
| [[I8]] | An 8-bit signed integer |
| [[I16]] | A 16-bit signed integer |
| [[I32]] | A 32-bit signed integer |
| [[I64]] | A 64-bit signed integer |
| [[I128]] | A 128-bit signed integer |
| [[I256]] | A 256-bit signed integer |
| [[Method]] | Extrinsic function descriptor, as defined in [the extrinsic format for a node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node) |
| [[Moment]] | A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust) |
| [[Null]] | Implements a type that does not contain anything (apart from `null`) |
| [[StorageData]] | Data retrieved via Storage queries and data for key-value pairs |
| [[StorageKey]] |  A representation of a storage key (typically hashed) in the system |
| [[Text]] | This is a string wrapper, along with the length. |
| [[Type]] | This is a extended version of String, specifically to handle types |
| [[U8]] | An 8-bit unsigned integer |
| [[U16]] | A 16-bit unsigned integer |
| [[U32]] | A 32-bit unsigned integer |
| [[U64]] | A 64-bit unsigned integer |
| [[U128]] | A 128-bit unsigned integer |
| [[U256]] | A 256-bit unsigned integer |
| [[USize]] | A System default unsigned number, typically used in RPC to report non-consensus data |


## Substrate types

These custom types implement specific types that are found as part of the Substrate core. They're all extensions of one of the codec types: 

| | | |
|-|-|-|
| [[AccountId]] | Value1 |
| [[AccountIndex]] | Value1 |
| [[Address]] | Value1 |
| [[Amount]] | Value1 |
| [[AssetOf]] | Value1 |
| [[AttestedCandidate]] | Value1 |
| [[AuthorityId]] | Value1 |
| [[Balance]] | Value1 |
| [[BalanceLock]] | Value1 |
| [[BalanceOf]] | Value1 |
| [[Block]] | Value1 |
| [[BlockNumber]] | Value1 |
| [[CodeHash]] | Value1 |
| [[Digest]] | Value1 |
| [[Event]] | Value1 |
| [[EventRecord]] | Value1 |
| [[Exposure]] | Value1 |
| [[Extrinsic]] | Value1 |
| [[ExtrinsicEra]] | Value1 |
| [[ExtrinsicSignature]] | Value1 |
| [[Gas]] | Value1 |
| [[Hash]] | Value1 |
| [[Header]] | A [[Block]] header |
| [[HeaderExtended]] | A [[Block]] header with an additional `author` field that indicates the block author] |
| [[IndividualExposure]] | Value1 |
| [[InherentOfflineReport]] | Value1 |
| [[Justification]] | Value1 |
| [[Key]] | Value1 |
| [[KeyValue]] | Value1 |
| [[LockIdentifier]] | Value1 |
| [[MisbehaviorReport]] | Value1 |
| [[NewAccountOutcome]] | Value1 |
| [[Nonce]] | Value1 |
| [[Origin]] | Value1 |
| [[ParaId]] | Value1 |
| [[Perbill]] | Value1 |
| [[Permill]] | Value1 |
| [[PrefabWasmModule]] | Value1 |
| [[PropIndex]] | Value1 |
| [[Proposal]] | Value1 |
| [[ProposalIndex]] | Value1 |
| [[ReferendumIndex]] | Value1 |
| [[ReferendumInfo]] | Info regarding an ongoing referendum |
| [[RewardDestination]] | Value1 |
| [[Schedule]] | Value1 |
| [[SeedOf]] | Value1 |
| [[SessionKey]] | Value1 |
| [[Signature]] | Value1 |
| [[SignaturePayload]] | Value1 |
| [[StakingLedger]] | Value1 |
| [[StoredPendingChange]] | Value1 |
| [[TreasuryProposal]] | Value1 |
| [[UnlockChunk]] | Value1 |
| [[ValidatorPrefs]] | Value1 |
| [[VestingSchedule]] | Value1 |
| [[Vote]] | Value1 |
| [[VoteIndex]] | Value1 |
| [[VoteThreshold]] | Value1 |
| [[WithdrawReasons]] | Value1 |


## RPC types

These types are not used in the runtime, but rather are used in RPC results: 

| | | |
|-|-|-|
| [[ChainProperties]] | Wraps the properties retrieved from the chain via the `system.properties` RPC call |
| [[ExtrinsicStatus]] | An EnumType that indicates the status of the Extrinsic as been submitted |
| [[Health]] | A system health indicator, reported back over RPC |
| [[Json]] | Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map |
| [[NetworkState]] | Wraps the properties retrieved from the chain via the `system.network_state` RPC call |
| [[Metadata]] | Value1 |
| [[PeerInfo]] | A system peer info indicator, reported back over RPC |
| [[PendingExtrinsics]] | A list of pending [[Extrinsics]] |
| [[RuntimeVersion]] | A [[Tuple]] that conatins the [[ApiId]] and [[U32]] version |
| [[SignedBlock]] | A [[Block]] that has been signed and contains a [[Justification]] |
| [[StorageChangeSet]] | A set of storage changes. It contains the [[Block]] hash and a list of the actual changes |


## Derived types

Some types are extended from the base to provide additional information: 

| | | |
|-|-|-|
| [[HeaderExtended]] | A [[Block]] header with an additional `author` field that indicates the block author |
| [[ReferendumInfoExtended]] | Value1 |

## Metadata

