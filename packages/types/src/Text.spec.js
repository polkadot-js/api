// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Text from './Text';
import U8a from './codec/U8a';

/**
 * Helper function to test decoding.
 */
const testDecode = (type, input) =>
  it(`can decode from ${type}`, () => {
    expect(new Text(input).toString()).toBe('foo');
  });

describe('Text', () => {

  testDecode('string', 'foo');
  testDecode('Text', new Text('foo'));
  testDecode('Uint8Array', Uint8Array.from([12, 102, 111, 111]));
  testDecode('Array<number>', [12, 102, 111, 111]);
  testDecode('U8a', new U8a(Uint8Array.from([12, 102, 111, 111])));
  testDecode('object with `toString()`', { toString() { return 'foo'; } });

});
