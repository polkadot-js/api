// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aToBn from '@polkadot/util/u8a/toBn';

type DecodedArray = {
  length: number,
  data: Uint8Array
};

export default function decodeArray (input: Uint8Array): DecodedArray {
  return {
    // FIXME: This conversion is horrible, however Dataview on subarray yields wrong getUint32 value
    length: u8aToBn(input.subarray(0, 4), true).toNumber(),
    data: input.slice(4)
  };
}
