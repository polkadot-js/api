// Copyright 2017-2024 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { RpcCoder } from './index.js';

describe('encodeObject', (): void => {
  let coder: RpcCoder;

  beforeEach((): void => {
    coder = new RpcCoder();
  });

  it('encodes a valid JsonRPC object', (): void => {
    expect(
      coder.encodeObject('method', ['a', 'b'])
    ).toEqual([1, {
      id: 1,
      jsonrpc: '2.0',
      method: 'method',
      params: ['a', 'b']
    }]);
  });
});
