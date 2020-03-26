// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AttestedCandidate: {
      candidate: 'CandidateReceipt',
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
    CandidateReceipt: {
      parachainIndex: 'ParaId',
      collator: 'CollatorId',
      signature: 'CollatorSignature',
      headData: 'HeadData',
      egressQueueRoots: 'Vec<(ParaId, Hash)>',
      fees: 'Balance',
      blockDataHash: 'Hash',
      upwardMessages: 'Vec<UpwardMessage>',
      erasureRoot: 'Hash'
    },
    CollatorId: 'H256',
    CollatorSignature: 'Signature',
    EgressQueueRoot: '(ParaId, Hash)',
    HeadData: 'Bytes',
    IncomingParachainDeploy: {
      code: 'Bytes',
      initialHeadData: 'Bytes'
    },
    IncomingParachainFixed: {
      codeHash: 'Hash',
      initialHeadData: 'Bytes'
    },
    IncomingParachain: {
      _enum: {
        Unset: 'NewBidder',
        Fixed: 'IncomingParachainFixed',
        Deploy: 'IncomingParachainDeploy'
      }
    },
    LeasePeriod: 'BlockNumber',
    LeasePeriodOf: 'LeasePeriod',
    NewBidder: {
      who: 'AccountId',
      sub: 'SubId'
    },
    ParaId: 'u32',
    ParaIdOf: 'ParaId',
    ParaInfo: {
      scheduling: 'ParaScheduling'
    },
    ParachainDispatchOrigin: {
      _enum: ['Signed', 'Parachain']
    },
    ParaScheduling: {
      _enum: ['Always', 'Dynamic']
    },
    Retriable: {
      _enum: {
        Never: 'Null',
        WithRetries: 'u32'
      }
    },
    SlotRange: {
      _enum: [
        'ZeroZero', // 0
        'ZeroOne', // 1,
        'ZeroTwo', // 2,
        'ZeroThree', // 3,
        'OneOne', // 4,
        'OneTwo', // 5,
        'OneThree', // 6,
        'TwoTwo', // 7,
        'TwoThree', // 8,
        'ThreeThree' // 9
      ]
    },
    SubId: 'u32',
    UpwardMessage: {
      origin: 'ParachainDispatchOrigin',
      data: 'Bytes'
    },
    ValidityAttestation: {
      _enum: {
        // This Null is not in the original, however indexes start at 1, so add a
        // placeholder in the first position (which is basically non-valid)
        None: 'Null',
        Implicit: 'CollatorSignature', // 1
        Explicit: 'CollatorSignature' // 2
      }
    },
    WinningDataEntry: '(AccountId, ParaIdOf, BalanceOf)',
    WinningData: '[WinningDataEntry; 10]'
  }
} as Definitions;
