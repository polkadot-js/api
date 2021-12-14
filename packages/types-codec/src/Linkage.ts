// Copyright 2017-2021 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, CodecClass, CodecRegistry } from './types';

import { Option } from './Option';
import { Struct } from './Struct';
import { Tuple } from './Tuple';
import { Vec } from './Vec';

type TypeWithValues = [CodecClass, any[]];

const EMPTY = new Uint8Array();

/**
 * @name Linkage
 * @description The wrapper for the result from a LinkedMap
 */
export class Linkage<T extends Codec> extends Struct {
  constructor (registry: CodecRegistry, Type: CodecClass | string, value?: unknown) {
    super(registry, {
      previous: Option.with(Type),
      // eslint-disable-next-line sort-keys
      next: Option.with(Type)
    }, value as HexString);
  }

  public static withKey<O extends Codec> (Type: CodecClass | string): CodecClass<Linkage<O>> {
    return class extends Linkage<O> {
      constructor (registry: CodecRegistry, value?: unknown) {
        super(registry, Type, value);
      }
    };
  }

  public get previous (): Option<T> {
    return this.get('previous') as Option<T>;
  }

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
  public override toU8a (): Uint8Array {
    // As part of a storage query (where these appear), in the case of empty, the values
    // are NOT populated by the node - follow the same logic, leaving it empty
    return this.isEmpty
      ? EMPTY
      : super.toU8a();
  }
}

/**
 * @name LinkageResult
 * @description A Linkage keys/Values tuple
 */
export class LinkageResult extends Tuple {
  constructor (registry: CodecRegistry, [TypeKey, keys]: TypeWithValues, [TypeValue, values]: TypeWithValues) {
    super(registry, {
      Keys: Vec.with(TypeKey),
      Values: Vec.with(TypeValue)
    }, [keys, values]);
  }
}
