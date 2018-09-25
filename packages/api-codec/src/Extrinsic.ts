// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import blake2Asu8a from '@polkadot/util-crypto/blake2/asU8a';

import Bytes from './Bytes';
import Hash from './Hash';

// Representation of an Extrinsic in the system.
//
// NOTE At this point we are just keeping to a bare-bones Vec<u8> structure,
// this should be expanded to do the automatic decoding of an extrinsic
export default class Extrinsic extends Bytes {
  // convernience, encodes the extrinsic and returns the actual hash
  get hash (): Hash {
    return new Hash(
      blake2Asu8a(this.toU8a(), 256)
    );
  }
}
