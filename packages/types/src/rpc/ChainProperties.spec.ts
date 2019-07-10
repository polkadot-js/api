// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ChainProperties from './ChainProperties';

describe('ChainProperties', (): void => {
  it('decodes from a null value', (): void => {
    expect(
      [...new ChainProperties(null).entries()]
    ).toEqual([]);
  });

  it('decodes from an actual object', (): void => {
    expect(
      [...new ChainProperties({
        decimals: 15,
        tokenSymbol: 'BBQ'
      }).entries()]
    ).toEqual([['decimals', 15], ['tokenSymbol', 'BBQ']]);
  });

  it('checks equality', (): void => {
    expect(
      new ChainProperties({
        decimals: 15,
        tokenSymbol: 'BBQ'
      }).eq([['tokenSymbol', 'BBQ'], ['decimals', 15]])
    ).toBe(true);
  });
});
