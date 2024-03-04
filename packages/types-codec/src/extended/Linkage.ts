// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, CodecClass, Registry } from '../types/index.js';

import { Option } from '../base/Option.js';
import { Tuple } from '../base/Tuple.js';
import { Vec } from '../base/Vec.js';
import { Struct } from '../native/Struct.js';

type TypeWithValues = [CodecClass, any[]];

const EMPTY = new Uint8Array();

/**
 * @name Linkage
 * @description The wrapper for the result from a LinkedMap
 */
export class Linkage<T extends Codec> extends Struct {
  constructor (registry: Registry, Type: CodecClass | string, value?: unknown) {
    super(registry, {
      previous: Option.with(Type),
      // eslint-disable-next-line sort-keys
      next: Option.with(Type)
    }, value as HexString);
  }

  public static withKey<O extends Codec> (Type: CodecClass | string): CodecClass<Linkage<O>> {
    return class extends Linkage<O> {
      constructor (registry: Registry, value?: unknown) {
        super(registry, Type, value);
      }
    };
  }

  /**
   * @description Returns the next item the Linkage is pointing to
   */
  public get previous (): Option<T> {
    return this.get('previous') as Option<T>;
  }

  /**
   * @description Returns the previous item the Linkage is pointing to
   */
  public get next (): Option<T> {
    return this.get('next') as Option<T>;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return `Linkage<${this.next.toRawType(true)}>`;
  }

  /**
   * @description Custom toU8a which with bare mode does not return the linkage if empty
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    // As part of a storage query (where these appear), in the case of empty, the values
    // are NOT populated by the node - follow the same logic, leaving it empty
    return this.isEmpty
      ? EMPTY
      : super.toU8a(isBare);
  }
}

/**
 * @name LinkageResult
 * @description A Linkage keys/Values tuple
 */
export class LinkageResult extends Tuple {
  constructor (registry: Registry, [TypeKey, keys]: TypeWithValues, [TypeValue, values]: TypeWithValues) {
    super(registry, {
      Keys: Vec.with(TypeKey),
      Values: Vec.with(TypeValue)
    }, [keys, values]);
  }
}
