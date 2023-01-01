// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';

describe('ChainProperties', (): void => {
  const registry = new TypeRegistry();

  it('decodes from a null value (setting defaults)', (): void => {
    expect(
      [...registry.createType('ChainProperties', null).keys()]
    ).toEqual(['ss58Format', 'tokenDecimals', 'tokenSymbol']);
  });

  it('decodes from an actual JSON', (): void => {
    const { ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', JSON.parse('{"ss58Format":2,"tokenDecimals":12,"tokenSymbol":"KSM"}'));

    expect(ss58Format.unwrap().eq(2)).toBe(true);
    expect(tokenDecimals.unwrap().eq([12])).toBe(true);
    expect(tokenSymbol.unwrap().eq(['KSM'])).toBe(true);
  });

  it('decodes from an actual object (multiple tokens)', (): void => {
    const { ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', {
      ss58Format: undefined,
      tokenDecimals: [10, 12],
      tokenSymbol: ['pDOT', 'pKSM']
    });

    expect(ss58Format.isNone).toBe(true);
    expect(tokenDecimals.unwrap().eq([10, 12])).toBe(true);
    expect(tokenSymbol.unwrap().eq(['pDOT', 'pKSM'])).toBe(true);
  });

  it('decodes from an object, flagged for non-existent ss58Format', (): void => {
    const { ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', { tokenSymbol: 'DEV' });

    expect(ss58Format.isNone).toBe(true);
    expect(tokenDecimals.isNone).toBe(true);
    expect(tokenSymbol.isSome).toBe(true);
  });

  it('decodes from a ChainProperties object', (): void => {
    const original = registry.createType('ChainProperties', {
      ss58Format: 2,
      tokenDecimals: 15,
      tokenSymbol: 'KSM'
    });
    const { ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', original);

    expect(ss58Format.unwrap().eq(2)).toBe(true);
    expect(tokenDecimals.unwrap().eq([15])).toBe(true);
    expect(tokenSymbol.unwrap().eq(['KSM'])).toBe(true);
  });

  it('has a sane toHuman', (): void => {
    expect(
      registry.createType('ChainProperties', {
        ss58Format: 42,
        tokenDecimals: registry.createType('u32', 9),
        tokenSymbol: ['Unit', 'Aux1']
      }).toHuman()
    ).toEqual({
      ss58Format: '42',
      tokenDecimals: ['9'],
      tokenSymbol: ['Unit', 'Aux1']
    });
  });

  it('has a sane toHuman', (): void => {
    expect(
      registry.createType('ChainProperties', {
        ss58Format: 2,
        tokenDecimals: [registry.createType('u32', 12), 8],
        tokenSymbol: ['KSM', 'BTC']
      }).toHuman()
    ).toEqual({
      ss58Format: '2',
      tokenDecimals: ['12', '8'],
      tokenSymbol: ['KSM', 'BTC']
    });
  });
});
