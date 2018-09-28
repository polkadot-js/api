// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { ExtrinsicsLegacy as Extrinsics, ExtrinsicLegacy$Sections } from '../types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const deregisterParachain: CreateItemOptions = {
  description: 'Deregister a parachain',
  params: [
    param('id', 'ParachainId')
  ],
  type: []
};

const registerParachain: CreateItemOptions = {
  description: 'Register a parachain',
  params: [
    param('id', 'ParachainId'),
    param('code', 'Code'),
    param('headData', 'Bytes')
  ],
  type: []
};

const setHeads: CreateItemOptions = {
  description: 'Sets parachain heads',
  isHidden: true, // inherent
  params: [
    param('heads', ['CandidateReceipt'])
  ],
  type: []
};

export default (name: ExtrinsicLegacy$Sections, index: number): Section<Extrinsics, any, any> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Parchains',
    public: {
      setHeads:
        createMethod('setHeads', 0)(setHeads)
    },
    private: {
      deregisterParachain:
        createMethod('deregisterParachain', 1)(deregisterParachain),
      registerParachain:
        createMethod('registerParachain', 0)(registerParachain)
    }
  }));
