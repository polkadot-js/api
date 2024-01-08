// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '../create/index.js';

describe('ChainProperties', (): void => {
  const registry = new TypeRegistry();

  it('decodes from a null value (setting defaults)', (): void => {
    expect(
      [...registry.createType('ChainProperties', null).keys()]
    ).toEqual(['isEthereum', 'ss58Format', 'tokenDecimals', 'tokenSymbol']);
  });

  it('decodes from an actual JSON', (): void => {
    const { isEthereum, ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', JSON.parse('{"isEthereum":false,"ss58Format":2,"tokenDecimals":12,"tokenSymbol":"KSM"}'));

    expect(ss58Format.unwrap().eq(2)).toBe(true);
    expect(tokenDecimals.unwrap().eq([12])).toBe(true);
    expect(tokenSymbol.unwrap().eq(['KSM'])).toBe(true);
    expect(isEthereum.isFalse).toBe(true);
  });

  it('decodes from an actual object (multiple tokens)', (): void => {
    const { isEthereum, ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', {
      isEthereum: undefined,
      ss58Format: undefined,
      tokenDecimals: [10, 12],
      tokenSymbol: ['pDOT', 'pKSM']
    });

    expect(isEthereum.isFalse).toBe(true);
    expect(ss58Format.isNone).toBe(true);
    expect(tokenDecimals.unwrap().eq([10, 12])).toBe(true);
    expect(tokenSymbol.unwrap().eq(['pDOT', 'pKSM'])).toBe(true);
  });

  it('decodes from an object, flagged for non-existent ss58Format', (): void => {
    const { isEthereum, ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', { tokenSymbol: 'DEV' });

    expect(isEthereum.isFalse).toBe(true);
    expect(ss58Format.isNone).toBe(true);
    expect(tokenDecimals.isNone).toBe(true);
    expect(tokenSymbol.isSome).toBe(true);
  });

  it('decodes from a ChainProperties object', (): void => {
    const original = registry.createType('ChainProperties', {
      isEthereum: true,
      ss58Format: 2,
      tokenDecimals: 15,
      tokenSymbol: 'KSM'
    });
    const { isEthereum, ss58Format, tokenDecimals, tokenSymbol } = registry.createType('ChainProperties', original);

    expect(isEthereum.isTrue).toBe(true);
    expect(ss58Format.unwrap().eq(2)).toBe(true);
    expect(tokenDecimals.unwrap().eq([15])).toBe(true);
    expect(tokenSymbol.unwrap().eq(['KSM'])).toBe(true);
  });

  it('has a sane toHuman (single tokenDecimals)', (): void => {
    expect(
      registry.createType('ChainProperties', {
        isEthereum: false,
        ss58Format: 42,
        tokenDecimals: registry.createType('u32', 9),
        tokenSymbol: ['Unit', 'Aux1']
      }).toHuman()
    ).toEqual({
      isEthereum: false,
      ss58Format: '42',
      tokenDecimals: ['9'],
      tokenSymbol: ['Unit', 'Aux1']
    });
  });

  it('has a sane toHuman (multiple tokenDecimals)', (): void => {
    expect(
      registry.createType('ChainProperties', {
        isEthereum: false,
        ss58Format: 2,
        tokenDecimals: [registry.createType('u32', 12), 8],
        tokenSymbol: ['KSM', 'BTC']
      }).toHuman()
    ).toEqual({
      isEthereum: false,
      ss58Format: '2',
      tokenDecimals: ['12', '8'],
      tokenSymbol: ['KSM', 'BTC']
    });
  });
});
