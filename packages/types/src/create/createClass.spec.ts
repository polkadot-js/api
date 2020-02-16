// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor } from '../types';

import { createClass, getTypeClass, TypeRegistry } from '.';

describe('createClass', (): void => {
  const registry = new TypeRegistry();

  it('should memoize from strings', (): void => {
    const a = createClass(registry, 'BabeWeight');
    const b = createClass(registry, 'BabeWeight');

    expect(a).toBe(b);
  });

  it('should return equivalents for Bytes & Vec<u8>', (): void => {
    const A = createClass(registry, 'Vec<u8>');
    const B = createClass(registry, 'Bytes');

    expect(new A(registry) instanceof B).toBe(true);
  });
});

describe('getTypeClass', (): void => {
  const registry = new TypeRegistry();

  it('does not allow invalid types', (): void => {
    expect(
      (): Constructor<Codec> => getTypeClass(registry, 'SomethingInvalid' as any)
    ).toThrow(/determine type/);
  });
});
