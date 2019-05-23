// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ExtrinsicEra from './ExtrinsicEra';

describe('ExtrinsicEra', () => {
  it('decodes an Extrinsic Era with immortal', () => {
    const extrinsicEra = new ExtrinsicEra(new Uint8Array([0]));

    expect(extrinsicEra.asImmortalEra).toBeDefined();
  });

  it('decodes an Extrinsic Era from u8 as mortal', () => {
    const extrinsicEra = new ExtrinsicEra(new Uint8Array([78, 156]));

    expect(extrinsicEra.asMortalEra.period.toNumber()).toEqual(32768);
    expect(extrinsicEra.asMortalEra.phase.toNumber()).toEqual(20000);
  });

  it('encode an Extrinsic Era from Object with blocknumber & period as mortal instance', () => {
    const extrinsicEra = new ExtrinsicEra({ current: 1400, period: 200 });

    expect(extrinsicEra.asMortalEra.period.toNumber()).toEqual(256);
    expect(extrinsicEra.asMortalEra.phase.toNumber()).toEqual(120);
  });
});
