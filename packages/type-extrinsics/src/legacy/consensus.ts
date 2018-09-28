// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { ExtrinsicsLegacy as Extrinsics, ExtrinsicLegacy$Sections } from '../types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const reportMisbehavior: CreateItemOptions = {
  description: 'Report misbehavior',
  params: [
    param('report', 'MisbehaviorReport')
  ],
  type: []
};

const setCode: CreateItemOptions = {
  description: 'Set new code',
  params: [
    param('code', 'Code')
  ],
  type: []
};

const setStorage: CreateItemOptions = {
  description: 'Set storage entries',
  params: [
    param('entries', ['StorageKeyValue'])
  ],
  type: []
};

export default (name: ExtrinsicLegacy$Sections, index: number): Section<Extrinsics, any, any> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Consensus',
    public: {
      reportMisbehavior:
        createMethod('reportMisbehavior', 0)(reportMisbehavior)
    },
    private: {
      setCode:
        createMethod('setCode', 0)(setCode),
      setStorage:
        createMethod('setStorage', 1)(setStorage)
    }
  }));
