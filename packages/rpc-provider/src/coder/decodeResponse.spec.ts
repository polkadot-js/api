// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { JsonRpcResponse } from '../types';

import { RpcCoder } from '.';

describe('decodeResponse', (): void => {
  let coder: RpcCoder;

  beforeEach((): void => {
    coder = new RpcCoder();
  });

  it('expects a non-empty input object', (): void => {
    expect(
      () => coder.decodeResponse(undefined as unknown as JsonRpcResponse)
    ).toThrow(/Empty response/);
  });

  it('expects a valid jsonrpc field', (): void => {
    expect(
      () => coder.decodeResponse({} as JsonRpcResponse)
    ).toThrow(/Invalid jsonrpc/);
  });

  it('expects a valid id field', (): void => {
    expect(
      () => coder.decodeResponse({ jsonrpc: '2.0' } as JsonRpcResponse)
    ).toThrow(/Invalid id/);
  });

  it('expects a valid result field', (): void => {
    expect(
      () => coder.decodeResponse({ id: 1, jsonrpc: '2.0' } as JsonRpcResponse)
    ).toThrow(/No result/);
  });

  it('throws any error found', (): void => {
    expect(
      () => coder.decodeResponse({ error: { code: 123, message: 'test error' }, id: 1, jsonrpc: '2.0' } as JsonRpcResponse)
    ).toThrow(/123: test error/);
  });

  it('throws any error found, with data', (): void => {
    expect(
      () => coder.decodeResponse({ error: { code: 123, data: 'Error("Some random error description")', message: 'test error' }, id: 1, jsonrpc: '2.0' } as JsonRpcResponse)
    ).toThrow(/123: test error: Some random error description/);
  });

  it('allows for number subscription ids', (): void => {
    expect(
      coder.decodeResponse({ id: 1, jsonrpc: '2.0', method: 'test', params: { result: 'test result', subscription: 1 } } as JsonRpcResponse)
    ).toEqual('test result');
  });

  it('allows for string subscription ids', (): void => {
    expect(
      coder.decodeResponse({ id: 1, jsonrpc: '2.0', method: 'test', params: { result: 'test result', subscription: 'abc' } } as JsonRpcResponse)
    ).toEqual('test result');
  });

  it('returns the result', (): void => {
    expect(
      coder.decodeResponse({ id: 1, jsonrpc: '2.0', result: 'some result' } as JsonRpcResponse)
    ).toEqual('some result');
  });
});
