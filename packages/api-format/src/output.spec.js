// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const BN = require('bn.js');

const { formatOutput } = require('./index');

describe('formatOutput', () => {
  it('formats the value', () => {
    expect(
      JSON.stringify(
        formatOutput(
          'Header',
          {
            digest: {
              logs: ['0x5678', '0x789a']
            },
            extrinsicsRoot: '0xabcd',
            number: '0x1234',
            parentHash: '0x1234',
            stateRoot: '0x5678'
          }
        )
      )
    ).toEqual(
      JSON.stringify({
        digest: {
          logs: [
            new Uint8Array([0x56, 0x78]),
            new Uint8Array([0x78, 0x9a])
          ]
        },
        extrinsicsRoot: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0xab, 0xcd]),
        number: new BN(0x1234),
        parentHash: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x12, 0x34]),
        stateRoot: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x56, 0x78])
      })
    );
  });
});
