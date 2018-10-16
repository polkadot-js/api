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

▸ **transfer**(dest: `Address`, value: `Balance`)

▸ **setBalance**(who: `Address`, free: `Balance`, reserved: `Balance`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='consensus'></a>consensus

▸ **reportMisbehavior**(report: `MisbehaviorReport`)

▸ **noteOffline**(offline_val_indices: `Vec<u32>`)

▸ **remark**(remark: `Bytes`)

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

▸ **setApprovals**(votes: `Vec<bool>`, index: `VoteIndex`)

▸ **reapInactiveVoter**(reporter_index: `u32`, who: `Address`, who_index: `u32`, assumed_vote_index: `VoteIndex`)

▸ **retractVoter**(index: `u32`)

▸ **submitCandidacy**(slot: `u32`)

▸ **presentWinner**(candidate: `Address`, total: `Balance`, index: `VoteIndex`)

▸ **setDesiredSeats**(count: `u32`)

▸ **removeMember**(who: `Address`)

▸ **setPresentationDuration**(count: `BlockNumber`)

▸ **setTermDuration**(count: `BlockNumber`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='councilMotions'></a>councilMotions

▸ **propose**(threshold: `u32`, proposal: `Proposal`)

▸ **vote**(proposal: `Hash`, index: `ProposalIndex`, approve: `bool`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='councilVoting'></a>councilVoting

▸ **propose**(proposal: `Proposal`)

▸ **vote**(proposal: `Hash`, approve: `bool`)

▸ **veto**(proposal_hash: `Hash`)

▸ **setCooloffPeriod**(blocks: `BlockNumber`)

▸ **setVotingPeriod**(blocks: `BlockNumber`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='democracy'></a>democracy

▸ **propose**(proposal: `Proposal`, value: `Balance`)

▸ **second**(proposal: `PropIndex`)

▸ **vote**(ref_index: `ReferendumIndex`, approve_proposal: `bool`)

▸ **startReferendum**(proposal: `Proposal`, vote_threshold: `VoteThreshold`)

▸ **cancelReferendum**(ref_index: `ReferendumIndex`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='session'></a>session

▸ **setKey**(key: `SessionKey`)

▸ **setLength**(new: `BlockNumber`)

▸ **forceNewSession**(apply_rewards: `bool`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='staking'></a>staking

▸ **stake**()

▸ **unstake**(intentions_index: `u32`)

▸ **nominate**(target: `Address`)

▸ **unnominate**(target_index: `u32`)

▸ **registerPreferences**(intentions_index: `u32`, prefs: `ValidatorPrefs`)

▸ **setSessionsPerEra**(new: `BlockNumber`)

▸ **setBondingDuration**(new: `BlockNumber`)

▸ **setValidatorCount**(new: `u32`)

▸ **forceNewEra**(apply_rewards: `bool`)

▸ **setOfflineSlashGrace**(new: `u32`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='timestamp'></a>timestamp

▸ **set**(now: `Moment`)

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='treasury'></a>treasury

▸ **proposeSpend**(value: `Balance`, beneficiary: `AccountId`)

▸ **setPot**(new_pot: `Balance`)

▸ **configure**(proposal_bond: `Permill`, proposal_bond_minimum: `Balance`, spend_period: `BlockNumber`, burn: `Permill`)

▸ **rejectProposal**(roposal_id: `ProposalIndex`)

▸ **approveProposal**(proposal_id: `ProposalIndex`)
