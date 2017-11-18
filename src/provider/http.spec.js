// ISC, Copyright 2017 Jaco Greeff

/* eslint-disable no-unused-expressions */

const { mockHttp, TEST_HTTP_URL } = require('../../test/mockHttp');

const sinon = require('sinon');

const Http = require('./http');

describe('provider/Http', () => {
  let http;
  let mock;

  beforeEach(() => {
    http = new Http(TEST_HTTP_URL);

    sinon.spy(http, 'encodeJson');
    sinon.spy(http, 'decodeResponse');
  });

  afterEach(() => {
    http.encodeJson.restore();
    http.decodeResponse.restore();

    mock.done();
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
          expect(http.encodeJson).to.have.been.calledWith('test_encoding', ['param']);
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
          expect(http.decodeResponse).to.have.been.calledWith({
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
          expect(mock.body['test_body']).to.deep.equal({
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
          expect(error).to.match(/\[500\]: Internal Server/);
        });
    });
  });
});
