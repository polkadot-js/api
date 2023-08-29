// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionCall, DefinitionsCall } from '../../types/index.js';

const SHARED_V1_V2: Record<string, DefinitionCall> = {
  get_storage: {
    description: 'Query a given storage key in a given contract.',
    params: [
      {
        name: 'address',
        type: 'AccountId'
      },
      {
        name: 'key',
        type: 'Bytes'
      }
    ],
    type: 'Option<Bytes>'
  },
  upload_code: {
    description: 'Upload new code without instantiating a contract from it.',
    params: [
      {
        name: 'origin',
        type: 'AccountId'
      },
      {
        name: 'code',
        type: 'Bytes'
      },
      {
        name: 'storageDepositLimit',
        type: 'Option<Balance>'
      }
    ],
    type: 'CodeUploadResult'
  }
};

export const runtime: DefinitionsCall = {
  ContractsApi: [
    {
      methods: {
        call: {
          description: 'Perform a call from a specified account to a given contract.',
          params: [
            {
              name: 'origin',
              type: 'AccountId'
            },
            {
              name: 'dest',
              type: 'AccountId'
            },
            {
              name: 'value',
              type: 'Balance'
            },
            {
              name: 'gasLimit',
              type: 'Option<WeightV2>'
            },
            {
              name: 'storageDepositLimit',
              type: 'Option<Balance>'
            },
            {
              name: 'inputData',
              type: 'Vec<u8>'
            }
          ],
          type: 'ContractExecResult'
        },
        instantiate: {
          description: 'Instantiate a new contract.',
          params: [
            {
              name: 'origin',
              type: 'AccountId'
            },
            {
              name: 'value',
              type: 'Balance'
            },
            {
              name: 'gasLimit',
              type: 'Option<WeightV2>'
            },
            {
              name: 'storageDepositLimit',
              type: 'Option<Balance>'
            },
            {
              name: 'code',
              type: 'CodeSource'
            },
            {
              name: 'data',
              type: 'Bytes'
            },
            {
              name: 'salt',
              type: 'Bytes'
            }
          ],
          type: 'ContractInstantiateResult'
        },
        ...SHARED_V1_V2
      },
      version: 2
    },
    {
      methods: {
        call: {
          description: 'Perform a call from a specified account to a given contract.',
          params: [
            {
              name: 'origin',
              type: 'AccountId'
            },
            {
              name: 'dest',
              type: 'AccountId'
            },
            {
              name: 'value',
              type: 'Balance'
            },
            {
              name: 'gasLimit',
              type: 'u64'
            },
            {
              name: 'storageDepositLimit',
              type: 'Option<Balance>'
            },
            {
              name: 'inputData',
              type: 'Vec<u8>'
            }
          ],
          type: 'ContractExecResultU64'
        },
        instantiate: {
          description: 'Instantiate a new contract.',
          params: [
            {
              name: 'origin',
              type: 'AccountId'
            },
            {
              name: 'value',
              type: 'Balance'
            },
            {
              name: 'gasLimit',
              type: 'u64'
            },
            {
              name: 'storageDepositLimit',
              type: 'Option<Balance>'
            },
            {
              name: 'code',
              type: 'CodeSource'
            },
            {
              name: 'data',
              type: 'Bytes'
            },
            {
              name: 'salt',
              type: 'Bytes'
            }
          ],
          type: 'ContractInstantiateResultU64'
        },
        ...SHARED_V1_V2
      },
      version: 1
    }
  ]
};
