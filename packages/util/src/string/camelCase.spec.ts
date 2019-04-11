// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { stringCamelCase } from '.';

describe('stringCamelCase', () => {
  it('works correctly', () => {
    expect(
      stringCamelCase('Snake_case')
    ).toBe('snakeCase');
  });
});
