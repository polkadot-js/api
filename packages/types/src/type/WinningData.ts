// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Tuple from '../codec/Tuple';
import VectorFixed from '../codec/VectorFixed';
import AccountId from '../primitive/AccountId';
import { BalanceOf } from './Balance';
import { ParaIdOf } from './ParaId';

const SLOT_RANGE_COUNT = 10;

export class WinningDataEntry extends Tuple {
  constructor (value?: any) {
    super([AccountId, ParaIdOf, BalanceOf], value);
  }
}
/**
 * @name WinningData
 * @description
 * Winning data type. This encodes the top bidders of each range together with their bid.
 */
export default class WinningData extends VectorFixed.with(WinningDataEntry, SLOT_RANGE_COUNT) {
}
