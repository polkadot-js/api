// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import params from './params';

describe('params', () => {
  let methods;

  beforeEach(() => {
    methods = {
      array: {
        params: [
          { name: 'test', type: ['Bytes'] }
        ],
        type: 'Bytes'
      },
      blah: {
        params: [
          { name: 'foo', type: 'Bytes' }
        ],
        type: 'Bytes'
      },
      bleh: {
        params: [
          { name: 'foo', type: 'Bytes', isOptional: true }
        ],
        type: 'Bytes'
      }
    };
  });

  it('check against params', () => {
    expect(
      () => params(methods.blah.params, [])
    ).toThrow(/params expected/);
  });

  it('check against params (optional)', () => {
    expect(
      params(methods.bleh.params, [])
    ).toBeDefined();
  });

  it('formats array inputs correctly', () => {
    expect(
      params(methods.array.params, [[new Uint8Array([1]), new Uint8Array([2])]])
    ).toEqual([[
      '0x01', '0x02'
    ]]);
  });
});
