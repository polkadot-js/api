// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, Registry } from '../types';

import { CodecMap } from './Map';

export class BTreeMap<K extends Codec = Codec, V extends Codec = Codec> extends CodecMap<K, V> {
  public static with<K extends Codec, V extends Codec> (keyType: CodecClass<K> | string, valType: CodecClass<V> | string): CodecClass<CodecMap<K, V>> {
    return class extends BTreeMap<K, V> {
      constructor (registry: Registry, value?: Uint8Array | string | Map<any, any>) {
        super(registry, keyType, valType, value, 'BTreeMap');
      }
    };
  }
}
