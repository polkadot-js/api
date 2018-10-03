// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MethodOpt, Section } from './types';

import createMethod from './create/method';
import createParam from './create/param';

const pendingExtrinsics: MethodOpt = {
  description: 'Returns all pending extrinsics, potentially grouped by sender',
  params: [],
  type: 'PendingExtrinsics'
};

const submitExtrinsic: MethodOpt = {
  isSigned: true,
  description: 'Submit a fully formatted extrinsic for block inclusion',
  params: [
    createParam('extrinsic', 'Bytes')
  ],
  type: 'Hash'
};

const section = 'author';

/**
 * @summary Methods to work with authors & contributors.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Authoring of network items',
  name: section,
  methods: {
    pendingExtrinsics: createMethod(section, 'pendingExtrinsics', pendingExtrinsics),
    submitExtrinsic: createMethod(section, 'submitExtrinsic', submitExtrinsic)
  }
} as Section;
