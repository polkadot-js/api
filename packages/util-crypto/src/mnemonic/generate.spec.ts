// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import generate from './generate';
import validate from './validate';
import { cryptoWaitReady } from '..';

describe('mnemonicGenerate', () => {
  beforeEach(async () => {
    await cryptoWaitReady();
  });

  it('generates a valid mnemonic (default strength)', () => {
    const mnemonic = generate();

    console.error(mnemonic);

    expect(
      validate(mnemonic)
    ).toEqual(true);
  });

  [12, 15, 18, 21, 24].forEach((num) => {
    it(`generates a valid mnemonic (${num} words)`, () => {
      const mnemonic = generate(num as any);
      const isValid = validate(mnemonic);

      console.error(mnemonic);

      expect(mnemonic.split(' ')).toHaveLength(num);
      expect(isValid).toEqual(true);
    });
  });
});
