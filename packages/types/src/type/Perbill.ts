// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U32 from '../primitive/U32';

/**
 * @name Perbill
 * @description
 * Parts per billion (see also [[Permill]])
 */
// TODO We need to think about the toNumber() and toString() here, so we
// want to multiply by 1_000_000_000 for those purposes?
export default class Perbill extends U32 {
}
