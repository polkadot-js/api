## Events

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime.
- **[balances](#balances)**

- **[contract](#contract)**

- **[council](#council)**

- **[councilMotions](#councilMotions)**

- **[councilVoting](#councilVoting)**

- **[democracy](#democracy)**

- **[fees](#fees)**

- **[grandpa](#grandpa)**

- **[indices](#indices)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[treasury](#treasury)**


___


### balances

▸ **NewAccount**(`AccountId`, `Balance`)
- **summary**:   A new account was created.

▸ **ReapedAccount**(`AccountId`)
- **summary**:   An account was reaped.

▸ **Transfer**(`AccountId`, `AccountId`, `Balance`, `Balance`)
- **summary**:   Transfer succeeded (from, to, value, fees).

___


### contract

▸ **CodeStored**(`Hash`)
- **summary**:   Code with the specified hash has been stored.

▸ **Dispatched**(`AccountId`, `bool`)
- **summary**:   A call was dispatched from the given account. The bool signals whether it was  successful execution or not.

▸ **Instantiated**(`AccountId`, `AccountId`)
- **summary**:   Contract deployed by address at the specified address.

▸ **ScheduleUpdated**(`u32`)
- **summary**:   Triggered when the current schedule is updated.

▸ **Transfer**(`AccountId`, `AccountId`, `Balance`)
- **summary**:   Transfer happened `from` -> `to` with given `value` as part of a `message-call` or `create`.

___


### council

▸ **BadReaperSlashed**(`AccountId`)
- **summary**:   slashed reaper

▸ **TallyFinalised**(`Vec<AccountId>`, `Vec<AccountId>`)
- **summary**:   A tally (for approval votes of council seat(s)) has ended (with one or more new members).

▸ **TallyStarted**(`u32`)
- **summary**:   A tally (for approval votes of council seat(s)) has started.

▸ **VoterReaped**(`AccountId`, `AccountId`)
- **summary**:   reaped voter, reaper

___


### councilMotions

▸ **Approved**(`Hash`)
- **summary**:   A motion was approved by the required threshold.

▸ **Disapproved**(`Hash`)
- **summary**:   A motion was not approved by the required threshold.

▸ **Executed**(`Hash`, `bool`)
- **summary**:   A motion was executed; `bool` is true if returned without error.

▸ **Proposed**(`AccountId`, `ProposalIndex`, `Hash`, `u32`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given u32).

▸ **Voted**(`AccountId`, `Hash`, `bool`, `u32`, `u32`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving  a tally (yes votes and no votes given as u32s respectively).

___


### councilVoting

▸ **TallyCancelation**(`Hash`, `u32`, `u32`, `u32`)
- **summary**:   A voting tally has happened for a referendum cancellation vote.  Last three are yes, no, abstain counts.

▸ **TallyReferendum**(`Hash`, `u32`, `u32`, `u32`)
- **summary**:   A voting tally has happened for a referendum vote.  Last three are yes, no, abstain counts.

___


### democracy

▸ **Cancelled**(`ReferendumIndex`)

▸ **Executed**(`ReferendumIndex`, `bool`)

▸ **NotPassed**(`ReferendumIndex`)

▸ **Passed**(`ReferendumIndex`)

▸ **Proposed**(`PropIndex`, `Balance`)

▸ **Started**(`ReferendumIndex`, `VoteThreshold`)

▸ **Tabled**(`PropIndex`, `Balance`, `Vec<AccountId>`)

___


### fees

▸ **Charged**(`u32`, `Amount`)
- **summary**:   Fee charged (extrinsic_index, fee_amount)

___


### grandpa

▸ **NewAuthorities**(`Vec<(SessionKey,u64)>`)
- **summary**:   New authority set has been applied.

___


### indices

▸ **NewAccountIndex**(`AccountId`, `AccountIndex`)
- **summary**:   A new account index was assigned.   This event is not triggered when an existing index is reassigned  to another `AccountId`.

___


### session

▸ **NewSession**(`BlockNumber`)
- **summary**:   New session has happened. Note that the argument is the session index, not the block  number as the type might suggest.

___


### staking

▸ **OfflineSlash**(`AccountId`, `Balance`)
- **summary**:   One validator (and their nominators) has been slashed by the given amount.

▸ **OfflineWarning**(`AccountId`, `u32`)
- **summary**:   One validator (and their nominators) has been given a offline-warning (they're still  within their grace). The accrued number of slashes is recorded, too.

▸ **Reward**(`Balance`)
- **summary**:   All validators have been rewarded by the given balance.

___


### sudo

▸ **KeyChanged**(`AccountId`)
- **summary**:   The sudoer just switched identity; the old key is supplied.

▸ **Sudid**(`bool`)
- **summary**:   A sudo just took place.

___


### system

▸ **ExtrinsicFailed**()
- **summary**:   An extrinsic failed.

▸ **ExtrinsicSuccess**()
- **summary**:   An extrinsic completed successfully.

___


### treasury

▸ **Awarded**(`ProposalIndex`, `Balance`, `AccountId`)
- **summary**:   Some funds have been allocated.

▸ **Burnt**(`Balance`)
- **summary**:   Some of our funds have been burnt.

▸ **Proposed**(`ProposalIndex`)
- **summary**:   New proposal.

▸ **Rollover**(`Balance`)
- **summary**:   Spending has finished; this is the amount that rolls over until next spend.

▸ **Spending**(`Balance`)
- **summary**:   We have ended a spend period and will now allocate funds.
