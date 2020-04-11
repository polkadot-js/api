// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a, IExtrinsicEra, Registry } from '../types';

import BN from 'bn.js';
import { assert, bnToBn, formatNumber, hexToU8a, isHex, isU8a, isObject, u8aToBn } from '@polkadot/util';

import Enum from '../codec/Enum';
import Tuple from '../codec/Tuple';
import Raw from '../codec/Raw';
import U64 from '../primitive/U64';
import { IMMORTAL_ERA } from './constants';

type MortalEraValue = [U64, U64];

interface MortalMethod {
  current: number;
  period: number;
}

interface MortalEnumDef {
  MortalEra: string;
}

interface ImmortalEnumDef {
  ImmortalEra: string;
}

function getTrailingZeros (period: number): number {
  const binary = period.toString(2);
  let index = 0;

  while (binary[binary.length - 1 - index] === '0') {
    index++;
  }

  return index;
}

/**
 * @name ImmortalEra
 * @description
 * The ImmortalEra for an extrinsic
 */
export class ImmortalEra extends Raw {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor (registry: Registry, value?: AnyU8a) {
    // For immortals, we always provide the known value (i.e. treated as a
    // constant no matter how it is constructed - it is a fixed structure)
    super(registry, IMMORTAL_ERA);
  }
}

/**
 * @name MortalEra
 * @description
 * The MortalEra for an extrinsic, indicating period and phase
 */
export class MortalEra extends Tuple {
  constructor (registry: Registry, value?: MortalMethod | Uint8Array | number[] | string) {
    super(registry, {
      period: U64,
      phase: U64
    }, MortalEra._decodeMortalEra(registry, value));
  }

  /** @internal */
  private static _decodeMortalEra (registry: Registry, value?: MortalMethod | Uint8Array | number[] | string): MortalEraValue {
    if (isHex(value)) {
      return MortalEra._decodeMortalU8a(registry, hexToU8a(value));
    } else if (Array.isArray(value)) {
      return MortalEra._decodeMortalU8a(registry, new Uint8Array(value));
    } else if (isU8a(value)) {
      return MortalEra._decodeMortalU8a(registry, value);
    } else if (isObject(value)) {
      return MortalEra._decodeMortalObject(registry, value);
    } else if (!value) {
      return [new U64(registry), new U64(registry)];
    }

    throw new Error('Invalid data passed to Mortal era');
  }

  /** @internal */
  private static _decodeMortalObject (registry: Registry, value: MortalMethod): MortalEraValue {
    const { current, period } = value;
    let calPeriod = Math.pow(2, Math.ceil(Math.log2(period)));

    calPeriod = Math.min(Math.max(calPeriod, 4), 1 << 16);

    const phase = current % calPeriod;
    const quantizeFactor = Math.max(calPeriod >> 12, 1);
    const quantizedPhase = phase / quantizeFactor * quantizeFactor;

    return [new U64(registry, calPeriod), new U64(registry, quantizedPhase)];
  }

  /** @internal */
  private static _decodeMortalU8a (registry: Registry, value: Uint8Array): MortalEraValue {
    if (value.length === 0) {
      return [new U64(registry), new U64(registry)];
    }

    const first = u8aToBn(value.subarray(0, 1)).toNumber();
    const second = u8aToBn(value.subarray(1, 2)).toNumber();
    const encoded: number = first + (second << 8);
    const period = 2 << (encoded % (1 << 4));
    const quantizeFactor = Math.max(period >> 12, 1);
    const phase = (encoded >> 4) * quantizeFactor;

    assert(period >= 4 && phase < period, 'Invalid data passed to Mortal era');

    return [new U64(registry, period), new U64(registry, phase)];
  }

  /**
   * @description Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`
   */
  public get encodedLength (): number {
    return 2;
  }

  /**
   * @description The period of this Mortal wraps as a [[U64]]
   */
  public get period (): U64 {
    return this[0] as U64;
  }

  /**
   * @description The phase of this Mortal wraps as a [[U64]]
   */
  public get phase (): U64 {
    return this[1] as U64;
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): any {
    return {
      period: formatNumber(this.period),
      phase: formatNumber(this.phase)
    };
  }

