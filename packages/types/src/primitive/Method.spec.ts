// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

import Method from './Method';
import Metadata from '../Metadata';
import latestSubstrate from '../Metadata/v6/latest.substrate.v6.json';
import { FunctionMetadata } from '../Metadata/v6/Calls';

describe('Method', () => {
  beforeEach(() => {
    Method.injectMethods(extrinsics);
  });

  // FIXME susbtrate master does not currently expose the new system module calls in meta,
  // once it does the index here will change, so a different method would be refrerred to
  it('handles decoding correctly (bare)', () => {
    expect(
      new Method({
        args: [],
        callIndex: [3, 1] // balances.setBalance
      }).toU8a()
    ).toEqual(new Uint8Array([3, 1, 0, 0, 0]));
  });

  it('handles getting the function metadata', () => {
    const runtimeMetadata = new Metadata(latestSubstrate);

    expect(
      (Method.findByCallIndex(new Uint8Array([3,1]), runtimeMetadata) as any).method
    ).toEqual('setBalance');
  });

  it('handles creation from a hex value properly', () => {
    expect(
      new Method('0x0301').toU8a()
    ).toEqual(new Uint8Array([3, 1, 0, 0, 0])); // balances.setBalance
  });

  describe('hasOrigin', () => {
    const test = {
      args: [],
      callIndex: [2, 2] // timestamp
    };

    it('is false with no arguments', () => {
      expect(
        new Method(test, { meta: new FunctionMetadata({ args: [] }) }).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', () => {
      expect(
        new Method(test, { meta: new FunctionMetadata({ args: [{ name: 'a', type: 'u32' }] }) }).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', () => {
      expect(
        new Method(test, { meta: new FunctionMetadata({ args: [{ name: 'a', type: 'Origin' }] }) }).hasOrigin
      ).toEqual(true);
    });
  });
});
