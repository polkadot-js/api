// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventRecord } from '@polkadot/types/interfaces';

import { SubmittableResult } from '../..';

// log all events for the transfers, calling done() when finalized
export const logEvents = (done: () => Record<string, unknown>): (r: SubmittableResult) => void =>
  ({ events, status }: SubmittableResult): void => {
    console.log('Transaction status:', status.type);

    if (status.isInBlock) {
      console.log('Completed at block hash', status.value.toHex());
      console.log('Events:');

      events.forEach(({ event: { data, method, section }, phase }: EventRecord): void => {
        console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
      });

      if (events.length) {
        done();
      }
    }
  };
