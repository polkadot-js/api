// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { AnyNumber, ITuple } from '@polkadot/types/types';
import { Option, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, Data, bool, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Hash, Index, KeyTypeId, Moment, Perbill, ValidatorId, Weight } from '@polkadot/types/interfaces/runtime';
import { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import { BabeAuthorityWeight, MaybeVrf } from '@polkadot/types/interfaces/babe';
import { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { CodeHash, ContractInfo, Gas, PrefabWasmModule, Schedule } from '@polkadot/types/interfaces/contracts';
import { Conviction, PropIndex, Proposal, ReferendumIndex, ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { Vote, VoteThreshold } from '@polkadot/types/interfaces/elections';
import { AuthorityList, SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { RegistrarInfo, Registration } from '@polkadot/types/interfaces/identity';
import { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import { Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import { ActiveRecovery, RecoveryConfig } from '@polkadot/types/interfaces/recovery';
import { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import { Bid, BidKind, SocietyVote, StrikeCount, VouchingStatus } from '@polkadot/types/interfaces/society';
import { EraIndex, EraPoints, Exposure, Forcing, MomentOf, Nominations, RewardDestination, SlashingSpans, SpanIndex, SpanRecord, StakingLedger, UnappliedSlash, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { DigestOf, EventIndex, EventRecord } from '@polkadot/types/interfaces/system';
import { OpenTip, TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import { Multiplier } from '@polkadot/types/interfaces/txpayment';
import { Multisig } from '@polkadot/types/interfaces/utility';
import { VestingInfo } from '@polkadot/types/interfaces/vesting';
import { Observable } from 'rxjs';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    system: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Index, AccountData]>>> & QueryableStorageEntry<ApiType>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      /**
       * Total weight for all extrinsics put together, for the current block.
       **/
      allExtrinsicsWeight: AugmentedQuery<ApiType, () => Observable<Option<Weight>>> & QueryableStorageEntry<ApiType>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      /**
       * Extrinsics root of the current block, also part of the block header.
       **/
      extrinsicsRoot: AugmentedQuery<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>> & QueryableStorageEntry<ApiType>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>> & QueryableStorageEntry<ApiType>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>> & QueryableStorageEntry<ApiType>;
    };
    utility: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: U8aFixed | string | Uint8Array) => Observable<Option<Multisig>>, AccountId | string | Uint8Array> & QueryableStorageEntry<ApiType>;
    };
    babe: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * Current epoch index.
       **/
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * Current epoch authorities.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * The slot at which the first epoch actually started. This is 0
       * until the first block of the chain.
       **/
      genesisSlot: AugmentedQuery<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * Current slot number.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * The epoch randomness for the *current* epoch.
       * # Security
       * This MUST NOT be used for gambling, as it can be influenced by a
       * malicious validator in the short term. It MAY be used in many
       * cryptographic protocols, however, so long as one remembers that this
       * (like everything else on-chain) it is public. For example, it can be
       * used where a number is needed that cannot have been chosen by an
       * adversary, for purposes such as public-coin zero-knowledge proofs.
       **/
      randomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>> & QueryableStorageEntry<ApiType>;
      /**
       * Next epoch randomness.
       **/
      nextRandomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>> & QueryableStorageEntry<ApiType>;
      /**
       * Randomness under construction.
       * We make a tradeoff between storage accesses and list length.
       * We store the under-construction randomness in segments of up to
       * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
       * Once a segment reaches this length, we begin the next one.
       * We reset all segments and return to `0` at the beginning of every
       * epoch.
       **/
      segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      underConstruction: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<U8aFixed>>> & QueryableStorageEntry<ApiType>;
      /**
       * Temporary value (cleared at block finalization) which is `Some`
       * if per-block initialization has already been called for current block.
       **/
      initialized: AugmentedQuery<ApiType, () => Observable<Option<MaybeVrf>>> & QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>> & QueryableStorageEntry<ApiType>;
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    authorship: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<UncleEntryItem>>> & QueryableStorageEntry<ApiType>;
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    indices: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<ApiType, (arg: AccountIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
    };
    balances: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      /**
       * The balance of an account.
       * NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
       * is ever zero, then the entry *MUST* be removed.
       * NOTE: This is only used in the case that this module is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>> & QueryableStorageEntry<ApiType>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>> & QueryableStorageEntry<ApiType>;
      /**
       * True if network has been upgraded to this version.
       * True for new networks.
       **/
      isUpgraded: AugmentedQuery<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      [index: string]: QueryableStorageEntry<ApiType>;
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>> & QueryableStorageEntry<ApiType>;
    };
    staking: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The ideal number of staking participants.
       **/
      validatorCount: AugmentedQuery<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * Minimum number of staking participants before emergency conditions are imposed.
       **/
      minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
       * easy to initialize and the performance hit is minimal (we expect no more than four
       * invulnerables) and restricted to testnets.
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * Map from all locked "stash" accounts to the controller account.
       **/
      bonded: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * Map from all (unlocked) "controller" accounts to the info regarding the staking.
       **/
      ledger: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<StakingLedger>>> & QueryableStorageEntry<ApiType>;
      /**
       * Where the reward payment should be made. Keyed by stash.
       **/
      payee: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<RewardDestination>> & QueryableStorageEntry<ApiType>;
      /**
       * The map from (wannabe) validator stash key to the preferences of that validator.
       **/
      validators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ValidatorPrefs>> & QueryableStorageEntry<ApiType>;
      /**
       * The map from nominator stash key to the set of stash keys of all validators to nominate.
       * NOTE: is private so that we can ensure upgraded before all typical accesses.
       * Direct storage APIs can still bypass this protection.
       **/
      nominators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Nominations>>> & QueryableStorageEntry<ApiType>;
      /**
       * Nominators for a particular account that is in action right now. You can't iterate
       * through validators here, but you can find them in the Session module.
       * This is keyed by the stash account.
       **/
      stakers: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Exposure>> & QueryableStorageEntry<ApiType>;
      /**
       * The currently elected validator set keyed by stash account ID.
       **/
      currentElected: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * The current era index.
       **/
      currentEra: AugmentedQuery<ApiType, () => Observable<EraIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * The start of the current era.
       **/
      currentEraStart: AugmentedQuery<ApiType, () => Observable<MomentOf>> & QueryableStorageEntry<ApiType>;
      /**
       * The session index at which the current era started.
       **/
      currentEraStartSessionIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * Rewards for the current era. Using indices of current elected set.
       **/
      currentEraPointsEarned: AugmentedQuery<ApiType, () => Observable<EraPoints>> & QueryableStorageEntry<ApiType>;
      /**
       * The amount of balance actively at stake for each validator slot, currently.
       * This is used to derive rewards and punishments.
       **/
      slotStake: AugmentedQuery<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      /**
       * True if the next session change will be a new era regardless of index.
       **/
      forceEra: AugmentedQuery<ApiType, () => Observable<Forcing>> & QueryableStorageEntry<ApiType>;
      /**
       * The percentage of the slash that is distributed to reporters.
       * The rest of the slashed value is handled by the `Slash`.
       **/
      slashRewardFraction: AugmentedQuery<ApiType, () => Observable<Perbill>> & QueryableStorageEntry<ApiType>;
      /**
       * The amount of currency given to reporters of a slash event which was
       * canceled by extraordinary circumstances (e.g. governance).
       **/
      canceledSlashPayout: AugmentedQuery<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      /**
       * All unapplied slashes that are queued for later.
       **/
      unappliedSlashes: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Vec<UnappliedSlash>>> & QueryableStorageEntry<ApiType>;
      /**
       * A mapping from still-bonded eras to the first session index of that era.
       **/
      bondedEras: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[EraIndex, SessionIndex]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * All slashing events on validators, mapped by era to the highest slash proportion
       * and slash value of the era.
       **/
      validatorSlashInEra: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<ITuple<[Perbill, BalanceOf]>>>, EraIndex | AnyNumber | Uint8Array> & QueryableStorageEntry<ApiType>;
      /**
       * All slashing events on nominators, mapped by era to the highest slash value of the era.
       **/
      nominatorSlashInEra: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<BalanceOf>>, EraIndex | AnyNumber | Uint8Array> & QueryableStorageEntry<ApiType>;
      /**
       * Slashing spans for stash accounts.
       **/
      slashingSpans: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<SlashingSpans>>> & QueryableStorageEntry<ApiType>;
      /**
       * Records information about the maximum slash of a stash within a slashing span,
       * as well as how much reward has been paid out.
       **/
      spanSlash: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, SpanIndex]>) => Observable<SpanRecord>> & QueryableStorageEntry<ApiType>;
      /**
       * The earliest era for which we have a pending, unapplied slash.
       **/
      earliestUnappliedSlash: AugmentedQuery<ApiType, () => Observable<Option<EraIndex>>> & QueryableStorageEntry<ApiType>;
    };
    session: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>> & QueryableStorageEntry<ApiType>;
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * Indices of disabled validators.
       * The set is cleared when `on_session_ending` returns a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>> & QueryableStorageEntry<ApiType>;
      /**
       * The next session keys for a validator.
       * The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
       * the trie. Having all data in the same branch should prevent slowing down other queries.
       **/
      nextKeys: AugmentedQueryDoubleMap<ApiType, (key1: Bytes | string | Uint8Array, key2: ValidatorId | string | Uint8Array) => Observable<Option<Keys>>, Bytes | string | Uint8Array> & QueryableStorageEntry<ApiType>;
      /**
       * The owner of a key. The second key is the `KeyTypeId` + the encoded key.
       * The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
       * the trie. Having all data in the same branch should prevent slowing down other queries.
       **/
      keyOwner: AugmentedQueryDoubleMap<ApiType, (key1: Bytes | string | Uint8Array, key2: ITuple<[KeyTypeId, Bytes]>) => Observable<Option<ValidatorId>>, Bytes | string | Uint8Array> & QueryableStorageEntry<ApiType>;
    };
    democracy: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<PropIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * The public proposals. Unsorted. The second item is the proposal's hash.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[PropIndex, Hash, AccountId]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * Map of hashes to the proposal preimage, along with who registered it and their deposit.
       * The block number is the block at which it was deposited.
       **/
      preimages: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[Bytes, AccountId, BalanceOf, BlockNumber]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * Those who have locked a deposit.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: PropIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[BalanceOf, Vec<AccountId>]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * Information concerning any given referendum.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: ReferendumIndex | AnyNumber | Uint8Array) => Observable<Option<ReferendumInfo>>> & QueryableStorageEntry<ApiType>;
      /**
       * Queue of successful referenda to be dispatched. Stored ordered by block number.
       **/
      dispatchQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[BlockNumber, Hash, ReferendumIndex]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * Get the voters for the current proposal.
       **/
      votersFor: AugmentedQuery<ApiType, (arg: ReferendumIndex | AnyNumber | Uint8Array) => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * Get the vote in a given referendum of a particular voter. The result is meaningful only
       * if `voters_for` includes the voter when called with the referendum (you'll get the
       * default `Vote` value otherwise). If you don't want to check `voters_for`, then you can
       * also check for simple existence with `VoteOf::contains_key` first.
       **/
      voteOf: AugmentedQuery<ApiType, (arg: ITuple<[ReferendumIndex, AccountId]>) => Observable<Vote>> & QueryableStorageEntry<ApiType>;
      /**
       * Who is able to vote for whom. Value is the fund-holding account, key is the
       * vote-transaction-sending account.
       **/
      proxy: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * Get the account (and lock periods) to which another account is delegating vote.
       **/
      delegations: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[AccountId, Conviction]>>> & QueryableStorageEntry<ApiType>;
      /**
       * Accounts for which there are locks in action which may be removed at some point in the
       * future. The value is the block number at which the lock expires and may be removed.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<BlockNumber>>> & QueryableStorageEntry<ApiType>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[Hash, VoteThreshold]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[BlockNumber, Vec<AccountId>]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    council: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>> & QueryableStorageEntry<ApiType>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    technicalCommittee: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>> & QueryableStorageEntry<ApiType>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    elections: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The current elected membership. Sorted based on account id.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * The current runners_up. Sorted based on low to high merit (worse to best runner).
       **/
      runnersUp: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * The total number of vote rounds that have happened, excluding the upcoming one.
       **/
      electionRounds: AugmentedQuery<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * Votes of a particular voter, with the round index of the votes.
       **/
      votesOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * Locked stake of a voter.
       **/
      stakeOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      /**
       * The present candidate list. Sorted based on account-id. A current member or a runner can
       * never enter this vector and is always implicitly assumed to be a candidate.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    technicalMembership: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * DEPRECATED
       * This used to store the current authority set, which has been migrated to the well-known
       * GRANDPA_AUTHORITES_KEY unhashed key.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<AuthorityList>> & QueryableStorageEntry<ApiType>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<StoredState>> & QueryableStorageEntry<ApiType>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<StoredPendingChange>>> & QueryableStorageEntry<ApiType>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<BlockNumber>>> & QueryableStorageEntry<ApiType>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<SetId>> & QueryableStorageEntry<ApiType>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: SetId | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>> & QueryableStorageEntry<ApiType>;
    };
    treasury: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<ProposalIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: ProposalIndex | AnyNumber | Uint8Array) => Observable<Option<TreasuryProposal>>> & QueryableStorageEntry<ApiType>;
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<ProposalIndex>>> & QueryableStorageEntry<ApiType>;
      /**
       * Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
       * This has the insecure enumerable hash function since the key itself is already
       * guaranteed to be a secure hash.
       **/
      tips: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<OpenTip>>> & QueryableStorageEntry<ApiType>;
      /**
       * Simple preimage lookup from the reason's hash to the original data. Again, has an
       * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
       **/
      reasons: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
    };
    contracts: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * Gas spent so far in this block.
       **/
      gasSpent: AugmentedQuery<ApiType, () => Observable<Gas>> & QueryableStorageEntry<ApiType>;
      /**
       * Current cost schedule for contracts.
       **/
      currentSchedule: AugmentedQuery<ApiType, () => Observable<Schedule>> & QueryableStorageEntry<ApiType>;
      /**
       * A mapping from an original code hash to the original code, untouched by instrumentation.
       **/
      pristineCode: AugmentedQuery<ApiType, (arg: CodeHash | string | Uint8Array) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
      /**
       * A mapping between an original code hash and instrumented wasm code, ready for execution.
       **/
      codeStorage: AugmentedQuery<ApiType, (arg: CodeHash | string | Uint8Array) => Observable<Option<PrefabWasmModule>>> & QueryableStorageEntry<ApiType>;
      /**
       * The subtrie counter.
       **/
      accountCounter: AugmentedQuery<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      /**
       * The code associated with a given account.
       **/
      contractInfoOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ContractInfo>>> & QueryableStorageEntry<ApiType>;
      /**
       * The price of one unit of gas.
       **/
      gasPrice: AugmentedQuery<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
    };
    sudo: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
    };
    imOnline: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The block number after which it's ok to send heartbeats in current session.
       * At the beginning of each session we set this to a value that should
       * fall roughly in the middle of the session duration.
       * The idea is to first wait for the validators to produce a block
       * in the current session, so that the heartbeat later on will not be necessary.
       **/
      heartbeatAfter: AugmentedQuery<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      /**
       * The current set of keys that may issue a heartbeat.
       **/
      keys: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>> & QueryableStorageEntry<ApiType>;
      /**
       * For each session index, we keep a mapping of `AuthIndex`
       * to `offchain::OpaqueNetworkState`.
       **/
      receivedHeartbeats: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: AuthIndex | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, SessionIndex | AnyNumber | Uint8Array> & QueryableStorageEntry<ApiType>;
      /**
       * For each session index, we keep a mapping of `T::ValidatorId` to the
       * number of blocks authored by the given authority.
       **/
      authoredBlocks: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: ValidatorId | string | Uint8Array) => Observable<u32>, SessionIndex | AnyNumber | Uint8Array> & QueryableStorageEntry<ApiType>;
    };
    offences: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The primary structure that holds all offence records keyed by report identifiers.
       **/
      reports: AugmentedQuery<ApiType, (arg: ReportIdOf | string | Uint8Array) => Observable<Option<OffenceDetails>>> & QueryableStorageEntry<ApiType>;
      /**
       * A vector of reports of the same kind that happened at the same time slot.
       **/
      concurrentReportsIndex: AugmentedQueryDoubleMap<ApiType, (key1: Kind | string | Uint8Array, key2: OpaqueTimeSlot | string | Uint8Array) => Observable<Vec<ReportIdOf>>, Kind | string | Uint8Array> & QueryableStorageEntry<ApiType>;
      /**
       * Enumerates all reports of a kind along with the time they happened.
       * All reports are sorted by the time of offence.
       * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
       * different types are not supported at the moment so we are doing the manual serialization.
       **/
      reportsByKindIndex: AugmentedQuery<ApiType, (arg: Kind | string | Uint8Array) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
    };
    randomnessCollectiveFlip: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
    };
    identity: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * Information that is pertinent to identify the entity behind an account.
       **/
      identityOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Registration>>> & QueryableStorageEntry<ApiType>;
      /**
       * The super-identity of an alternative "sub" identity together with its name, within that
       * context. If the account is not some other account's sub-identity, then just `None`.
       **/
      superOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[AccountId, Data]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * Alternative "sub" identities of this account.
       * The first item is the deposit, the second is a vector of the accounts.
       **/
      subsOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[BalanceOf, Vec<AccountId>]>>> & QueryableStorageEntry<ApiType>;
      /**
       * The set of registrars. Not expected to get very big as can only be added through a
       * special origin (likely a council motion).
       * The index into this can be cast to `RegistrarIndex` to get a valid value.
       **/
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<RegistrarInfo>>>> & QueryableStorageEntry<ApiType>;
    };
    society: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The first member.
       **/
      founder: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * A hash of the rules of this society concerning membership. Can only be set once and
       * only by the founder.
       **/
      rules: AugmentedQuery<ApiType, () => Observable<Option<Hash>>> & QueryableStorageEntry<ApiType>;
      /**
       * The current set of candidates; bidders that are attempting to become members.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<Bid>>> & QueryableStorageEntry<ApiType>;
      /**
       * The set of suspended candidates.
       **/
      suspendedCandidates: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[BalanceOf, BidKind]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * Amount of our account balance that is specifically for the next round's bid(s).
       **/
      pot: AugmentedQuery<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      /**
       * The most primary from the most recently approved members.
       **/
      head: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * The current set of members, ordered.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * The set of suspended members.
       **/
      suspendedMembers: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * The current bids, stored ordered by the value of the bid.
       **/
      bids: AugmentedQuery<ApiType, () => Observable<Vec<Bid>>> & QueryableStorageEntry<ApiType>;
      /**
       * Members currently vouching or banned from vouching again
       **/
      vouching: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<VouchingStatus>>> & QueryableStorageEntry<ApiType>;
      /**
       * Pending payouts; ordered by block number, with the amount that should be paid out.
       **/
      payouts: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * The ongoing number of losing votes cast by the member.
       **/
      strikes: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<StrikeCount>> & QueryableStorageEntry<ApiType>;
      /**
       * Double map from Candidate -> Voter -> (Maybe) Vote.
       **/
      votes: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<SocietyVote>>, AccountId | string | Uint8Array> & QueryableStorageEntry<ApiType>;
      /**
       * The defending member currently being challenged.
       **/
      defender: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * Votes for the defender.
       **/
      defenderVotes: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<SocietyVote>>> & QueryableStorageEntry<ApiType>;
      /**
       * The max number of members for the society at one time.
       **/
      maxMembers: AugmentedQuery<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
    };
    recovery: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * The set of recoverable accounts and their recovery configuration.
       **/
      recoverable: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<RecoveryConfig>>> & QueryableStorageEntry<ApiType>;
      /**
       * Active recovery attempts.
       * First account is the account to be recovered, and the second account
       * is the user trying to recover the account.
       **/
      activeRecoveries: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<ActiveRecovery>>, AccountId | string | Uint8Array> & QueryableStorageEntry<ApiType>;
      /**
       * The final list of recovered accounts.
       * Map from the recovered account to the user who can access it.
       **/
      recovered: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    vesting: {
      [index: string]: QueryableStorageEntry<ApiType>;
      /**
       * Information regarding the vesting of a given account.
       **/
      vesting: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<VestingInfo>>> & QueryableStorageEntry<ApiType>;
    };
  }
}
