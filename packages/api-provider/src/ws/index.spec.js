// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { mockWs, TEST_WS_URL } = require('../../test/mockWs');

const create = require('./index');

let ws;
let mock;

function createWs (requests, autoConnect) {
  mock = mockWs(requests);
  ws = create(TEST_WS_URL, autoConnect);

  return ws;
}

describe('Ws', () => {
  afterEach(() => {
    if (mock) {
      mock.done();
      mock = null;
    }
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

  describe('pubsub', () => {
    beforeEach(() => {
      ws = createWs([]);
    });

    it('does not (yet) support subscribe', () => {
      return ws.subscribe().catch((error) => {
        expect(error.message).toMatch(/has not been implemented/);
      });
    });

    it('does not (yet) support unsubscribe', () => {
      return ws.unsubscribe().catch((error) => {
        expect(error.message).toMatch(/has not been implemented/);
      });
    });
  });
});
