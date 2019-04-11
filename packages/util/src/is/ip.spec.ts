// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isIp } from '.';

describe('isIp', () => {
  it('returns false when non-ip found', () => {
    expect(
      isIp('not.an.ip.1')
    ).toEqual(false);
  });

  it('returns true on IPv4 addresses', () => {
    expect(
      isIp('192.168.0.1')
    ).toEqual(true);
  });

  it('returns true on IPv4 addresses (IPV4 type)', () => {
    expect(
      isIp('192.168.0.1', 'v4')
    ).toEqual(true);
  });

  it('returns false on IPv4 addresses (IPv6 type)', () => {
    expect(
      isIp('192.168.0.1', 'v6')
    ).toEqual(false);
  });

  it('returns true on IPv6 addresses', () => {
    expect(
      isIp('1:2:3:4:5:6:7:8')
    ).toEqual(true);
  });

  it('returns true on IPv6 addresses (IPv6 type)', () => {
    expect(
      isIp('1:2:3:4:5:6:7:8', 'v6')
    ).toEqual(true);
  });

  it('returns false on IPv6 addresses (IPv4 type)', () => {
    expect(
      isIp('1:2:3:4:5:6:7:8', 'v4')
    ).toEqual(false);
  });
});
