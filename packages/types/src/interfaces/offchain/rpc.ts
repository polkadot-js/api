// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types/index.js';

export const rpc: DefinitionsRpc = {
  localStorageGet: {
    description: 'Get offchain local storage under given key and prefix',
    isUnsafe: true,
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
  },
  localStorageSet: {
    description: 'Set offchain local storage under given key and prefix',
    isUnsafe: true,
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
  }
};
