# @polkadot/types

Implementation of the types and their (de-)serialisation via SCALE codec.<br>
On the Rust side, the codec types and primitive types are implemented via the [parity-codec](https://github.com/paritytech/parity-codec).


## Codec types

These are the base types of the codec. They are typically not used directly, but rather inherited from to create specific types. They are the building blocks for declaring custom types: 

| Type | Description |
| --- | --- |
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

| Type | Description |
| --- | --- |
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

| Type | Description |
| --- | --- |
| [[AccountId]] | A wrapper around an AccountId/PublicKey representation |
| [[AccountIndex]] | A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account |
| [[AccountInfo]] | An Account information structure for contracts |
| [[Address]] | A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix |
| [[Amount]] | The Substrate Amount representation as a [[Balance]] |
| [[AssetOf]] | The Substrate AssetOf representation as a [[Balance]] |
| [[AttestedCandidate]] | An attested candidate |
| [[AuthorityId]] | Wrapper for a AuthorityId. Same as an normal AccountId |
| [[AuthoritiesChange]] | Log for Authories changed |
| [[Balance]] | The Substrate Balance representation as a [[U128]] |
| [[BalanceLock]] | The Substrate BalanceLock for staking |
| [[BalanceOf]] | The Substrate BalanceOf representation as a [[Balance]] |
| [[BftAtReport]] | A report of a/b hash-signature pairs for a specific index |
| [[BftAuthoritySignature]] | Represents a Bft Hash and Signature pairing, typically used in reporting network behaviour |
| [[BftHashSignature]] | Represents a Bft Hash and Signature pairing, typically used in reporting network behaviour |
| [[BftProposeOutOfTurn]] | A report for out-of-turn proposals |
| [[Block]] | A block encoded with header and extrinsics |
| [[BlockNumber]] | A representation of a Substrate BlockNumber, implemented as a [[U64]] |
| [[CodeHash]] | The default contract code hash that is used accross the system |
| [[Consensus]] | Log item indicating consensus |
| [[Digest]] | A [[Header]] Digest |
| [[DigestItem]] | A [[EnumType]] the specifies the specific item in the logs of a [[Digest]] |
| [[Event]] | Wrapper for the actual data that forms part of an [[Event]] |
| [[EventRecord]] | A record for an [[Event]] (as specified by [[Metadata]]) with the specific [[Phase]] of application |
| [[Exposure]] | A snapshot of the stake backing a single validator in the system |
| [[Extrinsic]] | Representation of an Extrinsic in the system |
| [[ExtrinsicEra]] | The era for an extrinsic, indicating either a mortal or immortal extrinsic |
| [[Extrinsics]] | A [[Vector]] of [[Extrinsic]] |
| [[ExtrinsicSignature]] | A container for the [[Signature]] associated with a specific [[Extrinsic]] |
| [[Gas]] | A gas number type for Substrate, extending [[U64]] |
| [[Hash]] | The default hash that is used accross the system. It is just a thin wrapper around [[H256]] |
| [[Header]] | A [[Block]] header |
| [[HeaderExtended]] | A [[Block]] header with an additional `author` field that indicates the block author] |
| [[IndividualExposure]] | The Substrate IndividualExposure for staking |
| [[InherentOfflineReport]] | Describes the offline-reporting extrinsic |
| [[Justification]] | A generic justification as a stream of [[Bytes]], this is specific per consensus implementation |
| [[Key]] | The Substrate Key representation as a [[Bytes]] (`vec<u8>`) |
| [[KeyValue]] |  KeyValue structure. Since most of the keys and resultant values in Subtrate are hashed and/or encoded, keys and values are reprsented as [[Bytes]] |
| [[KeyValueOption]] | A key/value change. Similar to the [[KeyValue]] structure, but the value can be optional |
| [[LockIdentifier]] | The Substrate LockIdentifier for staking |
| [[LockPeriods]] | A number of lock periods |
| [[MisbehaviorKind]] | An [[EnumType]] containing a Bft misbehaviour |
| [[MisbehaviorReport]] | A Misbehaviour report of [[MisbehavioirKind]] against a specific [[AuthorityId]] |
| [[NewAccountOutcome]] | Enum to track the outcome for creation of an [[AccountId]] |
| [[NextAuthority]] | The next authority available as [[SessionKey]] |
| [[Nonce]] | The Nonce or number of transactions sent by a specific account |
| [[NonceCompact]] | The Compact<Nonce> or number of transactions sent by a specific account |
| [[Origin]] | Where Origin occurs, it should be ignored as an internal-only value |
| [[ParaId]] | Identifier for a deployed parachain implemented as a [[U32]] |
| [[Perbill]] | Parts per billion (see also [[Permill]]) |
| [[Permill]] | Parts per million (See also [[Perbill]]) |
| [[PrefabWasmModule]] | Struct to encode the vesting schedule of an individual account |
| [[PropIndex]] | An increasing number that represents a specific council proposal index in the system |
| [[Proposal]] | A proposal in the system. It just extends [[Method]] (Proposal = Call in Rust) |
| [[ProposalIndex]] | An increasing number that represents a specific council proposal index in the system |
| [[ReferendumIndex]] | An increasing number that represents a specific referendum in the system |
| [[ReferendumInfo]] | Info regarding an ongoing referendum |
| [[RewardDestination]] | A destination account for payment |
| [[Schedule]] | Definition of the cost schedule and other parameterizations for wasm vm |
| [[Seal]] | Log item indicating a sealing event |
| [[SeedOf]] | The Substrate SeedOf representation as a [[Hash]] |
| [[SessionKey]] | Wrapper for a SessionKey. Same as an normal [[AuthorityId]], i.e. a wrapper around publicKey |
| [[Signature]] | The default signature that is used accross the system |
| [[SignaturePayload]] | A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based on the contents included |
| [[StakingLedger]] | The ledger of a (bonded) stash |
| [[StoredPendingChange]] | Stored pending change for a Grandpa events |
| [[TreasuryProposal]] | A Proposal made for Treasury |
| [[UnlockChunk]] | Just a Balance/BlockNumber tuple to encode when a chunk of funds will be unlocked |
| [[ValidatorPrefs]] | Validator preferences |
| [[VestingSchedule]] | Struct to encode the vesting schedule of an individual account |
| [[Vote]] | A number of lock periods, plus a vote, one way or the other |
| [[VoteIndex]] | Voting index, implemented as a [[U32]] |
| [[VoteThreshold]] | Voting threshold, used inside proposals to set change the voting tally |
| [[WithdrawReasons]] | The Substrate WithdrawReasons for staking |


## RPC types

These types are not used in the runtime, but are rather used in RPC results: 

| Type | Description |
| --- | --- |
| [[ChainProperties]] | Wraps the properties retrieved from the chain via the `system.properties` RPC call |
| [[ExtrinsicStatus]] | An EnumType that indicates the status of the Extrinsic as been submitted |
| [[Health]] | A system health indicator, reported back over RPC |
| [[Json]] | Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map |
| [[NetworkState]] | Wraps the properties retrieved from the chain via the `system.network_state` RPC call |
| [[Metadata]] | The versioned runtime metadata as a decoded structure |
| [[PeerInfo]] | A system peer info indicator, reported back over RPC |
| [[PendingExtrinsics]] | A list of pending [[Extrinsics]] |
| [[RuntimeVersion]] | A [[Tuple]] that conatins the [[ApiId]] and [[U32]] version |
| [[SignedBlock]] | A [[Block]] that has been signed and contains a [[Justification]] |
| [[StorageChangeSet]] | A set of storage changes. It contains the [[Block]] hash and a list of the actual changes |
