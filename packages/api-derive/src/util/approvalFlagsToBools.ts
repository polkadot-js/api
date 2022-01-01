// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@polkadot/types';
import type { ApprovalFlag } from '@polkadot/types/interfaces/elections';

/** @internal */
export function approvalFlagsToBools (flags: Vec<ApprovalFlag> | ApprovalFlag[]): boolean[] {
  const bools: boolean[] = [];

  for (let i = 0; i < flags.length; i++) {
    const str = flags[i].toString(2);

    // read from lowest bit to highest
    for (const bit of str.split('').reverse()) {
      bools.push(!!parseInt(bit, 10));
    }
  }

  // slice off trailing "false" values, as in substrate
  const lastApproval = bools.lastIndexOf(true);

  return lastApproval >= 0
    ? bools.slice(0, lastApproval + 1)
    : [];
}
