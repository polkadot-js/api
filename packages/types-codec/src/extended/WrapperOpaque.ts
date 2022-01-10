// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyJson, AnyU8a, Codec, CodecClass, CodecRegistry } from '../types';

import { assertReturn, compactStripLength, isHex, isU8a } from '@polkadot/util';

import { Raw } from '../native/Raw';
import { typeToConstructor } from '../utils';
import { Bytes } from './Bytes';

type OpaqueName = 'WrapperKeepOpaque' | 'WrapperOpaque';

function decodeRaw<T extends Codec> (registry: CodecRegistry, typeName: CodecClass<T> | string, value?: unknown): [CodecClass<T>, T | null, AnyU8a] {
  const Type = typeToConstructor(registry, typeName);

  if (isU8a(value) || isHex(value)) {
    try {
      const [, u8a] = isHex(value) || (value instanceof Raw)
        ? [0, value]
        : compactStripLength(value);

      return [Type, new Type(registry, u8a), value];
    } catch {
      return [Type, null, value];
    }
  }

  const instance = new Type(registry, value);

  return [Type, instance, instance.toHex(true)];
}

export class WrapperKeepOpaque<T extends Codec> extends Bytes {
  readonly #Type: CodecClass<T>;

  readonly #decoded: T | null;

  readonly #opaqueName: OpaqueName;

  constructor (registry: CodecRegistry, typeName: CodecClass<T> | string, value?: unknown, opaqueName: OpaqueName = 'WrapperKeepOpaque') {
    const [Type, decoded, u8a] = decodeRaw(registry, typeName, value);

    super(registry, u8a);

    this.#Type = Type;
    this.#decoded = decoded;
    this.#opaqueName = opaqueName;
  }

  public static with<T extends Codec> (Type: CodecClass<T> | string): CodecClass<WrapperKeepOpaque<T>> {
    return class extends WrapperKeepOpaque<T> {
      constructor (registry: CodecRegistry, value?: AnyU8a | T) {
        super(registry, Type, value);
      }
    };
  }

  /**
   * @description Checks if the wrapper is decodable
   */
  public get isDecoded (): boolean {
    return !!this.#decoded;
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (isExtended?: boolean): AnyJson {
    return this.#decoded
      ? this.#decoded.toHuman(isExtended)
      : super.toHuman();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return `${this.#opaqueName}<${this.registry.getClassName(this.#Type) || (this.#decoded ? this.#decoded.toRawType() : new this.#Type(this.registry).toRawType())}>`;
  }

  /**
   * @description Converts the Object to to a string (either decoded or bytes)
   */
  public override toString (): string {
    return this.#decoded
      ? this.#decoded.toString()
      : super.toString();
  }

  /**
   * @description Returns the decoded that the WrapperKeepOpaque represents (if available), throws if non-decodable
   */
  public unwrap (): T {
    return assertReturn(this.#decoded, () => `${this.#opaqueName}: unwrapping an undecodable value`);
  }
}

export class WrapperOpaque<T extends Codec> extends WrapperKeepOpaque<T> {
  constructor (registry: CodecRegistry, typeName: CodecClass<T> | string, value?: unknown) {
    super(registry, typeName, value, 'WrapperOpaque');
  }

  public static override with<T extends Codec> (Type: CodecClass<T> | string): CodecClass<WrapperKeepOpaque<T>> {
    return class extends WrapperOpaque<T> {
      constructor (registry: CodecRegistry, value?: unknown) {
        super(registry, Type, value);
      }
    };
  }
}
