---
title: Extrinsics
---

The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[finalityTracker](#finalitytracker)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[multisig](#multisig)**

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

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**


___


## authorship
 
### setUncles(new_uncles: `Vec<Header>`)
- **interface**: `api.tx.authorship.setUncles`
- **summary**:   Provide a set of uncles. 

___


## babe
 
### reportEquivocation(equivocation_proof: `BabeEquivocationProof`, key_owner_proof: `KeyOwnerProof`)
- **interface**: `api.tx.babe.reportEquivocation`
- **summary**:   Report authority equivocation/misbehavior. This method will verify the equivocation proof and validate the given key ownership proof against the extracted offender. If both are valid, the offence will be reported. 
 
### reportEquivocationUnsigned(equivocation_proof: `BabeEquivocationProof`, key_owner_proof: `KeyOwnerProof`)
- **interface**: `api.tx.babe.reportEquivocationUnsigned`
- **summary**:   Report authority equivocation/misbehavior. This method will verify the equivocation proof and validate the given key ownership proof against the extracted offender. If both are valid, the offence will be reported. This extrinsic must be called unsigned and it is expected that only block authors will call it (validated in `ValidateUnsigned`), as such if the block author is defined it will be defined as the equivocation reporter. 

___


## balances
 
### forceTransfer(source: `LookupSource`, dest: `LookupSource`, value: `Compact<Balance>`)
- **interface**: `api.tx.balances.forceTransfer`
- **summary**:   Exactly as `transfer`, except the origin must be root and the source account may be specified.  
 
### setBalance(who: `LookupSource`, new_free: `Compact<Balance>`, new_reserved: `Compact<Balance>`)
- **interface**: `api.tx.balances.setBalance`
- **summary**:   Set the balances of a given account. 

  This will alter `FreeBalance` and `ReservedBalance` in storage. it will also decrease the total issuance of the system (`TotalIssuance`). If the new free or reserved balance is below the existential deposit, it will reset the account nonce (`frame_system::AccountNonce`). 

  The dispatch origin for this call is `root`. 

   
 
### transfer(dest: `LookupSource`, value: `Compact<Balance>`)
- **interface**: `api.tx.balances.transfer`
- **summary**:   Transfer some liquid free balance to another account. 

  `transfer` will set the `FreeBalance` of the sender and receiver. It will decrease the total issuance of the system by the `TransferFee`. If the sender's account is below the existential deposit as a result of the transfer, the account will be reaped. 

  The dispatch origin for this call must be `Signed` by the transactor. 

   
 
### transferKeepAlive(dest: `LookupSource`, value: `Compact<Balance>`)
- **interface**: `api.tx.balances.transferKeepAlive`
- **summary**:   Same as the [`transfer`] call, but with a check that the transfer will not kill the origin account. 

  99% of the time you want [`transfer`] instead. 

  [`transfer`]: struct.Module.html#method.transfer  

___


## contracts
 
### call(dest: `LookupSource`, value: `Compact<BalanceOf>`, gas_limit: `Compact<Gas>`, data: `Bytes`)
- **interface**: `api.tx.contracts.call`
- **summary**:   Makes a call to an account, optionally transferring some balance. 

  * If the account is a smart-contract account, the associated code will be executed and any value will be transferred. 

  * If the account is a regular account, any value will be transferred.

  * If no account exists and the call value is not less than `existential_deposit`,a regular account will be created and any value will be transferred. 
 
### claimSurcharge(dest: `AccountId`, aux_sender: `Option<AccountId>`)
- **interface**: `api.tx.contracts.claimSurcharge`
- **summary**:   Allows block producers to claim a small reward for evicting a contract. If a block producer fails to do so, a regular users will be allowed to claim the reward. 

  If contract is not evicted as a result of this call, no actions are taken and the sender is not eligible for the reward. 
 
### instantiate(endowment: `Compact<BalanceOf>`, gas_limit: `Compact<Gas>`, code_hash: `CodeHash`, data: `Bytes`)
- **interface**: `api.tx.contracts.instantiate`
- **summary**:   Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance. 

  Instantiation is executed as follows: 

  - The destination address is computed based on the sender and hash of the code. 

  - The smart-contract account is created at the computed address.

  - The `ctor_code` is executed in the context of the newly-created account. Buffer returned  after the execution is saved as the `code` of the account. That code will be invoked   upon any call received by this account. 

  - The contract is initialized.
 
### putCode(code: `Bytes`)
- **interface**: `api.tx.contracts.putCode`
- **summary**:   Stores the given binary Wasm code into the chain's storage and returns its `codehash`. You can instantiate contracts only with stored code. 
 
### updateSchedule(schedule: `Schedule`)
- **interface**: `api.tx.contracts.updateSchedule`
- **summary**:   Updates the schedule for metering contracts. 

  The schedule must have a greater version than the stored schedule. 

___


## council
 
### close(proposal_hash: `Hash`, index: `Compact<ProposalIndex>`, proposal_weight_bound: `Compact<Weight>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.close`
- **summary**:   Close a vote that is either approved, disapproved or whose voting period has ended. 

  May be called by any signed account in order to finish voting and close the proposal. 

  If called before the end of the voting period it will only close the vote if it is has enough votes to be approved or disapproved. 

  If called after the end of the voting period abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal. + `length_bound`: The upper bound for the length of the proposal in storage. Checked via                   `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

   
 
### disapproveProposal(proposal_hash: `Hash`)
- **interface**: `api.tx.council.disapproveProposal`
- **summary**:   Disapprove a proposal, close, and remove it from the system, regardless of its current state. 

  Must be called by the Root origin. 

  Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

   
 
### execute(proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 

   
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.council.propose`
- **summary**:   Add a new proposal to either be voted on or executed directly. 

  Requires the sender to be member. 

  `threshold` determines whether `proposal` is executed directly (`threshold < 2`) or put up for voting. 

   
 
### setMembers(new_members: `Vec<AccountId>`, prime: `Option<AccountId>`, old_count: `MemberCount`)
- **interface**: `api.tx.council.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage.               Used for weight estimation. 

  Requires root origin. 

  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but       the weight estimations rely on it to estimate dispatchable weight. 

   
 
### vote(proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.council.vote`
- **summary**:   Add an aye or nay vote for the sender to the given proposal. 

  Requires the sender to be a member. 

   

___


## democracy
 
### blacklist(proposal_hash: `Hash`, maybe_ref_index: `Option<ReferendumIndex>`)
- **interface**: `api.tx.democracy.blacklist`
- **summary**:   Permanently place a proposal into the blacklist. This prevents it from ever being proposed again. 

  If called on a queued public or external proposal, then this will result in it being removed. If the `ref_index` supplied is an active referendum with the proposal hash, then it will be cancelled. 

  The dispatch origin of this call must be `BlacklistOrigin`. 

  - `proposal_hash`: The proposal hash to blacklist permanently. 

  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will becancelled. 

  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a   reasonable value). 
 
### cancelProposal(prop_index: `Compact<PropIndex>`)
- **interface**: `api.tx.democracy.cancelProposal`
- **summary**:   Remove a proposal. 

  The dispatch origin of this call must be `CancelProposalOrigin`. 

  - `prop_index`: The index of the proposal to cancel. 

  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()` 
 
### cancelQueued(which: `ReferendumIndex`)
- **interface**: `api.tx.democracy.cancelQueued`
- **summary**:   Cancel a proposal queued for enactment. 

  The dispatch origin of this call must be _Root_. 

  - `which`: The index of the referendum to cancel. 

  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`. 
 
### cancelReferendum(ref_index: `Compact<ReferendumIndex>`)
- **interface**: `api.tx.democracy.cancelReferendum`
- **summary**:   Remove a referendum. 

  The dispatch origin of this call must be _Root_. 

  - `ref_index`: The index of the referendum to cancel. 

  Weight: `O(1)`. 
 
### clearPublicProposals()
- **interface**: `api.tx.democracy.clearPublicProposals`
- **summary**:   Clears all public proposals. 

  The dispatch origin of this call must be _Root_. 

  Weight: `O(1)`. 
 
### delegate(to: `AccountId`, conviction: `Conviction`, balance: `BalanceOf`)
- **interface**: `api.tx.democracy.delegate`
- **summary**:   Delegate the voting power (with some given conviction) of the sending account. 

  The balance delegated is locked for as long as it's delegated, and thereafter for the time appropriate for the conviction's lock period. 

  The dispatch origin of this call must be _Signed_, and the signing account must either: 

    - be delegating already; or

    - have no voting activity (if there is, then it will need to be removed/consolidated    through `reap_vote` or `unvote`). 

  - `to`: The account whose voting the `target` account's voting power will follow. 

  - `conviction`: The conviction that will be attached to the delegated votes. When the  account is undelegated, the funds will be locked for the corresponding period. 

  - `balance`: The amount of the account's balance to be used in delegating. This must  not be more than the account's current balance. 

  Emits `Delegated`. 

  Weight: `O(R)` where R is the number of referendums the voter delegating to has   voted on. Weight is charged as if maximum votes. 
 
