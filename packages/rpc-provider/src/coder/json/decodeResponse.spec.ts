// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RpcCoder } from './types';

import createCoder from './index';

describe('decodeResponse', () => {
  let coder: RpcCoder;

  beforeEach(() => {
    coder = createCoder();
  });

  it('expects a non-empty input object', () => {
    expect(
      // @ts-ignore Expect the test to fail
      () => coder.decodeResponse()
    ).toThrow(/Empty response/);
  });

  it('expects a valid jsonrpc field', () => {
    expect(
      // @ts-ignore Expect the test to fail
      () => coder.decodeResponse({})
    ).toThrow(/Invalid jsonrpc/);
  });

  it('expects a valid id field', () => {
    expect(
      // @ts-ignore Expect the test to fail
      () => coder.decodeResponse({ jsonrpc: '2.0' })
    ).toThrow(/Invalid id/);
  });

  it('expects a valid result field', () => {
    expect(
      // @ts-ignore Expect the test to fail
      () => coder.decodeResponse({ id: 1, jsonrpc: '2.0' })
    ).toThrow(/No result/);
  });

  it('throws any error found', () => {
    expect(
      // @ts-ignore Expect the test to fail
      () => coder.decodeResponse({ id: 1, jsonrpc: '2.0', error: { code: 123, message: 'test error' } })
    ).toThrow(/\[123\]: test error/);
  });

  it('returns the result', () => {
    expect(
      coder.decodeResponse({ id: 1, jsonrpc: '2.0', params: { result: 'some result', subscription: 1 }, result: 'some result' })
    ).toEqual('some result');
  });
});
