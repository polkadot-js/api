// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    nextIndex: {
      alias: ['system_accountNextIndex'],
      description: 'Retrieves the next accountIndex as available on the node',
      params: [
        {
          name: 'accountId',
          type: 'AccountId'
        }
      ],
      type: 'Index'
    }
  },
  types: {}
} as Definitions;
