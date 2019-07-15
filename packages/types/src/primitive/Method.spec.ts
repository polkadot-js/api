// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import Method from './Method';

describe('Method', (): void => {
  beforeEach((): void => {
    Method.injectMethods(extrinsics);
  });

  it('handles decoding correctly (bare)', (): void => {
    expect(
      new Method({
        args: [],
        callIndex: [5, 1] // balances.setBalance
      }).toU8a()
    ).toEqual(new Uint8Array([5, 1, 0, 0, 0]));
  });

  it('handles creation from a hex value properly', (): void => {
    expect(
      new Method('0x0501').toU8a()
    ).toEqual(new Uint8Array([5, 1, 0, 0, 0])); // balances.setBalance
  });

  describe('hasOrigin', (): void => {
    const test = {
      args: [],
      callIndex: [2, 2] // timestamp
    };

    it('is false with no arguments', (): void => {
      expect(
        new Method(test, { args: [] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', (): void => {
      expect(
        new Method(test, { args: [{ name: 'a', type: 'u32' }] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', (): void => {
      expect(
        new Method(test, { args: [{ name: 'a', type: 'Origin' }] } as any).hasOrigin
      ).toEqual(true);
    });
  });
});
