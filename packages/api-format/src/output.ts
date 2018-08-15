// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Types } from '@polkadot/params/types';
import { FormatterFunction } from './types';

import addressEncode from '@polkadot/util-keyring/address/encode';
import bnDecode from '@polkadot/primitives/json/bn/decode';
import bytesDecode from '@polkadot/primitives/json/bytes/decode';
import hashDecode from '@polkadot/primitives/json/hash/decode';
import headerDecode from '@polkadot/primitives/json/header/decode';
import blockDecode from '@polkadot/primitives/json/block/decode';
import isNull from '@polkadot/util/is/null';
import isUndefined from '@polkadot/util/is/undefined';

import format from './format';

const formatters = new Map<Param$Types, FormatterFunction>([
  // publicKey -> address
  ['AccountId', addressEncode],
  ['BlockNumber', bnDecode],
  ['Bytes', bytesDecode],
  ['Hash', hashDecode],
  ['Header', headerDecode],
  ['SignedBlock', blockDecode],
  ['u64', bnDecode]
]);

export default function formatOutput (type: Param$Types, value?: any): any | null {
  if (isUndefined(value) || isNull(value)) {
    return value;
  }

  return format(formatters, [type], [value])[0];
}
