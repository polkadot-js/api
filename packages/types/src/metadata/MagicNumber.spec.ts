// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '../create';
import { MAGIC_NUMBER, MagicNumber } from './MagicNumber';

describe('MagicNumber', (): void => {
  const registry = new TypeRegistry();

  it('succeeds when the magic number matches', (): void => {
    expect(
      () => new MagicNumber(registry, MAGIC_NUMBER)
    ).not.toThrow();
  });

  it('succeeds when the magic number is empty', (): void => {
    expect(
      () => new MagicNumber(registry)
    ).not.toThrow();
  });

  it('fails when the magic number mismatches', (): void => {
    expect(
      () => new MagicNumber(registry, 0x12345678)
    ).toThrow(/MagicNumber mismatch/);
  });
});
