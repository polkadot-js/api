// Copyright 2017-2020 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

import createMethod from './create/method';

// NOTE order here is the same as in Rust, alphabetical below

const methods: RpcMethodOpt = {
  description: 'Retrieves the list of RPC methods that are exposed by the node',
  params: [],
  type: 'RpcMethods'
};

const section = 'rpc';

/**
 * @summary Calls to retrieve system info.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Retrieves information about the RPC endpoints',
  section,
  methods: {
    methods: createMethod(section, 'methods', methods)
  }
};
