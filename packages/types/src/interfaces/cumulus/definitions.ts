// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { runtime } from './runtime.js';

const dmpQueue = {
  CollationInfo: {
    upwardMessages: 'Vec<UpwardMessage>',
    horizontalMessages: 'Vec<OutboundHrmpMessage>',
    newValidationCode: 'Option<ValidationCode>',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'RelayBlockNumber',
    headData: 'HeadData'
  },
  CollationInfoV1: {
    upwardMessages: 'Vec<UpwardMessage>',
    horizontalMessages: 'Vec<OutboundHrmpMessage>',
    newValidationCode: 'Option<ValidationCode>',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'RelayBlockNumber'
  },
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
  runtime,
  types: dmpQueue
} as Definitions;
