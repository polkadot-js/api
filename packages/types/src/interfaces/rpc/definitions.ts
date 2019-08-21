// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    ApiId: '[u8; 8]',
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
        Finalized: 'Hash',
        Usurped: 'Hash',
        Broadcast: 'Vec<Text>',
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
      peerId: 'Text'
    },
    PeerInfo: {
      peerId: 'Text',
      roles: 'Text',
      protocolVersion: 'u32',
      bestHash: 'Hash',
      bestNumber: 'BlockNumber'
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
};
