// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { RpcCoder } from '.';

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
