// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import U8aFixed from './U8aFixed';

describe('U8aFixed', (): void => {
  const registry = new TypeRegistry();

  describe('construction', (): void => {
    it('allows empty values', (): void => {
      expect(
        new U8aFixed(registry).toHex()
      ).toEqual('0x0000000000000000000000000000000000000000000000000000000000000000');
    });

    it('allows construction via with', (): void => {
      expect(
        new (U8aFixed.with(64))(registry).bitLength()
      ).toEqual(64);
    });

    it('constructs from hex', (): void => {
      expect(
        new (U8aFixed.with(32))(registry, '0x01020304').toU8a()
      ).toEqual(
        new Uint8Array([0x01, 0x02, 0x03, 0x04])
      );
    });

    it('constructs from number[]', (): void => {
      expect(
        new (U8aFixed.with(32))(registry, [0x02, 0x03]).toU8a()
      ).toEqual(
        new Uint8Array([0x02, 0x03, 0x00, 0x00])
      );
    });
  });

  describe('utils', (): void => {
    let u8a: U8aFixed;

    beforeEach((): void => {
      u8a = new U8aFixed(registry, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 32);
    });

    it('limits the length', (): void => {
      expect(u8a.length).toEqual(4);
    });

    it('exposes the correct bitLength', (): void => {
      expect(u8a.bitLength()).toEqual(32);
    });

    it('allows wrapping of a pre-existing instance', (): void => {
      expect(
        u8a.toU8a()
      ).toEqual(new Uint8Array([1, 2, 3, 4]));
    });

    it('hash a sane toRawType', (): void => {
      expect(u8a.toRawType()).toEqual('[u8;4]');
    });
  });

  describe('static with', (): void => {
    it('allows default toRawType', (): void => {
      expect(
        new (U8aFixed.with(64))(registry).toRawType()
      ).toEqual('[u8;8]');
    });

    it('allows toRawType override', (): void => {
      expect(
        new (U8aFixed.with(64, 'SomethingElse'))(registry).toRawType()
      ).toEqual('SomethingElse');
    });
  });
});
