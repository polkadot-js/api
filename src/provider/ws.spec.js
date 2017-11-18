// ISC, Copyright 2017 Jaco Greeff

/* eslint-disable no-unused-expressions */

const { mockWs, TEST_WS_URL } = require('../../test/mockWs');

const { isUndefined } = require('@polkadot/util/lib/is');
const sinon = require('sinon');

const Ws = require('./ws');

let ws;
let mock;

function createWs (requests, autoConnect) {
  mock = autoConnect || isUndefined(autoConnect)
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

  describe('websocket', () => {
    beforeEach(() => {
      ws = createWs([]);

      sinon.spy(console, 'error');
      sinon.spy(console, 'log');
    });

    afterEach(() => {
      console.error.restore();
      console.log.restore();
    });

    it('sets up the on* handlers', () => {
      expect(ws._websocket.onclose[0]).to.equal(ws._onClose);
      expect(ws._websocket.onerror[0]).to.equal(ws._onError);
      expect(ws._websocket.onmessage[0]).to.equal(ws._onMessage);
      expect(ws._websocket.onopen[0]).to.equal(ws._onOpen);
    });

    describe('_onClose', () => {
      it('reconnects after delay', () => {
        const clock = sinon.useFakeTimers();

        ws.connect = sinon.stub();
        ws._onClose();

        expect(ws.connect).not.to.have.been.called;

        clock.tick(1001);

        expect(ws.connect).to.have.been.called;

        clock.restore();
      });

      it('does not reconnect when autoConnect false', () => {
        mock.done();
        ws = createWs([], false);

        const clock = sinon.useFakeTimers();

        ws.connect = sinon.stub();
        ws._onClose();

        expect(ws.connect).not.to.have.been.called;

        clock.tick(1001);

        expect(ws.connect).not.to.have.been.called;

        clock.restore();
      });
    });

    describe('_onError', () => {
      it('logs the error', () => {
        ws._onError('test error');

        expect(console.error).to.have.been.calledWith('test error');
      });
    });

    describe('_onMessage', () => {
      it('fails with log when handler not found', () => {
        ws._onMessage({ data: '{"id":2}' });

        expect(console.error).to.have.been.calledWith('Unable to find handler for id=2');
      });
    });
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
