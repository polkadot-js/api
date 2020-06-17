// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApprovalFlag } from '@polkadot/types/interfaces/elections';

import { Vec } from '@polkadot/types';

/** @internal */
export function approvalFlagsToBools (flags: Vec<ApprovalFlag> | ApprovalFlag[]): boolean[] {
  const bools: boolean[] = [];

  flags.forEach((flag: ApprovalFlag): void => {
    const str = flag.toString(2);

    // read from lowest bit to highest
    for (const bit of str.split('').reverse()) {
      bools.push(!!parseInt(bit, 10));
    }
  });

  // slice off trailing "false" values, as in substrate
  const lastApproval: number = bools.lastIndexOf(true);

  return lastApproval >= 0 ? bools.slice(0, lastApproval + 1) : [];
}
