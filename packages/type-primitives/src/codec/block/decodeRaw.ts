// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import decodeExtrinsic from '@polkadot/extrinsics/codec/decode/length';
import u8aToBn from '@polkadot/util/u8a/toBn';

import decodeHeader from '../header/decodeRaw';

type RawData = {
  body: Uint8Array,
  extrinsics: Array<Uint8Array>,
  header: Uint8Array,
  number: BN
};

export default function decodeRaw (u8a: Uint8Array): RawData {
  // tslint:disable-next-line:variable-name
  const { body, header, number } = decodeHeader(u8a);
  const length = u8aToBn(body.subarray(0, 4), true).toNumber();
  const extrinsics = [];
  let offset = 4;

  for (let index = 0; index < length; index++) {
    const extrinsic = decodeExtrinsic(
      body.subarray(offset)
    );

    offset += extrinsic.length + 4;
    extrinsics.push(extrinsic);
  }

  return {
    body,
    extrinsics,
    header,
    number
  };
}
