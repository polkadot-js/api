// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    localStorageSet: {
      description: 'Set offchain local storage under given key and prefix',
      params: [
        {
          name: 'kind',
          type: 'StorageKind'
        },
        {
          name: 'key',
          type: 'Bytes'
        },
        {
          name: 'value',
          type: 'Bytes'
        }
      ],
      type: 'Null'
    },
    localStorageGet: {
      description: 'Get offchain local storage under given key and prefix',
      params: [
        {
          name: 'kind',
          type: 'StorageKind'
        },
        {
          name: 'key',
          type: 'Bytes'
        }
      ],
      type: 'Option<Bytes>'
    }
  },
  types: {
    StorageKind: {
      _enum: ['__UNUSED', 'PERSISTENT', 'LOCAL']
    }
  }
} as Definitions;
