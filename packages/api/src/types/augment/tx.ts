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
import { AnyNumber, CallFunction, ITuple } from '@polkadot/types/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    system: {
      fillBlock: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      remark: AugmentedSubmittable<ApiType, (remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setHeapPages: AugmentedSubmittable<ApiType, (pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setCode: AugmentedSubmittable<ApiType, (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setCodeWithoutChecks: AugmentedSubmittable<ApiType, (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setChangesTrieConfig: AugmentedSubmittable<ApiType, (changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setStorage: AugmentedSubmittable<ApiType, (items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      killStorage: AugmentedSubmittable<ApiType, (keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      killPrefix: AugmentedSubmittable<ApiType, (prefix: Key | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    utility: {
      batch: AugmentedSubmittable<ApiType, (calls: Vec<Call> | (Call | object | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      asSub: AugmentedSubmittable<ApiType, (index: u16 | AnyNumber | Uint8Array, call: Call | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      asMulti: AugmentedSubmittable<ApiType, (threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, call: Call | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      approveAsMulti: AugmentedSubmittable<ApiType, (threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, callHash: Raw | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      cancelAsMulti: AugmentedSubmittable<ApiType, (threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], timepoint: Timepoint | object | string | Uint8Array, callHash: Raw | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    timestamp: {
      set: AugmentedSubmittable<ApiType, (now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    authorship: {
      setUncles: AugmentedSubmittable<ApiType, (newUncles: Vec<Header> | (Header | object | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    balances: {
      transfer: AugmentedSubmittable<ApiType, (dest: Address, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setBalance: AugmentedSubmittable<ApiType, (who: Address, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      forceTransfer: AugmentedSubmittable<ApiType, (source: Address, dest: Address, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      transferKeepAlive: AugmentedSubmittable<ApiType, (dest: Address, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    staking: {
      bond: AugmentedSubmittable<ApiType, (controller: Address, value: Compact<BalanceOf> | AnyNumber | Uint8Array, payee: RewardDestination) => SubmittableExtrinsic<ApiType> & CallFunction>;
      bondExtra: AugmentedSubmittable<ApiType, (maxAdditional: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      unbond: AugmentedSubmittable<ApiType, (value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      withdrawUnbonded: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      validate: AugmentedSubmittable<ApiType, (prefs: ValidatorPrefs | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      nominate: AugmentedSubmittable<ApiType, (targets: Vec<Address> | (Address)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      chill: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      setPayee: AugmentedSubmittable<ApiType, (payee: RewardDestination) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setController: AugmentedSubmittable<ApiType, (controller: Address) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setValidatorCount: AugmentedSubmittable<ApiType, (updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      forceNoEras: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      forceNewEra: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      setInvulnerables: AugmentedSubmittable<ApiType, (validators: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      forceUnstake: AugmentedSubmittable<ApiType, (stash: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      forceNewEraAlways: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      cancelDeferredSlash: AugmentedSubmittable<ApiType, (era: EraIndex | AnyNumber | Uint8Array, slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      rebond: AugmentedSubmittable<ApiType, (value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    session: {
      setKeys: AugmentedSubmittable<ApiType, (keys: Keys, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    democracy: {
      propose: AugmentedSubmittable<ApiType, (proposalHash: Hash | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      second: AugmentedSubmittable<ApiType, (proposal: Compact<PropIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      vote: AugmentedSubmittable<ApiType, (refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array, vote: Vote | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      proxyVote: AugmentedSubmittable<ApiType, (refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array, vote: Vote | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      emergencyCancel: AugmentedSubmittable<ApiType, (refIndex: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      externalPropose: AugmentedSubmittable<ApiType, (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      externalProposeMajority: AugmentedSubmittable<ApiType, (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      externalProposeDefault: AugmentedSubmittable<ApiType, (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      fastTrack: AugmentedSubmittable<ApiType, (proposalHash: Hash | string | Uint8Array, votingPeriod: BlockNumber | AnyNumber | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      vetoExternal: AugmentedSubmittable<ApiType, (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      cancelReferendum: AugmentedSubmittable<ApiType, (refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      cancelQueued: AugmentedSubmittable<ApiType, (which: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setProxy: AugmentedSubmittable<ApiType, (proxy: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      resignProxy: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      removeProxy: AugmentedSubmittable<ApiType, (proxy: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      delegate: AugmentedSubmittable<ApiType, (to: AccountId | string | Uint8Array, conviction: Conviction) => SubmittableExtrinsic<ApiType> & CallFunction>;
      undelegate: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      clearPublicProposals: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      notePreimage: AugmentedSubmittable<ApiType, (encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      noteImminentPreimage: AugmentedSubmittable<ApiType, (encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      reapPreimage: AugmentedSubmittable<ApiType, (proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    council: {
      setMembers: AugmentedSubmittable<ApiType, (newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      execute: AugmentedSubmittable<ApiType, (proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      propose: AugmentedSubmittable<ApiType, (threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      vote: AugmentedSubmittable<ApiType, (proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    technicalCommittee: {
      setMembers: AugmentedSubmittable<ApiType, (newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      execute: AugmentedSubmittable<ApiType, (proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      propose: AugmentedSubmittable<ApiType, (threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      vote: AugmentedSubmittable<ApiType, (proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    elections: {
      vote: AugmentedSubmittable<ApiType, (votes: Vec<AccountId> | (AccountId | string | Uint8Array)[], value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      removeVoter: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      reportDefunctVoter: AugmentedSubmittable<ApiType, (target: Address) => SubmittableExtrinsic<ApiType> & CallFunction>;
      submitCandidacy: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      renounceCandidacy: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      removeMember: AugmentedSubmittable<ApiType, (who: Address) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    technicalMembership: {
      addMember: AugmentedSubmittable<ApiType, (who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      removeMember: AugmentedSubmittable<ApiType, (who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      swapMember: AugmentedSubmittable<ApiType, (remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      resetMembers: AugmentedSubmittable<ApiType, (members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      changeKey: AugmentedSubmittable<ApiType, (updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    finalityTracker: {
      finalHint: AugmentedSubmittable<ApiType, (hint: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    grandpa: {
      reportMisbehavior: AugmentedSubmittable<ApiType, (report: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    treasury: {
      proposeSpend: AugmentedSubmittable<ApiType, (value: Compact<BalanceOf> | AnyNumber | Uint8Array, beneficiary: Address) => SubmittableExtrinsic<ApiType> & CallFunction>;
      rejectProposal: AugmentedSubmittable<ApiType, (proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      approveProposal: AugmentedSubmittable<ApiType, (proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      reportAwesome: AugmentedSubmittable<ApiType, (reason: Bytes | string | Uint8Array, who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      retractTip: AugmentedSubmittable<ApiType, (hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      tipNew: AugmentedSubmittable<ApiType, (reason: Bytes | string | Uint8Array, who: AccountId | string | Uint8Array, tipValue: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      tip: AugmentedSubmittable<ApiType, (hash: Hash | string | Uint8Array, tipValue: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      closeTip: AugmentedSubmittable<ApiType, (hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    contracts: {
      updateSchedule: AugmentedSubmittable<ApiType, (schedule: Schedule | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      putCode: AugmentedSubmittable<ApiType, (gasLimit: Compact<Gas> | AnyNumber | Uint8Array, code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      call: AugmentedSubmittable<ApiType, (dest: Address, value: Compact<BalanceOf> | AnyNumber | Uint8Array, gasLimit: Compact<Gas> | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      instantiate: AugmentedSubmittable<ApiType, (endowment: Compact<BalanceOf> | AnyNumber | Uint8Array, gasLimit: Compact<Gas> | AnyNumber | Uint8Array, codeHash: CodeHash | string | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      claimSurcharge: AugmentedSubmittable<ApiType, (dest: AccountId | string | Uint8Array, auxSender: Option<AccountId> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    sudo: {
      sudo: AugmentedSubmittable<ApiType, (proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setKey: AugmentedSubmittable<ApiType, (updated: Address) => SubmittableExtrinsic<ApiType> & CallFunction>;
      sudoAs: AugmentedSubmittable<ApiType, (who: Address, proposal: Proposal | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    imOnline: {
      heartbeat: AugmentedSubmittable<ApiType, (heartbeat: Heartbeat | object | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    identity: {
      addRegistrar: AugmentedSubmittable<ApiType, (account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setIdentity: AugmentedSubmittable<ApiType, (info: IdentityInfo | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setSubs: AugmentedSubmittable<ApiType, (subs: Vec<ITuple<[AccountId, Data]>> | ([AccountId | string | Uint8Array, Data])[]) => SubmittableExtrinsic<ApiType> & CallFunction>;
      clearIdentity: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      requestJudgement: AugmentedSubmittable<ApiType, (regIndex: Compact<RegistrarIndex> | AnyNumber | Uint8Array, maxFee: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      cancelRequest: AugmentedSubmittable<ApiType, (regIndex: RegistrarIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setFee: AugmentedSubmittable<ApiType, (index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, fee: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setAccountId: AugmentedSubmittable<ApiType, (index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setFields: AugmentedSubmittable<ApiType, (index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, fields: IdentityFields) => SubmittableExtrinsic<ApiType> & CallFunction>;
      provideJudgement: AugmentedSubmittable<ApiType, (regIndex: Compact<RegistrarIndex> | AnyNumber | Uint8Array, target: Address, judgement: IdentityJudgement) => SubmittableExtrinsic<ApiType> & CallFunction>;
      killIdentity: AugmentedSubmittable<ApiType, (target: Address) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    society: {
      bid: AugmentedSubmittable<ApiType, (value: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      unbid: AugmentedSubmittable<ApiType, (pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      vouch: AugmentedSubmittable<ApiType, (who: AccountId | string | Uint8Array, value: BalanceOf | AnyNumber | Uint8Array, tip: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      unvouch: AugmentedSubmittable<ApiType, (pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      vote: AugmentedSubmittable<ApiType, (candidate: Address, approve: bool) => SubmittableExtrinsic<ApiType> & CallFunction>;
      defenderVote: AugmentedSubmittable<ApiType, (approve: bool) => SubmittableExtrinsic<ApiType> & CallFunction>;
      payout: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      found: AugmentedSubmittable<ApiType, (founder: AccountId | string | Uint8Array, maxMembers: u32 | AnyNumber | Uint8Array, rules: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      unfound: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
      judgeSuspendedMember: AugmentedSubmittable<ApiType, (who: AccountId | string | Uint8Array, forgive: bool) => SubmittableExtrinsic<ApiType> & CallFunction>;
      judgeSuspendedCandidate: AugmentedSubmittable<ApiType, (who: AccountId | string | Uint8Array, judgement: SocietyJudgement) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setMaxMembers: AugmentedSubmittable<ApiType, (max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
    recovery: {
      asRecovered: AugmentedSubmittable<ApiType, (account: AccountId | string | Uint8Array, call: Call | object | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      setRecovered: AugmentedSubmittable<ApiType, (lost: AccountId | string | Uint8Array, rescuer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      createRecovery: AugmentedSubmittable<ApiType, (friends: Vec<AccountId> | (AccountId | string | Uint8Array)[], threshold: u16 | AnyNumber | Uint8Array, delayPeriod: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      initiateRecovery: AugmentedSubmittable<ApiType, (account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      vouchRecovery: AugmentedSubmittable<ApiType, (lost: AccountId | string | Uint8Array, rescuer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      claimRecovery: AugmentedSubmittable<ApiType, (account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      closeRecovery: AugmentedSubmittable<ApiType, (rescuer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType> & CallFunction>;
      removeRecovery: AugmentedSubmittable<ApiType, () => SubmittableExtrinsic<ApiType> & CallFunction>;
    };
  }
}
