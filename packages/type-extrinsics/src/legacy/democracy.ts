// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Extrinsics, ExtrinsicLegacy$Sections } from '../types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const propose: CreateItemOptions = {
  description: 'Propose',
  params: [
    param('proposal', 'Proposal'),
    param('value', 'Balance')
  ],
  type: []
};

const second: CreateItemOptions = {
  description: 'Second',
  params: [
    param('proposal', 'PropIndex')
  ],
  type: []
};

const vote: CreateItemOptions = {
  description: 'Vote',
  params: [
    param('referendumIndex', 'ReferendumIndex'),
    param('vote', 'bool')
  ],
  type: []
};

const startReferendum: CreateItemOptions = {
  description: 'Start referendum',
  params: [
    param('proposal', 'Proposal'),
    param('voteThreshold', 'VoteThreshold')
  ],
  type: []
};

const cancelReferendum: CreateItemOptions = {
  description: 'Cancel referendum',
  params: [
    param('referendumIndex', 'ReferendumIndex')
  ],
  type: []
};

export default (name: ExtrinsicLegacy$Sections, index: number): Section<Extrinsics, any, any> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Democracy',
    public: {
      propose:
        createMethod('propose', 0)(propose),
      second:
        createMethod('second', 1)(second),
      vote:
        createMethod('vote', 2)(vote)
    },
    private: {
      startReferendum:
        createMethod('startReferendum', 0)(startReferendum),
      cancelReferendum:
        createMethod('cancelReferendum', 1)(cancelReferendum)
    }
  }));
