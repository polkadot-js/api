// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U64 from './U64';

/**
 * @name USize
 * @description
 * A System default unsigned number, typically used in RPC to report non-consensus
 * data. It is a wrapper for [[U64]] as a 64-binary default
 */
export default class USize extends U64 {
}
