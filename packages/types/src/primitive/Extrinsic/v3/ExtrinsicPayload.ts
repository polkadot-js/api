// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Balance, Hash, Index } from '../../../interfaces/runtime';
import { ExtrinsicPayloadValue, IKeyringPair } from '../../../types';

import Compact from '../../../codec/Compact';
import Struct from '../../../codec/Struct';
import U8a from '../../../codec/U8a';
import ExtrinsicEra from '../ExtrinsicEra';
import { sign } from '../util';

/**
 * @name ExtrinsicPayloadV3
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export default class ExtrinsicPayloadV3 extends Struct {
  public constructor (value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super({
      method: U8a,
      era: ExtrinsicEra,
      nonce: 'Compact<Index>',
      tip: 'Compact<Balance>',
      genesisHash: 'Hash',
      blockHash: 'Hash'
    }, value);
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): Hash {
    return this.get('blockHash') as Hash;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The genesis [[Hash]] the signature applies to (mortal/immortal)
   */
  public get genesisHash (): Hash {
    return this.get('genesisHash') as Hash;
  }

  /**
   * @description The [[U8a]] contained in the payload
   */
  public get method (): U8a {
    return this.get('method') as U8a;
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): Compact<Index> {
    return this.get('nonce') as Compact<Index>;
  }

  /**
   * @description The tip [[Balance]]
   */
  public get tip (): Compact<Balance> {
    return this.get('tip') as Compact<Balance>;
  }

  /**
   * @description Sign the payload with the keypair
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public sign (signerPair: IKeyringPair): Uint8Array {
    return sign(signerPair, this.toU8a());
  }
}
