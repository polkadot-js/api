// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Boolean from '../primitive/Bool';
import Conviction from './Conviction';
import Vote from './Vote';

describe('Vote', () => {
  it('constructs via boolean true', () => {
    expect(new Vote(true).toNumber()).toEqual(-1);
  });

  it('constructs via boolean false', () => {
    expect(new Vote(false).toNumber()).toEqual(0);
  });

  it('has isYay for positive', () => {
    expect(new Vote(new Boolean(true)).isAye).toBe(true);
  });

  it('has isNay for negative', () => {
    expect(new Vote(new Boolean(false)).isNay).toBe(true);
  });

  it('is positive for negative numbers', () => {
    expect(new Vote(-999).isAye).toBe(true);
  });

  it('is negative for positive numbers', () => {
    expect(new Vote(999).isNay).toBe(true);
  });

  it('constructs V2 Vote with raw boolean', () => {
    expect(
      new Vote({ aye: true, conviction: new Conviction('Locked1x') }).toHex()
    )
      .toEqual('0x7b22617965223a747275652c22636f6e76696374696f6e223a317d');
  });

  it('constructs with Vote aye is false, conviction is None', () => {
    expect(
      new Vote({ aye: new Boolean(false), conviction: new Conviction('None') }).toHex()
    ) // returns the conviction enum index
      .toEqual('0x7b22617965223a66616c73652c22636f6e76696374696f6e223a307d');
  });

  it('constructs with Vote aye is true, conviction is Locked4x', () => {
    expect(
      new Vote({
        aye: new Boolean(true),
        conviction: new Conviction('Locked4x')
      })
      .toHex()
    )
      .toEqual('0x7b22617965223a747275652c22636f6e76696374696f6e223a347d');
  });

  it('conviction getter works', () => {
    expect(
      new Vote({
        aye: new Boolean(true),
        conviction: new Conviction('Locked2x')
      }).conviction.toString())
      .toEqual('Locked2x');
  });

  it('isAye getter works', () => {
    expect(
      new Vote({
        aye: new Boolean(true),
        conviction: new Conviction('None')
      }).isAye)
      .toEqual(true);
  });

  it('isNay getter works', () => {
    expect(
      new Vote({
        aye: new Boolean(true),
        conviction: new Conviction('None')
      }).isNay)
      .toEqual(false);
  });
});
