// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { JsonRpcResponse } from '../types';
import Coder from './';

describe('decodeResponse', (): void => {
  let coder: Coder;

  beforeEach((): void => {
    coder = new Coder();
  });

  it('expects a non-empty input object', (): void => {
    expect(
      (): any => coder.decodeResponse(undefined as unknown as JsonRpcResponse)
    ).toThrow(/Empty response/);
  });

  it('expects a valid jsonrpc field', (): void => {
    expect(
      (): any => coder.decodeResponse({} as JsonRpcResponse)
    ).toThrow(/Invalid jsonrpc/);
  });

  it('expects a valid id field', (): void => {
    expect(
      (): any => coder.decodeResponse({ jsonrpc: '2.0' } as JsonRpcResponse)
    ).toThrow(/Invalid id/);
  });

  it('expects a valid result field', (): void => {
    expect(
      (): any => coder.decodeResponse({ id: 1, jsonrpc: '2.0' } as JsonRpcResponse)
    ).toThrow(/No result/);
  });

  it('throws any error found', (): void => {
    expect(
      (): any => coder.decodeResponse({ error: { code: 123, message: 'test error' }, id: 1, jsonrpc: '2.0' } as JsonRpcResponse)
    ).toThrow(/123: test error/);
  });

  it('throws any error found, with data', (): void => {
    expect(
      (): any => coder.decodeResponse({ error: { code: 123, data: 'Error("Some random error description")', message: 'test error' }, id: 1, jsonrpc: '2.0' } as JsonRpcResponse)
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
