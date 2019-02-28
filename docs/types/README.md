
@polkadot/types
===============

Implementation of the types and their (de-)serialisation via [parity-codec](https://github.com/paritytech/parity-codec).

Primitive types
---------------

There primitive types are available: [Bool](classes/_primitive_bool_.bool.md), [Bytes](classes/_primitive_bytes_.bytes.md), [Data](classes/_primitive_data_.data.md), [H160](classes/_primitive_h160_.h160.md), [H256](classes/_primitive_h256_.h256.md), [H512](classes/_primitive_h512_.h512.md), [I8](classes/_primitive_i8_.i8.md), [I16](classes/_primitive_i16_.i16.md), [I32](classes/_primitive_i32_.i32.md), [I64](classes/_primitive_i64_.i64.md), [I128](classes/_primitive_i128_.i128.md), [I256](classes/_primitive_i256_.i256.md), [Method](classes/_primitive_method_.method.md), [Moment](classes/_primitive_moment_.moment.md), [Null](classes/_primitive_null_.null.md), [StorageData](classes/_primitive_storagedata_.storagedata.md), [StorageKey](classes/_primitive_storagekey_.storagekey.md), [Text](classes/_primitive_text_.text.md), [Type](classes/_codec_struct_.struct.md#type), [U8](classes/_primitive_u8_.u8.md), [U16](classes/_primitive_u16_.u16.md), [U32](classes/_primitive_u32_.u32.md), [U64](classes/_primitive_u64_.u64.md), [U128](classes/_primitive_u128_.u128.md), [U256](classes/_primitive_u256_.u256.md), [USize](classes/_primitive_usize_.usize.md)

Substrate types
---------------

These types implement specific types that are found as part of the Substrate base: [AccountId](classes/_type_accountid_.accountid.md), [AccountIndex](classes/_type_accountindex_.accountindex.md), [Address](classes/_type_address_.address.md), [Amount](classes/_type_amount_.amount.md), [AssetOf](classes/_type_assetof_.assetof.md), [AttestedCandidate](classes/_type_attestedcandidate_.attestedcandidate.md), [AuthorityId](classes/_type_authorityid_.authorityid.md), [Balance](classes/_type_balance_.balance.md), [BalanceOf](classes/_type_balance_.balanceof.md), [Block](classes/_type_block_.block.md), [BlockNumber](classes/_type_blocknumber_.blocknumber.md), [CodeHash](classes/_type_codehash_.codehash.md), [Digest](classes/_type_digest_.digest.md), [Event](classes/_type_event_.event.md), [EventRecord](classes/_type_eventrecord_.eventrecord.md), [Extrinsic](classes/_type_extrinsic_.extrinsic.md), [ExtrinsicEra](classes/_type_extrinsicera_.extrinsicera.md), [ExtrinsicSignature](classes/_type_extrinsicsignature_.extrinsicsignature.md), [Gas](classes/_type_gas_.gas.md), [Hash](classes/_type_hash_.hash.md), [Header](classes/_type_header_.header.md), [InherentOfflineReport](classes/_type_inherentofflinereport_.inherentofflinereport.md), [Justification](classes/_type_justification_.justification.md), [KeyValue](classes/_type_keyvalue_.keyvalue.md), [MisbehaviorReport](classes/_type_misbehaviorreport_.misbehaviorreport.md), [NewAccountOutcome](classes/_type_newaccountoutcome_.newaccountoutcome.md), [Nonce](classes/_type_nonce_.nonce.md), [Origin](classes/_type_origin_.origin.md), [ParaId](classes/_type_paraid_.paraid.md), [Perbill](classes/_type_perbill_.perbill.md), [Permill](classes/_type_permill_.permill.md), [PrefabWasmModule](classes/_type_prefabwasmmodule_.prefabwasmmodule.md), [PropIndex](classes/_type_propindex_.propindex.md), [Proposal](classes/_type_proposal_.proposal.md), [ProposalIndex](classes/_type_proposalindex_.proposalindex.md), [ReferendumIndex](classes/_type_referendumindex_.referendumindex.md), [ReferendumInfo](classes/_type_referenduminfo_.referenduminfo.md), [Schedule](classes/_type_schedule_.schedule.md), [SeedOf](classes/_type_seedof_.seedof.md), [SessionKey](classes/_type_sessionkey_.sessionkey.md), [Signature](classes/_type_signature_.signature.md), [SignaturePayload](classes/_type_signaturepayload_.signaturepayload.md), [StoredPendingChange](classes/_type_storedpendingchange_.storedpendingchange.md), [ValidatorPrefs](classes/_type_validatorprefs_.validatorprefs.md), [VestingSchedule](classes/_type_vestingschedule_.vestingschedule.md), [Vote](classes/_type_vote_.vote.md), [VoteIndex](classes/_type_voteindex_.voteindex.md), [VoteThreshold](classes/_type_votethreshold_.votethreshold.md)

Codec types
-----------

These are the base types of the codec, typically not used directly, but rather inherited from to create specific types: [Base](classes/_codec_base_.base.md), [Compact](classes/_codec_compact_.compact.md), [Enum](enums/_codec_createtype_.typedefinfo.md#enum), [EnumType](classes/_codec_enumtype_.enumtype.md), [Option](classes/_codec_option_.option.md), [Set](classes/_codec_set_.set.md), [Struct](classes/_codec_struct_.struct.md), [Tuple](classes/_codec_tuple_.tuple.md), [U8a](classes/_codec_u8a_.u8a.md), [U8aFixed](classes/_codec_u8afixed_.u8afixed.md), [UInt](classes/_codec_uint_.uint.md), [Vector](classes/_codec_vector_.vector.md)

RPC types
---------

These types are not used in the runtime, but rather are used in RPC results: [ChainProperties](classes/_rpc_chainproperties_.chainproperties.md), [ExtrinsicStatus](classes/_rpc_extrinsicstatus_.extrinsicstatus.md), [Health](classes/_rpc_health_.health.md), [Json](classes/_rpc_json_.json.md), [NetworkState](classes/_rpc_networkstate_.networkstate.md), [Metadata](classes/_metadata_metadata_.metadata.md), [PeerInfo](classes/_rpc_peerinfo_.peerinfo.md), [PendingExtrinsics](classes/_rpc_pendingextrinsics_.pendingextrinsics.md), [RuntimeVersion](classes/_rpc_runtimeversion_.runtimeversion.md), [SignedBlock](classes/_rpc_signedblock_.signedblock.md), [StorageChangeSet](classes/_rpc_storagechangeset_.storagechangeset.md)

Derived types
-------------

Some types are extended from the base to provide additional information: [HeaderExtended](classes/_type_header_.headerextended.md), \[\[ReferendumInfoExtended\]\]

