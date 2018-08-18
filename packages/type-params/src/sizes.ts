// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import sizes, { SizeType } from '@polkadot/primitives/sizes';
import { EncodingVersions } from './types';

const Balance: Map<EncodingVersions, SizeType> = new Map([
  ['latest' as EncodingVersions, sizes.Balance],
  ['poc-1' as EncodingVersions, 64 as SizeType]
]);

const AccountIndex: Map<EncodingVersions, SizeType> = new Map([
  ['latest' as EncodingVersions, sizes.AccountIndex],
  ['poc-1' as EncodingVersions, 64 as SizeType]
]);

const InputNumber: Map<EncodingVersions, SizeType> = new Map([
  ['latest' as EncodingVersions, sizes.InputNumber],
  ['poc-1' as EncodingVersions, 64 as SizeType]
]);

export default {
  AccountIndex,
  Balance,
  InputNumber
};
