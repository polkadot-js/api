// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Text from '../primitive/Text';
import VecFixed from './VecFixed';

describe('VecFixed', (): void => {
  describe('construction', (): void => {
    it('constructs via empty', (): void => {
      expect(new VecFixed(Text, 2).toHex()).toEqual('0x0000');
    });

    it('constructs via Uint8Array', (): void => {
      expect(new VecFixed(Text, 2, new Uint8Array([0x00, 0x04, 0x31])).toHex()).toEqual('0x000431');
    });
  });

  describe('utils', (): void => {
    let test: VecFixed<Text>;

    beforeEach((): void => {
      test = new (VecFixed.with(Text, 5))(['1', '2', '3', undefined, '5']);
    });

    it('has a sane string types', (): void => {
      expect(test.toRawType()).toEqual('[Text;5]');
      expect(test.Type).toEqual('Text');
    });

    it('has a correct toHex', (): void => {
      // each entry length 1 << 2, char as hex (0x31 === `1`), one empty
      expect(test.toHex()).toEqual('0x043104320433000435');
    });
  });
});
