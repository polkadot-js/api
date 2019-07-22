// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    AuctionIndex: 'u32',
    CollatorSignature: 'Signature',
    AvailabilityVote: '(SessionKey, CollatorSignature)',
    ValidityAttestation: {
      _enum: {
        // This Null is not in the original, however indexes start at 1, so add a
        // placeholder in the first position (which is basically non-valid)
        None: 'Null',
        Implicit: 'CollatorSignature', // 1
        Explicit: 'CollatorSignature' // 2
      }
    },
    ParaId: 'u32',
    ParaIdOf: 'ParaId',
    ValidityVote: '(AccountId, ValidityAttestation)',
    BalanceUpload: '(AccountId, u64)',
    EgressQueueRoot: '(ParaId, Hash)',
    HeadData: 'Bytes',
    CandidateReceipt: {
      parachainIndex: 'ParaId',
      collator: 'AccountId',
      signature: 'CollatorSignature',
      headData: 'HeadData',
      balanceUploads: 'Vec<BalanceUpload>',
      egressQueueRoots: 'Vec<EgressQueueRoot>',
      fees: 'u64',
      blockDataHash: 'Hash'
    },
    AttestedCandidate: {
      candidate: 'CandidateReceipt',
      validityVotes: 'Vec<ValidityVote>',
      availabilityVotes: 'Vec<AvailabilityVote>'
    },
    SubId: 'u32',
    NewBidder: {
      who: 'AccountId',
      sub: 'SubId'
    },
    Bidder: {
      _enum: {
        New: 'NewBidder',
        Existing: 'ParaId'
      }
    },
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
    ParachainDispatchOrigin: {
      _enum: [
        'Signed',
        'Parachain'
      ]
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
    UpwardMessage: {
      origin: 'ParachainDispatchOrigin',
      data: 'Bytes'
    },
    WinningDataEntry: '(AccountId, ParaIdOf, BalanceOf)',
    WinningData: '[WinningDataEntry; 10]'
  }
};
