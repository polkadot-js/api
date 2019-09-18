// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Option, U8a, Vec } from '@polkadot/types/codec';
import { Bytes, Null, bool, i8, u32, u64 } from '@polkadot/types';
import { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Hash, Index, Moment, Perbill, ValidatorId, Weight, WeightMultiplier } from '@polkadot/types/interfaces/runtime';
import { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import { BalanceLock, VestingSchedule } from '@polkadot/types/interfaces/balances';
import { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { CodeHash, ContractInfo, Gas, PrefabWasmModule, Schedule } from '@polkadot/types/interfaces/contracts';
import { PropIndex, Proposal, ReferendumIndex, ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { ApprovalFlag, SetIndex, Vote, VoteIndex, VoterInfo } from '@polkadot/types/interfaces/elections';
import { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import { Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex, EraPoints, Exposure, Forcing, MomentOf, RewardDestination, SlashJournalEntry, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { DigestOf, EventIndex, EventRecord } from '@polkadot/types/interfaces/system';
import { TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import { Codec } from '@polkadot/types/types';

declare module './types' {
  export interface QueryableStorage<ApiType> {
    system: {
      accountNonce: MethodResult<ApiType, (arg: AccountId) => Index>;
      extrinsicCount: MethodResult<ApiType, () => u32>;
      allExtrinsicsWeight: MethodResult<ApiType, () => Weight>;
      allExtrinsicsLen: MethodResult<ApiType, () => u32>;
      nextWeightMultiplier: MethodResult<ApiType, () => WeightMultiplier>;
      blockHash: MethodResult<ApiType, (arg: BlockNumber) => Hash>;
      extrinsicData: MethodResult<ApiType, (arg: u32) => Bytes>;
      randomMaterial: MethodResult<ApiType, () => [i8, Vec<Hash>] & Codec>;
      number: MethodResult<ApiType, () => BlockNumber>;
      parentHash: MethodResult<ApiType, () => Hash>;
      extrinsicsRoot: MethodResult<ApiType, () => Hash>;
      digest: MethodResult<ApiType, () => DigestOf>;
      events: MethodResult<ApiType, () => Vec<EventRecord>>;
      eventCount: MethodResult<ApiType, () => EventIndex>;
      eventTopics: MethodResult<ApiType, (key1: Null, key2: Hash) => Vec<[BlockNumber, EventIndex] & Codec>>;
    };
    babe: {
      epochIndex: MethodResult<ApiType, () => u64>;
      authorities: MethodResult<ApiType, () => Vec<[AuthorityId, BabeAuthorityWeight] & Codec>>;
      epochStartSlot: MethodResult<ApiType, () => u64>;
      currentSlot: MethodResult<ApiType, () => u64>;
      secondarySlots: MethodResult<ApiType, () => [bool, bool] & Codec>;
      pendingSecondarySlotsChange: MethodResult<ApiType, () => bool>;
      randomness: MethodResult<ApiType, () => U8a>;
      nextRandomness: MethodResult<ApiType, () => U8a>;
      segmentIndex: MethodResult<ApiType, () => u32>;
      underConstruction: MethodResult<ApiType, (arg: u32) => Vec<U8a>>;
      initialized: MethodResult<ApiType, () => bool>;
    };
    timestamp: {
      now: MethodResult<ApiType, () => Moment>;
      didUpdate: MethodResult<ApiType, () => bool>;
    };
    authorship: {
      uncles: MethodResult<ApiType, () => Vec<UncleEntryItem>>;
      author: MethodResult<ApiType, () => AccountId>;
      didSetUncles: MethodResult<ApiType, () => bool>;
    };
    indices: {
      nextEnumSet: MethodResult<ApiType, () => AccountIndex>;
      enumSet: MethodResult<ApiType, (arg: AccountIndex) => Vec<AccountId>>;
    };
    balances: {
      totalIssuance: MethodResult<ApiType, () => Balance>;
      vesting: MethodResult<ApiType, (arg: AccountId) => VestingSchedule>;
      freeBalance: MethodResult<ApiType, (arg: AccountId) => Balance>;
      reservedBalance: MethodResult<ApiType, (arg: AccountId) => Balance>;
      locks: MethodResult<ApiType, (arg: AccountId) => Vec<BalanceLock>>;
    };
    staking: {
      validatorCount: MethodResult<ApiType, () => u32>;
      minimumValidatorCount: MethodResult<ApiType, () => u32>;
      invulnerables: MethodResult<ApiType, () => Vec<AccountId>>;
      bonded: MethodResult<ApiType, (arg: AccountId) => AccountId>;
      ledger: MethodResult<ApiType, (arg: AccountId) => StakingLedger>;
      payee: MethodResult<ApiType, (arg: AccountId) => RewardDestination>;
      validators: MethodResult<ApiType, (arg: AccountId) => ValidatorPrefs>;
      nominators: MethodResult<ApiType, (arg: AccountId) => Vec<AccountId>>;
      stakers: MethodResult<ApiType, (arg: AccountId) => Exposure>;
      currentElected: MethodResult<ApiType, () => Vec<AccountId>>;
      currentEra: MethodResult<ApiType, () => EraIndex>;
      currentEraStart: MethodResult<ApiType, () => MomentOf>;
      currentEraStartSessionIndex: MethodResult<ApiType, () => SessionIndex>;
      currentEraPointsEarned: MethodResult<ApiType, () => EraPoints>;
      slotStake: MethodResult<ApiType, () => BalanceOf>;
      forceEra: MethodResult<ApiType, () => Forcing>;
      slashRewardFraction: MethodResult<ApiType, () => Perbill>;
      bondedEras: MethodResult<ApiType, () => Vec<[EraIndex, SessionIndex] & Codec>>;
      eraSlashJournal: MethodResult<ApiType, (arg: EraIndex) => Vec<SlashJournalEntry>>;
    };
    session: {
      validators: MethodResult<ApiType, () => Vec<ValidatorId>>;
      currentIndex: MethodResult<ApiType, () => SessionIndex>;
      queuedChanged: MethodResult<ApiType, () => bool>;
      queuedKeys: MethodResult<ApiType, () => Vec<[ValidatorId, Keys] & Codec>>;
      nextKeys: MethodResult<ApiType, (key1: Bytes, key2: ValidatorId) => Keys>;
      keyOwner: MethodResult<ApiType, (key1: Bytes, key2: [KeyTypeId, Bytes] & Codec) => ValidatorId>;
    };
    democracy: {
      publicPropCount: MethodResult<ApiType, () => PropIndex>;
      publicProps: MethodResult<ApiType, () => Vec<[PropIndex, Proposal, AccountId] & Codec>>;
      depositOf: MethodResult<ApiType, (arg: PropIndex) => [BalanceOf, Vec<AccountId>] & Codec>;
      referendumCount: MethodResult<ApiType, () => ReferendumIndex>;
      nextTally: MethodResult<ApiType, () => ReferendumIndex>;
      referendumInfoOf: MethodResult<ApiType, (arg: ReferendumIndex) => ReferendumInfo>;
      dispatchQueue: MethodResult<ApiType, (arg: BlockNumber) => Vec<Option<[Proposal, ReferendumIndex] & Codec>>>;
      votersFor: MethodResult<ApiType, (arg: ReferendumIndex) => Vec<AccountId>>;
      voteOf: MethodResult<ApiType, (arg: [ReferendumIndex, AccountId] & Codec) => Vote>;
      proxy: MethodResult<ApiType, (arg: AccountId) => AccountId>;
      delegations: MethodResult<ApiType, (arg: AccountId) => [AccountId, Conviction] & Codec>;
      lastTabledWasExternal: MethodResult<ApiType, () => bool>;
      nextExternal: MethodResult<ApiType, () => [Proposal, VoteThreshold] & Codec>;
      blacklist: MethodResult<ApiType, (arg: Hash) => [BlockNumber, Vec<AccountId>] & Codec>;
      cancellations: MethodResult<ApiType, (arg: Hash) => bool>;
    };
    council: {
      proposals: MethodResult<ApiType, () => Vec<Hash>>;
      proposalOf: MethodResult<ApiType, (arg: Hash) => Proposal>;
      voting: MethodResult<ApiType, (arg: Hash) => Votes>;
      proposalCount: MethodResult<ApiType, () => u32>;
      members: MethodResult<ApiType, () => Vec<AccountId>>;
    };
    technicalCommittee: {
      proposals: MethodResult<ApiType, () => Vec<Hash>>;
      proposalOf: MethodResult<ApiType, (arg: Hash) => Proposal>;
      voting: MethodResult<ApiType, (arg: Hash) => Votes>;
      proposalCount: MethodResult<ApiType, () => u32>;
      members: MethodResult<ApiType, () => Vec<AccountId>>;
    };
    elections: {
      presentationDuration: MethodResult<ApiType, () => BlockNumber>;
      termDuration: MethodResult<ApiType, () => BlockNumber>;
      desiredSeats: MethodResult<ApiType, () => u32>;
      members: MethodResult<ApiType, () => Vec<[AccountId, BlockNumber] & Codec>>;
      voteCount: MethodResult<ApiType, () => VoteIndex>;
      approvalsOf: MethodResult<ApiType, (arg: [AccountId, SetIndex] & Codec) => Vec<ApprovalFlag>>;
      registerInfoOf: MethodResult<ApiType, (arg: AccountId) => [VoteIndex, u32] & Codec>;
      voterInfoOf: MethodResult<ApiType, (arg: AccountId) => VoterInfo>;
      voters: MethodResult<ApiType, (arg: SetIndex) => Vec<Option<AccountId>>>;
      nextVoterSet: MethodResult<ApiType, () => SetIndex>;
      voterCount: MethodResult<ApiType, () => SetIndex>;
      candidates: MethodResult<ApiType, () => Vec<AccountId>>;
      candidateCount: MethodResult<ApiType, () => u32>;
      nextFinalize: MethodResult<ApiType, () => [BlockNumber, u32, Vec<AccountId>] & Codec>;
      leaderboard: MethodResult<ApiType, () => Vec<[BalanceOf, AccountId] & Codec>>;
      proxy: MethodResult<ApiType, (arg: AccountId) => AccountId>;
    };
    technicalMembership: {
      members: MethodResult<ApiType, () => Vec<AccountId>>;
    };
    grandpa: {
      authorities: MethodResult<ApiType, () => Vec<[AuthorityId, AuthorityWeight] & Codec>>;
      state: MethodResult<ApiType, () => StoredState>;
      pendingChange: MethodResult<ApiType, () => StoredPendingChange>;
      nextForced: MethodResult<ApiType, () => BlockNumber>;
      stalled: MethodResult<ApiType, () => [BlockNumber, BlockNumber] & Codec>;
      currentSetId: MethodResult<ApiType, () => SetId>;
      setIdSession: MethodResult<ApiType, (arg: SetId) => SessionIndex>;
    };
    treasury: {
      proposalCount: MethodResult<ApiType, () => ProposalIndex>;
      proposals: MethodResult<ApiType, (arg: ProposalIndex) => TreasuryProposal>;
      approvals: MethodResult<ApiType, () => Vec<ProposalIndex>>;
    };
    contracts: {
      gasSpent: MethodResult<ApiType, () => Gas>;
      currentSchedule: MethodResult<ApiType, () => Schedule>;
      pristineCode: MethodResult<ApiType, (arg: CodeHash) => Bytes>;
      codeStorage: MethodResult<ApiType, (arg: CodeHash) => PrefabWasmModule>;
      accountCounter: MethodResult<ApiType, () => u64>;
      contractInfoOf: MethodResult<ApiType, (arg: AccountId) => ContractInfo>;
      gasPrice: MethodResult<ApiType, () => BalanceOf>;
    };
    sudo: {
      key: MethodResult<ApiType, () => AccountId>;
    };
    imOnline: {
      gossipAt: MethodResult<ApiType, () => BlockNumber>;
      keys: MethodResult<ApiType, () => Vec<AuthorityId>>;
      receivedHeartbeats: MethodResult<ApiType, (key1: SessionIndex, key2: AuthIndex) => Bytes>;
    };
    offences: {
      reports: MethodResult<ApiType, (arg: ReportIdOf) => OffenceDetails>;
      concurrentReportsIndex: MethodResult<ApiType, (key1: Kind, key2: OpaqueTimeSlot) => Vec<ReportIdOf>>;
      reportsByKindIndex: MethodResult<ApiType, (arg: Kind) => Bytes>;
    };
  }
}
