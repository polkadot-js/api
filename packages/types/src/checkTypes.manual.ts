// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId } from './interfaces';
import type { u32 } from './primitive';
import type { Registry } from './types/registry';

import { assert } from '@polkadot/util';

import { TypeRegistry } from './create';

function registryCheck (registry: Registry): void {
  // Should be AccountId
  const aa = registry.createType('AccountId');

  assert(aa.isAscii, 'All ok');

  // Should be Codec
  const bb = registry.createType('Something');

  assert(bb.toHuman(), 'All ok');

  // Should be u32
  const cc = registry.createType('Something' as 'u32');

  assert(cc.divn(123), 'All ok');

  // Should be u32
  const dd = registry.createType<u32>('Something');

  assert(dd.divn(123), 'All ok');

  // Should be Vec<Option<Compact<u32>>>
  const ee = registry.createType('Vec<Option<Compact<u32>>>');
  // Option<Bytes>
  const vb = registry.createType('Option<Vec<u8>>');

  assert(ee[0].unwrap().unwrap().divn(123) && vb.unwrap().bitLength(), 'All ok');

  // Should be an override for nested detection
  const ff = registry.createType<AccountId>('Option<u32>');

  assert(ff.isAscii, 'All ok');

  // Should end up as Raw
  const gg = registry.createType('[u8;678]');

  assert(gg.bitLength, 'All ok');

  // Should end up as VecFixed<u128>
  const hh = registry.createType('[u128; 32]');

  assert(hh[0].bitLength(), 'All ok');

  // tuple! ITuple<[u32, Compact<u64>, u128, Codec]>
  const tt1 = registry.createType('(u32, Compact<u64>,u128, Something)');
  // unwraps into a u32
  const tt2 = registry.createType('(u32)');
  // max number of params
  const tt3 = registry.createType('(u8,u16,u32,u64,u128)');
  // lots and lots of params
  const tt4 = registry.createType('(u8,u16,u32,u64,u8,u16,u32,u64,u8,u16,u32,u64,u8,u16,u32,u64)');

  assert(tt1[2].bitLength() && tt2.bitLength() && tt3[4].bitLength() && tt4[3].bitLength(), 'All ok');
}

registryCheck(new TypeRegistry());
