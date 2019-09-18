// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { QueryableStorage } from './types';
import { bool, u32, u64 } from '@polkadot/types';
import { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Hash, Moment, Perbill, Weight, WeightMultiplier } from '@polkadot/types/interfaces/runtime';
import { ProposalIndex } from '@polkadot/types/interfaces/collective';
import { Gas, Schedule } from '@polkadot/types/interfaces/contracts';
import { PropIndex, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import { SetIndex, VoteIndex } from '@polkadot/types/interfaces/elections';
import { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex, EraPoints, Forcing, MomentOf } from '@polkadot/types/interfaces/staking';
import { DigestOf, EventIndex } from '@polkadot/types/interfaces/system';

export interface QueryInterface<ApiType> extends QueryableStorage<ApiType> {
system: {
extrinsicCount(): u32,
allExtrinsicsWeight(): Weight,
allExtrinsicsLen(): u32,
nextWeightMultiplier(): WeightMultiplier,
randomMaterial(): (i8,Vec<Hash>),
number(): BlockNumber,
parentHash(): Hash,
extrinsicsRoot(): Hash,
digest(): DigestOf,
events(): Vec<EventRecord>,
eventCount(): EventIndex
}
babe: {
epochIndex(): u64,
authorities(): Vec<(AuthorityId,BabeAuthorityWeight)>,
epochStartSlot(): u64,
currentSlot(): u64,
secondarySlots(): (bool,bool),
pendingSecondarySlotsChange(): bool,
randomness(): [u8;32],
nextRandomness(): [u8;32],
segmentIndex(): u32,
initialized(): bool
}
timestamp: {
now(): Moment,
didUpdate(): bool
}
authorship: {
uncles(): Vec<UncleEntryItem>,
author(): AccountId,
didSetUncles(): bool
}
indices: {
nextEnumSet(): AccountIndex
}
balances: {
totalIssuance(): Balance
}
staking: {
validatorCount(): u32,
minimumValidatorCount(): u32,
invulnerables(): Vec<AccountId>,
currentElected(): Vec<AccountId>,
currentEra(): EraIndex,
currentEraStart(): MomentOf,
currentEraStartSessionIndex(): SessionIndex,
currentEraPointsEarned(): EraPoints,
slotStake(): BalanceOf,
forceEra(): Forcing,
slashRewardFraction(): Perbill,
bondedEras(): Vec<(EraIndex,SessionIndex)>
}
session: {
validators(): Vec<ValidatorId>,
currentIndex(): SessionIndex,
queuedChanged(): bool,
queuedKeys(): Vec<(ValidatorId,Keys)>
}
democracy: {
publicPropCount(): PropIndex,
publicProps(): Vec<(PropIndex,Proposal,AccountId)>,
referendumCount(): ReferendumIndex,
nextTally(): ReferendumIndex,
lastTabledWasExternal(): bool,
nextExternal(): (Proposal,VoteThreshold)
}
council: {
proposals(): Vec<Hash>,
proposalCount(): u32,
members(): Vec<AccountId>
}
technicalCommittee: {
proposals(): Vec<Hash>,
proposalCount(): u32,
members(): Vec<AccountId>
}
elections: {
presentationDuration(): BlockNumber,
termDuration(): BlockNumber,
desiredSeats(): u32,
members(): Vec<(AccountId,BlockNumber)>,
voteCount(): VoteIndex,
nextVoterSet(): SetIndex,
voterCount(): SetIndex,
candidates(): Vec<AccountId>,
candidateCount(): u32,
nextFinalize(): (BlockNumber,u32,Vec<AccountId>),
leaderboard(): Vec<(BalanceOf,AccountId)>
}
technicalMembership: {
members(): Vec<AccountId>
}
grandpa: {
authorities(): Vec<(AuthorityId,AuthorityWeight)>,
state(): StoredState,
pendingChange(): StoredPendingChange,
nextForced(): BlockNumber,
stalled(): (BlockNumber,BlockNumber),
currentSetId(): SetId
}
treasury: {
proposalCount(): ProposalIndex,
approvals(): Vec<ProposalIndex>
}
contracts: {
gasSpent(): Gas,
currentSchedule(): Schedule,
accountCounter(): u64,
gasPrice(): BalanceOf
}
sudo: {
key(): AccountId
}
imOnline: {
gossipAt(): BlockNumber,
keys(): Vec<AuthorityId>
}
offences: {

}
}
