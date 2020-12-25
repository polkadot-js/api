// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, Vec, bool, u16, u32 } from '@polkadot/types';
import type { AnyTuple, ITuple } from '@polkadot/types/types';
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
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Some assets were destroyed. \[asset_id, owner, balance\]
       **/
      Burned: AugmentedIsEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * Some asset class was created. \[asset_id, creator, owner\]
       **/
      Created: AugmentedIsEvent<ApiType, [AssetId, AccountId, AccountId]>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedIsEvent<ApiType, [AssetId]>;
      /**
       * Some asset class was force-created. \[asset_id, owner\]
       **/
      ForceCreated: AugmentedIsEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets was transferred by an admin. \[asset_id, from, to, amount\]
       **/
      ForceTransferred: AugmentedIsEvent<ApiType, [AssetId, AccountId, AccountId, Balance]>;
      /**
       * Some account `who` was frozen. \[asset_id, who\]
       **/
      Frozen: AugmentedIsEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets were issued. \[asset_id, owner, total_supply\]
       **/
      Issued: AugmentedIsEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * The maximum amount of zombies allowed has changed. \[asset_id, max_zombies\]
       **/
      MaxZombiesChanged: AugmentedIsEvent<ApiType, [AssetId, u32]>;
      /**
       * The owner changed \[asset_id, owner\]
       **/
      OwnerChanged: AugmentedIsEvent<ApiType, [AssetId, AccountId]>;
      /**
       * The management team changed \[asset_id, issuer, admin, freezer\]
       **/
      TeamChanged: AugmentedIsEvent<ApiType, [AssetId, AccountId, AccountId, AccountId]>;
      /**
       * Some account `who` was thawed. \[asset_id, who\]
       **/
      Thawed: AugmentedIsEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets were transferred. \[asset_id, from, to, amount\]
       **/
      Transferred: AugmentedIsEvent<ApiType, [AssetId, AccountId, AccountId, Balance]>;
    };
    balances: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedIsEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
    };
    bounties: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A bounty is awarded to a beneficiary. \[index, beneficiary\]
       **/
      BountyAwarded: AugmentedIsEvent<ApiType, [BountyIndex, AccountId]>;
      /**
       * A bounty proposal is funded and became active. \[index\]
       **/
      BountyBecameActive: AugmentedIsEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is cancelled. \[index\]
       **/
      BountyCanceled: AugmentedIsEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
       **/
      BountyClaimed: AugmentedIsEvent<ApiType, [BountyIndex, Balance, AccountId]>;
      /**
       * A bounty expiry is extended. \[index\]
       **/
      BountyExtended: AugmentedIsEvent<ApiType, [BountyIndex]>;
      /**
       * New bounty proposal. \[index\]
       **/
      BountyProposed: AugmentedIsEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty proposal was rejected; funds were slashed. \[index, bond\]
       **/
      BountyRejected: AugmentedIsEvent<ApiType, [BountyIndex, Balance]>;
    };
    contracts: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Code with the specified hash has been stored.
       * \[code_hash\]
       **/
      CodeStored: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * An event deposited upon execution of a contract from the account.
       * \[account, data\]
       **/
      ContractExecution: AugmentedIsEvent<ApiType, [AccountId, Bytes]>;
      /**
       * Contract has been evicted and is now in tombstone state.
       * \[contract, tombstone\]
       * 
       * # Params
       * 
       * - `contract`: `AccountId`: The account ID of the evicted contract.
       * - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
       **/
      Evicted: AugmentedIsEvent<ApiType, [AccountId, bool]>;
      /**
       * Contract deployed by address at the specified address. \[owner, contract\]
       **/
      Instantiated: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
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
      Restored: AugmentedIsEvent<ApiType, [AccountId, AccountId, Hash, Balance]>;
      /**
       * Triggered when the current \[schedule\] is updated.
       **/
      ScheduleUpdated: AugmentedIsEvent<ApiType, [u32]>;
    };
    council: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedIsEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedIsEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedIsEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedIsEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedIsEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    democracy: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A proposal \[hash\] has been blacklisted permanently.
       **/
      Blacklisted: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A referendum has been cancelled. \[ref_index\]
       **/
      Cancelled: AugmentedIsEvent<ApiType, [ReferendumIndex]>;
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      Delegated: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A proposal has been enacted. \[ref_index, is_ok\]
       **/
      Executed: AugmentedIsEvent<ApiType, [ReferendumIndex, bool]>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedIsEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum. \[ref_index\]
       **/
      NotPassed: AugmentedIsEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal has been approved by referendum. \[ref_index\]
       **/
      Passed: AugmentedIsEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was invalid.
       * \[proposal_hash, ref_index\]
       **/
      PreimageInvalid: AugmentedIsEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was missing.
       * \[proposal_hash, ref_index\]
       **/
      PreimageMissing: AugmentedIsEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
       **/
      PreimageNoted: AugmentedIsEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       * \[proposal_hash, provider, deposit, reaper\]
       **/
      PreimageReaped: AugmentedIsEvent<ApiType, [Hash, AccountId, Balance, AccountId]>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       * \[proposal_hash, provider, deposit\]
       **/
      PreimageUsed: AugmentedIsEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A motion has been proposed by a public account. \[proposal_index, deposit\]
       **/
      Proposed: AugmentedIsEvent<ApiType, [PropIndex, Balance]>;
      /**
       * A referendum has begun. \[ref_index, threshold\]
       **/
      Started: AugmentedIsEvent<ApiType, [ReferendumIndex, VoteThreshold]>;
      /**
       * A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
       **/
      Tabled: AugmentedIsEvent<ApiType, [PropIndex, Balance, Vec<AccountId>]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * An \[account\] has been unlocked successfully.
       **/
      Unlocked: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * An external proposal has been vetoed. \[who, proposal_hash, until\]
       **/
      Vetoed: AugmentedIsEvent<ApiType, [AccountId, Hash, BlockNumber]>;
    };
    elections: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A candidate was slashed due to failing to obtain a seat as member or runner-up
       **/
      CandidateSlashed: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * Internal error happened while trying to perform election.
       **/
      ElectionError: AugmentedIsEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      EmptyTerm: AugmentedIsEvent<ApiType, []>;
      /**
       * A \[member\] has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A \[member\] has renounced their candidacy.
       **/
      MemberRenounced: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A new term with \[new_members\]. This indicates that enough candidates existed to run the
       * election, not that enough have has been elected. The inner value must be examined for
       * this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
       * none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
       **/
      NewTerm: AugmentedIsEvent<ApiType, [Vec<ITuple<[AccountId, Balance]>>]>;
      /**
       * A seat holder (member or runner-up) was slashed due to failing to retaining their position.
       **/
      SeatHolderSlashed: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A voter was reported with the the report being successful or not.
       * \[voter, reporter, success\]
       **/
      VoterReported: AugmentedIsEvent<ApiType, [AccountId, AccountId, bool]>;
    };
    grandpa: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedIsEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedIsEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedIsEvent<ApiType, []>;
    };
    identity: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A name was cleared, and the given balance returned. \[who, deposit\]
       **/
      IdentityCleared: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was removed and the given balance slashed. \[who, deposit\]
       **/
      IdentityKilled: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was set or reset (which will remove all judgements). \[who\]
       **/
      IdentitySet: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A judgement was given by a registrar. \[target, registrar_index\]
       **/
      JudgementGiven: AugmentedIsEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement was asked from a registrar. \[who, registrar_index\]
       **/
      JudgementRequested: AugmentedIsEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement request was retracted. \[who, registrar_index\]
       **/
      JudgementUnrequested: AugmentedIsEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A registrar was added. \[registrar_index\]
       **/
      RegistrarAdded: AugmentedIsEvent<ApiType, [RegistrarIndex]>;
      /**
       * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
       **/
      SubIdentityAdded: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       * \[sub, main, deposit\]
       **/
      SubIdentityRemoved: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account. \[sub, main, deposit\]
       **/
      SubIdentityRevoked: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance]>;
    };
    imOnline: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedIsEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedIsEvent<ApiType, [AuthorityId]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedIsEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    indices: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A account index was assigned. \[index, who\]
       **/
      IndexAssigned: AugmentedIsEvent<ApiType, [AccountId, AccountIndex]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      IndexFreed: AugmentedIsEvent<ApiType, [AccountIndex]>;
      /**
       * A account index has been frozen to its current account ID. \[index, who\]
       **/
      IndexFrozen: AugmentedIsEvent<ApiType, [AccountIndex, AccountId]>;
    };
    multisig: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A multisig operation has been approved by someone.
       * \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigApproval: AugmentedIsEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
       **/
      MultisigCancelled: AugmentedIsEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigExecuted: AugmentedIsEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash, DispatchResult]>;
      /**
       * A new multisig operation has begun. \[approving, multisig, call_hash\]
       **/
      NewMultisig: AugmentedIsEvent<ApiType, [AccountId, AccountId, CallHash]>;
    };
    offences: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes. last
       * element indicates of the offence was applied (true) or queued (false)
       * \[kind, timeslot, applied\].
       **/
      Offence: AugmentedIsEvent<ApiType, [Kind, OpaqueTimeSlot, bool]>;
    };
    proxy: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      Announced: AugmentedIsEvent<ApiType, [AccountId, AccountId, Hash]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
       **/
      AnonymousCreated: AugmentedIsEvent<ApiType, [AccountId, AccountId, ProxyType, u16]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      ProxyExecuted: AugmentedIsEvent<ApiType, [DispatchResult]>;
    };
    recovery: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Lost account has been successfully recovered by rescuer account.
       * \[lost, rescuer\]
       **/
      AccountRecovered: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A recovery process for lost account by rescuer account has been closed.
       * \[lost, rescuer\]
       **/
      RecoveryClosed: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A recovery process has been set up for an \[account\].
       **/
      RecoveryCreated: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A recovery process has been initiated for lost account by rescuer account.
       * \[lost, rescuer\]
       **/
      RecoveryInitiated: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A recovery process has been removed for an \[account\].
       **/
      RecoveryRemoved: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A recovery process for lost account by rescuer account has been vouched for by sender.
       * \[lost, rescuer, sender\]
       **/
      RecoveryVouched: AugmentedIsEvent<ApiType, [AccountId, AccountId, AccountId]>;
    };
    scheduler: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedIsEvent<ApiType, [BlockNumber, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedIsEvent<ApiType, [TaskAddress, Option<Bytes>, DispatchResult]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedIsEvent<ApiType, [BlockNumber, u32]>;
    };
    session: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedIsEvent<ApiType, [SessionIndex]>;
    };
    society: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A \[candidate\] was dropped (due to an excess of bids in the system).
       **/
      AutoUnbid: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A membership bid just happened. The given account is the candidate's ID and their offer
       * is the second. \[candidate_id, offer\]
       **/
      Bid: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A \[candidate\] has been suspended
       **/
      CandidateSuspended: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A \[member\] has been challenged
       **/
      Challenged: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A vote has been placed for a defending member \[voter, vote\]
       **/
      DefenderVote: AugmentedIsEvent<ApiType, [AccountId, bool]>;
      /**
       * Some funds were deposited into the society account. \[value\]
       **/
      Deposit: AugmentedIsEvent<ApiType, [Balance]>;
      /**
       * The society is founded by the given identity. \[founder\]
       **/
      Founded: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A group of candidates have been inducted. The batch's primary is the first value, the
       * batch in full is the second. \[primary, candidates\]
       **/
      Inducted: AugmentedIsEvent<ApiType, [AccountId, Vec<AccountId>]>;
      /**
       * A \[member\] has been suspended
       **/
      MemberSuspended: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A new \[max\] member count has been set
       **/
      NewMaxMembers: AugmentedIsEvent<ApiType, [u32]>;
      /**
       * A suspended member has been judged. \[who, judged\]
       **/
      SuspendedMemberJudgement: AugmentedIsEvent<ApiType, [AccountId, bool]>;
      /**
       * A \[candidate\] was dropped (by their request).
       **/
      Unbid: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * Society is unfounded. \[founder\]
       **/
      Unfounded: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A \[candidate\] was dropped (by request of who vouched for them).
       **/
      Unvouch: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A vote has been placed \[candidate, voter, vote\]
       **/
      Vote: AugmentedIsEvent<ApiType, [AccountId, AccountId, bool]>;
      /**
       * A membership bid just happened by vouching. The given account is the candidate's ID and
       * their offer is the second. The vouching party is the third. \[candidate_id, offer, vouching\]
       **/
      Vouch: AugmentedIsEvent<ApiType, [AccountId, Balance, AccountId]>;
    };
    staking: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * An account has bonded this amount. \[stash, amount\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       * \[era_index, validator_payout, remainder\]
       **/
      EraPayout: AugmentedIsEvent<ApiType, [EraIndex, Balance, Balance]>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed. \[session_index\]
       **/
      OldSlashingReportDiscarded: AugmentedIsEvent<ApiType, [SessionIndex]>;
      /**
       * The staker has been rewarded by this amount. \[stash, amount\]
       **/
      Reward: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * One validator (and its nominators) has been slashed by the given amount.
       * \[validator, amount\]
       **/
      Slash: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A new solution for the upcoming election has been stored. \[compute\]
       **/
      SolutionStored: AugmentedIsEvent<ApiType, [ElectionCompute]>;
      /**
       * A new set of stakers was elected with the given \[compute\].
       **/
      StakingElection: AugmentedIsEvent<ApiType, [ElectionCompute]>;
      /**
       * An account has unbonded this amount. \[stash, amount\]
       **/
      Unbonded: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue. \[stash, amount\]
       **/
      Withdrawn: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
    };
    sudo: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedIsEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedIsEvent<ApiType, [DispatchResult]>;
    };
    system: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedIsEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedIsEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedIsEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedIsEvent<ApiType, [AccountId]>;
    };
    technicalCommittee: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedIsEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedIsEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedIsEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedIsEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedIsEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    technicalMembership: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedIsEvent<ApiType, [PhantomData]>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedIsEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedIsEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedIsEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedIsEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedIsEvent<ApiType, []>;
    };
    tips: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A new tip suggestion has been opened. \[tip_hash\]
       **/
      NewTip: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been closed. \[tip_hash, who, payout\]
       **/
      TipClosed: AugmentedIsEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A tip suggestion has reached threshold and is closing. \[tip_hash\]
       **/
      TipClosing: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been retracted. \[tip_hash\]
       **/
      TipRetracted: AugmentedIsEvent<ApiType, [Hash]>;
    };
    treasury: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Some funds have been allocated. \[proposal_index, award, beneficiary\]
       **/
      Awarded: AugmentedIsEvent<ApiType, [ProposalIndex, Balance, AccountId]>;
      /**
       * Some of our funds have been burnt. \[burn\]
       **/
      Burnt: AugmentedIsEvent<ApiType, [Balance]>;
      /**
       * Some funds have been deposited. \[deposit\]
       **/
      Deposit: AugmentedIsEvent<ApiType, [Balance]>;
      /**
       * New proposal. \[proposal_index\]
       **/
      Proposed: AugmentedIsEvent<ApiType, [ProposalIndex]>;
      /**
       * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
       **/
      Rejected: AugmentedIsEvent<ApiType, [ProposalIndex, Balance]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       * \[budget_remaining\]
       **/
      Rollover: AugmentedIsEvent<ApiType, [Balance]>;
      /**
       * We have ended a spend period and will now allocate funds. \[budget_remaining\]
       **/
      Spending: AugmentedIsEvent<ApiType, [Balance]>;
    };
    utility: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedIsEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      BatchInterrupted: AugmentedIsEvent<ApiType, [u32, DispatchError]>;
    };
    vesting: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * An \[account\] has become fully vested. No further vesting can happen.
       **/
      VestingCompleted: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * The amount vested has been updated. This could indicate more funds are available. The
       * balance given is the amount which is left unvested (and thus locked).
       * \[account, unvested\]
       **/
      VestingUpdated: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
    };
  }

  export interface IsEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: IsModuleEvents<ApiType>;
  }
}
