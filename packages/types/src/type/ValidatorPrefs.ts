// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../types';

import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import Balance from '../primitive/Balance';
import U32 from '../primitive/U32';

interface ValidatorPrefsValue {
  unstakeThreshold?: AnyNumber;
  validatorPayment?: AnyNumber;
}

/**
 * @name ValidatorPrefs
 * @description
 * Validator preferences
 */
export default class ValidatorPrefs extends Struct {
  public constructor (value?: ValidatorPrefsValue | Uint8Array) {
    super({
      unstakeThreshold: Compact.with(U32),
      validatorPayment: Compact.with(Balance)
    }, value);
  }

  /**
   * @description The unstake threshold as [[U32]]
   */
  public get unstakeThreshold (): Compact<U32> {
    return this.get('unstakeThreshold') as Compact<U32>;
  }

  /**
   * @description The payment config for the validator as a [[Compact]] [[Balance]]
   */
  public get validatorPayment (): Compact<Balance> {
    return this.get('validatorPayment') as Compact<Balance>;
  }
}
