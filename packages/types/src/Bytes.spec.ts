// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Bytes from './Bytes';

describe('Bytes', () => {
  describe('hex decoding', () => {
    const CODE = new Uint8Array([0x14, 0x3a, 0x63, 0x6f, 0x64, 0x65]);

    it('decodes when hex is length prefixed', () => {
      expect(
        new Bytes('0x143a636f6465').toU8a()
      ).toEqual(CODE);
    });

    it('decodes when hex is not length prefixed', () => {
      expect(
        new Bytes('0x3a636f6465').toU8a()
      ).toEqual(CODE);
    });
  });
});
