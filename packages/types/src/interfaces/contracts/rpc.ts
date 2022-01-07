// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsRpc } from '../../types';

export default {
  call: {
    description: 'Executes a call to a contract',
    params: [
      {
        name: 'callRequest',
        type: 'ContractCallRequest'
      },
      {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }
    ],
    type: 'ContractExecResult'
  },
  instantiate: {
    description: 'Instantiate a new contract',
    params: [
      {
        name: 'request',
        type: 'ContractInstantiateRequest'
      },
      {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }
    ],
    type: 'ContractInstantiateResult'
  },
  getStorage: {
    description: 'Returns the value under a specified storage key in a contract',
    params: [
      {
        name: 'address',
        type: 'AccountId'
      },
      {
        name: 'key',
        type: 'H256'
      },
      {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }
    ],
    type: 'Option<Bytes>'
  },
  rentProjection: {
    description: 'Returns the projected time a given contract will be able to sustain paying its rent',
    params: [
      {
        name: 'address',
        type: 'AccountId'
      },
      {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }
    ],
    type: 'Option<BlockNumber>'
  }
} as DefinitionsRpc;
