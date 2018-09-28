// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { ExtrinsicsLegacy as Extrinsics, ExtrinsicLegacy$Sections } from '../types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const propose: CreateItemOptions = {
  description: 'Propose',
  params: [
    param('proposal', 'Proposal')
  ],
  type: []
};

const vote: CreateItemOptions = {
  description: 'Vote',
  params: [
    param('proposal', 'Hash'),
    param('approve', 'bool')
  ],
  type: []
};

const veto: CreateItemOptions = {
  description: 'Veto',
  params: [
    param('proposal', 'Hash')
  ],
  type: []
};

const setCooloffPeriod: CreateItemOptions = {
  description: 'Set cooloff period',
  params: [
    param('blocks', 'BlockNumber')
  ],
  type: []
};

const setVotingPeriod: CreateItemOptions = {
  description: 'Set voting period',
  params: [
    param('blocks', 'BlockNumber')
  ],
  type: []
};

export default (name: ExtrinsicLegacy$Sections, index: number): Section<Extrinsics, any, any> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Council Voting',
    public: {
      propose:
        createMethod('propose', 0)(propose),
      vote:
        createMethod('vote', 1)(vote),
      veto:
        createMethod('veto', 2)(veto)
    },
    private: {
      setCooloffPeriod:
        createMethod('setCooloffPeriod', 0)(setCooloffPeriod),
      setVotingPeriod:
        createMethod('setVotingPeriod', 1)(setVotingPeriod)
    }
  }));
