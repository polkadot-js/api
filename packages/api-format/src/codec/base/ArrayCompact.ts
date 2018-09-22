// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import LengthCompact from './LengthCompact';
import BaseArray from './Array';

export default class BaseArrayCompact extends BaseArray {
  constructor (Value: { new(): Base<any> }, value: Array<Base<any>> = [] as Array<Base<any>>) {
    super(Value, value, LengthCompact);
  }
}
