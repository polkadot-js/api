// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create';
import Text from '../primitive/Text';
import VecFixed from './VecFixed';

describe('VecFixed', (): void => {
  const registry = new TypeRegistry();

  describe('construction', (): void => {
    it('constructs via empty', (): void => {
      expect(new VecFixed(registry, Text, 2).toHex()).toEqual('0x0000');
    });

    it('constructs via Uint8Array', (): void => {
      expect(new VecFixed(registry, Text, 2, new Uint8Array([0x00, 0x04, 0x31])).toHex()).toEqual('0x000431');
    });

    it('decodes reusing instanciated inputs', (): void => {
      const foo = new Text(registry, 'bar');

      expect(
        (new VecFixed(registry, Text, 1, [foo]))[0]
      ).toBe(foo);
    });
  });

  describe('utils', (): void => {
    let test: VecFixed<Text>;

    beforeEach((): void => {
      test = new (VecFixed.with(Text, 5))(registry, ['1', '2', '3', undefined, '5']);
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
