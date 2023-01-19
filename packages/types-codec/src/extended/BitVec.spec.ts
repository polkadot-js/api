// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { hexToU8a } from '@polkadot/util';

import { BitVec } from './';

// form Inclusion BitVec<lsb0, u8>
const TESTS = ['0x00', '0x0817', '0x0837', '0x087b', '0x0c33'];
const registry = new TypeRegistry();

describe('BitVec', (): void => {
  describe('decoding known', (): void => {
    TESTS.forEach((test): void => {
      describe(test, (): void => {
        const input = hexToU8a(test);
        const bitvec = new BitVec(registry, input);

        it('has the right encodedLength', (): void => {
          expect(
            bitvec.$encodedLength
          ).toEqual((test.length - 2) / 2);
        });

        it('re-encodes to the same input value', (): void => {
          expect(
            bitvec.toU8a()
          ).toEqual(input);
        });
      });
    });
  });

  describe('toHuman() ordering', (): void => {
    it('defaults to Lsb', (): void => {
      expect(
        new BitVec(registry, '0x0100010500').toHuman()
      ).toEqual('0b10000000_00000000_10000000_10100000_00000000');
    });

    it('can output to Msb', (): void => {
      expect(
        new BitVec(registry, '0x0100010500', true).toHuman()
      ).toEqual('0b00000001_00000000_00000001_00000101_00000000');
    });
  });

  it('has a sane inspect', (): void => {
    expect(
      new BitVec(registry, '0x0837').inspectU8a()
    ).toEqual({
      outer: [new Uint8Array([0]), new Uint8Array([0x08, 0x37])]
    });
  });
});
