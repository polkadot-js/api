// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { RpcCoder } from '.';

describe('encodeJson', (): void => {
  let coder: RpcCoder;

  beforeEach((): void => {
    coder = new RpcCoder();
  });

  it('encodes a valid JsonRPC JSON string', (): void => {
    expect(
      coder.encodeJson('method', ['params'])
    ).toEqual('{"id":1,"jsonrpc":"2.0","method":"method","params":["params"]}');
  });
});
