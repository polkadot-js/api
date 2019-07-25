// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    ApiId: '[u8; 8]',
    ChainProperties: {
      tokenDecimals: 'u32',
      tokenSymbol: 'Text'
    },
    Consensus: '(ConsensusEngineId, Bytes)',
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
    PreRuntime: '(ConsensusEngineId, Bytes)',
    RuntimeVersionApi: '(ApiId, u32)',
    RuntimeVersion: {
      specName: 'Text',
      implName: 'Text',
      authoringVersion: 'u32',
      specVersion: 'u32',
      implVersion: 'u32',
      apis: 'Vec<RuntimeVersionApi>'
    },
    SealV0: '(u64, Signature)',
    Seal: '(ConsensusEngineId, Bytes)',
    SignedBlock: {
      block: 'Block',
      justification: 'Justification'
    },
    StorageChangeSet: {
      block: 'Hash',
      changes: 'Vec<KeyValueOption>'
    }
  }
};
