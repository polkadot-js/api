// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    Period: '(BlockNumber, u32)',
    Priority: 'u8',
    SchedulePeriod: 'Period',
    SchedulePriority: 'Priority',
    Scheduled: {
      maybeId: 'Option<Bytes>',
      priority: 'SchedulePriority',
      call: 'Call',
      maybePeriodic: 'Option<SchedulePeriod>',
      origin: 'PalletsOrigin'
    },
    ScheduledTo254: {
      maybeId: 'Option<Bytes>',
      priority: 'SchedulePriority',
      call: 'Call',
      maybePeriodic: 'Option<SchedulePeriod>'
    },
    TaskAddress: '(BlockNumber, u32)'
  }
} as Definitions;
