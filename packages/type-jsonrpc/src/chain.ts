// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Interfaces, Interface$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const getHead: CreateItemOptions = {
  description: 'Retrieves the best headerHash',
  params: [],
  type: 'Hash'
};

const getHeader: CreateItemOptions = {
  description: 'Retrieves the header for a specific block',
  params: [
    param('hash', 'Hash')
  ],
  type: 'Header'
};

const newHead: CreateItemOptions = {
  description: 'Retrieves the best header via subscription',
  isSubscription: true,
  params: [],
  type: 'Header'
};

/**
 * @summary Methods to retrieve chain data.
 */
export default (name: Interface$Sections): Section<Interfaces> =>
  createSection(name)((createMethod: CreateItems<Interfaces>) => ({
    description: 'Retrieval of chain data',
    public: {
      getHead:
        createMethod('getHead')(getHead),
      getHeader:
        createMethod('getHeader')(getHeader),
      newHead:
        createMethod('newHead')(newHead)
    }
  }));
