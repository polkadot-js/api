// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Vector, ApprovalFlag } from '@polkadot/types';

export function approvalFlagToBool (flags: Vector<ApprovalFlag>): boolean[] {
  const bools: boolean[] = [];
  for (const flag of flags) {
    for (const bit of [...Array(flag.bitLength())].map((_, i): number => i)) {
      bools.push(!flag.toBn().uand((new BN(1)).shln(bit)).isZero());
    }
  }
  const lastApproval: number = bools.lastIndexOf(true);
  return lastApproval >= 0 ? bools.slice(0, lastApproval + 1) : [];
}
