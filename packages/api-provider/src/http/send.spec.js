// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { mockHttp, TEST_HTTP_URL } = require('../../test/mockHttp');

const createHttp = require('./index');

describe('send', () => {
  let http;
  let mock;

  beforeEach(() => {
    http = createHttp(TEST_HTTP_URL);
  });

  afterEach(() => {
    if (mock) {
      mock.done();
      mock = null;
    }
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
