// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import U32 from './U32';

// Parts per million (See also Perbill)
//
// TODO We need to think about the toNumber() and toString() here, so we
// want to multiply by 1_000_000 for those purposes?
export default class Permill extends U32 {
}
