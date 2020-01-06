// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApprovalFlag } from '@polkadot/types/interfaces';

import { createType, TypeRegistry } from '@polkadot/types';

import { approvalFlagsToBools } from './approvalFlagsToBools';

describe('approvalFlagsToBools', (): void => {
  const registry = new TypeRegistry();

  it('translates and empty array to empty', (): void => {
    expect(
      approvalFlagsToBools([] as ApprovalFlag[])
    ).toEqual([]);
  });

  it('translates a single input', (): void => {
    expect(
      approvalFlagsToBools([
        createType(registry, 'ApprovalFlag', 0b1010)
      ])
    ).toEqual([false, true, false, true]);
  });

  it('translates multiple inputs', (): void => {
    expect(
      approvalFlagsToBools([
        createType(registry, 'ApprovalFlag', 0b0000),
        createType(registry, 'ApprovalFlag', 0b1100)
      ])
    ).toEqual([false, false, false, true, true]);
  });
});
