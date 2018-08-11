// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

export default function encodeU8a (input: Uint8Array): Uint8Array {
  const output = new Uint8Array(input.length + 4);

  new DataView(output.buffer).setUint32(0, input.length, true);

  output.set(input, 4);

  return output;
}
