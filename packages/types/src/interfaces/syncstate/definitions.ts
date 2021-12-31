// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {
    genSyncSpec: {
      endpoint: 'sync_state_genSyncSpec',
      description: 'Returns the json-serialized chainspec running the node, with a sync state.',
      params: [
        {
          name: 'raw',
          type: 'bool'
        }
      ],
      type: 'Json'
    }
  },
  types: {}
} as Definitions;
