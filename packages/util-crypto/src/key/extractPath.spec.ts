// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import keyExtractPath from './extractPath';

describe('keyExtractPath', () => {
  it('extracts properly from soft', () => {
    expect(
      keyExtractPath('/1')
    ).toEqual({
      parts: ['/1'],
      path: [
        { _isHard: false, _chainCode: Uint8Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) }
      ]
    });
  });

  it('extracts properly from hard', () => {
    expect(
      keyExtractPath('//1')
    ).toEqual({
      parts: ['//1'],
      path: [
        { _isHard: true, _chainCode: Uint8Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) }
      ]
    });
  });

  it('extracts properly from hard/soft', () => {
    expect(
      keyExtractPath('//1/2')
    ).toEqual({
      parts: ['//1', '/2'],
      path: [
        { _isHard: true, _chainCode: Uint8Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) },
        { _isHard: false, _chainCode: Uint8Array.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) }
      ]
    });
  });

  it('does not extract from invalid paths', () => {
    expect(
      () => keyExtractPath('1/2')
    ).toThrow(/does not match input/);
  });

  it('does not extract from invalid paths', () => {
    expect(
      () => keyExtractPath('hello')
    ).toThrow(/does not match input/);
  });
});
