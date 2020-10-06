---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[multisig](#multisig)**

- **[offences](#offences)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**


___


## balances
 
### BalanceSet(`AccountId`, `Balance`, `Balance`)
- **summary**:   A balance was set by root. \[who, free, reserved\] 
 
### Deposit(`AccountId`, `Balance`)
- **summary**:   Some amount was deposited (e.g. for transaction fees). \[who, deposit\] 
 
### DustLost(`AccountId`, `Balance`)
- **summary**:   An account was removed whose balance was non-zero but below ExistentialDeposit, resulting in an outright loss. \[account, balance\] 
 
### Endowed(`AccountId`, `Balance`)
- **summary**:   An account was created with some free balance. \[account, free_balance\] 
 
### Reserved(`AccountId`, `Balance`)
- **summary**:   Some balance was reserved (moved from free to reserved). \[who, value\] 
 
### ReserveRepatriated(`AccountId`, `AccountId`, `Balance`, `BalanceStatus`)
- **summary**:   Some balance was moved from the reserve of the first account to the second account. Final argument indicates the destination balance type. \[from, to, balance, destination_status\] 
 
### Transfer(`AccountId`, `AccountId`, `Balance`)
- **summary**:   Transfer succeeded. \[from, to, value\] 
 
### Unreserved(`AccountId`, `Balance`)
- **summary**:   Some balance was unreserved (moved from reserved to free). \[who, value\] 

___


## contracts
 
### CodeStored(`Hash`)
- **summary**:   Code with the specified hash has been stored. \[code_hash\] 
 
### ContractExecution(`AccountId`, `Bytes`)
- **summary**:   An event deposited upon execution of a contract from the account. \[account, data\] 
 
### Evicted(`AccountId`, `bool`)
- **summary**:   Contract has been evicted and is now in tombstone state. \[contract, tombstone\] 

  #### Params 

  - `contract`: `AccountId`: The account ID of the evicted contract. 

  - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
 
### Instantiated(`AccountId`, `AccountId`)
- **summary**:   Contract deployed by address at the specified address. \[owner, contract\] 
 
### Restored(`AccountId`, `AccountId`, `Hash`, `Balance`)
- **summary**:   Restoration for a contract has been successful. \[donor, dest, code_hash, rent_allowance\] 

  #### Params 

  - `donor`: `AccountId`: Account ID of the restoring contract 

  - `dest`: `AccountId`: Account ID of the restored contract

  - `code_hash`: `Hash`: Code hash of the restored contract

  - `rent_allowance: `Balance`: Rent allowance of the restored contract
 
### ScheduleUpdated(`u32`)
- **summary**:   Triggered when the current \[schedule\] is updated. 

___


## council
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). \[account, proposal_hash, voted, yes, no\] 

___


## democracy
 
### Blacklisted(`Hash`)
- **summary**:   A proposal \[hash\] has been blacklisted permanently. 
 
### Cancelled(`ReferendumIndex`)
- **summary**:   A referendum has been cancelled. \[ref_index\] 
 
### Delegated(`AccountId`, `AccountId`)
- **summary**:   An account has delegated their vote to another account. \[who, target\] 
 
### Executed(`ReferendumIndex`, `bool`)
- **summary**:   A proposal has been enacted. \[ref_index, is_ok\] 
 
### ExternalTabled()
- **summary**:   An external proposal has been tabled. 
 
### NotPassed(`ReferendumIndex`)
- **summary**:   A proposal has been rejected by referendum. \[ref_index\] 
 
### Passed(`ReferendumIndex`)
- **summary**:   A proposal has been approved by referendum. \[ref_index\] 
 
### PreimageInvalid(`Hash`, `ReferendumIndex`)
- **summary**:   A proposal could not be executed because its preimage was invalid. \[proposal_hash, ref_index\] 
 
### PreimageMissing(`Hash`, `ReferendumIndex`)
- **summary**:   A proposal could not be executed because its preimage was missing. \[proposal_hash, ref_index\] 
 
### PreimageNoted(`Hash`, `AccountId`, `Balance`)
- **summary**:   A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\] 
 
### PreimageReaped(`Hash`, `AccountId`, `Balance`, `AccountId`)
- **summary**:   A registered preimage was removed and the deposit collected by the reaper. \[proposal_hash, provider, deposit, reaper\] 
 
### PreimageUsed(`Hash`, `AccountId`, `Balance`)
- **summary**:   A proposal preimage was removed and used (the deposit was returned). \[proposal_hash, provider, deposit\] 
 
### Proposed(`PropIndex`, `Balance`)
- **summary**:   A motion has been proposed by a public account. \[proposal_index, deposit\] 
 
### Started(`ReferendumIndex`, `VoteThreshold`)
- **summary**:   A referendum has begun. \[ref_index, threshold\] 
 
### Tabled(`PropIndex`, `Balance`, `Vec<AccountId>`)
- **summary**:   A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\] 
 
### Undelegated(`AccountId`)
- **summary**:   An \[account\] has cancelled a previous delegation operation. 
 
### Unlocked(`AccountId`)
- **summary**:   An \[account\] has been unlocked successfully. 
 
### Vetoed(`AccountId`, `Hash`, `BlockNumber`)
- **summary**:   An external proposal has been vetoed. \[who, proposal_hash, until\] 

___


## elections
 
### ElectionError()
- **summary**:   Internal error happened while trying to perform election. 
 
### EmptyTerm()
- **summary**:   No (or not enough) candidates existed for this round. This is different from `NewTerm(\[\])`. See the description of `NewTerm`. 
 
### MemberKicked(`AccountId`)
- **summary**:   A \[member\] has been removed. This should always be followed by either `NewTerm` or `EmptyTerm`. 
 
### MemberRenounced(`AccountId`)
- **summary**:   A \[member\] has renounced their candidacy. 
 
### NewTerm(`Vec<(AccountId,Balance)>`)
- **summary**:   A new term with \[new_members\]. This indicates that enough candidates existed to run the election, not that enough have has been elected. The inner value must be examined for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to begin with. 
 
### VoterReported(`AccountId`, `AccountId`, `bool`)
- **summary**:   A voter was reported with the the report being successful or not. \[voter, reporter, success\] 

___


## grandpa
 
### NewAuthorities(`AuthorityList`)
- **summary**:   New authority set has been applied. \[authority_set\] 
 
### Paused()
- **summary**:   Current authority set has been paused. 
 
### Resumed()
- **summary**:   Current authority set has been resumed. 

___


## identity
 
### IdentityCleared(`AccountId`, `Balance`)
- **summary**:   A name was cleared, and the given balance returned. \[who, deposit\] 
 
### IdentityKilled(`AccountId`, `Balance`)
- **summary**:   A name was removed and the given balance slashed. \[who, deposit\] 
 
### IdentitySet(`AccountId`)
- **summary**:   A name was set or reset (which will remove all judgements). \[who\] 
 
### JudgementGiven(`AccountId`, `RegistrarIndex`)
- **summary**:   A judgement was given by a registrar. \[target, registrar_index\] 
 
### JudgementRequested(`AccountId`, `RegistrarIndex`)
- **summary**:   A judgement was asked from a registrar. \[who, registrar_index\] 
 
### JudgementUnrequested(`AccountId`, `RegistrarIndex`)
- **summary**:   A judgement request was retracted. \[who, registrar_index\] 
 
### RegistrarAdded(`RegistrarIndex`)
- **summary**:   A registrar was added. \[registrar_index\] 
 
### SubIdentityAdded(`AccountId`, `AccountId`, `Balance`)
- **summary**:   A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\] 
 
### SubIdentityRemoved(`AccountId`, `AccountId`, `Balance`)
- **summary**:   A sub-identity was removed from an identity and the deposit freed. \[sub, main, deposit\] 
 
### SubIdentityRevoked(`AccountId`, `AccountId`, `Balance`)
- **summary**:   A sub-identity was cleared, and the given deposit repatriated from the main identity account to the sub-identity account. \[sub, main, deposit\] 

___


## imOnline
 
### AllGood()
- **summary**:   At the end of the session, no offence was committed. 
 
### HeartbeatReceived(`AuthorityId`)
- **summary**:   A new heartbeat was received from `AuthorityId` \[authority_id\] 
 
### SomeOffline(`Vec<IdentificationTuple>`)
- **summary**:   At the end of the session, at least one validator was found to be \[offline\]. 

___


## indices
 
### IndexAssigned(`AccountId`, `AccountIndex`)
- **summary**:   A account index was assigned. \[who, index\] 
 
### IndexFreed(`AccountIndex`)
- **summary**:   A account index has been freed up (unassigned). \[index\] 
 
### IndexFrozen(`AccountIndex`, `AccountId`)
- **summary**:   A account index has been frozen to its current account ID. \[who, index\] 

___


## multisig
 
### MultisigApproval(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **summary**:   A multisig operation has been approved by someone. \[approving, timepoint, multisig, call_hash\] 
 
### MultisigCancelled(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **summary**:   A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\] 
 
### MultisigExecuted(`AccountId`, `Timepoint`, `AccountId`, `CallHash`, `DispatchResult`)
- **summary**:   A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\] 
 
### NewMultisig(`AccountId`, `AccountId`, `CallHash`)
- **summary**:   A new multisig operation has begun. \[approving, multisig, call_hash\] 

___


## offences
 
### Offence(`Kind`, `OpaqueTimeSlot`, `bool`)
- **summary**:   There is an offence reported of the given `kind` happened at the `session_index` and (kind-specific) time slot. This event is not deposited for duplicate slashes. last element indicates of the offence was applied (true) or queued (false) \[kind, timeslot, applied\]. 

___


## proxy
 
### Announced(`AccountId`, `AccountId`, `Hash`)
- **summary**:   An announcement was placed to make a call in the future. \[real, proxy, call_hash\] 
 
### AnonymousCreated(`AccountId`, `AccountId`, `ProxyType`, `u16`)
- **summary**:   Anonymous account has been created by new proxy with given disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\] 
 
### ProxyExecuted(`DispatchResult`)
- **summary**:   A proxy was executed correctly, with the given \[result\]. 

___


## recovery
 
### AccountRecovered(`AccountId`, `AccountId`)
- **summary**:   Lost account has been successfully recovered by rescuer account. \[lost, rescuer\] 
 
### RecoveryClosed(`AccountId`, `AccountId`)
- **summary**:   A recovery process for lost account by rescuer account has been closed. \[lost, rescuer\] 
 
### RecoveryCreated(`AccountId`)
- **summary**:   A recovery process has been set up for an \[account\]. 
 
### RecoveryInitiated(`AccountId`, `AccountId`)
- **summary**:   A recovery process has been initiated for lost account by rescuer account. \[lost, rescuer\] 
 
### RecoveryRemoved(`AccountId`)
- **summary**:   A recovery process has been removed for an \[account\]. 
 
### RecoveryVouched(`AccountId`, `AccountId`, `AccountId`)
- **summary**:   A recovery process for lost account by rescuer account has been vouched for by sender. \[lost, rescuer, sender\] 

___


## scheduler
 
### Canceled(`BlockNumber`, `u32`)
- **summary**:   Canceled some task. \[when, index\] 
 
### Dispatched(`TaskAddress`, `Option<Bytes>`, `DispatchResult`)
- **summary**:   Dispatched some task. \[task, id, result\] 
 
### Scheduled(`BlockNumber`, `u32`)
- **summary**:   Scheduled some task. \[when, index\] 

___


## session
 
### NewSession(`SessionIndex`)
- **summary**:   New session has happened. Note that the argument is the \[session_index\], not the block number as the type might suggest. 

___


## society
 
### AutoUnbid(`AccountId`)
- **summary**:   A \[candidate\] was dropped (due to an excess of bids in the system). 
 
### Bid(`AccountId`, `Balance`)
- **summary**:   A membership bid just happened. The given account is the candidate's ID and their offer is the second. \[candidate_id, offer\] 
 
### CandidateSuspended(`AccountId`)
- **summary**:   A \[candidate\] has been suspended 
 
### Challenged(`AccountId`)
- **summary**:   A \[member\] has been challenged 
 
### DefenderVote(`AccountId`, `bool`)
- **summary**:   A vote has been placed for a defending member \[voter, vote\] 
 
### Deposit(`Balance`)
- **summary**:   Some funds were deposited into the society account. \[value\] 
 
### Founded(`AccountId`)
- **summary**:   The society is founded by the given identity. \[founder\] 
 
### Inducted(`AccountId`, `Vec<AccountId>`)
- **summary**:   A group of candidates have been inducted. The batch's primary is the first value, the batch in full is the second. \[primary, candidates\] 
 
### MemberSuspended(`AccountId`)
- **summary**:   A \[member\] has been suspended 
 
### NewMaxMembers(`u32`)
- **summary**:   A new \[max\] member count has been set 
 
### SuspendedMemberJudgement(`AccountId`, `bool`)
- **summary**:   A suspended member has been judged. \[who, judged\] 
 
### Unbid(`AccountId`)
- **summary**:   A \[candidate\] was dropped (by their request). 
 
### Unfounded(`AccountId`)
- **summary**:   Society is unfounded. \[founder\] 
 
### Unvouch(`AccountId`)
- **summary**:   A \[candidate\] was dropped (by request of who vouched for them). 
 
### Vote(`AccountId`, `AccountId`, `bool`)
- **summary**:   A vote has been placed \[candidate, voter, vote\] 
 
### Vouch(`AccountId`, `Balance`, `AccountId`)
- **summary**:   A membership bid just happened by vouching. The given account is the candidate's ID and their offer is the second. The vouching party is the third. \[candidate_id, offer, vouching\] 

___


## staking
 
### Bonded(`AccountId`, `Balance`)
- **summary**:   An account has bonded this amount. \[stash, amount\] 

  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably, it will not be emitted for staking rewards when they are added to stake. 
 
### EraPayout(`EraIndex`, `Balance`, `Balance`)
- **summary**:   The era payout has been set; the first balance is the validator-payout; the second is the remainder from the maximum amount of reward. \[era_index, validator_payout, remainder\] 
 
### OldSlashingReportDiscarded(`SessionIndex`)
- **summary**:   An old slashing report from a prior era was discarded because it could not be processed. \[session_index\] 
 
### Reward(`AccountId`, `Balance`)
- **summary**:   The staker has been rewarded by this amount. \[stash, amount\] 
 
### Slash(`AccountId`, `Balance`)
- **summary**:   One validator (and its nominators) has been slashed by the given amount. \[validator, amount\] 
 
### SolutionStored(`ElectionCompute`)
- **summary**:   A new solution for the upcoming election has been stored. \[compute\] 
 
### StakingElection(`ElectionCompute`)
- **summary**:   A new set of stakers was elected with the given \[compute\]. 
 
### Unbonded(`AccountId`, `Balance`)
- **summary**:   An account has unbonded this amount. \[stash, amount\] 
 
### Withdrawn(`AccountId`, `Balance`)
- **summary**:   An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance` from the unlocking queue. \[stash, amount\] 

___


## sudo
 
### KeyChanged(`AccountId`)
- **summary**:   The \[sudoer\] just switched identity; the old key is supplied. 
 
### Sudid(`DispatchResult`)
- **summary**:   A sudo just took place. \[result\] 
 
### SudoAsDone(`bool`)
- **summary**:   A sudo just took place. \[result\] 

___


## system
 
### CodeUpdated()
- **summary**:   `:code` was updated. 
 
### ExtrinsicFailed(`DispatchError`, `DispatchInfo`)
- **summary**:   An extrinsic failed. \[error, info\] 
 
### ExtrinsicSuccess(`DispatchInfo`)
- **summary**:   An extrinsic completed successfully. \[info\] 
 
### KilledAccount(`AccountId`)
- **summary**:   An \[account\] was reaped. 
 
### NewAccount(`AccountId`)
- **summary**:   A new \[account\] was created. 

___


## technicalCommittee
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). \[account, proposal_hash, voted, yes, no\] 

___


## technicalMembership
 
### Dummy(`PhantomData`)
- **summary**:   Phantom member, never used. 
 
### KeyChanged()
- **summary**:   One of the members' keys changed. 
 
### MemberAdded()
- **summary**:   The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **summary**:   The given member was removed; see the transaction for who. 
 
### MembersReset()
- **summary**:   The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **summary**:   Two members were swapped; see the transaction for who. 

___


## treasury
 
### Awarded(`ProposalIndex`, `Balance`, `AccountId`)
- **summary**:   Some funds have been allocated. \[proposal_index, award, beneficiary\] 
 
### BountyAwarded(`BountyIndex`, `AccountId`)
- **summary**:   A bounty is awarded to a beneficiary. [index, beneficiary] 
 
### BountyBecameActive(`BountyIndex`)
- **summary**:   A bounty proposal is funded and became active. [index] 
 
### BountyCanceled(`BountyIndex`)
- **summary**:   A bounty is cancelled. [index] 
 
### BountyClaimed(`BountyIndex`, `Balance`, `AccountId`)
- **summary**:   A bounty is claimed by beneficiary. [index, payout, beneficiary] 
 
### BountyExtended(`BountyIndex`)
- **summary**:   A bounty expiry is extended. [index] 
 
### BountyProposed(`BountyIndex`)
- **summary**:   New bounty proposal. [index] 
 
### BountyRejected(`BountyIndex`, `Balance`)
- **summary**:   A bounty proposal was rejected; funds were slashed. [index, bond] 
 
### Burnt(`Balance`)
- **summary**:   Some of our funds have been burnt. \[burn\] 
 
### Deposit(`Balance`)
- **summary**:   Some funds have been deposited. \[deposit\] 
 
### NewTip(`Hash`)
- **summary**:   A new tip suggestion has been opened. \[tip_hash\] 
 
### Proposed(`ProposalIndex`)
- **summary**:   New proposal. \[proposal_index\] 
 
### Rejected(`ProposalIndex`, `Balance`)
- **summary**:   A proposal was rejected; funds were slashed. \[proposal_index, slashed\] 
 
### Rollover(`Balance`)
- **summary**:   Spending has finished; this is the amount that rolls over until next spend. \[budget_remaining\] 
 
### Spending(`Balance`)
- **summary**:   We have ended a spend period and will now allocate funds. \[budget_remaining\] 
 
### TipClosed(`Hash`, `AccountId`, `Balance`)
- **summary**:   A tip suggestion has been closed. \[tip_hash, who, payout\] 
 
### TipClosing(`Hash`)
- **summary**:   A tip suggestion has reached threshold and is closing. \[tip_hash\] 
 
### TipRetracted(`Hash`)
- **summary**:   A tip suggestion has been retracted. \[tip_hash\] 

___


## utility
 
### BatchCompleted()
- **summary**:   Batch of dispatches completed fully with no error. 
 
### BatchInterrupted(`u32`, `DispatchError`)
- **summary**:   Batch of dispatches did not complete fully. Index of first failing dispatch given, as well as the error. \[index, error\] 

___


## vesting
 
### VestingCompleted(`AccountId`)
- **summary**:   An \[account\] has become fully vested. No further vesting can happen. 
 
### VestingUpdated(`AccountId`, `Balance`)
- **summary**:   The amount vested has been updated. This could indicate more funds are available. The balance given is the amount which is left unvested (and thus locked). \[account, unvested\] 
