// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

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
          type: 'ContractExecResult'
        },
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
              type: 'Bytes'
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
      }
    }
  ]
};
