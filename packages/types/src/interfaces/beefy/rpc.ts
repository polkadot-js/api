// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types/index.js';

export const rpc: DefinitionsRpc = {
  getFinalizedHead: {
    description: 'Returns hash of the latest BEEFY finalized block as seen by this client.',
    params: [],
    type: 'H256'
  },
  subscribeJustifications: {
    description: 'Returns the block most recently finalized by BEEFY, alongside its justification.',
    params: [],
    pubsub: [
      'justifications',
      'subscribeJustifications',
      'unsubscribeJustifications'
    ],
    type: 'BeefyVersionedFinalityProof'
  }
};
