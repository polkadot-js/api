// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createSubscribe = require('./subscribe');

describe('createSubscribe', () => {
  let methods;
  let provider;
  let sub;
  let cb;

  beforeEach(() => {
    methods = {
      blah: {
        inputs: [
          { name: 'foo', type: 'Address' }
        ],
        output: { type: 'Address' }
      },
      bleh: {
        inputs: [],
        output: { type: 'Address' }
      }
    };

    provider = {
      subscribe: jest.fn((method, params, _cb) => {
        cb = _cb;

        return Promise.resolve(12345);
      }),
      unsubscribe: jest.fn(() => {
        return Promise.resolve(true);
      })
    };

    sub = createSubscribe(provider, 'test', methods);
  });

  it('it does not subscribe to not-found endpoint', () => {
    return sub('notFound').catch((error) => {
      expect(error.message).toMatch(/Unable to find 'test_notFound' subscription/);
    });
  });

  it('returns the subscription', () => {
    return sub('bleh', () => true).then((id) => {
      expect(id).toEqual(12345);
    });
  });

  it('returns values as they are available', (done) => {
    sub('bleh', () => {
      done();
    });

    cb(null, '0x123');
  });

  it('returns errors as they are available', (done) => {
    sub('bleh', (error) => {
      expect(error.message).toEqual('test error');

      done();
    });

    cb(new Error('test error'));
  });

  it('checks that valid callback is provided', () => {
    return sub('bleh').catch((error) => {
      expect(error.message).toMatch(/Expected callback in last position/);
    });
  });
});
