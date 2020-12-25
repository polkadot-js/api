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
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Some assets were destroyed. \[asset_id, owner, balance\]
       **/
      isBurned: AugmentedIsEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * Some asset class was created. \[asset_id, creator, owner\]
       **/
      isCreated: AugmentedIsEvent<ApiType, [AssetId, AccountId, AccountId]>;
      /**
       * An asset class was destroyed.
       **/
      isDestroyed: AugmentedIsEvent<ApiType, [AssetId]>;
      /**
       * Some asset class was force-created. \[asset_id, owner\]
       **/
      isForceCreated: AugmentedIsEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets was transferred by an admin. \[asset_id, from, to, amount\]
       **/
      isForceTransferred: AugmentedIsEvent<ApiType, [AssetId, AccountId, AccountId, Balance]>;
      /**
       * Some account `who` was frozen. \[asset_id, who\]
       **/
      isFrozen: AugmentedIsEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets were issued. \[asset_id, owner, total_supply\]
       **/
      isIssued: AugmentedIsEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * The maximum amount of zombies allowed has changed. \[asset_id, max_zombies\]
       **/
      isMaxZombiesChanged: AugmentedIsEvent<ApiType, [AssetId, u32]>;
      /**
       * The owner changed \[asset_id, owner\]
       **/
      isOwnerChanged: AugmentedIsEvent<ApiType, [AssetId, AccountId]>;
      /**
       * The management team changed \[asset_id, issuer, admin, freezer\]
       **/
      isTeamChanged: AugmentedIsEvent<ApiType, [AssetId, AccountId, AccountId, AccountId]>;
      /**
       * Some account `who` was thawed. \[asset_id, who\]
       **/
      isThawed: AugmentedIsEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Some assets were transferred. \[asset_id, from, to, amount\]
       **/
      isTransferred: AugmentedIsEvent<ApiType, [AssetId, AccountId, AccountId, Balance]>;
    };
    balances: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      isBalanceSet: AugmentedIsEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      isDeposit: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      isDustLost: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      isEndowed: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      isReserved: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      isReserveRepatriated: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      isTransfer: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      isUnreserved: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
    };
    bounties: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A bounty is awarded to a beneficiary. \[index, beneficiary\]
       **/
      isBountyAwarded: AugmentedIsEvent<ApiType, [BountyIndex, AccountId]>;
      /**
       * A bounty proposal is funded and became active. \[index\]
       **/
      isBountyBecameActive: AugmentedIsEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is cancelled. \[index\]
       **/
      isBountyCanceled: AugmentedIsEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
       **/
      isBountyClaimed: AugmentedIsEvent<ApiType, [BountyIndex, Balance, AccountId]>;
      /**
       * A bounty expiry is extended. \[index\]
       **/
      isBountyExtended: AugmentedIsEvent<ApiType, [BountyIndex]>;
      /**
       * New bounty proposal. \[index\]
       **/
      isBountyProposed: AugmentedIsEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty proposal was rejected; funds were slashed. \[index, bond\]
       **/
      isBountyRejected: AugmentedIsEvent<ApiType, [BountyIndex, Balance]>;
    };
    contracts: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Code with the specified hash has been stored.
       * \[code_hash\]
       **/
      isCodeStored: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * An event deposited upon execution of a contract from the account.
       * \[account, data\]
       **/
      isContractExecution: AugmentedIsEvent<ApiType, [AccountId, Bytes]>;
      /**
       * Contract has been evicted and is now in tombstone state.
       * \[contract, tombstone\]
       * 
       * # Params
       * 
       * - `contract`: `AccountId`: The account ID of the evicted contract.
       * - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
       **/
      isEvicted: AugmentedIsEvent<ApiType, [AccountId, bool]>;
      /**
       * Contract deployed by address at the specified address. \[owner, contract\]
       **/
      isInstantiated: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
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
      isRestored: AugmentedIsEvent<ApiType, [AccountId, AccountId, Hash, Balance]>;
      /**
       * Triggered when the current \[schedule\] is updated.
       **/
      isScheduleUpdated: AugmentedIsEvent<ApiType, [u32]>;
    };
    council: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      isApproved: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      isClosed: AugmentedIsEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      isDisapproved: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      isExecuted: AugmentedIsEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      isMemberExecuted: AugmentedIsEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      isProposed: AugmentedIsEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      isVoted: AugmentedIsEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    democracy: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A proposal \[hash\] has been blacklisted permanently.
       **/
      isBlacklisted: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A referendum has been cancelled. \[ref_index\]
       **/
      isCancelled: AugmentedIsEvent<ApiType, [ReferendumIndex]>;
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      isDelegated: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A proposal has been enacted. \[ref_index, is_ok\]
       **/
      isExecuted: AugmentedIsEvent<ApiType, [ReferendumIndex, bool]>;
      /**
       * An external proposal has been tabled.
       **/
      isExternalTabled: AugmentedIsEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum. \[ref_index\]
       **/
      isNotPassed: AugmentedIsEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal has been approved by referendum. \[ref_index\]
       **/
      isPassed: AugmentedIsEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was invalid.
       * \[proposal_hash, ref_index\]
       **/
      isPreimageInvalid: AugmentedIsEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was missing.
       * \[proposal_hash, ref_index\]
       **/
      isPreimageMissing: AugmentedIsEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
       **/
      isPreimageNoted: AugmentedIsEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       * \[proposal_hash, provider, deposit, reaper\]
       **/
      isPreimageReaped: AugmentedIsEvent<ApiType, [Hash, AccountId, Balance, AccountId]>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       * \[proposal_hash, provider, deposit\]
       **/
      isPreimageUsed: AugmentedIsEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A motion has been proposed by a public account. \[proposal_index, deposit\]
       **/
      isProposed: AugmentedIsEvent<ApiType, [PropIndex, Balance]>;
      /**
       * A referendum has begun. \[ref_index, threshold\]
       **/
      isStarted: AugmentedIsEvent<ApiType, [ReferendumIndex, VoteThreshold]>;
      /**
       * A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
       **/
      isTabled: AugmentedIsEvent<ApiType, [PropIndex, Balance, Vec<AccountId>]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      isUndelegated: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * An \[account\] has been unlocked successfully.
       **/
      isUnlocked: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * An external proposal has been vetoed. \[who, proposal_hash, until\]
       **/
      isVetoed: AugmentedIsEvent<ApiType, [AccountId, Hash, BlockNumber]>;
    };
    elections: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A candidate was slashed due to failing to obtain a seat as member or runner-up
       **/
      isCandidateSlashed: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * Internal error happened while trying to perform election.
       **/
      isElectionError: AugmentedIsEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      isEmptyTerm: AugmentedIsEvent<ApiType, []>;
      /**
       * A \[member\] has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      isMemberKicked: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A \[member\] has renounced their candidacy.
       **/
      isMemberRenounced: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A new term with \[new_members\]. This indicates that enough candidates existed to run the
       * election, not that enough have has been elected. The inner value must be examined for
       * this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
       * none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
       **/
      isNewTerm: AugmentedIsEvent<ApiType, [Vec<ITuple<[AccountId, Balance]>>]>;
      /**
       * A seat holder (member or runner-up) was slashed due to failing to retaining their position.
       **/
      isSeatHolderSlashed: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A voter was reported with the the report being successful or not.
       * \[voter, reporter, success\]
       **/
      isVoterReported: AugmentedIsEvent<ApiType, [AccountId, AccountId, bool]>;
    };
    grandpa: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      isNewAuthorities: AugmentedIsEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      isPaused: AugmentedIsEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      isResumed: AugmentedIsEvent<ApiType, []>;
    };
    identity: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A name was cleared, and the given balance returned. \[who, deposit\]
       **/
      isIdentityCleared: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was removed and the given balance slashed. \[who, deposit\]
       **/
      isIdentityKilled: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was set or reset (which will remove all judgements). \[who\]
       **/
      isIdentitySet: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A judgement was given by a registrar. \[target, registrar_index\]
       **/
      isJudgementGiven: AugmentedIsEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement was asked from a registrar. \[who, registrar_index\]
       **/
      isJudgementRequested: AugmentedIsEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement request was retracted. \[who, registrar_index\]
       **/
      isJudgementUnrequested: AugmentedIsEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A registrar was added. \[registrar_index\]
       **/
      isRegistrarAdded: AugmentedIsEvent<ApiType, [RegistrarIndex]>;
      /**
       * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
       **/
      isSubIdentityAdded: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       * \[sub, main, deposit\]
       **/
      isSubIdentityRemoved: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account. \[sub, main, deposit\]
       **/
      isSubIdentityRevoked: AugmentedIsEvent<ApiType, [AccountId, AccountId, Balance]>;
    };
    imOnline: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * At the end of the session, no offence was committed.
       **/
      isAllGood: AugmentedIsEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      isHeartbeatReceived: AugmentedIsEvent<ApiType, [AuthorityId]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      isSomeOffline: AugmentedIsEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    indices: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A account index was assigned. \[index, who\]
       **/
      isIndexAssigned: AugmentedIsEvent<ApiType, [AccountId, AccountIndex]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      isIndexFreed: AugmentedIsEvent<ApiType, [AccountIndex]>;
      /**
       * A account index has been frozen to its current account ID. \[index, who\]
       **/
      isIndexFrozen: AugmentedIsEvent<ApiType, [AccountIndex, AccountId]>;
    };
    multisig: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A multisig operation has been approved by someone.
       * \[approving, timepoint, multisig, call_hash\]
       **/
      isMultisigApproval: AugmentedIsEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
       **/
      isMultisigCancelled: AugmentedIsEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
       **/
      isMultisigExecuted: AugmentedIsEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash, DispatchResult]>;
      /**
       * A new multisig operation has begun. \[approving, multisig, call_hash\]
       **/
      isNewMultisig: AugmentedIsEvent<ApiType, [AccountId, AccountId, CallHash]>;
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
      isOffence: AugmentedIsEvent<ApiType, [Kind, OpaqueTimeSlot, bool]>;
    };
    proxy: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      isAnnounced: AugmentedIsEvent<ApiType, [AccountId, AccountId, Hash]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
       **/
      isAnonymousCreated: AugmentedIsEvent<ApiType, [AccountId, AccountId, ProxyType, u16]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      isProxyExecuted: AugmentedIsEvent<ApiType, [DispatchResult]>;
    };
    recovery: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Lost account has been successfully recovered by rescuer account.
       * \[lost, rescuer\]
       **/
      isAccountRecovered: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A recovery process for lost account by rescuer account has been closed.
       * \[lost, rescuer\]
       **/
      isRecoveryClosed: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A recovery process has been set up for an \[account\].
       **/
      isRecoveryCreated: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A recovery process has been initiated for lost account by rescuer account.
       * \[lost, rescuer\]
       **/
      isRecoveryInitiated: AugmentedIsEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A recovery process has been removed for an \[account\].
       **/
      isRecoveryRemoved: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A recovery process for lost account by rescuer account has been vouched for by sender.
       * \[lost, rescuer, sender\]
       **/
      isRecoveryVouched: AugmentedIsEvent<ApiType, [AccountId, AccountId, AccountId]>;
    };
    scheduler: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Canceled some task. \[when, index\]
       **/
      isCanceled: AugmentedIsEvent<ApiType, [BlockNumber, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      isDispatched: AugmentedIsEvent<ApiType, [TaskAddress, Option<Bytes>, DispatchResult]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      isScheduled: AugmentedIsEvent<ApiType, [BlockNumber, u32]>;
    };
    session: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      isNewSession: AugmentedIsEvent<ApiType, [SessionIndex]>;
    };
    society: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A \[candidate\] was dropped (due to an excess of bids in the system).
       **/
      isAutoUnbid: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A membership bid just happened. The given account is the candidate's ID and their offer
       * is the second. \[candidate_id, offer\]
       **/
      isBid: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A \[candidate\] has been suspended
       **/
      isCandidateSuspended: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A \[member\] has been challenged
       **/
      isChallenged: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A vote has been placed for a defending member \[voter, vote\]
       **/
      isDefenderVote: AugmentedIsEvent<ApiType, [AccountId, bool]>;
      /**
       * Some funds were deposited into the society account. \[value\]
       **/
      isDeposit: AugmentedIsEvent<ApiType, [Balance]>;
      /**
       * The society is founded by the given identity. \[founder\]
       **/
      isFounded: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A group of candidates have been inducted. The batch's primary is the first value, the
       * batch in full is the second. \[primary, candidates\]
       **/
      isInducted: AugmentedIsEvent<ApiType, [AccountId, Vec<AccountId>]>;
      /**
       * A \[member\] has been suspended
       **/
      isMemberSuspended: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A new \[max\] member count has been set
       **/
      isNewMaxMembers: AugmentedIsEvent<ApiType, [u32]>;
      /**
       * A suspended member has been judged. \[who, judged\]
       **/
      isSuspendedMemberJudgement: AugmentedIsEvent<ApiType, [AccountId, bool]>;
      /**
       * A \[candidate\] was dropped (by their request).
       **/
      isUnbid: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * Society is unfounded. \[founder\]
       **/
      isUnfounded: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A \[candidate\] was dropped (by request of who vouched for them).
       **/
      isUnvouch: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A vote has been placed \[candidate, voter, vote\]
       **/
      isVote: AugmentedIsEvent<ApiType, [AccountId, AccountId, bool]>;
      /**
       * A membership bid just happened by vouching. The given account is the candidate's ID and
       * their offer is the second. The vouching party is the third. \[candidate_id, offer, vouching\]
       **/
      isVouch: AugmentedIsEvent<ApiType, [AccountId, Balance, AccountId]>;
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
      isBonded: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       * \[era_index, validator_payout, remainder\]
       **/
      isEraPayout: AugmentedIsEvent<ApiType, [EraIndex, Balance, Balance]>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed. \[session_index\]
       **/
      isOldSlashingReportDiscarded: AugmentedIsEvent<ApiType, [SessionIndex]>;
      /**
       * The staker has been rewarded by this amount. \[stash, amount\]
       **/
      isReward: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * One validator (and its nominators) has been slashed by the given amount.
       * \[validator, amount\]
       **/
      isSlash: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * A new solution for the upcoming election has been stored. \[compute\]
       **/
      isSolutionStored: AugmentedIsEvent<ApiType, [ElectionCompute]>;
      /**
       * A new set of stakers was elected with the given \[compute\].
       **/
      isStakingElection: AugmentedIsEvent<ApiType, [ElectionCompute]>;
      /**
       * An account has unbonded this amount. \[stash, amount\]
       **/
      isUnbonded: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue. \[stash, amount\]
       **/
      isWithdrawn: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
    };
    sudo: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      isKeyChanged: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      isSudid: AugmentedIsEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      isSudoAsDone: AugmentedIsEvent<ApiType, [DispatchResult]>;
    };
    system: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * `:code` was updated.
       **/
      isCodeUpdated: AugmentedIsEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      isExtrinsicFailed: AugmentedIsEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      isExtrinsicSuccess: AugmentedIsEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      isKilledAccount: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      isNewAccount: AugmentedIsEvent<ApiType, [AccountId]>;
    };
    technicalCommittee: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      isApproved: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      isClosed: AugmentedIsEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      isDisapproved: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      isExecuted: AugmentedIsEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      isMemberExecuted: AugmentedIsEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      isProposed: AugmentedIsEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      isVoted: AugmentedIsEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    technicalMembership: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Phantom member, never used.
       **/
      isDummy: AugmentedIsEvent<ApiType, [PhantomData]>;
      /**
       * One of the members' keys changed.
       **/
      isKeyChanged: AugmentedIsEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      isMemberAdded: AugmentedIsEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      isMemberRemoved: AugmentedIsEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      isMembersReset: AugmentedIsEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      isMembersSwapped: AugmentedIsEvent<ApiType, []>;
    };
    tips: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * A new tip suggestion has been opened. \[tip_hash\]
       **/
      isNewTip: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been closed. \[tip_hash, who, payout\]
       **/
      isTipClosed: AugmentedIsEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A tip suggestion has reached threshold and is closing. \[tip_hash\]
       **/
      isTipClosing: AugmentedIsEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been retracted. \[tip_hash\]
       **/
      isTipRetracted: AugmentedIsEvent<ApiType, [Hash]>;
    };
    treasury: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Some funds have been allocated. \[proposal_index, award, beneficiary\]
       **/
      isAwarded: AugmentedIsEvent<ApiType, [ProposalIndex, Balance, AccountId]>;
      /**
       * Some of our funds have been burnt. \[burn\]
       **/
      isBurnt: AugmentedIsEvent<ApiType, [Balance]>;
      /**
       * Some funds have been deposited. \[deposit\]
       **/
      isDeposit: AugmentedIsEvent<ApiType, [Balance]>;
      /**
       * New proposal. \[proposal_index\]
       **/
      isProposed: AugmentedIsEvent<ApiType, [ProposalIndex]>;
      /**
       * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
       **/
      isRejected: AugmentedIsEvent<ApiType, [ProposalIndex, Balance]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       * \[budget_remaining\]
       **/
      isRollover: AugmentedIsEvent<ApiType, [Balance]>;
      /**
       * We have ended a spend period and will now allocate funds. \[budget_remaining\]
       **/
      isSpending: AugmentedIsEvent<ApiType, [Balance]>;
    };
    utility: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * Batch of dispatches completed fully with no error.
       **/
      isBatchCompleted: AugmentedIsEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      isBatchInterrupted: AugmentedIsEvent<ApiType, [u32, DispatchError]>;
    };
    vesting: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsEvent<ApiType, AnyTuple>;
      /**
       * An \[account\] has become fully vested. No further vesting can happen.
       **/
      isVestingCompleted: AugmentedIsEvent<ApiType, [AccountId]>;
      /**
       * The amount vested has been updated. This could indicate more funds are available. The
       * balance given is the amount which is left unvested (and thus locked).
       * \[account, unvested\]
       **/
      isVestingUpdated: AugmentedIsEvent<ApiType, [AccountId, Balance]>;
    };
  }

  export interface QueryableEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: QueryableModuleEvents<ApiType>;
  }
}
