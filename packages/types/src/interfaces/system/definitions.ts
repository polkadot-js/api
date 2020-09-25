// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
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
    dryRun: {
      alias: ['system_dryRunAt'],
      description: 'Dry run an extrinsic at a given block',
      params: [
        {
          name: 'extrinsic',
          type: 'Bytes'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'ApplyExtrinsicResult'
    },
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
    chainType: {
      description: 'Retrieves the chain type',
      params: [],
      type: 'ChainType'
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
    localPeerId: {
      description: 'Returns the base58-encoded PeerId of the node',
      params: [],
      type: 'Text'
    },
    localListenAddresses: {
      description: 'The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example',
      params: [],
      type: 'Vec<Text>'
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
    ApplyExtrinsicResult: 'Result<DispatchOutcome, TransactionValidityError>',
    ChainProperties: {
      ss58Format: 'Option<u8>',
      tokenDecimals: 'Option<u32>',
      tokenSymbol: 'Option<Text>'
    },
    ChainType: {
      _enum: {
        Development: 'Null',
        Local: 'Null',
        Live: 'Null',
        Custom: 'Text'
      }
    },
    DigestOf: 'Digest',
    DispatchClass: {
      _enum: ['Normal', 'Operational', 'Mandatory']
    },
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
    DispatchInfo: {
      weight: 'Weight',
      class: 'DispatchClass',
      paysFee: 'Pays'
    },
    DispatchInfoTo190: {
      weight: 'Weight',
      class: 'DispatchClass'
    },
    DispatchInfoTo244: {
      weight: 'Weight',
      class: 'DispatchClass',
      paysFee: 'bool'
    },
    DispatchOutcome: 'Result<(), DispatchError>',
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
    Health: {
      peers: 'u64',
      isSyncing: 'bool',
      shouldHavePeers: 'bool'
    },
    InvalidTransaction: {
      _enum: {
        Call: 'Null',
        Payment: 'Null',
        Future: 'Null',
        Stale: 'Null',
        BadProof: 'Null',
        AncientBirthBlock: 'Null',
        ExhaustsResources: 'Null',
        Custom: 'u8',
        BadMandatory: 'Null',
        MandatoryDispatch: 'Null'
      }
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
      reputation: 'i32'
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
    RefCount: 'u32',
    RefCountTo259: 'u8',
    TransactionValidityError: {
      _enum: {
        Invalid: 'InvalidTransaction',
        Unknown: 'UnknownTransaction'
      }
    },
    UnknownTransaction: {
      _enum: {
        CannotLookup: 'Null',
        NoUnsignedValidator: 'Null',
        Custom: 'u8'
      }
    }
  }
} as Definitions;
