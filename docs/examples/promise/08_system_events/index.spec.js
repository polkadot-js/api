// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const ApiPromise = require('../../../../packages/api/src/promise').default;

describe.skip('promise - 08 system events', () => {
  let api;

  beforeEach(async () => {
    api = await ApiPromise.create();
    jest.setTimeout(30000);
  });

  afterEach(() => {
    jest.setTimeout(5000);
  });

  it('makes api.query.system.events available', () => {
    expect(api.query.system.events).toBeDefined();
  });
});
