// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { u8aToHex } from '@polkadot/util';

import { TypeRegistry } from '../create';
import ExtrinsicPayload from './ExtrinsicPayload';

describe('ExtrinsicPayload', (): void => {
  const registry = new TypeRegistry();
  const TEST = {
    address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
    blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
    era: '0x0703',
    genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
    method: '0x0600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
    nonce: '0x00001234',
    specVersion: 123,
    tip: '0x00000000000000000000000000005678'
  };

  it('creates and can re-create from itself (U8a)', (): void => {
    const a = new ExtrinsicPayload(registry, TEST, { version: 4 });
    const b = new ExtrinsicPayload(registry, a.toU8a(), { version: 4 });

    expect(a).toEqual(b);
  });

  it('creates and can re-create from itself (hex)', (): void => {
    const a = new ExtrinsicPayload(registry, TEST, { version: 4 });
    const b = new ExtrinsicPayload(registry, a.toHex(), { version: 4 });

    expect(a).toEqual(b);
  });

  it('handles toU8a(true) correctly', (): void => {
    expect(
      u8aToHex(
        new ExtrinsicPayload(registry, TEST, { version: 4 }).toU8a(true)
      )
    ).toEqual(
      // no method length prefix
      '0x0600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c0703d148e25901007b000000dcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025bde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7'
    );
  });

  it('handles toU8a(false) correctly', (): void => {
    expect(
      u8aToHex(
        new ExtrinsicPayload(registry, TEST, { version: 4 }).toU8a()
      )
    ).toEqual(
      // with method length prefix
      '0x940600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c0703d148e25901007b000000dcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025bde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7'
    );
  });
});
