// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    ProxyDefinition: {
      delegate: 'AccountId',
      proxyType: 'ProxyType',
      delay: 'BlockNumber'
    },
    ProxyType: {
      _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
    },
    ProxyAnnouncement: {
      real: 'AccountId',
      callHash: 'Hash',
      height: 'BlockNumber'
    }
  }
} as Definitions;
