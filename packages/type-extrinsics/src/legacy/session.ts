// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { ExtrinsicsLegacy as Extrinsics, ExtrinsicLegacy$Sections } from '../types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const forceNewSession: CreateItemOptions = {
  description: 'Force new session',
  params: [],
  type: []
};

const noteOffline: CreateItemOptions = {
  description: 'Indicate offline validators',
  params: [
    param('indexes', ['u32'])
  ],
  type: []
};

const setKey: CreateItemOptions = {
  description: 'Set session key',
  params: [
    param('key', 'SessionKey')
  ],
  type: []
};

const setLength: CreateItemOptions = {
  description: 'Set session length',
  params: [
    param('length', 'u64')
  ],
  type: []
};

export default (name: ExtrinsicLegacy$Sections, index: number): Section<Extrinsics, any, any> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Session',
    public: {
      setKey:
        createMethod('setKey', 0)(setKey),
      noteOffline:
        createMethod('noteOffline', 1)(noteOffline)
    },
    private: {
      setLength:
        createMethod('setLength', 0)(setLength),
      forceNewSession:
        createMethod('forceNewSession', 1)(forceNewSession)
    }
  }));
