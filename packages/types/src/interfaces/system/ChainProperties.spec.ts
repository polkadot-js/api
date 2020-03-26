// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../../create';

describe('ChainProperties', (): void => {
  const registry = new TypeRegistry();

  it('decodes from a null value', (): void => {
    expect(
      [...registry.createType('ChainProperties', null).entries()]
    ).toEqual([]);
  });

  it('decodes from an actual object', (): void => {
    const { ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', {
      ss58Format: 2,
      tokenDecimals: 15,
      tokenSymbol: 'KSM'
    });

    expect(ss58Format.unwrap().eq(2)).toBe(true);
    expect(tokenDecimals.unwrap().eq(15)).toBe(true);
    expect(tokenSymbol.unwrap().eq('KSM')).toBe(true);
  });

  it('decodes from an object, flagged for non-existent ss58Format', (): void => {
    const { ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', { tokenSymbol: 'DEV' });

    expect(ss58Format.isNone).toBe(true);
    expect(tokenDecimals.isNone).toBe(true);
    expect(tokenSymbol.isSome).toBe(true);
  });
});