### emergencyCancel(ref_index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.emergencyCancel`
- **summary**:   Schedule an emergency cancellation of a referendum. Cannot happen twice to the same referendum. 

  The dispatch origin of this call must be `CancellationOrigin`. 

  -`ref_index`: The index of the referendum to cancel. 

  Weight: `O(1)`. 
 
### enactProposal(proposal_hash: `Hash`, index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.enactProposal`
- **summary**:   Enact a proposal from a referendum. For now we just make the weight be the maximum. 
 
### externalPropose(proposal_hash: `Hash`)
- **interface**: `api.tx.democracy.externalPropose`
- **summary**:   Schedule a referendum to be tabled once it is legal to schedule an external referendum. 

  The dispatch origin of this call must be `ExternalOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal. 

  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.   Decoding vec of length V. Charged as maximum 
 
### externalProposeDefault(proposal_hash: `Hash`)
- **interface**: `api.tx.democracy.externalProposeDefault`
- **summary**:   Schedule a negative-turnout-bias referendum to be tabled next once it is legal to schedule an external referendum. 

  The dispatch of this call must be `ExternalDefaultOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal. 

  Unlike `external_propose`, blacklisting has no effect on this and it may replace a pre-scheduled `external_propose` call. 

  Weight: `O(1)` 
 
### externalProposeMajority(proposal_hash: `Hash`)
- **interface**: `api.tx.democracy.externalProposeMajority`
- **summary**:   Schedule a majority-carries referendum to be tabled next once it is legal to schedule an external referendum. 

  The dispatch of this call must be `ExternalMajorityOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal. 

  Unlike `external_propose`, blacklisting has no effect on this and it may replace a pre-scheduled `external_propose` call. 

  Weight: `O(1)` 
 
### fastTrack(proposal_hash: `Hash`, voting_period: `BlockNumber`, delay: `BlockNumber`)
- **interface**: `api.tx.democracy.fastTrack`
- **summary**:   Schedule the currently externally-proposed majority-carries referendum to be tabled immediately. If there is no externally-proposed referendum currently, or if there is one but it is not a majority-carries referendum then it fails. 

  The dispatch of this call must be `FastTrackOrigin`. 

  - `proposal_hash`: The hash of the current external proposal. 

  - `voting_period`: The period that is allowed for voting on this proposal. Increased to  `FastTrackVotingPeriod` if too low. 

  - `delay`: The number of block after voting has ended in approval and this should be  enacted. This doesn't have a minimum amount. 

  Emits `Started`. 

  Weight: `O(1)` 
 
### noteImminentPreimage(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.noteImminentPreimage`
- **summary**:   Register the preimage for an upcoming proposal. This requires the proposal to be in the dispatch queue. No deposit is needed. When this call is successful, i.e. the preimage has not been uploaded before and matches some imminent proposal, no fee is paid. 

  The dispatch origin of this call must be _Signed_. 

  - `encoded_proposal`: The preimage of a proposal. 

  Emits `PreimageNoted`. 

  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit). 
 
### noteImminentPreimageOperational(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.noteImminentPreimageOperational`
- **summary**:   Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`. 
 
### notePreimage(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.notePreimage`
- **summary**:   Register the preimage for an upcoming proposal. This doesn't require the proposal to be in the dispatch queue but does require a deposit, returned once enacted. 

  The dispatch origin of this call must be _Signed_. 

  - `encoded_proposal`: The preimage of a proposal. 

  Emits `PreimageNoted`. 

  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit). 
 
### notePreimageOperational(encoded_proposal: `Bytes`)
- **interface**: `api.tx.democracy.notePreimageOperational`
- **summary**:   Same as `note_preimage` but origin is `OperationalPreimageOrigin`. 
 
### propose(proposal_hash: `Hash`, value: `Compact<BalanceOf>`)
- **interface**: `api.tx.democracy.propose`
- **summary**:   Propose a sensitive action to be taken. 

  The dispatch origin of this call must be _Signed_ and the sender must have funds to cover the deposit. 

  - `proposal_hash`: The hash of the proposal preimage. 

  - `value`: The amount of deposit (must be at least `MinimumDeposit`).

  Emits `Proposed`. 

  Weight: `O(p)` 
 
### reapPreimage(proposal_hash: `Hash`, proposal_len_upper_bound: `Compact<u32>`)
- **interface**: `api.tx.democracy.reapPreimage`
- **summary**:   Remove an expired proposal preimage and collect the deposit. 

  The dispatch origin of this call must be _Signed_. 

  - `proposal_hash`: The preimage hash of a proposal. 

  - `proposal_length_upper_bound`: an upper bound on length of the proposal.  Extrinsic is weighted according to this value with no refund. 

  This will only work after `VotingPeriod` blocks from the time that the preimage was noted, if it's the same account doing it. If it's a different account, then it'll only work an additional `EnactmentPeriod` later. 

  Emits `PreimageReaped`. 

  Weight: `O(D)` where D is length of proposal. 
 
### removeOtherVote(target: `AccountId`, index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.removeOtherVote`
- **summary**:   Remove a vote for a referendum. 

  If the `target` is equal to the signer, then this function is exactly equivalent to `remove_vote`. If not equal to the signer, then the vote must have expired, either because the referendum was cancelled, because the voter lost the referendum or because the conviction period is over. 

  The dispatch origin of this call must be _Signed_. 

  - `target`: The account of the vote to be removed; this account must have voted for   referendum `index`. 

  - `index`: The index of referendum of the vote to be removed.

  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.   Weight is calculated for the maximum number of vote. 
 
### removeVote(index: `ReferendumIndex`)
- **interface**: `api.tx.democracy.removeVote`
- **summary**:   Remove a vote for a referendum. 

  If: 

  - the referendum was cancelled, or

  - the referendum is ongoing, or

  - the referendum has ended such that

    - the vote of the account was in opposition to the result; or

    - there was no conviction to the account's vote; or

    - the account made a split vote...then the vote is removed cleanly and a following call to `unlock` may result in more funds being available. 

  If, however, the referendum has ended and: 

  - it finished corresponding to the vote of the account, and

  - the account made a standard vote with conviction, and

  - the lock period of the conviction is not over...then the lock will be aggregated into the overall account's lock, which may involve 

  *overlocking* (where the two locks are combined into a single lock that is the maximumof both the amount locked and the time is it locked for). 

  The dispatch origin of this call must be _Signed_, and the signer must have a vote registered for referendum `index`. 

  - `index`: The index of referendum of the vote to be removed. 

  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.   Weight is calculated for the maximum number of vote. 
 
### second(proposal: `Compact<PropIndex>`, seconds_upper_bound: `Compact<u32>`)
- **interface**: `api.tx.democracy.second`
- **summary**:   Signals agreement with a particular proposal. 

  The dispatch origin of this call must be _Signed_ and the sender must have funds to cover the deposit, equal to the original deposit. 

  - `proposal`: The index of the proposal to second. 

  - `seconds_upper_bound`: an upper bound on the current number of seconds on this  proposal. Extrinsic is weighted according to this value with no refund. 

  Weight: `O(S)` where S is the number of seconds a proposal already has. 
 
### undelegate()
- **interface**: `api.tx.democracy.undelegate`
- **summary**:   Undelegate the voting power of the sending account. 

  Tokens may be unlocked following once an amount of time consistent with the lock period of the conviction with which the delegation was issued. 

  The dispatch origin of this call must be _Signed_ and the signing account must be currently delegating. 

  Emits `Undelegated`. 

  Weight: `O(R)` where R is the number of referendums the voter delegating to has   voted on. Weight is charged as if maximum votes. 
 
### unlock(target: `AccountId`)
- **interface**: `api.tx.democracy.unlock`
- **summary**:   Unlock tokens that have an expired lock. 

  The dispatch origin of this call must be _Signed_. 

  - `target`: The account to remove the lock on. 

  Weight: `O(R)` with R number of vote of target. 
 
### vetoExternal(proposal_hash: `Hash`)
- **interface**: `api.tx.democracy.vetoExternal`
- **summary**:   Veto and blacklist the external proposal hash. 

  The dispatch origin of this call must be `VetoOrigin`. 

  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist. 

  Emits `Vetoed`. 

  Weight: `O(V + log(V))` where V is number of `existing vetoers` 
 
### vote(ref_index: `Compact<ReferendumIndex>`, vote: `AccountVote`)
- **interface**: `api.tx.democracy.vote`
- **summary**:   Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal; otherwise it is a vote to keep the status quo. 

  The dispatch origin of this call must be _Signed_. 

  - `ref_index`: The index of the referendum to vote for. 

  - `vote`: The vote configuration.

  Weight: `O(R)` where R is the number of referendums the voter has voted on. 

___


## elections
 
### removeMember(who: `LookupSource`, has_replacement: `bool`)
- **interface**: `api.tx.elections.removeMember`
- **summary**:   Remove a particular member from the set. This is effective immediately and the bond of the outgoing member is slashed. 

  If a runner-up is available, then the best runner-up will be removed and replaces the outgoing member. Otherwise, a new phragmen election is started. 

  Note that this does not affect the designated block number of the next election. 

   
 
