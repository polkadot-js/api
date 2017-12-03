// ISC, Copyright 2017 Jaco Greeff

const { mockHttp, TEST_HTTP_URL } = require('../../test/mockHttp');

const Http = require('./index');

describe('Http', () => {
  let http;
  let mock;
  let encodeSpy;
  let decodeSpy;

  beforeEach(() => {
    http = new Http(TEST_HTTP_URL);

    encodeSpy = jest.spyOn(http, 'encodeJson');
    decodeSpy = jest.spyOn(http, 'decodeResponse');
  });

  afterEach(() => {
    encodeSpy.mockRestore();
    decodeSpy.mockRestore();

    if (mock) {
      mock.done();
      mock = null;
    }
  });

  describe('constructor', () => {
    it('requires the endpoint to be set', () => {
      expect(
        () => new Http()
      ).toThrow(/should be provided/);
    });

    it('requires an http:// prefixed endpoint', () => {
      expect(
        () => new Http('ws://')
      ).toThrow(/with 'http/);
    });
  });

  describe('isConnected', () => {
    it('always returns true', () => {
      expect(http.isConnected).toEqual(true);
    });
  });

  describe('send', () => {
    it('encodes requests', () => {
      mock = mockHttp([{
        method: 'test_encoding',
        reply: {
          result: 'ok'
        }
      }]);

      return http
        .send('test_encoding', ['param'])
        .then((result) => {
          expect(encodeSpy).toHaveBeenCalledWith('test_encoding', ['param']);
        });
    });

    it('decodes responses', () => {
      mock = mockHttp([{
        method: 'test_encoding',
        reply: {
          result: 'ok'
        }
      }]);

      return http
        .send('test_encoding', ['param'])
        .then((result) => {
          expect(decodeSpy).toHaveBeenCalledWith({
            id: 1,
            jsonrpc: '2.0',
            result: 'ok'
          });
        });
    });

    it('passes the body through correctly', () => {
      mock = mockHttp([{
        method: 'test_body',
        reply: {
          result: 'ok'
        }
      }]);

      return http
        .send('test_body', ['param'])
        .then((result) => {
          expect(mock.body['test_body']).toEqual({
            id: 1,
            jsonrpc: '2.0',
            method: 'test_body',
            params: ['param']
          });
        });
    });

    it('throws error when !response.ok', () => {
      mock = mockHttp([{
        code: 500,
        method: 'test_error'
      }]);

      return http
        .send('test_error', [])
        .catch((error) => {
          expect(error.message).toMatch(/\[500\]: Internal Server/);
        });
    });
  });
});
