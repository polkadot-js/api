// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import { AnyNumber, ITuple } from '@polkadot/types/types';
import { Compact, Option, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, Data, bool, u16, u32, u64 } from '@polkadot/types/primitive';
import { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import { CodeHash, Gas, Schedule } from '@polkadot/types/interfaces/contracts';
import { AccountVote, Conviction, PropIndex, Proposal, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import { Extrinsic, Signature } from '@polkadot/types/interfaces/extrinsics';
import { IdentityFields, IdentityInfo, IdentityJudgement, RegistrarIndex } from '@polkadot/types/interfaces/identity';
import { Heartbeat } from '@polkadot/types/interfaces/imOnline';
import { AccountId, AccountIndex, Address, Balance, BalanceOf, BlockNumber, Call, ChangesTrieConfiguration, Hash, Header, KeyValue, LookupSource, Moment, Perbill } from '@polkadot/types/interfaces/runtime';
import { Keys } from '@polkadot/types/interfaces/session';
import { SocietyJudgement } from '@polkadot/types/interfaces/society';
import { CompactAssignments, EraIndex, PhragmenScore, RewardDestination, ValidatorIndex, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { Key } from '@polkadot/types/interfaces/system';
import { Timepoint } from '@polkadot/types/interfaces/utility';
import { VestingInfo } from '@polkadot/types/interfaces/vesting';
import { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    authorship: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Provide a set of uncles.
       **/
      setUncles: AugmentedSubmittable<(newUncles: Vec<Header> | (Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
    };
    balances: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is
       * not assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, dest: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the balances of a given account.
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also decrease the total issuance of the system (`TotalIssuance`).
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       * The dispatch origin for this call is `root`.
       * # <weight>
       * - Independent of the arguments.
       * - Contains a limited number of reads and writes.
       * # </weight>
       **/
      setBalance: AugmentedSubmittable<(who: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Transfer some liquid free balance to another account.
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the `TransferFee`.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * The dispatch origin for this call must be `Signed` by the transactor.
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for
       * input config types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex computation.
       * Related functions:
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional
       * check that the transfer will not kill the origin account.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       * 99% of the time you want [`transfer`] instead.
       * [`transfer`]: struct.Module.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    contracts: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Makes a call to an account, optionally transferring some balance.
       * * If the account is a smart-contract account, the associated code will be
       * executed and any value will be transferred.
       * * If the account is a regular account, any value will be transferred.
       * * If no account exists and the call value is not less than `existential_deposit`,
       * a regular account will be created and any value will be transferred.
       **/
      call: AugmentedSubmittable<(dest: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array, gasLimit: Compact<Gas> | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Allows block producers to claim a small reward for evicting a contract. If a block producer
       * fails to do so, a regular users will be allowed to claim the reward.
       * If contract is not evicted as a result of this call, no actions are taken and
       * the sender is not eligible for the reward.
       **/
      claimSurcharge: AugmentedSubmittable<(dest: AccountId | string | Uint8Array, auxSender: Option<AccountId> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance.
       * Instantiation is executed as follows:
       * - The destination address is computed based on the sender and hash of the code.
       * - The smart-contract account is created at the computed address.
       * - The `ctor_code` is executed in the context of the newly-created account. Buffer returned
       * after the execution is saved as the `code` of the account. That code will be invoked
       * upon any call received by this account.
       * - The contract is initialized.
       **/
      instantiate: AugmentedSubmittable<(endowment: Compact<BalanceOf> | AnyNumber | Uint8Array, gasLimit: Compact<Gas> | AnyNumber | Uint8Array, codeHash: CodeHash | string | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Stores the given binary Wasm code into the chain's storage and returns its `codehash`.
       * You can instantiate contracts only with stored code.
       **/
      putCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Updates the schedule for metering contracts.
       * The schedule must have a greater version than the stored schedule.
       **/
      updateSchedule: AugmentedSubmittable<(schedule: Schedule | { version?: any; putCodePerByteCost?: any; growMemCost?: any; regularOpCost?: any; returnDataPerByteCost?: any; eventDataPerByteCost?: any; eventPerTopicCost?: any; eventBaseCost?: any; sandboxDataReadCost?: any; sandboxDataWriteCost?: any; transferCost?: any; maxEventTopics?: any; maxStackHeight?: any; maxMemoryPages?: any; enablePrintln?: any; maxSubjectLen?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    council: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * May be called by any signed account after the voting duration has ended in order to
       * finish voting and close the proposal.
       * Abstentions are counted as rejections unless there is a prime member set and the prime
       * member cast an approval.
       * - the weight of `proposal` preimage.
       * - up to three events deposited.
       * - one read, two removals, one mutation. (plus three static reads.)
       * - computation and i/o `O(P + L + M)` where:
       * - `M` is number of members,
       * - `P` is number of active proposals,
       * - `L` is the encoded length of `proposal` preimage.
       **/
      close: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * Origin must be a member of the collective.
       **/
      execute: AugmentedSubmittable<(proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * # <weight>
       * - Bounded storage reads and writes.
       * - Argument `threshold` has bearing on weight.
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the collective's membership.
       * - `new_members`: The new member list. Be nice to the chain and
       * - `prime`: The prime member whose vote sets the default.
       * Requires root origin.
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[], prime: Option<AccountId> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * # <weight>
       * - Bounded storage read and writes.
       * - Will be slightly heavier if the proposal is approved / disapproved after the vote.
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    democracy: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Specify a proxy that is already open to us. Called by the stash.
       * NOTE: Used to be called `set_proxy`.
       * The dispatch origin of this call must be _Signed_.
       * - `proxy`: The account that will be activated as proxy.
       * # <weight>
       * - One extra DB entry.
       * # </weight>
       **/
      activateProxy: AugmentedSubmittable<(proxy: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Cancel a proposal queued for enactment.
       * The dispatch origin of this call must be _Root_.
       * - `which`: The index of the referendum to cancel.
       * # <weight>
       * - One DB change.
       * - O(d) where d is the items in the dispatch queue.
       * # </weight>
       **/
      cancelQueued: AugmentedSubmittable<(which: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a referendum.
       * The dispatch origin of this call must be _Root_.
       * - `ref_index`: The index of the referendum to cancel.
       * # <weight>
       * - `O(1)`.
       * # </weight>
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Clears all public proposals.
       * The dispatch origin of this call must be _Root_.
       * # <weight>
       * - `O(1)`.
       * - One DB clear.
       * # </weight>
       **/
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Clear the proxy. Called by the proxy.
       * NOTE: Used to be called `resign_proxy`.
       * The dispatch origin of this call must be _Signed_.
       * # <weight>
       * - One DB clear.
       * # </weight>
       **/
      closeProxy: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Deactivate the proxy, but leave open to this account. Called by the stash.
       * The proxy must already be active.
       * NOTE: Used to be called `remove_proxy`.
       * The dispatch origin of this call must be _Signed_.
       * - `proxy`: The account that will be deactivated as proxy.
       * # <weight>
       * - One DB clear.
       * # </weight>
       **/
      deactivateProxy: AugmentedSubmittable<(proxy: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Delegate the voting power (with some given conviction) of the sending account.
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       * The dispatch origin of this call must be _Signed_, and the signing account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed/consolidated
       * through `reap_vote` or `unvote`).
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must
       * not be more than the account's current balance.
       * Emits `Delegated`.
       * # <weight>
       * # </weight>
       **/
      delegate: AugmentedSubmittable<(to: AccountId | string | Uint8Array, conviction: Conviction | 'None'|'Locked1x'|'Locked2x'|'Locked3x'|'Locked4x'|'Locked5x'|'Locked6x' | number | Uint8Array, balance: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
       * referendum.
       * The dispatch origin of this call must be `CancellationOrigin`.
       * -`ref_index`: The index of the referendum to cancel.
       * # <weight>
       * - `O(1)`.
       * # </weight>
       **/
      emergencyCancel: AugmentedSubmittable<(refIndex: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Enact a proposal from a referendum. For now we just make the weight be the maximum.
       **/
      enactProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Schedule a referendum to be tabled once it is legal to schedule an external
       * referendum.
       * The dispatch origin of this call must be `ExternalOrigin`.
       * - `proposal_hash`: The preimage hash of the proposal.
       * # <weight>
       * - `O(1)`.
       * - One DB change.
       * # </weight>
       **/
      externalPropose: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
       * schedule an external referendum.
       * The dispatch of this call must be `ExternalDefaultOrigin`.
       * - `proposal_hash`: The preimage hash of the proposal.
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       * # <weight>
       * - `O(1)`.
       * - One DB change.
       * # </weight>
       **/
      externalProposeDefault: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
       * an external referendum.
       * The dispatch of this call must be `ExternalMajorityOrigin`.
       * - `proposal_hash`: The preimage hash of the proposal.
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       * # <weight>
       * - `O(1)`.
       * - One DB change.
       * # </weight>
       **/
      externalProposeMajority: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Schedule the currently externally-proposed majority-carries referendum to be tabled
       * immediately. If there is no externally-proposed referendum currently, or if there is one
       * but it is not a majority-carries referendum then it fails.
       * The dispatch of this call must be `FastTrackOrigin`.
       * - `proposal_hash`: The hash of the current external proposal.
       * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
       * `FastTrackVotingPeriod` if too low.
       * - `delay`: The number of block after voting has ended in approval and this should be
       * enacted. This doesn't have a minimum amount.
       * Emits `Started`.
       * # <weight>
       * - One DB clear.
       * - One DB change.
       * - One extra DB entry.
       * # </weight>
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, votingPeriod: BlockNumber | AnyNumber | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Register the preimage for an upcoming proposal. This requires the proposal to be
       * in the dispatch queue. No deposit is needed.
       * The dispatch origin of this call must be _Signed_.
       * - `encoded_proposal`: The preimage of a proposal.
       * Emits `PreimageNoted`.
       * # <weight>
       * - Dependent on the size of `encoded_proposal` and length of dispatch queue.
       * # </weight>
       **/
      noteImminentPreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
       * in the dispatch queue but does require a deposit, returned once enacted.
       * The dispatch origin of this call must be _Signed_.
       * - `encoded_proposal`: The preimage of a proposal.
       * Emits `PreimageNoted`.
       * # <weight>
       * - Dependent on the size of `encoded_proposal` but protected by a
       * required deposit.
       * # </weight>
       **/
      notePreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Become a proxy.
       * This must be called prior to a later `activate_proxy`.
       * Origin must be a Signed.
       * - `target`: The account whose votes will later be proxied.
       * `close_proxy` must be called before the account can be destroyed.
       * # <weight>
       * - One extra DB entry.
       * # </weight>
       **/
      openProxy: AugmentedSubmittable<(target: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Propose a sensitive action to be taken.
       * The dispatch origin of this call must be _Signed_ and the sender must
       * have funds to cover the deposit.
       * - `proposal_hash`: The hash of the proposal preimage.
       * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
       * Emits `Proposed`.
       * # <weight>
       * - `O(P)`
       * - P is the number proposals in the `PublicProps` vec.
       * - Two DB changes, one DB entry.
       * # </weight>
       **/
      propose: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Delegate the voting power (with some given conviction) of a proxied account.
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       * The dispatch origin of this call must be _Signed_, and the signing account must have
       * been set as the proxy account for `target`.
       * - `target`: The account whole voting power shall be delegated and whose balance locked.
       * This account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed/consolidated
       * through `reap_vote` or `unvote`).
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must
       * not be more than the account's current balance.
       * Emits `Delegated`.
       * # <weight>
       * # </weight>
       **/
      proxyDelegate: AugmentedSubmittable<(to: AccountId | string | Uint8Array, conviction: Conviction | 'None'|'Locked1x'|'Locked2x'|'Locked3x'|'Locked4x'|'Locked5x'|'Locked6x' | number | Uint8Array, balance: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a proxied vote for a referendum.
       * Exactly equivalent to `remove_vote` except that it operates on the account that the
       * sender is a proxy for.
       * The dispatch origin of this call must be _Signed_ and the signing account must be a
       * proxy for some other account which has a registered vote for the referendum of `index`.
       * - `index`: The index of referendum of the vote to be removed.
       * # <weight>
       * - `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * # </weight>
       **/
      proxyRemoveVote: AugmentedSubmittable<(index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Undelegate the voting power of a proxied account.
       * Tokens may be unlocked following once an amount of time consistent with the lock period
       * of the conviction with which the delegation was issued.
       * The dispatch origin of this call must be _Signed_ and the signing account must be a
       * proxy for some other account which is currently delegating.
       * Emits `Undelegated`.
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      proxyUndelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Vote in a referendum on behalf of a stash. If `vote.is_aye()`, the vote is to enact
       * the proposal; otherwise it is a vote to keep the status quo.
       * The dispatch origin of this call must be _Signed_.
       * - `ref_index`: The index of the referendum to proxy vote for.
       * - `vote`: The vote configuration.
       * # <weight>
       * - `O(1)`.
       * - One DB change, one DB entry.
       * # </weight>
       **/
      proxyVote: AugmentedSubmittable<(refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array, vote: AccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove an expired proposal preimage and collect the deposit.
       * The dispatch origin of this call must be _Signed_.
       * - `proposal_hash`: The preimage hash of a proposal.
       * This will only work after `VotingPeriod` blocks from the time that the preimage was
       * noted, if it's the same account doing it. If it's a different account, then it'll only
       * work an additional `EnactmentPeriod` later.
       * Emits `PreimageReaped`.
       * # <weight>
       * - One DB clear.
       * # </weight>
       **/
      reapPreimage: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a vote for a referendum.
       * If the `target` is equal to the signer, then this function is exactly equivalent to
       * `remove_vote`. If not equal to the signer, then the vote must have expired,
       * either because the referendum was cancelled, because the voter lost the referendum or
       * because the conviction period is over.
       * The dispatch origin of this call must be _Signed_.
       * - `target`: The account of the vote to be removed; this account must have voted for
       * referendum `index`.
       * - `index`: The index of referendum of the vote to be removed.
       * # <weight>
       * - `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * # </weight>
       **/
      removeOtherVote: AugmentedSubmittable<(target: AccountId | string | Uint8Array, index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a vote for a referendum.
       * If:
       * - the referendum was cancelled, or
       * - the referendum is ongoing, or
       * - the referendum has ended such that
       * - the vote of the account was in opposition to the result; or
       * - there was no conviction to the account's vote; or
       * - the account made a split vote
       * ...then the vote is removed cleanly and a following call to `unlock` may result in more
       * funds being available.
       * If, however, the referendum has ended and:
       * - it finished corresponding to the vote of the account, and
       * - the account made a standard vote with conviction, and
       * - the lock period of the conviction is not over
       * ...then the lock will be aggregated into the overall account's lock, which may involve
       * *overlocking* (where the two locks are combined into a single lock that is the maximum
       * of both the amount locked and the time is it locked for).
       * The dispatch origin of this call must be _Signed_, and the signer must have a vote
       * registered for referendum `index`.
       * - `index`: The index of referendum of the vote to be removed.
       * # <weight>
       * - `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * # </weight>
       **/
      removeVote: AugmentedSubmittable<(index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Signals agreement with a particular proposal.
       * The dispatch origin of this call must be _Signed_ and the sender
       * must have funds to cover the deposit, equal to the original deposit.
       * - `proposal`: The index of the proposal to second.
       * # <weight>
       * - `O(S)`.
       * - S is the number of seconds a proposal already has.
       * - One DB entry.
       * # </weight>
       **/
      second: AugmentedSubmittable<(proposal: Compact<PropIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Undelegate the voting power of the sending account.
       * Tokens may be unlocked following once an amount of time consistent with the lock period
       * of the conviction with which the delegation was issued.
       * The dispatch origin of this call must be _Signed_ and the signing account must be
       * currently delegating.
       * Emits `Undelegated`.
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Unlock tokens that have an expired lock.
       * The dispatch origin of this call must be _Signed_.
       * - `target`: The account to remove the lock on.
       * # <weight>
       * - `O(1)`.
       * # </weight>
       **/
      unlock: AugmentedSubmittable<(target: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Veto and blacklist the external proposal hash.
       * The dispatch origin of this call must be `VetoOrigin`.
       * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
       * Emits `Vetoed`.
       * # <weight>
       * - Two DB entries.
       * - One DB clear.
       * - Performs a binary search on `existing_vetoers` which should not
       * be very large.
       * - O(log v), v is number of `existing_vetoers`
       * # </weight>
       **/
      vetoExternal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
       * otherwise it is a vote to keep the status quo.
       * The dispatch origin of this call must be _Signed_.
       * - `ref_index`: The index of the referendum to vote for.
       * - `vote`: The vote configuration.
       * # <weight>
       * - `O(R)`.
       * - R is the number of referendums the voter has voted on.
       * - One DB change, one DB entry.
       * # </weight>
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array, vote: AccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    elections: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Remove a particular member from the set. This is effective immediately and the bond of
       * the outgoing member is slashed.
       * If a runner-up is available, then the best runner-up will be removed and replaces the
       * outgoing member. Otherwise, a new phragmen round is started.
       * Note that this does not affect the designated block number of the next election.
       * # <weight>
       * #### State
       * Reads: O(do_phragmen)
       * Writes: O(do_phragmen)
       * # </weight>
       **/
      removeMember: AugmentedSubmittable<(who: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove `origin` as a voter. This removes the lock and returns the bond.
       * # <weight>
       * #### State
       * Reads: O(1)
       * Writes: O(1)
       * # </weight>
       **/
      removeVoter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Renounce one's intention to be a candidate for the next election round. 3 potential
       * outcomes exist:
       * - `origin` is a candidate and not elected in any set. In this case, the bond is
       * unreserved, returned and origin is removed as a candidate.
       * - `origin` is a current runner up. In this case, the bond is unreserved, returned and
       * origin is removed as a runner.
       * - `origin` is a current member. In this case, the bond is unreserved and origin is
       * removed as a member, consequently not being a candidate for the next round anymore.
       * Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
       **/
      renounceCandidacy: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Report `target` for being an defunct voter. In case of a valid report, the reporter is
       * rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
       * their bond is slashed.
       * A defunct voter is defined to be:
       * - a voter whose current submitted votes are all invalid. i.e. all of them are no
       * longer a candidate nor an active member.
       * # <weight>
       * #### State
       * Reads: O(NLogM) given M current candidates and N votes for `target`.
       * Writes: O(1)
       * # </weight>
       **/
      reportDefunctVoter: AugmentedSubmittable<(target: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Submit oneself for candidacy.
       * A candidate will either:
       * - Lose at the end of the term and forfeit their deposit.
       * - Win and become a member. Members will eventually get their stash back.
       * - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
       * removed.
       * # <weight>
       * #### State
       * Reads: O(LogN) Given N candidates.
       * Writes: O(1)
       * # </weight>
       **/
      submitCandidacy: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Vote for a set of candidates for the upcoming round of election.
       * The `votes` should:
       * - not be empty.
       * - be less than the number of candidates.
       * Upon voting, `value` units of `who`'s balance is locked and a bond amount is reserved.
       * It is the responsibility of the caller to not place all of their balance into the lock
       * and keep some for further transactions.
       * # <weight>
       * #### State
       * Reads: O(1)
       * Writes: O(V) given `V` votes. V is bounded by 16.
       * # </weight>
       **/
      vote: AugmentedSubmittable<(votes: Vec<AccountId> | (AccountId | string | Uint8Array)[], value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    finalityTracker: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Hint that the author of this block thinks the best finalized
       * block is the given number.
       **/
      finalHint: AugmentedSubmittable<(hint: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    grandpa: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Report some misbehavior.
       **/
      reportMisbehavior: AugmentedSubmittable<(report: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    identity: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Add a registrar to the system.
       * The dispatch origin for this call must be `RegistrarOrigin` or `Root`.
       * - `account`: the account of the registrar.
       * Emits `RegistrarAdded` if successful.
       * # <weight>
       * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
       * - One storage mutation (codec `O(R)`).
       * - One event.
       * - Benchmarks:
       * - 78.71 + R * 0.965 µs (min squares analysis)
       * - 94.28 + R * 0.991 µs (min squares analysis)
       * # </weight>
       **/
      addRegistrar: AugmentedSubmittable<(account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Cancel a previous request.
       * Payment: A previously reserved deposit is returned on success.
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * - `reg_index`: The index of the registrar whose judgement is no longer requested.
       * Emits `JudgementUnrequested` if successful.
       * # <weight>
       * - `O(R + X)`.
       * - One balance-reserve operation.
       * - One storage mutation `O(R + X)`.
       * - One event.
       * - Benchmarks:
       * - 135.3 + R * 0.574 + X * 3.394 µs (min squares analysis)
       * - 144.3 + R * 0.316 + X * 3.53 µs (min squares analysis)
       * # </weight>
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: RegistrarIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Clear an account's identity info and all sub-accounts and return all deposits.
       * Payment: All reserved balances on the account are returned.
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * Emits `IdentityCleared` if successful.
       * # <weight>
       * - `O(R + S + X)`
       * - where `R` registrar-count (governance-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       * - One balance-unreserve operation.
       * - `2` storage reads and `S + 2` storage deletions.
       * - One event.
       * - Benchmarks:
       * - 152.3 + R * 0.306 + S * 4.967 + X * 1.697 µs (min squares analysis)
       * - 139.5 + R * 0.466 + S * 5.304 + X * 1.895 µs (min squares analysis)
       * # </weight>
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove an account's identity and sub-account information and slash the deposits.
       * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
       * `Slash`. Verification request deposits are not returned; they should be cancelled
       * manually using `cancel_request`.
       * The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * Emits `IdentityKilled` if successful.
       * # <weight>
       * - `O(R + S + X)`.
       * - One balance-reserve operation.
       * - `S + 2` storage mutations.
       * - One event.
       * - Benchmark: 167.4 + R * 1.107 + S * 5.343 + X * 2.294 µs (min squares analysis)
       * # </weight>
       **/
      killIdentity: AugmentedSubmittable<(target: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Provide a judgement for an account's identity.
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `reg_index`.
       * - `reg_index`: the index of the registrar whose judgement is being made.
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
       * Emits `JudgementGiven` if successful.
       * # <weight>
       * - `O(R + X)`.
       * - One balance-transfer operation.
       * - Up to one account-lookup operation.
       * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
       * - One event.
       * - Benchmark: 110.7 + R * 1.066 + X * 3.402 µs (min squares analysis)
       * # </weight>
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<RegistrarIndex> | AnyNumber | Uint8Array, target: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, judgement: IdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Request a judgement from a registrar.
       * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
       * given.
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * - `reg_index`: The index of the registrar whose judgement is requested.
       * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
       * ```nocompile
       * Self::registrars().get(reg_index).unwrap().fee
       * ```
       * Emits `JudgementRequested` if successful.
       * # <weight>
       * - `O(R + X)`.
       * - One balance-reserve operation.
       * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
       * - One event.
       * - Benchmarks:
       * - 154 + R * 0.932 + X * 3.302 µs (min squares analysis)
       * - 172.9 + R * 0.69 + X * 3.304 µs (min squares analysis)
       * # </weight>
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<RegistrarIndex> | AnyNumber | Uint8Array, maxFee: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change the account associated with a registrar.
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * - `index`: the index of the registrar whose fee is to be set.
       * - `new`: the new account ID.
       * # <weight>
       * - `O(R)`.
       * - One storage mutation `O(R)`.
       * - Benchmark: 24.59 + R * 0.832 µs (min squares analysis)
       * # </weight>
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the fee required for a judgement to be requested from a registrar.
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fee`: the new fee.
       * # <weight>
       * - `O(R)`.
       * - One storage mutation `O(R)`.
       * - Benchmarks:
       * - 23.81 + R * 0.774 µs (min squares analysis)
       * # </weight>
       **/
      setFee: AugmentedSubmittable<(index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, fee: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the field information for a registrar.
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fields`: the fields that the registrar concerns themselves with.
       * # <weight>
       * - `O(R)`.
       * - One storage mutation `O(R)`.
       * - Benchmark: 22.85 + R * 0.853 µs (min squares analysis)
       * # </weight>
       **/
      setFields: AugmentedSubmittable<(index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, fields: IdentityFields) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set an account's identity information and reserve the appropriate deposit.
       * If the account already has identity information, the deposit is taken as part payment
       * for the new deposit.
       * The dispatch origin for this call must be _Signed_.
       * - `info`: The identity information.
       * Emits `IdentitySet` if successful.
       * # <weight>
       * - `O(X + X' + R)`
       * - where `X` additional-field-count (deposit-bounded and code-bounded)
       * - where `R` judgements-count (registrar-count-bounded)
       * - One balance reserve operation.
       * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
       * - One event.
       * - Benchmarks:
       * - 136.6 + R * 0.62 + X * 2.62 µs (min squares analysis)
       * - 146.2 + R * 0.372 + X * 2.98 µs (min squares analysis)
       * # </weight>
       **/
      setIdentity: AugmentedSubmittable<(info: IdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the sub-accounts of the sender.
       * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
       * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * - `subs`: The identity's (new) sub-accounts.
       * # <weight>
       * - `O(P + S)`
       * - where `P` old-subs-count (hard- and deposit-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - At most one balance operations.
       * - DB:
       * - `P + S` storage mutations (codec complexity `O(1)`)
       * - One storage read (codec complexity `O(P)`).
       * - One storage write (codec complexity `O(S)`).
       * - One storage-exists (`IdentityOf::contains_key`).
       * - Benchmarks:
       * - 115.2 + P * 5.11 + S * 6.67 µs (min squares analysis)
       * - 121 + P * 4.852 + S * 7.111 µs (min squares analysis)
       * # </weight>
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId, Data]>> | ([AccountId | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>>;
    };
    imOnline: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      heartbeat: AugmentedSubmittable<(heartbeat: Heartbeat | { blockNumber?: any; networkState?: any; sessionIndex?: any; authorityIndex?: any } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    indices: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Assign an previously unassigned index.
       * Payment: `Deposit` is reserved from the sender account.
       * The dispatch origin for this call must be _Signed_.
       * - `index`: the index to be claimed. This must not be in use.
       * Emits `IndexAssigned` if successful.
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One reserve operation.
       * - One event.
       * # </weight>
       **/
      claim: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Force an index to an account. This doesn't require a deposit. If the index is already
       * held, then any deposit is reimbursed to its current owner.
       * The dispatch origin for this call must be _Root_.
       * - `index`: the index to be (re-)assigned.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * Emits `IndexAssigned` if successful.
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - Up to one reserve operation.
       * - One event.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Free up an index owned by the sender.
       * Payment: Any previous deposit placed for the index is unreserved in the sender account.
       * The dispatch origin for this call must be _Signed_ and the sender must own the index.
       * - `index`: the index to be freed. This must be owned by the sender.
       * Emits `IndexFreed` if successful.
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One reserve operation.
       * - One event.
       * # </weight>
       **/
      free: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Assign an index already owned by the sender to another account. The balance reservation
       * is effectively transferred to the new account.
       * The dispatch origin for this call must be _Signed_.
       * - `index`: the index to be re-assigned. This must be owned by the sender.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * Emits `IndexAssigned` if successful.
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One transfer operation.
       * - One event.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    recovery: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Send a call through a recovered account.
       * The dispatch origin for this call must be _Signed_ and registered to
       * be able to make calls on behalf of the recovered account.
       * Parameters:
       * - `account`: The recovered account you want to make a call on-behalf-of.
       * - `call`: The call you want to make with the recovered account.
       * # <weight>
       * - The weight of the `call` + 10,000.
       * - One storage lookup to check account is recovered by `who`. O(1)
       * # </weight>
       **/
      asRecovered: AugmentedSubmittable<(account: AccountId | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Cancel the ability to use `as_recovered` for `account`.
       * The dispatch origin for this call must be _Signed_ and registered to
       * be able to make calls on behalf of the recovered account.
       * Parameters:
       * - `account`: The recovered account you are able to call on-behalf-of.
       * # <weight>
       * - One storage mutation to check account is recovered by `who`. O(1)
       * # </weight>
       **/
      cancelRecovered: AugmentedSubmittable<(account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Allow a successful rescuer to claim their recovered account.
       * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
       * who has successfully completed the account recovery process: collected
       * `threshold` or more vouches, waited `delay_period` blocks since initiation.
       * Parameters:
       * - `account`: The lost account that you want to claim has been successfully
       * recovered by you.
       * # <weight>
       * Key: F (len of friends in config), V (len of vouching friends)
       * - One storage read to get the recovery configuration. O(1), Codec O(F)
       * - One storage read to get the active recovery process. O(1), Codec O(V)
       * - One storage read to get the current block number. O(1)
       * - One storage write. O(1), Codec O(V).
       * - One event.
       * Total Complexity: O(F + V)
       * # </weight>
       **/
      claimRecovery: AugmentedSubmittable<(account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * As the controller of a recoverable account, close an active recovery
       * process for your account.
       * Payment: By calling this function, the recoverable account will receive
       * the recovery deposit `RecoveryDeposit` placed by the rescuer.
       * The dispatch origin for this call must be _Signed_ and must be a
       * recoverable account with an active recovery process for it.
       * Parameters:
       * - `rescuer`: The account trying to rescue this recoverable account.
       * # <weight>
       * Key: V (len of vouching friends)
       * - One storage read/remove to get the active recovery process. O(1), Codec O(V)
       * - One balance call to repatriate reserved. O(X)
       * - One event.
       * Total Complexity: O(V + X)
       * # </weight>
       **/
      closeRecovery: AugmentedSubmittable<(rescuer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Create a recovery configuration for your account. This makes your account recoverable.
       * Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
       * will be reserved for storing the recovery configuration. This deposit is returned
       * in full when the user calls `remove_recovery`.
       * The dispatch origin for this call must be _Signed_.
       * Parameters:
       * - `friends`: A list of friends you trust to vouch for recovery attempts.
       * Should be ordered and contain no duplicate values.
       * - `threshold`: The number of friends that must vouch for a recovery attempt
       * before the account can be recovered. Should be less than or equal to
       * the length of the list of friends.
       * - `delay_period`: The number of blocks after a recovery attempt is initialized
       * that needs to pass before the account can be recovered.
       * # <weight>
       * - Key: F (len of friends)
       * - One storage read to check that account is not already recoverable. O(1).
       * - A check that the friends list is sorted and unique. O(F)
       * - One currency reserve operation. O(X)
       * - One storage write. O(1). Codec O(F).
       * - One event.
       * Total Complexity: O(F + X)
       * # </weight>
       **/
      createRecovery: AugmentedSubmittable<(friends: Vec<AccountId> | (AccountId | string | Uint8Array)[], threshold: u16 | AnyNumber | Uint8Array, delayPeriod: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Initiate the process for recovering a recoverable account.
       * Payment: `RecoveryDeposit` balance will be reserved for initiating the
       * recovery process. This deposit will always be repatriated to the account
       * trying to be recovered. See `close_recovery`.
       * The dispatch origin for this call must be _Signed_.
       * Parameters:
       * - `account`: The lost account that you want to recover. This account
       * needs to be recoverable (i.e. have a recovery configuration).
       * # <weight>
       * - One storage read to check that account is recoverable. O(F)
       * - One storage read to check that this recovery process hasn't already started. O(1)
       * - One currency reserve operation. O(X)
       * - One storage read to get the current block number. O(1)
       * - One storage write. O(1).
       * - One event.
       * Total Complexity: O(F + X)
       * # </weight>
       **/
      initiateRecovery: AugmentedSubmittable<(account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove the recovery process for your account. Recovered accounts are still accessible.
       * NOTE: The user must make sure to call `close_recovery` on all active
       * recovery attempts before calling this function else it will fail.
       * Payment: By calling this function the recoverable account will unreserve
       * their recovery configuration deposit.
       * (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
       * The dispatch origin for this call must be _Signed_ and must be a
       * recoverable account (i.e. has a recovery configuration).
       * # <weight>
       * Key: F (len of friends)
       * - One storage read to get the prefix iterator for active recoveries. O(1)
       * - One storage read/remove to get the recovery configuration. O(1), Codec O(F)
       * - One balance call to unreserved. O(X)
       * - One event.
       * Total Complexity: O(F + X)
       * # </weight>
       **/
      removeRecovery: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Allow ROOT to bypass the recovery process and set an a rescuer account
       * for a lost account directly.
       * The dispatch origin for this call must be _ROOT_.
       * Parameters:
       * - `lost`: The "lost account" to be recovered.
       * - `rescuer`: The "rescuer account" which can call as the lost account.
       * # <weight>
       * - One storage write O(1)
       * - One event
       * # </weight>
       **/
      setRecovered: AugmentedSubmittable<(lost: AccountId | string | Uint8Array, rescuer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Allow a "friend" of a recoverable account to vouch for an active recovery
       * process for that account.
       * The dispatch origin for this call must be _Signed_ and must be a "friend"
       * for the recoverable account.
       * Parameters:
       * - `lost`: The lost account that you want to recover.
       * - `rescuer`: The account trying to rescue the lost account that you
       * want to vouch for.
       * The combination of these two parameters must point to an active recovery
       * process.
       * # <weight>
       * Key: F (len of friends in config), V (len of vouching friends)
       * - One storage read to get the recovery configuration. O(1), Codec O(F)
       * - One storage read to get the active recovery process. O(1), Codec O(V)
       * - One binary search to confirm caller is a friend. O(logF)
       * - One binary search to confirm caller has not already vouched. O(logV)
       * - One storage write. O(1), Codec O(V).
       * - One event.
       * Total Complexity: O(F + logF + V + logV)
       * # </weight>
       **/
      vouchRecovery: AugmentedSubmittable<(lost: AccountId | string | Uint8Array, rescuer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    session: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Removes any session key(s) of the function caller.
       * This doesn't take effect until the next session.
       * The dispatch origin of this function must be signed.
       * # <weight>
       * - Complexity: `O(1)` in number of key types.
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
       * - DbWrites: `NextKeys`, `origin account`
       * - DbWrites per key id: `KeyOwnder`
       * # </weight>
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * The dispatch origin of this function must be signed.
       * # <weight>
       * - Complexity: `O(1)`
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
       * - DbWrites: `origin account`, `NextKeys`
       * - DbReads per key id: `KeyOwner`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      setKeys: AugmentedSubmittable<(keys: Keys, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    society: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * A user outside of the society can make a bid for entry.
       * Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
       * when the bid becomes a member, or if the bid calls `unbid`.
       * The dispatch origin for this call must be _Signed_.
       * Parameters:
       * - `value`: A one time payment the bid would like to receive when joining the society.
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
       * Total Complexity: O(M + B + C + logM + logB + X)
       * # </weight>
       **/
      bid: AugmentedSubmittable<(value: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * As a member, vote on the defender.
       * The dispatch origin for this call must be _Signed_ and a member.
       * Parameters:
       * - `approve`: A boolean which says if the candidate should be
       * approved (`true`) or rejected (`false`).
       * # <weight>
       * - Key: M (len of members)
       * - One storage read O(M) and O(log M) search to check user is a member.
       * - One storage write to add vote to votes. O(1)
       * - One event.
       * Total Complexity: O(M + logM)
       * # </weight>
       **/
      defenderVote: AugmentedSubmittable<(approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Found the society.
       * This is done as a discrete action in order to allow for the
       * module to be included into a running chain and can only be done once.
       * The dispatch origin for this call must be from the _FounderSetOrigin_.
       * Parameters:
       * - `founder` - The first member and head of the newly founded society.
       * - `max_members` - The initial max number of members for the society.
       * - `rules` - The rules of this society concerning membership.
       * # <weight>
       * - Two storage mutates to set `Head` and `Founder`. O(1)
       * - One storage write to add the first member to society. O(1)
       * - One event.
       * Total Complexity: O(1)
       * # </weight>
       **/
      found: AugmentedSubmittable<(founder: AccountId | string | Uint8Array, maxMembers: u32 | AnyNumber | Uint8Array, rules: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Allow suspended judgement origin to make judgement on a suspended candidate.
       * If the judgement is `Approve`, we add them to society as a member with the appropriate
       * payment for joining society.
       * If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
       * to the society treasury, or we ban the voucher from vouching again.
       * If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
       * through the induction process again.
       * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
       * Parameters:
       * - `who` - The suspended candidate to be judged.
       * - `judgement` - `Approve`, `Reject`, or `Rebid`.
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
       * Total Complexity: O(M + logM + B + X)
       * # </weight>
       **/
      judgeSuspendedCandidate: AugmentedSubmittable<(who: AccountId | string | Uint8Array, judgement: SocietyJudgement | 'Rebid'|'Reject'|'Approve' | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Allow suspension judgement origin to make judgement on a suspended member.
       * If a suspended member is forgiven, we simply add them back as a member, not affecting
       * any of the existing storage items for that member.
       * If a suspended member is rejected, remove all associated storage items, including
       * their payouts, and remove any vouched bids they currently have.
       * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
       * Parameters:
       * - `who` - The suspended member to be judged.
       * - `forgive` - A boolean representing whether the suspension judgement origin
       * forgives (`true`) or rejects (`false`) a suspended member.
       * # <weight>
       * Key: B (len of bids), M (len of members)
       * - One storage read to check `who` is a suspended member. O(1)
       * - Up to one storage write O(M) with O(log M) binary search to add a member back to society.
       * - Up to 3 storage removals O(1) to clean up a removed member.
       * - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
       * - Up to one additional event if unvouch takes place.
       * - One storage removal. O(1)
       * - One event for the judgement.
       * Total Complexity: O(M + logM + B)
       * # </weight>
       **/
      judgeSuspendedMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array, forgive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Transfer the first matured payout for the sender and remove it from the records.
       * NOTE: This extrinsic needs to be called multiple times to claim multiple matured payouts.
       * Payment: The member will receive a payment equal to their first matured
       * payout to their free balance.
       * The dispatch origin for this call must be _Signed_ and a member with
       * payouts remaining.
       * # <weight>
       * Key: M (len of members), P (number of payouts for a particular member)
       * - One storage read O(M) and O(log M) search to check signer is a member.
       * - One storage read O(P) to get all payouts for a member.
       * - One storage read O(1) to get the current block number.
       * - One currency transfer call. O(X)
       * - One storage write or removal to update the member's payouts. O(P)
       * Total Complexity: O(M + logM + P + X)
       * # </weight>
       **/
      payout: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Allows root origin to change the maximum number of members in society.
       * Max membership count must be greater than 1.
       * The dispatch origin for this call must be from _ROOT_.
       * Parameters:
       * - `max` - The maximum number of members for the society.
       * # <weight>
       * - One storage write to update the max. O(1)
       * - One event.
       * Total Complexity: O(1)
       * # </weight>
       **/
      setMaxMembers: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * A bidder can remove their bid for entry into society.
       * By doing so, they will have their candidate deposit returned or
       * they will unvouch their voucher.
       * Payment: The bid deposit is unreserved if the user made a bid.
       * The dispatch origin for this call must be _Signed_ and a bidder.
       * Parameters:
       * - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
       * # <weight>
       * Key: B (len of bids), X (balance unreserve)
       * - One storage read and write to retrieve and update the bids. O(B)
       * - Either one unreserve balance action O(X) or one vouching storage removal. O(1)
       * - One event.
       * Total Complexity: O(B + X)
       * # </weight>
       **/
      unbid: AugmentedSubmittable<(pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Annul the founding of the society.
       * The dispatch origin for this call must be Signed, and the signing account must be both
       * the `Founder` and the `Head`. This implies that it may only be done when there is one
       * member.
       * # <weight>
       * - Two storage reads O(1).
       * - Four storage removals O(1).
       * - One event.
       * Total Complexity: O(1)
       * # </weight>
       **/
      unfound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * As a vouching member, unvouch a bid. This only works while vouched user is
       * only a bidder (and not a candidate).
       * The dispatch origin for this call must be _Signed_ and a vouching member.
       * Parameters:
       * - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
       * # <weight>
       * Key: B (len of bids)
       * - One storage read O(1) to check the signer is a vouching member.
       * - One storage mutate to retrieve and update the bids. O(B)
       * - One vouching storage removal. O(1)
       * - One event.
       * Total Complexity: O(B)
       * # </weight>
       **/
      unvouch: AugmentedSubmittable<(pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * As a member, vote on a candidate.
       * The dispatch origin for this call must be _Signed_ and a member.
       * Parameters:
       * - `candidate`: The candidate that the member would like to bid on.
       * - `approve`: A boolean which says if the candidate should be
       * approved (`true`) or rejected (`false`).
       * # <weight>
       * Key: C (len of candidates), M (len of members)
       * - One storage read O(M) and O(log M) search to check user is a member.
       * - One account lookup.
       * - One storage read O(C) and O(C) search to check that user is a candidate.
       * - One storage write to add vote to votes. O(1)
       * - One event.
       * Total Complexity: O(M + logM + C)
       * # </weight>
       **/
      vote: AugmentedSubmittable<(candidate: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * As a member, vouch for someone to join society by placing a bid on their behalf.
       * There is no deposit required to vouch for a new bid, but a member can only vouch for
       * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
       * the suspension judgement origin, the member will be banned from vouching again.
       * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
       * be paid as a portion of the reward the member will receive for joining the society.
       * The dispatch origin for this call must be _Signed_ and a member.
       * Parameters:
       * - `who`: The user who you would like to vouch for.
       * - `value`: The total reward to be paid between you and the candidate if they become
       * a member in the society.
       * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
       * the society. Tips larger than `value` will be saturated upon payout.
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
       * Total Complexity: O(M + B + C + logM + logB + X)
       * # </weight>
       **/
      vouch: AugmentedSubmittable<(who: AccountId | string | Uint8Array, value: BalanceOf | AnyNumber | Uint8Array, tip: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    staking: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Take the origin account as a stash and lock up `value` of its balance. `controller` will
       * be the account that controls it.
       * `value` must be more than the `minimum_balance` specified by `T::Currency`.
       * The dispatch origin for this call must be _Signed_ by the stash account.
       * Emits `Bonded`.
       * # <weight>
       * - Independent of the arguments. Moderate complexity.
       * - O(1).
       * - Three extra DB entries.
       * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
       * unless the `origin` falls below _existential deposit_ and gets removed as dust.
       * # </weight>
       **/
      bond: AugmentedSubmittable<(controller: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array, payee: RewardDestination | 'Staked'|'Stash'|'Controller' | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Add some extra amount that have appeared in the stash `free_balance` into the balance up
       * for staking.
       * Use this if there are additional funds in your stash account that you wish to bond.
       * Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
       * that can be added.
       * The dispatch origin for this call must be _Signed_ by the stash, not the controller and
       * it can be only called when [`EraElectionStatus`] is `Closed`.
       * Emits `Bonded`.
       * # <weight>
       * - Independent of the arguments. Insignificant complexity.
       * - O(1).
       * - One DB entry.
       * # </weight>
       **/
      bondExtra: AugmentedSubmittable<(maxAdditional: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Cancel enactment of a deferred slash. Can be called by either the root origin or
       * the `T::SlashCancelOrigin`.
       * passing the era and indices of the slashes for that era to kill.
       * # <weight>
       * - One storage write.
       * # </weight>
       **/
      cancelDeferredSlash: AugmentedSubmittable<(era: EraIndex | AnyNumber | Uint8Array, slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Declare no desire to either validate or nominate.
       * Effects will be felt at the beginning of the next era.
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * # <weight>
       * - Independent of the arguments. Insignificant complexity.
       * - Contains one read.
       * - Writes are limited to the `origin` account key.
       * # </weight>
       **/
      chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Force there to be a new era at the end of the next session. After this, it will be
       * reset to normal (non-forced) behaviour.
       * # <weight>
       * - No arguments.
       * # </weight>
       **/
      forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Force there to be a new era at the end of sessions indefinitely.
       * # <weight>
       * - One storage write
       * # </weight>
       **/
      forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Force there to be no new eras indefinitely.
       * # <weight>
       * - No arguments.
       * # </weight>
       **/
      forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Force a current staker to become completely unstaked, immediately.
       **/
      forceUnstake: AugmentedSubmittable<(stash: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Declare the desire to nominate `targets` for the origin controller.
       * Effects will be felt at the beginning of the next era. This can only be called when
       * [`EraElectionStatus`] is `Closed`.
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * # <weight>
       * - The transaction's complexity is proportional to the size of `targets`,
       * which is capped at CompactAssignments::LIMIT.
       * - Both the reads and writes follow a similar pattern.
       * # </weight>
       **/
      nominate: AugmentedSubmittable<(targets: Vec<LookupSource> | (LookupSource | Address | AccountId | AccountIndex | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * **This extrinsic will be removed after `MigrationEra + HistoryDepth` has passed, giving
       * opportunity for users to claim all rewards before moving to Simple Payouts. After this
       * time, you should use `payout_stakers` instead.**
       * Make one nominator's payout for one era.
       * - `who` is the controller account of the nominator to pay out.
       * - `era` may not be lower than one following the most recently paid era. If it is higher,
       * then it indicates an instruction to skip the payout of all previous eras.
       * - `validators` is the list of all validators that `who` had exposure to during `era`,
       * alongside the index of `who` in the clipped exposure of the validator.
       * I.e. each element is a tuple of
       * `(validator, index of `who` in clipped exposure of validator)`.
       * If it is incomplete, then less than the full reward will be paid out.
       * It must not exceed `MAX_NOMINATIONS`.
       * WARNING: once an era is payed for a validator such validator can't claim the payout of
       * previous era.
       * WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
       * # <weight>
       * - Number of storage read of `O(validators)`; `validators` is the argument of the call,
       * and is bounded by `MAX_NOMINATIONS`.
       * - Each storage read is `O(N)` size and decode complexity; `N` is the  maximum
       * nominations that can be given to a single validator.
       * - Computation complexity: `O(MAX_NOMINATIONS * logN)`; `MAX_NOMINATIONS` is the
       * maximum number of validators that may be nominated by a single nominator, it is
       * bounded only economically (all nominators are required to place a minimum stake).
       * # </weight>
       **/
      payoutNominator: AugmentedSubmittable<(era: EraIndex | AnyNumber | Uint8Array, validators: Vec<ITuple<[AccountId, u32]>> | ([AccountId | string | Uint8Array, u32 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Pay out all the stakers behind a single validator for a single era.
       * - `validator_stash` is the stash account of the validator. Their nominators, up to
       * `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
       * - `era` may be any era between `[current_era - history_depth; current_era]`.
       * The origin of this call must be _Signed_. Any account can call this function, even if
       * it is not one of the stakers.
       * This can only be called when [`EraElectionStatus`] is `Closed`.
       * # <weight>
       * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
       * - Contains a limited number of reads and writes.
       * # </weight>
       **/
      payoutStakers: AugmentedSubmittable<(validatorStash: AccountId | string | Uint8Array, era: EraIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * **This extrinsic will be removed after `MigrationEra + HistoryDepth` has passed, giving
       * opportunity for users to claim all rewards before moving to Simple Payouts. After this
       * time, you should use `payout_stakers` instead.**
       * Make one validator's payout for one era.
       * - `who` is the controller account of the validator to pay out.
       * - `era` may not be lower than one following the most recently paid era. If it is higher,
       * then it indicates an instruction to skip the payout of all previous eras.
       * WARNING: once an era is payed for a validator such validator can't claim the payout of
       * previous era.
       * WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
       * # <weight>
       * - Time complexity: O(1).
       * - Contains a limited number of reads and writes.
       * # </weight>
       **/
      payoutValidator: AugmentedSubmittable<(era: EraIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove all data structure concerning a staker/stash once its balance is zero.
       * This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
       * and the target `stash` must have no funds left.
       * This can be called from any origin.
       * - `stash`: The stash account to reap. Its balance must be zero.
       **/
      reapStash: AugmentedSubmittable<(stash: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Rebond a portion of the stash scheduled to be unlocked.
       * The dispatch origin must be signed by the controller, and it can be only called when
       * [`EraElectionStatus`] is `Closed`.
       * # <weight>
       * - Time complexity: O(1). Bounded by `MAX_UNLOCKING_CHUNKS`.
       * - Storage changes: Can't increase storage, only decrease it.
       * # </weight>
       **/
      rebond: AugmentedSubmittable<(value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * (Re-)set the controller of a stash.
       * Effects will be felt at the beginning of the next era.
       * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
       * # <weight>
       * - Independent of the arguments. Insignificant complexity.
       * - Contains a limited number of reads.
       * - Writes are limited to the `origin` account key.
       * # </weight>
       **/
      setController: AugmentedSubmittable<(controller: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set history_depth value.
       * Origin must be root.
       **/
      setHistoryDepth: AugmentedSubmittable<(newHistoryDepth: Compact<EraIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the validators who cannot be slashed (if any).
       **/
      setInvulnerables: AugmentedSubmittable<(validators: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * (Re-)set the payment target for a controller.
       * Effects will be felt at the beginning of the next era.
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * # <weight>
       * - Independent of the arguments. Insignificant complexity.
       * - Contains a limited number of reads.
       * - Writes are limited to the `origin` account key.
       * # </weight>
       **/
      setPayee: AugmentedSubmittable<(payee: RewardDestination | 'Staked'|'Stash'|'Controller' | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * The ideal number of validators.
       **/
      setValidatorCount: AugmentedSubmittable<(updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Submit a phragmen result to the chain. If the solution:
       * 1. is valid.
       * 2. has a better score than a potentially existing solution on chain.
       * then, it will be _put_ on chain.
       * A solution consists of two pieces of data:
       * 1. `winners`: a flat vector of all the winners of the round.
       * 2. `assignments`: the compact version of an assignment vector that encodes the edge
       * weights.
       * Both of which may be computed using [`phragmen`], or any other algorithm.
       * Additionally, the submitter must provide:
       * - The `score` that they claim their solution has.
       * Both validators and nominators will be represented by indices in the solution. The
       * indices should respect the corresponding types ([`ValidatorIndex`] and
       * [`NominatorIndex`]). Moreover, they should be valid when used to index into
       * [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
       * solution to be rejected. These two storage items are set during the election window and
       * may be used to determine the indices.
       * A solution is valid if:
       * 0. It is submitted when [`EraElectionStatus`] is `Open`.
       * 1. Its claimed score is equal to the score computed on-chain.
       * 2. Presents the correct number of winners.
       * 3. All indexes must be value according to the snapshot vectors. All edge values must
       * also be correct and should not overflow the granularity of the ratio type (i.e. 256
       * or billion).
       * 4. For each edge, all targets are actually nominated by the voter.
       * 5. Has correct self-votes.
       * A solutions score is consisted of 3 parameters:
       * 1. `min { support.total }` for each support of a winner. This value should be maximized.
       * 2. `sum { support.total }` for each support of a winner. This value should be minimized.
       * 3. `sum { support.total^2 }` for each support of a winner. This value should be
       * minimized (to ensure less variance)
       * # <weight>
       * E: number of edges. m: size of winner committee. n: number of nominators. d: edge degree
       * (16 for now) v: number of on-chain validator candidates.
       * NOTE: given a solution which is reduced, we can enable a new check the ensure `|E| < n +
       * m`. We don't do this _yet_, but our offchain worker code executes it nonetheless.
       * major steps (all done in `check_and_replace_solution`):
       * - Storage: O(1) read `ElectionStatus`.
       * - Storage: O(1) read `PhragmenScore`.
       * - Storage: O(1) read `ValidatorCount`.
       * - Storage: O(1) length read from `SnapshotValidators`.
       * - Storage: O(v) reads of `AccountId` to fetch `snapshot_validators`.
       * - Memory: O(m) iterations to map winner index to validator id.
       * - Storage: O(n) reads `AccountId` to fetch `snapshot_nominators`.
       * - Memory: O(n + m) reads to map index to `AccountId` for un-compact.
       * - Storage: O(e) accountid reads from `Nomination` to read correct nominations.
       * - Storage: O(e) calls into `slashable_balance_of_vote_weight` to convert ratio to staked.
       * - Memory: build_support_map. O(e).
       * - Memory: evaluate_support: O(E).
       * - Storage: O(e) writes to `QueuedElected`.
       * - Storage: O(1) write to `QueuedScore`
       * The weight of this call is 1/10th of the blocks total weight.
       * # </weight>
       **/
      submitElectionSolution: AugmentedSubmittable<(winners: Vec<ValidatorIndex> | (ValidatorIndex | AnyNumber | Uint8Array)[], compactAssignments: CompactAssignments | { votes1?: any; votes2?: any; votes3?: any; votes4?: any; votes5?: any; votes6?: any; votes7?: any; votes8?: any; votes9?: any; votes10?: any; votes11?: any; votes12?: any; votes13?: any; votes14?: any; votes15?: any; votes16?: any } | string | Uint8Array, score: PhragmenScore, era: EraIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Unsigned version of `submit_election_solution`.
       * Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
       * from the local node to be included. In other words, only the block author can include a
       * transaction in the block.
       **/
      submitElectionSolutionUnsigned: AugmentedSubmittable<(winners: Vec<ValidatorIndex> | (ValidatorIndex | AnyNumber | Uint8Array)[], compactAssignments: CompactAssignments | { votes1?: any; votes2?: any; votes3?: any; votes4?: any; votes5?: any; votes6?: any; votes7?: any; votes8?: any; votes9?: any; votes10?: any; votes11?: any; votes12?: any; votes13?: any; votes14?: any; votes15?: any; votes16?: any } | string | Uint8Array, score: PhragmenScore, era: EraIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
       * period ends. If this leaves an amount actively bonded less than
       * T::Currency::minimum_balance(), then it is increased to the full amount.
       * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
       * the funds out of management ready for transfer.
       * No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
       * can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
       * to be called first to remove some of the chunks (if possible).
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * Emits `Unbonded`.
       * See also [`Call::withdraw_unbonded`].
       * # <weight>
       * - Independent of the arguments. Limited but potentially exploitable complexity.
       * - Contains a limited number of reads.
       * - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
       * will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
       * The only way to clean the aforementioned storage item is also user-controlled via
       * `withdraw_unbonded`.
       * - One DB entry.
       * </weight>
       **/
      unbond: AugmentedSubmittable<(value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Declare the desire to validate for the origin controller.
       * Effects will be felt at the beginning of the next era.
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * # <weight>
       * - Independent of the arguments. Insignificant complexity.
       * - Contains a limited number of reads.
       * - Writes are limited to the `origin` account key.
       * # </weight>
       **/
      validate: AugmentedSubmittable<(prefs: ValidatorPrefs | { commission?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove any unlocked chunks from the `unlocking` queue from our management.
       * This essentially frees up that balance to be used by the stash account to do
       * whatever it wants.
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * Emits `Withdrawn`.
       * See also [`Call::unbond`].
       * # <weight>
       * - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
       * It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
       * indirectly user-controlled. See [`unbond`] for more detail.
       * - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
       * - Writes are limited to the `origin` account key.
       * # </weight>
       **/
      withdrawUnbonded: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
    };
    sudo: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
       * The dispatch origin for this call must be _Signed_.
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * The dispatch origin for this call must be _Signed_.
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * The dispatch origin for this call must be _Signed_.
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    system: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * A dispatch that will fill the block weight up to the given ratio.
       **/
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * # <weight>
       * - `O(P)` where `P` amount of keys with prefix `prefix`
       * - `P` storage deletions.
       * # </weight>
       **/
      killPrefix: AugmentedSubmittable<(prefix: Key | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Kill some items from storage.
       * # <weight>
       * - `O(VK)` where `V` length of `keys` and `K` length of one key
       * - `V` storage deletions.
       * # </weight>
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Make some on-chain remark.
       * # <weight>
       * - `O(1)`
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the new changes trie configuration.
       * # <weight>
       * - `O(D)` where `D` length of `Digest`
       * - 1 storage write or delete (codec `O(1)`).
       * - 1 call to `deposit_log`: `O(D)` (which depends on the length of `Digest`)
       * # </weight>
       **/
      setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the new runtime code.
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 storage write (codec `O(C)`).
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
       * - 1 event.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 event.
       * # </weight>
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       * # <weight>
       * - `O(1)`
       * - 1 storage write.
       * # </weight>
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set some items of storage.
       * # <weight>
       * - `O(I)` where `I` length of `items`
       * - `I` storage writes (`O(1)`).
       * # </weight>
       **/
      setStorage: AugmentedSubmittable<(items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Kill the sending account, assuming there are no references outstanding and the composite
       * data is equal to its default value.
       * # <weight>
       * - `O(K)` with `K` being complexity of `on_killed_account`
       * - 1 storage read and deletion.
       * - 1 call to `on_killed_account` callback with unknown complexity `K`
       * - 1 event.
       * # </weight>
       **/
      suicide: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
    };
    technicalCommittee: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * May be called by any signed account after the voting duration has ended in order to
       * finish voting and close the proposal.
       * Abstentions are counted as rejections unless there is a prime member set and the prime
       * member cast an approval.
       * - the weight of `proposal` preimage.
       * - up to three events deposited.
       * - one read, two removals, one mutation. (plus three static reads.)
       * - computation and i/o `O(P + L + M)` where:
       * - `M` is number of members,
       * - `P` is number of active proposals,
       * - `L` is the encoded length of `proposal` preimage.
       **/
      close: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * Origin must be a member of the collective.
       **/
      execute: AugmentedSubmittable<(proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * # <weight>
       * - Bounded storage reads and writes.
       * - Argument `threshold` has bearing on weight.
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the collective's membership.
       * - `new_members`: The new member list. Be nice to the chain and
       * - `prime`: The prime member whose vote sets the default.
       * Requires root origin.
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[], prime: Option<AccountId> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * # <weight>
       * - Bounded storage read and writes.
       * - Will be slightly heavier if the proposal is approved / disapproved after the vote.
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    technicalMembership: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Add a member `who` to the set.
       * May only be called from `AddOrigin` or root.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Swap out the sending member for some other key `new`.
       * May only be called from `Signed` origin of a current member.
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove the prime member if it exists.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a member `who` from the set.
       * May only be called from `RemoveOrigin` or root.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * May only be called from `ResetOrigin` or root.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the prime member. Must be a current member.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Swap out one member `remove` for another `add`.
       * May only be called from `SwapOrigin` or root.
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    timestamp: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Set the current time.
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * The dispatch origin for this call must be `Inherent`.
       * # <weight>
       * - `O(T)` where `T` complexity of `on_timestamp_set`
       * - 2 storage mutations (codec `O(1)`).
       * - 1 event handler `on_timestamp_set` `O(T)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    treasury: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
       * and the original deposit will be returned.
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Close and payout a tip.
       * The dispatch origin for this call must be _Signed_.
       * The tip identified by `hash` must have finished its countdown period.
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
       * # <weight>
       * - `O(T)`
       * - One storage retrieval (codec `O(T)`) and two removals.
       * - Up to three balance operations.
       * # </weight>
       **/
      closeTip: AugmentedSubmittable<(hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Put forward a suggestion for spending. A deposit proportional to the value
       * is reserved and slashed if the proposal is rejected. It is returned once the
       * proposal is awarded.
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change, one extra DB entry.
       * # </weight>
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<BalanceOf> | AnyNumber | Uint8Array, beneficiary: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Reject a proposed spend. The original deposit will be slashed.
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB clear.
       * # </weight>
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
       * The dispatch origin for this call must be _Signed_.
       * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
       * `TipReportDepositPerByte` for each byte in `reason`.
       * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
       * a UTF-8-encoded URL.
       * - `who`: The account which should be credited for the tip.
       * Emits `NewTip` if successful.
       * # <weight>
       * - `O(R)` where `R` length of `reason`.
       * - One balance operation.
       * - One storage mutation (codec `O(R)`).
       * - One event.
       * # </weight>
       **/
      reportAwesome: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
       * If successful, the original deposit will be unreserved.
       * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
       * must have been reported by the signing account through `report_awesome` (and not
       * through `tip_new`).
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
       * Emits `TipRetracted` if successful.
       * # <weight>
       * - `O(T)`
       * - One balance operation.
       * - Two storage removals (one read, codec `O(T)`).
       * - One event.
       * # </weight>
       **/
      retractTip: AugmentedSubmittable<(hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Declare a tip value for an already-open tip.
       * The dispatch origin for this call must be _Signed_ and the signing account must be a
       * member of the `Tippers` set.
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
       * account ID.
       * - `tip_value`: The amount of tip that the sender would like to give. The median tip
       * value of active tippers will be given to the `who`.
       * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
       * has started.
       * # <weight>
       * - `O(T)`
       * - One storage mutation (codec `O(T)`), one storage read `O(1)`.
       * - Up to one event.
       * # </weight>
       **/
      tip: AugmentedSubmittable<(hash: Hash | string | Uint8Array, tipValue: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Give a tip for something new; no finder's fee will be taken.
       * The dispatch origin for this call must be _Signed_ and the signing account must be a
       * member of the `Tippers` set.
       * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
       * a UTF-8-encoded URL.
       * - `who`: The account which should be credited for the tip.
       * - `tip_value`: The amount of tip that the sender would like to give. The median tip
       * value of active tippers will be given to the `who`.
       * Emits `NewTip` if successful.
       * # <weight>
       * - `O(R + T)` where `R` length of `reason`, `T` is the number of tippers. `T` is
       * naturally capped as a membership set, `R` is limited through transaction-size.
       * - Two storage insertions (codecs `O(R)`, `O(T)`), one read `O(1)`.
       * - One event.
       * # </weight>
       **/
      tipNew: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId | string | Uint8Array, tipValue: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    utility: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * The dispatch origin for this call must be _Signed_.
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call_hash`: The hash of the call to be executed.
       * NOTE: If this is the final approval, you will want to use `as_multi` instead.
       * # <weight>
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `MultisigDepositBase + threshold * MultisigDepositFactor`.
       * # </weight>
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * If there are enough, then dispatch the call.
       * Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * The dispatch origin for this call must be _Signed_.
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call`: The call to be executed.
       * NOTE: Unless this is the final approval, you will generally want to use
       * `approve_as_multi` instead, since it only requires a hash of the call.
       * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
       * on success, result is `Ok` and the result from the interior call, if it was executed,
       * may be found in the deposited `MultisigExecuted` event.
       * # <weight>
       * - `O(S + Z + Call)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `MultisigDepositBase + threshold * MultisigDepositFactor`.
       * # </weight>
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Send a call through an indexed pseudonym of the sender.
       * The dispatch origin for this call must be _Signed_.
       * # <weight>
       * - The weight of the `call` + 10,000.
       * # </weight>
       **/
      asSub: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Send a batch of dispatch calls.
       * This will execute until the first one fails and then stop.
       * May be called from any origin.
       * - `calls`: The calls to be dispatched from the same origin.
       * # <weight>
       * - The sum of the weights of the `calls`.
       * - One event.
       * # </weight>
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
       * for this operation will be unreserved on success.
       * The dispatch origin for this call must be _Signed_.
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `timepoint`: The timepoint (block number and transaction index) of the first approval
       * transaction for this dispatch.
       * - `call_hash`: The hash of the call to be executed.
       * # <weight>
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       * # </weight>
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], timepoint: Timepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    vesting: {
      [index: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Unlock any vested funds of the sender account.
       * The dispatch origin for this call must be _Signed_ and the sender must have funds still
       * locked under this module.
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * # <weight>
       * - `O(1)`.
       * - One balance-lock operation.
       * - One storage read (codec `O(1)`) and up to one removal.
       * - One event.
       * # </weight>
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Unlock any vested funds of a `target` account.
       * The dispatch origin for this call must be _Signed_.
       * - `target`: The account whose vested funds should be unlocked. Must have funds still
       * locked under this module.
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * # <weight>
       * - `O(1)`.
       * - Up to one account lookup.
       * - One balance-lock operation.
       * - One storage read (codec `O(1)`) and up to one removal.
       * - One event.
       * # </weight>
       **/
      vestOther: AugmentedSubmittable<(target: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Create a vested transfer.
       * The dispatch origin for this call must be _Signed_.
       * - `target`: The account that should be transferred the vested funds.
       * - `amount`: The amount of funds to transfer and will be vested.
       * - `schedule`: The vesting schedule attached to the transfer.
       * Emits `VestingCreated`.
       * # <weight>
       * - Creates a new storage entry, but is protected by a minimum transfer
       * amount needed to succeed.
       * # </weight>
       **/
      vestedTransfer: AugmentedSubmittable<(target: LookupSource | Address | AccountId | AccountIndex | string | Uint8Array, schedule: VestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
    [index: string]: SubmittableModuleExtrinsics<ApiType>;
  }
}
