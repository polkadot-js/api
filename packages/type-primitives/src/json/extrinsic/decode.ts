// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BlockExtrinsicDecoded, ExtrinsicDecoded } from '@polkadot/params/types';

import BN from 'bn.js';
import decoder from '@polkadot/params/decode';

export default function extrinsicDecode (extrinsic: Uint8Array): BlockExtrinsicDecoded {
  const addressDecoded = decoder('AccountId', extrinsic, 'latest');
  const nonceDecoded = decoder('AccountIndex', extrinsic.subarray(addressDecoded.length), 'latest');
  const extrinsicDecoded = decoder('Call', extrinsic.subarray(addressDecoded.length + nonceDecoded.length), 'latest');
  const signature = extrinsic.subarray(addressDecoded.length + nonceDecoded.length + extrinsicDecoded.length);

  return {
    ...(extrinsicDecoded.value as ExtrinsicDecoded),
    address: addressDecoded.value as string,
    nonce: nonceDecoded.value as BN,
    signature
  };
}
