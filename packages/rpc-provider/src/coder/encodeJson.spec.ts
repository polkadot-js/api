// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { RpcCoder } from '.';

describe('encodeJson', (): void => {
  let coder: RpcCoder;

  beforeEach((): void => {
    coder = new RpcCoder();
  });

  it('encodes a valid JsonRPC JSON string', (): void => {
    expect(
      coder.encodeJson('method', ['params'])
    ).toEqual([1, '{"id":1,"jsonrpc":"2.0","method":"method","params":["params"]}']);
  });
});
