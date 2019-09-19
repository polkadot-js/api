// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Observable } from 'rxjs';
import { Option, U8a, Vec } from '@polkadot/types/codec';
import { Bytes, Null, bool, i8, u32, u64 } from '@polkadot/types';
import { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Hash, Index, KeyTypeId, Moment, Perbill, ValidatorId, Weight, WeightMultiplier } from '@polkadot/types/interfaces/runtime';
import { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import { BabeAuthorityWeight } from '@polkadot/types/interfaces/babe';
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
import { Codec } from '@polkadot/types/types';

declare module './types' {
  export interface QueryableStorageExact<ApiType> {
    system: {
      accountNonce: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Index>>;
      extrinsicCount: StorageEntryExact<ApiType, () => Observable<u32>>;
      allExtrinsicsWeight: StorageEntryExact<ApiType, () => Observable<Weight>>;
      allExtrinsicsLen: StorageEntryExact<ApiType, () => Observable<u32>>;
      nextWeightMultiplier: StorageEntryExact<ApiType, () => Observable<WeightMultiplier>>;
      blockHash: StorageEntryExact<ApiType, (arg: BlockNumber | Uint8Array | number | string) => Observable<Hash>>;
      extrinsicData: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Bytes>>;
      randomMaterial: StorageEntryExact<ApiType, () => Observable<[i8, Vec<Hash>] & Codec>>;
      number: StorageEntryExact<ApiType, () => Observable<BlockNumber>>;
      parentHash: StorageEntryExact<ApiType, () => Observable<Hash>>;
      extrinsicsRoot: StorageEntryExact<ApiType, () => Observable<Hash>>;
      digest: StorageEntryExact<ApiType, () => Observable<DigestOf>>;
      events: StorageEntryExact<ApiType, () => Observable<Vec<EventRecord>>>;
      eventCount: StorageEntryExact<ApiType, () => Observable<EventIndex>>;
      eventTopics: StorageEntryExact<ApiType, (key1: Null, key2: Hash | Uint8Array | string) => Observable<Vec<[BlockNumber, EventIndex] & Codec>>>;
    };
    babe: {
      epochIndex: StorageEntryExact<ApiType, () => Observable<u64>>;
      authorities: StorageEntryExact<ApiType, () => Observable<Vec<[AuthorityId, BabeAuthorityWeight] & Codec>>>;
      epochStartSlot: StorageEntryExact<ApiType, () => Observable<u64>>;
      currentSlot: StorageEntryExact<ApiType, () => Observable<u64>>;
      secondarySlots: StorageEntryExact<ApiType, () => Observable<[bool, bool] & Codec>>;
      pendingSecondarySlotsChange: StorageEntryExact<ApiType, () => Observable<bool>>;
      randomness: StorageEntryExact<ApiType, () => Observable<U8a>>;
      nextRandomness: StorageEntryExact<ApiType, () => Observable<U8a>>;
      segmentIndex: StorageEntryExact<ApiType, () => Observable<u32>>;
      underConstruction: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Vec<U8a>>>;
      initialized: StorageEntryExact<ApiType, () => Observable<bool>>;
    };
    timestamp: {
      now: StorageEntryExact<ApiType, () => Observable<Moment>>;
      didUpdate: StorageEntryExact<ApiType, () => Observable<bool>>;
    };
    authorship: {
      uncles: StorageEntryExact<ApiType, () => Observable<Vec<UncleEntryItem>>>;
      author: StorageEntryExact<ApiType, () => Observable<AccountId>>;
      didSetUncles: StorageEntryExact<ApiType, () => Observable<bool>>;
    };
    indices: {
      nextEnumSet: StorageEntryExact<ApiType, () => Observable<AccountIndex>>;
      enumSet: StorageEntryExact<ApiType, (arg: AccountIndex | Uint8Array | number | string) => Observable<Vec<AccountId>>>;
    };
    balances: {
      totalIssuance: StorageEntryExact<ApiType, () => Observable<Balance>>;
      vesting: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<VestingSchedule>>;
      freeBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>>;
      reservedBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>>;
      locks: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Vec<BalanceLock>>>;
    };
    staking: {
      validatorCount: StorageEntryExact<ApiType, () => Observable<u32>>;
      minimumValidatorCount: StorageEntryExact<ApiType, () => Observable<u32>>;
      invulnerables: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>>;
      bonded: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<AccountId>>;
      ledger: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<StakingLedger>>;
      payee: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<RewardDestination>>;
      validators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ValidatorPrefs>>;
      nominators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Vec<AccountId>>>;
      stakers: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Exposure>>;
      currentElected: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>>;
      currentEra: StorageEntryExact<ApiType, () => Observable<EraIndex>>;
      currentEraStart: StorageEntryExact<ApiType, () => Observable<MomentOf>>;
      currentEraStartSessionIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>>;
      currentEraPointsEarned: StorageEntryExact<ApiType, () => Observable<EraPoints>>;
      slotStake: StorageEntryExact<ApiType, () => Observable<BalanceOf>>;
      forceEra: StorageEntryExact<ApiType, () => Observable<Forcing>>;
      slashRewardFraction: StorageEntryExact<ApiType, () => Observable<Perbill>>;
      bondedEras: StorageEntryExact<ApiType, () => Observable<Vec<[EraIndex, SessionIndex] & Codec>>>;
      eraSlashJournal: StorageEntryExact<ApiType, (arg: EraIndex | Uint8Array | number | string) => Observable<Vec<SlashJournalEntry>>>;
    };
    session: {
      validators: StorageEntryExact<ApiType, () => Observable<Vec<ValidatorId>>>;
      currentIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>>;
      queuedChanged: StorageEntryExact<ApiType, () => Observable<bool>>;
      queuedKeys: StorageEntryExact<ApiType, () => Observable<Vec<[ValidatorId, Keys] & Codec>>>;
      nextKeys: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: ValidatorId | Uint8Array | string) => Observable<Keys>>;
      keyOwner: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: [KeyTypeId, Bytes] & Codec) => Observable<ValidatorId>>;
    };
    democracy: {
      publicPropCount: StorageEntryExact<ApiType, () => Observable<PropIndex>>;
      publicProps: StorageEntryExact<ApiType, () => Observable<Vec<[PropIndex, Proposal, AccountId] & Codec>>>;
      depositOf: StorageEntryExact<ApiType, (arg: PropIndex | Uint8Array | number | string) => Observable<[BalanceOf, Vec<AccountId>] & Codec>>;
      referendumCount: StorageEntryExact<ApiType, () => Observable<ReferendumIndex>>;
      nextTally: StorageEntryExact<ApiType, () => Observable<ReferendumIndex>>;
      referendumInfoOf: StorageEntryExact<ApiType, (arg: ReferendumIndex | Uint8Array | number | string) => Observable<ReferendumInfo>>;
      dispatchQueue: StorageEntryExact<ApiType, (arg: BlockNumber | Uint8Array | number | string) => Observable<Vec<Option<[Proposal, ReferendumIndex] & Codec>>>>;
      votersFor: StorageEntryExact<ApiType, (arg: ReferendumIndex | Uint8Array | number | string) => Observable<Vec<AccountId>>>;
      voteOf: StorageEntryExact<ApiType, (arg: [ReferendumIndex, AccountId] & Codec) => Observable<Vote>>;
      proxy: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<AccountId>>;
      delegations: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<[AccountId, Conviction] & Codec>>;
      lastTabledWasExternal: StorageEntryExact<ApiType, () => Observable<bool>>;
      nextExternal: StorageEntryExact<ApiType, () => Observable<[Proposal, VoteThreshold] & Codec>>;
      blacklist: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<[BlockNumber, Vec<AccountId>] & Codec>>;
      cancellations: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<bool>>;
    };
    council: {
      proposals: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>>;
      proposalOf: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Proposal>>;
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Votes>>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>>;
    };
    technicalCommittee: {
      proposals: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>>;
      proposalOf: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Proposal>>;
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Votes>>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>>;
    };
    elections: {
      presentationDuration: StorageEntryExact<ApiType, () => Observable<BlockNumber>>;
      termDuration: StorageEntryExact<ApiType, () => Observable<BlockNumber>>;
      desiredSeats: StorageEntryExact<ApiType, () => Observable<u32>>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<[AccountId, BlockNumber] & Codec>>>;
      voteCount: StorageEntryExact<ApiType, () => Observable<VoteIndex>>;
      approvalsOf: StorageEntryExact<ApiType, (arg: [AccountId, SetIndex] & Codec) => Observable<Vec<ApprovalFlag>>>;
      registerInfoOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<[VoteIndex, u32] & Codec>>;
      voterInfoOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<VoterInfo>>;
      voters: StorageEntryExact<ApiType, (arg: SetIndex | Uint8Array | number | string) => Observable<Vec<Option<AccountId>>>>;
      nextVoterSet: StorageEntryExact<ApiType, () => Observable<SetIndex>>;
      voterCount: StorageEntryExact<ApiType, () => Observable<SetIndex>>;
      candidates: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>>;
      candidateCount: StorageEntryExact<ApiType, () => Observable<u32>>;
      nextFinalize: StorageEntryExact<ApiType, () => Observable<[BlockNumber, u32, Vec<AccountId>] & Codec>>;
      leaderboard: StorageEntryExact<ApiType, () => Observable<Vec<[BalanceOf, AccountId] & Codec>>>;
      proxy: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<AccountId>>;
    };
    technicalMembership: {
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>>;
    };
    grandpa: {
      authorities: StorageEntryExact<ApiType, () => Observable<Vec<[AuthorityId, AuthorityWeight] & Codec>>>;
      state: StorageEntryExact<ApiType, () => Observable<StoredState>>;
      pendingChange: StorageEntryExact<ApiType, () => Observable<StoredPendingChange>>;
      nextForced: StorageEntryExact<ApiType, () => Observable<BlockNumber>>;
      stalled: StorageEntryExact<ApiType, () => Observable<[BlockNumber, BlockNumber] & Codec>>;
      currentSetId: StorageEntryExact<ApiType, () => Observable<SetId>>;
      setIdSession: StorageEntryExact<ApiType, (arg: SetId | Uint8Array | number | string) => Observable<SessionIndex>>;
    };
    treasury: {
      proposalCount: StorageEntryExact<ApiType, () => Observable<ProposalIndex>>;
      proposals: StorageEntryExact<ApiType, (arg: ProposalIndex | Uint8Array | number | string) => Observable<TreasuryProposal>>;
      approvals: StorageEntryExact<ApiType, () => Observable<Vec<ProposalIndex>>>;
    };
    contracts: {
      gasSpent: StorageEntryExact<ApiType, () => Observable<Gas>>;
      currentSchedule: StorageEntryExact<ApiType, () => Observable<Schedule>>;
      pristineCode: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<Bytes>>;
      codeStorage: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<PrefabWasmModule>>;
      accountCounter: StorageEntryExact<ApiType, () => Observable<u64>>;
      contractInfoOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ContractInfo>>;
      gasPrice: StorageEntryExact<ApiType, () => Observable<BalanceOf>>;
    };
    sudo: {
      key: StorageEntryExact<ApiType, () => Observable<AccountId>>;
    };
    imOnline: {
      gossipAt: StorageEntryExact<ApiType, () => Observable<BlockNumber>>;
      keys: StorageEntryExact<ApiType, () => Observable<Vec<AuthorityId>>>;
      receivedHeartbeats: StorageEntryExact<ApiType, (key1: SessionIndex | Uint8Array | number | string, key2: AuthIndex | Uint8Array | number | string) => Observable<Bytes>>;
    };
    offences: {
      reports: StorageEntryExact<ApiType, (arg: ReportIdOf | Uint8Array | string) => Observable<OffenceDetails>>;
      concurrentReportsIndex: StorageEntryExact<ApiType, (key1: Kind | Uint8Array | string, key2: OpaqueTimeSlot | Uint8Array | string) => Observable<Vec<ReportIdOf>>>;
      reportsByKindIndex: StorageEntryExact<ApiType, (arg: Kind | Uint8Array | string) => Observable<Bytes>>;
    };
  }
}
