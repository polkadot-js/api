// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { Compact, Option, Raw, Vec } from '@polkadot/types/codec';
import { Bytes, Data, IdentityFields, bool, u16, u32, u64 } from '@polkadot/types';
import { AccountId, Address, Balance, BalanceOf, BlockNumber, Call, ChangesTrieConfiguration, Hash, Header, KeyValue, Moment, Signature } from '@polkadot/types/interfaces/runtime';
import { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import { CodeHash, Gas, Schedule } from '@polkadot/types/interfaces/contracts';
import { Conviction, PropIndex, Proposal, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import { Vote } from '@polkadot/types/interfaces/elections';
import { IdentityInfo, IdentityJudgement, RegistrarIndex } from '@polkadot/types/interfaces/identity';
import { Heartbeat } from '@polkadot/types/interfaces/imOnline';
import { Keys } from '@polkadot/types/interfaces/session';
import { SocietyJudgement } from '@polkadot/types/interfaces/society';
import { EraIndex, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { Key } from '@polkadot/types/interfaces/system';
import { Timepoint } from '@polkadot/types/interfaces/utility';
import { AnyNumber, ITuple } from '@polkadot/types/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    system: {
      fillBlock: () => SubmittableExtrinsic<ApiType>;
      remark: (remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setHeapPages: (pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setCode: (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setCodeWithoutChecks: (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setChangesTrieConfig: (changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setStorage: (items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>;
      killStorage: (keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>;
      killPrefix: (prefix: Key | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    utility: {
      batch: (calls: Vec<Call> | (Call | object | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>;
      asSub: (index: u16 | AnyNumber | Uint8Array, call: Call | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      asMulti: (threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, call: Call | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      approveAsMulti: (threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, callHash: Raw | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      cancelAsMulti: (threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], timepoint: Timepoint | object | string | Uint8Array, callHash: Raw | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    timestamp: {
      set: (now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    authorship: {
      setUncles: (newUncles: Vec<Header> | (Header | object | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>;
    };
    balances: {
      transfer: (dest: Address, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setBalance: (who: Address, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      forceTransfer: (source: Address, dest: Address, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      transferKeepAlive: (dest: Address, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    staking: {
      bond: (controller: Address, value: Compact<BalanceOf> | AnyNumber | Uint8Array, payee: RewardDestination) => SubmittableExtrinsic<ApiType>;
      bondExtra: (maxAdditional: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      unbond: (value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      withdrawUnbonded: () => SubmittableExtrinsic<ApiType>;
      validate: (prefs: ValidatorPrefs | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      nominate: (targets: Vec<Address> | (Address)[]) => SubmittableExtrinsic<ApiType>;
      chill: () => SubmittableExtrinsic<ApiType>;
      setPayee: (payee: RewardDestination) => SubmittableExtrinsic<ApiType>;
      setController: (controller: Address) => SubmittableExtrinsic<ApiType>;
      setValidatorCount: (updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      forceNoEras: () => SubmittableExtrinsic<ApiType>;
      forceNewEra: () => SubmittableExtrinsic<ApiType>;
      setInvulnerables: (validators: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>;
      forceUnstake: (stash: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      forceNewEraAlways: () => SubmittableExtrinsic<ApiType>;
      cancelDeferredSlash: (era: EraIndex | AnyNumber | Uint8Array, slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>;
      rebond: (value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    session: {
      setKeys: (keys: Keys, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    democracy: {
      propose: (proposalHash: Hash | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      second: (proposal: Compact<PropIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      vote: (refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array, vote: Vote | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      proxyVote: (refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array, vote: Vote | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      emergencyCancel: (refIndex: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      externalPropose: (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      externalProposeMajority: (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      externalProposeDefault: (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      fastTrack: (proposalHash: Hash | string | Uint8Array, votingPeriod: BlockNumber | AnyNumber | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      vetoExternal: (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      cancelReferendum: (refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      cancelQueued: (which: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setProxy: (proxy: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      resignProxy: () => SubmittableExtrinsic<ApiType>;
      removeProxy: (proxy: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      delegate: (to: AccountId | string | Uint8Array, conviction: Conviction) => SubmittableExtrinsic<ApiType>;
      undelegate: () => SubmittableExtrinsic<ApiType>;
      clearPublicProposals: () => SubmittableExtrinsic<ApiType>;
      notePreimage: (encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      noteImminentPreimage: (encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      reapPreimage: (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    council: {
      setMembers: (newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>;
      execute: (proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      propose: (threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      vote: (proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool) => SubmittableExtrinsic<ApiType>;
    };
    technicalCommittee: {
      setMembers: (newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>;
      execute: (proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      propose: (threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      vote: (proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool) => SubmittableExtrinsic<ApiType>;
    };
    elections: {
      vote: (votes: Vec<AccountId> | (AccountId | string | Uint8Array)[], value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      removeVoter: () => SubmittableExtrinsic<ApiType>;
      reportDefunctVoter: (target: Address) => SubmittableExtrinsic<ApiType>;
      submitCandidacy: () => SubmittableExtrinsic<ApiType>;
      renounceCandidacy: () => SubmittableExtrinsic<ApiType>;
      removeMember: (who: Address) => SubmittableExtrinsic<ApiType>;
    };
    technicalMembership: {
      addMember: (who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      removeMember: (who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      swapMember: (remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      resetMembers: (members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>;
      changeKey: (updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    finalityTracker: {
      finalHint: (hint: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    grandpa: {
      reportMisbehavior: (report: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    treasury: {
      proposeSpend: (value: Compact<BalanceOf> | AnyNumber | Uint8Array, beneficiary: Address) => SubmittableExtrinsic<ApiType>;
      rejectProposal: (proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      approveProposal: (proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      reportAwesome: (reason: Bytes | string | Uint8Array, who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      retractTip: (hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      tipNew: (reason: Bytes | string | Uint8Array, who: AccountId | string | Uint8Array, tipValue: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      tip: (hash: Hash | string | Uint8Array, tipValue: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      closeTip: (hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    contracts: {
      updateSchedule: (schedule: Schedule | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      putCode: (gasLimit: Compact<Gas> | AnyNumber | Uint8Array, code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      call: (dest: Address, value: Compact<BalanceOf> | AnyNumber | Uint8Array, gasLimit: Compact<Gas> | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      instantiate: (endowment: Compact<BalanceOf> | AnyNumber | Uint8Array, gasLimit: Compact<Gas> | AnyNumber | Uint8Array, codeHash: CodeHash | string | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      claimSurcharge: (dest: AccountId | string | Uint8Array, auxSender: Option<AccountId> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    sudo: {
      sudo: (proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setKey: (updated: Address) => SubmittableExtrinsic<ApiType>;
      sudoAs: (who: Address, proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    imOnline: {
      heartbeat: (heartbeat: Heartbeat | object | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    identity: {
      addRegistrar: (account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setIdentity: (info: IdentityInfo | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setSubs: (subs: Vec<ITuple<[AccountId, Data]>> | ([AccountId | string | Uint8Array, Data])[]) => SubmittableExtrinsic<ApiType>;
      clearIdentity: () => SubmittableExtrinsic<ApiType>;
      requestJudgement: (regIndex: Compact<RegistrarIndex> | AnyNumber | Uint8Array, maxFee: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      cancelRequest: (regIndex: RegistrarIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setFee: (index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, fee: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setAccountId: (index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setFields: (index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, fields: IdentityFields) => SubmittableExtrinsic<ApiType>;
      provideJudgement: (regIndex: Compact<RegistrarIndex> | AnyNumber | Uint8Array, target: Address, judgement: IdentityJudgement) => SubmittableExtrinsic<ApiType>;
      killIdentity: (target: Address) => SubmittableExtrinsic<ApiType>;
    };
    society: {
      bid: (value: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      unbid: (pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      vouch: (who: AccountId | string | Uint8Array, value: BalanceOf | AnyNumber | Uint8Array, tip: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      unvouch: (pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      vote: (candidate: Address, approve: bool) => SubmittableExtrinsic<ApiType>;
      defenderVote: (approve: bool) => SubmittableExtrinsic<ApiType>;
      payout: () => SubmittableExtrinsic<ApiType>;
      found: (founder: AccountId | string | Uint8Array, maxMembers: u32 | AnyNumber | Uint8Array, rules: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      unfound: () => SubmittableExtrinsic<ApiType>;
      judgeSuspendedMember: (who: AccountId | string | Uint8Array, forgive: bool) => SubmittableExtrinsic<ApiType>;
      judgeSuspendedCandidate: (who: AccountId | string | Uint8Array, judgement: SocietyJudgement) => SubmittableExtrinsic<ApiType>;
      setMaxMembers: (max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
    };
    recovery: {
      asRecovered: (account: AccountId | string | Uint8Array, call: Call | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      setRecovered: (lost: AccountId | string | Uint8Array, rescuer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      createRecovery: (friends: Vec<AccountId> | (AccountId | string | Uint8Array)[], threshold: u16 | AnyNumber | Uint8Array, delayPeriod: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>;
      initiateRecovery: (account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      vouchRecovery: (lost: AccountId | string | Uint8Array, rescuer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      claimRecovery: (account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      closeRecovery: (rescuer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>;
      removeRecovery: () => SubmittableExtrinsic<ApiType>;
    };
  }
}
