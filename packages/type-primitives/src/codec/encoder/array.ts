// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

export default function encodeArray (input: Array<Uint8Array>): Uint8Array {
  const total = input.reduce((total, input) => total + input.length, 0);
  const output = new Uint8Array(total + 4);
  let offset = 4;

  new DataView(output.buffer).setUint32(0, input.length, true);

  return input.reduce((output, input) => {
    output.set(input, offset);
    offset += input.length;

    return output;
  }, output);
}
