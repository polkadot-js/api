// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Types } from '@polkadot/params/types';

import addressEncode from '@polkadot/util-keyring/address/encode';
import bnDecode from '@polkadot/primitives-json/bn/decode';
import bytesDecode from '@polkadot/primitives-json/bytes/decode';
import headerDecode from '@polkadot/primitives-json/header/decode';
import isNull from '@polkadot/util/is/null';
import isUndefined from '@polkadot/util/is/undefined';

import format from './format';

const formatters = {
  // publicKey -> address
  'AccountId': addressEncode,
  'BlockNumber': bnDecode,
  'Bytes': bytesDecode,
  'Header': headerDecode,
  'u64': bnDecode
};

export default function formatOutput (type: Param$Types, value?: any): ?any {
  if (isUndefined(value) || isNull(value)) {
    return value;
  }

  return format(formatters, [type], [value])[0];
}
