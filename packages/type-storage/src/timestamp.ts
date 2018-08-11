// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import createSection from '@polkadot/params/section';

const now: CreateItemOptions = {
  description: 'The current timestamp',
  key: 'tim:val',
  params: [],
  type: 'Timestamp'
};

const blockPeriod: CreateItemOptions = {
  description: 'The minimum (and advised) period between blocks',
  key: 'tim:block_period',
  params: [],
  type: 'u64'
};

const didUpdate: CreateItemOptions = {
  description: 'Did the timestamp update in this block',
  key: 'tim:did',
  params: [],
  type: 'bool'
};

export default (name: Storage$Sections): Section<Storages> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Timestamp related entries',
    public: {
      blockPeriod:
        createMethod('blockPeriod')(blockPeriod),
      now:
        createMethod('now')(now),
      didUpdate:
        createMethod('didUpdate')(didUpdate)
    }
  }));
