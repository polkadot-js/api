// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Base from './Base';

describe('Base', () => {
  it('has the contructor value on raw', () => {
    expect(new Base('foo-bar').raw).toEqual('foo-bar');
  });
});
