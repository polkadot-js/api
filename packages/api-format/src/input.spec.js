// Copyright 2017-2018 @polkadot/api-format authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { formatInputs } = require('./index');

describe('formatInputs', () => {
  it('formats each value in an array', () => {
    expect(
      formatInputs(
        [
          { name: 'foo', type: 'Bytes' },
          { name: 'bar', type: 'Hash' }
        ],
        [
          new Uint8Array([0x12, 0x34]),
          new Uint8Array([0xab, 0xcd])
        ]
      )
    ).toEqual([
      '0x1234',
      '0xabcd'
    ]);
  });
});
