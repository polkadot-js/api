// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const authorityAt: CreateItemOptions = {
  description: 'Authority at a specific index',
  isUnhashed: true,
  key: ':auth:',
  params: [
    param('index', 'u32')
  ],
  type: 'AccountId'
};

const authorityCount: CreateItemOptions = {
  description: 'The number of authorities',
  isUnhashed: true,
  key: ':auth:len',
  params: [],
  type: 'u32'
};

const code: CreateItemOptions = {
  description: 'The current runtime code',
  isUnhashed: true,
  key: ':code',
  params: [],
  type: 'Code'
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Consensus',
    public: {
      authorityAt:
        createMethod('authorityAt')(authorityAt),
      authorityCount:
        createMethod('authorityCount')(authorityCount),
      code:
        createMethod('code')(code)
    }
  }));
