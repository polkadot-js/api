// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Definitions } from '../../types';

export default {
  rpc: {
    methods: {
      description: 'Retrieves the list of RPC methods that are exposed by the node',
      params: [],
      type: 'RpcMethods'
    }
  },
  types: {
    ApiId: '[u8; 8]',
    BlockHash: 'Hash',
    ChainProperties: {
      ss58Format: 'Option<u8>',
      tokenDecimals: 'Option<u32>',
      tokenSymbol: 'Option<Text>'
    },
    ExtrinsicOrHash: {
      _enum: {
        Hash: 'Hash',
        Extrinsic: 'Bytes'
      }
    },
    ExtrinsicStatus: {
      _enum: {
        Future: 'Null',
        Ready: 'Null',
        Broadcast: 'Vec<Text>',
        InBlock: 'Hash',
        Retracted: 'Hash',
        FinalityTimeout: 'Hash',
        Finalized: 'Hash',
        Usurped: 'Hash',
        Dropped: 'Null',
        Invalid: 'Null'
      }
    },
    Health: {
      peers: 'u64',
      isSyncing: 'bool',
      shouldHavePeers: 'bool'
    },
    KeyValueOption: '(StorageKey, Option<StorageData>)',
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
    Peer: {
      enabled: 'bool',
      endpoint: 'PeerEndpoint',
      knownAddresses: 'Vec<Text>',
      latestPingTime: 'PeerPing',
      open: 'bool',
      versionString: 'Text'
    },
    NotConnectedPeer: {
      knownAddresses: 'Vec<Text>',
      latestPingTime: 'Option<PeerPing>',
      versionString: 'Option<Text>'
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
    NetworkStatePeerset: {
      messageQueue: 'u64',
      nodes: 'HashMap<Text, NetworkStatePeersetInfo>'
    },
    NetworkStatePeersetInfo: {
      connected: 'bool',
      reputation: 'u64'
    },
    PeerInfo: {
      peerId: 'Text',
      roles: 'Text',
      protocolVersion: 'u32',
      bestHash: 'Hash',
      bestNumber: 'BlockNumber'
    },
    RpcMethods: {
      version: 'u32',
      methods: 'Vec<Text>'
    },
    RuntimeDispatchInfo: {
      weight: 'Weight',
      class: 'DispatchClass',
      partialFee: 'Balance'
    },
    RuntimeVersionApi: '(ApiId, u32)',
    RuntimeVersion: {
      specName: 'Text',
      implName: 'Text',
      authoringVersion: 'u32',
      specVersion: 'u32',
      implVersion: 'u32',
      apis: 'Vec<RuntimeVersionApi>'
    },
    StorageChangeSet: {
      block: 'Hash',
      changes: 'Vec<KeyValueOption>'
    }
  }
} as Definitions;
