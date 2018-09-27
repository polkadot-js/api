// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, CreateItemOptionsMap, Section, SectionItems } from '@polkadot/params/types';
import { Interfaces, Interface$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const pendingExtrinsics: CreateItemOptions = {
  description: 'Returns all pending extrinsics, potentially grouped by sender',
  params: [],
  type: 'PendingExtrinsics'
};

const submitExtrinsic: CreateItemOptions = {
  isSigned: true,
  description: 'Submit a fully formatted extrinsic for block inclusion',
  params: [
    param('extrinsic', 'Bytes')
  ],
  type: 'Hash'
};

const privateMethods: CreateItemOptionsMap = {};

const publicMethods: CreateItemOptionsMap = {
  pendingExtrinsics, submitExtrinsic
};

export type PrivateMethods = typeof privateMethods;
export type PublicMethods = typeof publicMethods;

/**
 * @summary Methods to work with authors & contributors.
 */
export default (name: Interface$Sections): Section<Interfaces, PrivateMethods, PublicMethods> =>
  createSection(name)((createMethod: CreateItems<Interfaces>) => ({
    description: 'Authoring of network items',
    public: Object.keys(publicMethods).reduce((result, key) => {
      result[key] = createMethod(key)(publicMethods[key]);

      return result;
    }, {} as SectionItems<Interfaces, PublicMethods>)
  }));
