// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { mockWs, TEST_WS_URL } = require('../../test/mockWs');

const Ws = require('./index');

let ws;
let mock;
let encodeSpy;
let decodeSpy;

function createWs (requests, autoConnect) {
  mock = mockWs(requests);
  ws = new Ws(TEST_WS_URL, autoConnect);

  encodeSpy = jest.spyOn(ws, 'encodeObject');
  decodeSpy = jest.spyOn(ws, 'decodeResponse');

  return ws;
}

describe('Ws', () => {
  afterEach(() => {
    if (encodeSpy) {
      encodeSpy.mockRestore();
      encodeSpy = null;
    }

    if (decodeSpy) {
      decodeSpy.mockRestore();
      decodeSpy = null;
    }

    if (mock) {
      mock.done();
      mock = null;
    }
  });

  it('requires an ws:// prefixed endpoint', () => {
    expect(
      () => new Ws('http://')
    ).toThrow(/with 'ws/);
  });

  describe('websocket', () => {
    let errorSpy;

    beforeEach(() => {
      ws = createWs([]);

      errorSpy = jest.spyOn(console, 'error');
    });

    afterEach(() => {
      errorSpy.mockRestore();
    });

    it('sets up the on* handlers', () => {
      expect(ws._websocket.onclose[0]).toEqual(ws._onClose);
      expect(ws._websocket.onerror[0]).toEqual(ws._onError);
      expect(ws._websocket.onmessage[0]).toEqual(ws._onMessage);
      expect(ws._websocket.onopen[0]).toEqual(ws._onOpen);
    });

    describe('_onClose', () => {
      beforeEach(() => {
        jest.useFakeTimers();
      });

      afterEach(() => {
        jest.useRealTimers();
      });

      it('reconnects after delay', () => {
        ws.connect = jest.fn();
        ws._onClose();

        expect(ws.connect).not.toHaveBeenCalled();

        jest.runAllTimers();

        expect(ws.connect).toHaveBeenCalled();
      });

      it('sets isConnected false', () => {
        expect(ws.isConnected).toEqual(false);
      });

      it('does not reconnect when autoConnect false', () => {
        mock.done();
        ws = createWs([], false);

        ws.connect = jest.fn();
        ws._onClose();

        expect(ws.connect).not.toHaveBeenCalled();

        jest.runAllTimers();

        expect(ws.connect).not.toHaveBeenCalled();
      });
    });

    describe('_onError', () => {
      it('logs the error', () => {
        ws._onError('test error');

        expect(errorSpy).toHaveBeenCalledWith('test error');
      });
    });

    describe('_onMessage', () => {
      it('fails with log when handler not found', () => {
        ws._onMessage({ data: '{"id":2}' });

        expect(errorSpy).toHaveBeenCalledWith('Unable to find handler for id=2');
      });
    });
  });

  describe('send', () => {
    it('handles internal errors', () => {
      ws = createWs([]);

      ws._isConnected = true;
      ws._websocket = null;

      return ws
        .send('test_encoding', ['param'])
        .catch((error) => {
          expect(error).toBeDefined();
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
          expect(encodeSpy).toHaveBeenCalledWith('test_encoding', ['param']);
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
          expect(decodeSpy).toHaveBeenCalledWith({
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
          expect(
            mock.body['test_body']
          ).toEqual('{"id":1,"jsonrpc":"2.0","method":"test_body","params":["param"]}');
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
          expect(error.message).toMatch(/\[666\]: error/);
        });
    });
  });

  describe('queued', () => {
    it('sends messages when connected', () => {
      const ws = createWs([{
        id: 1,
        method: 'test_queue',
        reply: {
          result: 'ok'
        }
      }], false);
      const sendPromise = ws.send('test_queue', []);

      ws.connect();

      return sendPromise.then((result) => {
        expect(result).toEqual('ok');
      });
    });
  });
});