### removeVoter()
- **interface**: `api.tx.elections.removeVoter`
- **summary**:   Remove `origin` as a voter. This removes the lock and returns the bond. 

   
 
### renounceCandidacy(renouncing: `Renouncing`)
- **interface**: `api.tx.elections.renounceCandidacy`
- **summary**:   Renounce one's intention to be a candidate for the next election round. 3 potential outcomes exist: 

  - `origin` is a candidate and not elected in any set. In this case, the bond is  unreserved, returned and origin is removed as a candidate. 

  - `origin` is a current runner-up. In this case, the bond is unreserved, returned and  origin is removed as a runner-up. 

  - `origin` is a current member. In this case, the bond is unreserved and origin is  removed as a member, consequently not being a candidate for the next round anymore.   Similar to [`remove_voter`], if replacement runners exists, they are immediately used.  
 
### reportDefunctVoter(defunct: `DefunctVoter`)
- **interface**: `api.tx.elections.reportDefunctVoter`
- **summary**:   Report `target` for being an defunct voter. In case of a valid report, the reporter is rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and their bond is slashed. 

  A defunct voter is defined to be: 

    - a voter whose current submitted votes are all invalid. i.e. all of them are no    longer a candidate nor an active member or a runner-up. 

  

  The origin must provide the number of current candidates and votes of the reported target for the purpose of accurate weight calculation. 

   
 
### submitCandidacy(candidate_count: `Compact<u32>`)
- **interface**: `api.tx.elections.submitCandidacy`
- **summary**:   Submit oneself for candidacy. 

  A candidate will either: 

    - Lose at the end of the term and forfeit their deposit.

    - Win and become a member. Members will eventually get their stash back.

    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully    removed. 

   
 
### vote(votes: `Vec<AccountId>`, value: `Compact<BalanceOf>`)
- **interface**: `api.tx.elections.vote`
- **summary**:   Vote for a set of candidates for the upcoming round of election. This can be called to set the initial votes, or update already existing votes. 

  Upon initial voting, `value` units of `who`'s balance is locked and a bond amount is reserved. 

  The `votes` should: 

    - not be empty.

    - be less than the number of possible candidates. Note that all current members and    runners-up are also automatically candidates for the next round. 

  It is the responsibility of the caller to not place all of their balance into the lock and keep some for further transactions. 

   

___


## finalityTracker
 
### finalHint(hint: `Compact<BlockNumber>`)
- **interface**: `api.tx.finalityTracker.finalHint`
- **summary**:   Hint that the author of this block thinks the best finalized block is the given number. 

___


## grandpa
 
### noteStalled(delay: `BlockNumber`, best_finalized_block_number: `BlockNumber`)
- **interface**: `api.tx.grandpa.noteStalled`
- **summary**:   Note that the current authority set of the GRANDPA finality gadget has stalled. This will trigger a forced authority set change at the beginning of the next session, to be enacted `delay` blocks after that. The delay should be high enough to safely assume that the block signalling the forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters will start the new authority set using the given finalized block as base. Only callable by root. 
 
### reportEquivocation(equivocation_proof: `GrandpaEquivocationProof`, key_owner_proof: `KeyOwnerProof`)
- **interface**: `api.tx.grandpa.reportEquivocation`
- **summary**:   Report voter equivocation/misbehavior. This method will verify the equivocation proof and validate the given key ownership proof against the extracted offender. If both are valid, the offence will be reported. 
 
### reportEquivocationUnsigned(equivocation_proof: `GrandpaEquivocationProof`, key_owner_proof: `KeyOwnerProof`)
- **interface**: `api.tx.grandpa.reportEquivocationUnsigned`
- **summary**:   Report voter equivocation/misbehavior. This method will verify the equivocation proof and validate the given key ownership proof against the extracted offender. If both are valid, the offence will be reported. 

  This extrinsic must be called unsigned and it is expected that only block authors will call it (validated in `ValidateUnsigned`), as such if the block author is defined it will be defined as the equivocation reporter. 

___


## identity
 
### addRegistrar(account: `AccountId`)
- **interface**: `api.tx.identity.addRegistrar`
- **summary**:   Add a registrar to the system. 

  The dispatch origin for this call must be `T::RegistrarOrigin`. 

  - `account`: the account of the registrar. 

  Emits `RegistrarAdded` if successful. 

   
 
### addSub(sub: `LookupSource`, data: `Data`)
- **interface**: `api.tx.identity.addSub`
- **summary**:   Add the given account to the sender's subs. 

  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated to the sender. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered sub identity of `sub`. 
 
### cancelRequest(reg_index: `RegistrarIndex`)
- **interface**: `api.tx.identity.cancelRequest`
- **summary**:   Cancel a previous request. 

  Payment: A previously reserved deposit is returned on success. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  - `reg_index`: The index of the registrar whose judgement is no longer requested. 

  Emits `JudgementUnrequested` if successful. 

   
 
### clearIdentity()
- **interface**: `api.tx.identity.clearIdentity`
- **summary**:   Clear an account's identity info and all sub-accounts and return all deposits. 

  Payment: All reserved balances on the account are returned. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  Emits `IdentityCleared` if successful. 

   
 
### killIdentity(target: `LookupSource`)
- **interface**: `api.tx.identity.killIdentity`
- **summary**:   Remove an account's identity and sub-account information and slash the deposits. 

  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by `Slash`. Verification request deposits are not returned; they should be cancelled manually using `cancel_request`. 

  The dispatch origin for this call must match `T::ForceOrigin`. 

  - `target`: the account whose identity the judgement is upon. This must be an account   with a registered identity. 

  Emits `IdentityKilled` if successful. 

   
 
### provideJudgement(reg_index: `Compact<RegistrarIndex>`, target: `LookupSource`, judgement: `IdentityJudgement`)
- **interface**: `api.tx.identity.provideJudgement`
- **summary**:   Provide a judgement for an account's identity. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `reg_index`. 

  - `reg_index`: the index of the registrar whose judgement is being made. 

  - `target`: the account whose identity the judgement is upon. This must be an account  with a registered identity. 

  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.

  Emits `JudgementGiven` if successful. 

   
 
### quitSub()
- **interface**: `api.tx.identity.quitSub`
- **summary**:   Remove the sender as a sub-account. 

  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated to the sender (*not* the original depositor). 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered super-identity. 

  NOTE: This should not normally be used, but is provided in the case that the non- controller of an account is maliciously registered as a sub-account. 
 
### removeSub(sub: `LookupSource`)
- **interface**: `api.tx.identity.removeSub`
- **summary**:   Remove the given account from the sender's subs. 

  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated to the sender. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered sub identity of `sub`. 
 
### renameSub(sub: `LookupSource`, data: `Data`)
- **interface**: `api.tx.identity.renameSub`
- **summary**:   Alter the associated name of the given sub-account. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered sub identity of `sub`. 
 
### requestJudgement(reg_index: `Compact<RegistrarIndex>`, max_fee: `Compact<BalanceOf>`)
- **interface**: `api.tx.identity.requestJudgement`
- **summary**:   Request a judgement from a registrar. 

  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement given. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  - `reg_index`: The index of the registrar whose judgement is requested. 

  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:

  ```nocompile Self::registrars().get(reg_index).unwrap().fee ``` 

  Emits `JudgementRequested` if successful. 

   
 
### setAccountId(index: `Compact<RegistrarIndex>`, new: `AccountId`)
- **interface**: `api.tx.identity.setAccountId`
- **summary**:   Change the account associated with a registrar. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `index`. 

  - `index`: the index of the registrar whose fee is to be set. 

  - `new`: the new account ID.

   
 
### setFee(index: `Compact<RegistrarIndex>`, fee: `Compact<BalanceOf>`)
- **interface**: `api.tx.identity.setFee`
- **summary**:   Set the fee required for a judgement to be requested from a registrar. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `index`. 

  - `index`: the index of the registrar whose fee is to be set. 

  - `fee`: the new fee.

   
 
### setFields(index: `Compact<RegistrarIndex>`, fields: `IdentityFields`)
- **interface**: `api.tx.identity.setFields`
- **summary**:   Set the field information for a registrar. 

  The dispatch origin for this call must be _Signed_ and the sender must be the account of the registrar whose index is `index`. 

  - `index`: the index of the registrar whose fee is to be set. 

  - `fields`: the fields that the registrar concerns themselves with.

   
 
### setIdentity(info: `IdentityInfo`)
- **interface**: `api.tx.identity.setIdentity`
- **summary**:   Set an account's identity information and reserve the appropriate deposit. 

  If the account already has identity information, the deposit is taken as part payment for the new deposit. 

  The dispatch origin for this call must be _Signed_. 

  - `info`: The identity information. 

  Emits `IdentitySet` if successful. 

   
 
### setSubs(subs: `Vec<(AccountId,Data)>`)
- **interface**: `api.tx.identity.setSubs`
- **summary**:   Set the sub-accounts of the sender. 

  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned and an amount `SubAccountDeposit` will be reserved for each item in `subs`. 

  The dispatch origin for this call must be _Signed_ and the sender must have a registered identity. 

  - `subs`: The identity's (new) sub-accounts. 

   

