// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BalanceCompact, Hash, IndexCompact } from '../../../srml/runtime/types';
import { AnyNumber, AnyU8a, ExtrinsicPayloadValue, IExtrinsicEra, IKeyringPair, IMethod } from '../../../types';

import { ClassOf } from '../../../codec/createType';
import Struct from '../../../codec/Struct';
import U8a from '../../../codec/U8a';
import ExtrinsicEra from '../ExtrinsicEra';
import { sign } from '../util';

export interface SignaturePayloadValueV2 {
  blockHash: AnyU8a;
  era: AnyU8a | IExtrinsicEra;
  method: AnyU8a | IMethod;
  nonce: AnyNumber;
  tip: AnyNumber;
}

/**
 * @name SignaturePayloadV2
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export default class SignaturePayloadV2 extends Struct {
  public constructor (value?: ExtrinsicPayloadValue | SignaturePayloadValueV2 | Uint8Array | string) {
    super({
      method: U8a,
      era: ExtrinsicEra,
      nonce: ClassOf('IndexCompact'),
      tip: ClassOf('BalanceCompact'),
      blockHash: ClassOf('Hash')
    }, value);
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): Hash {
    return this.get('blockHash') as Hash;
  }

  /**
   * @description The [[U8a]] contained in the payload
   */
  public get method (): U8a {
    return this.get('method') as U8a;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[IndexCompact]]
   */
  public get nonce (): IndexCompact {
    return this.get('nonce') as IndexCompact;
  }

  /**
   * @description The tip [[BalanceCompact]]
   */
  public get tip (): BalanceCompact {
    return this.get('tip') as BalanceCompact;
  }

  /**
   * @description Sign the payload with the keypair
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public sign (signerPair: IKeyringPair): Uint8Array {
    return sign(signerPair, this.toU8a());
  }
}
