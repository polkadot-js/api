// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hexToU8a } from '@polkadot/util';

import { TypeRegistry } from '../create';
import { BitVec } from './';

// form Inclusion BitVec<lsb0, u8>
const TESTS = ['0x00', '0x0817', '0x0837', '0x087b', '0x0c33'];
const registry = new TypeRegistry();

describe('BitVec', (): void => {
  TESTS.forEach((test): void => {
    describe(test, (): void => {
      const input = hexToU8a(test);

      it('has the right encodedLength', (): void => {
        expect(
          new BitVec(registry, input).encodedLength
        ).toEqual((test.length - 2) / 2);
      });

      // FIXME These do not align at all
      it.skip('re-encodes to the same input value', (): void => {
        expect(
          new BitVec(registry, input).toU8a()
        ).toEqual(input);
      });
    });
  });
});
