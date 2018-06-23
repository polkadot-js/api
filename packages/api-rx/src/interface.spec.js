// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

jest.mock('./observable', () => (subName, name, section) => `${subName}_${name}_${Object.keys(section).join(':')}`);

const createInterface = require('./interface').default;

describe('createInterface', () => {
  let api;
  let int;

  beforeEach(() => {
    api = {
      chain: {
        foo: 'test',
        bar: 'test',
        subscribe: 'noInclude',
        unsubscribe: 'noInclude'
      },
      state: {
        baz: 'test'
      }
    };

    int = createInterface(api, 'chain');
  });

  it('creates observables for all relevant methods', () => {
    expect(
      int
    ).toEqual({
      foo: 'chain_foo_foo_foo:bar:subscribe:unsubscribe',
      bar: 'chain_bar_bar_foo:bar:subscribe:unsubscribe'
    });
  });
});
