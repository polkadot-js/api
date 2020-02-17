// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { indent } from './formatting';

describe('formatting', () => {
  it('should indent correctly', () => {
    expect(indent(2)('foo')).toBe('  foo');
  });
});
