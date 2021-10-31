// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@polkadot/types';
import type { EventRecord } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';

interface Changes {
  added: string[];
  blockHash: string;
  removed: string[];
}

export function extractContributed (paraId: string | number | BN, events: Vec<EventRecord>): Changes {
  const result: Changes = { added: [], blockHash: events.createdAtHash?.toHex() || '-', removed: [] };

  for (const { event: { data: [accountId, eventParaId], method, section } } of events) {
    if (section === 'crowdloan' && ['Contributed', 'Withdrew'].includes(method) && eventParaId.eq(paraId)) {
      if (method === 'Contributed') {
        result.added.push(accountId.toHex());
      } else {
        result.removed.push(accountId.toHex());
      }
    }
  }

  return result;
}
