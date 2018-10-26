// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Coder from './index';

describe('encodeJson', () => {
  let coder: Coder;

  beforeEach(() => {
    coder = new Coder();
  });

  it('encodes a valid JsonRPC JSON string', () => {
    expect(
      coder.encodeJson('method', 'params')
    ).toEqual('{"id":1,"jsonrpc":"2.0","method":"method","params":"params"}');
  });
});
