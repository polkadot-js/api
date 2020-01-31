// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */


declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    system: {
      fillBlock: SubmittableExtrinsicFunction<ApiType>;
      remark: SubmittableExtrinsicFunction<ApiType>;
      setHeapPages: SubmittableExtrinsicFunction<ApiType>;
      setCode: SubmittableExtrinsicFunction<ApiType>;
      setCodeWithoutChecks: SubmittableExtrinsicFunction<ApiType>;
      setChangesTrieConfig: SubmittableExtrinsicFunction<ApiType>;
      setStorage: SubmittableExtrinsicFunction<ApiType>;
      killStorage: SubmittableExtrinsicFunction<ApiType>;
      killPrefix: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      batch: SubmittableExtrinsicFunction<ApiType>;
      asSub: SubmittableExtrinsicFunction<ApiType>;
      asMulti: SubmittableExtrinsicFunction<ApiType>;
      approveAsMulti: SubmittableExtrinsicFunction<ApiType>;
      cancelAsMulti: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      set: SubmittableExtrinsicFunction<ApiType>;
    };
    authorship: {
      setUncles: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      transfer: SubmittableExtrinsicFunction<ApiType>;
      setBalance: SubmittableExtrinsicFunction<ApiType>;
      forceTransfer: SubmittableExtrinsicFunction<ApiType>;
      transferKeepAlive: SubmittableExtrinsicFunction<ApiType>;
    };
    staking: {
      bond: SubmittableExtrinsicFunction<ApiType>;
      bondExtra: SubmittableExtrinsicFunction<ApiType>;
      unbond: SubmittableExtrinsicFunction<ApiType>;
      withdrawUnbonded: SubmittableExtrinsicFunction<ApiType>;
      validate: SubmittableExtrinsicFunction<ApiType>;
      nominate: SubmittableExtrinsicFunction<ApiType>;
      chill: SubmittableExtrinsicFunction<ApiType>;
      setPayee: SubmittableExtrinsicFunction<ApiType>;
      setController: SubmittableExtrinsicFunction<ApiType>;
      setValidatorCount: SubmittableExtrinsicFunction<ApiType>;
      forceNoEras: SubmittableExtrinsicFunction<ApiType>;
      forceNewEra: SubmittableExtrinsicFunction<ApiType>;
      setInvulnerables: SubmittableExtrinsicFunction<ApiType>;
      forceUnstake: SubmittableExtrinsicFunction<ApiType>;
      forceNewEraAlways: SubmittableExtrinsicFunction<ApiType>;
      cancelDeferredSlash: SubmittableExtrinsicFunction<ApiType>;
      rebond: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      setKeys: SubmittableExtrinsicFunction<ApiType>;
    };
    democracy: {
      propose: SubmittableExtrinsicFunction<ApiType>;
      second: SubmittableExtrinsicFunction<ApiType>;
      vote: SubmittableExtrinsicFunction<ApiType>;
      proxyVote: SubmittableExtrinsicFunction<ApiType>;
      emergencyCancel: SubmittableExtrinsicFunction<ApiType>;
      externalPropose: SubmittableExtrinsicFunction<ApiType>;
      externalProposeMajority: SubmittableExtrinsicFunction<ApiType>;
      externalProposeDefault: SubmittableExtrinsicFunction<ApiType>;
      fastTrack: SubmittableExtrinsicFunction<ApiType>;
      vetoExternal: SubmittableExtrinsicFunction<ApiType>;
      cancelReferendum: SubmittableExtrinsicFunction<ApiType>;
      cancelQueued: SubmittableExtrinsicFunction<ApiType>;
      setProxy: SubmittableExtrinsicFunction<ApiType>;
      resignProxy: SubmittableExtrinsicFunction<ApiType>;
      removeProxy: SubmittableExtrinsicFunction<ApiType>;
      delegate: SubmittableExtrinsicFunction<ApiType>;
      undelegate: SubmittableExtrinsicFunction<ApiType>;
      clearPublicProposals: SubmittableExtrinsicFunction<ApiType>;
      notePreimage: SubmittableExtrinsicFunction<ApiType>;
      noteImminentPreimage: SubmittableExtrinsicFunction<ApiType>;
      reapPreimage: SubmittableExtrinsicFunction<ApiType>;
    };
    council: {
      setMembers: SubmittableExtrinsicFunction<ApiType>;
      execute: SubmittableExtrinsicFunction<ApiType>;
      propose: SubmittableExtrinsicFunction<ApiType>;
      vote: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalCommittee: {
      setMembers: SubmittableExtrinsicFunction<ApiType>;
      execute: SubmittableExtrinsicFunction<ApiType>;
      propose: SubmittableExtrinsicFunction<ApiType>;
      vote: SubmittableExtrinsicFunction<ApiType>;
    };
    elections: {
      vote: SubmittableExtrinsicFunction<ApiType>;
      removeVoter: SubmittableExtrinsicFunction<ApiType>;
      reportDefunctVoter: SubmittableExtrinsicFunction<ApiType>;
      submitCandidacy: SubmittableExtrinsicFunction<ApiType>;
      renounceCandidacy: SubmittableExtrinsicFunction<ApiType>;
      removeMember: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalMembership: {
      addMember: SubmittableExtrinsicFunction<ApiType>;
      removeMember: SubmittableExtrinsicFunction<ApiType>;
      swapMember: SubmittableExtrinsicFunction<ApiType>;
      resetMembers: SubmittableExtrinsicFunction<ApiType>;
      changeKey: SubmittableExtrinsicFunction<ApiType>;
    };
    finalityTracker: {
      finalHint: SubmittableExtrinsicFunction<ApiType>;
    };
    grandpa: {
      reportMisbehavior: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      proposeSpend: SubmittableExtrinsicFunction<ApiType>;
      rejectProposal: SubmittableExtrinsicFunction<ApiType>;
      approveProposal: SubmittableExtrinsicFunction<ApiType>;
      reportAwesome: SubmittableExtrinsicFunction<ApiType>;
      retractTip: SubmittableExtrinsicFunction<ApiType>;
      tipNew: SubmittableExtrinsicFunction<ApiType>;
      tip: SubmittableExtrinsicFunction<ApiType>;
      closeTip: SubmittableExtrinsicFunction<ApiType>;
    };
    contracts: {
      updateSchedule: SubmittableExtrinsicFunction<ApiType>;
      putCode: SubmittableExtrinsicFunction<ApiType>;
      call: SubmittableExtrinsicFunction<ApiType>;
      instantiate: SubmittableExtrinsicFunction<ApiType>;
      claimSurcharge: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      sudo: SubmittableExtrinsicFunction<ApiType>;
      setKey: SubmittableExtrinsicFunction<ApiType>;
      sudoAs: SubmittableExtrinsicFunction<ApiType>;
    };
    imOnline: {
      heartbeat: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      addRegistrar: SubmittableExtrinsicFunction<ApiType>;
      setIdentity: SubmittableExtrinsicFunction<ApiType>;
      setSubs: SubmittableExtrinsicFunction<ApiType>;
      clearIdentity: SubmittableExtrinsicFunction<ApiType>;
      requestJudgement: SubmittableExtrinsicFunction<ApiType>;
      cancelRequest: SubmittableExtrinsicFunction<ApiType>;
      setFee: SubmittableExtrinsicFunction<ApiType>;
      setAccountId: SubmittableExtrinsicFunction<ApiType>;
      setFields: SubmittableExtrinsicFunction<ApiType>;
      provideJudgement: SubmittableExtrinsicFunction<ApiType>;
      killIdentity: SubmittableExtrinsicFunction<ApiType>;
    };
    society: {
      bid: SubmittableExtrinsicFunction<ApiType>;
      unbid: SubmittableExtrinsicFunction<ApiType>;
      vouch: SubmittableExtrinsicFunction<ApiType>;
      unvouch: SubmittableExtrinsicFunction<ApiType>;
      vote: SubmittableExtrinsicFunction<ApiType>;
      defenderVote: SubmittableExtrinsicFunction<ApiType>;
      payout: SubmittableExtrinsicFunction<ApiType>;
      found: SubmittableExtrinsicFunction<ApiType>;
      unfound: SubmittableExtrinsicFunction<ApiType>;
      judgeSuspendedMember: SubmittableExtrinsicFunction<ApiType>;
      judgeSuspendedCandidate: SubmittableExtrinsicFunction<ApiType>;
      setMaxMembers: SubmittableExtrinsicFunction<ApiType>;
    };
    recovery: {
      asRecovered: SubmittableExtrinsicFunction<ApiType>;
      setRecovered: SubmittableExtrinsicFunction<ApiType>;
      createRecovery: SubmittableExtrinsicFunction<ApiType>;
      initiateRecovery: SubmittableExtrinsicFunction<ApiType>;
      vouchRecovery: SubmittableExtrinsicFunction<ApiType>;
      claimRecovery: SubmittableExtrinsicFunction<ApiType>;
      closeRecovery: SubmittableExtrinsicFunction<ApiType>;
      removeRecovery: SubmittableExtrinsicFunction<ApiType>;
    };
  }
}
