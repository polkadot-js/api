// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ExtrinsicEra from './ExtrinsicEra';

describe('ExtrinsicEra', (): void => {
  it('decodes an Extrinsic Era with immortal', (): void => {
    const extrinsicEra = new ExtrinsicEra(new Uint8Array([0]));

    expect(extrinsicEra.asImmortalEra).toBeDefined();
    expect(extrinsicEra.toJSON()).toEqual({ ImmortalEra: '0x00' });
  });

  it('decodes an Extrinsic Era from u8 as mortal', (): void => {
    const extrinsicEra = new ExtrinsicEra(new Uint8Array([78, 156]));

    expect(extrinsicEra.asMortalEra.period.toNumber()).toEqual(32768);
    expect(extrinsicEra.asMortalEra.phase.toNumber()).toEqual(20000);
  });

  it('decoded from an existing ExtrinsicEra', (): void => {
    const extrinsicEra = new ExtrinsicEra(new ExtrinsicEra(new Uint8Array([78, 156])));

    expect(extrinsicEra.asMortalEra.period.toNumber()).toEqual(32768);
    expect(extrinsicEra.asMortalEra.phase.toNumber()).toEqual(20000);
  });

  it('encode an Extrinsic Era from Object with blocknumber & period as mortal instance', (): void => {
    const extrinsicEra = new ExtrinsicEra({ current: 1400, period: 200 });

    expect(extrinsicEra.asMortalEra.period.toNumber()).toEqual(256);
    expect(extrinsicEra.asMortalEra.phase.toNumber()).toEqual(120);
  });

  it('serializes and de-serializes from JSON', (): void => {
    const extrinsicEra = new ExtrinsicEra(new Uint8Array([78, 156]));
    const u8a = extrinsicEra.toU8a();
    const json = extrinsicEra.toJSON();

    expect(u8a).toEqual(new Uint8Array([78, 156]));
    expect(json).toEqual({ MortalEra: '0x4e9c' });
    expect(new ExtrinsicEra(json).toU8a()).toEqual(u8a);
  });
});
