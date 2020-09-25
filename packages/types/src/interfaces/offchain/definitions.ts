// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
