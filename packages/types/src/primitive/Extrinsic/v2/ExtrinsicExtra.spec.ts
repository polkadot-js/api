// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ExtrinsicExtra from './ExtrinsicExtra';

describe('ExtrinsicExtraV2', (): void => {
  it('encodes to a sane Uint8Array (default construction)', (): void => {
    expect(
      new ExtrinsicExtra().toU8a()
    ).toEqual(new Uint8Array([0, 0, 0]));
  });

  it('encodes to a sane Uint8Array (struct in)', (): void => {
    expect(
      new ExtrinsicExtra({ nonce: 1, tip: 2 }).toU8a()
    ).toEqual(new Uint8Array([0, 4, 8])); // numbers are Compact
  });

  it('encodes to a sane Uint8Array (Uint8Array in)', (): void => {
    expect(
      new ExtrinsicExtra(new Uint8Array([0, 8, 4])).toU8a()
    ).toEqual(new Uint8Array([0, 8, 4]));
  });
});
