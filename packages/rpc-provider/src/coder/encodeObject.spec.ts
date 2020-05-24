// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Coder from './';

describe('encodeObject', (): void => {
  let coder: Coder;

  beforeEach((): void => {
    coder = new Coder();
  });

  it('starts with id === 0 (nothing sent)', (): void => {
    expect(coder.getId()).toEqual(0);
  });

  it('encodes a valid JsonRPC object', (): void => {
    expect(
      coder.encodeObject('method', ['a', 'b'])
    ).toEqual({
      id: 1,
      jsonrpc: '2.0',
      method: 'method',
      params: ['a', 'b']
    });
    expect(coder.getId()).toEqual(1);
  });
});
