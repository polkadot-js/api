// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isFunction from '@polkadot/util/is/function';

jest.mock('@polkadot/api-provider/ws', () => class {
  isConnected = () => true;
  on = () => true;
  send = () => true;
});
jest.mock('./interface', () => (api, sectionName) => sectionName);

const Api = require('./index').default;

describe('Api', () => {
  let api;

  beforeEach(() => {
    api = new Api();
  });

  it('creates an instance with all sections', () => {
    expect(
      Object
        .keys(api)
        .filter((key) =>
          !key.startsWith('_')
        )
    ).toEqual([
      'author', 'chain', 'state', 'system'
    ]);
  });

  it('has isConnected', () => {
    expect(
      isFunction(api.isConnected)
    ).toBe(true);
  });
});
