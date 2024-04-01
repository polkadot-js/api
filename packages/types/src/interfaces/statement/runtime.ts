// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  ValidateStatement: [
    {
      methods: {
        valdate_statement: {
          description: 'Validate the statement.',
          params: [
            {
              name: 'source',
              type: 'StatementStoreStatementSource'
            },
            {
              name: 'statement',
              type: 'SpStatementStoreStatement'
            }
          ],
          type: 'Result<StatementStoreValidStatement, StatementStoreInvalidStatement>'
        }
      },
      version: 1
    }
  ]
};
