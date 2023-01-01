// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import { objectSpread } from '@polkadot/util';

import hrmpTypes from './hrmp';
import { runtime } from './runtime';
import slotTypes from './slots';

// proposeParachain
const proposeTypes = {
  ParachainProposal: {
    proposer: 'AccountId',
    genesisHead: 'HeadData',
    validators: 'Vec<ValidatorId>',
    name: 'Bytes',
    balance: 'Balance'
  },
  RegisteredParachainInfo: {
    validators: 'Vec<ValidatorId>',
    proposer: 'AccountId'
  }
};

const cumulusTypes = {
  ServiceQuality: {
    _enum: ['Ordered', 'Fast']
  }
};

const disputeTypes = {
  DisputeLocation: {
    _enum: ['Local', 'Remote']
  },
  DisputeResult: {
    _enum: ['Valid', 'Invalid']
  },
  DisputeState: {
    validatorsFor: 'BitVec',
    validatorsAgainst: 'BitVec',
    start: 'BlockNumber',
    concludedAt: 'Option<BlockNumber>'
  },
  DisputeStatement: {
    _enum: {
      Valid: 'ValidDisputeStatementKind',
      Invalid: 'InvalidDisputeStatementKind'
    }
  },
  DisputeStatementSet: {
    candidateHash: 'CandidateHash',
    session: 'SessionIndex',
    statements: 'Vec<(DisputeStatement, ParaValidatorIndex, ValidatorSignature)>'
  },
  ExplicitDisputeStatement: {
    valid: 'bool',
    candidateHash: 'CandidateHash',
    session: 'SessionIndex'
  },
  InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  MultiDisputeStatementSet: 'Vec<DisputeStatementSet>',
  ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'Hash',
      BackingValid: 'Hash',
      ApprovalChecking: 'Null'
    }
  }
};

