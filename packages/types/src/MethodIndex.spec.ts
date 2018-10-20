// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import MethodIndex from './MethodIndex';

describe('MethodIndex', () => {
  it('handles u8a encoding correctly', () => {
    expect(
      new MethodIndex([1, 2]).toU8a()
    ).toEqual(new Uint8Array([1, 2]));
  });

  it('provides access to section/method indexes', () => {
    const ci = new MethodIndex([1, 2]);

    expect(ci.methodIndex).toEqual(2);
    expect(ci.sectionIndex).toEqual(1);
  });
});
