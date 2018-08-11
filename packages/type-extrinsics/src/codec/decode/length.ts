// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { UncheckedRaw } from '@polkadot/primitives/extrinsic';

import u8aToBn from '@polkadot/util/u8a/toBn';

export default function decodeLength (unchecked: Uint8Array): UncheckedRaw {
  const length = u8aToBn(unchecked.subarray(0, 4), true).toNumber();

  return unchecked.slice(4, length + 4);
}
