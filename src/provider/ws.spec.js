// ISC, Copyright 2017 Jaco Greeff

/* eslint-disable no-unused-expressions */

const { mockWs, TEST_WS_URL } = require('../../test/mockWs');

const sinon = require('sinon');

const Ws = require('./ws');

let ws;
let mock;

function createWs (requests, autoConnect = true) {
  mock = autoConnect
    ? mockWs(requests)
    : null;

  ws = new Ws(TEST_WS_URL, autoConnect);

  sinon.spy(ws, 'encodeObject');
  sinon.spy(ws, 'decodeResponse');

  return ws;
}

describe('provider/Ws', () => {
  afterEach(() => {
    ws.encodeObject.restore();
    ws.decodeResponse.restore();

    if (mock) {
      mock.done();
    }
  });

  describe('send', () => {
    it('handles internal errors', () => {
      ws = createWs([], false);

      return ws
        .send('test_encoding', ['param'])
        .catch((error) => {
          expect(error).to.be.ok;
        });
    });

    it('encodes requests', () => {
      ws = createWs([{
        id: 1,
        method: 'test_encoding',
        reply: {
          result: 'ok'
        }
      }]);

      return ws
        .send('test_encoding', ['param'])
        .then((result) => {
          expect(ws.encodeObject).to.have.been.calledWith('test_encoding', ['param']);
        });
    });

    it('decodes responses', () => {
      ws = createWs([{
        id: 1,
        method: 'test_encoding',
        reply: {
          result: 'ok'
        }
      }]);

      return ws
        .send('test_encoding', ['param'])
        .then((result) => {
          expect(ws.decodeResponse).to.have.been.calledWith({
            id: 1,
            jsonrpc: '2.0',
            result: 'ok'
          });
        });
    });

    it('passes the body through correctly', () => {
      ws = createWs([{
        id: 1,
        method: 'test_body',
        reply: {
          result: 'ok'
        }
      }]);

      return ws
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
      ws = createWs([{
        id: 1,
        error: {
          code: 666,
          message: 'error'
        }
      }]);

      return ws
        .send('test_error', [])
        .catch((error) => {
          expect(error).to.match(/\[666\]: error/);
        });
    });
  });
});
