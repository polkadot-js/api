// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    methods: {
      description: 'Retrieves the list of RPC methods that are exposed by the node',
      params: [],
      type: 'RpcMethods'
    }
  },
  types: {
    RpcMethods: {
      version: 'u32',
      methods: 'Vec<Text>'
    }
  }
} as Definitions;
