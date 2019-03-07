# @polkadot/types

Implementation of the types and their (de-)serialisation via [parity-codec](https://github.com/paritytech/parity-codec).

## Primitive types

There primitive types are available: [[Bool]], [[Bytes]], [[Data]], [[H160]], [[H256]], [[H512]], [[I8]], [[I16]], [[I32]], [[I64]], [[I128]], [[I256]], [[Method]], [[Moment]], [[Null]], [[StorageData]], [[StorageKey]], [[Text]], [[Type]], [[U8]], [[U16]], [[U32]], [[U64]], [[U128]], [[U256]], [[USize]]

## Substrate types

These types implement specific types that are found as part of the Substrate base: [[AccountId]], [[AccountIndex]], [[Address]], [[Amount]], [[AssetOf]], [[AttestedCandidate]], [[AuthorityId]], [[Balance]], [[BalanceLock]], [[BalanceOf]], [[Block]], [[BlockNumber]], [[CodeHash]], [[Digest]], [[Event]], [[EventRecord]], [[Exposure]], [[Extrinsic]], [[ExtrinsicEra]], [[ExtrinsicSignature]], [[Gas]], [[Hash]], [[Header]], [[IndividualExposure]], [[InherentOfflineReport]], [[Justification]], [[KeyValue]], [[LockIdentifier]], [[MisbehaviorReport]], [[NewAccountOutcome]], [[Nonce]], [[Origin]], [[ParaId]], [[Perbill]], [[Permill]], [[PrefabWasmModule]], [[PropIndex]], [[Proposal]], [[ProposalIndex]], [[ReferendumIndex]], [[ReferendumInfo]], [[RewardDestination]], [[Schedule]], [[SeedOf]], [[SessionKey]], [[Signature]], [[SignaturePayload]], [[StakingLedger]], [[StoredPendingChange]], [[UnlockChunk]], [[ValidatorPrefs]], [[VestingSchedule]], [[Vote]], [[VoteIndex]], [[VoteThreshold]], [[WithdrawReasons]]

## Codec types

These are the base types of the codec, typically not used directly, but rather inherited from to create specific types: [[Base]], [[Compact]], [[Enum]], [[EnumType]], [[Option]], [[Set]], [[Struct]], [[Tuple]], [[U8a]], [[U8aFixed]], [[UInt]], [[Vector]]

## RPC types

These types are not used in the runtime, but rather are used in RPC results: [[ChainProperties]], [[ExtrinsicStatus]], [[Health]], [[Json]], [[NetworkState]], [[Metadata]], [[PeerInfo]], [[PendingExtrinsics]], [[RuntimeVersion]], [[SignedBlock]], [[StorageChangeSet]]

## Derived types

Some types are extended from the base to provide additional information: [[HeaderExtended]], [[ReferendumInfoExtended]]
