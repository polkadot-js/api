## Extrinsics

_The following sections contain Extrinsics methods are part of the default Substrate runtime._
- **[balances](#balances)**

- **[consensus](#consensus)**

- **[contract](#contract)**

- **[council](#council)**

- **[councilMotions](#councilMotions)**

- **[councilVoting](#councilVoting)**

- **[democracy](#democracy)**

- **[finalityTracker](#finalityTracker)**

- **[grandpa](#grandpa)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**


___


### balances

▸ **setBalance**(who: `Address`, free: `Compact<Balance>`, reserved: `Compact<Balance>`)
- **summary**:   Set the balances of a given account.

▸ **transfer**(dest: `Address`, value: `Compact<Balance>`)
- **summary**:   Transfer some liquid free balance to another staker.

___


### consensus

▸ **noteOffline**(offline: `InherentOfflineReport`)
- **summary**:   Note the previous block's validator missed their opportunity to propose a block.

▸ **remark**(_remark: `Bytes`)
- **summary**:   Make some on-chain remark.

▸ **reportMisbehavior**(_report: `Bytes`)
- **summary**:   Report some misbehaviour.

▸ **setCode**(new: `Bytes`)
- **summary**:   Set the new code.

▸ **setHeapPages**(pages: `u64`)
- **summary**:   Set the number of pages in the WebAssembly environment's heap.

▸ **setStorage**(items: `Vec<KeyValue>`)
- **summary**:   Set some items of storage.

___


### contract

▸ **call**(dest: `Address`, value: `Compact<Balance>`, gas_limit: `Compact<Gas>`, data: `Bytes`)
- **summary**:   Make a call to a specified account, optionally transferring some balance.

▸ **create**(endowment: `Compact<Balance>`, gas_limit: `Compact<Gas>`, code_hash: `CodeHash`, data: `Bytes`)
- **summary**:   Create a new contract, optionally transfering some balance to the created account.   Creation is executed as follows:   - the destination address is computed based on the sender and hash of the code.  - account is created at the computed address.  - the `ctor_code` is executed in the context of the newly created account. Buffer returned    after the execution is saved as the `code` of the account. That code will be invoked    upon any message received by this account.

▸ **putCode**(gas_limit: `Compact<Gas>`, code: `Bytes`)
- **summary**:   Stores code in the storage. You can instantiate contracts only with stored code.

▸ **updateSchedule**(schedule: `Schedule`)
- **summary**:   Updates the schedule for metering contracts.   The schedule must have a greater version than the stored schedule.

___


### council

▸ **presentWinner**(candidate: `Address`, total: `Compact<BalanceOf>`, index: `Compact<VoteIndex>`)
- **summary**:   Claim that `signed` is one of the top Self::carry_count() + current_vote().1 candidates.  Only works if the `block_number >= current_vote().0` and `< current_vote().0 + presentation_duration()``  `signed` should have at least

▸ **reapInactiveVoter**(reporter_index: `Compact<u32>`, who: `Address`, who_index: `Compact<u32>`, assumed_vote_index: `Compact<VoteIndex>`)
- **summary**:   Remove a voter. For it not to be a bond-consuming no-op, all approved candidate indices  must now be either unregistered or registered to a candidate that registered the slot after  the voter gave their last approval set.   May be called by anyone. Returns the voter deposit to `signed`.

▸ **removeMember**(who: `Address`)
- **summary**:   Remove a particular member. A tally will happen instantly (if not already in a presentation  period) to fill the seat if removal means that the desired members are not met.  This is effective immediately.

▸ **retractVoter**(index: `Compact<u32>`)
- **summary**:   Remove a voter. All votes are cancelled and the voter deposit is returned.

▸ **setApprovals**(votes: `Vec<bool>`, index: `Compact<VoteIndex>`)
- **summary**:   Set candidate approvals. Approval slots stay valid as long as candidates in those slots  are registered.

▸ **setDesiredSeats**(count: `Compact<u32>`)
- **summary**:   Set the desired member count; if lower than the current count, then seats will not be up  election when they expire. If more, then a new vote will be started if one is not already  in progress.

▸ **setPresentationDuration**(count: `Compact<BlockNumber>`)
- **summary**:   Set the presentation duration. If there is currently a vote being presented for, will  invoke `finalise_vote`.

▸ **setTermDuration**(count: `Compact<BlockNumber>`)
- **summary**:   Set the presentation duration. If there is current a vote being presented for, will  invoke `finalise_vote`.

▸ **submitCandidacy**(slot: `Compact<u32>`)
- **summary**:   Submit oneself for candidacy.   Account must have enough transferrable funds in it to pay the bond.

___


### councilMotions

▸ **propose**(threshold: `Compact<u32>`, proposal: `Proposal`)

▸ **vote**(proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)

___


### councilVoting

▸ **propose**(proposal: `Proposal`)

▸ **setCooloffPeriod**(blocks: `Compact<BlockNumber>`)

▸ **setVotingPeriod**(blocks: `Compact<BlockNumber>`)

▸ **veto**(proposal_hash: `Hash`)

▸ **vote**(proposal: `Hash`, approve: `bool`)

___


### democracy

▸ **cancelQueued**(when: `Compact<BlockNumber>`, which: `Compact<u32>`)
- **summary**:   Cancel a proposal queued for enactment.

▸ **cancelReferendum**(ref_index: `Compact<ReferendumIndex>`)
- **summary**:   Remove a referendum.

▸ **propose**(proposal: `Proposal`, value: `Compact<BalanceOf>`)
- **summary**:   Propose a sensitive action to be taken.

▸ **second**(proposal: `Compact<PropIndex>`)
- **summary**:   Propose a sensitive action to be taken.

▸ **startReferendum**(proposal: `Proposal`, threshold: `VoteThreshold`, delay: `BlockNumber`)
- **summary**:   Start a referendum.

▸ **vote**(ref_index: `Compact<ReferendumIndex>`, vote: `Vote`)
- **summary**:   Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;  otherwise it is a vote to keep the status quo.

___


### finalityTracker

▸ **finalHint**(hint: `Compact<BlockNumber>`)
- **summary**:   Hint that the author of this block thinks the best finalized  block is the given number.

___


### grandpa

▸ **reportMisbehavior**(_report: `Bytes`)
- **summary**:   Report some misbehaviour.

___


### session

▸ **forceNewSession**(apply_rewards: `bool`)
- **summary**:   Forces a new session.

▸ **setKey**(key: `SessionKey`)
- **summary**:   Sets the session key of `_validator` to `_key`. This doesn't take effect until the next  session.

▸ **setLength**(new: `Compact<BlockNumber>`)
- **summary**:   Set a new session length. Won't kick in until the next session change (at current length).

___


### staking

▸ **bond**(controller: `Address`, value: `Compact<BalanceOf>`, payee: `RewardDestination`)
- **summary**:   Take the origin account as a stash and lock up `value` of its balance. `controller` will be the  account that controls it.

▸ **bondExtra**(max_additional: `BalanceOf`)
- **summary**:   Add some extra amount that have appeared in the stash `free_balance` into the balance up for  staking.    Use this if there are additional funds in your stash account that you wish to bond.    NOTE: This call must be made by the controller, not the stash.

▸ **chill**()
- **summary**:   Declare no desire to either validate or nominate.   Effects will be felt at the beginning of the next era.    NOTE: This call must be made by the controller, not the stash.

▸ **forceNewEra**(apply_rewards: `bool`)
- **summary**:   Force there to be a new era. This also forces a new session immediately after.  `apply_rewards` should be true for validators to get the session reward.

▸ **nominate**(targets: `Vec<Address>`)
- **summary**:   Declare the desire to nominate `targets` for the origin controller.   Effects will be felt at the beginning of the next era.    NOTE: This call must be made by the controller, not the stash.

▸ **setBondingDuration**(new: `Compact<BlockNumber>`)
- **summary**:   The length of the bonding duration in eras.

▸ **setInvulnerables**(validators: `Vec<AccountId>`)
- **summary**:   Set the validators who cannot be slashed (if any).

▸ **setOfflineSlashGrace**(new: `Compact<u32>`)
- **summary**:   Set the offline slash grace period.

▸ **setPayee**(payee: `RewardDestination`)
- **summary**:   (Re-)set the payment target for a controller.   Effects will be felt at the beginning of the next era.    NOTE: This call must be made by the controller, not the stash.

▸ **setSessionsPerEra**(new: `Compact<BlockNumber>`)
- **summary**:   Set the number of sessions in an era.

▸ **setValidatorCount**(new: `Compact<u32>`)
- **summary**:   The ideal number of validators.

▸ **unbond**(value: `Compact<BalanceOf>`)
- **summary**:   Schedule a portion of the stash to be unlocked ready for transfer out after the bond  period ends. If this leaves an amount actively bonded less than   T::Currency::existential_deposit(), then it is increased to the full amount.    Once the unlock period is done, you can call `withdraw_unbonded` to actually move  the funds out of management ready for transfer.     NOTE: This call must be made by the controller, not the stash.    See also `withdraw_unbonded`.

▸ **validate**(prefs: `ValidatorPrefs`)
- **summary**:   Declare the desire to validate for the origin controller.   Effects will be felt at the beginning of the next era.    NOTE: This call must be made by the controller, not the stash.

▸ **withdrawUnbonded**()
- **summary**:   Remove any unlocked chunks from the `unlocking` queue from our management.    This essentially frees up that balance to be used by the stash account to do  whatever it wants.    NOTE: This call must be made by the controller, not the stash.    See also `unbond`.

___


### sudo

▸ **setKey**(new: `Address`)

▸ **sudo**(proposal: `Proposal`)

___


### timestamp

▸ **set**(now: `Compact<Moment>`)
- **summary**:   Set the current time.   Extrinsic with this call should be placed at the specific position in the each block  (specified by the Trait::TIMESTAMP_SET_POSITION) typically at the start of the each block.  This call should be invoked exactly once per block. It will panic at the finalization phase,  if this call hasn't been invoked by that time.   The timestamp should be greater than the previous one by the amount specified by `block_period`.

___


### treasury

▸ **approveProposal**(proposal_id: `Compact<ProposalIndex>`)
- **summary**:   Approve a proposal. At a later time, the proposal will be allocated to the beneficiary  and the original deposit will be returned.

▸ **configure**(proposal_bond: `Compact<Permill>`, proposal_bond_minimum: `Compact<BalanceOf>`, spend_period: `Compact<BlockNumber>`, burn: `Compact<Permill>`)
- **summary**:   (Re-)configure this module.

▸ **proposeSpend**(value: `Compact<BalanceOf>`, beneficiary: `Address`)
- **summary**:   Put forward a suggestion for spending. A deposit proportional to the value  is reserved and slashed if the proposal is rejected. It is returned once the  proposal is awarded.

▸ **rejectProposal**(proposal_id: `Compact<ProposalIndex>`)
- **summary**:   Reject a proposed spend. The original deposit will be slashed.

▸ **setPot**(new_pot: `Compact<BalanceOf>`)
- **summary**:   Set the balance of funds available to spend.