___


## imOnline
 
### heartbeat(heartbeat: `Heartbeat`, _signature: `Signature`)
- **interface**: `api.tx.imOnline.heartbeat`
- **summary**:    

___


## indices
 
### claim(index: `AccountIndex`)
- **interface**: `api.tx.indices.claim`
- **summary**:   Assign an previously unassigned index. 

  Payment: `Deposit` is reserved from the sender account. 

  The dispatch origin for this call must be _Signed_. 

  - `index`: the index to be claimed. This must not be in use. 

  Emits `IndexAssigned` if successful. 

   
 
### forceTransfer(new: `AccountId`, index: `AccountIndex`, freeze: `bool`)
- **interface**: `api.tx.indices.forceTransfer`
- **summary**:   Force an index to an account. This doesn't require a deposit. If the index is already held, then any deposit is reimbursed to its current owner. 

  The dispatch origin for this call must be _Root_. 

  - `index`: the index to be (re-)assigned. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.

  Emits `IndexAssigned` if successful. 

   
 
### free(index: `AccountIndex`)
- **interface**: `api.tx.indices.free`
- **summary**:   Free up an index owned by the sender. 

  Payment: Any previous deposit placed for the index is unreserved in the sender account. 

  The dispatch origin for this call must be _Signed_ and the sender must own the index. 

  - `index`: the index to be freed. This must be owned by the sender. 

  Emits `IndexFreed` if successful. 

   
 
### freeze(index: `AccountIndex`)
- **interface**: `api.tx.indices.freeze`
- **summary**:   Freeze an index so it will always point to the sender account. This consumes the deposit. 

  The dispatch origin for this call must be _Signed_ and the signing account must have a non-frozen account `index`. 

  - `index`: the index to be frozen in place. 

  Emits `IndexFrozen` if successful. 

   
 
### transfer(new: `AccountId`, index: `AccountIndex`)
- **interface**: `api.tx.indices.transfer`
- **summary**:   Assign an index already owned by the sender to another account. The balance reservation is effectively transferred to the new account. 

  The dispatch origin for this call must be _Signed_. 

  - `index`: the index to be re-assigned. This must be owned by the sender. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  Emits `IndexAssigned` if successful. 

   

___


## multisig
 
### approveAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId>`, maybe_timepoint: `Option<Timepoint>`, call_hash: `[u8;32]`, max_weight: `Weight`)
- **interface**: `api.tx.multisig.approveAsMulti`
- **summary**:   Register approval for a dispatch to be made from a deterministic composite account if approved by a total of `threshold - 1` of `other_signatories`. 

  Payment: `DepositBase` will be reserved if this is the first approval, plus `threshold` times `DepositFactor`. It is returned once this dispatch happens or is cancelled. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it isnot the first approval, then it must be `Some`, with the timepoint (block number and transaction index) of the first approval transaction. 

  - `call_hash`: The hash of the call to be executed.

  NOTE: If this is the final approval, you will want to use `as_multi` instead. 

   
 
### asMulti(threshold: `u16`, other_signatories: `Vec<AccountId>`, maybe_timepoint: `Option<Timepoint>`, call: `OpaqueCall`, store_call: `bool`, max_weight: `Weight`)
- **interface**: `api.tx.multisig.asMulti`
- **summary**:   Register approval for a dispatch to be made from a deterministic composite account if approved by a total of `threshold - 1` of `other_signatories`. 

  If there are enough, then dispatch the call. 

  Payment: `DepositBase` will be reserved if this is the first approval, plus `threshold` times `DepositFactor`. It is returned once this dispatch happens or is cancelled. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it isnot the first approval, then it must be `Some`, with the timepoint (block number and transaction index) of the first approval transaction. 

  - `call`: The call to be executed.

  NOTE: Unless this is the final approval, you will generally want to use `approve_as_multi` instead, since it only requires a hash of the call. 

  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise on success, result is `Ok` and the result from the interior call, if it was executed, may be found in the deposited `MultisigExecuted` event. 

   
 
### asMultiThreshold1(other_signatories: `Vec<AccountId>`, call: `Call`)
- **interface**: `api.tx.multisig.asMultiThreshold1`
- **summary**:   Immediately dispatch a multi-signature call using a single approval from the caller. 

  The dispatch origin for this call must be _Signed_. 

  - `other_signatories`: The accounts (other than the sender) who are part of the multi-signature, but do not participate in the approval process. 

  - `call`: The call to be executed.

  Result is equivalent to the dispatched result. 

   
 
### cancelAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId>`, timepoint: `Timepoint`, call_hash: `[u8;32]`)
- **interface**: `api.tx.multisig.cancelAsMulti`
- **summary**:   Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously for this operation will be unreserved on success. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `timepoint`: The timepoint (block number and transaction index) of the first approvaltransaction for this dispatch. 

  - `call_hash`: The hash of the call to be executed.

   

___


## proxy
 
### addProxy(delegate: `AccountId`, proxy_type: `ProxyType`, delay: `BlockNumber`)
- **interface**: `api.tx.proxy.addProxy`
- **summary**:   Register a proxy account for the sender that is able to make calls on its behalf. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `proxy`: The account that the `caller` would like to make a proxy.

  - `proxy_type`: The permissions allowed for this proxy account.

  - `delay`: The announcement period required of the initial proxy. Will generally bezero. 

   
 
### announce(real: `AccountId`, call_hash: `CallHashOf`)
- **interface**: `api.tx.proxy.announce`
- **summary**:   Publish the hash of a proxy-call that will be made in the future. 

  This must be called some number of blocks before the corresponding `proxy` is attempted if the delay associated with the proxy relationship is greater than zero. 

  No more than `MaxPending` announcements may be made at any one time. 

  This will take a deposit of `AnnouncementDepositFactor` as well as `AnnouncementDepositBase` if there are no other pending announcements. 

  The dispatch origin for this call must be _Signed_ and a proxy of `real`. 

  Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `call_hash`: The hash of the call to be made by the `real` account.

   
 
### anonymous(proxy_type: `ProxyType`, delay: `BlockNumber`, index: `u16`)
- **interface**: `api.tx.proxy.anonymous`
- **summary**:   Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and initialize it with a proxy of `proxy_type` for `origin` sender. 

  Requires a `Signed` origin. 

  - `proxy_type`: The type of the proxy that the sender will be registered as over the new account. This will almost always be the most permissive `ProxyType` possible to allow for maximum flexibility. 

  - `index`: A disambiguation index, in case this is called multiple times in the sametransaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just want to use `0`. 

  - `delay`: The announcement period required of the initial proxy. Will generally bezero. 

  Fails with `Duplicate` if this has already been called in this transaction, from the same sender, with the same parameters. 

  Fails if there are insufficient funds to pay for deposit. 

   TODO: Might be over counting 1 read 
 
### killAnonymous(spawner: `AccountId`, proxy_type: `ProxyType`, index: `u16`, height: `Compact<BlockNumber>`, ext_index: `Compact<u32>`)
- **interface**: `api.tx.proxy.killAnonymous`
- **summary**:   Removes a previously spawned anonymous proxy. 

  WARNING: **All access to this account will be lost.** Any funds held in it will be inaccessible. 

  Requires a `Signed` origin, and the sender account must have been created by a call to `anonymous` with corresponding parameters. 

  - `spawner`: The account that originally called `anonymous` to create this account. 

  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.

  - `proxy_type`: The proxy type originally passed to `anonymous`.

  - `height`: The height of the chain when the call to `anonymous` was processed.

  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.

  Fails with `NoPermission` in case the caller is not a previously created anonymous account whose `anonymous` call has corresponding parameters. 

   
 
### proxy(real: `AccountId`, force_proxy_type: `Option<ProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxy`
- **summary**:   Dispatch the given `call` from an account that the sender is authorised for through `add_proxy`. 

  Removes any corresponding announcement(s). 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.

  - `call`: The call to be made by the `real` account.

   
 
### proxyAnnounced(delegate: `AccountId`, real: `AccountId`, force_proxy_type: `Option<ProxyType>`, call: `Call`)
- **interface**: `api.tx.proxy.proxyAnnounced`
- **summary**:   Dispatch the given `call` from an account that the sender is authorised for through `add_proxy`. 

  Removes any corresponding announcement(s). 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.

  - `call`: The call to be made by the `real` account.

   
 
### rejectAnnouncement(delegate: `AccountId`, call_hash: `CallHashOf`)
- **interface**: `api.tx.proxy.rejectAnnouncement`
- **summary**:   Remove the given announcement of a delegate. 

  May be called by a target (proxied) account to remove a call that one of their delegates (`delegate`) has announced they want to execute. The deposit is returned. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `delegate`: The account that previously announced the call.

  - `call_hash`: The hash of the call to be made.

   
 
### removeAnnouncement(real: `AccountId`, call_hash: `CallHashOf`)
- **interface**: `api.tx.proxy.removeAnnouncement`
- **summary**:   Remove a given announcement. 

  May be called by a proxy account to remove a call they previously announced and return the deposit. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `real`: The account that the proxy will make a call on behalf of.

  - `call_hash`: The hash of the call to be made by the `real` account.

   
 
