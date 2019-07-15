// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Bool from '../primitive/Bool';
import Conviction from './Conviction';
import Vote from './Vote';

describe('Vote', (): void => {
  it('constructs via boolean true', (): void => {
    expect(new Vote(true).toU8a()).toEqual(new Uint8Array([128]));
    expect(new Vote(true).isAye).toBe(true);
    expect(new Vote(true).isNay).toBe(false);
  });

  it('constructs via boolean false', (): void => {
    expect(new Vote(false).toU8a()).toEqual(new Uint8Array([0]));
    expect(new Vote(false).isNay).toBe(true);
    expect(new Vote(false).isAye).toBe(false);
  });

  it('has isYay for positive', (): void => {
    // eslint-disable-next-line no-new-wrappers
    expect(new Vote(new Bool(true)).isAye).toBe(true);
  });

  it('has isNay for negative', (): void => {
    // eslint-disable-next-line no-new-wrappers
    expect(new Vote(new Bool(false)).isNay).toBe(true);
  });

  it('is Aye for negative numbers', (): void => {
    expect(new Vote(-128).isAye).toBe(true);
  });

  it('is Nay for positive numbers', (): void => {
    expect(new Vote(127).isNay).toBe(true);
  });

  it('constructs V2 Vote with raw boolean', (): void => {
    expect(
      new Vote({
        aye: true,
        conviction: new Conviction('Locked1x')
      }).toU8a()
    ).toEqual(new Uint8Array([0b10000001]));
  });

  it('constructs with V2 Vote aye is false, conviction is None', (): void => {
    expect(
      new Vote({
        aye: new Bool(false),
        conviction: new Conviction('None')
      }).toU8a()
    ).toEqual(new Uint8Array([0b00000000]));
  });

  it('constructs with Vote aye is true, conviction is Locked4x', (): void => {
    expect(
      new Vote({
        aye: new Bool(true),
        conviction: new Conviction('Locked4x')
      }).toU8a()
    ).toEqual(new Uint8Array([0b10000100]));
  });

  it('Conviction getter works', (): void => {
    expect(
      new Vote({
        aye: new Bool(true),
        conviction: new Conviction('Locked2x')
      }).conviction.toString()
    ).toEqual('Locked2x');
  });

  it('Conviction getter works with raw boolean and string conviction', (): void => {
    expect(
      new Vote({
        aye: true,
        conviction: 'Locked2x'
      }).conviction.toString()
    ).toEqual('Locked2x');
  });
  it('Conviction getter works with raw boolean and conviction index', (): void => {
    expect(
      new Vote({
        aye: true,
        conviction: 2
      }).conviction.toString()
    ).toEqual('Locked2x');
  });

  it('isAye getter works', (): void => {
    expect(
      new Vote({
        aye: new Bool(true),
        conviction: new Conviction('None')
      }).isAye)
      .toEqual(true);
  });

  it('isNay getter works', (): void => {
    expect(
      new Vote({
        aye: new Bool(true),
        conviction: new Conviction('None')
      }).isNay)
      .toEqual(false);
  });
});
