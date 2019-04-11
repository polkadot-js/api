// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import validate from './validate';
import { cryptoWaitReady } from '..';

describe('mnemonicValidate', () => {
  beforeEach(async () => {
    await cryptoWaitReady();
  });

  it('returns true on valid', () => {
    expect(
      validate('seed sock milk update focus rotate barely fade car face mechanic mercy')
    ).toEqual(true);
  });

  it('returns false on invalid', () => {
    expect(
      validate('wine photo extra cushion basket dwarf humor cloud truck job boat submit')
    ).toEqual(false);
  });
});
