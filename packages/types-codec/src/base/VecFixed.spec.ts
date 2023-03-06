// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '@polkadot/types';
import { Text, u16, VecFixed } from '@polkadot/types-codec';
import { stringToU8a } from '@polkadot/util';

describe('VecFixed', (): void => {
  const registry = new TypeRegistry();

  describe('construction', (): void => {
    it('constructs via empty', (): void => {
      expect(new VecFixed(registry, Text, 2).toHex()).toEqual('0x0000');
    });

    it('constructs via Uint8Array', (): void => {
      expect(new VecFixed(registry, Text, 2, new Uint8Array([0x00, 0x04, 0x31])).toHex()).toEqual('0x000431');
    });

    it('constructs via hex', (): void => {
      expect(new VecFixed(registry, u16, 2, '0x12345678').toHex()).toEqual('0x12345678');
    });

    it('decodes reusing instance inputs', (): void => {
      const foo = new Text(registry, 'bar');

      expect(
        (new VecFixed(registry, Text, 1, [foo]))[0]
      ).toBe(foo);
    });
  });

  describe('utils', (): void => {
    let test: VecFixed<Text>;

    beforeEach((): void => {
      test = new (VecFixed.with(Text, 5))(registry, ['1', '2', '3', undefined, '56']);
    });

    it('has a sane string types', (): void => {
      expect(test.toRawType()).toEqual('[Text;5]');
      expect(test.Type).toEqual('Text');
    });

    it('has a correct toHex', (): void => {
      // each entry length 1 << 2, char as hex (0x31 === `1`), one empty
      expect(test.toHex()).toEqual('0x04310432043300083536');
    });

    it('has empty Uint8Array when length is 0', (): void => {
      const test = new (VecFixed.with(Text, 0))(registry);

      expect(test.encodedLength).toEqual(0);
      expect(test.toU8a()).toEqual(new Uint8Array([]));
    });

    it('has equivalent to 1 Uint8Array when length is 1', (): void => {
      const test = new (VecFixed.with(Text, 1))(registry, ['hello']);

      expect(test.encodedLength).toEqual(1 + 5);
      expect(test.toU8a()).toEqual(new Uint8Array([20, 104, 101, 108, 108, 111]));
    });

    it('has a sane inspect', (): void => {
      expect(test.inspect()).toEqual({
        inner: [
          { outer: [new Uint8Array([1 << 2]), stringToU8a('1')] },
          { outer: [new Uint8Array([1 << 2]), stringToU8a('2')] },
          { outer: [new Uint8Array([1 << 2]), stringToU8a('3')] },
          { outer: [new Uint8Array([0])] },
          { outer: [new Uint8Array([2 << 2]), stringToU8a('56')] }
        ]
      });
    });
  });
});
