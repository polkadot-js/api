// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, Vec, bool, u16, u32 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { PropIndex, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { RegistrarIndex } from '@polkadot/types/interfaces/identity';
import type { Kind, OpaqueTimeSlot } from '@polkadot/types/interfaces/offences';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId, AccountIndex, AssetId, Balance, BlockNumber, CallHash, Hash, PhantomData } from '@polkadot/types/interfaces/runtime';
import type { TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { IdentificationTuple, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ElectionCompute, EraIndex } from '@polkadot/types/interfaces/staking';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { BountyIndex } from '@polkadot/types/interfaces/treasury';
import type { Timepoint } from '@polkadot/types/interfaces/utility';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    assets: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Some assets were destroyed. \[asset_id, owner, balance\]
       **/
      burned: AugmentedEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * Some asset class was created. \[asset_id, creator, owner\]
       **/
      created: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId]>;
      /**
       * An asset class was destroyed.
       **/
      destroyed: AugmentedEvent<ApiType, [AssetId]>;
      /**
       * Some asset class was force-created. \[asset_id, owner\]
       **/
      forceCreated: AugmentedEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets was transferred by an admin. \[asset_id, from, to, amount\]
       **/
      forceTransferred: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId, Balance]>;
      /**
       * Some account `who` was frozen. \[asset_id, who\]
       **/
      frozen: AugmentedEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets were issued. \[asset_id, owner, total_supply\]
       **/
      issued: AugmentedEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * The maximum amount of zombies allowed has changed. \[asset_id, max_zombies\]
       **/
      maxZombiesChanged: AugmentedEvent<ApiType, [AssetId, u32]>;
      /**
       * The owner changed \[asset_id, owner\]
       **/
      ownerChanged: AugmentedEvent<ApiType, [AssetId, AccountId]>;
      /**
       * The management team changed \[asset_id, issuer, admin, freezer\]
       **/
      teamChanged: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId, AccountId]>;
      /**
       * Some account `who` was thawed. \[asset_id, who\]
       **/
      thawed: AugmentedEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets were transferred. \[asset_id, from, to, amount\]
       **/
      transferred: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId, Balance]>;
    };
    balances: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      balanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      dustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      reserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    bounties: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A bounty is awarded to a beneficiary. \[index, beneficiary\]
       **/
      bountyAwarded: AugmentedEvent<ApiType, [BountyIndex, AccountId]>;
      /**
       * A bounty proposal is funded and became active. \[index\]
       **/
      bountyBecameActive: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is cancelled. \[index\]
       **/
      bountyCanceled: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
       **/
      bountyClaimed: AugmentedEvent<ApiType, [BountyIndex, Balance, AccountId]>;
      /**
       * A bounty expiry is extended. \[index\]
       **/
      bountyExtended: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * New bounty proposal. \[index\]
       **/
      bountyProposed: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty proposal was rejected; funds were slashed. \[index, bond\]
       **/
      bountyRejected: AugmentedEvent<ApiType, [BountyIndex, Balance]>;
    };
    contracts: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Code with the specified hash has been stored.
       * \[code_hash\]
       **/
      codeStored: AugmentedEvent<ApiType, [Hash]>;
      /**
       * An event deposited upon execution of a contract from the account.
       * \[account, data\]
       **/
      contractExecution: AugmentedEvent<ApiType, [AccountId, Bytes]>;
      /**
       * Contract has been evicted and is now in tombstone state.
       * \[contract, tombstone\]
       * 
       * # Params
       * 
       * - `contract`: `AccountId`: The account ID of the evicted contract.
       * - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
       **/
      evicted: AugmentedEvent<ApiType, [AccountId, bool]>;
      /**
       * Contract deployed by address at the specified address. \[owner, contract\]
       **/
      instantiated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * Restoration for a contract has been successful.
       * \[donor, dest, code_hash, rent_allowance\]
       * 
       * # Params
       * 
       * - `donor`: `AccountId`: Account ID of the restoring contract
       * - `dest`: `AccountId`: Account ID of the restored contract
       * - `code_hash`: `Hash`: Code hash of the restored contract
       * - `rent_allowance: `Balance`: Rent allowance of the restored contract
       **/
      restored: AugmentedEvent<ApiType, [AccountId, AccountId, Hash, Balance]>;
      /**
       * Triggered when the current \[schedule\] is updated.
       **/
      scheduleUpdated: AugmentedEvent<ApiType, [u32]>;
    };
    council: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      approved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      closed: AugmentedEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      disapproved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      executed: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      memberExecuted: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      proposed: AugmentedEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      voted: AugmentedEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    democracy: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A proposal \[hash\] has been blacklisted permanently.
       **/
      blacklisted: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A referendum has been cancelled. \[ref_index\]
       **/
      cancelled: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      delegated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A proposal has been enacted. \[ref_index, is_ok\]
       **/
      executed: AugmentedEvent<ApiType, [ReferendumIndex, bool]>;
      /**
       * An external proposal has been tabled.
       **/
      externalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum. \[ref_index\]
       **/
      notPassed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal has been approved by referendum. \[ref_index\]
       **/
      passed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was invalid.
       * \[proposal_hash, ref_index\]
       **/
      preimageInvalid: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was missing.
       * \[proposal_hash, ref_index\]
       **/
      preimageMissing: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
       **/
      preimageNoted: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       * \[proposal_hash, provider, deposit, reaper\]
       **/
      preimageReaped: AugmentedEvent<ApiType, [Hash, AccountId, Balance, AccountId]>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       * \[proposal_hash, provider, deposit\]
       **/
      preimageUsed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A motion has been proposed by a public account. \[proposal_index, deposit\]
       **/
      proposed: AugmentedEvent<ApiType, [PropIndex, Balance]>;
      /**
       * A referendum has begun. \[ref_index, threshold\]
       **/
      started: AugmentedEvent<ApiType, [ReferendumIndex, VoteThreshold]>;
      /**
       * A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
       **/
      tabled: AugmentedEvent<ApiType, [PropIndex, Balance, Vec<AccountId>]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      undelegated: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An \[account\] has been unlocked successfully.
       **/
      unlocked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An external proposal has been vetoed. \[who, proposal_hash, until\]
       **/
      vetoed: AugmentedEvent<ApiType, [AccountId, Hash, BlockNumber]>;
    };
    elections: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A candidate was slashed due to failing to obtain a seat as member or runner-up
       **/
      candidateSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Internal error happened while trying to perform election.
       **/
      electionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      emptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A \[member\] has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      memberKicked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A \[member\] has renounced their candidacy.
       **/
      memberRenounced: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new term with \[new_members\]. This indicates that enough candidates existed to run the
       * election, not that enough have has been elected. The inner value must be examined for
       * this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
       * none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
       **/
      newTerm: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId, Balance]>>]>;
      /**
       * A seat holder (member or runner-up) was slashed due to failing to retaining their position.
       **/
      seatHolderSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A voter was reported with the the report being successful or not.
       * \[voter, reporter, success\]
       **/
      voterReported: AugmentedEvent<ApiType, [AccountId, AccountId, bool]>;
    };
    grandpa: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      newAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      resumed: AugmentedEvent<ApiType, []>;
    };
    identity: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A name was cleared, and the given balance returned. \[who, deposit\]
       **/
      identityCleared: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was removed and the given balance slashed. \[who, deposit\]
       **/
      identityKilled: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was set or reset (which will remove all judgements). \[who\]
       **/
      identitySet: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A judgement was given by a registrar. \[target, registrar_index\]
       **/
      judgementGiven: AugmentedEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement was asked from a registrar. \[who, registrar_index\]
       **/
      judgementRequested: AugmentedEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement request was retracted. \[who, registrar_index\]
       **/
      judgementUnrequested: AugmentedEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A registrar was added. \[registrar_index\]
       **/
      registrarAdded: AugmentedEvent<ApiType, [RegistrarIndex]>;
      /**
       * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
       **/
      subIdentityAdded: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       * \[sub, main, deposit\]
       **/
      subIdentityRemoved: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account. \[sub, main, deposit\]
       **/
      subIdentityRevoked: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
    };
    imOnline: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * At the end of the session, no offence was committed.
       **/
      allGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      heartbeatReceived: AugmentedEvent<ApiType, [AuthorityId]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      someOffline: AugmentedEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    indices: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A account index was assigned. \[index, who\]
       **/
      indexAssigned: AugmentedEvent<ApiType, [AccountId, AccountIndex]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      indexFreed: AugmentedEvent<ApiType, [AccountIndex]>;
      /**
       * A account index has been frozen to its current account ID. \[index, who\]
       **/
      indexFrozen: AugmentedEvent<ApiType, [AccountIndex, AccountId]>;
    };
    multisig: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A multisig operation has been approved by someone.
       * \[approving, timepoint, multisig, call_hash\]
       **/
      multisigApproval: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
       **/
      multisigCancelled: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
       **/
      multisigExecuted: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash, DispatchResult]>;
      /**
       * A new multisig operation has begun. \[approving, multisig, call_hash\]
       **/
      newMultisig: AugmentedEvent<ApiType, [AccountId, AccountId, CallHash]>;
    };
    offences: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes. last
       * element indicates of the offence was applied (true) or queued (false)
       * \[kind, timeslot, applied\].
       **/
      offence: AugmentedEvent<ApiType, [Kind, OpaqueTimeSlot, bool]>;
    };
    proxy: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      announced: AugmentedEvent<ApiType, [AccountId, AccountId, Hash]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
       **/
      anonymousCreated: AugmentedEvent<ApiType, [AccountId, AccountId, ProxyType, u16]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      proxyExecuted: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    recovery: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Lost account has been successfully recovered by rescuer account.
       * \[lost, rescuer\]
       **/
      accountRecovered: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A recovery process for lost account by rescuer account has been closed.
       * \[lost, rescuer\]
       **/
      recoveryClosed: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A recovery process has been set up for an \[account\].
       **/
      recoveryCreated: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A recovery process has been initiated for lost account by rescuer account.
       * \[lost, rescuer\]
       **/
      recoveryInitiated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A recovery process has been removed for an \[account\].
       **/
      recoveryRemoved: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A recovery process for lost account by rescuer account has been vouched for by sender.
       * \[lost, rescuer, sender\]
       **/
      recoveryVouched: AugmentedEvent<ApiType, [AccountId, AccountId, AccountId]>;
    };
    scheduler: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Canceled some task. \[when, index\]
       **/
      canceled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      dispatched: AugmentedEvent<ApiType, [TaskAddress, Option<Bytes>, DispatchResult]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      scheduled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
    };
    session: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      newSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    society: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A \[candidate\] was dropped (due to an excess of bids in the system).
       **/
      autoUnbid: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A membership bid just happened. The given account is the candidate's ID and their offer
       * is the second. \[candidate_id, offer\]
       **/
      bid: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A \[candidate\] has been suspended
       **/
      candidateSuspended: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A \[member\] has been challenged
       **/
      challenged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A vote has been placed for a defending member \[voter, vote\]
       **/
      defenderVote: AugmentedEvent<ApiType, [AccountId, bool]>;
      /**
       * Some funds were deposited into the society account. \[value\]
       **/
      deposit: AugmentedEvent<ApiType, [Balance]>;
      /**
       * The society is founded by the given identity. \[founder\]
       **/
      founded: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A group of candidates have been inducted. The batch's primary is the first value, the
       * batch in full is the second. \[primary, candidates\]
       **/
      inducted: AugmentedEvent<ApiType, [AccountId, Vec<AccountId>]>;
      /**
       * A \[member\] has been suspended
       **/
      memberSuspended: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[max\] member count has been set
       **/
      newMaxMembers: AugmentedEvent<ApiType, [u32]>;
      /**
       * A suspended member has been judged. \[who, judged\]
       **/
      suspendedMemberJudgement: AugmentedEvent<ApiType, [AccountId, bool]>;
      /**
       * A \[candidate\] was dropped (by their request).
       **/
      unbid: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Society is unfounded. \[founder\]
       **/
      unfounded: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A \[candidate\] was dropped (by request of who vouched for them).
       **/
      unvouch: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A vote has been placed \[candidate, voter, vote\]
       **/
      vote: AugmentedEvent<ApiType, [AccountId, AccountId, bool]>;
      /**
       * A membership bid just happened by vouching. The given account is the candidate's ID and
       * their offer is the second. The vouching party is the third. \[candidate_id, offer, vouching\]
       **/
      vouch: AugmentedEvent<ApiType, [AccountId, Balance, AccountId]>;
    };
    staking: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An account has bonded this amount. \[stash, amount\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      bonded: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       * \[era_index, validator_payout, remainder\]
       **/
      eraPayout: AugmentedEvent<ApiType, [EraIndex, Balance, Balance]>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed. \[session_index\]
       **/
      oldSlashingReportDiscarded: AugmentedEvent<ApiType, [SessionIndex]>;
      /**
       * The staker has been rewarded by this amount. \[stash, amount\]
       **/
      reward: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * One validator (and its nominators) has been slashed by the given amount.
       * \[validator, amount\]
       **/
      slash: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A new solution for the upcoming election has been stored. \[compute\]
       **/
      solutionStored: AugmentedEvent<ApiType, [ElectionCompute]>;
      /**
       * A new set of stakers was elected with the given \[compute\].
       **/
      stakingElection: AugmentedEvent<ApiType, [ElectionCompute]>;
      /**
       * An account has unbonded this amount. \[stash, amount\]
       **/
      unbonded: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue. \[stash, amount\]
       **/
      withdrawn: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    sudo: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      keyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      sudoAsDone: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    system: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * `:code` was updated.
       **/
      codeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      extrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      extrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      killedAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      newAccount: AugmentedEvent<ApiType, [AccountId]>;
    };
    technicalCommittee: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      approved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      closed: AugmentedEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      disapproved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      executed: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      memberExecuted: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      proposed: AugmentedEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      voted: AugmentedEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    technicalMembership: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Phantom member, never used.
       **/
      dummy: AugmentedEvent<ApiType, [PhantomData]>;
      /**
       * One of the members' keys changed.
       **/
      keyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      memberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      memberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      membersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      membersSwapped: AugmentedEvent<ApiType, []>;
    };
    tips: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A new tip suggestion has been opened. \[tip_hash\]
       **/
      newTip: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been closed. \[tip_hash, who, payout\]
       **/
      tipClosed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A tip suggestion has reached threshold and is closing. \[tip_hash\]
       **/
      tipClosing: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been retracted. \[tip_hash\]
       **/
      tipRetracted: AugmentedEvent<ApiType, [Hash]>;
    };
    treasury: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Some funds have been allocated. \[proposal_index, award, beneficiary\]
       **/
      awarded: AugmentedEvent<ApiType, [ProposalIndex, Balance, AccountId]>;
      /**
       * Some of our funds have been burnt. \[burn\]
       **/
      burnt: AugmentedEvent<ApiType, [Balance]>;
      /**
       * Some funds have been deposited. \[deposit\]
       **/
      deposit: AugmentedEvent<ApiType, [Balance]>;
      /**
       * New proposal. \[proposal_index\]
       **/
      proposed: AugmentedEvent<ApiType, [ProposalIndex]>;
      /**
       * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
       **/
      rejected: AugmentedEvent<ApiType, [ProposalIndex, Balance]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       * \[budget_remaining\]
       **/
      rollover: AugmentedEvent<ApiType, [Balance]>;
      /**
       * We have ended a spend period and will now allocate funds. \[budget_remaining\]
       **/
      spending: AugmentedEvent<ApiType, [Balance]>;
    };
    utility: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Batch of dispatches completed fully with no error.
       **/
      batchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      batchInterrupted: AugmentedEvent<ApiType, [u32, DispatchError]>;
    };
    vesting: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An \[account\] has become fully vested. No further vesting can happen.
       **/
      vestingCompleted: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * The amount vested has been updated. This could indicate more funds are available. The
       * balance given is the amount which is left unvested (and thus locked).
       * \[account, unvested\]
       **/
      vestingUpdated: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
