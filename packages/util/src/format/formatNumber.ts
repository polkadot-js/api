// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Compact } from './types';

import BN from 'bn.js';

import bnToBn from '../bn/toBn';
import formatDecimal from './formatDecimal';

export default function formatNumber (_value?: Compact | BN | number | null): string {
  if (!_value) {
    return '0';
  }

  const value = (_value as any).toBn
    ? (_value as Compact).toBn()
    : bnToBn(_value as BN);

  return formatDecimal(value.toString());
}
