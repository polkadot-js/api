// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const interfaces = require('./index');

describe('jsonrpc', () => {
  it('exports the available interfaces', () => {
    expect(interfaces).toBeDefined();
    expect(Object.keys(interfaces).length).toBeGreaterThan(0);
  });
});
