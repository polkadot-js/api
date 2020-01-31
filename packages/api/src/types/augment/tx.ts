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
      remark: (remark: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      setHeapPages: (pages: u64 | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      setCode: (code: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      setCodeWithoutChecks: (code: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      setChangesTrieConfig: (changesTrieConfig: Option<ChangesTrieConfiguration>) => SubmittableExtrinsic<ApiType>;
      setStorage: (items: KeyValue[]) => SubmittableExtrinsic<ApiType>;
      killStorage: (keys: Key|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>;
      killPrefix: (prefix: Key | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
    };
    utility: {
      batch: (calls: Call|Uint8Array|object|string[]) => SubmittableExtrinsic<ApiType>;
      asSub: (index: u16 | Uint8Array | AnyNumber, call: Call | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      asMulti: (threshold: u16 | Uint8Array | AnyNumber, otherSignatories: AccountId|Uint8Array|string[], maybeTimepoint: Option<Timepoint>, call: Call | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      approveAsMulti: (threshold: u16 | Uint8Array | AnyNumber, otherSignatories: AccountId|Uint8Array|string[], maybeTimepoint: Option<Timepoint>, callHash: Raw | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      cancelAsMulti: (threshold: u16 | Uint8Array | AnyNumber, otherSignatories: AccountId|Uint8Array|string[], timepoint: Timepoint | Uint8Array | object | string, callHash: Raw | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
    };
    timestamp: {
      set: (now: Compact<Moment> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
    };
    authorship: {
      setUncles: (newUncles: Header|Uint8Array|object|string[]) => SubmittableExtrinsic<ApiType>;
    };
    balances: {
      transfer: (dest: Address, value: Compact<Balance> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      setBalance: (who: Address, newFree: Compact<Balance> | Uint8Array | AnyNumber, newReserved: Compact<Balance> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      forceTransfer: (source: Address, dest: Address, value: Compact<Balance> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      transferKeepAlive: (dest: Address, value: Compact<Balance> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
    };
    staking: {
      bond: (controller: Address, value: Compact<BalanceOf> | Uint8Array | AnyNumber, payee: RewardDestination) => SubmittableExtrinsic<ApiType>;
      bondExtra: (maxAdditional: Compact<BalanceOf> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      unbond: (value: Compact<BalanceOf> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      withdrawUnbonded: () => SubmittableExtrinsic<ApiType>;
      validate: (prefs: ValidatorPrefs | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      nominate: (targets: Address[]) => SubmittableExtrinsic<ApiType>;
      chill: () => SubmittableExtrinsic<ApiType>;
      setPayee: (payee: RewardDestination) => SubmittableExtrinsic<ApiType>;
      setController: (controller: Address) => SubmittableExtrinsic<ApiType>;
      setValidatorCount: (updated: Compact<u32> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      forceNoEras: () => SubmittableExtrinsic<ApiType>;
      forceNewEra: () => SubmittableExtrinsic<ApiType>;
      setInvulnerables: (validators: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>;
      forceUnstake: (stash: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      forceNewEraAlways: () => SubmittableExtrinsic<ApiType>;
      cancelDeferredSlash: (era: EraIndex | Uint8Array | AnyNumber, slashIndices: u32|Uint8Array|AnyNumber[]) => SubmittableExtrinsic<ApiType>;
      rebond: (value: Compact<BalanceOf> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
    };
    session: {
      setKeys: (keys: Keys, proof: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
    };
    democracy: {
      propose: (proposalHash: Hash | Uint8Array | string, value: Compact<BalanceOf> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      second: (proposal: Compact<PropIndex> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      vote: (refIndex: Compact<ReferendumIndex> | Uint8Array | AnyNumber, vote: Vote | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      proxyVote: (refIndex: Compact<ReferendumIndex> | Uint8Array | AnyNumber, vote: Vote | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      emergencyCancel: (refIndex: ReferendumIndex | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      externalPropose: (proposalHash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      externalProposeMajority: (proposalHash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      externalProposeDefault: (proposalHash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      fastTrack: (proposalHash: Hash | Uint8Array | string, votingPeriod: BlockNumber | Uint8Array | AnyNumber, delay: BlockNumber | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      vetoExternal: (proposalHash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      cancelReferendum: (refIndex: Compact<ReferendumIndex> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      cancelQueued: (which: ReferendumIndex | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      setProxy: (proxy: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      resignProxy: () => SubmittableExtrinsic<ApiType>;
      removeProxy: (proxy: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      delegate: (to: AccountId | Uint8Array | string, conviction: Conviction) => SubmittableExtrinsic<ApiType>;
      undelegate: () => SubmittableExtrinsic<ApiType>;
      clearPublicProposals: () => SubmittableExtrinsic<ApiType>;
      notePreimage: (encodedProposal: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      noteImminentPreimage: (encodedProposal: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      reapPreimage: (proposalHash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
    };
    council: {
      setMembers: (newMembers: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>;
      execute: (proposal: Proposal | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      propose: (threshold: Compact<MemberCount> | Uint8Array | AnyNumber, proposal: Proposal | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      vote: (proposal: Hash | Uint8Array | string, index: Compact<ProposalIndex> | Uint8Array | AnyNumber, approve: bool) => SubmittableExtrinsic<ApiType>;
    };
    technicalCommittee: {
      setMembers: (newMembers: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>;
      execute: (proposal: Proposal | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      propose: (threshold: Compact<MemberCount> | Uint8Array | AnyNumber, proposal: Proposal | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      vote: (proposal: Hash | Uint8Array | string, index: Compact<ProposalIndex> | Uint8Array | AnyNumber, approve: bool) => SubmittableExtrinsic<ApiType>;
    };
    elections: {
      vote: (votes: AccountId|Uint8Array|string[], value: Compact<BalanceOf> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      removeVoter: () => SubmittableExtrinsic<ApiType>;
      reportDefunctVoter: (target: Address) => SubmittableExtrinsic<ApiType>;
      submitCandidacy: () => SubmittableExtrinsic<ApiType>;
      renounceCandidacy: () => SubmittableExtrinsic<ApiType>;
      removeMember: (who: Address) => SubmittableExtrinsic<ApiType>;
    };
    technicalMembership: {
      addMember: (who: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      removeMember: (who: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      swapMember: (remove: AccountId | Uint8Array | string, add: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      resetMembers: (members: AccountId|Uint8Array|string[]) => SubmittableExtrinsic<ApiType>;
      changeKey: (updated: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
    };
    finalityTracker: {
      finalHint: (hint: Compact<BlockNumber> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
    };
    grandpa: {
      reportMisbehavior: (report: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
    };
    treasury: {
      proposeSpend: (value: Compact<BalanceOf> | Uint8Array | AnyNumber, beneficiary: Address) => SubmittableExtrinsic<ApiType>;
      rejectProposal: (proposalId: Compact<ProposalIndex> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      approveProposal: (proposalId: Compact<ProposalIndex> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      reportAwesome: (reason: Bytes | Uint8Array | string, who: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      retractTip: (hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      tipNew: (reason: Bytes | Uint8Array | string, who: AccountId | Uint8Array | string, tipValue: BalanceOf | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      tip: (hash: Hash | Uint8Array | string, tipValue: BalanceOf | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      closeTip: (hash: Hash | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
    };
    contracts: {
      updateSchedule: (schedule: Schedule | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      putCode: (gasLimit: Compact<Gas> | Uint8Array | AnyNumber, code: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      call: (dest: Address, value: Compact<BalanceOf> | Uint8Array | AnyNumber, gasLimit: Compact<Gas> | Uint8Array | AnyNumber, data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      instantiate: (endowment: Compact<BalanceOf> | Uint8Array | AnyNumber, gasLimit: Compact<Gas> | Uint8Array | AnyNumber, codeHash: CodeHash | Uint8Array | string, data: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      claimSurcharge: (dest: AccountId | Uint8Array | string, auxSender: Option<AccountId>) => SubmittableExtrinsic<ApiType>;
    };
    sudo: {
      sudo: (proposal: Proposal | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      setKey: (updated: Address) => SubmittableExtrinsic<ApiType>;
      sudoAs: (who: Address, proposal: Proposal | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
    };
    imOnline: {
      heartbeat: (heartbeat: Heartbeat | Uint8Array | object | string, signature: Signature | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
    };
    identity: {
      addRegistrar: (account: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      setIdentity: (info: IdentityInfo | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      setSubs: (subs: Vec<ITuple<[AccountId, Data]>>) => SubmittableExtrinsic<ApiType>;
      clearIdentity: () => SubmittableExtrinsic<ApiType>;
      requestJudgement: (regIndex: Compact<RegistrarIndex> | Uint8Array | AnyNumber, maxFee: Compact<BalanceOf> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      cancelRequest: (regIndex: RegistrarIndex | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      setFee: (index: Compact<RegistrarIndex> | Uint8Array | AnyNumber, fee: Compact<BalanceOf> | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      setAccountId: (index: Compact<RegistrarIndex> | Uint8Array | AnyNumber, updated: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      setFields: (index: Compact<RegistrarIndex> | Uint8Array | AnyNumber, fields: IdentityFields) => SubmittableExtrinsic<ApiType>;
      provideJudgement: (regIndex: Compact<RegistrarIndex> | Uint8Array | AnyNumber, target: Address, judgement: IdentityJudgement) => SubmittableExtrinsic<ApiType>;
      killIdentity: (target: Address) => SubmittableExtrinsic<ApiType>;
    };
    society: {
      bid: (value: BalanceOf | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      unbid: (pos: u32 | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      vouch: (who: AccountId | Uint8Array | string, value: BalanceOf | Uint8Array | AnyNumber, tip: BalanceOf | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      unvouch: (pos: u32 | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      vote: (candidate: Address, approve: bool) => SubmittableExtrinsic<ApiType>;
      defenderVote: (approve: bool) => SubmittableExtrinsic<ApiType>;
      payout: () => SubmittableExtrinsic<ApiType>;
      found: (founder: AccountId | Uint8Array | string, maxMembers: u32 | Uint8Array | AnyNumber, rules: Bytes | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      unfound: () => SubmittableExtrinsic<ApiType>;
      judgeSuspendedMember: (who: AccountId | Uint8Array | string, forgive: bool) => SubmittableExtrinsic<ApiType>;
      judgeSuspendedCandidate: (who: AccountId | Uint8Array | string, judgement: SocietyJudgement) => SubmittableExtrinsic<ApiType>;
      setMaxMembers: (max: u32 | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
    };
    recovery: {
      asRecovered: (account: AccountId | Uint8Array | string, call: Call | Uint8Array | object | string) => SubmittableExtrinsic<ApiType>;
      setRecovered: (lost: AccountId | Uint8Array | string, rescuer: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      createRecovery: (friends: AccountId|Uint8Array|string[], threshold: u16 | Uint8Array | AnyNumber, delayPeriod: BlockNumber | Uint8Array | AnyNumber) => SubmittableExtrinsic<ApiType>;
      initiateRecovery: (account: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      vouchRecovery: (lost: AccountId | Uint8Array | string, rescuer: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      claimRecovery: (account: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      closeRecovery: (rescuer: AccountId | Uint8Array | string) => SubmittableExtrinsic<ApiType>;
      removeRecovery: () => SubmittableExtrinsic<ApiType>;
    };
  }
}
