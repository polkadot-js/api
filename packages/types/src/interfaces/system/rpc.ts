// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// As per frontier

import type { DefinitionsRpc } from '../../types';

export const rpc: DefinitionsRpc = {
  accountNextIndex: {
    alias: ['account_nextIndex'],
    description: 'Retrieves the next accountIndex as available on the node',
    params: [
      {
        name: 'accountId',
        type: 'AccountId'
      }
    ],
    type: 'Index'
  },
  addLogFilter: {
    description: 'Adds the supplied directives to the current log filter',
    params: [
      {
        name: 'directives',
        type: 'Text'
      }
    ],
    type: 'Null'
  },
  addReservedPeer: {
    description: 'Adds a reserved peer',
    params: [
      {
        name: 'peer',
        type: 'Text'
      }
    ],
    type: 'Text'
  },
  chain: {
    description: 'Retrieves the chain',
    params: [],
    type: 'Text'
  },
  chainType: {
    description: 'Retrieves the chain type',
    params: [],
    type: 'ChainType'
  },
  dryRun: {
    alias: ['system_dryRunAt'],
    description: 'Dry run an extrinsic at a given block',
    params: [
      {
        name: 'extrinsic',
        type: 'Bytes'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'ApplyExtrinsicResult'
  },
  health: {
    description: 'Return health status of the node',
    noErrorLog: true,
    params: [],
    type: 'Health'
  },
  localListenAddresses: {
    description: 'The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example',
    params: [],
    type: 'Vec<Text>'
  },
  localPeerId: {
    description: 'Returns the base58-encoded PeerId of the node',
    params: [],
    type: 'Text'
  },
  name: {
    description: 'Retrieves the node name',
    params: [],
    type: 'Text'
  },
  networkState: {
    alias: ['system_unstable_networkState'],
    description: 'Returns current state of the network',
    params: [],
    type: 'NetworkState'
  },
  nodeRoles: {
    description: 'Returns the roles the node is running as',
    params: [],
    type: 'Vec<NodeRole>'
  },
  peers: {
    description: 'Returns the currently connected peers',
    params: [],
    type: 'Vec<PeerInfo>'
  },
  properties: {
    description: 'Get a custom set of properties as a JSON object, defined in the chain spec',
    params: [],
    type: 'ChainProperties'
  },
  removeReservedPeer: {
    description: 'Remove a reserved peer',
    params: [
      {
        name: 'peerId',
        type: 'Text'
      }
    ],
    type: 'Text'
  },
  reservedPeers: {
    description: 'Returns the list of reserved peers',
    params: [],
    type: 'Vec<Text>'
  },
  resetLogFilter: {
    description: 'Resets the log filter to Substrate defaults',
    params: [],
    type: 'Null'
  },
  syncState: {
    description: 'Returns the state of the syncing of the node',
    params: [],
    type: 'SyncState'
  },
  version: {
    description: 'Retrieves the version of the node',
    params: [],
    type: 'Text'
  }
};
