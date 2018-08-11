// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const cooloffPeriod: CreateItemOptions = {
  description: 'The coolof period',
  key: 'cov:cooloff',
  params: [],
  type: 'BlockNumber'
};

const votingPeriod: CreateItemOptions = {
  description: 'The voting period',
  key: 'cov:period',
  params: [],
  type: 'BlockNumber'
};

const proposals: CreateItemOptions = {
  description: 'The current proposals',
  key: 'cov:prs',
  params: [],
  type: [['BlockNumber', 'Hash']]
};

const proposalOf: CreateItemOptions = {
  description: 'The proposal by hash',
  key: 'cov:pro',
  params: [
    param('hash', 'Hash')
  ],
  type: 'Proposal'
};

const proposalVoters: CreateItemOptions = {
  description: 'Voters on a proposal',
  key: 'cov:voters:',
  params: [
    param('hash', 'Hash')
  ],
  type: ['AccountId']
};

const councilVoteOf: CreateItemOptions = {
  description: 'Council votes on proposal',
  key: 'cov:vote:',
  params: [
    param('hash', 'Hash'),
    param('who', 'AccountId')
  ],
  type: 'bool'
};

const vetoedProposal: CreateItemOptions = {
  description: 'Council vetos on a proposal',
  key: 'cov:veto:',
  params: [
    param('hash', 'Hash')
  ],
  type: ['BlockNumber', 'AccountId']
};

export default (name: Storage$Sections): Section<Storages> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Council voting',
    public: {
      cooloffPeriod:
        createMethod('cooloffPeriod')(cooloffPeriod),
      votingPeriod:
        createMethod('votingPeriod')(votingPeriod),
      proposals:
        createMethod('proposals')(proposals),
      proposalOf:
        createMethod('proposalOf')(proposalOf),
      proposalVoters:
        createMethod('proposalVoters')(proposalVoters),
      councilVoteOf:
        createMethod('councilVoteOf')(councilVoteOf),
      vetoedProposal:
        createMethod('vetoedProposal')(vetoedProposal)
    }
  }));
