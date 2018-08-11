// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Interfaces, Interface$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const submitExtrinsic: CreateItemOptions = {
  isSigned: true,
  description: 'Submit a fully formatted extrinsic for block inclusion',
  params: [
    param('extrinsic', 'Bytes')
  ],
  type: 'Hash'
};

/**
 * @summary Methods to work with authors & contributors.
 */
export default (name: Interface$Sections): Section<Interfaces> =>
  createSection(name)((createMethod: CreateItems<Interfaces>) => ({
    description: 'Authoring of network items',
    public: {
      submitExtrinsic:
        createMethod('submitExtrinsic')(submitExtrinsic)
    }
  }));
