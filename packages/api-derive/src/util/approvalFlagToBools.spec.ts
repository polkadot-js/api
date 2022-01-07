// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApprovalFlag } from '@polkadot/types/interfaces';

import { TypeRegistry } from '@polkadot/types/create';

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
        registry.createType('ApprovalFlag', 0b1010)
      ])
    ).toEqual([false, true, false, true]);
  });

  it('translates multiple inputs', (): void => {
    expect(
      approvalFlagsToBools([
        registry.createType('ApprovalFlag', 0b0000),
        registry.createType('ApprovalFlag', 0b1100)
      ])
    ).toEqual([false, false, false, true, true]);
  });
});
