// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AccountId } from '../../base';
import { JsonAccountId } from '../types';

import hashDecode from '../hash/decode';

export default function accountIdDecode (value: JsonAccountId): AccountId {
  return hashDecode(value, 160);
}
