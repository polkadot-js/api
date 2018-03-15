// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createCoder = require('./index');

describe('encodeJson', () => {
  let coder;

  beforeEach(() => {
    coder = createCoder();
  });

  it('encodes a valid JsonRPC JSON string', () => {
    expect(
      coder.encodeJson('method', 'params')
    ).toEqual('{"id":1,"jsonrpc":"2.0","method":"method","params":"params"}');
  });
});
