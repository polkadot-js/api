// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Extrinsics, Extrinsic$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const nominate: CreateItemOptions = {
  description: 'Nominate',
  params: [
    param('target', 'AccountId')
  ],
  type: []
};

const unnominate: CreateItemOptions = {
  description: 'Unnominate',
  params: [
    param('targetIndex', 'u32')
  ],
  type: []
};

const transfer: CreateItemOptions = {
  description: 'Transfer',
  params: [
    param('recipient', 'AccountId'),
    param('value', 'Balance')
  ],
  type: []
};

const stake: CreateItemOptions = {
  description: 'Stake',
  params: [],
  type: []
};

const unstake: CreateItemOptions = {
  description: 'Unstake',
  params: [
    param('position', 'u32')
  ],
  type: []
};

const setSessionsPerEra: CreateItemOptions = {
  description: 'Set sessions per era',
  params: [
    param('sessions', 'BlockNumber')
  ],
  type: []
};

const setBondingDuration: CreateItemOptions = {
  description: 'Set bonding duration',
  params: [
    param('duration', 'BlockNumber')
  ],
  type: []
};

const setValidatorCount: CreateItemOptions = {
  description: 'Set validator count',
  params: [
    param('count', 'u32')
  ],
  type: []
};

const forceNewEra: CreateItemOptions = {
  description: 'Force new era',
  params: [],
  type: []
};

export default (name: Extrinsic$Sections, index: number): Section<Extrinsics> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Staking',
    public: {
      transfer:
        createMethod('transfer', 0)(transfer),
      stake:
        createMethod('stake', 1)(stake),
      unstake:
        createMethod('unstake', 2)(unstake),
      nominate:
        createMethod('nominate', 3)(nominate),
      unnominate:
        createMethod('unnominate', 4)(unnominate)
    },
    private: {
      setSessionsPerEra:
        createMethod('setSessionsPerEra', 0)(setSessionsPerEra),
      setBondingDuration:
        createMethod('setBondingDuration', 1)(setBondingDuration),
      setValidatorCount:
        createMethod('setValidatorCount', 2)(setValidatorCount),
      forceNewEra:
        createMethod('forceNewEra', 3)(forceNewEra)
    }
  }));
