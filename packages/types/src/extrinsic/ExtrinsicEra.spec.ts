// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import ExtrinsicEra from './ExtrinsicEra';

describe('ExtrinsicEra', (): void => {
  const registry = new TypeRegistry();

  it('decodes an Extrinsic Era with immortal', (): void => {
    const extrinsicEra = new ExtrinsicEra(registry, new Uint8Array([0]));

    expect(extrinsicEra.asImmortalEra).toBeDefined();
    expect(extrinsicEra.toJSON()).toEqual({ ImmortalEra: '0x00' });
  });

  it('decodes an Extrinsic Era from u8 as mortal', (): void => {
    const extrinsicEra = new ExtrinsicEra(registry, new Uint8Array([78, 156]));

    expect(extrinsicEra.asMortalEra.period.toNumber()).toEqual(32768);
    expect(extrinsicEra.asMortalEra.phase.toNumber()).toEqual(20000);
  });

  it('decoded from an existing ExtrinsicEra', (): void => {
    const extrinsicEra = new ExtrinsicEra(registry, new ExtrinsicEra(registry, new Uint8Array([78, 156])));

    expect(extrinsicEra.asMortalEra.period.toNumber()).toEqual(32768);
    expect(extrinsicEra.asMortalEra.phase.toNumber()).toEqual(20000);
  });

  it('encode an Extrinsic Era from Object with blocknumber & period as mortal instance', (): void => {
    const extrinsicEra = new ExtrinsicEra(registry, { current: 1400, period: 200 });

    expect(extrinsicEra.asMortalEra.period.toNumber()).toEqual(256);
    expect(extrinsicEra.asMortalEra.phase.toNumber()).toEqual(120);
  });

  it('serializes and de-serializes from JSON', (): void => {
    const extrinsicEra = new ExtrinsicEra(registry, new Uint8Array([78, 156]));
    const u8a = extrinsicEra.toU8a();
    const json = extrinsicEra.toJSON();

    expect(u8a).toEqual(new Uint8Array([78, 156]));
    expect(json).toEqual({ MortalEra: '0x4e9c' });
    expect(new ExtrinsicEra(registry, json).toU8a()).toEqual(u8a);
  });

  it('creates from an actual valid era', (): void => {
    const currBlock = 2251519;
    const mortalEra = new ExtrinsicEra(registry, '0xc503').asMortalEra;

    expect(mortalEra.period.toNumber()).toEqual(64);
    expect(mortalEra.phase.toNumber()).toEqual(60);
    expect(mortalEra.birth(currBlock)).toEqual(2251516);
    expect(mortalEra.death(currBlock)).toEqual(2251580);
  });

  it('creates for an actual era (2)', (): void => {
    const mortalEra = new ExtrinsicEra(registry, '0x8502').asMortalEra;

    expect(mortalEra.period.toNumber()).toEqual(64);
    expect(mortalEra.phase.toNumber()).toEqual(40);
  });

  it('creates form an actual era (3)', (): void => {
    const mortalEra = new ExtrinsicEra(registry, '0x6502').asMortalEra;

    expect(mortalEra.period.toNumber()).toEqual(64);
    expect(mortalEra.phase.toNumber()).toEqual(38);
  });

  it('creates from an actual era, 100 block hash count', (): void => {
    const mortalEra = new ExtrinsicEra(registry, '0xd607').asMortalEra;

    expect(mortalEra.period.toNumber()).toEqual(128);
    expect(mortalEra.phase.toNumber()).toEqual(125);
  });

  it('creates from a actual 2400 block hash count', (): void => {
    const mortalEra = new ExtrinsicEra(registry, '0x9be3').asMortalEra;

    expect(mortalEra.period.toNumber()).toEqual(4096);
    expect(mortalEra.phase.toNumber()).toEqual(3641);
  });
});