### removeProxies()
- **interface**: `api.tx.proxy.removeProxies`
- **summary**:   Unregister all proxy accounts for the sender. 

  The dispatch origin for this call must be _Signed_. 

  WARNING: This may be called on accounts created by `anonymous`, however if done, then the unreserved fees will be inaccessible. **All access to this account will be lost.** 

   
 
### removeProxy(delegate: `AccountId`, proxy_type: `ProxyType`, delay: `BlockNumber`)
- **interface**: `api.tx.proxy.removeProxy`
- **summary**:   Unregister a proxy account for the sender. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `proxy`: The account that the `caller` would like to remove as a proxy.

  - `proxy_type`: The permissions currently enabled for the removed proxy account.

   

___


## recovery
 
### asRecovered(account: `AccountId`, call: `Call`)
- **interface**: `api.tx.recovery.asRecovered`
- **summary**:   Send a call through a recovered account. 

  The dispatch origin for this call must be _Signed_ and registered to be able to make calls on behalf of the recovered account. 

  Parameters: 

  - `account`: The recovered account you want to make a call on-behalf-of.

  - `call`: The call you want to make with the recovered account.

   
 
### cancelRecovered(account: `AccountId`)
- **interface**: `api.tx.recovery.cancelRecovered`
- **summary**:   Cancel the ability to use `as_recovered` for `account`. 

  The dispatch origin for this call must be _Signed_ and registered to be able to make calls on behalf of the recovered account. 

  Parameters: 

  - `account`: The recovered account you are able to call on-behalf-of.

   
 
### claimRecovery(account: `AccountId`)
- **interface**: `api.tx.recovery.claimRecovery`
- **summary**:   Allow a successful rescuer to claim their recovered account. 

  The dispatch origin for this call must be _Signed_ and must be a "rescuer" who has successfully completed the account recovery process: collected `threshold` or more vouches, waited `delay_period` blocks since initiation. 

  Parameters: 

  - `account`: The lost account that you want to claim has been successfully  recovered by you. 

   
 
### closeRecovery(rescuer: `AccountId`)
- **interface**: `api.tx.recovery.closeRecovery`
- **summary**:   As the controller of a recoverable account, close an active recovery process for your account. 

  Payment: By calling this function, the recoverable account will receive the recovery deposit `RecoveryDeposit` placed by the rescuer. 

  The dispatch origin for this call must be _Signed_ and must be a recoverable account with an active recovery process for it. 

  Parameters: 

  - `rescuer`: The account trying to rescue this recoverable account.

   
 
### createRecovery(friends: `Vec<AccountId>`, threshold: `u16`, delay_period: `BlockNumber`)
- **interface**: `api.tx.recovery.createRecovery`
- **summary**:   Create a recovery configuration for your account. This makes your account recoverable. 

  Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance will be reserved for storing the recovery configuration. This deposit is returned in full when the user calls `remove_recovery`. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `friends`: A list of friends you trust to vouch for recovery attempts.  Should be ordered and contain no duplicate values. 

  - `threshold`: The number of friends that must vouch for a recovery attempt  before the account can be recovered. Should be less than or equal to   the length of the list of friends. 

  - `delay_period`: The number of blocks after a recovery attempt is initialized  that needs to pass before the account can be recovered. 

   
 
### initiateRecovery(account: `AccountId`)
- **interface**: `api.tx.recovery.initiateRecovery`
- **summary**:   Initiate the process for recovering a recoverable account. 

  Payment: `RecoveryDeposit` balance will be reserved for initiating the recovery process. This deposit will always be repatriated to the account trying to be recovered. See `close_recovery`. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `account`: The lost account that you want to recover. This account  needs to be recoverable (i.e. have a recovery configuration). 

   
 
### removeRecovery()
- **interface**: `api.tx.recovery.removeRecovery`
- **summary**:   Remove the recovery process for your account. Recovered accounts are still accessible. 

  NOTE: The user must make sure to call `close_recovery` on all active recovery attempts before calling this function else it will fail. 

  Payment: By calling this function the recoverable account will unreserve their recovery configuration deposit. (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends) 

  The dispatch origin for this call must be _Signed_ and must be a recoverable account (i.e. has a recovery configuration). 

   
 
### setRecovered(lost: `AccountId`, rescuer: `AccountId`)
- **interface**: `api.tx.recovery.setRecovered`
- **summary**:   Allow ROOT to bypass the recovery process and set an a rescuer account for a lost account directly. 

  The dispatch origin for this call must be _ROOT_. 

  Parameters: 

  - `lost`: The "lost account" to be recovered.

  - `rescuer`: The "rescuer account" which can call as the lost account.

   
 
### vouchRecovery(lost: `AccountId`, rescuer: `AccountId`)
- **interface**: `api.tx.recovery.vouchRecovery`
- **summary**:   Allow a "friend" of a recoverable account to vouch for an active recovery process for that account. 

  The dispatch origin for this call must be _Signed_ and must be a "friend" for the recoverable account. 

  Parameters: 

  - `lost`: The lost account that you want to recover.

  - `rescuer`: The account trying to rescue the lost account that you  want to vouch for. 

  The combination of these two parameters must point to an active recovery process. 

   

___


## scheduler
 
### cancel(when: `BlockNumber`, index: `u32`)
- **interface**: `api.tx.scheduler.cancel`
- **summary**:   Cancel an anonymously scheduled task. 

   
 
### cancelNamed(id: `Bytes`)
- **interface**: `api.tx.scheduler.cancelNamed`
- **summary**:   Cancel a named scheduled task. 

   
 
### schedule(when: `BlockNumber`, maybe_periodic: `Option<Period>`, priority: `Priority`, call: `Call`)
- **interface**: `api.tx.scheduler.schedule`
- **summary**:   Anonymously schedule a task. 

   
 
### scheduleAfter(after: `BlockNumber`, maybe_periodic: `Option<Period>`, priority: `Priority`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleAfter`
- **summary**:   Anonymously schedule a task after a delay. 

   
 
### scheduleNamed(id: `Bytes`, when: `BlockNumber`, maybe_periodic: `Option<Period>`, priority: `Priority`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleNamed`
- **summary**:   Schedule a named task. 

   
 
### scheduleNamedAfter(id: `Bytes`, after: `BlockNumber`, maybe_periodic: `Option<Period>`, priority: `Priority`, call: `Call`)
- **interface**: `api.tx.scheduler.scheduleNamedAfter`
- **summary**:   Schedule a named task after a delay. 

   

___


## session
 
### purgeKeys()
- **interface**: `api.tx.session.purgeKeys`
- **summary**:   Removes any session key(s) of the function caller. This doesn't take effect until the next session. 

  The dispatch origin of this function must be signed. 

   
 
### setKeys(keys: `Keys`, proof: `Bytes`)
- **interface**: `api.tx.session.setKeys`
- **summary**:   Sets the session key(s) of the function caller to `keys`. Allows an account to set its session key prior to becoming a validator. This doesn't take effect until the next session. 

  The dispatch origin of this function must be signed. 

   

___


## society
 
### bid(value: `BalanceOf`)
- **interface**: `api.tx.society.bid`
- **summary**:   A user outside of the society can make a bid for entry. 

  Payment: `CandidateDeposit` will be reserved for making a bid. It is returned when the bid becomes a member, or if the bid calls `unbid`. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `value`: A one time payment the bid would like to receive when joining the society.

   
 
### defenderVote(approve: `bool`)
- **interface**: `api.tx.society.defenderVote`
- **summary**:   As a member, vote on the defender. 

  The dispatch origin for this call must be _Signed_ and a member. 

  Parameters: 

  - `approve`: A boolean which says if the candidate should beapproved (`true`) or rejected (`false`). 

   
 
### found(founder: `AccountId`, max_members: `u32`, rules: `Bytes`)
- **interface**: `api.tx.society.found`
- **summary**:   Found the society. 

  This is done as a discrete action in order to allow for the module to be included into a running chain and can only be done once. 

  The dispatch origin for this call must be from the _FounderSetOrigin_. 

  Parameters: 

  - `founder` - The first member and head of the newly founded society.

  - `max_members` - The initial max number of members for the society.

  - `rules` - The rules of this society concerning membership.

   
 
### judgeSuspendedCandidate(who: `AccountId`, judgement: `SocietyJudgement`)
- **interface**: `api.tx.society.judgeSuspendedCandidate`
- **summary**:   Allow suspended judgement origin to make judgement on a suspended candidate. 

  If the judgement is `Approve`, we add them to society as a member with the appropriate payment for joining society. 

  If the judgement is `Reject`, we either slash the deposit of the bid, giving it back to the society treasury, or we ban the voucher from vouching again. 

  If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go through the induction process again. 

  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_. 

  Parameters: 

  - `who` - The suspended candidate to be judged.

  - `judgement` - `Approve`, `Reject`, or `Rebid`.

   
 
