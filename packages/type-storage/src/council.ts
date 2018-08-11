// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const candidacyBond: CreateItemOptions = {
  description: 'How much should be locked up in order to submit candidacy',
  key: 'cou:cbo',
  params: [],
  type: 'Balance'
};

const votingBond: CreateItemOptions = {
  description: 'How much should be locked up in order to be able to submit votes',
  key: 'cou:vbo',
  params: [],
  type: 'Balance'
};

const presentSlashPerVoter: CreateItemOptions = {
  description: 'The punishment, per voter, if you provide an invalid presentation',
  key: 'cou:pss',
  params: [],
  type: 'Balance'
};

const carryCount: CreateItemOptions = {
  description: 'How many runners-up should have their approvals persist until the next vote',
  key: 'cou:cco',
  params: [],
  type: 'u32'
};

const presentationDuration: CreateItemOptions = {
  description: 'How long to give each top candidate to present themselves after the vote ends',
  key: 'cou:pdu',
  params: [],
  type: 'BlockNumber'
};

const inactiveGracePeriod: CreateItemOptions = {
  description: 'How many votes need to go by after a last vote',
  key: 'cou:vgp',
  params: [],
  type: 'VoteIndex'
};

const votingPeriod: CreateItemOptions = {
  description: 'How often (in blocks) to check for new votes',
  key: 'cou:per',
  params: [],
  type: 'BlockNumber'
};

const termDuration: CreateItemOptions = {
  description: 'How long each position is active for',
  key: 'cou:trm',
  params: [],
  type: 'BlockNumber'
};

const desiredSeats: CreateItemOptions = {
  description: 'The number of desired seats',
  key: 'cou:sts',
  params: [],
  type: 'u32'
};

const activeCouncil: CreateItemOptions = {
  description: 'The current council',
  key: 'cou:act',
  params: [],
  type: [['AccountId', 'BlockNumber']]
};

const voteCount: CreateItemOptions = {
  description: 'The total number of votes that have happened or are in progress',
  key: 'cou:vco',
  params: [],
  type: 'VoteIndex'
};

const approvalsOf: CreateItemOptions = {
  description: 'The last cleared vote index that this voter was last active at',
  key: 'cou:apr',
  params: [
    param('who', 'AccountId')
  ],
  type: ['bool']
};

const registerInfoOf: CreateItemOptions = {
  description: 'The vote index and list slot that the candidate was registered',
  key: 'cou:reg',
  params: [
    param('who', 'AccountId')
  ],
  type: [['VoteIndex', 'u32']]
};

const lastActiveOf: CreateItemOptions = {
  description: 'The last cleared vote index that this voter was last active at',
  key: 'cou:lac',
  params: [
    param('who', 'AccountId')
  ],
  type: 'VoteIndex'
};

const voters: CreateItemOptions = {
  description: 'The present voter list',
  key: 'cou:vrs',
  params: [],
  type: ['AccountId']
};

const candidates: CreateItemOptions = {
  description: 'The present candidate lis',
  key: 'cou:can',
  params: [],
  type: ['AccountId']
};

const candidateCount: CreateItemOptions = {
  description: 'Number of candidates',
  key: 'cou:cnc',
  params: [],
  type: 'u32'
};

const nextFinalise: CreateItemOptions = {
  description: 'The accounts holding the seats that will become free',
  key: 'cou:nxt',
  params: [],
  type: ['BlockNumber', 'u32', ['AccountId']]
};

const snapshotedStakes: CreateItemOptions = {
  description: 'The balances',
  key: 'cou:sss',
  params: [],
  type: ['Balance']
};

const leaderboard: CreateItemOptions = {
  description: 'Get the leaderboard if we;re in the presentation phase',
  key: 'cou:win',
  params: [],
  type: [['Balance', 'AccountId']]
};

export default (name: keyof Storages): Section<Storages> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Council',
    public: {
      candidacyBond:
        createMethod('candidacyBond')(candidacyBond),
      votingBond:
        createMethod('votingBond')(votingBond),
      presentSlashPerVoter:
        createMethod('presentSlashPerVoter')(presentSlashPerVoter),
      carryCount:
        createMethod('carryCount')(carryCount),
      presentationDuration:
        createMethod('presentationDuration')(presentationDuration),
      inactiveGracePeriod:
        createMethod('inactiveGracePeriod')(inactiveGracePeriod),
      votingPeriod:
        createMethod('votingPeriod')(votingPeriod),
      termDuration:
        createMethod('termDuration')(termDuration),
      desiredSeats:
        createMethod('desiredSeats')(desiredSeats),
      activeCouncil:
        createMethod('activeCouncil')(activeCouncil),
      voteCount:
        createMethod('voteCount')(voteCount),
      approvalsOf:
        createMethod('approvalsOf')(approvalsOf),
      registerInfoOf:
        createMethod('registerInfoOf')(registerInfoOf),
      lastActiveOf:
        createMethod('lastActiveOf')(lastActiveOf),
      voters:
        createMethod('voters')(voters),
      candidateCount:
        createMethod('candidateCount')(candidateCount),
      candidates:
        createMethod('candidates')(candidates),
      nextFinalise:
        createMethod('nextFinalise')(nextFinalise),
      snapshotedStakes:
        createMethod('snapshotedStakes')(snapshotedStakes),
      leaderboard:
        createMethod('leaderboard')(leaderboard)
    }
  }));
