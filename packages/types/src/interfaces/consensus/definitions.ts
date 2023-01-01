// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    AuthorityId: 'AccountId',
    RawVRFOutput: '[u8; 32]'
  }
} as Definitions;
