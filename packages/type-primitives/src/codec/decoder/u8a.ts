// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aToBn from '@polkadot/util/u8a/toBn';

export default function decodeU8a (input: Uint8Array): Uint8Array {
  // FIXME: This conversion is horrible, however Dataview on subarray yields wrong getUint32 value
  const length = u8aToBn(input.subarray(0, 4), true).toNumber();

  return input.slice(4, 4 + length);
}
