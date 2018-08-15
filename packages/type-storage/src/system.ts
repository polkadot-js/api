// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const accountIndexOf: CreateItemOptions = {
  description: 'The index of the given account',
  key: 'sys:non',
  params: [
    param('who', 'AccountId')
  ],
  type: 'AccountIndex'
};

const blockHashAt: CreateItemOptions = {
  description: 'The blockHash for a specific number',
  key: 'sys:old',
  params: [
    param('blockNumber', 'BlockNumber')
  ],
  type: 'Hash'
};

const extrinsicIndex: CreateItemOptions = {
  description: 'The extrinsics index',
  key: 'sys:xti',
  params: [],
  type: 'u32'
};

const extrinsicData: CreateItemOptions = {
  description: 'The data associated with an extrinsic',
  key: 'sys:xtd',
  params: [
    param('extrinsic', 'u32')
  ],
  type: 'Bytes'
};

const blockNumber: CreateItemOptions = {
  description: 'The current block number being processed',
  key: 'sys:num',
  params: [],
  type: 'BlockNumber'
};

const parentHash: CreateItemOptions = {
  description: 'The parentHash for the current block',
  key: 'sys:pha',
  params: [],
  type: 'Hash'
};

const extrinsicsRoot: CreateItemOptions = {
  description: 'The extrinsicsRoot for the current block',
  key: 'sys:txr',
  params: [],
  type: 'Hash'
};

const digest: CreateItemOptions = {
  description: 'The digest for the current block',
  key: 'sys:dig',
  params: [],
  type: 'Digest'
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'System',
    public: {
      blockHashAt:
        createMethod('blockHashAt')(blockHashAt),
      blockNumber:
        createMethod('blockNumber')(blockNumber),
      digest:
        createMethod('digest')(digest),
      extrinsicData:
        createMethod('extrinsicData')(extrinsicData),
      extrinsicIndex:
        createMethod('extrinsicIndex')(extrinsicIndex),
      extrinsicsRoot:
        createMethod('extrinsicsRoot')(extrinsicsRoot),
      accountIndexOf:
        createMethod('accountIndexOf')(accountIndexOf),
      parentHash:
        createMethod('parentHash')(parentHash)
    }
  }));
