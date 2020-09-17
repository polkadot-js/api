/* eslint-disable @typescript-eslint/camelcase */

export default {
  types: {
    VoteStage: {
      _enum: ['PreVoting', 'Commit', 'Voting', 'Completed']
    },
    VoteType: {
      _enum: ['Binary', 'MultiOption', 'RankedChoice']
    },
    TallyType: {
      _enum: ['OnePerson', 'OneCoin']
    },
    VoteOutcome: '[u8; 32]',
    Tally: 'Option<Vec<(VoteOutcome, u128)>>',
    VoteData: {
      initiator: 'AccountId',
      stage: 'VoteStage',
      vote_type: 'VoteType',
      tally_type: 'TallyType',
      is_commit_reveal: 'bool'
    },
    Commitments: 'Vec<(AccountId, VoteOutcome)>',
    Reveals: 'Vec<(AccountId, Vec<VoteOutcome>)>',
    VoteRecord: {
      id: 'u64',
      commitments: 'Commitments',
      reveals: 'Reveals',
      data: 'VoteData',
      outcomes: 'Vec<VoteOutcome>'
    }
  }
};
