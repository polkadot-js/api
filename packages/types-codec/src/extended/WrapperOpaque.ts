// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, Registry } from '../types/index.js';

import { WrapperKeepOpaque } from './WrapperKeepOpaque.js';

export class WrapperOpaque<T extends Codec> extends WrapperKeepOpaque<T> {
  constructor (registry: Registry, typeName: CodecClass<T> | string, value?: unknown) {
    super(registry, typeName, value, { opaqueName: 'WrapperOpaque' });
  }

  public static override with<T extends Codec> (Type: CodecClass<T> | string): CodecClass<WrapperKeepOpaque<T>> {
    return class extends WrapperOpaque<T> {
      constructor (registry: Registry, value?: unknown) {
        super(registry, Type, value);
      }
    };
  }

  /**
   * @description The inner value for this wrapper, in all cases it _should_ be decodable (unlike KeepOpaque)
   */
  public get inner (): T {
    return this.unwrap();
  }
}
