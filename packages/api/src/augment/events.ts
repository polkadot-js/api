// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Null, Option, Result, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { PalletDemocracyVoteThreshold } from '@polkadot/types/augment/lookup';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    assets: {
      /**
       * An approval for account `delegate` was cancelled by `owner`.
       * \[id, owner, delegate\]
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32]>;
      /**
       * (Additional) funds have been approved for transfer to a destination account.
       * \[asset_id, source, delegate, amount\]
       **/
      ApprovedTransfer: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, u64]>;
      /**
       * Some asset `asset_id` was frozen. \[asset_id\]
       **/
      AssetFrozen: AugmentedEvent<ApiType, [u32]>;
      /**
       * An asset has had its attributes changed by the `Force` origin.
       * \[id\]
       **/
      AssetStatusChanged: AugmentedEvent<ApiType, [u32]>;
      /**
       * Some asset `asset_id` was thawed. \[asset_id\]
       **/
      AssetThawed: AugmentedEvent<ApiType, [u32]>;
      /**
       * Some assets were destroyed. \[asset_id, owner, balance\]
       **/
      Burned: AugmentedEvent<ApiType, [u32, AccountId32, u64]>;
      /**
       * Some asset class was created. \[asset_id, creator, owner\]
       **/
      Created: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32]>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [u32]>;
      /**
       * Some asset class was force-created. \[asset_id, owner\]
       **/
      ForceCreated: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Some account `who` was frozen. \[asset_id, who\]
       **/
      Frozen: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Some assets were issued. \[asset_id, owner, total_supply\]
       **/
      Issued: AugmentedEvent<ApiType, [u32, AccountId32, u64]>;
      /**
       * Metadata has been cleared for an asset. \[asset_id\]
       **/
      MetadataCleared: AugmentedEvent<ApiType, [u32]>;
      /**
       * New metadata has been set for an asset. \[asset_id, name, symbol, decimals, is_frozen\]
       **/
      MetadataSet: AugmentedEvent<ApiType, [u32, Bytes, Bytes, u8, bool]>;
      /**
       * The owner changed \[asset_id, owner\]
       **/
      OwnerChanged: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * The management team changed \[asset_id, issuer, admin, freezer\]
       **/
      TeamChanged: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, AccountId32]>;
      /**
       * Some account `who` was thawed. \[asset_id, who\]
       **/
      Thawed: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Some assets were transferred. \[asset_id, from, to, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, u64]>;
      /**
       * An `amount` was transferred in its entirety from `owner` to `destination` by
       * the approved `delegate`.
       * \[id, owner, delegate, destination\]
       **/
      TransferredApproved: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, AccountId32, u64]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, FrameSupportTraitsTokensMiscBalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is awarded to a beneficiary. \[index, beneficiary\]
       **/
      BountyAwarded: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * A bounty proposal is funded and became active. \[index\]
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [u32]>;
      /**
       * A bounty is cancelled. \[index\]
       **/
      BountyCanceled: AugmentedEvent<ApiType, [u32]>;
      /**
       * A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
       **/
      BountyClaimed: AugmentedEvent<ApiType, [u32, u128, AccountId32]>;
      /**
       * A bounty expiry is extended. \[index\]
       **/
      BountyExtended: AugmentedEvent<ApiType, [u32]>;
      /**
       * New bounty proposal. \[index\]
       **/
      BountyProposed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A bounty proposal was rejected; funds were slashed. \[index, bond\]
       **/
      BountyRejected: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    contracts: {
      /**
       * A code with the specified hash was removed.
       * \[code_hash\]
       * 
       * This happens when the last contract that uses this code hash was removed or evicted.
       **/
      CodeRemoved: AugmentedEvent<ApiType, [H256]>;
      /**
       * Code with the specified hash has been stored. \[code_hash\]
       **/
      CodeStored: AugmentedEvent<ApiType, [H256]>;
      /**
       * A custom event emitted by the contract.
       * \[contract, data\]
       * 
       * # Params
       * 
       * - `contract`: The contract that emitted the event.
       * - `data`: Data supplied by the contract. Metadata generated during contract
       * compilation is needed to decode it.
       **/
      ContractEmitted: AugmentedEvent<ApiType, [AccountId32, Bytes]>;
      /**
       * Contract has been evicted and is now in tombstone state. \[contract\]
       **/
      Evicted: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Contract deployed by address at the specified address. \[deployer, contract\]
       **/
      Instantiated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * Restoration of a contract has been successful.
       * \[restorer, dest, code_hash, rent_allowance\]
       * 
       * # Params
       * 
       * - `restorer`: Account ID of the restoring contract.
       * - `dest`: Account ID of the restored contract.
       * - `code_hash`: Code hash of the restored contract.
       * - `rent_allowance`: Rent allowance of the restored contract.
       **/
      Restored: AugmentedEvent<ApiType, [AccountId32, AccountId32, H256, u128]>;
      /**
       * Triggered when the current schedule is updated.
       * \[version\]
       * 
       * # Params
       * 
       * - `version`: The version of the newly set schedule.
       **/
      ScheduleUpdated: AugmentedEvent<ApiType, [u32]>;
      /**
       * Contract has been terminated without leaving a tombstone.
       * \[contract, beneficiary\]
       * 
       * # Params
       * 
       * - `contract`: The contract that was terminated.
       * - `beneficiary`: The account that received the contracts remaining balance.
       * 
       * # Note
       * 
       * The only way for a contract to be removed without a tombstone and emitting
       * this event is by calling `seal_terminate`.
       **/
      Terminated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [H256]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [H256, u32, u32]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [H256]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId32, u32, H256, u32]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId32, H256, bool, u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /**
       * A proposal \[hash\] has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A referendum has been cancelled. \[ref_index\]
       **/
      Cancelled: AugmentedEvent<ApiType, [u32]>;
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      Delegated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * A proposal has been enacted. \[ref_index, result\]
       **/
      Executed: AugmentedEvent<ApiType, [u32, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum. \[ref_index\]
       **/
      NotPassed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A proposal has been approved by referendum. \[ref_index\]
       **/
      Passed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A proposal could not be executed because its preimage was invalid.
       * \[proposal_hash, ref_index\]
       **/
      PreimageInvalid: AugmentedEvent<ApiType, [H256, u32]>;
      /**
       * A proposal could not be executed because its preimage was missing.
       * \[proposal_hash, ref_index\]
       **/
      PreimageMissing: AugmentedEvent<ApiType, [H256, u32]>;
      /**
       * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
       **/
      PreimageNoted: AugmentedEvent<ApiType, [H256, AccountId32, u128]>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       * \[proposal_hash, provider, deposit, reaper\]
       **/
      PreimageReaped: AugmentedEvent<ApiType, [H256, AccountId32, u128, AccountId32]>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       * \[proposal_hash, provider, deposit\]
       **/
      PreimageUsed: AugmentedEvent<ApiType, [H256, AccountId32, u128]>;
      /**
       * A motion has been proposed by a public account. \[proposal_index, deposit\]
       **/
      Proposed: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * A referendum has begun. \[ref_index, threshold\]
       **/
      Started: AugmentedEvent<ApiType, [u32, PalletDemocracyVoteThreshold]>;
      /**
       * A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
       **/
      Tabled: AugmentedEvent<ApiType, [u32, u128, Vec<AccountId32>]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * An \[account\] has been unlocked successfully.
       **/
      Unlocked: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * An external proposal has been vetoed. \[who, proposal_hash, until\]
       **/
      Vetoed: AugmentedEvent<ApiType, [AccountId32, H256, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * The election has been finalized, with `Some` of the given computation, or else if the
       * election failed, `None`.
       **/
      ElectionFinalized: AugmentedEvent<ApiType, [Option<PalletElectionProviderMultiPhaseElectionCompute>]>;
      /**
       * An account has been rewarded for their signed submission being finalized.
       **/
      Rewarded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * The signed phase of the given round has started.
       **/
      SignedPhaseStarted: AugmentedEvent<ApiType, [u32]>;
      /**
       * An account has been slashed for submitting an invalid signed submission.
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A solution was stored with the given compute.
       * 
       * If the solution is signed, this means that it hasn't yet been processed. If the
       * solution is unsigned, this means that it has also been processed.
       * 
       * The `bool` is `true` when a previous solution was ejected to make room for this one.
       **/
      SolutionStored: AugmentedEvent<ApiType, [PalletElectionProviderMultiPhaseElectionCompute, bool]>;
      /**
       * The unsigned phase of the given round has started.
       **/
      UnsignedPhaseStarted: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    elections: {
      /**
       * A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
       * runner-up.
       * 
       * Note that old members and runners-up are also candidates.
       **/
      CandidateSlashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Internal error happened while trying to perform election.
       **/
      ElectionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      EmptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A \[member\] has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new term with \[new_members\]. This indicates that enough candidates existed to run
       * the election, not that enough have has been elected. The inner value must be examined
       * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
       * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
       * begin with.
       **/
      NewTerm: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId32, u128]>>]>;
      /**
       * Someone has renounced their candidacy.
       **/
      Renounced: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
       **/
      SeatHolderSlashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    gilt: {
      /**
       * A bid was successfully placed.
       * \[ who, amount, duration \]
       **/
      BidPlaced: AugmentedEvent<ApiType, [AccountId32, u128, u32]>;
      /**
       * A bid was successfully removed (before being accepted as a gilt).
       * \[ who, amount, duration \]
       **/
      BidRetracted: AugmentedEvent<ApiType, [AccountId32, u128, u32]>;
      /**
       * A bid was accepted as a gilt. The balance may not be released until expiry.
       * \[ index, expiry, who, amount \]
       **/
      GiltIssued: AugmentedEvent<ApiType, [u32, u32, AccountId32, u128]>;
      /**
       * An expired gilt has been thawed.
       * \[ index, who, original_amount, additional_amount \]
       **/
      GiltThawed: AugmentedEvent<ApiType, [u32, AccountId32, u128, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned. \[who, deposit\]
       **/
      IdentityCleared: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A name was removed and the given balance slashed. \[who, deposit\]
       **/
      IdentityKilled: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A name was set or reset (which will remove all judgements). \[who\]
       **/
      IdentitySet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A judgement was given by a registrar. \[target, registrar_index\]
       **/
      JudgementGiven: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A judgement was asked from a registrar. \[who, registrar_index\]
       **/
      JudgementRequested: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A judgement request was retracted. \[who, registrar_index\]
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A registrar was added. \[registrar_index\]
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [u32]>;
      /**
       * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       * \[sub, main, deposit\]
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account. \[sub, main, deposit\]
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId32, PalletStakingExposure]>>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    indices: {
      /**
       * A account index was assigned. \[index, who\]
       **/
      IndexAssigned: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      IndexFreed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A account index has been frozen to its current account ID. \[index, who\]
       **/
      IndexFrozen: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    lottery: {
      /**
       * A new set of calls have been set!
       **/
      CallsUpdated: AugmentedEvent<ApiType, []>;
      /**
       * A lottery has been started!
       **/
      LotteryStarted: AugmentedEvent<ApiType, []>;
      /**
       * A ticket has been bought!
       **/
      TicketBought: AugmentedEvent<ApiType, [AccountId32, ITuple<[u8, u8]>]>;
      /**
       * A winner has been chosen!
       **/
      Winner: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       * \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigApproval: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
      /**
       * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
      /**
       * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A new multisig operation has begun. \[approving, multisig, call_hash\]
       **/
      NewMultisig: AugmentedEvent<ApiType, [AccountId32, AccountId32, U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<ApiType, [U8aFixed, Bytes]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      Announced: AugmentedEvent<ApiType, [AccountId32, AccountId32, H256]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [AccountId32, AccountId32, NodeRuntimeProxyType, u16]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    recovery: {
      /**
       * Lost account has been successfully recovered by rescuer account.
       * \[lost, rescuer\]
       **/
      AccountRecovered: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * A recovery process for lost account by rescuer account has been closed.
       * \[lost, rescuer\]
       **/
      RecoveryClosed: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * A recovery process has been set up for an \[account\].
       **/
      RecoveryCreated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A recovery process has been initiated for lost account by rescuer account.
       * \[lost, rescuer\]
       **/
      RecoveryInitiated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * A recovery process has been removed for an \[account\].
       **/
      RecoveryRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A recovery process for lost account by rescuer account has been vouched for by sender.
       * \[lost, rescuer, sender\]
       **/
      RecoveryVouched: AugmentedEvent<ApiType, [AccountId32, AccountId32, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedEvent<ApiType, [ITuple<[u32, u32]>, Option<Bytes>, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    society: {
      /**
       * A \[candidate\] was dropped (due to an excess of bids in the system).
       **/
      AutoUnbid: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A membership bid just happened. The given account is the candidate's ID and their offer
       * is the second. \[candidate_id, offer\]
       **/
      Bid: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A \[candidate\] has been suspended
       **/
      CandidateSuspended: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A \[member\] has been challenged
       **/
      Challenged: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A vote has been placed for a defending member \[voter, vote\]
       **/
      DefenderVote: AugmentedEvent<ApiType, [AccountId32, bool]>;
      /**
       * Some funds were deposited into the society account. \[value\]
       **/
      Deposit: AugmentedEvent<ApiType, [u128]>;
      /**
       * The society is founded by the given identity. \[founder\]
       **/
      Founded: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A group of candidates have been inducted. The batch's primary is the first value, the
       * batch in full is the second. \[primary, candidates\]
       **/
      Inducted: AugmentedEvent<ApiType, [AccountId32, Vec<AccountId32>]>;
      /**
       * A \[member\] has been suspended
       **/
      MemberSuspended: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new \[max\] member count has been set
       **/
      NewMaxMembers: AugmentedEvent<ApiType, [u32]>;
      /**
       * A suspended member has been judged. \[who, judged\]
       **/
      SuspendedMemberJudgement: AugmentedEvent<ApiType, [AccountId32, bool]>;
      /**
       * A \[candidate\] was dropped (by their request).
       **/
      Unbid: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Society is unfounded. \[founder\]
       **/
      Unfounded: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A \[candidate\] was dropped (by request of who vouched for them).
       **/
      Unvouch: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A vote has been placed \[candidate, voter, vote\]
       **/
      Vote: AugmentedEvent<ApiType, [AccountId32, AccountId32, bool]>;
      /**
       * A membership bid just happened by vouching. The given account is the candidate's ID and
       * their offer is the second. The vouching party is the third. \[candidate_id, offer, vouching\]
       **/
      Vouch: AugmentedEvent<ApiType, [AccountId32, u128, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    staking: {
      /**
       * An account has bonded this amount. \[stash, amount\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account has stopped participating as either a validator or nominator.
       * \[stash\]
       **/
      Chilled: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       * \[era_index, validator_payout, remainder\]
       **/
      EraPayout: AugmentedEvent<ApiType, [u32, u128, u128]>;
      /**
       * A nominator has been kicked from a validator. \[nominator, stash\]
       **/
      Kicked: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed. \[session_index\]
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [u32]>;
      /**
       * The staker has been rewarded by this amount. \[stash, amount\]
       **/
      Reward: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * One validator (and its nominators) has been slashed by the given amount.
       * \[validator, amount\]
       **/
      Slash: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A new set of stakers was elected.
       **/
      StakingElection: AugmentedEvent<ApiType, []>;
      /**
       * The election failed. No new era is planned.
       **/
      StakingElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * An account has unbonded this amount. \[stash, amount\]
       **/
      Unbonded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue. \[stash, amount\]
       **/
      Withdrawn: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [FrameSupportWeightsDispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * On on-chain remark happened. \[origin, remark_hash\]
       **/
      Remarked: AugmentedEvent<ApiType, [AccountId32, H256]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [H256]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [H256, u32, u32]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [H256]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId32, u32, H256, u32]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId32, H256, bool, u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tips: {
      /**
       * A new tip suggestion has been opened. \[tip_hash\]
       **/
      NewTip: AugmentedEvent<ApiType, [H256]>;
      /**
       * A tip suggestion has been closed. \[tip_hash, who, payout\]
       **/
      TipClosed: AugmentedEvent<ApiType, [H256, AccountId32, u128]>;
      /**
       * A tip suggestion has reached threshold and is closing. \[tip_hash\]
       **/
      TipClosing: AugmentedEvent<ApiType, [H256]>;
      /**
       * A tip suggestion has been retracted. \[tip_hash\]
       **/
      TipRetracted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
       **/
      TipSlashed: AugmentedEvent<ApiType, [H256, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionStorage: {
      /**
       * Storage proof was successfully checked.
       **/
      ProofChecked: AugmentedEvent<ApiType, []>;
      /**
       * Renewed data under specified index.
       **/
      Renewed: AugmentedEvent<ApiType, [u32]>;
      /**
       * Stored data under specified index.
       **/
      Stored: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * Some funds have been allocated. \[proposal_index, award, beneficiary\]
       **/
      Awarded: AugmentedEvent<ApiType, [u32, u128, AccountId32]>;
      /**
       * Some of our funds have been burnt. \[burn\]
       **/
      Burnt: AugmentedEvent<ApiType, [u128]>;
      /**
       * Some funds have been deposited. \[deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [u128]>;
      /**
       * New proposal. \[proposal_index\]
       **/
      Proposed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
       **/
      Rejected: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       * \[budget_remaining\]
       **/
      Rollover: AugmentedEvent<ApiType, [u128]>;
      /**
       * We have ended a spend period and will now allocate funds. \[budget_remaining\]
       **/
      Spending: AugmentedEvent<ApiType, [u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    uniques: {
      /**
       * An approval for a `delegate` account to transfer the `instance` of an asset `class` was
       * cancelled by its `owner`.
       * \[ class, instance, owner, delegate \]
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [u32, u32, AccountId32, AccountId32]>;
      /**
       * An `instance` of an asset `class` has been approved by the `owner` for transfer by a
       * `delegate`.
       * \[ class, instance, owner, delegate \]
       **/
      ApprovedTransfer: AugmentedEvent<ApiType, [u32, u32, AccountId32, AccountId32]>;
      /**
       * An asset `class` has had its attributes changed by the `Force` origin.
       * \[ class \]
       **/
      AssetStatusChanged: AugmentedEvent<ApiType, [u32]>;
      /**
       * Attribute metadata has been cleared for an asset class or instance.
       * \[ class, maybe_instance, key, maybe_value \]
       **/
      AttributeCleared: AugmentedEvent<ApiType, [u32, Option<u32>, Bytes]>;
      /**
       * New attribute metadata has been set for an asset class or instance.
       * \[ class, maybe_instance, key, value \]
       **/
      AttributeSet: AugmentedEvent<ApiType, [u32, Option<u32>, Bytes, Bytes]>;
      /**
       * An asset `instance` was destroyed. \[ class, instance, owner \]
       **/
      Burned: AugmentedEvent<ApiType, [u32, u32, AccountId32]>;
      /**
       * Some asset `class` was frozen. \[ class \]
       **/
      ClassFrozen: AugmentedEvent<ApiType, [u32]>;
      /**
       * Metadata has been cleared for an asset class. \[ class \]
       **/
      ClassMetadataCleared: AugmentedEvent<ApiType, [u32]>;
      /**
       * New metadata has been set for an asset class. \[ class, data, is_frozen \]
       **/
      ClassMetadataSet: AugmentedEvent<ApiType, [u32, Bytes, bool]>;
      /**
       * Some asset `class` was thawed. \[ class \]
       **/
      ClassThawed: AugmentedEvent<ApiType, [u32]>;
      /**
       * An asset class was created. \[ class, creator, owner \]
       **/
      Created: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32]>;
      /**
       * An asset `class` was destroyed. \[ class \]
       **/
      Destroyed: AugmentedEvent<ApiType, [u32]>;
      /**
       * An asset class was force-created. \[ class, owner \]
       **/
      ForceCreated: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Some asset `instance` was frozen. \[ class, instance \]
       **/
      Frozen: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * An asset `instace` was issued. \[ class, instance, owner \]
       **/
      Issued: AugmentedEvent<ApiType, [u32, u32, AccountId32]>;
      /**
       * Metadata has been cleared for an asset instance. \[ class, instance \]
       **/
      MetadataCleared: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * New metadata has been set for an asset instance.
       * \[ class, instance, data, is_frozen \]
       **/
      MetadataSet: AugmentedEvent<ApiType, [u32, u32, Bytes, bool]>;
      /**
       * The owner changed \[ class, new_owner \]
       **/
      OwnerChanged: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Metadata has been cleared for an asset instance. \[ class, successful_instances \]
       **/
      Redeposited: AugmentedEvent<ApiType, [u32, Vec<u32>]>;
      /**
       * The management team changed \[ class, issuer, admin, freezer \]
       **/
      TeamChanged: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, AccountId32]>;
      /**
       * Some asset `instance` was thawed. \[ class, instance \]
       **/
      Thawed: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * An asset `instace` was transferred. \[ class, instance, from, to \]
       **/
      Transferred: AugmentedEvent<ApiType, [u32, u32, AccountId32, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, SpRuntimeDispatchError]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * An \[account\] has become fully vested. No further vesting can happen.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * The amount vested has been updated. This could indicate more funds are available. The
       * balance given is the amount which is left unvested (and thus locked).
       * \[account, unvested\]
       **/
      VestingUpdated: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
