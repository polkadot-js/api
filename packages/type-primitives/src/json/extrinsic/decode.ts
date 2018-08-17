// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BlockExtrinsicDecoded, ExtrinsicDecoded, EncodingVersions } from '@polkadot/params/types';

import BN from 'bn.js';
import decoder from '@polkadot/params/decode';
import ExtError from '@polkadot/util/ext/error';
import u8aToHex from '@polkadot/util/u8a/toHex';

const VERSIONS: Array<EncodingVersions> = ['latest', 'poc-1'];

export default function extrinsicDecode (extrinsic: Uint8Array): BlockExtrinsicDecoded {
  for (let version of VERSIONS) {
    const addressDecoded = decoder('AccountId', extrinsic, version);
    const nonceDecoded = decoder('AccountIndex', extrinsic.subarray(addressDecoded.length), version);
    const extrinsicDecoded = decoder('Call', extrinsic.subarray(addressDecoded.length + nonceDecoded.length), version);
    const signature = extrinsic.subarray(addressDecoded.length + nonceDecoded.length + extrinsicDecoded.length);
    const totalLength = addressDecoded.length + nonceDecoded.length + extrinsicDecoded.length + signature.length;

    if (totalLength === extrinsic.length) {
      return {
        ...(extrinsicDecoded.value as ExtrinsicDecoded),
        address: addressDecoded.value as string,
        accountIndex: nonceDecoded.value as BN,
        signature
      };
    }
  }

  throw new ExtError(`Unable to decode extrinsic: ${u8aToHex(extrinsic)}`);
}
