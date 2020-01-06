// Copyright 2017-2020 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

import createMethod from './create/method';
import createParam from './create/param';

// NOTE order here is the same as in Rust, alphabetical below

const call: RpcMethodOpt = {
  description: 'Executes a call to a contract',
  isOptional: true,
  params: [
    createParam('callRequest', 'ContractCallRequest'),
    createParam('at', 'BlockHash', { isOptional: true })
  ],
  type: 'ContractExecResult'
};

const getStorage: RpcMethodOpt = {
  description: 'Returns the value under a specified storage key in a contract',
  isOptional: true,
  params: [
    createParam('address', 'AccountId'),
    createParam('key', 'H256'),
    createParam('at', 'BlockHash', { isOptional: true })
  ],
  type: 'Option<Bytes>'
};

const section = 'contracts';

/**
 * @summary Calls to retrieve system info.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: '(Optional) Methods that performs actions on contracts',
  section,
  methods: {
    call: createMethod(section, 'call', call),
    getStorage: createMethod(section, 'getStorage', getStorage)
  }
};
