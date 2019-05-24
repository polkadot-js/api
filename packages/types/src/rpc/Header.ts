// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a } from '../types';

import { blake2AsU8a } from '@polkadot/util-crypto';

import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import Hash from '../primitive/Hash';
import BlockNumber from '../type/BlockNumber';
import Digest, { DigestItem } from './Digest';

export type HeaderValue = {
  digest?: Digest | { logs: DigestItem[] },
  extrinsicsRoot?: AnyU8a,
  number?: AnyNumber,
  parentHash?: AnyU8a,
  stateRoot?: AnyU8a
};

/**
 * @name Header
 * @description
 * A [[Block]] header
 */
export default class Header extends Struct {
  constructor (value?: HeaderValue | Uint8Array | null) {
    super({
      parentHash: Hash,
      number: Compact.with(BlockNumber),
      stateRoot: Hash,
      extrinsicsRoot: Hash,
      digest: Digest
    }, value || {});
  }

  /**
   * @description The wrapped [[BlockNumber]]
   */
  get blockNumber (): BlockNumber {
    return (this.get('number') as Compact).toBn() as BlockNumber;
  }

  /**
   * @description The wrapped [[Digest]]
   */
  get digest (): Digest {
    return this.get('digest') as Digest;
  }

  /**
   * @description The wrapped extrisics root as a [[Hash]]
   */
  get extrinsicsRoot (): Hash {
    return this.get('extrinsicsRoot') as Hash;
  }

  /**
   * @description Convenience method, encodes the header and calculates the [[Hash]]
   */
  get hash (): Hash {
    return new Hash(
      blake2AsU8a(this.toU8a(), 256)
    );
  }

  /**
   * @description Alias for `blockNumber` (this is displayed in JSON)
   */
  get number (): BlockNumber {
    return this.blockNumber;
  }

  /**
   * @description The wrapped parent as a [[Hash]]
   */
  get parentHash (): Hash {
    return this.get('parentHash') as Hash;
  }

  /**
   * @description The wrapped state root as a [[Hash]]
   */
  get stateRoot (): Hash {
    return this.get('stateRoot') as Hash;
  }
}
