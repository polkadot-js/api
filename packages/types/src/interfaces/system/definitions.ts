// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Definitions } from '../../types';

export default {
  rpc: {
    name: {
      description: 'Retrieves the node name',
      params: [],
      type: 'Text'
    },
    version: {
      description: 'Retrieves the version of the node',
      params: [],
      type: 'Text'
    },
    chain: {
      description: 'Retrieves the chain',
      params: [],
      type: 'Text'
    },
    properties: {
      description: 'Get a custom set of properties as a JSON object, defined in the chain spec',
      params: [],
      type: 'ChainProperties'
    },
    health: {
      description: 'Return health status of the node',
      params: [],
      type: 'Health'
    },
    peers: {
      description: 'Returns the currently connected peers',
      params: [],
      type: 'Vec<PeerInfo>'
    },
    networkState: {
      description: 'Returns current state of the network',
      params: [],
      type: 'NetworkState'
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
    nodeRoles: {
      description: 'Returns the roles the node is running as',
      params: [],
      type: 'Vec<NodeRole>'
    }
  },
  types: {
    AccountInfo: {
      nonce: 'Index',
      refcount: 'RefCount',
      data: 'AccountData'
    },
    ChainProperties: {
      ss58Format: 'Option<u8>',
      tokenDecimals: 'Option<u32>',
      tokenSymbol: 'Option<Text>'
    },
    DigestOf: 'Digest',
    DispatchError: {
      _enum: {
        Other: 'Null',
        CannotLookup: 'Null',
        BadOrigin: 'Null',
        Module: 'DispatchErrorModule'
      }
    },
    DispatchErrorModule: {
      index: 'u8',
      error: 'u8'
    },
    DispatchErrorTo198: {
      module: 'Option<u8>',
      error: 'u8'
    },
    DispatchResult: 'Result<(), DispatchError>',
    DispatchResultOf: 'DispatchResult',
    DispatchResultTo198: 'Result<(), Text>',
    Event: 'GenericEvent',
    EventId: '[u8; 2]',
    EventIndex: 'u32',
    EventRecord: {
      phase: 'Phase',
      event: 'Event',
      topics: 'Vec<Hash>'
    },
    EventRecordTo76: {
      phase: 'Phase',
      event: 'Event'
    },
    Health: {
      peers: 'u64',
      isSyncing: 'bool',
      shouldHavePeers: 'bool'
    },
    Key: 'Bytes',
    LastRuntimeUpgradeInfo: {
      specVersion: 'Compact<u32>',
      specName: 'Text'
    },
    NetworkState: {
      peerId: 'Text',
      listenedAddresses: 'Vec<Text>',
      externalAddresses: 'Vec<Text>',
      connectedPeers: 'HashMap<Text, Peer>',
      notConnectedPeers: 'HashMap<Text, NotConnectedPeer>',
      averageDownloadPerSec: 'u64',
      averageUploadPerSec: 'u64',
      peerset: 'NetworkStatePeerset'
    },
    NetworkStatePeerset: {
      messageQueue: 'u64',
      nodes: 'HashMap<Text, NetworkStatePeersetInfo>'
    },
    NetworkStatePeersetInfo: {
      connected: 'bool',
      reputation: 'u64'
    },
    NodeRole: {
      _enum: {
        Full: 'Null',
        LightClient: 'Null',
        Authority: 'Null',
        UnknownRole: 'u8'
      }
    },
    NotConnectedPeer: {
      knownAddresses: 'Vec<Text>',
      latestPingTime: 'Option<PeerPing>',
      versionString: 'Option<Text>'
    },
    Peer: {
      enabled: 'bool',
      endpoint: 'PeerEndpoint',
      knownAddresses: 'Vec<Text>',
      latestPingTime: 'PeerPing',
      open: 'bool',
      versionString: 'Text'
    },
    PeerEndpoint: {
      listening: 'PeerEndpointAddr'
    },
    PeerEndpointAddr: {
      _alias: {
        localAddr: 'local_addr',
        sendBackAddr: 'send_back_addr'
      },
      localAddr: 'Text',
      sendBackAddr: 'Text'
    },
    PeerPing: {
      nanos: 'u64',
      secs: 'u64'
    },
    PeerInfo: {
      peerId: 'Text',
      roles: 'Text',
      protocolVersion: 'u32',
      bestHash: 'Hash',
      bestNumber: 'BlockNumber'
    },
    Phase: {
      _enum: {
        ApplyExtrinsic: 'u32',
        Finalization: 'Null',
        Initialization: 'Null'
      }
    },
    RefCount: 'u8'
  }
} as Definitions;
