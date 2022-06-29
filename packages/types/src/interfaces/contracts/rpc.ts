// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types';

export const rpc: DefinitionsRpc = {
  call: {
    description: 'Executes a call to a contract',
    params: [
      {
        name: 'callRequest',
        type: 'ContractCallRequest'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'ContractExecResult'
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
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Option<Bytes>'
  },
  instantiate: {
    description: 'Instantiate a new contract',
    params: [
      {
        name: 'request',
        type: 'InstantiateRequest'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'ContractInstantiateResult'
  },
  rentProjection: {
    description: 'Returns the projected time a given contract will be able to sustain paying its rent',
    params: [
      {
        name: 'address',
        type: 'AccountId'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'Option<BlockNumber>'
  },
  uploadCode: {
    description: 'Upload new code without instantiating a contract from it',
    // The RPC here is terribly misnamed - somebody forgot how the RPCs
    // are actually done, ie. <module>_<camelCasedMethod>
    endpoint: 'contracts_upload_code',
    params: [
      {
        name: 'uploadRequest',
        type: 'CodeUploadRequest'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'CodeUploadResult'
  }
};
