// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create';
import IdentityFields from './IdentityFields';

describe('IdentityFields', (): void => {
  const registry = new TypeRegistry();

  // it('has a custom u64 (64-bit) encodedLength', (): void => {
  //   expect(
  //     new IdentityFields(registry).encodedLength
  //   ).toEqual(8);
  // });

  // it('encodes a sample', (): void => {
  //   expect(
  //     new IdentityFields(registry, ['Display', 'Legal']).valueEncoded.eqn(1 + 2)
  //   ).toBe(true);
  // });

  // it('encodes to a valid u8a value', (): void => {
  //   expect(
  //     new IdentityFields(registry, ['Display', 'Legal']).toU8a()
  //   ).toEqual(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 3]));
  // });

  it('decodes from a u8a', (): void => {
    expect(
      new IdentityFields(registry, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1 + 2 + 64])).toHuman()
    ).toEqual(['Display', 'Legal', 'Image']);
  });
});
