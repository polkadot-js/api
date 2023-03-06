// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '@polkadot/types';
import { Null } from '@polkadot/types-codec';

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

  it('has no hash', (): void => {
    expect(
      () => new Null(registry).hash
    ).toThrow();
  });

  it('isEmpty', (): void => {
    expect(new Null(registry).isEmpty).toBe(true);
  });

  it('has an empty hex', (): void => {
    expect(new Null(registry).toHex()).toEqual('0x');
  });

  it('has a Null type', (): void => {
    expect(new Null(registry).toRawType()).toEqual('Null');
  });
});
