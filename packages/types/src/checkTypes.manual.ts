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
const oo8 = registry.createType<ITuple<[Bytes, u32]>>('Something');

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

assert(ee[0].unwrap().unwrap().divn(123) && vb.unwrap().bitLength(), 'All ok');

// Should end up as Raw
const gg = registry.createType('[ u8   ;678]');

assert(gg.bitLength, 'All ok');

// Should end up as VecFixed<u128>
const hh = registry.createType('[u128; 32]');

assert(hh[0].bitLength(), 'All ok');

// tuple! ITuple<[u32, Compact<u64>, u128, Codec]>
const tt1 = registry.createType('(u32, Compact< u64 >,u128, Something)');
// unwraps into a u32
const tt2 = registry.createType('( u32  )');
// max number of params
const tt3 = registry.createType('(u8,u16,u32,u64,u128)');
// lots and lots of params
const tt4 = registry.createType('(u8,u16,u32,u64,u8,u16,u32,u64,u8,u16,u32,u64,u8,u16,u32,u64)');
// empty
const tt5 = registry.createType('()');

assert(tt1[2].bitLength() && tt2.bitLength() && tt3[4].bitLength() && tt4[3].bitLength() && tt5.isEmpty, 'All ok');
