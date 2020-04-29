// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry, createTypeUnsafe } from '../../create';

describe('CompactAssignments', (): void => {
  const registry = new TypeRegistry();
  const votes2 = [[1, [[2, 12345]], 3]];
  const test = registry.createType('CompactAssignments', {
    votes1: [[1, [], 3]],
    votes2
  });

  it('has a valid vote1 ([Type; <number>] equivalency)', (): void => {
    expect(test.votes1.toHex()).toEqual(
      createTypeUnsafe(registry, 'Vec<(u16, u32)>', [[
        [1, 3]
      ]]).toHex()
    );
  });

  it('hash valid vot2 (actual tuple values)', (): void => {
    expect(test.votes2.toHex()).toEqual(
      createTypeUnsafe(registry, 'Vec<(u16, [(u16, u16); 1], u32)>', [votes2]).toHex()
    );
  });

  it('has a proper decoded toHuman() available', (): void => {
    expect(test.votes2.toHuman()).toEqual([['1', [['2', '12,345']], '3']]);
  });
});
