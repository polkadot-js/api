// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import blake2Asu8a from '@polkadot/util-crypto/blake2/asU8a';

import U8a from './codec/U8a';
import UInt from './codec/UInt';
import Struct from './codec/Struct';
import Vector from './codec/Vector';

import BlockNumber from './BlockNumber';
import Bytes from './Bytes';
import Hash from './Hash';

type DigestValue = {
  logs?: Array<U8a | Uint8Array | string>
};

export type HeaderValue = {
  digest?: DigestValue,
  extrinsicsRoot?: Hash | Uint8Array | string,
  number?: UInt | BN | number | string,
  parentHash?: Hash | Uint8Array | string,
  stateRoot?: Hash | Uint8Array | string
};

// A block header digest.
export class Digest extends Struct {
  constructor (value: DigestValue = {}) {
    super({
      logs: Vector.with(Bytes)
    }, value);
  }

  get logs (): Vector<Bytes> {
    return this.raw.logs as Vector<Bytes>;
  }
}

// A block header.
export default class Header extends Struct {
  constructor (value: HeaderValue = {}) {
    super({
      parentHash: Hash,
      number: BlockNumber,
      stateRoot: Hash,
      extrinsicsRoot: Hash,
      digest: Digest
    }, value);
  }

  get blockNumber (): BlockNumber {
    return this.raw.number as BlockNumber;
  }

  get digest (): Digest {
    return this.raw.digest as Digest;
  }

  get extrinsicsRoot (): Hash {
    return this.raw.extrinsicsRoot as Hash;
  }

  // convenience, encodes the header and returns the actual hash
  get hash (): Hash {
    return new Hash(
      blake2Asu8a(this.toU8a(), 256)
    );
  }

  get parentHash (): Hash {
    return this.raw.parentHash as Hash;
  }

  get stateRoot (): Hash {
    return this.raw.stateRoot as Hash;
  }
}
