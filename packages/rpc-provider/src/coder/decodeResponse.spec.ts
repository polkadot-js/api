// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { JsonRpcResponse } from '../types';
import Coder from './';

describe('decodeResponse', (): void => {
  let coder: Coder;

  beforeEach((): void => {
    coder = new Coder();
  });

  it('expects a non-empty input object', (): void => {
    expect(
      (): any => coder.decodeResponse((undefined as any) as JsonRpcResponse)
    ).toThrow(/Empty response/);
  });

  it('expects a valid jsonrpc field', (): void => {
    expect(
      (): any => coder.decodeResponse({} as unknown as JsonRpcResponse)
    ).toThrow(/Invalid jsonrpc/);
  });

  it('expects a valid id field', (): void => {
    expect(
      (): any => coder.decodeResponse({ jsonrpc: '2.0' } as unknown as JsonRpcResponse)
    ).toThrow(/Invalid id/);
  });

  it('expects a valid result field', (): void => {
    expect(
      (): any => coder.decodeResponse({ id: 1, jsonrpc: '2.0' } as unknown as JsonRpcResponse)
    ).toThrow(/No result/);
  });

  it('throws any error found', (): void => {
    expect(
      (): any => coder.decodeResponse({ id: 1, jsonrpc: '2.0', error: { code: 123, message: 'test error' } } as unknown as JsonRpcResponse)
    ).toThrow(/123: test error/);
  });

  it('returns the result', (): void => {
    expect(
      coder.decodeResponse({ id: 1, jsonrpc: '2.0', result: 'some result' } as unknown as JsonRpcResponse)
    ).toEqual('some result');
  });
});
