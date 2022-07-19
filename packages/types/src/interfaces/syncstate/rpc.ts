// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types';

export const rpc: DefinitionsRpc = {
  genSyncSpec: {
    description: 'Returns the json-serialized chainspec running the node, with a sync state.',
    endpoint: 'sync_state_genSyncSpec',
    params: [
      {
        name: 'raw',
        type: 'bool'
      }
    ],
    type: 'Json'
  }
};
