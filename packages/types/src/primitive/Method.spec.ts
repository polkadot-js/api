// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@plugnet/extrinsics/static';

import Method from './Method';

describe('Method', () => {
  beforeEach(() => {
    Method.injectMethods(extrinsics);
  });

  it('handles decoding correctly (bare)', () => {
    expect(
      new Method({
        args: [],
        callIndex: [1, 2]
      }).toU8a()
    ).toEqual(new Uint8Array([1, 2, 0])); // array of 0
  });

  it('handles creation from a hex value properly', () => {
    expect(
      new Method('0x0102').toU8a()
    ).toEqual(new Uint8Array([1, 2, 0])); // array of 0 for consensus.noteOffline
  });

  describe('hasOrigin', () => {
    const test = {
      args: [],
      callIndex: [1, 2]
    };

    it('is false with no arguments', () => {
      expect(
        new Method(test, { args: [] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', () => {
      expect(
        new Method(test, { args: [{ name: 'a', type: 'u32' }] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', () => {
      expect(
        new Method(test, { args: [{ name: 'a', type: 'Origin' }] } as any).hasOrigin
      ).toEqual(true);
    });
  });
});
