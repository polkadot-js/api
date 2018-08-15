// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const activeParachains: CreateItemOptions = {
  description: 'All registered parachains',
  key: 'para:chains',
  params: [],
  type: ['ParachainId']
};

const parachainCode: CreateItemOptions = {
  description: 'Gets the code for a specific parachain',
  key: 'para:code',
  params: [
    param('id', 'ParachainId')
  ],
  type: 'Code'
};

const parachainHeads: CreateItemOptions = {
  description: 'The heads of the parachains registered at present',
  key: 'para:head',
  params: [
    param('id', 'ParachainId')
  ],
  type: 'Bytes'
};

const didUpdate: CreateItemOptions = {
  description: 'Did the parachain heads get updated in this block',
  key: 'para:did',
  params: [],
  type: 'bool'
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Parachain related entries',
    public: {
      activeParachains:
        createMethod('activeParachains')(activeParachains),
      parachainCode:
        createMethod('parachainCode')(parachainCode),
      parachainHeads:
        createMethod('parachainHeads')(parachainHeads),
      didUpdate:
        createMethod('didUpdate')(didUpdate)
    }
  }));
