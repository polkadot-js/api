// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry, createTypeUnsafe } from '../../create';

describe('CompactAssignments', (): void => {
  const registry = new TypeRegistry();
  const votes2 = [['5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', [['5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y', 123456]], '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty']];
  const test = registry.createType('CompactAssignments', {
    votes1: [['5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', [], '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty']],
    votes2
  });

  it('has a valid vote1 ([Type; <number>] equivalency)', (): void => {
    expect(test.votes1.toHex()).toEqual(
      createTypeUnsafe(registry, 'Vec<(AccountId, AccountId)>', [[
        ['5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty']
      ]]).toHex()
    );
  });

  it('hash valid vot2 (actual tuple values)', (): void => {
    expect(test.votes2.toHex()).toEqual(
      createTypeUnsafe(registry, 'Vec<(AccountId, [(AccountId, u128); 1], AccountId)>', [votes2]).toHex()
    );
  });

  it('has a proper decoded toHuman() available', (): void => {
    expect(test.votes2.toHuman()).toEqual([['5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', [['5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y', '123,456']], '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty']]);
  });
});
