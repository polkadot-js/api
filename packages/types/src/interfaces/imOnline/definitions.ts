// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    OpaqueMultiaddr: 'Bytes',
    OpaquePeerId: 'Bytes',
    OpaqueNetworkState: {
      /// PeerId of the local node.
      peerId: 'OpaquePeerId',
      /// List of addresses the node knows it can be reached as.
      externalAddresses: 'Vec<OpaqueMultiaddr>'
    },
    Heartbeat: {
      blockNumber: 'BlockNumber',
      networkState: 'OpaqueNetworkState',
      sessionIndex: 'SessionIndex',
      authorityId: 'AuthorityId'
    }
  }
};
