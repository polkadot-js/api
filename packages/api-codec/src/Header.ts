// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import blake2Asu8a from '@polkadot/util-crypto/blake2/asU8a';

import Bytes from './codec/Bytes';
import Struct from './codec/Struct';
import Vector from './codec/Vector';

import BlockNumber from './BlockNumber';
import Hash from './Hash';

// A block header digest.
export class Digest extends Struct {
  constructor (value?: any) {
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
  constructor (value?: any) {
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

  // convernience, encodes the header and returns the actual hash
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
