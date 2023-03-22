// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyJson, AnyU8a, Codec, CodecClass, Inspect, Registry } from '../types/index.js';

import { compactAddLength, compactStripLength, compactToU8a, isHex, isU8a, u8aToU8a } from '@polkadot/util';

import { Raw } from '../native/Raw.js';
import { typeToConstructor } from '../utils/index.js';
import { Bytes } from './Bytes.js';

type OpaqueName = 'WrapperKeepOpaque' | 'WrapperOpaque';

interface Options {
  opaqueName?: OpaqueName;
}

function decodeRaw<T extends Codec> (registry: Registry, typeName: CodecClass<T> | string, value?: unknown): [CodecClass<T>, T | null, AnyU8a] {
  const Type = typeToConstructor(registry, typeName);

  if (isU8a(value) || isHex(value)) {
    try {
      const [, u8a] = isHex(value)
        ? [0, u8aToU8a(value)]
        : (value instanceof Raw)
          ? [0, value.subarray()]
          : compactStripLength(value);

      return [Type, new Type(registry, u8a), value];
    } catch {
      return [Type, null, value];
    }
  }

  const instance = new Type(registry, value);

  return [Type, instance, compactAddLength(instance.toU8a())];
}

export class WrapperKeepOpaque<T extends Codec> extends Bytes {
  readonly #Type: CodecClass<T>;
  readonly #decoded: T | null;
  readonly #opaqueName: OpaqueName;

  constructor (registry: Registry, typeName: CodecClass<T> | string, value?: unknown, { opaqueName = 'WrapperKeepOpaque' }: Options = {}) {
    const [Type, decoded, u8a] = decodeRaw(registry, typeName, value);

    super(registry, u8a);

    this.#Type = Type;
    this.#decoded = decoded;
    this.#opaqueName = opaqueName;
  }

  public static with<T extends Codec> (Type: CodecClass<T> | string): CodecClass<WrapperKeepOpaque<T>> {
    return class extends WrapperKeepOpaque<T> {
      constructor (registry: Registry, value?: AnyU8a | T) {
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
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public override inspect (): Inspect {
    return this.#decoded
      ? {
        inner: [this.#decoded.inspect()],
        outer: [compactToU8a(this.length)]
      }
      : {
        outer: [compactToU8a(this.length), this.toU8a(true)]
      };
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
   * @description Converts the value in a best-fit primitive form
   */
  public override toPrimitive (): any {
    return this.#decoded
      ? this.#decoded.toPrimitive()
      : super.toPrimitive();
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
    if (!this.#decoded) {
      throw new Error(`${this.#opaqueName}: unwrapping an undecodable value`);
    }

    return this.#decoded;
  }
}
