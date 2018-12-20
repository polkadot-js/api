## <a id='top' style='text-decoration: none;'>Events

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime.
- **[balances](#balances)**

- **[contract](#contract)**

- **[council](#council)**

- **[councilMotions](#councilMotions)**

- **[councilVoting](#councilVoting)**

- **[democracy](#democracy)**

- **[grandpa](#grandpa)**

- **[session](#session)**

- **[staking](#staking)**

- **[system](#system)**

- **[treasury](#treasury)**

- **[upgradeKey](#upgradeKey)**


___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='balances'></a>balances

▸ **NewAccount**(`AccountId`, `AccountIndex`, `NewAccountOutcome`)
- **summary**:   A new account was created.

▸ **ReapedAccount**(`AccountId`)
- **summary**:   An account was reaped.

▸ **Transfer**(`AccountId`, `AccountId`, `Balance`, `Balance`)
- **summary**:   Transfer succeeded (from, to, value, fees).

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='contract'></a>contract

▸ **Created**(`AccountId`, `AccountId`)
- **summary**:   Contract deployed by address at the specified address.

▸ **Transfer**(`AccountId`, `AccountId`, `Balance`)
- **summary**:   Transfer happened `from` -> `to` with given `value` as part of a `message-call` or `create`.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='council'></a>council

▸ **BadReaperSlashed**(`AccountId`)
- **summary**:   slashed reaper

▸ **TallyFinalised**(`Vec<AccountId>`, `Vec<AccountId>`)
- **summary**:   A tally (for approval votes of council seat(s)) has ended (with one or more new members).

▸ **TallyStarted**(`u32`)
- **summary**:   A tally (for approval votes of council seat(s)) has started.

▸ **VoterReaped**(`AccountId`, `AccountId`)
- **summary**:   reaped voter, reaper

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='councilMotions'></a>councilMotions

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
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='councilVoting'></a>councilVoting

▸ **TallyCancelation**(`Hash`, `u32`, `u32`, `u32`)
- **summary**:   A voting tally has happened for a referendum cancellation vote.  Last three are yes, no, abstain counts.

▸ **TallyReferendum**(`Hash`, `u32`, `u32`, `u32`)
- **summary**:   A voting tally has happened for a referendum vote.  Last three are yes, no, abstain counts.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='democracy'></a>democracy

▸ **Cancelled**(`ReferendumIndex`)

▸ **Executed**(`ReferendumIndex`, `bool`)

▸ **NotPassed**(`ReferendumIndex`)

▸ **Passed**(`ReferendumIndex`)

▸ **Started**(`ReferendumIndex`, `VoteThreshold`)

▸ **Tabled**(`PropIndex`, `Balance`, `Vec<AccountId>`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='grandpa'></a>grandpa

▸ **NewAuthorities**(`Vec<(SessionKey,u64)>`)
- **summary**:   New authority set has been applied.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='session'></a>session

▸ **NewSession**(`BlockNumber`)
- **summary**:   New session has happened. Note that the argument is the session index, not the block  number as the type might suggest.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='staking'></a>staking

▸ **OfflineSlash**(`AccountId`, `Balance`)
- **summary**:   One validator (and their nominators) has been slashed by the given amount.

▸ **OfflineWarning**(`AccountId`, `u32`)
- **summary**:   One validator (and their nominators) has been given a offline-warning (they're still  within their grace). The accrued number of slashes is recorded, too.

▸ **Reward**(`Balance`)
- **summary**:   All validators have been rewarded by the given balance.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='system'></a>system

▸ **ExtrinsicFailed**()
- **summary**:   An extrinsic failed.

▸ **ExtrinsicSuccess**()
- **summary**:   An extrinsic completed successfully.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='treasury'></a>treasury

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

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='upgradeKey'></a>upgradeKey

▸ **KeyChanged**(`AccountId`)
- **summary**:   An upgrade just happened; old key is supplied as an argument.

▸ **Upgraded**()
- **summary**:   An upgrade just happened.
