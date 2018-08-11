// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const validators: CreateItemOptions = {
  description: 'Current validators',
  key: 'ses:val',
  params: [],
  type: ['AccountId']
};

const length: CreateItemOptions = {
  description: 'Current length of the session',
  key: 'ses:len',
  params: [],
  type: 'BlockNumber'
};

const currentIndex: CreateItemOptions = {
  description: 'Current index of the session',
  key: 'ses:ind',
  params: [],
  type: 'BlockNumber'
};

const currentStart: CreateItemOptions = {
  description: 'Timestamp when current session started',
  key: 'ses:current_start',
  params: [],
  type: 'Timestamp'
};

const brokenPercentLate: CreateItemOptions = {
  description: 'Percent by which the session must finish late before early-exit',
  key: 'ses:broken_percent_late',
  params: [],
  type: 'u64'
};

const forcingNewSession: CreateItemOptions = {
  description: 'New session is being forced is this entry exists',
  key: 'ses:forcing_new_session',
  params: [],
  type: 'bool'
};

const lastLengthChange: CreateItemOptions = {
  description: 'Block at which the session length last changed',
  key: 'ses:llc',
  params: [],
  type: 'BlockNumber'
};

const nextKeyFor: CreateItemOptions = {
  description: 'The next key for a given validator',
  key: 'ses:nxt:',
  params: [
    param('who', 'AccountId')
  ],
  type: 'SessionKey'
};

const nextLength: CreateItemOptions = {
  description: 'The next session length',
  key: 'ses:nln',
  params: [],
  type: 'BlockNumber'
};

export default (name: Storage$Sections): Section<Storages> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Session management information',
    public: {
      brokenPercentLate:
        createMethod('brokenPercentLate')(brokenPercentLate),
      currentIndex:
        createMethod('currentIndex')(currentIndex),
      currentStart:
        createMethod('currentStart')(currentStart),
      forcingNewSession:
        createMethod('forcingNewSession')(forcingNewSession),
      lastLengthChange:
        createMethod('lastLengthChange')(lastLengthChange),
      nextKeyFor:
        createMethod('nextKeyFor')(nextKeyFor),
      nextLength:
        createMethod('nextLength')(nextLength),
      length:
        createMethod('length')(length),
      validators:
        createMethod('validators')(validators)
    }
  }));
