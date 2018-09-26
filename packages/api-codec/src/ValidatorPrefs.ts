// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import Struct from './codec/Struct';
import UInt from './codec/UInt';
import Balance from './Balance';
import U32 from './U32';

type ValidatorPrefsStruct = {
  unstakeThreshold?: UInt | BN | number,
  validatorPayment?: UInt | BN | number
};

export default class ValidatorPrefs extends Struct {
  constructor (value: ValidatorPrefsStruct = {}) {
    super({
      unstakeThreshold: U32,
      validatorPayment: Balance
    }, value);
  }

  get unstakeThreshold (): U32 {
    return this.raw.unstakeThreshold as U32;
  }

  get validatorPayment (): Balance {
    return this.raw.validatorPayment as Balance;
  }
}
