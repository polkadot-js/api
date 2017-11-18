// ISC, Copyright 2017 Jaco Greeff

const JsonRpcCoder = require('./jsonRpcCoder');

describe('provider/JsonRpcCoder', () => {
  let coder;

  beforeEach(() => {
    coder = new JsonRpcCoder();
  });

  describe('id', () => {
    it('starts with id === 0 (nothing sent)', () => {
      expect(coder.id).to.equal(0);
    });
  });

  describe('decodeResponse', () => {
    it('expects a non-empty input object', () => {
      expect(
        () => coder.decodeResponse()
      ).to.throw(/Empty response/);
    });

    it('expects a valid jsonrpc field', () => {
      expect(
        () => coder.decodeResponse({})
      ).to.throw(/Invalid jsonrpc/);
    });

    it('expects a valid id field', () => {
      expect(
        () => coder.decodeResponse({ jsonrpc: '2.0' })
      ).to.throw(/Invalid id/);
    });

    it('expects a valid result field', () => {
      expect(
        () => coder.decodeResponse({ id: 1, jsonrpc: '2.0' })
      ).to.throw(/No result/);
    });

    it('throws any error found', () => {
      expect(
        () => coder.decodeResponse({ id: 1, jsonrpc: '2.0', error: { code: 123, message: 'test error' } })
      ).to.throw(/\[123\]: test error/);
    });

    it('returns the result', () => {
      expect(
        coder.decodeResponse({ id: 1, jsonrpc: '2.0', result: 'some result' })
      ).to.equal('some result');
    });
  });

  describe('encodeObject', () => {
    it('encodes a valid JsonRPC object', () => {
      expect(
        coder.encodeObject('method', 'params')
      ).to.deep.equal({
        id: 1,
        jsonrpc: '2.0',
        method: 'method',
        params: 'params'
      });
      expect(coder.id).to.equal(1);
    });
  });

  describe('encodeJson', () => {
    it('encodes a valid JsonRPC JSON string', () => {
      expect(
        coder.encodeJson('method', 'params')
      ).to.equal('{"id":1,"jsonrpc":"2.0","method":"method","params":"params"}');
    });
  });
});
