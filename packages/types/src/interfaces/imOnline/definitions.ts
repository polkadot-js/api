// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AuthIndex: 'u32',
    AuthoritySignature: 'Signature',
    Heartbeat: {
      blockNumber: 'BlockNumber',
      networkState: 'OpaqueNetworkState',
      sessionIndex: 'SessionIndex',
      authorityIndex: 'AuthIndex',
      validatorsLen: 'u32'
    },
    HeartbeatTo244: {
      blockNumber: 'BlockNumber',
      networkState: 'OpaqueNetworkState',
      sessionIndex: 'SessionIndex',
      authorityIndex: 'AuthIndex'
    },
    OpaqueMultiaddr: 'Opaque<Bytes>',
    OpaquePeerId: 'Opaque<Bytes>',
    OpaqueNetworkState: {
      peerId: 'OpaquePeerId',
      externalAddresses: 'Vec<OpaqueMultiaddr>'
    }
  }
} as Definitions;
