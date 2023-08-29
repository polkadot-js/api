// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  // https://github.com/open-web3-stack/open-runtime-module-library/blob/b57f88b39cd547e2fb51727d8bb9bcc64fddf8b5/oracle/rpc/runtime-api/src/lib.rs#L12-L21
  OracleApi: [
    {
      methods: {
        get_all_values: {
          description: 'Retrieves all values',
          params: [
            {
              name: 'providerId',
              // This is a Codec type
              type: 'Raw'
            }
          ],
          // This won't actually work as expected - since we have
          // no information about the actual Raw sizes, we cannot
          // handle it in this format (it would need an override
          // for the specific Codec). So return the Raw value.
          // type: 'Vec<(Raw, Option<Raw>)>'
          type: 'Raw'
        },
        get_value: {
          description: 'Retrieves a single value',
          params: [
            {
              name: 'providerId',
              // This is a Codec type
              type: 'Raw'
            },
            {
              name: 'key',
              // This is a Codec type
              type: 'Raw'
            }
          ],
          // This is an Option<Codec> type
          type: 'Option<Raw>'
        }
      },
      version: 1
    }
  ]
};
