// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, CreateItemOptionsMap, Section, SectionItems } from '@polkadot/params/types';
import { Interfaces, Interface$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const getBlock: CreateItemOptions = {
  description: 'Get header and body of a relay chain block',
  params: [
    param('hash', 'Hash')
  ],
  type: 'SignedBlock'
};

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
  subscribe: [
    'chain_subscribeNewHead',
    'chain_unsubscribeNewHead'
  ],
  params: [],
  type: 'Header'
};

const privateMethods: CreateItemOptionsMap = {};

const publicMethods: CreateItemOptionsMap = {
  getBlock, getHead, getHeader, newHead
};

export type PublicMethods = typeof publicMethods;
export type PrivateMethods = typeof privateMethods;

/**
 * @summary Methods to retrieve chain data.
 */
export default (name: Interface$Sections): Section<Interfaces, PrivateMethods, PublicMethods> =>
  createSection(name)((createMethod: CreateItems<Interfaces>) => ({
    description: 'Retrieval of chain data',
    public: Object.keys(publicMethods).reduce((result, key) => {
      result[key] = createMethod(key)(publicMethods[key]);

      return result;
    }, {} as SectionItems<Interfaces, PublicMethods>)
  }));
