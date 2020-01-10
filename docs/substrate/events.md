## Events

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)
- **[balances](#balances)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[grandpa](#grandpa)**

- **[imOnline](#imOnline)**

- **[indices](#indices)**

- **[nicks](#nicks)**

- **[offences](#offences)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalCommittee)**

- **[technicalMembership](#technicalMembership)**

- **[treasury](#treasury)**

- **[utility](#utility)**


___


## balances

### NewAccount(`AccountId`, `Balance`)
- **summary**: A new account was created.

### ReapedAccount(`AccountId`)
- **summary**: An account was reaped.

### Transfer(`AccountId`, `AccountId`, `Balance`, `Balance`)
- **summary**: Transfer succeeded (from, to, value, fees).

___


## contracts

### CodeStored(`Hash`)
- **summary**: Code with the specified hash has been stored.

### Contract(`AccountId`, `Bytes`)
- **summary**: An event from contract of account.

### Dispatched(`AccountId`, `bool`)
- **summary**: A call was dispatched from the given account. The bool signals whether it was successful execution or not.

### Instantiated(`AccountId`, `AccountId`)
- **summary**: Contract deployed by address at the specified address.

### ScheduleUpdated(`u32`)
- **summary**: Triggered when the current schedule is updated.

### Transfer(`AccountId`, `AccountId`, `Balance`)
- **summary**: Transfer happened `from` to `to` with given `value` as part of a `call` or `instantiate`.

___


## council

### Approved(`Hash`)
- **summary**: A motion was approved by the required threshold.

### Disapproved(`Hash`)
- **summary**: A motion was not approved by the required threshold.

### Executed(`Hash`, `bool`)
- **summary**: A motion was executed; `bool` is true if returned without error.

### MemberExecuted(`Hash`, `bool`)
- **summary**: A single member did some action; `bool` is true if returned without error.

### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**: A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).

### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**: A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`).

___


## democracy

### Cancelled(`ReferendumIndex`)
- **summary**: A referendum has been cancelled.

### Delegated(`AccountId`, `AccountId`)
- **summary**: An account has delegated their vote to another account.

### Executed(`ReferendumIndex`, `bool`)
- **summary**: A proposal has been enacted.

### ExternalTabled()
- **summary**: An external proposal has been tabled.

### NotPassed(`ReferendumIndex`)
- **summary**: A proposal has been rejected by referendum.

### Passed(`ReferendumIndex`)
- **summary**: A proposal has been approved by referendum.

### PreimageInvalid(`Hash`, `ReferendumIndex`)
- **summary**: A proposal could not be executed because its preimage was invalid.

### PreimageMissing(`Hash`, `ReferendumIndex`)
- **summary**: A proposal could not be executed because its preimage was missing.

### PreimageNoted(`Hash`, `AccountId`, `Balance`)
- **summary**: A proposal's preimage was noted, and the deposit taken.

### PreimageReaped(`Hash`, `AccountId`, `Balance`, `AccountId`)
- **summary**: A registered preimage was removed and the deposit collected by the reaper (last item).

### PreimageUsed(`Hash`, `AccountId`, `Balance`)
- **summary**: A proposal preimage was removed and used (the deposit was returned).

### Proposed(`PropIndex`, `Balance`)
- **summary**: A motion has been proposed by a public account.

### Started(`ReferendumIndex`, `VoteThreshold`)
- **summary**: A referendum has begun.

### Tabled(`PropIndex`, `Balance`, `Vec<AccountId>`)
- **summary**: A public proposal has been tabled for referendum vote.

### Undelegated(`AccountId`)
- **summary**: An account has cancelled a previous delegation operation.

### Vetoed(`AccountId`, `Hash`, `BlockNumber`)
- **summary**: An external proposal has been vetoed.

___


## elections

### EmptyTerm()
- **summary**: No (or not enough) candidates existed for this round.

### MemberKicked(`AccountId`)
- **summary**: A member has been removed. This should always be followed by either `NewTerm` ot `EmptyTerm`.

### MemberRenounced(`AccountId`)
- **summary**: A member has renounced their candidacy.

### NewTerm(`Vec<(AccountId,Balance)>`)
- **summary**: A new term with new members. This indicates that enough candidates existed, not that enough have has been elected. The inner value must be examined for this purpose.

### VoterReported(`AccountId`, `AccountId`, `bool`)
- **summary**: A voter (first element) was reported (byt the second element) with the the report being successful or not (third element).

___


## grandpa

### NewAuthorities(`AuthorityList`)
- **summary**: New authority set has been applied.

### Paused()
- **summary**: Current authority set has been paused.

### Resumed()
- **summary**: Current authority set has been resumed.

___


## imOnline

### AllGood()
- **summary**: At the end of the session, no offence was committed.

### HeartbeatReceived(`AuthorityId`)
- **summary**: A new heartbeat was received from `AuthorityId`

### SomeOffline(`Vec<IdentificationTuple>`)
- **summary**: At the end of the session, at least once validator was found to be offline.

___


## indices

### NewAccountIndex(`AccountId`, `AccountIndex`)
- **summary**: A new account index was assigned.  This event is not triggered when an existing index is reassigned to another `AccountId`.

___


## nicks

### NameChanged(`AccountId`)
- **summary**: A name was changed.

### NameCleared(`AccountId`, `Balance`)
- **summary**: A name was cleared, and the given balance returned.

### NameForced(`AccountId`)
- **summary**: A name was forcibly set.

### NameKilled(`AccountId`, `Balance`)
- **summary**: A name was removed and the given balance slashed.

### NameSet(`AccountId`)
- **summary**: A name was set.

___


## offences

### Offence(`Kind`, `OpaqueTimeSlot`)
- **summary**: There is an offence reported of the given `kind` happened at the `session_index` and (kind-specific) time slot. This event is not deposited for duplicate slashes.

___


## session

### NewSession(`SessionIndex`)
- **summary**: New session has happened. Note that the argument is the session index, not the block number as the type might suggest.

___


## staking

### OldSlashingReportDiscarded(`SessionIndex`)
- **summary**: An old slashing report from a prior era was discarded because it could not be processed.

### Reward(`Balance`, `Balance`)
- **summary**: All validators have been rewarded by the first balance; the second is the remainder from the maximum amount of reward.

### Slash(`AccountId`, `Balance`)
- **summary**: One validator (and its nominators) has been slashed by the given amount.

___


## sudo

### KeyChanged(`AccountId`)
- **summary**: The sudoer just switched identity; the old key is supplied.

### Sudid(`bool`)
- **summary**: A sudo just took place.

### SudoAsDone(`bool`)
- **summary**: A sudo just took place.

___


## system

### ExtrinsicFailed(`DispatchError`, `DispatchInfo`)
- **summary**: An extrinsic failed.

### ExtrinsicSuccess(`DispatchInfo`)
- **summary**: An extrinsic completed successfully.

___


## technicalCommittee

### Approved(`Hash`)
- **summary**: A motion was approved by the required threshold.

### Disapproved(`Hash`)
- **summary**: A motion was not approved by the required threshold.

### Executed(`Hash`, `bool`)
- **summary**: A motion was executed; `bool` is true if returned without error.

### MemberExecuted(`Hash`, `bool`)
- **summary**: A single member did some action; `bool` is true if returned without error.

### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**: A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).

### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**: A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`).

___


## technicalMembership

### Dummy(`PhantomData`)
- **summary**: Phantom member, never used.

### KeyChanged()
- **summary**: One of the members' keys changed.

### MemberAdded()
- **summary**: The given member was added; see the transaction for who.

### MemberRemoved()
- **summary**: The given member was removed; see the transaction for who.

### MembersReset()
- **summary**: The membership was reset; see the transaction for who the new set is.

### MembersSwapped()
- **summary**: Two members were swapped; see the transaction for who.

___


## treasury

### Awarded(`ProposalIndex`, `Balance`, `AccountId`)
- **summary**: Some funds have been allocated.

### Burnt(`Balance`)
- **summary**: Some of our funds have been burnt.

### Deposit(`Balance`)
- **summary**: Some funds have been deposited.

### Proposed(`ProposalIndex`)
- **summary**: New proposal.

### Rollover(`Balance`)
- **summary**: Spending has finished; this is the amount that rolls over until next spend.

### Spending(`Balance`)
- **summary**: We have ended a spend period and will now allocate funds.

___


## utility

### BatchExecuted(`Vec<Result<Null,DispatchError>>`)
