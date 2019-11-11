// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U32 from './U32';

/**
 * @name USize
 * @description
 * A System default unsigned number, typically used in RPC to report non-consensus
 * data. It is a wrapper for [[U32]] as a WASM default (as generated by Rust bindings).
 * It is not to be used, since it created consensus mismatches.
 */
export default class USize extends U32 {
  constructor (value?: any) {
    super(value);

    throw new Error('The `usize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally u64) and WASM (always u32) code. Use one of the `u32` or `u64` types explicitly.');
  }
}
