// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Data, Option, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { AnyNumber, ITuple } from '@polkadot/types/types';
import type { PalletAssetsDestroyWitness, PalletDemocracyConviction, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletUniquesDestroyWitness } from '@polkadot/types/augment/lookup';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { IdentityFields } from '@polkadot/types/interfaces/identity';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    assets: {
      approveTransfer: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u64>]>;
      burn: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u64>]>;
      cancelApproval: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      clearMetadata: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      create: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, u64]>;
      destroy: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, witness: PalletAssetsDestroyWitness | { accounts?: any; sufficients?: any; approvals?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletAssetsDestroyWitness]>;
      forceAssetStatus: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: Compact<u64> | AnyNumber | Uint8Array, isSufficient: bool | boolean | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, MultiAddress, MultiAddress, Compact<u64>, bool, bool]>;
      forceCancelApproval: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress]>;
      forceClearMetadata: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      forceCreate: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, isSufficient: bool | boolean | Uint8Array, minBalance: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, bool, Compact<u64>]>;
      forceSetMetadata: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes, Bytes, u8, bool]>;
      forceTransfer: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, Compact<u64>]>;
      freeze: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      freezeAsset: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      mint: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u64>]>;
      setMetadata: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes, Bytes, u8]>;
      setTeam: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, MultiAddress]>;
      thaw: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      thawAsset: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      transfer: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u64>]>;
      transferApproved: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, destination: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, Compact<u64>]>;
      transferKeepAlive: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u64>]>;
      transferOwnership: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    authorship: {
      setUncles: AugmentedSubmittable<(newUncles: Vec<SpRuntimeGenericHeader> | (SpRuntimeGenericHeader | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpRuntimeGenericHeader>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    babe: {
      planConfigChange: AugmentedSubmittable<(config: SpConsensusBabeDigestsNextConfigDescriptor | { Unused0: any } | { V1: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusBabeDigestsNextConfigDescriptor]>;
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusSlotsEquivocationProof | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]>;
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusSlotsEquivocationProof | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bounties: {
      /**
       * Accept the curator role for a bounty.
       * A deposit will be reserved from curator and refund upon successful payout.
       * 
       * May only be called from the curator.
       * 
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Approve a bounty proposal. At a later time, the bounty will be funded and become active
       * and the original deposit will be returned.
       * 
       * May only be called from `T::ApproveOrigin`.
       * 
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
       * 
       * The dispatch origin for this call must be the curator of this bounty.
       * 
       * - `bounty_id`: Bounty ID to award.
       * - `beneficiary`: The beneficiary account whom will receive the payout.
       * 
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Claim the payout from an awarded bounty after payout delay.
       * 
       * The dispatch origin for this call must be the beneficiary of this bounty.
       * 
       * - `bounty_id`: Bounty ID to claim.
       * 
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Cancel a proposed or active bounty. All the funds will be sent to treasury and
       * the curator deposit will be unreserved if possible.
       * 
       * Only `T::RejectOrigin` is able to cancel a bounty.
       * 
       * - `bounty_id`: Bounty ID to cancel.
       * 
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Extend the expiry time of an active bounty.
       * 
       * The dispatch origin for this call must be the curator of this bounty.
       * 
       * - `bounty_id`: Bounty ID to extend.
       * - `remark`: additional information.
       * 
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
      /**
       * Propose a new bounty.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
       * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
       * or slashed when rejected.
       * 
       * - `curator`: The curator account whom will manage this bounty.
       * - `fee`: The curator fee.
       * - `value`: The total payment amount of this bounty, curator fee included.
       * - `description`: The description of this bounty.
       **/
      proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * Assign a curator to a funded bounty.
       * 
       * May only be called from `T::ApproveOrigin`.
       * 
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Unassign curator from a bounty.
       * 
       * This function can only be called by the `RejectOrigin` a signed origin.
       * 
       * If this function is called by the `RejectOrigin`, we assume that the curator is malicious
       * or inactive. As a result, we will slash the curator when possible.
       * 
       * If the origin is the curator, we take this as a sign they are unable to do their job and
       * they willingly give up. We could slash them, but for now we allow them to recover their
       * deposit and exit without issue. (We may want to change this if it is abused.)
       * 
       * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
       * anyone in the community to call out that a curator is not doing their due diligence, and
       * we should pick a new curator. In this case the curator should also be slashed.
       * 
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    contracts: {
      call: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: Compact<u64> | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u64>, Bytes]>;
      claimSurcharge: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, auxSender: Option<AccountId32> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<AccountId32>]>;
      instantiate: AugmentedSubmittable<(endowment: Compact<u128> | AnyNumber | Uint8Array, gasLimit: Compact<u64> | AnyNumber | Uint8Array, codeHash: H256 | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u64>, H256, Bytes, Bytes]>;
      instantiateWithCode: AugmentedSubmittable<(endowment: Compact<u128> | AnyNumber | Uint8Array, gasLimit: Compact<u64> | AnyNumber | Uint8Array, code: Bytes | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u64>, Bytes, Bytes, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    council: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       * - DB:
       * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: Compact<u64> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, Compact<u64>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current state.
       * 
       * Must be called by the Root origin.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * # <weight>
       * Complexity: O(P) where P is the number of max proposals
       * DB Weight:
       * * Reads: Proposals
       * * Writes: Voting, Proposals, ProposalOf
       * # </weight>
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Call | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       * - DB:
       * - 1 storage read `is_member` (codec `O(M)`)
       * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
       * - DB accesses influenced by `threshold`:
       * - EITHER storage accesses done by `proposal` (`threshold < 2`)
       * - OR proposal insertion (`threshold <= 2`)
       * - 1 storage mutation `Proposals` (codec `O(P2)`)
       * - 1 storage mutation `ProposalCount` (codec `O(1)`)
       * - 1 storage write `ProposalOf` (codec `O(B)`)
       * - 1 storage write `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage.
       * Used for weight estimation.
       * 
       * Requires root origin.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | object | string | Uint8Array, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    democracy: {
      blacklist: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, maybeRefIndex: Option<u32> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Option<u32>]>;
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      cancelQueued: AugmentedSubmittable<(which: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      delegate: AugmentedSubmittable<(to: AccountId32 | string | Uint8Array, conviction: PalletDemocracyConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PalletDemocracyConviction, u128]>;
      emergencyCancel: AugmentedSubmittable<(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      enactProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32]>;
      externalPropose: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      externalProposeDefault: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      externalProposeMajority: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      fastTrack: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, votingPeriod: u32 | AnyNumber | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, u32]>;
      noteImminentPreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      noteImminentPreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      notePreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      notePreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      propose: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u128>]>;
      reapPreimage: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, proposalLenUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>]>;
      removeOtherVote: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      second: AugmentedSubmittable<(proposal: Compact<u32> | AnyNumber | Uint8Array, secondsUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      unlock: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      vetoExternal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      vote: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletDemocracyVoteAccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletDemocracyVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    electionProviderMultiPhase: {
      setEmergencyElectionResult: AugmentedSubmittable<(supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>> | ([AccountId32 | string | Uint8Array, SpNposElectionsSupport | { total?: any; voters?: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>]>;
      setMinimumUntrustedScore: AugmentedSubmittable<(maybeNextScore: Option<Vec<u128>> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<Vec<u128>>]>;
      submit: AugmentedSubmittable<(solution: PalletElectionProviderMultiPhaseRawSolution | { compact?: any; score?: any; round?: any } | string | Uint8Array, numSignedSubmissions: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionProviderMultiPhaseRawSolution, u32]>;
      submitUnsigned: AugmentedSubmittable<(solution: PalletElectionProviderMultiPhaseRawSolution | { compact?: any; score?: any; round?: any } | string | Uint8Array, witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize | { voters?: any; targets?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionProviderMultiPhaseRawSolution, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    elections: {
      cleanDefunctVoters: AugmentedSubmittable<(numVoters: u32 | AnyNumber | Uint8Array, numDefunct: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, hasReplacement: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      removeVoter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      renounceCandidacy: AugmentedSubmittable<(renouncing: PalletElectionsPhragmenRenouncing | { Member: any } | { RunnerUp: any } | { Candidate: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionsPhragmenRenouncing]>;
      submitCandidacy: AugmentedSubmittable<(candidateCount: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      vote: AugmentedSubmittable<(votes: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    gilt: {
      placeBid: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, duration: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u32]>;
      retractBid: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, duration: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u32]>;
      setTarget: AugmentedSubmittable<(target: Compact<Perquintill> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Perquintill>]>;
      thaw: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    grandpa: {
      noteStalled: AugmentedSubmittable<(delay: u32 | AnyNumber | Uint8Array, bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpFinalityGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpFinalityGrandpaEquivocationProof, SpSessionMembershipProof]>;
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpFinalityGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpFinalityGrandpaEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      addRegistrar: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      addSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      killIdentity: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement]>;
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      removeSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      renameSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, AccountId32]>;
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: IdentityFields) => SubmittableExtrinsic<ApiType>, [Compact<u32>, IdentityFields]>;
      setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    imOnline: {
      heartbeat: AugmentedSubmittable<(heartbeat: PalletImOnlineHeartbeat | { blockNumber?: any; networkState?: any; sessionIndex?: any; authorityIndex?: any; validatorsLen?: any } | string | Uint8Array, signature: PalletImOnlineSr25519AppSr25519Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Signature]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    indices: {
      claim: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      forceTransfer: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, bool]>;
      free: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      freeze: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      transfer: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    lottery: {
      buyTicket: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      setCalls: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      startLottery: AugmentedSubmittable<(price: u128 | AnyNumber | Uint8Array, length: u32 | AnyNumber | Uint8Array, delay: u32 | AnyNumber | Uint8Array, repeat: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, u32, bool]>;
      stopRepeat: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | object | string | Uint8Array, callHash: U8aFixed | string | Uint8Array, maxWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, u64]>;
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | object | string | Uint8Array, call: Bytes | string | Uint8Array, storeCall: bool | boolean | Uint8Array, maxWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Bytes, bool, u64]>;
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      addProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: NodeRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, NodeRuntimeProxyType, u32]>;
      announce: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, H256]>;
      anonymous: AugmentedSubmittable<(proxyType: NodeRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodeRuntimeProxyType, u32, u16]>;
      killAnonymous: AugmentedSubmittable<(spawner: AccountId32 | string | Uint8Array, proxyType: NodeRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, NodeRuntimeProxyType, u16, Compact<u32>, Compact<u32>]>;
      proxy: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, forceProxyType: Option<NodeRuntimeProxyType> | null | object | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<NodeRuntimeProxyType>, Call]>;
      proxyAnnounced: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, real: AccountId32 | string | Uint8Array, forceProxyType: Option<NodeRuntimeProxyType> | null | object | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Option<NodeRuntimeProxyType>, Call]>;
      rejectAnnouncement: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, H256]>;
      removeAnnouncement: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, H256]>;
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      removeProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: NodeRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, NodeRuntimeProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    recovery: {
      asRecovered: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Call]>;
      cancelRecovered: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      claimRecovery: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      closeRecovery: AugmentedSubmittable<(rescuer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      createRecovery: AugmentedSubmittable<(friends: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], threshold: u16 | AnyNumber | Uint8Array, delayPeriod: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, u16, u32]>;
      initiateRecovery: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      removeRecovery: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      setRecovered: AugmentedSubmittable<(lost: AccountId32 | string | Uint8Array, rescuer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32]>;
      vouchRecovery: AugmentedSubmittable<(lost: AccountId32 | string | Uint8Array, rescuer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      cancelNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | object | string | Uint8Array, priority: u8 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | object | string | Uint8Array, priority: u8 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      scheduleNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | object | string | Uint8Array, priority: u8 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      scheduleNamedAfter: AugmentedSubmittable<(id: Bytes | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | object | string | Uint8Array, priority: u8 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)` in number of key types.
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
       * - DbWrites: `NextKeys`, `origin account`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)`
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
       * - DbWrites: `origin account`, `NextKeys`
       * - DbReads per key id: `KeyOwner`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      setKeys: AugmentedSubmittable<(keys: NodeRuntimeSessionKeys | { grandpa?: any; babe?: any; imOnline?: any; authorityDiscovery?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodeRuntimeSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    society: {
      /**
       * A user outside of the society can make a bid for entry.
       * 
       * Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
       * when the bid becomes a member, or if the bid calls `unbid`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `value`: A one time payment the bid would like to receive when joining the society.
       * 
       * # <weight>
       * Key: B (len of bids), C (len of candidates), M (len of members), X (balance reserve)
       * - Storage Reads:
       * - One storage read to check for suspended candidate. O(1)
       * - One storage read to check for suspended member. O(1)
       * - One storage read to retrieve all current bids. O(B)
       * - One storage read to retrieve all current candidates. O(C)
       * - One storage read to retrieve all members. O(M)
       * - Storage Writes:
       * - One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)
       * - Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
       * - Notable Computation:
       * - O(B + C + log M) search to check user is not already a part of society.
       * - O(log B) search to insert the new bid sorted.
       * - External Module Operations:
       * - One balance reserve operation. O(X)
       * - Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
       * - Events:
       * - One event for new bid.
       * - Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
       * 
       * Total Complexity: O(M + B + C + logM + logB + X)
       * # </weight>
       **/
      bid: AugmentedSubmittable<(value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * As a member, vote on the defender.
       * 
       * The dispatch origin for this call must be _Signed_ and a member.
       * 
       * Parameters:
       * - `approve`: A boolean which says if the candidate should be
       * approved (`true`) or rejected (`false`).
       * 
       * # <weight>
       * - Key: M (len of members)
       * - One storage read O(M) and O(log M) search to check user is a member.
       * - One storage write to add vote to votes. O(1)
       * - One event.
       * 
       * Total Complexity: O(M + logM)
       * # </weight>
       **/
      defenderVote: AugmentedSubmittable<(approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Found the society.
       * 
       * This is done as a discrete action in order to allow for the
       * module to be included into a running chain and can only be done once.
       * 
       * The dispatch origin for this call must be from the _FounderSetOrigin_.
       * 
       * Parameters:
       * - `founder` - The first member and head of the newly founded society.
       * - `max_members` - The initial max number of members for the society.
       * - `rules` - The rules of this society concerning membership.
       * 
       * # <weight>
       * - Two storage mutates to set `Head` and `Founder`. O(1)
       * - One storage write to add the first member to society. O(1)
       * - One event.
       * 
       * Total Complexity: O(1)
       * # </weight>
       **/
      found: AugmentedSubmittable<(founder: AccountId32 | string | Uint8Array, maxMembers: u32 | AnyNumber | Uint8Array, rules: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, Bytes]>;
      /**
       * Allow suspended judgement origin to make judgement on a suspended candidate.
       * 
       * If the judgement is `Approve`, we add them to society as a member with the appropriate
       * payment for joining society.
       * 
       * If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
       * to the society treasury, or we ban the voucher from vouching again.
       * 
       * If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
       * through the induction process again.
       * 
       * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
       * 
       * Parameters:
       * - `who` - The suspended candidate to be judged.
       * - `judgement` - `Approve`, `Reject`, or `Rebid`.
       * 
       * # <weight>
       * Key: B (len of bids), M (len of members), X (balance action)
       * - One storage read to check `who` is a suspended candidate.
       * - One storage removal of the suspended candidate.
       * - Approve Logic
       * - One storage read to get the available pot to pay users with. O(1)
       * - One storage write to update the available pot. O(1)
       * - One storage read to get the current block number. O(1)
       * - One storage read to get all members. O(M)
       * - Up to one unreserve currency action.
       * - Up to two new storage writes to payouts.
       * - Up to one storage write with O(log M) binary search to add a member to society.
       * - Reject Logic
       * - Up to one repatriate reserved currency action. O(X)
       * - Up to one storage write to ban the vouching member from vouching again.
       * - Rebid Logic
       * - Storage mutate with O(log B) binary search to place the user back into bids.
       * - Up to one additional event if unvouch takes place.
       * - One storage removal.
       * - One event for the judgement.
       * 
       * Total Complexity: O(M + logM + B + X)
       * # </weight>
       **/
      judgeSuspendedCandidate: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, judgement: PalletSocietyJudgement | 'Rebid' | 'Reject' | 'Approve' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PalletSocietyJudgement]>;
      /**
       * Allow suspension judgement origin to make judgement on a suspended member.
       * 
       * If a suspended member is forgiven, we simply add them back as a member, not affecting
       * any of the existing storage items for that member.
       * 
       * If a suspended member is rejected, remove all associated storage items, including
       * their payouts, and remove any vouched bids they currently have.
       * 
       * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
       * 
       * Parameters:
       * - `who` - The suspended member to be judged.
       * - `forgive` - A boolean representing whether the suspension judgement origin
       * forgives (`true`) or rejects (`false`) a suspended member.
       * 
       * # <weight>
       * Key: B (len of bids), M (len of members)
       * - One storage read to check `who` is a suspended member. O(1)
       * - Up to one storage write O(M) with O(log M) binary search to add a member back to society.
       * - Up to 3 storage removals O(1) to clean up a removed member.
       * - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
       * - Up to one additional event if unvouch takes place.
       * - One storage removal. O(1)
       * - One event for the judgement.
       * 
       * Total Complexity: O(M + logM + B)
       * # </weight>
       **/
      judgeSuspendedMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, forgive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, bool]>;
      /**
       * Transfer the first matured payout for the sender and remove it from the records.
       * 
       * NOTE: This extrinsic needs to be called multiple times to claim multiple matured payouts.
       * 
       * Payment: The member will receive a payment equal to their first matured
       * payout to their free balance.
       * 
       * The dispatch origin for this call must be _Signed_ and a member with
       * payouts remaining.
       * 
       * # <weight>
       * Key: M (len of members), P (number of payouts for a particular member)
       * - One storage read O(M) and O(log M) search to check signer is a member.
       * - One storage read O(P) to get all payouts for a member.
       * - One storage read O(1) to get the current block number.
       * - One currency transfer call. O(X)
       * - One storage write or removal to update the member's payouts. O(P)
       * 
       * Total Complexity: O(M + logM + P + X)
       * # </weight>
       **/
      payout: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Allows root origin to change the maximum number of members in society.
       * Max membership count must be greater than 1.
       * 
       * The dispatch origin for this call must be from _ROOT_.
       * 
       * Parameters:
       * - `max` - The maximum number of members for the society.
       * 
       * # <weight>
       * - One storage write to update the max. O(1)
       * - One event.
       * 
       * Total Complexity: O(1)
       * # </weight>
       **/
      setMaxMembers: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * A bidder can remove their bid for entry into society.
       * By doing so, they will have their candidate deposit returned or
       * they will unvouch their voucher.
       * 
       * Payment: The bid deposit is unreserved if the user made a bid.
       * 
       * The dispatch origin for this call must be _Signed_ and a bidder.
       * 
       * Parameters:
       * - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
       * 
       * # <weight>
       * Key: B (len of bids), X (balance unreserve)
       * - One storage read and write to retrieve and update the bids. O(B)
       * - Either one unreserve balance action O(X) or one vouching storage removal. O(1)
       * - One event.
       * 
       * Total Complexity: O(B + X)
       * # </weight>
       **/
      unbid: AugmentedSubmittable<(pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Annul the founding of the society.
       * 
       * The dispatch origin for this call must be Signed, and the signing account must be both
       * the `Founder` and the `Head`. This implies that it may only be done when there is one
       * member.
       * 
       * # <weight>
       * - Two storage reads O(1).
       * - Four storage removals O(1).
       * - One event.
       * 
       * Total Complexity: O(1)
       * # </weight>
       **/
      unfound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * As a vouching member, unvouch a bid. This only works while vouched user is
       * only a bidder (and not a candidate).
       * 
       * The dispatch origin for this call must be _Signed_ and a vouching member.
       * 
       * Parameters:
       * - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
       * 
       * # <weight>
       * Key: B (len of bids)
       * - One storage read O(1) to check the signer is a vouching member.
       * - One storage mutate to retrieve and update the bids. O(B)
       * - One vouching storage removal. O(1)
       * - One event.
       * 
       * Total Complexity: O(B)
       * # </weight>
       **/
      unvouch: AugmentedSubmittable<(pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * As a member, vote on a candidate.
       * 
       * The dispatch origin for this call must be _Signed_ and a member.
       * 
       * Parameters:
       * - `candidate`: The candidate that the member would like to bid on.
       * - `approve`: A boolean which says if the candidate should be
       * approved (`true`) or rejected (`false`).
       * 
       * # <weight>
       * Key: C (len of candidates), M (len of members)
       * - One storage read O(M) and O(log M) search to check user is a member.
       * - One account lookup.
       * - One storage read O(C) and O(C) search to check that user is a candidate.
       * - One storage write to add vote to votes. O(1)
       * - One event.
       * 
       * Total Complexity: O(M + logM + C)
       * # </weight>
       **/
      vote: AugmentedSubmittable<(candidate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * As a member, vouch for someone to join society by placing a bid on their behalf.
       * 
       * There is no deposit required to vouch for a new bid, but a member can only vouch for
       * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
       * the suspension judgement origin, the member will be banned from vouching again.
       * 
       * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
       * be paid as a portion of the reward the member will receive for joining the society.
       * 
       * The dispatch origin for this call must be _Signed_ and a member.
       * 
       * Parameters:
       * - `who`: The user who you would like to vouch for.
       * - `value`: The total reward to be paid between you and the candidate if they become
       * a member in the society.
       * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
       * the society. Tips larger than `value` will be saturated upon payout.
       * 
       * # <weight>
       * Key: B (len of bids), C (len of candidates), M (len of members)
       * - Storage Reads:
       * - One storage read to retrieve all members. O(M)
       * - One storage read to check member is not already vouching. O(1)
       * - One storage read to check for suspended candidate. O(1)
       * - One storage read to check for suspended member. O(1)
       * - One storage read to retrieve all current bids. O(B)
       * - One storage read to retrieve all current candidates. O(C)
       * - Storage Writes:
       * - One storage write to insert vouching status to the member. O(1)
       * - One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)
       * - Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
       * - Notable Computation:
       * - O(log M) search to check sender is a member.
       * - O(B + C + log M) search to check user is not already a part of society.
       * - O(log B) search to insert the new bid sorted.
       * - External Module Operations:
       * - One balance reserve operation. O(X)
       * - Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
       * - Events:
       * - One event for vouch.
       * - Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
       * 
       * Total Complexity: O(M + B + C + logM + logB + X)
       * # </weight>
       **/
      vouch: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, value: u128 | AnyNumber | Uint8Array, tip: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    staking: {
      bond: AugmentedSubmittable<(controller: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, payee: PalletStakingRewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, PalletStakingRewardDestination]>;
      bondExtra: AugmentedSubmittable<(maxAdditional: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      cancelDeferredSlash: AugmentedSubmittable<(era: u32 | AnyNumber | Uint8Array, slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<u32>]>;
      chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      chillOther: AugmentedSubmittable<(controller: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      forceUnstake: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      increaseValidatorCount: AugmentedSubmittable<(additional: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      kick: AugmentedSubmittable<(who: Vec<MultiAddress> | (MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<MultiAddress>]>;
      nominate: AugmentedSubmittable<(targets: Vec<MultiAddress> | (MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<MultiAddress>]>;
      payoutStakers: AugmentedSubmittable<(validatorStash: AccountId32 | string | Uint8Array, era: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      reapStash: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      rebond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      scaleValidatorCount: AugmentedSubmittable<(factor: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Percent]>;
      setController: AugmentedSubmittable<(controller: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      setHistoryDepth: AugmentedSubmittable<(newHistoryDepth: Compact<u32> | AnyNumber | Uint8Array, eraItemsDeleted: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      setInvulnerables: AugmentedSubmittable<(invulnerables: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      setPayee: AugmentedSubmittable<(payee: PalletStakingRewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingRewardDestination]>;
      setStakingLimits: AugmentedSubmittable<(minNominatorBond: u128 | AnyNumber | Uint8Array, minValidatorBond: u128 | AnyNumber | Uint8Array, maxNominatorCount: Option<u32> | null | object | string | Uint8Array, maxValidatorCount: Option<u32> | null | object | string | Uint8Array, threshold: Option<Percent> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, Option<u32>, Option<u32>, Option<Percent>]>;
      setValidatorCount: AugmentedSubmittable<(updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      unbond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      validate: AugmentedSubmittable<(prefs: PalletStakingValidatorPrefs | { commission?: any; blocked?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingValidatorPrefs]>;
      withdrawUnbonded: AugmentedSubmittable<(numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      sudo: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array, weight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, u64]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<SpCoreChangesTrieChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<SpCoreChangesTrieChangesTrieConfiguration>]>;
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalCommittee: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       * - DB:
       * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: Compact<u64> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, Compact<u64>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current state.
       * 
       * Must be called by the Root origin.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * # <weight>
       * Complexity: O(P) where P is the number of max proposals
       * DB Weight:
       * * Reads: Proposals
       * * Writes: Voting, Proposals, ProposalOf
       * # </weight>
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Call | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       * - DB:
       * - 1 storage read `is_member` (codec `O(M)`)
       * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
       * - DB accesses influenced by `threshold`:
       * - EITHER storage accesses done by `proposal` (`threshold < 2`)
       * - OR proposal insertion (`threshold <= 2`)
       * - 1 storage mutation `Proposals` (codec `O(P2)`)
       * - 1 storage mutation `ProposalCount` (codec `O(1)`)
       * - 1 storage write `ProposalOf` (codec `O(B)`)
       * - 1 storage write `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage.
       * Used for weight estimation.
       * 
       * Requires root origin.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | object | string | Uint8Array, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalMembership: {
      /**
       * Add a member `who` to the set.
       * 
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Swap out the sending member for some other key `new`.
       * 
       * May only be called from `Signed` origin of a current member.
       * 
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Remove the prime member if it exists.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       * 
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * 
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Set the prime member. Must be a current member.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Swap out one member `remove` for another `add`.
       * 
       * May only be called from `T::SwapOrigin`.
       * 
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId32 | string | Uint8Array, add: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tips: {
      /**
       * Close and payout a tip.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * The tip identified by `hash` must have finished its countdown period.
       * 
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
       * 
       * # <weight>
       * - Complexity: `O(T)` where `T` is the number of tippers.
       * decoding `Tipper` vec of length `T`.
       * `T` is charged as upper bound given by `ContainsLengthBound`.
       * The actual cost depends on the implementation of `T::Tippers`.
       * - DbReads: `Tips`, `Tippers`, `tip finder`
       * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
       * # </weight>
       **/
      closeTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
       * `DataDepositPerByte` for each byte in `reason`.
       * 
       * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
       * a UTF-8-encoded URL.
       * - `who`: The account which should be credited for the tip.
       * 
       * Emits `NewTip` if successful.
       * 
       * # <weight>
       * - Complexity: `O(R)` where `R` length of `reason`.
       * - encoding and hashing of 'reason'
       * - DbReads: `Reasons`, `Tips`
       * - DbWrites: `Reasons`, `Tips`
       * # </weight>
       **/
      reportAwesome: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, AccountId32]>;
      /**
       * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
       * 
       * If successful, the original deposit will be unreserved.
       * 
       * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
       * must have been reported by the signing account through `report_awesome` (and not
       * through `tip_new`).
       * 
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
       * 
       * Emits `TipRetracted` if successful.
       * 
       * # <weight>
       * - Complexity: `O(1)`
       * - Depends on the length of `T::Hash` which is fixed.
       * - DbReads: `Tips`, `origin account`
       * - DbWrites: `Reasons`, `Tips`, `origin account`
       * # </weight>
       **/
      retractTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Remove and slash an already-open tip.
       * 
       * May only be called from `T::RejectOrigin`.
       * 
       * As a result, the finder is slashed and the deposits are lost.
       * 
       * Emits `TipSlashed` if successful.
       * 
       * # <weight>
       * `T` is charged as upper bound given by `ContainsLengthBound`.
       * The actual cost depends on the implementation of `T::Tippers`.
       * # </weight>
       **/
      slashTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Declare a tip value for an already-open tip.
       * 
       * The dispatch origin for this call must be _Signed_ and the signing account must be a
       * member of the `Tippers` set.
       * 
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
       * account ID.
       * - `tip_value`: The amount of tip that the sender would like to give. The median tip
       * value of active tippers will be given to the `who`.
       * 
       * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
       * has started.
       * 
       * # <weight>
       * - Complexity: `O(T)` where `T` is the number of tippers.
       * decoding `Tipper` vec of length `T`, insert tip and check closing,
       * `T` is charged as upper bound given by `ContainsLengthBound`.
       * The actual cost depends on the implementation of `T::Tippers`.
       * 
       * Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
       * is weighted as if almost full i.e of length `T-1`.
       * - DbReads: `Tippers`, `Tips`
       * - DbWrites: `Tips`
       * # </weight>
       **/
      tip: AugmentedSubmittable<(hash: H256 | string | Uint8Array, tipValue: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u128>]>;
      /**
       * Give a tip for something new; no finder's fee will be taken.
       * 
       * The dispatch origin for this call must be _Signed_ and the signing account must be a
       * member of the `Tippers` set.
       * 
       * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
       * a UTF-8-encoded URL.
       * - `who`: The account which should be credited for the tip.
       * - `tip_value`: The amount of tip that the sender would like to give. The median tip
       * value of active tippers will be given to the `who`.
       * 
       * Emits `NewTip` if successful.
       * 
       * # <weight>
       * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
       * - `O(T)`: decoding `Tipper` vec of length `T`
       * `T` is charged as upper bound given by `ContainsLengthBound`.
       * The actual cost depends on the implementation of `T::Tippers`.
       * - `O(R)`: hashing and encoding of reason of length `R`
       * - DbReads: `Tippers`, `Reasons`
       * - DbWrites: `Reasons`, `Tips`
       * # </weight>
       **/
      tipNew: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId32 | string | Uint8Array, tipValue: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, AccountId32, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    transactionStorage: {
      checkProof: AugmentedSubmittable<(proof: SpTransactionStorageProofTransactionStorageProof | { chunk?: any; proof?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpTransactionStorageProofTransactionStorageProof]>;
      renew: AugmentedSubmittable<(block: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      store: AugmentedSubmittable<(data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    uniques: {
      approveTransfer: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instance: Compact<u32> | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress]>;
      burn: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instance: Compact<u32> | AnyNumber | Uint8Array, checkOwner: Option<MultiAddress> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Option<MultiAddress>]>;
      cancelApproval: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instance: Compact<u32> | AnyNumber | Uint8Array, maybeCheckDelegate: Option<MultiAddress> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Option<MultiAddress>]>;
      clearAttribute: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, maybeInstance: Option<u32> | null | object | string | Uint8Array, key: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Option<u32>, Bytes]>;
      clearClassMetadata: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      clearMetadata: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instance: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      create: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      destroy: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, witness: PalletUniquesDestroyWitness | { instances?: any; instanceMetadatas?: any; attributes?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletUniquesDestroyWitness]>;
      forceAssetStatus: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freeHolding: bool | boolean | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, MultiAddress, MultiAddress, bool, bool]>;
      forceCreate: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freeHolding: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, bool]>;
      freeze: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instance: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      freezeClass: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      mint: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instance: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress]>;
      redeposit: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instances: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Vec<u32>]>;
      setAttribute: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, maybeInstance: Option<u32> | null | object | string | Uint8Array, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Option<u32>, Bytes, Bytes]>;
      setClassMetadata: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes, bool]>;
      setMetadata: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instance: Compact<u32> | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Bytes, bool]>;
      setTeam: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, MultiAddress]>;
      thaw: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instance: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      thawClass: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      transfer: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, instance: Compact<u32> | AnyNumber | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress]>;
      transferOwnership: AugmentedSubmittable<(clazz: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      forceVestedTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, PalletVestingVestingInfo]>;
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      vestedTransfer: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletVestingVestingInfo]>;
      vestOther: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
    [key: string]: SubmittableModuleExtrinsics<ApiType>;
  }
}
