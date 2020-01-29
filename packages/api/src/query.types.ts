// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Observable } from 'rxjs';
import { Option, Raw, Vec } from '@polkadot/types/codec';
import { Bytes, Data, bool, u32, u64 } from '@polkadot/types';
import { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Hash, Index, KeyTypeId, Moment, Perbill, ValidatorId, Weight } from '@polkadot/types/interfaces/runtime';
import { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import { BabeAuthorityWeight, MaybeVrf } from '@polkadot/types/interfaces/babe';
import { BalanceLock, VestingSchedule } from '@polkadot/types/interfaces/balances';
import { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { CodeHash, ContractInfo, Gas, PrefabWasmModule, Schedule } from '@polkadot/types/interfaces/contracts';
import { Conviction, PropIndex, Proposal, ReferendumIndex, ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { Vote, VoteThreshold } from '@polkadot/types/interfaces/elections';
import { AuthorityList, SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { RegistrarInfo, Registration } from '@polkadot/types/interfaces/identity';
import { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import { Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import { ActiveRecovery, RecoveryConfig } from '@polkadot/types/interfaces/recovery';
import { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import { Bid, BidKind, SocietyVote, StrikeCount, VouchingStatus } from '@polkadot/types/interfaces/society';
import { EraIndex, EraPoints, Exposure, Forcing, MomentOf, Nominations, RewardDestination, SlashingSpans, SpanIndex, SpanRecord, StakingLedger, UnappliedSlash, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { DigestOf, EventIndex, EventRecord } from '@polkadot/types/interfaces/system';
import { OpenTip, TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import { Multiplier } from '@polkadot/types/interfaces/txpayment';
import { Multisig } from '@polkadot/types/interfaces/utility';
import { ITuple } from '@polkadot/types/types';

declare module '@polkadot/api/types' {
  export interface QueryableStorageExact<ApiType> {
    system: {
      [index: string]: QueryableStorageEntry<ApiType>;
      accountNonce: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Index>> & QueryableStorageEntry<ApiType>;
      extrinsicCount: StorageEntryExact<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      allExtrinsicsWeight: StorageEntryExact<ApiType, () => Observable<Option<Weight>>> & QueryableStorageEntry<ApiType>;
      allExtrinsicsLen: StorageEntryExact<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      blockHash: StorageEntryExact<ApiType, (arg: BlockNumber | Uint8Array | number | string) => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      extrinsicData: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      number: StorageEntryExact<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      parentHash: StorageEntryExact<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      extrinsicsRoot: StorageEntryExact<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      digest: StorageEntryExact<ApiType, () => Observable<DigestOf>> & QueryableStorageEntry<ApiType>;
      events: StorageEntryExact<ApiType, () => Observable<Vec<EventRecord>>> & QueryableStorageEntry<ApiType>;
      eventCount: StorageEntryExact<ApiType, () => Observable<EventIndex>> & QueryableStorageEntry<ApiType>;
      eventTopics: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>> & QueryableStorageEntry<ApiType>;
    };
    utility: {
      [index: string]: QueryableStorageEntry<ApiType>;
      multisigs: StorageEntryExact<ApiType, (key1: AccountId | Uint8Array | string, key2: Raw | Uint8Array | string) => Observable<Option<Multisig>>> & QueryableStorageEntry<ApiType>;
    };
    babe: {
      [index: string]: QueryableStorageEntry<ApiType>;
      epochIndex: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      authorities: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>> & QueryableStorageEntry<ApiType>;
      genesisSlot: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      currentSlot: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      randomness: StorageEntryExact<ApiType, () => Observable<Raw>> & QueryableStorageEntry<ApiType>;
      nextRandomness: StorageEntryExact<ApiType, () => Observable<Raw>> & QueryableStorageEntry<ApiType>;
      segmentIndex: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      underConstruction: StorageEntryExact<ApiType, (arg: u32 | Uint8Array | number | string) => Observable<Vec<Raw>>> & QueryableStorageEntry<ApiType>;
      initialized: StorageEntryExact<ApiType, () => Observable<Option<MaybeVrf>>> & QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      [index: string]: QueryableStorageEntry<ApiType>;
      now: StorageEntryExact<ApiType, () => Observable<Moment>> & QueryableStorageEntry<ApiType>;
      didUpdate: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    authorship: {
      [index: string]: QueryableStorageEntry<ApiType>;
      uncles: StorageEntryExact<ApiType, () => Observable<Vec<UncleEntryItem>>> & QueryableStorageEntry<ApiType>;
      author: StorageEntryExact<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
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
      vesting: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<VestingSchedule>>> & QueryableStorageEntry<ApiType>;
      freeBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      reservedBalance: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Balance>> & QueryableStorageEntry<ApiType>;
      locks: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Vec<BalanceLock>>> & QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      [index: string]: QueryableStorageEntry<ApiType>;
      nextFeeMultiplier: StorageEntryExact<ApiType, () => Observable<Multiplier>> & QueryableStorageEntry<ApiType>;
    };
    staking: {
      [index: string]: QueryableStorageEntry<ApiType>;
      validatorCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      minimumValidatorCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      invulnerables: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      bonded: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      ledger: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<StakingLedger>>> & QueryableStorageEntry<ApiType>;
      payee: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<RewardDestination>> & QueryableStorageEntry<ApiType>;
      validators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ValidatorPrefs>> & QueryableStorageEntry<ApiType>;
      nominators: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<Nominations>>> & QueryableStorageEntry<ApiType>;
      stakers: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Exposure>> & QueryableStorageEntry<ApiType>;
      currentElected: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      currentEra: StorageEntryExact<ApiType, () => Observable<EraIndex>> & QueryableStorageEntry<ApiType>;
      currentEraStart: StorageEntryExact<ApiType, () => Observable<MomentOf>> & QueryableStorageEntry<ApiType>;
      currentEraStartSessionIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      currentEraPointsEarned: StorageEntryExact<ApiType, () => Observable<EraPoints>> & QueryableStorageEntry<ApiType>;
      slotStake: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      forceEra: StorageEntryExact<ApiType, () => Observable<Forcing>> & QueryableStorageEntry<ApiType>;
      slashRewardFraction: StorageEntryExact<ApiType, () => Observable<Perbill>> & QueryableStorageEntry<ApiType>;
      canceledSlashPayout: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      unappliedSlashes: StorageEntryExact<ApiType, (arg: EraIndex | Uint8Array | number | string) => Observable<Vec<UnappliedSlash>>> & QueryableStorageEntry<ApiType>;
      bondedEras: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[EraIndex, SessionIndex]>>>> & QueryableStorageEntry<ApiType>;
      validatorSlashInEra: StorageEntryExact<ApiType, (key1: EraIndex | Uint8Array | number | string, key2: AccountId | Uint8Array | string) => Observable<Option<ITuple<[Perbill, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      nominatorSlashInEra: StorageEntryExact<ApiType, (key1: EraIndex | Uint8Array | number | string, key2: AccountId | Uint8Array | string) => Observable<Option<BalanceOf>>> & QueryableStorageEntry<ApiType>;
      slashingSpans: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<SlashingSpans>>> & QueryableStorageEntry<ApiType>;
      spanSlash: StorageEntryExact<ApiType, (arg: ITuple<[AccountId, SpanIndex]>) => Observable<SpanRecord>> & QueryableStorageEntry<ApiType>;
      earliestUnappliedSlash: StorageEntryExact<ApiType, () => Observable<Option<EraIndex>>> & QueryableStorageEntry<ApiType>;
      storageVersion: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
    };
    session: {
      [index: string]: QueryableStorageEntry<ApiType>;
      validators: StorageEntryExact<ApiType, () => Observable<Vec<ValidatorId>>> & QueryableStorageEntry<ApiType>;
      currentIndex: StorageEntryExact<ApiType, () => Observable<SessionIndex>> & QueryableStorageEntry<ApiType>;
      queuedChanged: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
      queuedKeys: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>> & QueryableStorageEntry<ApiType>;
      disabledValidators: StorageEntryExact<ApiType, () => Observable<Vec<u32>>> & QueryableStorageEntry<ApiType>;
      nextKeys: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: ValidatorId | Uint8Array | string) => Observable<Option<Keys>>> & QueryableStorageEntry<ApiType>;
      keyOwner: StorageEntryExact<ApiType, (key1: Bytes | Uint8Array | string, key2: ITuple<[KeyTypeId, Bytes]>) => Observable<Option<ValidatorId>>> & QueryableStorageEntry<ApiType>;
    };
    democracy: {
      [index: string]: QueryableStorageEntry<ApiType>;
      publicPropCount: StorageEntryExact<ApiType, () => Observable<PropIndex>> & QueryableStorageEntry<ApiType>;
      publicProps: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[PropIndex, Hash, AccountId]>>>> & QueryableStorageEntry<ApiType>;
      preimages: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<ITuple<[Bytes, AccountId, BalanceOf, BlockNumber]>>>> & QueryableStorageEntry<ApiType>;
      depositOf: StorageEntryExact<ApiType, (arg: PropIndex | Uint8Array | number | string) => Observable<Option<ITuple<[BalanceOf, Vec<AccountId>]>>>> & QueryableStorageEntry<ApiType>;
      referendumCount: StorageEntryExact<ApiType, () => Observable<ReferendumIndex>> & QueryableStorageEntry<ApiType>;
      lowestUnbaked: StorageEntryExact<ApiType, () => Observable<ReferendumIndex>> & QueryableStorageEntry<ApiType>;
      referendumInfoOf: StorageEntryExact<ApiType, (arg: ReferendumIndex | Uint8Array | number | string) => Observable<Option<ReferendumInfo>>> & QueryableStorageEntry<ApiType>;
      dispatchQueue: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[BlockNumber, Hash, ReferendumIndex]>>>> & QueryableStorageEntry<ApiType>;
      votersFor: StorageEntryExact<ApiType, (arg: ReferendumIndex | Uint8Array | number | string) => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      voteOf: StorageEntryExact<ApiType, (arg: ITuple<[ReferendumIndex, AccountId]>) => Observable<Vote>> & QueryableStorageEntry<ApiType>;
      proxy: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      delegations: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ITuple<[AccountId, Conviction]>>> & QueryableStorageEntry<ApiType>;
      lastTabledWasExternal: StorageEntryExact<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
      nextExternal: StorageEntryExact<ApiType, () => Observable<Option<ITuple<[Hash, VoteThreshold]>>>> & QueryableStorageEntry<ApiType>;
      blacklist: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<ITuple<[BlockNumber, Vec<AccountId>]>>>> & QueryableStorageEntry<ApiType>;
      cancellations: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    council: {
      [index: string]: QueryableStorageEntry<ApiType>;
      proposals: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
      proposalOf: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Votes>>> & QueryableStorageEntry<ApiType>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    technicalCommittee: {
      [index: string]: QueryableStorageEntry<ApiType>;
      proposals: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
      proposalOf: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
      voting: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Votes>>> & QueryableStorageEntry<ApiType>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    elections: {
      [index: string]: QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      runnersUp: StorageEntryExact<ApiType, () => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      electionRounds: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      votesOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      stakeOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      candidates: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    technicalMembership: {
      [index: string]: QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      [index: string]: QueryableStorageEntry<ApiType>;
      authorities: StorageEntryExact<ApiType, () => Observable<AuthorityList>> & QueryableStorageEntry<ApiType>;
      state: StorageEntryExact<ApiType, () => Observable<StoredState>> & QueryableStorageEntry<ApiType>;
      pendingChange: StorageEntryExact<ApiType, () => Observable<Option<StoredPendingChange>>> & QueryableStorageEntry<ApiType>;
      nextForced: StorageEntryExact<ApiType, () => Observable<Option<BlockNumber>>> & QueryableStorageEntry<ApiType>;
      stalled: StorageEntryExact<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>> & QueryableStorageEntry<ApiType>;
      currentSetId: StorageEntryExact<ApiType, () => Observable<SetId>> & QueryableStorageEntry<ApiType>;
      setIdSession: StorageEntryExact<ApiType, (arg: SetId | Uint8Array | number | string) => Observable<Option<SessionIndex>>> & QueryableStorageEntry<ApiType>;
    };
    treasury: {
      [index: string]: QueryableStorageEntry<ApiType>;
      proposalCount: StorageEntryExact<ApiType, () => Observable<ProposalIndex>> & QueryableStorageEntry<ApiType>;
      proposals: StorageEntryExact<ApiType, (arg: ProposalIndex | Uint8Array | number | string) => Observable<Option<TreasuryProposal>>> & QueryableStorageEntry<ApiType>;
      approvals: StorageEntryExact<ApiType, () => Observable<Vec<ProposalIndex>>> & QueryableStorageEntry<ApiType>;
      tips: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<OpenTip>>> & QueryableStorageEntry<ApiType>;
      reasons: StorageEntryExact<ApiType, (arg: Hash | Uint8Array | string) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
    };
    contracts: {
      [index: string]: QueryableStorageEntry<ApiType>;
      gasSpent: StorageEntryExact<ApiType, () => Observable<Gas>> & QueryableStorageEntry<ApiType>;
      currentSchedule: StorageEntryExact<ApiType, () => Observable<Schedule>> & QueryableStorageEntry<ApiType>;
      pristineCode: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
      codeStorage: StorageEntryExact<ApiType, (arg: CodeHash | Uint8Array | string) => Observable<Option<PrefabWasmModule>>> & QueryableStorageEntry<ApiType>;
      accountCounter: StorageEntryExact<ApiType, () => Observable<u64>> & QueryableStorageEntry<ApiType>;
      contractInfoOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<ContractInfo>>> & QueryableStorageEntry<ApiType>;
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
      receivedHeartbeats: StorageEntryExact<ApiType, (key1: SessionIndex | Uint8Array | number | string, key2: AuthIndex | Uint8Array | number | string) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
      authoredBlocks: StorageEntryExact<ApiType, (key1: SessionIndex | Uint8Array | number | string, key2: ValidatorId | Uint8Array | string) => Observable<u32>> & QueryableStorageEntry<ApiType>;
    };
    offences: {
      [index: string]: QueryableStorageEntry<ApiType>;
      reports: StorageEntryExact<ApiType, (arg: ReportIdOf | Uint8Array | string) => Observable<Option<OffenceDetails>>> & QueryableStorageEntry<ApiType>;
      concurrentReportsIndex: StorageEntryExact<ApiType, (key1: Kind | Uint8Array | string, key2: OpaqueTimeSlot | Uint8Array | string) => Observable<Vec<ReportIdOf>>> & QueryableStorageEntry<ApiType>;
      reportsByKindIndex: StorageEntryExact<ApiType, (arg: Kind | Uint8Array | string) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
    };
    randomnessCollectiveFlip: {
      [index: string]: QueryableStorageEntry<ApiType>;
      randomMaterial: StorageEntryExact<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
    };
    identity: {
      [index: string]: QueryableStorageEntry<ApiType>;
      identityOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<Registration>>> & QueryableStorageEntry<ApiType>;
      superOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<ITuple<[AccountId, Data]>>>> & QueryableStorageEntry<ApiType>;
      subsOf: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<ITuple<[BalanceOf, Vec<AccountId>]>>> & QueryableStorageEntry<ApiType>;
      registrars: StorageEntryExact<ApiType, () => Observable<Vec<Option<RegistrarInfo>>>> & QueryableStorageEntry<ApiType>;
    };
    society: {
      [index: string]: QueryableStorageEntry<ApiType>;
      founder: StorageEntryExact<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      rules: StorageEntryExact<ApiType, () => Observable<Option<Hash>>> & QueryableStorageEntry<ApiType>;
      candidates: StorageEntryExact<ApiType, () => Observable<Vec<Bid>>> & QueryableStorageEntry<ApiType>;
      suspendedCandidates: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<ITuple<[BalanceOf, BidKind]>>>> & QueryableStorageEntry<ApiType>;
      pot: StorageEntryExact<ApiType, () => Observable<BalanceOf>> & QueryableStorageEntry<ApiType>;
      head: StorageEntryExact<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      members: StorageEntryExact<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      suspendedMembers: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<bool>> & QueryableStorageEntry<ApiType>;
      bids: StorageEntryExact<ApiType, () => Observable<Vec<Bid>>> & QueryableStorageEntry<ApiType>;
      vouching: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<VouchingStatus>>> & QueryableStorageEntry<ApiType>;
      payouts: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Vec<ITuple<[BlockNumber, BalanceOf]>>>> & QueryableStorageEntry<ApiType>;
      strikes: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<StrikeCount>> & QueryableStorageEntry<ApiType>;
      votes: StorageEntryExact<ApiType, (key1: AccountId | Uint8Array | string, key2: AccountId | Uint8Array | string) => Observable<Option<SocietyVote>>> & QueryableStorageEntry<ApiType>;
      defender: StorageEntryExact<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      defenderVotes: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<SocietyVote>>> & QueryableStorageEntry<ApiType>;
      maxMembers: StorageEntryExact<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
    };
    recovery: {
      [index: string]: QueryableStorageEntry<ApiType>;
      recoverable: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<RecoveryConfig>>> & QueryableStorageEntry<ApiType>;
      activeRecoveries: StorageEntryExact<ApiType, (key1: AccountId | Uint8Array | string, key2: AccountId | Uint8Array | string) => Observable<Option<ActiveRecovery>>> & QueryableStorageEntry<ApiType>;
      recovered: StorageEntryExact<ApiType, (arg: AccountId | Uint8Array | string) => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
    };
  }
}
