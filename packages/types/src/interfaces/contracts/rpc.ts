// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types';

export const rpc: DefinitionsRpc = {
  call: {
    deprecated: 'Use the runtime interface `api.call.contractsApi.call` instead',
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
    deprecated: 'Use the runtime interface `api.call.contractsApi.getStorage` instead',
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
    deprecated: 'Use the runtime interface `api.call.contractsApi.instantiate` instead',
    description: 'Instantiate a new contract',
    params: [
      {
        name: 'request',
        type: 'InstantiateRequestV1'
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
    deprecated: 'Not available in newer versions of the contracts interfaces',
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
    deprecated: 'Use the runtime interface `api.call.contractsApi.uploadCode` instead',
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
