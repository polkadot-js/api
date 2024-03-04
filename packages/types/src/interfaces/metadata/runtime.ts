// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall, DefinitionsCallEntry } from '../../types/index.js';

const META_V1_TO_V2: DefinitionsCallEntry['methods'] = {
  metadata: {
    description: 'Returns the metadata of a runtime',
    params: [],
    type: 'OpaqueMetadata'
  }
};

export const runtime: DefinitionsCall = {
  Metadata: [
    {
      methods: {
        metadata_at_version: {
          description: 'Returns the metadata at a given version.',
          params: [
            {
              name: 'version',
              type: 'u32'
            }
          ],
          type: 'Option<OpaqueMetadata>'
        },
        metadata_versions: {
          description: 'Returns the supported metadata versions.',
          params: [],
          type: 'Vec<u32>'
        },
        ...META_V1_TO_V2
      },
      version: 2
    },
    {
      methods: {
        ...META_V1_TO_V2
      },
      version: 1
    }
  ]
};