### judgeSuspendedMember(who: `AccountId`, forgive: `bool`)
- **interface**: `api.tx.society.judgeSuspendedMember`
- **summary**:   Allow suspension judgement origin to make judgement on a suspended member. 

  If a suspended member is forgiven, we simply add them back as a member, not affecting any of the existing storage items for that member. 

  If a suspended member is rejected, remove all associated storage items, including their payouts, and remove any vouched bids they currently have. 

  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_. 

  Parameters: 

  - `who` - The suspended member to be judged.

  - `forgive` - A boolean representing whether the suspension judgement origin              forgives (`true`) or rejects (`false`) a suspended member. 

   
 
### payout()
- **interface**: `api.tx.society.payout`
- **summary**:   Transfer the first matured payout for the sender and remove it from the records. 

  NOTE: This extrinsic needs to be called multiple times to claim multiple matured payouts. 

  Payment: The member will receive a payment equal to their first matured payout to their free balance. 

  The dispatch origin for this call must be _Signed_ and a member with payouts remaining. 

   
 
### setMaxMembers(max: `u32`)
- **interface**: `api.tx.society.setMaxMembers`
- **summary**:   Allows root origin to change the maximum number of members in society. Max membership count must be greater than 1. 

  The dispatch origin for this call must be from _ROOT_. 

  Parameters: 

  - `max` - The maximum number of members for the society.

   
 
### unbid(pos: `u32`)
- **interface**: `api.tx.society.unbid`
- **summary**:   A bidder can remove their bid for entry into society. By doing so, they will have their candidate deposit returned or they will unvouch their voucher. 

  Payment: The bid deposit is unreserved if the user made a bid. 

  The dispatch origin for this call must be _Signed_ and a bidder. 

  Parameters: 

  - `pos`: Position in the `Bids` vector of the bid who wants to unbid.

   
 
### unfound()
- **interface**: `api.tx.society.unfound`
- **summary**:   Annul the founding of the society. 

  The dispatch origin for this call must be Signed, and the signing account must be both the `Founder` and the `Head`. This implies that it may only be done when there is one member. 

   
 
### unvouch(pos: `u32`)
- **interface**: `api.tx.society.unvouch`
- **summary**:   As a vouching member, unvouch a bid. This only works while vouched user is only a bidder (and not a candidate). 

  The dispatch origin for this call must be _Signed_ and a vouching member. 

  Parameters: 

  - `pos`: Position in the `Bids` vector of the bid who should be unvouched.

   
 
### vote(candidate: `LookupSource`, approve: `bool`)
- **interface**: `api.tx.society.vote`
- **summary**:   As a member, vote on a candidate. 

  The dispatch origin for this call must be _Signed_ and a member. 

  Parameters: 

  - `candidate`: The candidate that the member would like to bid on.

  - `approve`: A boolean which says if the candidate should be             approved (`true`) or rejected (`false`). 

   
 
### vouch(who: `AccountId`, value: `BalanceOf`, tip: `BalanceOf`)
- **interface**: `api.tx.society.vouch`
- **summary**:   As a member, vouch for someone to join society by placing a bid on their behalf. 

  There is no deposit required to vouch for a new bid, but a member can only vouch for one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by the suspension judgement origin, the member will be banned from vouching again. 

  As a vouching member, you can claim a tip if the candidate is accepted. This tip will be paid as a portion of the reward the member will receive for joining the society. 

  The dispatch origin for this call must be _Signed_ and a member. 

  Parameters: 

  - `who`: The user who you would like to vouch for.

  - `value`: The total reward to be paid between you and the candidate if they becomea member in the society. 

  - `tip`: Your cut of the total `value` payout when the candidate is inducted intothe society. Tips larger than `value` will be saturated upon payout. 

   

___


## staking
 
### bond(controller: `LookupSource`, value: `Compact<BalanceOf>`, payee: `RewardDestination`)
- **interface**: `api.tx.staking.bond`
- **summary**:   Take the origin account as a stash and lock up `value` of its balance. `controller` will be the account that controls it. 

  `value` must be more than the `minimum_balance` specified by `T::Currency`. 

  The dispatch origin for this call must be _Signed_ by the stash account. 

  Emits `Bonded`. 

   
 
### bondExtra(max_additional: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.bondExtra`
- **summary**:   Add some extra amount that have appeared in the stash `free_balance` into the balance up for staking. 

  Use this if there are additional funds in your stash account that you wish to bond. Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount that can be added. 

  The dispatch origin for this call must be _Signed_ by the stash, not the controller and it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Bonded`. 

   
 
### cancelDeferredSlash(era: `EraIndex`, slash_indices: `Vec<u32>`)
- **interface**: `api.tx.staking.cancelDeferredSlash`
- **summary**:   Cancel enactment of a deferred slash. 

  Can be called by the `T::SlashCancelOrigin`. 

  Parameters: era and indices of the slashes for that era to kill. 

   
 
### chill()
- **interface**: `api.tx.staking.chill`
- **summary**:   Declare no desire to either validate or nominate. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

   
 
### forceNewEra()
- **interface**: `api.tx.staking.forceNewEra`
- **summary**:   Force there to be a new era at the end of the next session. After this, it will be reset to normal (non-forced) behaviour. 

  The dispatch origin must be Root. 

   
 
### forceNewEraAlways()
- **interface**: `api.tx.staking.forceNewEraAlways`
- **summary**:   Force there to be a new era at the end of sessions indefinitely. 

  The dispatch origin must be Root. 

   
 
### forceNoEras()
- **interface**: `api.tx.staking.forceNoEras`
- **summary**:   Force there to be no new eras indefinitely. 

  The dispatch origin must be Root. 

   
 
### forceUnstake(stash: `AccountId`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.forceUnstake`
- **summary**:   Force a current staker to become completely unstaked, immediately. 

  The dispatch origin must be Root. 

   
 
### increaseValidatorCount(additional: `Compact<u32>`)
- **interface**: `api.tx.staking.increaseValidatorCount`
- **summary**:   Increments the ideal number of validators. 

  The dispatch origin must be Root. 

   
 
### nominate(targets: `Vec<LookupSource>`)
- **interface**: `api.tx.staking.nominate`
- **summary**:   Declare the desire to nominate `targets` for the origin controller. 

  Effects will be felt at the beginning of the next era. This can only be called when [`EraElectionStatus`] is `Closed`. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

   
 
### payoutStakers(validator_stash: `AccountId`, era: `EraIndex`)
- **interface**: `api.tx.staking.payoutStakers`
- **summary**:   Pay out all the stakers behind a single validator for a single era. 

  - `validator_stash` is the stash account of the validator. Their nominators, up to   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards. 

  - `era` may be any era between `[current_era - history_depth; current_era]`.

  The origin of this call must be _Signed_. Any account can call this function, even if it is not one of the stakers. 

  This can only be called when [`EraElectionStatus`] is `Closed`. 

   
 
### reapStash(stash: `AccountId`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.reapStash`
- **summary**:   Remove all data structure concerning a staker/stash once its balance is zero. This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone and the target `stash` must have no funds left. 

  This can be called from any origin. 

  - `stash`: The stash account to reap. Its balance must be zero. 

   
 
### rebond(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.rebond`
- **summary**:   Rebond a portion of the stash scheduled to be unlocked. 

  The dispatch origin must be signed by the controller, and it can be only called when [`EraElectionStatus`] is `Closed`. 

   
 
### scaleValidatorCount(factor: `Percent`)
- **interface**: `api.tx.staking.scaleValidatorCount`
- **summary**:   Scale up the ideal number of validators by a factor. 

  The dispatch origin must be Root. 

   
 
### setController(controller: `LookupSource`)
- **interface**: `api.tx.staking.setController`
- **summary**:   (Re-)set the controller of a stash. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the stash, not the controller. 

   
 
### setHistoryDepth(new_history_depth: `Compact<EraIndex>`, _era_items_deleted: `Compact<u32>`)
- **interface**: `api.tx.staking.setHistoryDepth`
- **summary**:   Set `HistoryDepth` value. This function will delete any history information when `HistoryDepth` is reduced. 

  Parameters: 

  - `new_history_depth`: The new history depth you would like to set.

  - `era_items_deleted`: The number of items that will be deleted by this dispatch.   This should report all the storage items that will be deleted by clearing old    era history. Needed to report an accurate weight for the dispatch. Trusted by    `Root` to report an accurate number. 

  Origin must be root. 

   
 
### setInvulnerables(invulnerables: `Vec<AccountId>`)
- **interface**: `api.tx.staking.setInvulnerables`
- **summary**:   Set the validators who cannot be slashed (if any). 

  The dispatch origin must be Root. 

   
 
### setPayee(payee: `RewardDestination`)
- **interface**: `api.tx.staking.setPayee`
- **summary**:   (Re-)set the payment target for a controller. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   
 
### setValidatorCount(new: `Compact<u32>`)
- **interface**: `api.tx.staking.setValidatorCount`
- **summary**:   Sets the ideal number of validators. 

  The dispatch origin must be Root. 

   
 
