// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';

import MagicNumber, { MAGIC_NUMBER } from './MagicNumber';

describe('MagicNumber', (): void => {
  const registry = new TypeRegistry();

  it('succeeds when the magic number matches', (): void => {
    expect((): MagicNumber => new MagicNumber(registry, MAGIC_NUMBER)).not.toThrow();
  });

  it('fails when the magic number mismatches', (): void => {
    expect((): MagicNumber => new MagicNumber(registry, 0x12345)).toThrow(/MagicNumber/);
  });
});
