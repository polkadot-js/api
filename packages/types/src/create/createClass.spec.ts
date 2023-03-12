// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node.d.ts" />

import { TypeDefInfo } from '@polkadot/types-create';

import { createClass, getTypeClass, TypeRegistry } from './index.js';

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

  it('warns on invalid types', (): void => {
    const spy = jest.spyOn(console, 'warn');
    const typeDef = { info: TypeDefInfo.Plain, type: 'ABC' };

    try {
      getTypeClass(registry, typeDef);
    } catch {
      // ignore
    }

    expect(spy).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      'Unable to resolve type ABC, it will fail on construction'
    );
  });
});
