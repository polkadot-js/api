// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Extrinsics, ExtrinsicLegacy$Sections } from '../types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const set: CreateItemOptions = {
  description: 'Set timestamp',
  isHidden: true, // inherent
  params: [
    param('timestamp', 'Timestamp')
  ],
  type: []
};

export default (name: ExtrinsicLegacy$Sections, index: number): Section<Extrinsics, any, any> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Timestamp',
    public: {
      set:
        createMethod('set', 0)(set)
    },
    private: {}
  }));
