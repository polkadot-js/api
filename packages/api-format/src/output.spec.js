// ISC, Copyright 2017 Jaco Greeff

const BN = require('bn.js');

const { formatOutput } = require('./index');

describe('formatOutput', () => {
  describe('format', () => {
    it('formats the value', () => {
      expect(
        JSON.stringify(
          formatOutput({ type: 'Header' }, {
            parentHash: '0x1234',
            number: '0x1234',
            stateRoot: '0x5678',
            transactionRoot: '0xabcd',
            digest: {
              parachainActivityBitfield: '0x1234',
              logs: ['0x5678', '0x789a']
            }
          })
        )
      ).toEqual(
        JSON.stringify({
          parentHash: '0x1234',
          number: new BN(0x1234),
          stateRoot: '0x5678',
          transactionRoot: '0xabcd',
          digest: {
            parachainActivityBitfield: Buffer.from([0x12, 0x34]),
            logs: [
              Buffer.from([0x56, 0x78]),
              Buffer.from([0x78, 0x9a])
            ]
          }
        })
      );
    });
  });
});
