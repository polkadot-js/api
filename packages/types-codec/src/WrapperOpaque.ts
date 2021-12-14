// Copyright 2017-2021 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, CodecRegistry } from './types';

import { compactAddLength, compactStripLength, isU8a } from '@polkadot/util';

import { Base } from './Base';
import { typeToConstructor } from './utils';

function decodeRaw<T extends Codec> (registry: CodecRegistry, Type: CodecClass<T> | string, value?: unknown): T {
  const Clazz = typeToConstructor<T>(registry, Type);

  if (isU8a(value)) {
    const [, u8a] = compactStripLength(value);

    return new Clazz(registry, u8a);
  }

  return new Clazz(registry, value);
}

export class WrapperOpaque<T extends Codec> extends Base<T> {
  constructor (registry: CodecRegistry, Type: CodecClass<T> | string, value?: unknown) {
    super(registry, decodeRaw(registry, Type, value));
  }

  public static with<T extends Codec> (Type: CodecClass<T> | string): CodecClass<WrapperOpaque<T>> {
    return class extends WrapperOpaque<T> {
      constructor (registry: CodecRegistry, value?: unknown) {
        super(registry, Type, value);
      }
    };
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return `WrapperOpaque<${this._raw.toRawType()}>`;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    const u8a = super.toU8a(isBare);

    return isBare
      ? u8a
      : compactAddLength(u8a);
  }

  /**
   * @description Return the inner value for the wrapped type
   */
  public unwrap (): T {
    return this._raw;
  }
}
