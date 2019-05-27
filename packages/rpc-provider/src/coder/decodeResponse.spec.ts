// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { JsonRpcResponse } from '../types';
import Coder from './';

describe('decodeResponse', () => {
  let coder: Coder;

  beforeEach(() => {
    coder = new Coder();
  });

  it('expects a non-empty input object', () => {
    expect(
      () => coder.decodeResponse((undefined as any) as JsonRpcResponse)
    ).toThrow(/Empty response/);
  });

  it('expects a valid jsonrpc field', () => {
    expect(
      () => coder.decodeResponse({} as JsonRpcResponse)
    ).toThrow(/Invalid jsonrpc/);
  });

  it('expects a valid id field', () => {
    expect(
      () => coder.decodeResponse({ jsonrpc: '2.0' } as JsonRpcResponse)
    ).toThrow(/Invalid id/);
  });

  it('expects a valid result field', () => {
    expect(
      () => coder.decodeResponse({ id: 1, jsonrpc: '2.0' } as JsonRpcResponse)
    ).toThrow(/No result/);
  });

  it('throws any error found', () => {
    expect(
      () => coder.decodeResponse({ id: 1, jsonrpc: '2.0', error: { code: 123, message: 'test error' } } as JsonRpcResponse)
    ).toThrow(/123: test error/);
  });

  it('returns the result', () => {
    expect(
      coder.decodeResponse({ id: 1, jsonrpc: '2.0', result: 'some result' } as JsonRpcResponse)
    ).toEqual('some result');
  });
});
