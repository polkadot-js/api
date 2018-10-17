## <a id='top' style='text-decoration: none;'>Extrinsics

_The following sections contain Extrinsics methods are part of the default Substrate runtime. Since an Extrinsic is a holder of an object that is just an array of bytes to be included, it does not have a return._
- **[balances](#balances)**

- **[consensus](#consensus)**

- **[contract](#contract)**

- **[council](#council)**

- **[councilMotions](#councilMotions)**

- **[councilVoting](#councilVoting)**

- **[democracy](#democracy)**

- **[session](#session)**

- **[staking](#staking)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**


___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='balances'></a>balances

▸ **setBalance**(who: `Address`, free: `Balance`, reserved: `Balance`)

▸ **transfer**(dest: `Address`, value: `Balance`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='consensus'></a>consensus

▸ **noteOffline**(offline_val_indices: `Vec<u32>`)

▸ **remark**(remark: `Bytes`)

▸ **reportMisbehavior**(report: `MisbehaviorReport`)

▸ **setCode**(new: `Bytes`)

▸ **setStorage**(items: `Vec<KeyValue>`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='contract'></a>contract

▸ **call**(dest: `AccountId`, value: `Balance`, gas_limit: `Gas`, data: `Bytes`)

▸ **create**(value: `Balance`, gas_limit: `Gas`, init_code: `Bytes`, data: `Bytes`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='council'></a>council

▸ **presentWinner**(candidate: `Address`, total: `Balance`, index: `VoteIndex`)

▸ **reapInactiveVoter**(reporter_index: `u32`, who: `Address`, who_index: `u32`, assumed_vote_index: `VoteIndex`)

▸ **removeMember**(who: `Address`)

▸ **retractVoter**(index: `u32`)

▸ **setApprovals**(votes: `Vec<bool>`, index: `VoteIndex`)

▸ **setDesiredSeats**(count: `u32`)

▸ **setPresentationDuration**(count: `BlockNumber`)

▸ **setTermDuration**(count: `BlockNumber`)

▸ **submitCandidacy**(slot: `u32`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='councilMotions'></a>councilMotions

▸ **propose**(threshold: `u32`, proposal: `Proposal`)

▸ **vote**(proposal: `Hash`, index: `ProposalIndex`, approve: `bool`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='councilVoting'></a>councilVoting

▸ **propose**(proposal: `Proposal`)

▸ **setCooloffPeriod**(blocks: `BlockNumber`)

▸ **setVotingPeriod**(blocks: `BlockNumber`)

▸ **veto**(proposal_hash: `Hash`)

▸ **vote**(proposal: `Hash`, approve: `bool`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='democracy'></a>democracy

▸ **cancelReferendum**(ref_index: `ReferendumIndex`)

▸ **propose**(proposal: `Proposal`, value: `Balance`)

▸ **second**(proposal: `PropIndex`)

▸ **startReferendum**(proposal: `Proposal`, vote_threshold: `VoteThreshold`)

▸ **vote**(ref_index: `ReferendumIndex`, approve_proposal: `bool`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='session'></a>session

▸ **forceNewSession**(apply_rewards: `bool`)

▸ **setKey**(key: `SessionKey`)

▸ **setLength**(new: `BlockNumber`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='staking'></a>staking

▸ **forceNewEra**(apply_rewards: `bool`)

▸ **nominate**(target: `Address`)

▸ **registerPreferences**(intentions_index: `u32`, prefs: `ValidatorPrefs`)

▸ **setBondingDuration**(new: `BlockNumber`)

▸ **setOfflineSlashGrace**(new: `u32`)

▸ **setSessionsPerEra**(new: `BlockNumber`)

▸ **setValidatorCount**(new: `u32`)

▸ **stake**()

▸ **unnominate**(target_index: `u32`)

▸ **unstake**(intentions_index: `u32`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='timestamp'></a>timestamp

▸ **set**(now: `Moment`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='treasury'></a>treasury

▸ **approveProposal**(proposal_id: `ProposalIndex`)

▸ **configure**(proposal_bond: `Permill`, proposal_bond_minimum: `Balance`, spend_period: `BlockNumber`, burn: `Permill`)

▸ **proposeSpend**(value: `Balance`, beneficiary: `AccountId`)

▸ **rejectProposal**(roposal_id: `ProposalIndex`)

▸ **setPot**(new_pot: `Balance`)
