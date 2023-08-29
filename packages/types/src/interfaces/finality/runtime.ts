// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

// implemented by chains bridging into the relay, not the relay itself
const finalityV1 = {
  methods: {
    best_finalized: {
      description: 'Returns number and hash of the best finalized header known to the bridge module.',
      params: [],
      type: '(BlockNumber, Hash)'
    }
  },
  version: 1
};

export const runtime: DefinitionsCall = {
  KusamaFinalityApi: [finalityV1],
  PolkadotFinalityApi: [finalityV1],
  RococoFinalityApi: [finalityV1],
  WestendFinalityApi: [finalityV1]
};
