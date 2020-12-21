// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

const SLOT_RANGE_COUNT = 10;

const proposeTypes = {
  ParachainProposal: {
    proposer: 'AccountId',
    validationFunction: 'ValidationCode',
    initialHeadState: 'HeadData',
    validators: 'Vec<ValidatorId>',
    name: 'Vec<u8>',
    balance: 'Balance'
  },
  RegisteredParachainInfo: {
    validators: 'Vec<ValidatorId>',
    proposer: 'AccountId'
  }
};

export default {
  rpc: {},
  types: {
    ...proposeTypes,
    AbridgedCandidateReceipt: {
      parachainIndex: 'ParaId',
      relayParent: 'Hash',
      headData: 'HeadData',
      collator: 'CollatorId',
      signature: 'CollatorSignature',
      povBlockHash: 'Hash',
      commitments: 'CandidateCommitments'
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
    AuctionIndex: 'u32',
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
    Bidder: {
      _enum: {
        New: 'NewBidder',
        Existing: 'ParaId'
      }
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
      relayParent: 'Hash',
      collatorId: 'Hash',
      persistedValidationDataHash: 'Hash',
      povHash: 'Hash',
      erasureRoot: 'Hash',
      signature: 'Signature'
    },
    CandidateHash: 'Hash',
    CandidatePendingAvailability: {
      core: 'CoreIndex',
      hash: 'CandidateHash',
      descriptor: 'CandidateDescriptor',
      availabilityVotes: 'BitVec',
      backers: 'BitVec',
      relayParentNumber: 'BlockNumber',
      backedInNumber: 'BlockNumber'
    },
    CandidateReceipt: {
      descriptor: 'CandidateDescriptor',
      commitmentsHash: 'Hash'
    },
    CollatorId: '[u8; 32]',
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
    DoubleVoteReport: {
      identity: 'ValidatorId',
      first: '(Statement, ValidatorSignature)',
      second: '(Statement, ValidatorSignature)',
      proof: 'MembershipProof',
      signingContext: 'SigningContext'
    },
    DownwardMessage: 'Bytes',
    GroupIndex: 'u32',
    GlobalValidationSchedule: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      blockNumber: 'BlockNumber'
    },
    HeadData: 'Bytes',
    HostConfiguration: {
      validationUpgradeFrequency: 'BlockNumber',
      validationUpgradeDelay: 'BlockNumber',
      acceptancePeriod: 'BlockNumber',
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      maxPovSize: 'u32',
      parathreadCores: 'u32',
      parathreadRetries: 'u32',
      groupRotationFrequency: 'BlockNumber',
      chainAvailabilityPeriod: 'BlockNumber',
      threadAvailabilityPeriod: 'BlockNumber',
      schedulingLookahead: 'u32',
      maxValidatorsPerCore: 'Option<u32>',
      disputePeriod: 'SessionIndex',
      noShowSlots: 'u32',
      nDelayTranches: 'u32',
      zerothDelayTrancheWidth: 'u32',
      neededApprovals: 'u32',
      relayVrfModuloSamples: 'u32',
      maxUpwardQueueCount: 'u32',
      maxUpwardQueueSize: 'u32',
      maxDownwardMessageSize: 'u32',
      preferredDispatchableUpwardMessagesStepWeight: 'Weight',
      maxUpwardMessageSize: 'u32',
      maxUpwardMessageNumPerCandidate: 'u32',
      hrmpOpenRequestTtl: 'u32',
      hrmpSenderDeposit: 'Balance',
      hrmpRecipientDeposit: 'Balance',
      hrmpChannelMaxCapacity: 'u32',
      hrmpChannelMaxTotalSize: 'u32',
      hrmpMaxParachainInboundChannels: 'u32',
      hrmpMaxParathreadInboundChannels: 'u32',
      hrmpChannelMaxMessageSize: 'u32',
      hrmpMaxParachainOutboundChannels: 'u32',
      hrmpMaxParathreadOutboundChannels: 'u32',
      hrmpMaxMessageNumPerCandidate: 'u32'
    },
    HrmpChannel: {
      senderDeposit: 'Balance',
      recipientDeposit: 'Balance',
      maxCapacity: 'u32',
      maxTotalSize: 'u32',
      maxMessageSize: 'u32',
      msgCount: 'u32',
      totalSize: 'u32',
      mqcHead: 'Option<Hash>'
    },
    HrmpChannelId: {
      sender: 'u32',
      receiver: 'u32'
    },
    HrmpOpenChannelRequest: {
      confirmed: 'bool',
      age: 'SessionIndex',
      senderDeposit: 'Balance',
      maxMessageSize: 'u32',
      maxCapacity: 'u32',
      maxTotalSize: 'u32'
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
    IncomingParachain: {
      _enum: {
        Unset: 'NewBidder',
        Fixed: 'IncomingParachainFixed',
        Deploy: 'IncomingParachainDeploy'
      }
    },
    IncomingParachainFixed: {
      codeHash: 'Hash',
      codeSize: 'u32',
      initialHeadData: 'HeadData'
    },
    IncomingParachainDeploy: {
      code: 'ValidationCode',
      initialHeadData: 'HeadData'
    },
    LeasePeriod: 'BlockNumber',
    LeasePeriodOf: 'LeasePeriod',
    LocalValidationData: {
      parentHead: 'HeadData',
      balance: 'Balance',
      codeUpgradeAllowed: 'Option<BlockNumber>'
    },
    MessageIngestionType: {
      downwardMessages: 'Vec<InboundDownwardMessage>',
      horizontalMessages: 'BTreeMap<ParaId, InboundHrmpMessages>'
    },
    NewBidder: {
      who: 'AccountId',
      sub: 'SubId'
    },
    OutboundHrmpMessage: {
      recipient: 'u32',
      data: 'Bytes'
    },
    ParachainDispatchOrigin: {
      _enum: ['Signed', 'Parachain', 'Root']
    },
    ParaId: 'u32',
    ParaInfo: {
      scheduling: 'Scheduling'
    },
    ParaPastCodeMeta: {
      upgradeTimes: 'Vec<BlockNumber>',
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
    PersistedValidationData: {
      parentHead: 'HeadData',
      blockNumber: 'BlockNumber',
      hrmpMqcHeads: 'Vec<(u32, Hash)>',
      dmqMqcHead: 'Hash',
      maxPovSize: 'u32'
    },
    RelayChainBlockNumber: 'BlockNumber',
    QueuedParathread: {
      claim: 'ParathreadEntry',
      coreOffset: 'u32'
    },
    Remark: '[u8; 32]',
    Retriable: {
      _enum: {
        Never: 'Null',
        WithRetries: 'u32'
      }
    },
    Scheduling: {
      _enum: ['Always', 'Dynamic']
    },
    SessionInfo: {
      validators: 'Vec<ValidatorId>',
      discoveryKeys: 'Vec<AuthorityDiscoveryId>',
      assignmentKeys: 'Vec<AssignmentId>',
      validatorGroups: 'Vec<ValidatorGroup>',
      nCores: 'u32',
      zerothDelayTrancheWidth: 'u32',
      relayVrfModuloSamples: 'u32',
      nDelayTranches: 'u32',
      noShowSlots: 'u32',
      neededApprovals: 'u32'
    },
    SignedAvailabilityBitfield: {
      payload: 'BitVec',
      validatorIndex: 'u32',
      signature: 'Signature'
    },
    SignedAvailabilityBitfields: 'Vec<SignedAvailabilityBitfield>',
    SigningContext: {
      sessionIndex: 'SessionIndex',
      parentHash: 'Hash'
    },
    SlotRange: {
      _enum: ['ZeroZero', 'ZeroOne', 'ZeroTwo', 'ZeroThree', 'OneOne', 'OneTwo', 'OneThree', 'TwoTwo', 'TwoThree', 'ThreeThree']
    },
    Statement: {
      _enum: {
        Never: 'Null', // starts at 1
        Candidate: 'Hash',
        Valid: 'Hash',
        Invalid: 'Hash'
      }
    },
    SubId: 'u32',
    TransientValidationData: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      balance: 'Balance',
      codeUpgradeAllowed: 'Option<BlockNumber>',
      dmqLength: 'u32'
    },
    UpwardMessage: 'Bytes',
    ValidationFunctionParams: {
      maxCodeSize: 'u32',
      relayChainHeight: 'RelayChainBlockNumber',
      codeUpgradeAllowed: 'Option<RelayChainBlockNumber>'
    },
    ValidationCode: 'Bytes',
    ValidationData: {
      persisted: 'PersistedValidationData',
      transient: 'TransientValidationData'
    },
    ValidatorGroup: 'Vec<ValidatorIndex>',
    ValidatorSignature: 'Signature',
    ValidityAttestation: {
      _enum: {
        Never: 'Null', // starts at 1
        Implicit: 'ValidatorSignature',
        Explicit: 'ValidatorSignature'
      }
    },
    VersionedXcm: {
      _enum: {
        V0: 'Xcm'
      }
    },
    WinningData: `[WinningDataEntry; ${SLOT_RANGE_COUNT}]`,
    WinningDataEntry: 'Option<Bidder>',
    WithdrawAsset: {
      assets: 'Vec<MultiAsset>',
      effects: 'Vec<Order>'
    },
    ReserveAssetDeposit: {
      assets: 'Vec<MultiAsset>',
      effects: 'Vec<Order>'
    },
    TeleportAsset: {
      assets: 'Vec<MultiAsset>',
      effects: 'Vec<Order>'
    },
    Balances: {
      queryId: 'Compact<u64>',
      assets: 'Vec<MultiAsset>'
    },
    Transact: {
      originType: 'OriginKind',
      call: 'Vec<u8>'
    },
    RelayTo: {
      dest: 'MultiLocation',
      inner: 'VersionedXcm'
    },
    RelayedFrom: {
      superorigin: 'MultiLocation',
      inner: 'VersionedXcm'
    },
    Xcm: {
      _enum: {
        WithdrawAsset: 'WithdrawAsset',
        ReserveAssetDeposit: 'ReserveAssetDeposit',
        TeleportAsset: 'TeleportAsset',
        Balances: 'Balances',
        Transact: 'Transact',
        RelayTo: 'RelayTo',
        RelayedFrom: 'RelayedFrom'
      }
    },
    XcmError: {
      _enum: ['Undefined', 'Unimplemented', 'UnhandledXcmVersion', 'UnhandledXcmMessage', 'UnhandledEffect', 'EscalationOfPrivilege', 'UntrustedReserveLocation', 'UntrustedTeleportLocation', 'DestinationBufferOverflow', 'CannotReachDestination', 'MultiLocationFull', 'FailedToDecode', 'BadOrigin']
    },
    XcmResult: {
      _enum: {
        Ok: '()',
        Err: 'XcmError'
      }
    },
    OriginKind: {
      _enum: ['Native', 'SovereignAccount', 'Superuser']
    },
    NetworkId: {
      _enum: {
        Any: 'Null',
        Named: 'Vec<u8>',
        Polkadot: 'Null',
        Kusama: 'Null'
      }
    },
    MultiLocation: {
      _enum: {
        Null: 'Null',
        X1: 'Junction',
        X2: '(Junction, Junction)',
        X3: '(Junction, Junction, Junction)',
        X4: '(Junction, Junction, Junction, Junction)'
      }
    },
    AccountId32Junction: {
      network: 'NetworkId',
      id: 'AccountId'
    },
    AccountIndex64Junction: {
      network: 'NetworkId',
      index: 'Compact<u64>'
    },
    AccountKey20Junction: {
      network: 'NetworkId',
      index: '[u8; 20]'
    },
    Junction: {
      _enum: {
        Parent: 'Null',
        Parachain: 'Compact<u32>',
        AccountId32: 'AccountId32Junction',
        AccountIndex64: 'AccountIndex64Junction',
        AccountKey20: 'AccountKey20Junction',
        PalletInstance: 'u8',
        GeneralIndex: 'Compact<u128>',
        GeneralKey: 'Vec<u8>',
        OnlyChild: 'Null'
      }
    },
    VersionedMultiLocation: {
      _enum: {
        V0: 'MultiLocation'
      }
    },
    AssetInstance: {
      _enum: {
        Undefined: 'Null',
        Index8: 'u8',
        Index16: 'Compact<u16>',
        Index32: 'Compact<u32>',
        Index64: 'Compact<u64>',
        Index128: 'Compact<u128>',
        Array4: '[u8; 4]',
        Array8: '[u8; 8]',
        Array16: '[u8; 16]',
        Array32: '[u8; 32]',
        Blob: 'Vec<u8>'
      }
    },
    AbstractFungible: {
      id: 'Vec<u8>',
      instance: 'Compact<u128>'
    },
    AbstractNonFungible: {
      class: 'Vec<u8>',
      instance: 'AssetInstance'
    },
    ConcreteFungible: {
      id: 'MultiLocation',
      amount: 'Compact<u128>'
    },
    ConcreteNonFungible: {
      class: 'MultiLocation',
      instance: 'AssetInstance'
    },
    MultiAsset: {
      _enum: {
        None: 'Null',
        All: 'Null',
        AllFungible: 'Null',
        AllNonFungible: 'Null',
        AllAbstractFungible: 'Vec<u8>',
        AllAbstractNonFungible: 'Vec<u8>',
        AllConcreteFungible: 'MultiLocation',
        AllConcreteNonFungible: 'MultiLocation',
        AbstractFungible: 'AbstractFungible',
        AbstractNonFungible: 'AbstractNonFungible',
        ConcreteFungible: 'ConcreteFungible',
        ConcreteNonFungible: 'ConcreteNonFungible'
      }
    },
    VersionedMultiAsset: {
      _enum: {
        V0: 'MultiAsset'
      }
    },
    DepositAsset: {
      assets: 'Vec<MultiAsset>',
      dest: 'MultiLocation'
    },
    DepositReserveAsset: {
      assets: 'Vec<MultiAsset>',
      dest: 'MultiLocation',
      effects: 'Vec<Order>'
    },
    ExchangeAsset: {
      give: 'Vec<MultiAsset>',
      receive: 'Vec<MultiAsset>'
    },
    InitiateReserveWithdraw: {
      assets: 'Vec<MultiAsset>',
      reserve: 'MultiLocation',
      effects: 'Vec<Order>'
    },
    InitiateTeleport: {
      assets: 'Vec<MultiAsset>',
      dest: 'MultiLocation',
      effects: 'Vec<Order>'
    },
    QueryHolding: {
      queryId: 'Compact<u64>',
      dest: 'MultiLocation',
      assets: 'Vec<MultiAsset>'
    },
    Order: {
      _enum: {
        Null: 'Null',
        DepositAsset: 'DepositAsset',
        DepositReserveAsset: 'DepositReserveAsset',
        ExchangeAsset: 'ExchangeAsset',
        InitiateReserveWithdraw: 'InitiateReserveWithdraw',
        InitiateTeleport: 'InitiateTeleport',
        QueryHolding: 'QueryHolding'
      }
    }
  }
} as Definitions;
