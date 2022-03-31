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
        type: 'InstantiateRequest'
      },
      {
        name: 'at',
        type: 'BlockHash',
        isHstoric: true,
        isOptional: true
      }
    ],
    type: 'ContractInstantiateResult'
  },
  uploadCode: {
    // The RPC here is terribly misnamed - somebody forgot how the RPCs
    // are actually done, ie. <module>_<camelCasedMethod>
    endpoint: 'contracts_upload_code',
    description: 'Upload new code without instantiating a contract from it',
    params: [
      {
        name: 'uploadRequest',
        type: 'CodeUploadRequest'
      },
      {
        name: 'at',
        type: 'BlockHash',
        isHstoric: true,
        isOptional: true
      }
    ],
    type: 'CodeUploadResult'
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