export default {
  rpc: {},
  runtime,
  types: objectSpread({}, cumulusTypes, disputeTypes, hrmpTypes, proposeTypes, slotTypes, {
    AbridgedCandidateReceipt: {
      parachainIndex: 'ParaId',
      relayParent: 'Hash',
      headData: 'HeadData',
      collator: 'CollatorId',
      signature: 'CollatorSignature',
      povBlockHash: 'Hash',
      commitments: 'CandidateCommitments'
    },
    AbridgedHostConfiguration: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      maxUpwardQueueCount: 'u32',
      maxUpwardQueueSize: 'u32',
      maxUpwardMessageSize: 'u32',
      maxUpwardMessageNumPerCandidate: 'u32',
      hrmpMaxMessageNumPerCandidate: 'u32',
      validationUpgradeFrequency: 'BlockNumber',
      validationUpgradeDelay: 'BlockNumber'
    },
    AbridgedHrmpChannel: {
      maxCapacity: 'u32',
      maxTotalSize: 'u32',
      maxMessageSize: 'u32',
      msgCount: 'u32',
      totalSize: 'u32',
      mqcHead: 'Option<Hash>'
    },
    AssignmentId: 'AccountId',
    AssignmentKind: {
      _enum: {
        Parachain: 'Null',
        Parathread: '(CollatorId, u32)'
      }
    },
    AttestedCandidate: {
      candidate: 'AbridgedCandidateReceipt',
      validityVotes: 'Vec<ValidityAttestation>',
      validatorIndices: 'BitVec'
    },
    AuthorityDiscoveryId: 'AccountId',
    AvailabilityBitfield: 'BitVec',
    AvailabilityBitfieldRecord: {
      bitfield: 'AvailabilityBitfield',
      submittedTt: 'BlockNumber'
    },
    BackedCandidate: {
      candidate: 'CommittedCandidateReceipt',
      validityVotes: 'Vec<ValidityAttestation>',
      validatorIndices: 'BitVec'
    },
    BufferedSessionChange: {
      applyAt: 'BlockNumber',
      validators: 'Vec<ValidatorId>',
      queued: 'Vec<ValidatorId>',
      sessionIndex: 'SessionIndex'
    },
    CandidateCommitments: {
      upwardMessages: 'Vec<UpwardMessage>',
      horizontalMessages: 'Vec<OutboundHrmpMessage>',
      newValidationCode: 'Option<ValidationCode>',
      headData: 'HeadData',
      processedDownwardMessages: 'u32',
      hrmpWatermark: 'BlockNumber'
    },
    CandidateDescriptor: {
      paraId: 'ParaId',
      relayParent: 'RelayChainHash',
      collatorId: 'CollatorId',
      persistedValidationDataHash: 'Hash',
      povHash: 'Hash',
      erasureRoot: 'Hash',
      signature: 'CollatorSignature',
      paraHead: 'Hash',
      validationCodeHash: 'ValidationCodeHash'
    },
    CandidateEvent: {
      _enum: {
        CandidateBacked: '(CandidateReceipt, HeadData, CoreIndex, GroupIndex)',
        CandidateIncluded: '(CandidateReceipt, HeadData, CoreIndex, GroupIndex)',
        CandidateTimedOut: '(CandidateReceipt, HeadData, CoreIndex)'
      }
    },
    CandidateHash: 'Hash',
    CandidateInfo: {
      who: 'AccountId',
      deposit: 'Balance'
    },
    CandidatePendingAvailability: {
      core: 'CoreIndex',
      hash: 'CandidateHash',
      descriptor: 'CandidateDescriptor',
      availabilityVotes: 'BitVec',
      backers: 'BitVec',
      relayParentNumber: 'BlockNumber',
      backedInNumber: 'BlockNumber',
      backingGroup: 'GroupIndex'
    },
    CandidateReceipt: {
      descriptor: 'CandidateDescriptor',
      commitmentsHash: 'Hash'
    },
    GlobalValidationData: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      blockNumber: 'BlockNumber'
    },
    CollatorId: 'H256',
    CollatorSignature: 'Signature',
    CommittedCandidateReceipt: {
      descriptor: 'CandidateDescriptor',
      commitments: 'CandidateCommitments'
    },
    CoreAssignment: {
      core: 'CoreIndex',
      paraId: 'ParaId',
      kind: 'AssignmentKind',
      groupIdx: 'GroupIndex'
    },
    CoreIndex: 'u32',
    CoreOccupied: {
      _enum: {
        Parathread: 'ParathreadEntry',
        Parachain: 'Null'
      }
    },
    CoreState: {
      _enum: {
        Occupied: 'OccupiedCore',
        Scheduled: 'ScheduledCore',
        Free: 'Null'
      }
    },
    DoubleVoteReport: {
      identity: 'ValidatorId',
      first: '(Statement, ValidatorSignature)',
      second: '(Statement, ValidatorSignature)',
      proof: 'MembershipProof',
      signingContext: 'SigningContext'
    },
    DownwardMessage: 'Bytes',
    GroupIndex: 'u32',
    GroupRotationInfo: {
      sessionStartBlock: 'BlockNumber',
      groupRotationFrequency: 'BlockNumber',
      now: 'BlockNumber'
    },
    GlobalValidationSchedule: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      blockNumber: 'BlockNumber'
    },
    HeadData: 'Bytes',
    HostConfiguration: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      maxUpwardQueueCount: 'u32',
      maxUpwardQueueSize: 'u32',
      maxUpwardMessageSize: 'u32',
      maxUpwardMessageNumPerCandidate: 'u32',
      hrmpMaxMessageNumPerCandidate: 'u32',
      validationUpgradeFrequency: 'BlockNumber',
      validationUpgradeDelay: 'BlockNumber',
      maxPovSize: 'u32',
      maxDownwardMessageSize: 'u32',
      preferredDispatchableUpwardMessagesStepWeight: 'Weight',
      hrmpMaxParachainOutboundChannels: 'u32',
      hrmpMaxParathreadOutboundChannels: 'u32',
      hrmpOpenRequestTtl: 'u32',
      hrmpSenderDeposit: 'Balance',
      hrmpRecipientDeposit: 'Balance',
      hrmpChannelMaxCapacity: 'u32',
      hrmpChannelMaxTotalSize: 'u32',
      hrmpMaxParachainInboundChannels: 'u32',
      hrmpMaxParathreadInboundChannels: 'u32',
      hrmpChannelMaxMessageSize: 'u32',
      codeRetentionPeriod: 'BlockNumber',
      parathreadCores: 'u32',
      parathreadRetries: 'u32',
      groupRotationFrequency: 'BlockNumber',
      chainAvailabilityPeriod: 'BlockNumber',
      threadAvailabilityPeriod: 'BlockNumber',
      schedulingLookahead: 'u32',
      maxValidatorsPerCore: 'Option<u32>',
      maxValidators: 'Option<u32>',
      disputePeriod: 'SessionIndex',
      disputePostConclusionAcceptancePeriod: 'BlockNumber',
      disputeMaxSpamSlots: 'u32',
      disputeConclusionByTimeOutPeriod: 'BlockNumber',
      noShowSlots: 'u32',
      nDelayTranches: 'u32',
      zerothDelayTrancheWidth: 'u32',
      neededApprovals: 'u32',
      relayVrfModuloSamples: 'u32'
    },
    InboundDownwardMessage: {
      pubSentAt: 'BlockNumber',
      pubMsg: 'DownwardMessage'
    },
    InboundHrmpMessage: {
      sentAt: 'BlockNumber',
      data: 'Bytes'
    },
    InboundHrmpMessages: 'Vec<InboundHrmpMessage>',
    LocalValidationData: {
      parentHead: 'HeadData',
      balance: 'Balance',
      codeUpgradeAllowed: 'Option<BlockNumber>'
    },
    MessageIngestionType: {
      downwardMessages: 'Vec<InboundDownwardMessage>',
      horizontalMessages: 'BTreeMap<ParaId, InboundHrmpMessages>'
    },
    MessageQueueChain: 'RelayChainHash',
    OccupiedCore: {
      nextUpOnAvailable: 'Option<ScheduledCore>',
      occupiedSince: 'BlockNumber',
      timeOutAt: 'BlockNumber',
      nextUpOnTimeOut: 'Option<ScheduledCore>',
      availability: 'BitVec',
      groupResponsible: 'GroupIndex',
      candidateHash: 'CandidateHash',
      candidateDescriptor: 'CandidateDescriptor'
    },
    OccupiedCoreAssumption: {
      _enum: ['Included,', 'TimedOut', 'Free']
    },
    OutboundHrmpMessage: {
      recipient: 'u32',
      data: 'Bytes'
    },
    ParachainDispatchOrigin: {
      _enum: ['Signed', 'Parachain', 'Root']
    },
    ParachainInherentData: {
      validationData: 'PersistedValidationData',
      relayChainState: 'StorageProof',
      downwardMessages: 'Vec<InboundDownwardMessage>',
      horizontalMessages: 'BTreeMap<ParaId, VecInboundHrmpMessage>'
    },
    ParachainsInherentData: {
      bitfields: 'SignedAvailabilityBitfields',
      backedCandidates: 'Vec<BackedCandidate>',
      disputes: 'MultiDisputeStatementSet',
      parentHeader: 'Header'
    },
    ParaGenesisArgs: {
      genesisHead: 'Bytes',
      validationCode: 'Bytes',
      parachain: 'bool'
    },
    ParaId: 'u32',
    ParaInfo: {
      manager: 'AccountId',
      deposit: 'Balance',
      locked: 'bool'
    },
    ParaLifecycle: {
      _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingToParachain', 'DowngradingToParathread', 'OutgoingParathread', 'OutgoingParachain']
    },
    ParaPastCodeMeta: {
      upgradeTimes: 'Vec<ReplacementTimes>',
      lastPruned: 'Option<BlockNumber>'
    },
    ParaScheduling: {
      _enum: ['Always', 'Dynamic']
    },
    ParathreadClaim: '(ParaId, CollatorId)',
    ParathreadClaimQueue: {
      queue: 'Vec<QueuedParathread>',
      nextCoreOffset: 'u32'
    },
    ParathreadEntry: {
      claim: 'ParathreadClaim',
      retries: 'u32'
    },
    ParaValidatorIndex: 'u32',
    PersistedValidationData: {
      parentHead: 'HeadData',
      relayParentNumber: 'RelayChainBlockNumber',
      relayParentStorageRoot: 'Hash',
      maxPovSize: 'u32'
    },
    PvfCheckStatement: {
      accept: 'bool',
      subject: 'ValidationCodeHash',
      sessionIndex: 'SessionIndex',
      validatorIndex: 'ParaValidatorIndex'
    },
    QueuedParathread: {
      claim: 'ParathreadEntry',
      coreOffset: 'u32'
    },
    RelayBlockNumber: 'u32',
    RelayChainBlockNumber: 'RelayBlockNumber',
    RelayHash: 'Hash',
    RelayChainHash: 'RelayHash',
    Remark: '[u8; 32]',
    ReplacementTimes: {
      expectedAt: 'BlockNumber',
      activatedAt: 'BlockNumber'
    },
    Retriable: {
      _enum: {
        Never: 'Null',
        WithRetries: 'u32'
      }
    },
    ScheduledCore: {
      paraId: 'ParaId',
      collator: 'Option<CollatorId>'
    },
    Scheduling: {
      _enum: ['Always', 'Dynamic']
    },
    ScrapedOnChainVotes: {
      session: 'SessionIndex',
      backingValidatorsPerCandidate: 'Vec<(CandidateReceipt, Vec<(ParaValidatorIndex, ValidityAttestation)>)>',
      disputes: 'MultiDisputeStatementSet'
    },
    SessionInfo: {
      activeValidatorIndices: 'Vec<ParaValidatorIndex>',
      randomSeed: '[u8; 32]',
      disputePeriod: 'SessionIndex',
      validators: 'Vec<ValidatorId>',
      discoveryKeys: 'Vec<AuthorityDiscoveryId>',
      assignmentKeys: 'Vec<AssignmentId>',
      validatorGroups: 'Vec<Vec<ValidatorIndex>>',
      nCores: 'u32',
      zerothDelayTrancheWidth: 'u32',
      relayVrfModuloSamples: 'u32',
      nDelayTranches: 'u32',
      noShowSlots: 'u32',
      neededApprovals: 'u32'
    },
    OldV1SessionInfo: {
      validators: 'Vec<ValidatorId>',
      discoveryKeys: 'Vec<AuthorityDiscoveryId>',
      assignmentKeys: 'Vec<AssignmentId>',
      validatorGroups: 'Vec<Vec<ParaValidatorIndex>>',
      nCores: 'u32',
      zerothDelayTrancheWidth: 'u32',
      relayVrfModuloSamples: 'u32',
      nDelayTranches: 'u32',
      noShowSlots: 'u32',
      neededApprovals: 'u32'
    },
    SessionInfoValidatorGroup: 'Vec<ParaValidatorIndex>',
    SignedAvailabilityBitfield: {
      payload: 'BitVec',
      validatorIndex: 'ParaValidatorIndex',
      signature: 'ValidatorSignature'
    },
    SignedAvailabilityBitfields: 'Vec<SignedAvailabilityBitfield>',
    SigningContext: {
      sessionIndex: 'SessionIndex',
      parentHash: 'Hash'
    },
    Statement: {
      _enum: {
        Never: 'Null', // starts at 1
        Candidate: 'Hash',
        Valid: 'Hash',
        Invalid: 'Hash'
      }
    },
    TransientValidationData: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      balance: 'Balance',
      codeUpgradeAllowed: 'Option<BlockNumber>',
      dmqLength: 'u32'
    },
    UpgradeGoAhead: {
      _enum: ['Abort', 'GoAhead']
    },
    UpgradeRestriction: {
      _enum: ['Present']
    },
    UpwardMessage: 'Bytes',
    ValidationFunctionParams: {
      maxCodeSize: 'u32',
      relayChainHeight: 'RelayChainBlockNumber',
      codeUpgradeAllowed: 'Option<RelayChainBlockNumber>'
    },
    ValidationCode: 'Bytes',
    ValidationCodeHash: 'Hash',
    ValidationData: {
      persisted: 'PersistedValidationData',
      transient: 'TransientValidationData'
    },
    ValidationDataType: {
      validationData: 'ValidationData',
      relayChainState: 'Vec<Bytes>'
    },
    ValidatorSignature: 'Signature',
    ValidityAttestation: {
      _enum: {
        Never: 'Null', // starts at 1
        Implicit: 'ValidatorSignature',
        Explicit: 'ValidatorSignature'
      }
    },
    MessagingStateSnapshot: {
      relayDispatchQueueSize: '(u32, u32)',
      egressChannels: 'Vec<MessagingStateSnapshotEgressEntry>'
    },
    MessagingStateSnapshotEgressEntry: '(ParaId, AbridgedHrmpChannel)',
    SystemInherentData: 'ParachainInherentData',
    VecInboundHrmpMessage: 'Vec<InboundHrmpMessage>'
  })
} as Definitions;
