// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import normalizer from './normalizer';

describe('normalizer', (): void => {
  it('works when BigInt is in the data (object)', (): void => {
    expect(
      normalizer('instance')({ a: 'bar', b: 1234567890987654321n, c: 123 })
    ).toEqual('instance{"a":"bar","b":"1234567890987654321","c":123}');
  });

  it('works when BigInt is in the data (array)', (): void => {
    expect(
      normalizer('instance')(['bar', 1234567890987654321n, 123])
    ).toEqual('instance["bar","1234567890987654321",123]');
  });

  it('works when BigInt is in the data (single)', (): void => {
    expect(
      normalizer('instance')(1234567890987654321n)
    ).toEqual('instance"1234567890987654321"');
  });

  it('works when BigInt is in the data (nested)', (): void => {
    expect(
      normalizer('instance')({ a: 'bar', b: { foo: 1234567890987654321n }, c: 123 })
    ).toEqual('instance{"a":"bar","b":{"foo":"1234567890987654321"},"c":123}');
  });
});
