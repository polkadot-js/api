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

  it('returns the connected state', () => {
    expect(
      createWs([]).isConnected()
    ).toEqual(false);
  });

  describe('pubsub', () => {
    beforeEach(() => {
      ws = createWs([]);
    });

    it('does not (yet) support unsubscribe', () => {
      return ws.unsubscribe().catch((error) => {
        expect(error.message).toMatch(/has not been implemented/);
      });
    });
  });
});
