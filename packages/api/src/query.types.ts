// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Observable } from 'rxjs';
import { Option, U8a, Vec } from '@polkadot/types/codec';
import { Bytes, Null, bool, i8, u32, u64 } from '@polkadot/types';
import { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Hash, Index, KeyTypeId, Moment, Perbill, ValidatorId, Weight, WeightMultiplier } from '@polkadot/types/interfaces/runtime';
import { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import { BabeAuthorityWeight, MaybeVrf } from '@polkadot/types/interfaces/babe';
import { BalanceLock, VestingSchedule } from '@polkadot/types/interfaces/balances';
import { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { CodeHash, ContractInfo, Gas, PrefabWasmModule, Schedule } from '@polkadot/types/interfaces/contracts';
import { Conviction, PropIndex, Proposal, ReferendumIndex, ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { ApprovalFlag, SetIndex, Vote, VoteIndex, VoteThreshold, VoterInfo } from '@polkadot/types/interfaces/elections';
import { AuthorityWeight, SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import { Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex, EraPoints, Exposure, Forcing, MomentOf, RewardDestination, SlashJournalEntry, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { DigestOf, EventIndex, EventRecord } from '@polkadot/types/interfaces/system';
import { TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import { ITuple } from '@polkadot/types/types';

declare module './types' {
  export interface QueryableStorageExact<ApiType> {
    system: {
      [index: string]: QueryableStorageEntry<ApiType>;
      accountNonce: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Index>> & QueryableStorageEntry<ApiType>;
      extrinsicCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      allExtrinsicsWeight: StorageEntryExact<ApiType, () => Observable<Weight>> & QueryableStorageEntry<ApiType>;
      allExtrinsicsLen: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      nextWeightMultiplier: StorageEntryExact<ApiType, () => Observable<WeightMultiplier>> & QueryableStorageEntry<ApiType>;
      blockHash: StorageEntryExact<ApiType, (arg: BlockNumber | Uint8Array | number | string) => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      extrinsicData: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      randomMaterial: StorageEntryExact<ApiType, () => Observable<ITuple<[i8, Vec<Hash>]>>> & QueryableStorageEntry<ApiType>;
      number: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      parentHash: StorageEntryExact<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      extrinsicsRoot: StorageEntryExact<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      digest: StorageEntryExact<ApiType, () => Observable<DigestOf>> & QueryableStorageEntry<ApiType>;
      events: StorageEntryExact<ApiType, () => Observable<Vec<EventRecord>>> & QueryableStorageEntry<ApiType>;
      eventCount: StorageEntryExact<ApiType, () => Observable<EventIndex>> & QueryableStorageEntry<ApiType>;
      eventTopics: StorageEntryExact<ApiType, (key1: Null, key2: Hash | Uint8Array | string) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>> & QueryableStorageEntry<ApiType>;
    };
    babe: {
      [index: string]: QueryableStorageEntry<ApiType>;
      epochIndex: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      authorities: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>> & QueryableStorageEntry<ApiType>;
      genesisSlot: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      currentSlot: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      randomness: StorageEntryExact<ApiType, () => Observable<U8a>> & QueryableStorageEntry<ApiType>;
      nextRandomness: StorageEntryExact<ApiType, () => Observable<U8a>> & QueryableStorageEntry<ApiType>;
      segmentIndex: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      underConstruction: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Vec<U8a>>> & QueryableStorageEntry<ApiType>;
      initialized: StorageEntryExact<ApiType, () => Observable<MaybeVrf>> & QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      [index: string]: QueryableStorageEntry<ApiType>;
      now: StorageEntryExact<ApiType, () => Observable<Moment>> & QueryableStorageEntry<ApiType>;
      didUpdate: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    authorship: {
      [index: string]: QueryableStorageEntry<ApiType>;
      uncles: StorageEntryExact<ApiType, () => Observable<Vec<UncleEntryItem>>> & QueryableStorageEntry<ApiType>;
      author: StorageEntryExact<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
      didSetUncles: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    indices: {
      [index: string]: QueryableStorageEntry<ApiType>;
      nextEnumSet: StorageEntryExact<ApiType, () => Observable<AccountIndex>> & QueryableStorageEntry<ApiType>;
      enumSet: StorageEntryExact<ApiType, (arg: AccountIndex | Uint8Array | number | string) => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    balances: {
      [index: string]: QueryableStorageEntry<ApiType>;
      totalIssuance: StorageEntryExact<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      vesting: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<VestingSchedule>> & QueryableStorageEntry<ApiType>;
      freeBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      reservedBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      locks: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Vec<BalanceLock>>> & QueryableStorageEntry<ApiType>;
    };
    staking: {
      [index: string]: QueryableStorageEntry<ApiType>;
      validatorCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      minimumValidatorCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      invulnerables: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      bonded: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
      ledger: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<StakingLedger>> & QueryableStorageEntry<ApiType>;
      payee: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<RewardDestination>> & QueryableStorageEntry<ApiType>;
      validators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ValidatorPrefs>> & QueryableStorageEntry<ApiType>;
      nominators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      stakers: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Exposure>> & QueryableStorageEntry<ApiType>;
      currentElected: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      currentEra: StorageEntryExact<ApiType, () => Observable<EraIndex>> & QueryableStorageEntry<ApiType>;
      currentEraStart: StorageEntryExact<ApiType, () => Observable<MomentOf>> & QueryableStorageEntry<ApiType>;
      currentEraStartSessionIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      currentEraPointsEarned: StorageEntryExact<ApiType, () => Observable<EraPoints>> & QueryableStorageEntry<ApiType>;
      slotStake: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      forceEra: StorageEntryExact<ApiType, () => Observable<Forcing>> & QueryableStorageEntry<ApiType>;
      slashRewardFraction: StorageEntryExact<ApiType, () => Observable<Perbill>> & QueryableStorageEntry<ApiType>;
      bondedEras: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[EraIndex, SessionIndex]>>>> & QueryableStorageEntry<ApiType>;
      eraSlashJournal: StorageEntryExact<ApiType, (arg: EraIndex | Uint8Array | number | string) => Observable<Vec<SlashJournalEntry>>> & QueryableStorageEntry<ApiType>;
    };
    session: {
      [index: string]: QueryableStorageEntry<ApiType>;
      validators: StorageEntryExact<ApiType, () => Observable<Vec<ValidatorId>>> & QueryableStorageEntry<ApiType>;
      currentIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      queuedChanged: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
      queuedKeys: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>> & QueryableStorageEntry<ApiType>;
      disabledValidators: StorageEntryExact<ApiType, () => Observable<Vec<u32>>> & QueryableStorageEntry<ApiType>;
      nextKeys: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: ValidatorId | Uint8Array | string) => Observable<Keys>> & QueryableStorageEntry<ApiType>;
      keyOwner: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: ITuple<[KeyTypeId, Bytes]>) => Observable<ValidatorId>> & QueryableStorageEntry<ApiType>;
    };
    democracy: {
      [index: string]: QueryableStorageEntry<ApiType>;
      publicPropCount: StorageEntryExact<ApiType, () => Observable<PropIndex>> & QueryableStorageEntry<ApiType>;
      publicProps: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[PropIndex, Proposal, AccountId]>>>> & QueryableStorageEntry<ApiType>;
      depositOf: StorageEntryExact<ApiType, (arg: PropIndex | Uint8Array | number | string) => Observable<ITuple<[BalanceOf, Vec<AccountId>]>>> & QueryableStorageEntry<ApiType>;
      referendumCount: StorageEntryExact<ApiType, () => Observable<ReferendumIndex>> & QueryableStorageEntry<ApiType>;
      nextTally: StorageEntryExact<ApiType, () => Observable<ReferendumIndex>> & QueryableStorageEntry<ApiType>;
      referendumInfoOf: StorageEntryExact<ApiType, (arg: ReferendumIndex | Uint8Array | number | string) => Observable<ReferendumInfo>> & QueryableStorageEntry<ApiType>;
      dispatchQueue: StorageEntryExact<ApiType, (arg: BlockNumber | Uint8Array | number | string) => Observable<Vec<Option<ITuple<[Proposal, ReferendumIndex]>>>>> & QueryableStorageEntry<ApiType>;
      votersFor: StorageEntryExact<ApiType, (arg: ReferendumIndex | Uint8Array | number | string) => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      voteOf: StorageEntryExact<ApiType, (arg: ITuple<[ReferendumIndex, AccountId]>) => Observable<Vote>> & QueryableStorageEntry<ApiType>;
      proxy: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
      delegations: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ITuple<[AccountId, Conviction]>>> & QueryableStorageEntry<ApiType>;
      lastTabledWasExternal: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
      nextExternal: StorageEntryExact<ApiType, () => Observable<ITuple<[Proposal, VoteThreshold]>>> & QueryableStorageEntry<ApiType>;
      blacklist: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<ITuple<[BlockNumber, Vec<AccountId>]>>> & QueryableStorageEntry<ApiType>;
      cancellations: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    council: {
      [index: string]: QueryableStorageEntry<ApiType>;
      proposals: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
      proposalOf: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Proposal>> & QueryableStorageEntry<ApiType>;
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Votes>> & QueryableStorageEntry<ApiType>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    technicalCommittee: {
      [index: string]: QueryableStorageEntry<ApiType>;
      proposals: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
      proposalOf: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Proposal>> & QueryableStorageEntry<ApiType>;
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Votes>> & QueryableStorageEntry<ApiType>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    elections: {
      [index: string]: QueryableStorageEntry<ApiType>;
      presentationDuration: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      termDuration: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      desiredSeats: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[AccountId, BlockNumber]>>>> & QueryableStorageEntry<ApiType>;
      voteCount: StorageEntryExact<ApiType, () => Observable<VoteIndex>> & QueryableStorageEntry<ApiType>;
      approvalsOf: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, SetIndex]>) => Observable<Vec<ApprovalFlag>>> & QueryableStorageEntry<ApiType>;
      registerInfoOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ITuple<[VoteIndex, u32]>>> & QueryableStorageEntry<ApiType>;
      voterInfoOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<VoterInfo>> & QueryableStorageEntry<ApiType>;
      voters: StorageEntryExact<ApiType, (arg: SetIndex | Uint8Array | number | string) => Observable<Vec<Option<AccountId>>>> & QueryableStorageEntry<ApiType>;
      nextVoterSet: StorageEntryExact<ApiType, () => Observable<SetIndex>> & QueryableStorageEntry<ApiType>;
      voterCount: StorageEntryExact<ApiType, () => Observable<SetIndex>> & QueryableStorageEntry<ApiType>;
      candidates: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      candidateCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      nextFinalize: StorageEntryExact<ApiType, () => Observable<ITuple<[BlockNumber, u32, Vec<AccountId>]>>> & QueryableStorageEntry<ApiType>;
      leaderboard: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[BalanceOf, AccountId]>>>> & QueryableStorageEntry<ApiType>;
      proxy: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
    };
    technicalMembership: {
      [index: string]: QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      [index: string]: QueryableStorageEntry<ApiType>;
      authorities: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[AuthorityId, AuthorityWeight]>>>> & QueryableStorageEntry<ApiType>;
      state: StorageEntryExact<ApiType, () => Observable<StoredState>> & QueryableStorageEntry<ApiType>;
      pendingChange: StorageEntryExact<ApiType, () => Observable<StoredPendingChange>> & QueryableStorageEntry<ApiType>;
      nextForced: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      stalled: StorageEntryExact<ApiType, () => Observable<ITuple<[BlockNumber, BlockNumber]>>> & QueryableStorageEntry<ApiType>;
      currentSetId: StorageEntryExact<ApiType, () => Observable<SetId>> & QueryableStorageEntry<ApiType>;
      setIdSession: StorageEntryExact<ApiType, (arg: SetId | Uint8Array | number | string) => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
    };
    treasury: {
      [index: string]: QueryableStorageEntry<ApiType>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<ProposalIndex>> & QueryableStorageEntry<ApiType>;
      proposals: StorageEntryExact<ApiType, (arg: ProposalIndex | Uint8Array | number | string) => Observable<TreasuryProposal>> & QueryableStorageEntry<ApiType>;
      approvals: StorageEntryExact<ApiType, () => Observable<Vec<ProposalIndex>>> & QueryableStorageEntry<ApiType>;
    };
    contracts: {
      [index: string]: QueryableStorageEntry<ApiType>;
      gasSpent: StorageEntryExact<ApiType, () => Observable<Gas>> & QueryableStorageEntry<ApiType>;
      currentSchedule: StorageEntryExact<ApiType, () => Observable<Schedule>> & QueryableStorageEntry<ApiType>;
      pristineCode: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      codeStorage: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<PrefabWasmModule>> & QueryableStorageEntry<ApiType>;
      accountCounter: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      contractInfoOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ContractInfo>> & QueryableStorageEntry<ApiType>;
      gasPrice: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
    };
    sudo: {
      [index: string]: QueryableStorageEntry<ApiType>;
      key: StorageEntryExact<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
    };
    imOnline: {
      [index: string]: QueryableStorageEntry<ApiType>;
      gossipAt: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      keys: StorageEntryExact<ApiType, () => Observable<Vec<AuthorityId>>> & QueryableStorageEntry<ApiType>;
      receivedHeartbeats: StorageEntryExact<ApiType, (key1: SessionIndex | Uint8Array | number | string, key2: AuthIndex | Uint8Array | number | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
    };
    offences: {
      [index: string]: QueryableStorageEntry<ApiType>;
      reports: StorageEntryExact<ApiType, (arg: ReportIdOf | Uint8Array | string) => Observable<OffenceDetails>> & QueryableStorageEntry<ApiType>;
      concurrentReportsIndex: StorageEntryExact<ApiType, (key1: Kind | Uint8Array | string, key2: OpaqueTimeSlot | Uint8Array | string) => Observable<Vec<ReportIdOf>>> & QueryableStorageEntry<ApiType>;
      reportsByKindIndex: StorageEntryExact<ApiType, (arg: Kind | Uint8Array | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
    };
  }
}
