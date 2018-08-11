// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import u8aToBn from '@polkadot/util/u8a/toBn';

import decodeArray from '../decoder/array';
import decodeU8a from '../decoder/u8a';
import { OFF_DIGEST, OFF_NUMBER } from './offsets';

type DecodedRaw = {
  body: Uint8Array,
  header: Uint8Array,
  logs: Array<Uint8Array>,
  number: BN
};

export default function decodeHeader (u8a: Uint8Array): DecodedRaw {
  const logs = [];
  const dd = decodeArray(u8a.subarray(OFF_DIGEST));
  let offset = 0;

  for (let index = 0; index < dd.length; index++) {
    const log = decodeU8a(dd.data.subarray(offset));

    logs.push(log);

    offset += log.length + 4;
  }

  return {
    body: dd.data.subarray(offset),
    header: u8a.subarray(0, OFF_DIGEST + offset + 4),
    logs,
    number: u8aToBn(u8a.subarray(OFF_NUMBER, OFF_NUMBER + 8), true)
  };
}
