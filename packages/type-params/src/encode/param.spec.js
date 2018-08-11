// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import encodeParam from './param';

describe('encodeParam', () => {
  it('encodes a single parameter', () => {
    expect(
      encodeParam({ type: 'Balance' }, 0)
    ).toEqual(new Uint8Array(16));
  });

  it('checks for array types with array values', () => {
    expect(
      () => encodeParam({ type: ['Balance'] }, 64)
    ).toThrow(/Expected array values/);
  });

  it('encodes array types with empty array values', () => {
    expect(
      encodeParam({ type: ['Balance'] }, [])
    ).toEqual(new Uint8Array(4));
  });

  it('encodes array types with actual array values', () => {
    expect(
      encodeParam({ type: ['Balance'] }, [3, 4])
    ).toEqual(
      new Uint8Array([
        2, 0, 0, 0,
        3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ])
    );
  });

  it('encodes tuple types with actual array values', () => {
    expect(
      encodeParam({ type: ['Balance', 'AccountIndex'] }, [3, 4])
    ).toEqual(
      new Uint8Array([
        2, 0, 0, 0,
        3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        4, 0, 0, 0
      ])
    );
  });
});
