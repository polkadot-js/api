// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Enum from './Enum';

describe('Struct', () => {
  it('provides a clean toString()', () => {
    expect(
      new Enum(['foo', 'bar']).toString()
    ).toEqual('foo');
  });

  it('provides a clean toString() (enum)', () => {
    expect(
      new Enum(['foo', 'bar'], new Enum([], 1)).toNumber()
    ).toEqual(1);
  });

  it('converts to and from U8a', () => {
    expect(
      new Enum(['foo', 'bar']).fromU8a(new Uint8Array([1])).toU8a()
    ).toEqual(new Uint8Array([1]));
  });

  it('converts from JSON', () => {
    expect(
      new Enum(['foo', 'bar']).fromJSON(5).toString()
    ).toEqual('5');
  });
});
