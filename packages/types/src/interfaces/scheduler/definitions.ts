// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    SchedulePeriod: '(BlockNumber, u32)',
    SchedulePriority: 'u8',
    Scheduled: {
      maybeId: 'Option<Bytes>',
      priority: 'SchedulePriority',
      call: 'Call',
      maybePeriodic: 'Option<SchedulePeriod>'
    },
    TaskAddress: '(BlockNumber, u32)'
  }
} as Definitions;
