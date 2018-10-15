// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToU8a from '@polkadot/util/hex/toU8a';

import Metadata from './Metadata';
import rpcdata from './Metadata.rpc';

describe('Metadata', () => {
  it('decodes properly', () => {
    const decoded = new Metadata(rpcdata);
    const str = JSON.stringify(decoded.toJSON());

    console.error(str);
    console.error(decoded.getUniqTypes());

    expect(decoded.events.length).not.toBe(0);
  });

  it('decodes when length not present (HACK)', () => {
    const u8a = hexToU8a(rpcdata);
    const decoded = new Metadata().fromU8a(u8a.subarray(2));

    expect(decoded.events.length).not.toBe(0);
  });
});
