// ISC, Copyright 2017-2018 Jaco Greeff

const interfaces = require('./index');

describe('jsonrpc', () => {
  it('exports the available interfaces', () => {
    expect(interfaces).toBeDefined();
    expect(Object.keys(interfaces).length).toBeGreaterThan(0);
  });
});
