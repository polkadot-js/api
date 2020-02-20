// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create';
import Origin from './Origin';

describe('Origin', (): void => {
  const registry = new TypeRegistry();

  it('does not allow construction', (): void => {
    expect(
      (): Origin => new Origin(registry)
    ).toThrow(/placeholder/);
  });
});
