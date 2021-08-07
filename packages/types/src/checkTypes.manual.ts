// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact, Option } from './codec';
import type { AccountId, BlockAttestations, SessionKeys7 } from './interfaces';
import type { Bytes, u32 } from './primitive';
import type { IOption, ITuple } from './types';

import { assert } from '@polkadot/util';

import { TypeRegistry } from './create';

const registry = new TypeRegistry();

// something that uses overrides
const oo0 = registry.createType('Something' as 'u32');
const oo1 = registry.createType<BlockAttestations>('u32');
const oo2 = registry.createType<SessionKeys7>('u32');
const oo3 = registry.createType<u32>('Something');
const oo4 = registry.createType<AccountId>('Option<u32>');
const oo5 = registry.createType<IOption<u32>>('u32');
const oo6 = registry.createType<Option<Compact<u32>>>('u32');
const oo7 = registry.createType<Bytes>('u64');
const oo8 = registry.createType<ITuple<[Bytes, u32]>>('(u32)');

assert(oo0.divn(123) && [...oo1.values()] && oo2[6].isAscii && oo3.divn(3) && oo4.isAscii && oo5.unwrap().divn(1) && oo6.unwrap().unwrap().divn(1) && oo7.isAscii && oo8[1].toNumber(), 'All ok');

// There are in the interface registry
const aa0 = registry.createType(' AccountId');
const aa1 = registry.createType('BlockAttestations');
const aa2 = registry.createType('ExtrinsicEra');

assert(aa0.isAscii && aa1.receipt && aa2.isMortalEra, 'All ok');

// Should be Codec, we don't know this one
const bb = registry.createType('Something');

assert(bb.toHuman(), 'All ok');

// Should be Vec<Option<Compact<ReferendumIndex>>>
const ee = registry.createType('Vec<Option<Compact<ReferendumIndex>>>');
// Option<Bytes>
const vb = registry.createType('Option< Vec< u8 > >');
// nested vecs
const vv = registry.createType('Vec< Vec< Vec< Vec<u8>> > >');
// vec with tuple
const vt = registry.createType('Vec<(u8, u16)>');
// nested stuff from all-over
const vn = registry.createType('Vec<(u32, (u32, u64), Vec<u8>, Vec<(u32, u64)>, [u8;32], [u128;32])>');
// some struct stuff
const ss = registry.createType('Vec<Option<{"foo":"Vec<u8>"}>>');

assert(ee[0].unwrap().unwrap().divn(123) && vb.unwrap().bitLength() && vv.toHuman() && vn.toHuman() && vt.toHuman() && ss.toHuman(), 'All ok');

// Should end up as Raw
const gg = registry.createType('[ u8   ;678]');

assert(gg.bitLength, 'All ok');

// Should end up as VecFixed<u128>
const hh = registry.createType('[u128; 32]');

assert(hh[0].bitLength(), 'All ok');

// tuple! ITuple<[u32, Compact<u64>, u128, Codec]>
const tt1 = registry.createType('(u32, Compact< u64 >,    u128  , Something)');
// unwraps into a u32
const tt2 = registry.createType('( u32  )');
// lots and lots of params
const tt4 = registry.createType('(u8,u16,u32,u64,u128,u256,Break,u128,u64,u32)');
// empty
const tt5 = registry.createType('()');
// nested tuples
const tt6 = registry.createType('(u8, (u16, (u32, u64, u32)), (u64, u64))');
// more nested tuples
const tt7 = registry.createType('(((u8, u8), (u8, u8)), u16)');
// nested tuples with a wrapper
const tt8 = registry.createType('(u8, Vec<(u16, u32)>, Option<(u128, u128)>)');
// same example as above
const tt9 = registry.createType('(u32, (u32, u64), Vec<u8>, Vec<(u32, u64)>, [u8;32], [u128;32])');

assert(tt1[2].bitLength() && tt2.bitLength() && tt4[3].bitLength() && tt5.isEmpty && tt6[1].toHuman() && tt7.toHuman() && tt8.toHuman() && tt9.toHuman(), 'All ok');

export function test (K: string, I = ''): [string, string] {
  if (K.startsWith('>')) {
    return [I, K.slice(1)];
  } else if (K.startsWith('Vec<')) {
    const [inner, remain] = test(K.slice(4), `${I}Vec<`);

    return [`${inner}>`, remain.slice(1)];
  }

  return test(K.slice(1), `${I}${K[0]}`);
}
