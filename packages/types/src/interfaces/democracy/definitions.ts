// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

const AllConvictions = [
  // 0.1x votes, unlocked.
  'None',
  // 1x votes, locked for an enactment period following a successful vote.
  'Locked1x',
  // 2x votes, locked for 2x enactment periods following a successful vote.
  'Locked2x',
  // 3x votes, locked for 4x...
  'Locked3x',
  // 4x votes, locked for 8x...
  'Locked4x',
  // 5x votes, locked for 16x...
  'Locked5x',
  /// 6x votes, locked for 32x...
  'Locked6x'
];

export { AllConvictions };

export default {
  rpc: {},
  types: {
    AccountVote: {
      _enum: {
        Standard: 'AccountVoteStandard',
        Split: 'AccountVoteSplit'
      }
    },
    AccountVoteSplit: {
      aye: 'Balance',
      nay: 'Balance'
    },
    AccountVoteStandard: {
      vote: 'Vote',
      balance: 'Balance'
    },
    Conviction: {
      _enum: AllConvictions
    },
    Delegations: {
      votes: 'Balance',
      capital: 'Balance'
    },
    PreimageStatus: {
      _enum: {
        Missing: 'BlockNumber',
        Available: 'PreimageStatusAvailable'
      }
    },
    PreimageStatusAvailable: {
      data: 'Bytes',
      provider: 'AccountId',
      deposit: 'Balance',
      since: 'BlockNumber',
      expiry: 'Option<BlockNumber>'
    },
    PriorLock: '(BlockNumber, Balance)',
    PropIndex: 'u32',
    Proposal: 'Call',
    ProxyState: {
      Open: 'AccountId',
      Active: 'AccountId'
    },
    ReferendumIndex: 'u32',
    ReferendumInfoTo239: {
      end: 'BlockNumber',
      proposalHash: 'Hash',
      threshold: 'VoteThreshold',
      delay: 'BlockNumber'
    },
    ReferendumInfo: {
      _enum: {
        Ongoing: 'ReferendumStatus',
        Finished: 'ReferendumInfoFinished'
      }
    },
    ReferendumInfoFinished: {
      approved: 'bool',
      end: 'BlockNumber'
    },
    ReferendumStatus: {
      end: 'BlockNumber',
      proposalHash: 'Hash',
      threshold: 'VoteThreshold',
      delay: 'BlockNumber',
      tally: 'Tally'
    },
    Tally: {
      ayes: 'Balance',
      nays: 'Balance',
      turnout: 'Balance'
    },
    Voting: {
      _enum: {
        Direct: 'VotingDirect',
        Delegating: 'VotingDelegating'
      }
    },
    VotingDirect: {
      votes: 'Vec<VotingDirectVote>',
      delegations: 'Delegations',
      prior: 'PriorLock'
    },
    VotingDirectVote: '(ReferendumIndex, AccountVote)',
    VotingDelegating: {
      balance: 'Balance',
      target: 'AccountId',
      conviction: 'Conviction',
      delegations: 'Delegations',
      prior: 'PriorLock'
    }
  }
} as Definitions;
