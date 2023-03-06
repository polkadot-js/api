// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '@polkadot/types';
import { DoNotConstruct } from '@polkadot/types-codec';

describe('DoNotConstruct', (): void => {
  const registry = new TypeRegistry();

  it('does not allow construction', (): void => {
    expect(
      () => new (DoNotConstruct.with())(registry)
    ).toThrow(/Cannot construct unknown type DoNotConstruct/);
  });

  it('does not allow construction (with Name)', (): void => {
    expect(
      () => new (DoNotConstruct.with('Something'))(registry)
    ).toThrow(/Cannot construct unknown type Something/);
  });
});
