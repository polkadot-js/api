// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    AuthIndex: 'u32',
    AuthoritySignature: 'Signature',
    Heartbeat: {
      blockNumber: 'BlockNumber',
      networkState: 'OpaqueNetworkState',
      sessionIndex: 'SessionIndex',
      authorityId: 'AuthorityId'
    },
    OpaqueMultiaddr: 'Bytes',
    OpaquePeerId: 'Bytes',
    OpaqueNetworkState: {
      /// PeerId of the local node.
      peerId: 'OpaquePeerId',
      /// List of addresses the node knows it can be reached as.
      externalAddresses: 'Vec<OpaqueMultiaddr>'
    }
  }
};
