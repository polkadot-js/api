// Copyright 2017-2020 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

import createMethod from './create/method';
import createParam from './create/param';

// NOTE order here is the same as in Rust, alphabetical below

const nextIndex: RpcMethodOpt = {
  description: 'Retrieves the next accountIndex as available on the node',
  isOptional: true,
  params: [
    createParam('accountId', 'AccountId')
  ],
  type: 'Index'
};

const section = 'account';

/**
 * @summary Calls to account-specific information.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: '(Optional) Methods that retrieves account-specific information',
  section,
  methods: {
    nextIndex: createMethod(section, 'nextIndex', nextIndex)
  }
};
