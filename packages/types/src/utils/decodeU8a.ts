// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor } from '../types';

export default function decodeU8a (u8a: Uint8Array, types: Constructor[]): Codec[] {
  if (!types.length) {
    return [];
  }
  const Type = types.shift();

  // @ts-ignore Object is possibly 'undefined'. No it's not.
  const value = new Type(u8a);

  return [value].concat(decodeU8a(u8a.subarray(value.encodedLength), types));
}
