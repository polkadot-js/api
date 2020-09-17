// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Coder from './';

describe('encodeJson', (): void => {
  let coder: Coder;

  beforeEach((): void => {
    coder = new Coder();
  });

  it('encodes a valid JsonRPC JSON string', (): void => {
    expect(
      coder.encodeJson('method', 'params')
    ).toEqual('{"id":1,"jsonrpc":"2.0","method":"method","params":"params"}');
  });
});
