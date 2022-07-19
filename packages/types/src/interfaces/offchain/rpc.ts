// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types';

export const rpc: DefinitionsRpc = {
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
  },
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
  }
};
