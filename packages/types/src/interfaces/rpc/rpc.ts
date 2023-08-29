// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types/index.js';

export const rpc: DefinitionsRpc = {
  methods: {
    description: 'Retrieves the list of RPC methods that are exposed by the node',
    params: [],
    type: 'RpcMethods'
  }
};
