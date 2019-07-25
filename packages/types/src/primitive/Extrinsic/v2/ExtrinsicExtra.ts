// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BalanceCompact, IndexCompact } from '../../../srml/runtime/types';
import { AnyNumber } from '../../../types';

import { ClassOf } from '../../../codec/createType';
import Struct from '../../../codec/Struct';
import Address from '../../Address';
import ExtrinsicEra from '../ExtrinsicEra';

interface ExtrinsicExtraValueV2 {
  era?: Uint8Array;
  nonce?: AnyNumber;
  tip?: AnyNumber;
}

/**
 * @name ExtrinsicExtraV2
 * @description
 * A container for the extra information in an extrinsic
 */
export default class ExtrinsicExtraV2 extends Struct {
  public constructor (value?: ExtrinsicExtraValueV2 | Uint8Array) {
    super({
      era: ExtrinsicEra,
      nonce: ClassOf('IndexCompact'),
      tip: ClassOf('BalanceCompact')
    }, value);
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[IndexCompact]] for the signature
   */
  public get nonce (): IndexCompact {
    return this.get('nonce') as IndexCompact;
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return this.get('signer') as Address;
  }

  /**
   * @description The [[BalanceCompact]] tip
   */
  public get tip (): BalanceCompact {
    return this.get('tip') as BalanceCompact;
  }
}
