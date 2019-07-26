// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, Hash } from '../srml/runtime/types';
import { AnyNumber, AnyU8a } from '../types';

import { ClassOf } from '../codec/createType';
import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import Digest, { DigestItem } from './Digest';

export interface HeaderValue {
  digest?: Digest | { logs: DigestItem[] };
  extrinsicsRoot?: AnyU8a;
  number?: AnyNumber;
  parentHash?: AnyU8a;
  stateRoot?: AnyU8a;
}

/**
 * @name Header
 * @description
 * A [[Block]] header
 */
export default class Header extends Struct {
  public constructor (value?: HeaderValue | Uint8Array | null) {
    super({
      parentHash: ClassOf('Hash'),
      number: ClassOf('Compact<BlockNumber>'),
      stateRoot: ClassOf('Hash'),
      extrinsicsRoot: ClassOf('Hash'),
      digest: ClassOf('Digest')
    }, value || {});
  }

  /**
   * @description The wrapped [[BlockNumber]]
   */
  public get blockNumber (): BlockNumber {
    return (this.get('number') as Compact<BlockNumber>).unwrap();
  }

  /**
   * @description The wrapped [[Digest]]
   */
  public get digest (): Digest {
    return this.get('digest') as Digest;
  }

  /**
   * @description The wrapped extrisics root as a [[Hash]]
   */
  public get extrinsicsRoot (): Hash {
    return this.get('extrinsicsRoot') as Hash;
  }

  /**
   * @description Alias for `blockNumber` (this is displayed in JSON)
   */
  public get number (): BlockNumber {
    return this.blockNumber;
  }

  /**
   * @description The wrapped parent as a [[Hash]]
   */
  public get parentHash (): Hash {
    return this.get('parentHash') as Hash;
  }

  /**
   * @description The wrapped state root as a [[Hash]]
   */
  public get stateRoot (): Hash {
    return this.get('stateRoot') as Hash;
  }
}
