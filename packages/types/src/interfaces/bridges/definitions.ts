// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    BridgedBlockHash: 'H256',
    BridgedBlockNumber: 'BlockNumber',
    BridgedHeader: 'Header',
    InitializationData: {
      header: 'Header',
      authorityList: 'AuthorityList',
      setId: 'SetId',
      isHalted: 'bool'
    },
    Id: '[u8; 4]',
    ChainId: 'Id',
    LaneId: 'Id',
    MessageNonce: 'u64',
    // Overrides what is in cumulus, however needed - needs an alias
    // MessageId: '(Id, u64)',
    MessageKey: {
      laneId: 'LaneId',
      nonce: 'MessageNonce'
    }
  }
} as Definitions;
