// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  Metadata: [
    {
      methods: {
        metadata: {
          description: 'Returns the metadata of a runtime',
          params: [],
          type: 'OpaqueMetadata'
        }
      }
    }
  ]
};
