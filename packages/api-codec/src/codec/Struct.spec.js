// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Struct from './Struct';
import Text from '../Text';
import U32 from '../U32';

describe('Struct', () => {
  it('provides a clean toString()', () => {
    expect(
      new (
        Struct.with({
          txt: Text,
          u32: U32
        })
      )({ txt: 'foo', u32: 0x123456 }).toString()
    ).toEqual(`{txt: foo, u32: 0x00123456}`);
  });

  it('exposes the types', () => {
    expect(
      new Struct({
        foo: Text,
        bar: Text,
        baz: U32
      }).Type
    ).toEqual({
      foo: 'Text',
      bar: 'Text',
      baz: 'U32'
    });
  });
});
