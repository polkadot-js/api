// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isFunction from '@polkadot/util/is/function';

jest.mock('@polkadot/jsonrpc', () => ({
  test: {
    public: {
      blah: {
        params: [
          { name: 'foo', type: 'Address' }
        ],
        type: 'Address'
      },
      bleh: {
        params: [],
        type: 'Address'
      },
      pubsub: {
        isSubscription: true,
        params: [],
        type: 'Address'
      }
    }
  }
}));

const createInterface = require('./interface');

describe('createInterface', () => {
  let container;
  let provider;

  beforeEach(() => {
    provider = {
      send: jest.fn((method, params) => {
        return Promise.resolve(params[0]);
      })
    };
    container = createInterface(provider, 'test');
  });

  it('adds the specified methods to the interface', () => {
    expect(Object.keys(container)).toEqual(
      ['blah', 'bleh', 'pubsub']
    );
  });

  it('had function calls for the attached methods', () => {
    expect(isFunction(container.blah)).toEqual(true);
    expect(isFunction(container.bleh)).toEqual(true);
  });
});
