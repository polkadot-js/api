// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Moment from './Moment';
import U64 from './U64';

describe('Moment', () => {
  it('constructs via Date', () => {
    expect(
      new Moment(
        new Date(1537968546280)
      ).toString()
    ).toEqual('2018-09-26T13:29:07.000Z');
  });

  it('wraps from another Moment', () => {
    expect(
      new Moment(
        new Moment(1234)
      ).toJSON()
    ).toEqual(1234);
  });

  it('reads values from JSON', () => {
    expect(
      new Moment().fromJSON(42).toNumber()
    ).toEqual(42);
  });

  it('reads values from u8a', () => {
    expect(
      new Moment().fromU8a(
        new U64(69).toU8a()
      ).toNumber()
    ).toEqual(69);
  });

  it('creates valid U64 u8a outputs', () => {
    expect(
      new U64().fromU8a(
        new Moment(421).toU8a()
      ).toNumber()
    ).toEqual(421);
  });
});
