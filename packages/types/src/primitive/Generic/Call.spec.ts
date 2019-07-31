// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import Call from './Call';
import Metadata from '../../Metadata';
import latestSubstrate from '../../Metadata/v7/latest.substrate.v7.json';

describe('Call', (): void => {
  beforeEach((): void => {
    Call.injectMethods(extrinsics);
  });

  it('handles decoding correctly (bare)', (): void => {
    expect(
      new Call({
        args: [],
        callIndex: [5, 1] // balances.setBalance
      }).toU8a()
    ).toEqual(new Uint8Array([5, 1, 0, 0, 0]));
  });

  it('handles getting the function metadata', (): void => {
    const runtimeMetadata = new Metadata(latestSubstrate);

    expect(
      (new Call(new Uint8Array([5, 1]), { meta: runtimeMetadata })).methodName
    ).toEqual('setBalance');
  });

  it('handles creation from a hex value properly', (): void => {
    expect(
      new Call('0x0501').toU8a()
    ).toEqual(new Uint8Array([5, 1, 0, 0, 0])); // balances.setBalance
  });

  // TODO test has to be rewritten by passing runtime metadata as second argument
  describe.skip('hasOrigin', (): void => {
    const test = {
      args: [],
      callIndex: [2, 2] // timestamp
    };

    it('is false with no arguments', (): void => {
      expect(
        new Call(test, { args: [] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', (): void => {
      expect(
        new Call(test, { args: [{ name: 'a', type: 'u32' }] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is true with first argument as Origin', (): void => {
      expect(
        new Call(test, { args: [{ name: 'a', type: 'Origin' }] } as any).hasOrigin
      ).toEqual(true);
    });
  });
});
