// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '@polkadot/types';
import { F32, F64 } from '@polkadot/types-codec';

describe('Float', (): void => {
  const registry = new TypeRegistry();

  describe('F32', (): void => {
    it('has a sane toRawType()', (): void => {
      expect(
        new F32(registry).toRawType()
      ).toEqual('f32');
    });

    it('constructs from Uint8Array', (): void => {
      expect(
        new F32(registry, new Uint8Array([0, 0, 0, 128])).toNumber()
      ).toEqual(-0.0);
    });

    it('triggers isEmpty on 0', (): void => {
      expect(
        new F32(registry, 0).isEmpty
      ).toEqual(true);
    });

    it('constructs from a float value', (): void => {
      expect(
        new F32(registry, 123.456).toString()
      ).toEqual('123.456');
    });
  });

  describe('F64', (): void => {
    it('has a sane toRawType()', (): void => {
      expect(
        new F64(registry).toRawType()
      ).toEqual('f64');
    });

    it('constructs from hex', (): void => {
      expect(
        new F64(registry, '0x0000000000000080').toNumber()
      ).toEqual(-0.0);
    });
  });
});
