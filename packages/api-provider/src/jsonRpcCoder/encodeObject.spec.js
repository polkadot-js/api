// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createCoder = require('./index');

describe('encodeObject', () => {
  let coder;

  beforeEach(() => {
    coder = createCoder();
  });

  it('starts with id === 0 (nothing sent)', () => {
    expect(coder.getId()).toEqual(0);
  });

  it('encodes a valid JsonRPC object', () => {
    expect(
      coder.encodeObject('method', 'params')
    ).toEqual({
      id: 1,
      jsonrpc: '2.0',
      method: 'method',
      params: 'params'
    });
    expect(coder.getId()).toEqual(1);
  });
});
