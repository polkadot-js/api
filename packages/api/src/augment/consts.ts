// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Struct, Text, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types';
import type { Codec } from '@polkadot/types/types';
import type { PalletContractsSchedule } from '@polkadot/types/augment/lookup';
import type { Perbill, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/consts' {
  export interface AugmentedConsts<ApiType> {
    assets: {
      approvalDeposit: u128 & AugmentedConst<ApiType>;
      assetDeposit: u128 & AugmentedConst<ApiType>;
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      metadataDepositPerByte: u128 & AugmentedConst<ApiType>;
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    authorship: {
      uncleGenerations: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    babe: {
      epochDuration: u64 & AugmentedConst<ApiType>;
      expectedBlockTime: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    balances: {
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      maxLocks: u32 & AugmentedConst<ApiType>;
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bounties: {
      bountyCuratorDeposit: Permill & AugmentedConst<ApiType>;
      bountyDepositBase: u128 & AugmentedConst<ApiType>;
      bountyDepositPayoutDelay: u32 & AugmentedConst<ApiType>;
      bountyUpdatePeriod: u32 & AugmentedConst<ApiType>;
      bountyValueMinimum: u128 & AugmentedConst<ApiType>;
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    contracts: {
      deletionQueueDepth: u32 & AugmentedConst<ApiType>;
      deletionWeightLimit: u64 & AugmentedConst<ApiType>;
      depositPerContract: u128 & AugmentedConst<ApiType>;
      depositPerStorageByte: u128 & AugmentedConst<ApiType>;
      depositPerStorageItem: u128 & AugmentedConst<ApiType>;
      rentFraction: Perbill & AugmentedConst<ApiType>;
      schedule: PalletContractsSchedule & AugmentedConst<ApiType>;
      signedClaimHandicap: u32 & AugmentedConst<ApiType>;
      surchargeReward: u128 & AugmentedConst<ApiType>;
      tombstoneDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    democracy: {
      cooloffPeriod: u32 & AugmentedConst<ApiType>;
      enactmentPeriod: u32 & AugmentedConst<ApiType>;
      fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
      instantAllowed: bool & AugmentedConst<ApiType>;
      launchPeriod: u32 & AugmentedConst<ApiType>;
      maxProposals: u32 & AugmentedConst<ApiType>;
      maxVotes: u32 & AugmentedConst<ApiType>;
      minimumDeposit: u128 & AugmentedConst<ApiType>;
      preimageByteDeposit: u128 & AugmentedConst<ApiType>;
      votingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    electionProviderMultiPhase: {
      minerMaxIterations: u32 & AugmentedConst<ApiType>;
      minerMaxLength: u32 & AugmentedConst<ApiType>;
      minerMaxWeight: u64 & AugmentedConst<ApiType>;
      minerTxPriority: u64 & AugmentedConst<ApiType>;
      offchainRepeat: u32 & AugmentedConst<ApiType>;
      signedDepositBase: u128 & AugmentedConst<ApiType>;
      signedDepositByte: u128 & AugmentedConst<ApiType>;
      signedDepositWeight: u128 & AugmentedConst<ApiType>;
      signedMaxSubmissions: u32 & AugmentedConst<ApiType>;
      signedMaxWeight: u64 & AugmentedConst<ApiType>;
      signedPhase: u32 & AugmentedConst<ApiType>;
      signedRewardBase: u128 & AugmentedConst<ApiType>;
      solutionImprovementThreshold: Perbill & AugmentedConst<ApiType>;
      unsignedPhase: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    elections: {
      candidacyBond: u128 & AugmentedConst<ApiType>;
      desiredMembers: u32 & AugmentedConst<ApiType>;
      desiredRunnersUp: u32 & AugmentedConst<ApiType>;
      palletId: U8aFixed & AugmentedConst<ApiType>;
      termDuration: u32 & AugmentedConst<ApiType>;
      votingBondBase: u128 & AugmentedConst<ApiType>;
      votingBondFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    gilt: {
      fifoQueueLen: u32 & AugmentedConst<ApiType>;
      ignoredIssuance: u128 & AugmentedConst<ApiType>;
      intakePeriod: u32 & AugmentedConst<ApiType>;
      maxIntakeBids: u32 & AugmentedConst<ApiType>;
      maxQueueLen: u32 & AugmentedConst<ApiType>;
      minFreeze: u128 & AugmentedConst<ApiType>;
      period: u32 & AugmentedConst<ApiType>;
      queueCount: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    identity: {
      basicDeposit: u128 & AugmentedConst<ApiType>;
      fieldDeposit: u128 & AugmentedConst<ApiType>;
      maxAdditionalFields: u32 & AugmentedConst<ApiType>;
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    imOnline: {
      unsignedPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    indices: {
      deposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    lottery: {
      maxCalls: u32 & AugmentedConst<ApiType>;
      maxGenerateRandom: u32 & AugmentedConst<ApiType>;
      palletId: U8aFixed & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      depositBase: u128 & AugmentedConst<ApiType>;
      depositFactor: u128 & AugmentedConst<ApiType>;
      maxSignatories: u16 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      maxPending: u32 & AugmentedConst<ApiType>;
      maxProxies: u32 & AugmentedConst<ApiType>;
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    recovery: {
      configDepositBase: u128 & AugmentedConst<ApiType>;
      friendDepositFactor: u128 & AugmentedConst<ApiType>;
      maxFriends: u16 & AugmentedConst<ApiType>;
      recoveryDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      maximumWeight: u64 & AugmentedConst<ApiType>;
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    society: {
      candidateDeposit: u128 & AugmentedConst<ApiType>;
      challengePeriod: u32 & AugmentedConst<ApiType>;
      maxCandidateIntake: u32 & AugmentedConst<ApiType>;
      maxStrikes: u32 & AugmentedConst<ApiType>;
      palletId: U8aFixed & AugmentedConst<ApiType>;
      periodSpend: u128 & AugmentedConst<ApiType>;
      rotationPeriod: u32 & AugmentedConst<ApiType>;
      wrongSideDeduction: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    staking: {
      bondingDuration: u32 & AugmentedConst<ApiType>;
      maxNominations: u32 & AugmentedConst<ApiType>;
      maxNominatorRewardedPerValidator: u32 & AugmentedConst<ApiType>;
      sessionsPerEra: u32 & AugmentedConst<ApiType>;
      slashDeferDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      blockHashCount: u32 & AugmentedConst<ApiType>;
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      dbWeight: FrameSupportWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tips: {
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      tipCountdown: u32 & AugmentedConst<ApiType>;
      tipFindersFee: Percent & AugmentedConst<ApiType>;
      tipReportDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      transactionByteFee: u128 & AugmentedConst<ApiType>;
      weightToFee: Vec<FrameSupportWeightsWeightToFeeCoefficient> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      burn: Permill & AugmentedConst<ApiType>;
      maxApprovals: u32 & AugmentedConst<ApiType>;
      palletId: U8aFixed & AugmentedConst<ApiType>;
      proposalBond: Permill & AugmentedConst<ApiType>;
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    uniques: {
      attributeDepositBase: u128 & AugmentedConst<ApiType>;
      classDeposit: u128 & AugmentedConst<ApiType>;
      depositPerByte: u128 & AugmentedConst<ApiType>;
      instanceDeposit: u128 & AugmentedConst<ApiType>;
      keyLimit: u32 & AugmentedConst<ApiType>;
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      stringLimit: u32 & AugmentedConst<ApiType>;
      valueLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vesting: {
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    [key: string]: QueryableModuleConsts;
  }
}
