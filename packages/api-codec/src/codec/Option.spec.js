// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Option from './Option';
import Text from '../Text';

describe('Option', () => {
  it('converts fromJSON() with', () => {
    const o = new Option(Text).fromJSON('1234');

    expect(o.isEmpty).toEqual(false);
    expect(o.toString()).toEqual('1234');
  });

  it('converts fromJSON() without', () => {
    const o = new Option(Text, '1234').fromJSON();

    expect(o.isEmpty).toEqual(true);
    expect(o.toString()).toEqual('');
  });

  it('has empty toString() (undefined)', () => {
    expect(
      new Option(Text).toString()
    ).toEqual('');
  });

  it('has value toString() (provided)', () => {
    expect(
      new Option(Text).fromU8a(new Uint8Array([1, 4 << 2, 49, 50, 51, 52])).toString()
    ).toEqual('1234');
  });

  it('converts toU8a() with', () => {
    expect(
      new Option(Text, '1234').toU8a()
    ).toEqual(new Uint8Array([1, 4 << 2, 49, 50, 51, 52]));
  });

  it('converts toU8a() without', () => {
    expect(
      new Option(Text).toU8a()
    ).toEqual(new Uint8Array([0]));
  });
});
