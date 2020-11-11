// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import { DoNotConstruct } from '.';

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
