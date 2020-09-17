// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

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
    AttestedCandidate: {
      candidate: 'AbridgedCandidateReceipt',
      validityVotes: 'Vec<ValidityAttestation>',
      validatorIndices: 'BitVec'
    },
    AuctionIndex: 'u32',
    Bidder: {
      _enum: {
        New: 'NewBidder',
        Existing: 'ParaId'
      }
    },
    CandidateCommitments: {
      fees: 'Balance',
      upwardMessages: 'Vec<UpwardMessage>',
      erasureRoot: 'Hash',
      newValidationCode: 'Option<ValidationCode>',
      processedDownwardMessages: 'u32'
    },
    CandidateReceipt: {
      parachainIndex: 'ParaId',
      relayParent: 'Hash',
      head_data: 'HeadData',
      collator: 'CollatorId',
      signature: 'CollatorSignature',
      povBlockHash: 'Hash',
      globalValidation: 'GlobalValidationSchedule',
      localValidation: 'LocalValidationData',
      commitments: 'CandidateCommitments'
    },
    CollatorId: '[u8; 32]',
    CollatorSignature: 'Signature',
    DoubleVoteReport: {
      identity: 'ValidatorId',
      first: '(Statement, ValidatorSignature)',
      second: '(Statement, ValidatorSignature)',
      proof: 'MembershipProof',
      signingContext: 'SigningContext'
    },
    DownwardMessage: {
      _enum: {
        TransferInto: '(AccountId, Balance, Remark)',
        Opaque: 'Vec<u8>'
      }
    },
    GlobalValidationSchedule: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      blockNumber: 'BlockNumber'
    },
    HeadData: 'Bytes',
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
    NewBidder: {
      who: 'AccountId',
      sub: 'SubId'
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
    RelayChainBlockNumber: 'BlockNumber',
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
    UpwardMessage: {
      origin: 'ParachainDispatchOrigin',
      data: 'Vec<u8>'
    },
    ValidationFunctionParams: {
      maxCodeSize: 'u32',
      relayChainHeight: 'RelayChainBlockNumber',
      codeUpgradeAllowed: 'Option<RelayChainBlockNumber>'
    },
    ValidationCode: 'Bytes',
    ValidatorSignature: 'Signature',
    ValidityAttestation: {
      _enum: {
        Never: 'Null', // starts at 1
        Implicit: 'ValidatorSignature',
        Explicit: 'ValidatorSignature'
      }
    },
    WinningData: `[WinningDataEntry; ${SLOT_RANGE_COUNT}]`,
    WinningDataEntry: 'Option<Bidder>'
  }
} as Definitions;
