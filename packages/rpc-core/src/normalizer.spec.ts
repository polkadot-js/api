// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import normalizer from './normalizer';

describe('normalizer', (): void => {
  it('works when BigInt is in the data', (): void => {
    expect(
      normalizer('instance')({ a: 'bar', b: 1234567890987654321n, c: 123 })
    ).toEqual('instance{"a":"bar","b":"1234567890987654321","c":123}');
  });
});
