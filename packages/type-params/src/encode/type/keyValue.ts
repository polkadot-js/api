// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { KeyValue } from '../../types';

import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';

// NOTE reverse of ../../decode/value/keyValue

export default function keyValue ({ key, value }: KeyValue): Uint8Array {
  return u8aConcat(
    bnToU8a(key.length, 32, true),
    key,
    bnToU8a(value.length, 32, true),
    value
  );
}
