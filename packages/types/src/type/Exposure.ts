// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import Vector from '../codec/Vector';
import Balance from '../primitive/Balance';
import IndividualExposure from './IndividualExposure';

/**
 * @name Exposure
 * @description
 * A snapshot of the stake backing a single validator in the system
 */
export default class Exposure extends Struct {
  public constructor (value?: any) {
    super({
      total: Compact.with(Balance),
      own: Compact.with(Balance),
      others: Vector.with(IndividualExposure)
    }, value);
  }

  /**
   * @description The validator's own stash that is exposed
   */
  public get own (): Balance {
    return (this.get('own') as Compact<Balance>).unwrap();
  }

  /**
   * @description The total balance backing this validator
   */
  public get total (): Balance {
    return (this.get('total') as Compact<Balance>).unwrap();
  }

  /**
   * @description The portions of nominators stashes that are exposed
   */
  public get others (): Vector<IndividualExposure> {
    return this.get('others') as Vector<IndividualExposure>;
  }
}
