// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const JsonRpcCoder = require('./jsonRpcCoder');

describe('JsonRpcCoder', () => {
  let coder;

  beforeEach(() => {
    coder = new JsonRpcCoder();
  });

  describe('id', () => {
    it('starts with id === 0 (nothing sent)', () => {
      expect(coder.id).toEqual(0);
    });
  });

  describe('decodeResponse', () => {
    it('expects a non-empty input object', () => {
      expect(
        () => coder.decodeResponse()
      ).toThrow(/Empty response/);
    });

    it('expects a valid jsonrpc field', () => {
      expect(
        () => coder.decodeResponse({})
      ).toThrow(/Invalid jsonrpc/);
    });

    it('expects a valid id field', () => {
      expect(
        () => coder.decodeResponse({ jsonrpc: '2.0' })
      ).toThrow(/Invalid id/);
    });

    it('expects a valid result field', () => {
      expect(
        () => coder.decodeResponse({ id: 1, jsonrpc: '2.0' })
      ).toThrow(/No result/);
    });

    it('throws any error found', () => {
      expect(
        () => coder.decodeResponse({ id: 1, jsonrpc: '2.0', error: { code: 123, message: 'test error' } })
      ).toThrow(/\[123\]: test error/);
    });

    it('returns the result', () => {
      expect(
        coder.decodeResponse({ id: 1, jsonrpc: '2.0', result: 'some result' })
      ).toEqual('some result');
    });
  });

  describe('encodeObject', () => {
    it('encodes a valid JsonRPC object', () => {
      expect(
        coder.encodeObject('method', 'params')
      ).toEqual({
        id: 1,
        jsonrpc: '2.0',
        method: 'method',
        params: 'params'
      });
      expect(coder.id).toEqual(1);
    });
  });

  describe('encodeJson', () => {
    it('encodes a valid JsonRPC JSON string', () => {
      expect(
        coder.encodeJson('method', 'params')
      ).toEqual('{"id":1,"jsonrpc":"2.0","method":"method","params":"params"}');
    });
  });
});
