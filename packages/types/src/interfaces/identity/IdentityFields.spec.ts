// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry, createType } from '../../create';

describe('IdentityFields', (): void => {
  const registry = new TypeRegistry();

  it('has a custom u64 (64-bit) encodedLength', (): void => {
    expect(
      createType(registry, 'IdentityFields').encodedLength
    ).toEqual(8);
  });

  it('encodes a sample', (): void => {
    expect(
      createType(registry, 'IdentityFields', ['Display', 'Legal']).valueEncoded.eqn(1 + 2)
    ).toBe(true);
  });

  it('encodes to a valid u8a value', (): void => {
    expect(
      createType(registry, 'IdentityFields', ['Display', 'Legal']).toU8a()
    ).toEqual(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 3]));
  });

  it('decodes from a u8a', (): void => {
    expect(
      createType(registry, 'IdentityFields', new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1 + 2 + 64])).toHuman()
    ).toEqual(['Display', 'Legal', 'Image']);
  });
});
