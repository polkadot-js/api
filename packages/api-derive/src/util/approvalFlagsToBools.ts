// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@polkadot/types';
import type { ApprovalFlag } from '@polkadot/types/interfaces/elections';

/** @internal */
export function approvalFlagsToBools (flags: Vec<ApprovalFlag> | ApprovalFlag[]): boolean[] {
  const bools: boolean[] = [];

  flags.forEach((flag: ApprovalFlag): void => {
    const bits = flag.toString(2).split('').reverse();

    // read from lowest bit to highest
    for (let i = 0; i < bits.length; i++) {
      bools.push(!!parseInt(bits[i], 10));
    }
  });

  // slice off trailing "false" values, as in substrate
  const lastApproval = bools.lastIndexOf(true);

  return lastApproval >= 0
    ? bools.slice(0, lastApproval + 1)
    : [];
}