  /**
   * @description Returns a JSON representation of the actual value
   */
  public toJSON (): any {
    return this.toHex();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   * Period and phase are encoded:
   *   - The period of validity from the block hash found in the signing material.
   *   - The phase in the period that this transaction's lifetime begins (and, importantly,
   *     implies which block hash is included in the signature material). If the `period` is
   *     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that
   *     `period` is.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    const period = this.period.toNumber();
    const phase = this.phase.toNumber();
    const quantizeFactor = Math.max(period >> 12, 1);
    const trailingZeros = getTrailingZeros(period);
    const encoded = Math.min(15, Math.max(1, trailingZeros - 1)) + (((phase / quantizeFactor) << 4));
    const first = encoded >> 8;
    const second = encoded & 0xff;

    return new Uint8Array([second, first]);
  }

  /**
   * @description Get the block number of the start of the era whose properties this object describes that `current` belongs to.
   */
  public birth (current: BN | number): number {
    // FIXME No toNumber() here
    return Math.floor(
      (
        Math.max(bnToBn(current).toNumber(), this.phase.toNumber()) - this.phase.toNumber()
      ) / this.period.toNumber()
    ) * this.period.toNumber() + this.phase.toNumber();
  }

  /**
   * @description Get the block number of the first block at which the era has ended.
   */
  public death (current: BN | number): number {
    // FIXME No toNumber() here
    return this.birth(current) + this.period.toNumber();
  }
}

/**
 * @name GenericExtrinsicEra
 * @description
 * The era for an extrinsic, indicating either a mortal or immortal extrinsic
 */
export default class ExtrinsicEra extends Enum implements IExtrinsicEra {
  constructor (registry: Registry, value?: any) {
    super(registry, {
      ImmortalEra,
      MortalEra
    }, ExtrinsicEra._decodeExtrinsicEra(value));
  }

  /** @internal */
  // eslint-disable-next-line @typescript-eslint/ban-types
  private static _decodeExtrinsicEra (value: IExtrinsicEra | MortalMethod | MortalEnumDef | ImmortalEnumDef | Uint8Array | string = new Uint8Array()): Uint8Array | Object | undefined {
    if (value instanceof ExtrinsicEra) {
      return ExtrinsicEra._decodeExtrinsicEra(value.toU8a());
    } else if (isHex(value)) {
      return ExtrinsicEra._decodeExtrinsicEra(hexToU8a(value));
    } else if (!value || isU8a(value)) {
      return (!value?.length || value[0] === 0)
        ? new Uint8Array([0])
        : new Uint8Array([1, value[0], value[1]]);
    } else if (isObject(value)) {
      // this is to de-serialize from JSON
      return (value as MortalEnumDef).MortalEra
        ? { MortalEra: (value as MortalEnumDef).MortalEra }
        : (value as ImmortalEnumDef).ImmortalEra
          ? { ImmortalEra: (value as ImmortalEnumDef).ImmortalEra }
          : { MortalEra: value };
    }

    throw new Error('Invalid data passed to Era');
  }

  /**
   * @description Override the encoded length method
   */
  public get encodedLength (): number {
    return this.isImmortalEra
      ? this.asImmortalEra.encodedLength
      : this.asMortalEra.encodedLength;
  }

  /**
   * @description Returns the item as a [[ImmortalEra]]
   */
  public get asImmortalEra (): ImmortalEra {
    assert(this.isImmortalEra, `Cannot convert '${this.type}' via asImmortalEra`);

    return this.value as ImmortalEra;
  }

  /**
   * @description Returns the item as a [[MortalEra]]
   */
  public get asMortalEra (): MortalEra {
    assert(this.isMortalEra, `Cannot convert '${this.type}' via asMortalEra`);

    return this.value as MortalEra;
  }

  /**
   * @description `true` if Immortal
   */
  public get isImmortalEra (): boolean {
    return this.index === 0;
  }

  /**
   * @description `true` if Mortal
   */
  public get isMortalEra (): boolean {
    return this.index > 0;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    return this.isMortalEra
      ? this.asMortalEra.toU8a(isBare)
      : this.asImmortalEra.toU8a(isBare);
  }
}
