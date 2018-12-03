# @polkadot/types

Implementation of the types and their (de-)serialisation via [parity-codec](https://github.com/paritytech/parity-codec).

## Substrate types

These types implement specific types that are found as part of the Substrate base: [[AccountId]], [[AccountIndex]], [[Address]], [[AuthorityId]], [[Balance]], [[Block]], [[BlockNumber]], [[Bool]], [[Bytes]], [[Data]], [[Digest]], [[Event]], [[EventRecord]], [[Extrinsic]], [[Extrinsics]], [[ExtrinsicEra]], [[ExtrinsicSignature]], [[ExtrinsicStatus]], [[Gas]], [[H256]], [[H512]], [[Hash]], [[Header]], [[Justification]], [[KeyValue]], [[Metadata]], [[Method]], [[MisbehaviorReport]], [[Moment]], [[NewAccountOutcome]], [[Nonce]], [[Null]], [[Origin]], [[ParachainId]], [[PendingExtrinsics]], [[Perbill]], [[Permill]], [[PropIndex]], [[Proposal]], [[ProposalIndex]], [[ReferendumIndex]], [[RuntimeVersion]], [[SessionKey]], [[Signature]], [[SignaturePayload]], [[SignedBlock]], [[StorageChangeSet]], [[StorageData]], [[StorageKey]], [[StoredPendingChange]], [[Text]], [[Type]], [[U8]], [[U16]], [[U32]], [[U64]], [[U128]], [[U256]], [[ValidatorPrefs]], [[VoteIndex]], [[VoteThreshold]]

## Codec types

These are the base types of the codec, typically not used directly, but rather inherited from to create specific types: [[Base]], [[Compact]], [[Enum]], [[EnumType]], [[Option]], [[Set]], [[Struct]], [[Tuple]], [[U8a]], [[U8aFixed]], [[UInt]], [[Vector]]
