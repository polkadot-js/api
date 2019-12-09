// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType, TypeRegistry } from '../codec/create';
import Bytes from './Bytes';

describe('Bytes', (): void => {
  const registry = new TypeRegistry();
  const CODE = new Uint8Array([0x14, 0x3a, 0x63, 0x6f, 0x64, 0x65]);

  describe('construction', (): void => {
    it('decodes when input is string', (): void => {
      expect(
        new Bytes(registry, ':code').toU8a()
      ).toEqual(CODE);
    });

    it('decodes when hex is not length prefixed', (): void => {
      expect(
        new Bytes(registry, '0x3a636f6465').toU8a()
      ).toEqual(CODE);
    });

    it('decodes from UInt8Array', (): void => {
      expect(
        new Bytes(registry, CODE).toU8a()
      ).toEqual(CODE);
    });

    it('decodes from number[]', (): void => {
      expect(
        new Bytes(registry, [0x3a, 0x63, 0x6f, 0x64, 0x65]).toU8a()
      ).toEqual(CODE);
    });

    it('creates via storagedata (no prefix)', (): void => {
      expect(
        new Bytes(
          registry,
          createType(registry, 'StorageData', '0x3a636f6465')
        ).toU8a()
      ).toEqual(CODE);
    });

    it('encodes from itself', (): void => {
      expect(
        new Bytes(registry, new Bytes(registry, '0x3a636f6465')).toU8a()
      ).toEqual(CODE);
    });
  });
});
