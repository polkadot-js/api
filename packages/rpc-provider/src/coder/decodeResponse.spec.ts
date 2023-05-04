// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { JsonRpcResponse } from '../types.js';

import { RpcCoder } from './index.js';

describe('decodeResponse', (): void => {
  let coder: RpcCoder;

  beforeEach((): void => {
    coder = new RpcCoder();
  });

  it('expects a non-empty input object', (): void => {
    expect(
      () => coder.decodeResponse(undefined as unknown as JsonRpcResponse<unknown>)
    ).toThrow(/Invalid jsonrpc/);
  });

  it('expects a valid jsonrpc field', (): void => {
    expect(
      () => coder.decodeResponse({} as JsonRpcResponse<unknown>)
    ).toThrow(/Invalid jsonrpc/);
  });

  it('expects a valid id field', (): void => {
    expect(
      () => coder.decodeResponse({ jsonrpc: '2.0' } as JsonRpcResponse<unknown>)
    ).toThrow(/Invalid id/);
  });

  it('expects a valid result field', (): void => {
    expect(
      () => coder.decodeResponse({ id: 1, jsonrpc: '2.0' } as JsonRpcResponse<unknown>)
    ).toThrow(/No result/);
  });

  it('throws any error found', (): void => {
    expect(
      () => coder.decodeResponse({ error: { code: 123, message: 'test error' }, id: 1, jsonrpc: '2.0' } as JsonRpcResponse<unknown>)
    ).toThrow(/123: test error/);
  });

  it('throws any error found, with data', (): void => {
    expect(
      () => coder.decodeResponse({ error: { code: 123, data: 'Error("Some random error description")', message: 'test error' }, id: 1, jsonrpc: '2.0' } as JsonRpcResponse<unknown>)
    ).toThrow(/123: test error: Some random error description/);
  });

  it('allows for number subscription ids', (): void => {
    expect(
      coder.decodeResponse({ id: 1, jsonrpc: '2.0', method: 'test', params: { result: 'test result', subscription: 1 } } as JsonRpcResponse<unknown>)
    ).toEqual('test result');
  });

  it('allows for string subscription ids', (): void => {
    expect(
      coder.decodeResponse({ id: 1, jsonrpc: '2.0', method: 'test', params: { result: 'test result', subscription: 'abc' } } as JsonRpcResponse<unknown>)
    ).toEqual('test result');
  });

  it('returns the result', (): void => {
    expect(
      coder.decodeResponse({ id: 1, jsonrpc: '2.0', result: 'some result' } as JsonRpcResponse<unknown>)
    ).toEqual('some result');
  });
});
