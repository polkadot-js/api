// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

import { RpcCoder } from './index.js';

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
