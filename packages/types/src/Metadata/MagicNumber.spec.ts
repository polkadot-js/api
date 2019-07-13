// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MagicNumber, { MAGIC_NUMBER } from './MagicNumber';

describe('MagicNumber', (): void => {
  it('succeeds when the magic number matches', (): void => {
    expect((): MagicNumber => new MagicNumber(MAGIC_NUMBER)).not.toThrow();
  });

  it('fails when the magic number missmatches', (): void => {
    expect((): MagicNumber => new MagicNumber(0x12345)).toThrow(/MagicNumber/);
  });
});
