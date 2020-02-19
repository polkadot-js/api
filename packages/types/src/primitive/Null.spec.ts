// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create';
import Null from './Null';

describe('Null', (): void => {
  const registry = new TypeRegistry();

  it('compares against null', (): void => {
    expect(new Null(registry).eq(null)).toBe(true);
  });

  it('compares against Null', (): void => {
    expect(new Null(registry).eq(new Null(registry))).toBe(true);
  });

  it('compares against other (failed)', (): void => {
    expect(new Null(registry).eq()).toBe(false);
  });
});
