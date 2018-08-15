// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const proposalCount: CreateItemOptions = {
  description: 'The number of (public) proposals that have been made so far',
  key: 'dem:ppc',
  params: [],
  type: 'PropIndex'
};

const proposals: CreateItemOptions = {
  description: 'The public proposals. Unsorted.',
  key: 'dem:pub',
  params: [],
  type: [['PropIndex', 'Proposal', 'AccountId']]
};

const depositOf: CreateItemOptions = {
  description: 'Those who have locked a deposit',
  key: 'dem:dep:',
  params: [
    param('index', 'PropIndex')
  ],
  type: ['Balance', ['AccountId']]
};

const launchPeriod: CreateItemOptions = {
  description: 'How often (in blocks) new public referenda are launched',
  key: 'dem:lau',
  params: [],
  type: 'BlockNumber'
};

const minimumDeposit: CreateItemOptions = {
  description: 'The minimum amount as a deposit for a public referendum',
  key: 'dem:min',
  params: [],
  type: 'Balance'
};

const votingPeriod: CreateItemOptions = {
  description: 'How often (in blocks) to check for new votes',
  key: 'dem:per',
  params: [],
  type: 'BlockNumber'
};

const referendumCount: CreateItemOptions = {
  description: 'The number of referendums started so far',
  key: 'dem:rco',
  params: [],
  type: 'ReferendumIndex'
};

const nextTally: CreateItemOptions = {
  description: 'The next referendum index that should be tallied',
  key: 'dem:nxt',
  params: [],
  type: 'ReferendumIndex'
};

const referendumInfoOf: CreateItemOptions = {
  description: 'Details for a specific referendum',
  key: 'dem:pro:',
  params: [
    param('referendum', 'ReferendumIndex')
  ],
  type: ['BlockNumber', 'Proposal', 'VoteThreshold']
};

const votersFor: CreateItemOptions = {
  description: 'Get the voters for the current proposal',
  key: 'dem:vtr:',
  params: [
    param('referendum', 'ReferendumIndex')
  ],
  type: ['AccountId']
};

const voteOf: CreateItemOptions = {
  description: 'Get the vote for Account',
  key: 'dem:vot:',
  params: [
    param('referendum', 'ReferendumIndex'),
    param('who', 'AccountId')
  ],
  type: 'bool'
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Democracy',
    public: {
      proposalCount:
        createMethod('proposalCount')(proposalCount),
      proposals:
        createMethod('proposals')(proposals),
      depositOf:
        createMethod('depositOf')(depositOf),
      launchPeriod:
        createMethod('launchPeriod')(launchPeriod),
      minimumDeposit:
        createMethod('minimumDeposit')(minimumDeposit),
      votingPeriod:
        createMethod('votingPeriod')(votingPeriod),
      referendumCount:
        createMethod('referendumCount')(referendumCount),
      nextTally:
        createMethod('nextTally')(nextTally),
      referendumInfoOf:
        createMethod('referendumInfoOf')(referendumInfoOf),
      votersFor:
        createMethod('votersFor')(votersFor),
      voteOf:
        createMethod('voteOf')(voteOf)
    }
  }));
