// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, Registry } from '../types';

import { CodecMap } from './Map';

export class HashMap<K extends Codec = Codec, V extends Codec = Codec> extends CodecMap<K, V> {
  public static with<K extends Codec, V extends Codec> (keyType: Constructor<K> | string, valType: Constructor<V> | string): Constructor<CodecMap<K, V>> {
    return class extends HashMap<K, V> {
      constructor (registry: Registry, value?: Uint8Array | string | Map<any, any>) {
        super(registry, keyType, valType, value);
      }
    };
  }
}
