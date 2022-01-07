// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

const dmpQueue = {
  ConfigData: {
    maxIndividual: 'Weight'
  },
  MessageId: '[u8; 32]',
  OverweightIndex: 'u64',
  PageCounter: 'u32',
  PageIndexData: {
    beginUsed: 'PageCounter',
    endUsed: 'PageCounter',
    overweightCount: 'OverweightIndex'
  }
};

export default {
  rpc: {},
  types: dmpQueue
} as Definitions;
