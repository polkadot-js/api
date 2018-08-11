// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Header } from '../../header';

import blake2Asu8a from '@polkadot/util-crypto/blake2/asU8a';

import encode from './encode';

export default function headerHash (header: Header): Uint8Array {
  return blake2Asu8a(
    encode(header),
    256
  );
}
