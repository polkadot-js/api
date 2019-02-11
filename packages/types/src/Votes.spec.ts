// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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

  it('has isYay for negative', () => {
    expect(new Vote(new Boolean(false)).isNay).toBe(true);
  });

  it('is positive for negative numbers', () => {
    expect(new Vote(-999).isAye).toBe(true);
  });

  it('is negative for positive numbers', () => {
    expect(new Vote(999).isNay).toBe(true);
  });
});
