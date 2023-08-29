// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types/index.js';

export const rpc: DefinitionsRpc = {
  proveFinality: {
    description: 'Prove finality for the given block number, returning the Justification for the last block in the set.',
    params: [
      {
        name: 'blockNumber',
        type: 'BlockNumber'
      }
    ],
    type: 'Option<EncodedFinalityProofs>'
  },
  roundState: {
    description: 'Returns the state of the current best round state as well as the ongoing background rounds',
    params: [],
    type: 'ReportedRoundStates'
  },
  subscribeJustifications: {
    description: 'Subscribes to grandpa justifications',
    params: [],
    pubsub: [
      'justifications',
      'subscribeJustifications',
      'unsubscribeJustifications'
    ],
    type: 'JustificationNotification'
  }
};