### submitElectionSolution(winners: `Vec<ValidatorIndex>`, compact: `CompactAssignments`, score: `ElectionScore`, era: `EraIndex`, size: `ElectionSize`)
- **interface**: `api.tx.staking.submitElectionSolution`
- **summary**:   Submit an election result to the chain. If the solution: 

  1. is valid. 2. has a better score than a potentially existing solution on chain. 

  then, it will be _put_ on chain. 

  A solution consists of two pieces of data: 

  1. `winners`: a flat vector of all the winners of the round. 2. `assignments`: the compact version of an assignment vector that encodes the edge    weights. 

  Both of which may be computed using _phragmen_, or any other algorithm. 

  Additionally, the submitter must provide: 

  - The `score` that they claim their solution has. 

  Both validators and nominators will be represented by indices in the solution. The indices should respect the corresponding types ([`ValidatorIndex`] and [`NominatorIndex`]). Moreover, they should be valid when used to index into [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the solution to be rejected. These two storage items are set during the election window and may be used to determine the indices. 

  A solution is valid if: 

  0. It is submitted when [`EraElectionStatus`] is `Open`. 1. Its claimed score is equal to the score computed on-chain. 2. Presents the correct number of winners. 3. All indexes must be value according to the snapshot vectors. All edge values must    also be correct and should not overflow the granularity of the ratio type (i.e. 256    or billion). 4. For each edge, all targets are actually nominated by the voter. 5. Has correct self-votes. 

  A solutions score is consisted of 3 parameters: 

  1. `min { support.total }` for each support of a winner. This value should be maximized. 2. `sum { support.total }` for each support of a winner. This value should be minimized. 3. `sum { support.total^2 }` for each support of a winner. This value should be    minimized (to ensure less variance) 

   
 
### submitElectionSolutionUnsigned(winners: `Vec<ValidatorIndex>`, compact: `CompactAssignments`, score: `ElectionScore`, era: `EraIndex`, size: `ElectionSize`)
- **interface**: `api.tx.staking.submitElectionSolutionUnsigned`
- **summary**:   Unsigned version of `submit_election_solution`. 

  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions from the local node to be included. In other words, only the block author can include a transaction in the block. 

   
 
### unbond(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.unbond`
- **summary**:   Schedule a portion of the stash to be unlocked ready for transfer out after the bond period ends. If this leaves an amount actively bonded less than T::Currency::minimum_balance(), then it is increased to the full amount. 

  Once the unlock period is done, you can call `withdraw_unbonded` to actually move the funds out of management ready for transfer. 

  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`) can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need to be called first to remove some of the chunks (if possible). 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Unbonded`. 

  See also [`Call::withdraw_unbonded`]. 

   
 
### validate(prefs: `ValidatorPrefs`)
- **interface**: `api.tx.staking.validate`
- **summary**:   Declare the desire to validate for the origin controller. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

   
 
### withdrawUnbonded(num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.withdrawUnbonded`
- **summary**:   Remove any unlocked chunks from the `unlocking` queue from our management. 

  This essentially frees up that balance to be used by the stash account to do whatever it wants. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Withdrawn`. 

  See also [`Call::unbond`]. 

   

___


## sudo
 
### setKey(new: `LookupSource`)
- **interface**: `api.tx.sudo.setKey`
- **summary**:   Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key. 

  The dispatch origin for this call must be _Signed_. 

   
 
### sudo(call: `Call`)
- **interface**: `api.tx.sudo.sudo`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Root` origin. 

  The dispatch origin for this call must be _Signed_. 

   
 
### sudoAs(who: `LookupSource`, call: `Call`)
- **interface**: `api.tx.sudo.sudoAs`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Signed` origin from a given account. 

  The dispatch origin for this call must be _Signed_. 

   
 
### sudoUncheckedWeight(call: `Call`, _weight: `Weight`)
- **interface**: `api.tx.sudo.sudoUncheckedWeight`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Root` origin. This function does not check the weight of the call, and instead allows the Sudo user to specify the weight of the call. 

  The dispatch origin for this call must be _Signed_. 

   

___


## system
 
### fillBlock(_ratio: `Perbill`)
- **interface**: `api.tx.system.fillBlock`
- **summary**:   A dispatch that will fill the block weight up to the given ratio. 
 
### killPrefix(prefix: `Key`, _subkeys: `u32`)
- **interface**: `api.tx.system.killPrefix`
- **summary**:   Kill all storage items with a key that starts with the given prefix. 

  **NOTE:** We rely on the Root origin to provide us the number of subkeys under the prefix we are removing to accurately calculate the weight of this function. 

   
 
### killStorage(keys: `Vec<Key>`)
- **interface**: `api.tx.system.killStorage`
- **summary**:   Kill some items from storage. 

   
 
### remark(_remark: `Bytes`)
- **interface**: `api.tx.system.remark`
- **summary**:   Make some on-chain remark. 

   
 
### setChangesTrieConfig(changes_trie_config: `Option<ChangesTrieConfiguration>`)
- **interface**: `api.tx.system.setChangesTrieConfig`
- **summary**:   Set the new changes trie configuration. 

   
 
### setCode(code: `Bytes`)
- **interface**: `api.tx.system.setCode`
- **summary**:   Set the new runtime code. 

   
 
### setCodeWithoutChecks(code: `Bytes`)
- **interface**: `api.tx.system.setCodeWithoutChecks`
- **summary**:   Set the new runtime code without doing any checks of the given `code`. 

   
 
### setHeapPages(pages: `u64`)
- **interface**: `api.tx.system.setHeapPages`
- **summary**:   Set the number of pages in the WebAssembly environment's heap. 

   
 
### setStorage(items: `Vec<KeyValue>`)
- **interface**: `api.tx.system.setStorage`
- **summary**:   Set some items of storage. 

   
 
### suicide()
- **interface**: `api.tx.system.suicide`
- **summary**:   Kill the sending account, assuming there are no references outstanding and the composite data is equal to its default value. 

   

___


## technicalCommittee
 
### close(proposal_hash: `Hash`, index: `Compact<ProposalIndex>`, proposal_weight_bound: `Compact<Weight>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.close`
- **summary**:   Close a vote that is either approved, disapproved or whose voting period has ended. 

  May be called by any signed account in order to finish voting and close the proposal. 

  If called before the end of the voting period it will only close the vote if it is has enough votes to be approved or disapproved. 

  If called after the end of the voting period abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal. + `length_bound`: The upper bound for the length of the proposal in storage. Checked via                   `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

   
 
### disapproveProposal(proposal_hash: `Hash`)
- **interface**: `api.tx.technicalCommittee.disapproveProposal`
- **summary**:   Disapprove a proposal, close, and remove it from the system, regardless of its current state. 

  Must be called by the Root origin. 

  Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

   
 
### execute(proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 

   
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCommittee.propose`
- **summary**:   Add a new proposal to either be voted on or executed directly. 

  Requires the sender to be member. 

  `threshold` determines whether `proposal` is executed directly (`threshold < 2`) or put up for voting. 

   
 
### setMembers(new_members: `Vec<AccountId>`, prime: `Option<AccountId>`, old_count: `MemberCount`)
- **interface**: `api.tx.technicalCommittee.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage.               Used for weight estimation. 

  Requires root origin. 

  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but       the weight estimations rely on it to estimate dispatchable weight. 

   
 
### vote(proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.technicalCommittee.vote`
- **summary**:   Add an aye or nay vote for the sender to the given proposal. 

  Requires the sender to be a member. 

   

___


## technicalMembership
 
### addMember(who: `AccountId`)
- **interface**: `api.tx.technicalMembership.addMember`
- **summary**:   Add a member `who` to the set. 

  May only be called from `T::AddOrigin`. 
 
### changeKey(new: `AccountId`)
- **interface**: `api.tx.technicalMembership.changeKey`
- **summary**:   Swap out the sending member for some other key `new`. 

  May only be called from `Signed` origin of a current member. 

  Prime membership is passed from the origin account to `new`, if extant. 
 
### clearPrime()
- **interface**: `api.tx.technicalMembership.clearPrime`
- **summary**:   Remove the prime member if it exists. 

  May only be called from `T::PrimeOrigin`. 
 
### removeMember(who: `AccountId`)
- **interface**: `api.tx.technicalMembership.removeMember`
- **summary**:   Remove a member `who` from the set. 

  May only be called from `T::RemoveOrigin`. 
 
### resetMembers(members: `Vec<AccountId>`)
- **interface**: `api.tx.technicalMembership.resetMembers`
- **summary**:   Change the membership to a new set, disregarding the existing membership. Be nice and pass `members` pre-sorted. 

  May only be called from `T::ResetOrigin`. 
 
### setPrime(who: `AccountId`)
- **interface**: `api.tx.technicalMembership.setPrime`
- **summary**:   Set the prime member. Must be a current member. 

  May only be called from `T::PrimeOrigin`. 
 
### swapMember(remove: `AccountId`, add: `AccountId`)
- **interface**: `api.tx.technicalMembership.swapMember`
- **summary**:   Swap out one member `remove` for another `add`. 

  May only be called from `T::SwapOrigin`. 

  Prime membership is *not* passed from `remove` to `add`, if extant. 

___


## timestamp
 
### set(now: `Compact<Moment>`)
- **interface**: `api.tx.timestamp.set`
- **summary**:   Set the current time. 

  This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn't been invoked by that time. 

  The timestamp should be greater than the previous one by the amount specified by `MinimumPeriod`. 

  The dispatch origin for this call must be `Inherent`. 

   

___


## treasury
 
### acceptCurator(bounty_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.treasury.acceptCurator`
- **summary**:   Accept the curator role for a bounty. A deposit will be reserved from curator and refund upon successful payout. 

  May only be called from the curator. 

   
 
### approveBounty(bounty_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.treasury.approveBounty`
- **summary**:   Approve a bounty proposal. At a later time, the bounty will be funded and become active and the original deposit will be returned. 

  May only be called from `T::ApproveOrigin`. 

   
 
### approveProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.treasury.approveProposal`
- **summary**:   Approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned. 

  May only be called from `T::ApproveOrigin`. 

   
 
### awardBounty(bounty_id: `Compact<ProposalIndex>`, beneficiary: `LookupSource`)
- **interface**: `api.tx.treasury.awardBounty`
- **summary**:   Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay. 

  The dispatch origin for this call must be the curator of this bounty. 

  - `bounty_id`: Bounty ID to award. 

  - `beneficiary`: The beneficiary account whom will receive the payout.
 
### claimBounty(bounty_id: `Compact<BountyIndex>`)
- **interface**: `api.tx.treasury.claimBounty`
- **summary**:   Claim the payout from an awarded bounty after payout delay. 

  The dispatch origin for this call must be the beneficiary of this bounty. 

  - `bounty_id`: Bounty ID to claim. 
 
### closeBounty(bounty_id: `Compact<BountyIndex>`)
- **interface**: `api.tx.treasury.closeBounty`
- **summary**:   Cancel a proposed or active bounty. All the funds will be sent to treasury and the curator deposit will be unreserved if possible. 

  Only `T::RejectOrigin` is able to cancel a bounty. 

  - `bounty_id`: Bounty ID to cancel. 
 
### closeTip(hash: `Hash`)
- **interface**: `api.tx.treasury.closeTip`
- **summary**:   Close and payout a tip. 

  The dispatch origin for this call must be _Signed_. 

  The tip identified by `hash` must have finished its countdown period. 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

   
 
### extendBountyExpiry(bounty_id: `Compact<BountyIndex>`, _remark: `Bytes`)
- **interface**: `api.tx.treasury.extendBountyExpiry`
- **summary**:   Extend the expiry time of an active bounty. 

  The dispatch origin for this call must be the curator of this bounty. 

  - `bounty_id`: Bounty ID to extend. 

  - `remark`: additional information.
 
### proposeBounty(value: `Compact<BalanceOf>`, description: `Bytes`)
- **interface**: `api.tx.treasury.proposeBounty`
- **summary**:   Propose a new bounty. 

  The dispatch origin for this call must be _Signed_. 

  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval, or slashed when rejected. 

  - `curator`: The curator account whom will manage this bounty. 

  - `fee`: The curator fee.

  - `value`: The total payment amount of this bounty, curator fee included.

  - `description`: The description of this bounty.
 
### proposeCurator(bounty_id: `Compact<ProposalIndex>`, curator: `LookupSource`, fee: `Compact<BalanceOf>`)
- **interface**: `api.tx.treasury.proposeCurator`
- **summary**:   Assign a curator to a funded bounty. 

  May only be called from `T::ApproveOrigin`. 

   
 
### proposeSpend(value: `Compact<BalanceOf>`, beneficiary: `LookupSource`)
- **interface**: `api.tx.treasury.proposeSpend`
- **summary**:   Put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded. 

   
 
### rejectProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.treasury.rejectProposal`
- **summary**:   Reject a proposed spend. The original deposit will be slashed. 

  May only be called from `T::RejectOrigin`. 

   
 
### reportAwesome(reason: `Bytes`, who: `AccountId`)
- **interface**: `api.tx.treasury.reportAwesome`
- **summary**:   Report something `reason` that deserves a tip and claim any eventual the finder's fee. 

  The dispatch origin for this call must be _Signed_. 

  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as `DataDepositPerByte` for each byte in `reason`. 

  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be   a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

  Emits `NewTip` if successful. 

   
 
### retractTip(hash: `Hash`)
- **interface**: `api.tx.treasury.retractTip`
- **summary**:   Retract a prior tip-report from `report_awesome`, and cancel the process of tipping. 

  If successful, the original deposit will be unreserved. 

  The dispatch origin for this call must be _Signed_ and the tip identified by `hash` must have been reported by the signing account through `report_awesome` (and not through `tip_new`). 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

  Emits `TipRetracted` if successful. 

   
 
### tip(hash: `Hash`, tip_value: `Compact<BalanceOf>`)
- **interface**: `api.tx.treasury.tip`
- **summary**:   Declare a tip value for an already-open tip. 

  The dispatch origin for this call must be _Signed_ and the signing account must be a member of the `Tippers` set. 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary   account ID. 

  - `tip_value`: The amount of tip that the sender would like to give. The median tip  value of active tippers will be given to the `who`. 

  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period has started. 

   
 
### tipNew(reason: `Bytes`, who: `AccountId`, tip_value: `Compact<BalanceOf>`)
- **interface**: `api.tx.treasury.tipNew`
- **summary**:   Give a tip for something new; no finder's fee will be taken. 

  The dispatch origin for this call must be _Signed_ and the signing account must be a member of the `Tippers` set. 

  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be   a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

  - `tip_value`: The amount of tip that the sender would like to give. The median tip  value of active tippers will be given to the `who`. 

  Emits `NewTip` if successful. 

   
 
### unassignCurator(bounty_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.treasury.unassignCurator`
- **summary**:   Unassign curator from a bounty. 

  This function can only be called by the `RejectOrigin` a signed origin. 

  If this function is called by the `RejectOrigin`, we assume that the curator is malicious or inactive. As a result, we will slash the curator when possible. 

  If the origin is the curator, we take this as a sign they are unable to do their job and they willingly give up. We could slash them, but for now we allow them to recover their deposit and exit without issue. (We may want to change this if it is abused.) 

  Finally, the origin can be anyone if and only if the curator is "inactive". This allows anyone in the community to call out that a curator is not doing their due diligence, and we should pick a new curator. In this case the curator should also be slashed. 

   

___


## utility
 
### asDerivative(index: `u16`, call: `Call`)
- **interface**: `api.tx.utility.asDerivative`
- **summary**:   Send a call through an indexed pseudonym of the sender. 

  Filter from origin are passed along. The call will be dispatched with an origin which use the same filter as the origin of this call. 

  NOTE: If you need to ensure that any account-based filtering is not honored (i.e. because you expect `proxy` to have been used prior in the call stack and you do not want the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1` in the Multisig pallet instead. 

  NOTE: Prior to version *12, this was called `as_limited_sub`. 

  The dispatch origin for this call must be _Signed_. 
 
### batch(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.batch`
- **summary**:   Send a batch of dispatch calls. 

  May be called from any origin. 

  - `calls`: The calls to be dispatched from the same origin. 

  If origin is root then call are dispatch without checking origin filter. (This includes bypassing `frame_system::Trait::BaseCallFilter`). 

   

  This will return `Ok` in all circumstances. To determine the success of the batch, an event is deposited. If a call failed and the batch was interrupted, then the `BatchInterrupted` event is deposited, along with the number of successful calls made and the error of the failed call. If all were successful, then the `BatchCompleted` event is deposited. 

___


## vesting
 
### forceVestedTransfer(source: `LookupSource`, target: `LookupSource`, schedule: `VestingInfo`)
- **interface**: `api.tx.vesting.forceVestedTransfer`
- **summary**:   Force a vested transfer. 

  The dispatch origin for this call must be _Root_. 

  - `source`: The account whose funds should be transferred. 

  - `target`: The account that should be transferred the vested funds.

  - `amount`: The amount of funds to transfer and will be vested.

  - `schedule`: The vesting schedule attached to the transfer.

  Emits `VestingCreated`. 

   
 
### vest()
- **interface**: `api.tx.vesting.vest`
- **summary**:   Unlock any vested funds of the sender account. 

  The dispatch origin for this call must be _Signed_ and the sender must have funds still locked under this module. 

  Emits either `VestingCompleted` or `VestingUpdated`. 

   
 
### vestOther(target: `LookupSource`)
- **interface**: `api.tx.vesting.vestOther`
- **summary**:   Unlock any vested funds of a `target` account. 

  The dispatch origin for this call must be _Signed_. 

  - `target`: The account whose vested funds should be unlocked. Must have funds still locked under this module. 

  Emits either `VestingCompleted` or `VestingUpdated`. 

   
 
### vestedTransfer(target: `LookupSource`, schedule: `VestingInfo`)
- **interface**: `api.tx.vesting.vestedTransfer`
- **summary**:   Create a vested transfer. 

  The dispatch origin for this call must be _Signed_. 

  - `target`: The account that should be transferred the vested funds. 

  - `amount`: The amount of funds to transfer and will be vested.

  - `schedule`: The vesting schedule attached to the transfer.

  Emits `VestingCreated`. 

   
