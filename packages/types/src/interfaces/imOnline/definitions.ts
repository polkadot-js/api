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
      authorityIndex: 'AuthIndex'
    },
    OpaqueMultiaddr: 'Bytes',
    OpaquePeerId: 'Bytes',
    OpaqueNetworkState: {
      peerId: 'OpaquePeerId',
      externalAddresses: 'Vec<OpaqueMultiaddr>'
    }
  }
};
