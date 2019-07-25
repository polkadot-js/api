// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import createType from '../../codec/createType';
import { injectDefinitions } from '..';

describe('ChainProperties', (): void => {
  beforeEach((): void => {
    injectDefinitions();
  });

  it('decodes from a null value', (): void => {
    expect(
      [...createType('ChainProperties', null).entries()]
    ).toEqual([]);
  });

  it('decodes from an actual object', (): void => {
    const { tokenDecimals, tokenSymbol } = createType('ChainProperties', {
      tokenDecimals: 15,
      tokenSymbol: 'BBQ'
    });

    expect(tokenDecimals.eq(15)).toBe(true);
    expect(tokenSymbol.eq('BBQ')).toBe(true);
  });
});
