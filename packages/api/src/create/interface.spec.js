// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const isFunction = require('@polkadot/util/is/function');

jest.mock('./@polkadot/api-jsonrpc', () => ({
  test: {
    methods: {
      blah: {
        inputs: [
          { name: 'foo', type: 'Address' }
        ],
        output: { type: 'Address' }
      },
      bleh: {
        inputs: [],
        output: { type: 'Address' }
      },
      pubsub: {
        isSubscription: true,
        inputs: [],
        output: { type: 'Address' }
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
