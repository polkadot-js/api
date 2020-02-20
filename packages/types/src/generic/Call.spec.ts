// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '@polkadot/metadata/Metadata';
import metadataStatic from '@polkadot/metadata/Metadata/static';

import { TypeRegistry } from '../create';
import Call from './Call';

const registry = new TypeRegistry();

// eslint-disable-next-line no-new
new Metadata(registry, metadataStatic);

describe('Call', (): void => {
  it('handles decoding correctly (bare)', (): void => {
    expect(
      new Call(registry, {
        args: [],
        callIndex: [6, 1] // balances.setBalance
      }).toU8a()
    ).toEqual(new Uint8Array([6, 1, 0, 0, 0]));
  });

  it('handles creation from a hex value properly', (): void => {
    expect(
      new Call(registry, '0x0601').toU8a()
    ).toEqual(new Uint8Array([6, 1, 0, 0, 0])); // balances.setBalance
  });

  describe('hasOrigin', (): void => {
    const test = {
      args: [],
      callIndex: [2, 2] // timestamp
    };

    it('is false with no arguments', (): void => {
      expect(
        new Call(registry, test, { args: [] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', (): void => {
      expect(
        new Call(registry, test, { args: [{ name: 'a', type: 'u32' }] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', (): void => {
      expect(
        new Call(registry, test, { args: [{ name: 'a', type: 'Origin' }] } as any).hasOrigin
      ).toEqual(true);
    });
  });
});
